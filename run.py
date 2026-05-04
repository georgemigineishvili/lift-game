import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from socket import AF_INET, SOCK_DGRAM, error as SocketError, socket
from urllib.parse import unquote


HOST = "0.0.0.0"
PORT = 8000
MAX_PORT = 8099
ROOT_DIR = Path(__file__).parent
WEBAPP_DIR = ROOT_DIR / "webapp"
DEV_CONFIG_PATH = WEBAPP_DIR / "dev_config.js"


class GameRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT_DIR), **kwargs)

    def end_headers(self):
        path = unquote(self.path).split("?", 1)[0]
        if path.startswith("/assets/"):
            self.send_header("Cache-Control", "public, max-age=31536000")
        else:
            self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
        super().end_headers()

    def translate_path(self, path):
        if unquote(path).split("?", 1)[0] == "/":
            path = "/webapp/index.html"
        return super().translate_path(path)

    def do_POST(self):
        if unquote(self.path).split("?", 1)[0] != "/api/dev-config":
            self.send_error(404, "Not found")
            return

        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length)

        try:
            payload = json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError as exc:
            self.send_error(400, f"Invalid JSON: {exc}")
            return

        DEV_CONFIG_PATH.write_text(
            "window.SUPER_LIFT_PROJECT_CONFIG = "
            + json.dumps(payload, ensure_ascii=False, indent=2)
            + ";\n",
            encoding="utf-8",
        )

        response = b'{"ok":true}\n'
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(response)))
        self.end_headers()
        self.wfile.write(response)


def get_lan_ip():
    try:
        with socket(AF_INET, SOCK_DGRAM) as probe:
            probe.connect(("8.8.8.8", 80))
            return probe.getsockname()[0]
    except OSError:
        return None


def main():
    server = None

    for port in range(PORT, MAX_PORT + 1):
        try:
            server = ThreadingHTTPServer((HOST, port), GameRequestHandler)
            break
        except OSError as exc:
            if exc.errno != 48:
                raise

    if server is None:
        raise SocketError(f"No free port found between {PORT} and {MAX_PORT}.")

    _, port = server.server_address
    lan_ip = get_lan_ip()

    print(f"Game is running locally: http://127.0.0.1:{port}")
    if lan_ip:
        print(f"Open on phone:       http://{lan_ip}:{port}")
    else:
        print("Open on phone: use your Mac Wi-Fi IP with this port.")
    print("Press Ctrl+C to stop.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
