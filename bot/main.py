import asyncio

from aiogram import Bot, Dispatcher, Router
from aiogram.filters import Command
from aiogram.types import (
    Message,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    WebAppInfo,
)

from config import BOT_TOKEN, WEBAPP_URL

router = Router()


@router.message(Command("start"))
async def cmd_start(message: Message):
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="Играть 💪",
                    web_app=WebAppInfo(url=WEBAPP_URL),
                )
            ]
        ]
    )

    await message.answer(
        "Привет! Это мини-игра «Жим лёжа» 💪\n\n"
        "Жми «Играть», открывай приложение и тапай, чтобы помочь атлету дожать штангу.\n"
        "Игра сама покажет твою статистику по раундам.",
        reply_markup=kb,
    )


async def main():
    bot = Bot(BOT_TOKEN)
    dp = Dispatcher()
    dp.include_router(router)
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
