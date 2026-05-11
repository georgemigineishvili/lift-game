// === Ручные настройки прототипа ===
// Все значения позиций указаны в пикселях внутри сцены.
// poses - настройки каждого кадра героя.
// Внутри каждой позы отдельно настраиваются body и head.
// body.x/body.y и head.x/head.y - координаты центра картинки на сцене.
// Голова должна накладываться на тело, поэтому ее можно свободно двигать поверх тела.
// zIndex управляет слоями: чем больше число, тем выше картинка.
// object.zIndex можно менять по уровню, если объект должен быть за телом или поверх тела.
// objectByPose можно править отдельно для каждого уровня и каждой позы героя.
// Если objectByPose для позы не задан, позиция объекта берется дискретно между contactY и liftedY.
// Важно: объект НЕ двигается от каждого тапа, он меняет позицию только при смене позы героя.
// flyAwayMs - скорость победного отлета объекта. Чем меньше число, тем быстрее.
// Для теста 220-320 обычно выглядит как быстрый, но видимый полет.
// flyAwayY - точка улета за верх сцены. Обычно лучше держать далеко выше экрана, например -900.

const GAME_CONFIG = {
    levelTimeMs: 6500,
    nextLevelDelayMs: 450,
    devView: {
        backgroundSrc: "../assets/places/place-city.PNG",
        showBackground: true,
        showGrid: true,
        x: 195,
        y: 260,
        width: 390,
        rotation: 0,
        zIndex: 0,
    },
    devShake: {
        enabled: true,
        distance: 1.6,
        speed: 13,
    },
    devFloat: {
        enabled: true,
        distance: 6,
        speed: 0.55,
        shadowSpread: 14,
    },
    devDemo: {
        tapsRequired: 0,
    },
    devPoseCombo: {
        enabled: true,
        pose2To3Ms: 220,
    },
    heroShadow: {
        src: "../assets/bodymove/shadow-hero.png",
        width: 126,
        x: 195,
        y: 409,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        zIndex: 12,
    },
    stage: {
        width: 390,
        height: 520,
        heroGroundY: 405,
    },
    poses: {
        "0": {
            body: { src: "../assets/bodymove/body-standart-0.png", width: 130, x: 196, y: 323, rotation: 0, zIndex: 20 },
            head: { width: 46, x: 195, y: 284, rotation: 0, zIndex: 40 },
        },
        "0.5": {
            body: { src: "../assets/bodymove/body-push-down-0.5.png", width: 138, x: 196, y: 323, rotation: 0, zIndex: 20 },
            head: { width: 46, x: 195, y: 283, rotation: 0, zIndex: 40 },
        },
        "1": {
            body: { src: "../assets/bodymove/body-push-middle-1.png", width: 138, x: 196, y: 323, rotation: 0, zIndex: 20 },
            head: { width: 48, x: 195, y: 275, rotation: 0, zIndex: 40 },
        },
        "2": {
            body: { src: "../assets/bodymove/body-push-up-2.png", width: 138, x: 196, y: 323, rotation: 0, zIndex: 20 },
            head: { width: 48, x: 195, y: 260, rotation: 0, zIndex: 40 },
        },
        "3": {
            body: { src: "../assets/bodymove/body-push-fly-3.png", width: 126, x: 196, y: 323, rotation: 0, zIndex: 20 },
            head: { width: 46, x: 195, y: 244, rotation: 0, zIndex: 40 },
        },
        "4": {
            body: { src: "../assets/bodymove/body-push-fly-final-4.png", width: 126, x: 195, y: 320, rotation: 0, zIndex: 20 },
            head: { width: 46, x: 195, y: 236, rotation: 0, zIndex: 40 },
        },
        "dead": {
            body: { src: "../assets/bodymove/hero-dead.png", width: 150, x: 195, y: 371, rotation: 0, zIndex: 20 },
            head: null,
        },
    },
    heads: [
        "../assets/heademotion/hero-head-easy-0.png",
        "../assets/heademotion/hero-head-medium-1.png",
        "../assets/heademotion/hero-head-hard-2.png",
        "../assets/heademotion/hero-head-superhard-3.png",
        "../assets/heademotion/hero-head-superhard-4.png",
        "../assets/heademotion/hero-head-final-5.png",
    ],
    liftPoses: ["0.5", "1", "2", "3"],
    levels: [
        {
            title: "Холодильник",
            src: "../assets/levels/level-1-fridge.png",
            tapsRequired: 10,
            fallMs: 420,
            flyAwayMs: 280,
            object: { width: 188, rotation: -4, zIndex: 30, startX: 195, startY: -110, contactX: 195, contactY: 248, liftedY: 138, flyAwayY: -900 },
            objectByPose: {
                "0.5": { x: 195, y: 254, rotation: 11, zIndex: 30 },
                "1": { x: 195, y: 220, rotation: -4, zIndex: 30 },
                "2": { x: 195, y: 193, rotation: -4, zIndex: 30 },
                "3": { x: 195, y: 165, rotation: -4, zIndex: 30 },
                "4": { x: 195, y: 138, rotation: -4, zIndex: 30 },
                "dead": { x: 195, y: 254, rotation: 11, zIndex: 10 },
            },
        },
        {
            title: "Машина",
            src: "../assets/levels/level-2-car.png",
            tapsRequired: 12,
            fallMs: 420,
            flyAwayMs: 280,
            object: { width: 245, rotation: 2, zIndex: 30, startX: 195, startY: -110, contactX: 195, contactY: 238, liftedY: 128, flyAwayY: -900 },
            objectByPose: {},
        },
        {
            title: "Морская рыба",
            src: "../assets/levels/level-3-fishsea.png",
            tapsRequired: 14,
            fallMs: 390,
            flyAwayMs: 260,
            object: { width: 204, rotation: -8, zIndex: 30, startX: 195, startY: -130, contactX: 195, contactY: 230, liftedY: 118, flyAwayY: -900 },
            objectByPose: {},
        },
        {
            title: "Лодка",
            src: "../assets/levels/level-4-lodka.png",
            tapsRequired: 15,
            fallMs: 390,
            flyAwayMs: 260,
            object: { width: 285, rotation: -2, zIndex: 30, startX: 195, startY: -120, contactX: 195, contactY: 226, liftedY: 112, flyAwayY: -900 },
            objectByPose: {},
        },
        {
            title: "Пушкин",
            src: "../assets/levels/level-5-pushkin.png",
            tapsRequired: 17,
            fallMs: 370,
            flyAwayMs: 240,
            object: { width: 128, rotation: 0, zIndex: 30, startX: 195, startY: -150, contactX: 195, contactY: 208, liftedY: 92, flyAwayY: -900 },
            objectByPose: {},
        },
        {
            title: "НЛО",
            src: "../assets/levels/level-6-ufoship.png",
            tapsRequired: 18,
            fallMs: 360,
            flyAwayMs: 240,
            object: { width: 275, rotation: 4, zIndex: 30, startX: 195, startY: -130, contactX: 195, contactY: 222, liftedY: 105, flyAwayY: -900 },
            objectByPose: {},
        },
        {
            title: "Сосиска",
            src: "../assets/levels/level-7-sosiska.png",
            tapsRequired: 20,
            fallMs: 350,
            flyAwayMs: 230,
            object: { width: 275, rotation: -7, zIndex: 30, startX: 195, startY: -130, contactX: 195, contactY: 222, liftedY: 105, flyAwayY: -900 },
            objectByPose: {},
        },
        {
            title: "Метеорит",
            src: "../assets/levels/level-8-meteorit.png",
            tapsRequired: 22,
            fallMs: 330,
            flyAwayMs: 220,
            object: { width: 215, rotation: -9, zIndex: 30, startX: 195, startY: -140, contactX: 195, contactY: 218, liftedY: 92, flyAwayY: -900 },
            objectByPose: {},
        },
    ],
};

const DEV_STORAGE_KEY = "super-lift-dev-config-v1";
applyProjectDevConfig();
applySavedDevConfig();

const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
    tg.ready();
    tg.expand();
}

let levelIndex = 0;
let taps = 0;
let timeLeft = 0;
let timerId = null;
let gameState = "idle";
let sessionBestLevel = 0;
let sessionBestTime = 0;
let currentPose = "0";
let activeAnimationId = 0;
let assetsPreloadPromise = null;
let currentLiftPose = null;
let currentHeadEmotionIndex = -1;
let activeBodyPoseEl = null;
let activeObjectLevelEl = null;
const bodyPoseEls = {};
const objectLevelEls = {};

const menuScreen = document.getElementById("menu-screen");
const loadingScreen = document.getElementById("loading-screen");
const rulesScreen = document.getElementById("rules-screen");
const gameScreen = document.getElementById("game-screen");
const statsScreen = document.getElementById("stats-screen");
const finalScreen = document.getElementById("final-screen");
const devScreen = document.getElementById("dev-screen");

const levelTitleEl = document.getElementById("level-title");
const stageEl = document.getElementById("stage");
const loadingMessageEl = document.getElementById("loading-message");
const progressTextEl = document.getElementById("progress-text");
const tapBtn = document.getElementById("tap-btn");
const heroBodyImg = document.getElementById("hero-body-img");
const heroHeadImg = document.getElementById("hero-head-img");
const levelObjectImg = document.getElementById("level-object-img");
const devBackgroundImg = document.getElementById("dev-background-img");
const devShadowImg = document.getElementById("dev-shadow-img");
const devBodyImg = document.getElementById("dev-body-img");
const devHeadImg = document.getElementById("dev-head-img");
const devObjectImg = document.getElementById("dev-object-img");

const loseOverlay = document.getElementById("lose-overlay");
const loseMessageEl = document.getElementById("lose-message");
const loseRetryBtn = document.getElementById("lose-retry-btn");
const loseMenuBtn = document.getElementById("lose-menu-btn");

const menuPlayBtn = document.getElementById("menu-play-btn");
const menuDevBtn = document.getElementById("menu-dev-btn");
const menuStatsBtn = document.getElementById("menu-stats-btn");
const rulesContinueBtn = document.getElementById("rules-continue-btn");
const statsBackBtn = document.getElementById("stats-back-btn");
const finalRetryBtn = document.getElementById("final-retry-btn");
const finalMenuBtn = document.getElementById("final-menu-btn");
const gameMenuBtn = document.getElementById("game-menu-btn");
const devBackBtn = document.getElementById("dev-back-btn");
const devPoseSelect = document.getElementById("dev-pose-select");
const devEmotionSelect = document.getElementById("dev-emotion-select");
const devLevelSelect = document.getElementById("dev-level-select");
const devTargetSelect = document.getElementById("dev-target-select");
const devStepInput = document.getElementById("dev-step-input");
const devValuesEl = document.getElementById("dev-values");
const devSaveBtn = document.getElementById("dev-save-btn");
const devSaveProjectBtn = document.getElementById("dev-save-project-btn");
const devImportBtn = document.getElementById("dev-import-btn");
const devResetBtn = document.getElementById("dev-reset-btn");
const devExportEl = document.getElementById("dev-export");
const devModeSelect = document.getElementById("dev-mode-select");
const devBgToggleBtn = document.getElementById("dev-bg-toggle-btn");
const devGridToggleBtn = document.getElementById("dev-grid-toggle-btn");
const devFitControls = document.getElementById("dev-fit-controls");
const devIntroControls = document.getElementById("dev-intro-controls");
const devDemoControls = document.getElementById("dev-demo-controls");
const devCameraLayer = document.getElementById("dev-camera-layer");
const devIntroFallMsInput = document.getElementById("dev-intro-fall-ms");
const devIntroPoseDelayMsInput = document.getElementById("dev-intro-pose-delay-ms");
const devIntroPoseLeadMsInput = document.getElementById("dev-intro-pose-lead-ms");
const devIntroStartDelayMsInput = document.getElementById("dev-intro-start-delay-ms");
const devIntroStopStepInput = document.getElementById("dev-intro-stop-step");
const devIntroZoomScaleInput = document.getElementById("dev-intro-zoom-scale");
const devIntroZoomMsInput = document.getElementById("dev-intro-zoom-ms");
const devIntroZoomDelayMsInput = document.getElementById("dev-intro-zoom-delay-ms");
const devIntroZoomStartSelect = document.getElementById("dev-intro-zoom-start");
const devIntroZoomXInput = document.getElementById("dev-intro-zoom-x");
const devIntroZoomYInput = document.getElementById("dev-intro-zoom-y");
const devIntroSignalEl = document.getElementById("dev-intro-signal");
const devDemoTapBtn = document.getElementById("dev-demo-tap-btn");
const devZoomToCatchBtn = document.getElementById("dev-zoom-to-catch-btn");
const devShakeDistanceInput = document.getElementById("dev-shake-distance");
const devShakeSpeedInput = document.getElementById("dev-shake-speed");
const devDemoTapsRequiredInput = document.getElementById("dev-demo-taps-required");
const devFloatDistanceInput = document.getElementById("dev-float-distance");
const devFloatSpeedInput = document.getElementById("dev-float-speed");
const devFloatShadowSpreadInput = document.getElementById("dev-float-shadow-spread");
const devPose23MsInput = document.getElementById("dev-pose23-ms");

let devInitialized = false;
let devModeTab = "fit";
let activeDevIntroAnimationId = 0;
let devDemoState = "idle";
let devDemoTaps = 0;
let devDemoLiftPose = null;
let devDemoTimerId = null;
let devDemoStartedAt = 0;
let devShakeAnimationId = 0;
let devShakeFrameId = null;
let devFloatAnimationId = 0;
let devFloatFrameId = null;
let devDemoPoseTimerId = null;
let devDemoPose3LiftProgress = 0;
let devCameraScale = 1;

function showScreen(screen) {
    const all = [loadingScreen, menuScreen, rulesScreen, gameScreen, statsScreen, finalScreen, devScreen];
    all.forEach((s) => s.classList.add("hidden"));
    screen.classList.remove("hidden");
}

function showLoading(message = "Загрузка ассетов...") {
    loadingMessageEl.textContent = message;
    showScreen(loadingScreen);
}

function deepMerge(target, source) {
    Object.entries(source || {}).forEach(([key, value]) => {
        if (Array.isArray(value) && Array.isArray(target[key])) {
            value.forEach((item, index) => {
                if (item && typeof item === "object" && target[key][index]) {
                    deepMerge(target[key][index], item);
                } else {
                    target[key][index] = item;
                }
            });
            return;
        }

        if (value && typeof value === "object" && !Array.isArray(value)) {
            if (!target[key] || typeof target[key] !== "object" || Array.isArray(target[key])) {
                target[key] = {};
            }
            deepMerge(target[key], value);
            return;
        }
        target[key] = value;
    });
}

function applySavedDevConfig() {
    const raw = localStorage.getItem(DEV_STORAGE_KEY);
    if (!raw) return;

    try {
        deepMerge(GAME_CONFIG, JSON.parse(raw));
    } catch (error) {
        console.warn("Dev config was not loaded:", error);
    }
}

function applyProjectDevConfig() {
    if (!window.SUPER_LIFT_PROJECT_CONFIG) return;
    deepMerge(GAME_CONFIG, window.SUPER_LIFT_PROJECT_CONFIG);
}

function getSerializableDevConfig() {
    return {
        devView: GAME_CONFIG.devView,
        devShake: GAME_CONFIG.devShake,
        devFloat: GAME_CONFIG.devFloat,
        devDemo: GAME_CONFIG.devDemo,
        devPoseCombo: GAME_CONFIG.devPoseCombo,
        poses: GAME_CONFIG.poses,
        levels: GAME_CONFIG.levels,
    };
}

function getLevelIntroSettings(level) {
    if (!level.intro) {
        level.intro = {
            fallMs: level.fallMs || 420,
            poseSwitchDelayMs: 0,
            poseLeadMs: 70,
            startSignalDelayMs: 180,
            zoomScale: 1.22,
            zoomMs: 240,
            zoomDelayMs: 0,
            zoomStart: "contact",
            zoomX: 195,
            zoomY: 255,
        };
    }

    level.intro.zoomScale = level.intro.zoomScale || 1.22;
    level.intro.poseLeadMs = level.intro.poseLeadMs ?? 70;
    level.intro.zoomStart = level.intro.zoomStart || "contact";
    level.intro.zoomMs = level.intro.zoomMs ?? 240;
    level.intro.zoomDelayMs = level.intro.zoomDelayMs ?? 0;
    level.intro.zoomX = level.intro.zoomX ?? 195;
    level.intro.zoomY = level.intro.zoomY ?? 255;
    return level.intro;
}

function collectAssetUrls() {
    const urls = new Set([...GAME_CONFIG.heads, GAME_CONFIG.heroShadow?.src].filter(Boolean));

    Object.values(GAME_CONFIG.poses).forEach((pose) => {
        if (pose.body?.src) urls.add(pose.body.src);
    });

    GAME_CONFIG.levels.forEach((level) => {
        if (level.src) urls.add(level.src);
    });

    if (GAME_CONFIG.devView?.backgroundSrc) {
        urls.add(GAME_CONFIG.devView.backgroundSrc);
    }

    return [...urls];
}

function preloadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = async () => {
            if (img.decode) {
                try {
                    await img.decode();
                } catch (error) {
                    // The image is still usable if decode races with onload in some browsers.
                }
            }
            resolve();
        };
        img.onerror = resolve;
        img.src = url;
    });
}

function preloadAssets() {
    if (!assetsPreloadPromise) {
        assetsPreloadPromise = Promise.all(collectAssetUrls().map(preloadImage));
    }
    return assetsPreloadPromise;
}

function currentLevel() {
    return GAME_CONFIG.levels[levelIndex];
}

function getObjectPoseSettings(level, pose) {
    const base = level.object;
    const normalizedPose = pose === "dead" ? "0.5" : pose;
    const poseIndex = Math.max(0, GAME_CONFIG.liftPoses.indexOf(normalizedPose));
    const maxPoseIndex = Math.max(1, GAME_CONFIG.liftPoses.length - 1);
    const poseProgress = poseIndex / maxPoseIndex;
    const defaultPose = {
        x: base.contactX,
        y: base.contactY + (base.liftedY - base.contactY) * poseProgress,
        zIndex: pose === "dead" ? 10 : base.zIndex,
    };

    const poseSettings = { ...(level.objectByPose?.[pose] || {}) };
    delete poseSettings.width;

    return {
        ...base,
        ...defaultPose,
        ...poseSettings,
        width: base.width,
    };
}

function getShadowPoseSettings(level, pose) {
    const base = GAME_CONFIG.heroShadow;
    return {
        ...base,
        ...(level.shadowByPose?.[pose] || {}),
    };
}

function ensureShadowPoseSettings(level, pose) {
    if (!level.shadowByPose) level.shadowByPose = {};
    if (!level.shadowByPose[pose]) {
        const settings = getShadowPoseSettings(level, pose);
        level.shadowByPose[pose] = {
            width: settings.width,
            x: settings.x,
            y: settings.y,
            scaleX: settings.scaleX ?? 1,
            scaleY: settings.scaleY ?? 1,
            rotation: settings.rotation || 0,
            zIndex: settings.zIndex ?? 12,
        };
    }
    return level.shadowByPose[pose];
}

function getHeroShadeSettings(level, pose) {
    return {
        opacity: 0,
        ...(level.heroShadeByPose?.[pose] || {}),
    };
}

function ensureHeroShadeSettings(level, pose) {
    if (!level.heroShadeByPose) level.heroShadeByPose = {};
    if (!level.heroShadeByPose[pose]) {
        level.heroShadeByPose[pose] = { opacity: getHeroShadeSettings(level, pose).opacity };
    }
    return level.heroShadeByPose[pose];
}

function applyDevShadow(level, pose) {
    const settings = getDevShadowLayerSettings(level, pose);
    applyDevShadowSettings(settings);
}

function applyDevShadowSettings(settings) {
    devShadowImg.classList.remove("hidden");
    setImageSrc(devShadowImg, GAME_CONFIG.heroShadow.src);
    applyImageTransform(devShadowImg, settings);
}

function applyHeroShade(level, pose) {
    const opacity = getDevHeroShadeOpacity(level, pose);
    applyHeroShadeOpacity(opacity);
}

function applyHeroShadeOpacity(opacity) {
    const safeOpacity = Math.max(0, Math.min(0.85, opacity || 0));
    const filter = safeOpacity > 0 ? `brightness(${1 - safeOpacity})` : "";
    devBodyImg.style.filter = filter;
    devHeadImg.style.filter = filter;
}

function lerpValue(start, end, progress) {
    return start + (end - start) * progress;
}

function interpolateLayerSettings(start, end, progress) {
    return {
        width: lerpValue(start.width, end.width, progress),
        x: lerpValue(start.x, end.x, progress),
        y: lerpValue(start.y, end.y, progress),
        scaleX: lerpValue(start.scaleX ?? 1, end.scaleX ?? 1, progress),
        scaleY: lerpValue(start.scaleY ?? 1, end.scaleY ?? 1, progress),
        rotation: lerpValue(start.rotation || 0, end.rotation || 0, progress),
        zIndex: end.zIndex ?? start.zIndex,
    };
}

function shouldApplyDevPose3Lift(pose) {
    return devModeTab === "demo" && devDemoState === "running" && pose === "3" && devDemoPose3LiftProgress > 0;
}

function getDevHeroLayerSettings(pose) {
    const poseSettings = GAME_CONFIG.poses[pose];
    if (!poseSettings || !shouldApplyDevPose3Lift(pose)) return poseSettings;

    const finalPose = GAME_CONFIG.poses["4"];
    const liftY = (finalPose.body.y - poseSettings.body.y) * devDemoPose3LiftProgress;
    return {
        body: {
            ...interpolateLayerSettings(poseSettings.body, finalPose.body, devDemoPose3LiftProgress),
            y: poseSettings.body.y + liftY,
        },
        head: poseSettings.head && finalPose.head
            ? {
                ...interpolateLayerSettings(poseSettings.head, finalPose.head, devDemoPose3LiftProgress),
                y: poseSettings.head.y + liftY,
            }
            : poseSettings.head,
    };
}

function getDevPose3LiftY() {
    return (GAME_CONFIG.poses["4"].body.y - GAME_CONFIG.poses["3"].body.y) * devDemoPose3LiftProgress;
}

function getDevShadowLayerSettings(level, pose) {
    if (!shouldApplyDevPose3Lift(pose)) return getShadowPoseSettings(level, pose);

    return interpolateLayerSettings(
        getShadowPoseSettings(level, "3"),
        getShadowPoseSettings(level, "4"),
        devDemoPose3LiftProgress
    );
}

function getDevHeroShadeOpacity(level, pose) {
    if (!shouldApplyDevPose3Lift(pose)) {
        return getHeroShadeSettings(level, pose).opacity || 0;
    }

    return lerpValue(
        getHeroShadeSettings(level, "3").opacity || 0,
        getHeroShadeSettings(level, "4").opacity || 0,
        devDemoPose3LiftProgress
    );
}

function applyImageTransform(el, settings) {
    el.style.width = `${settings.width}px`;
    el.style.left = `${settings.x}px`;
    el.style.top = `${settings.y}px`;
    el.style.transform = `translate(-50%, -50%) scale(${settings.scaleX ?? 1}, ${settings.scaleY ?? 1}) rotate(${settings.rotation || 0}deg)`;
    if (settings.zIndex !== undefined) {
        el.style.zIndex = settings.zIndex;
    }
}

function setImageSrc(el, src) {
    if (el.dataset.src === src) return;
    el.dataset.src = src;
    el.src = src;
}

function showLevelObject() {
    const el = getObjectLevelEl(levelIndex);
    if (el) el.classList.remove("hidden");
}

function hideLevelObject() {
    if (activeObjectLevelEl) activeObjectLevelEl.classList.add("hidden");
}

function getBodyPoseEl(pose) {
    if (bodyPoseEls[pose]) return bodyPoseEls[pose];

    const poseSettings = GAME_CONFIG.poses[pose];
    if (!poseSettings?.body) return null;

    const el = document.createElement("img");
    el.className = "sprite hidden";
    el.alt = "";
    el.dataset.pose = pose;
    setImageSrc(el, poseSettings.body.src);
    heroBodyImg.parentElement.insertBefore(el, heroHeadImg);
    bodyPoseEls[pose] = el;
    return el;
}

function initBodyPoseLayers() {
    heroBodyImg.classList.add("hidden");
    Object.keys(GAME_CONFIG.poses).forEach(getBodyPoseEl);
}

function getObjectLevelEl(index) {
    if (objectLevelEls[index]) return objectLevelEls[index];

    const level = GAME_CONFIG.levels[index];
    if (!level) return null;

    const el = document.createElement("img");
    el.className = "sprite hidden";
    el.alt = "";
    el.dataset.level = String(index);
    setImageSrc(el, level.src);
    levelObjectImg.parentElement.insertBefore(el, heroBodyImg);
    objectLevelEls[index] = el;
    return el;
}

function initObjectLevelLayers() {
    levelObjectImg.classList.add("hidden");
    GAME_CONFIG.levels.forEach((_, index) => getObjectLevelEl(index));
}

function setActiveLevelObject() {
    const objectEl = getObjectLevelEl(levelIndex);
    if (!objectEl) return null;

    if (activeObjectLevelEl && activeObjectLevelEl !== objectEl) {
        activeObjectLevelEl.classList.add("hidden");
    }

    objectEl.classList.remove("hidden");
    activeObjectLevelEl = objectEl;
    return objectEl;
}

function setHeroPose(pose) {
    currentPose = pose;
    const poseSettings = GAME_CONFIG.poses[pose];
    if (!poseSettings) return;

    const body = poseSettings.body;
    const head = poseSettings.head;
    const bodyEl = getBodyPoseEl(pose);
    if (!bodyEl) return;

    if (activeBodyPoseEl && activeBodyPoseEl !== bodyEl) {
        activeBodyPoseEl.classList.add("hidden");
    }

    bodyEl.classList.remove("hidden");
    activeBodyPoseEl = bodyEl;
    applyImageTransform(bodyEl, {
        width: body.width,
        x: body.x,
        y: body.y,
        rotation: body.rotation,
        zIndex: body.zIndex,
    });

    if (!head) {
        heroHeadImg.classList.add("hidden");
        return;
    }

    heroHeadImg.classList.remove("hidden");
    applyImageTransform(heroHeadImg, {
        width: head.width,
        x: head.x,
        y: head.y,
        rotation: head.rotation || 0,
        zIndex: head.zIndex,
    });
}

function setHeadByTime() {
    const total = GAME_CONFIG.levelTimeMs;
    const elapsed = total - timeLeft;
    const progress = Math.max(0, Math.min(1, elapsed / total));
    const lastGameplayHeadIndex = Math.max(0, GAME_CONFIG.heads.length - 2);
    const index = Math.min(lastGameplayHeadIndex, Math.floor(progress * (lastGameplayHeadIndex + 1)));
    if (index === currentHeadEmotionIndex) return;
    currentHeadEmotionIndex = index;
    setImageSrc(heroHeadImg, GAME_CONFIG.heads[index]);
}

function setHeadFinal() {
    currentHeadEmotionIndex = GAME_CONFIG.heads.length - 1;
    setImageSrc(heroHeadImg, GAME_CONFIG.heads[GAME_CONFIG.heads.length - 1]);
}

function setObjectForPose(pose) {
    const level = currentLevel();
    const settings = getObjectPoseSettings(level, pose);
    const objectEl = setActiveLevelObject();
    if (!objectEl) return;

    applyImageTransform(objectEl, {
        width: settings.width,
        x: settings.x,
        y: settings.y,
        rotation: settings.rotation,
        zIndex: settings.zIndex,
    });
}

function ensureObjectPoseSettings(level, pose) {
    if (!level.objectByPose) level.objectByPose = {};
    if (!level.objectByPose[pose]) {
        const settings = getObjectPoseSettings(level, pose);
        level.objectByPose[pose] = {
            x: settings.x,
            y: settings.y,
            rotation: settings.rotation || 0,
            zIndex: settings.zIndex ?? 30,
        };
    }
    delete level.objectByPose[pose].width;
    return level.objectByPose[pose];
}

function initDevMode() {
    if (devInitialized) return;
    devInitialized = true;

    Object.keys(GAME_CONFIG.poses).forEach((pose) => {
        const option = document.createElement("option");
        option.value = pose;
        option.textContent = pose;
        devPoseSelect.appendChild(option);
    });

    GAME_CONFIG.heads.forEach((_, index) => {
        const option = document.createElement("option");
        option.value = String(index);
        option.textContent = `Эмоция ${index}`;
        devEmotionSelect.appendChild(option);
    });

    GAME_CONFIG.levels.forEach((level, index) => {
        const option = document.createElement("option");
        option.value = String(index);
        option.textContent = `${index + 1}. ${level.title}`;
        devLevelSelect.appendChild(option);
    });

    [devPoseSelect, devEmotionSelect, devLevelSelect, devTargetSelect, devStepInput].forEach((el) => {
        el.addEventListener("change", renderDevMode);
    });

    [
        devIntroFallMsInput,
        devIntroPoseDelayMsInput,
        devIntroPoseLeadMsInput,
        devIntroStartDelayMsInput,
        devIntroZoomScaleInput,
        devIntroZoomMsInput,
        devIntroZoomDelayMsInput,
        devIntroZoomStartSelect,
        devIntroZoomXInput,
        devIntroZoomYInput,
    ].forEach((el) => {
        el.addEventListener("change", () => {
            updateDevIntroSettingsFromInputs();
            renderDevMode();
        });
    });

    [devShakeDistanceInput, devShakeSpeedInput].forEach((el) => {
        el.addEventListener("change", () => {
            updateDevShakeSettingsFromInputs();
            if (devModeTab === "demo" && devDemoState === "running") {
                startDevShake();
                devValuesEl.textContent = `${devValuesEl.textContent}\n\nДрожание обновлено: ${GAME_CONFIG.devShake.distance}px, speed ${GAME_CONFIG.devShake.speed}.`;
                return;
            }
            renderDevMode();
        });
    });

    devDemoTapsRequiredInput.addEventListener("change", () => {
        updateDevDemoSettingsFromInputs();
        if (devModeTab === "demo") {
            resetDevDemo();
        } else {
            renderDevMode();
        }
    });

    [devFloatDistanceInput, devFloatSpeedInput, devFloatShadowSpreadInput].forEach((el) => {
        el.addEventListener("change", () => {
            updateDevFloatSettingsFromInputs();
            if (devModeTab === "demo" && devDemoState === "complete") {
                startDevFloat();
                devValuesEl.textContent = `${devValuesEl.textContent}\n\nПарение обновлено: ${GAME_CONFIG.devFloat.distance}px, speed ${GAME_CONFIG.devFloat.speed}, shadow ${GAME_CONFIG.devFloat.shadowSpread}%.`;
                return;
            }
            renderDevMode();
        });
    });

    devPose23MsInput.addEventListener("change", () => {
        updateDevPoseComboSettingsFromInputs();
        if (devModeTab === "demo" && devDemoState === "running") {
            stopDevDemoPoseTimer();
            scheduleDevPose3();
        }
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nПереход 2->3 обновлен: ${GAME_CONFIG.devPoseCombo.pose2To3Ms}мс.`;
    });

    document.querySelectorAll("[data-dev-action]").forEach((button) => {
        button.addEventListener("click", () => {
            adjustDevTarget(button.dataset.devAction);
        });
    });

    document.querySelectorAll("[data-dev-intro-action]").forEach((button) => {
        button.addEventListener("click", () => {
            handleDevIntroAction(button.dataset.devIntroAction);
        });
    });

    document.querySelectorAll("[data-dev-demo-action]").forEach((button) => {
        button.addEventListener("click", () => {
            handleDevDemoAction(button.dataset.devDemoAction);
        });
    });

    devModeSelect.addEventListener("change", () => setDevModeTab(devModeSelect.value));
    devIntroSignalEl.addEventListener("click", () => {
        if (devModeTab === "demo") {
            handleDevDemoTap();
        }
    });
    devDemoTapBtn.addEventListener("click", handleDevDemoTap);
    devDemoTapBtn.addEventListener("touchend", (event) => {
        event.preventDefault();
        handleDevDemoTap();
    }, { passive: false });
    devBgToggleBtn.addEventListener("click", () => {
        GAME_CONFIG.devView.showBackground = !GAME_CONFIG.devView.showBackground;
        applyDevViewOptions();
        renderDevMode();
    });
    devGridToggleBtn.addEventListener("click", () => {
        GAME_CONFIG.devView.showGrid = !GAME_CONFIG.devView.showGrid;
        applyDevViewOptions();
        renderDevMode();
    });
    devSaveBtn.addEventListener("click", saveDevConfig);
    devSaveProjectBtn.addEventListener("click", saveDevConfigToProject);
    devImportBtn.addEventListener("click", importDevConfig);
    devResetBtn.addEventListener("click", resetDevConfig);
}

function applyDevViewOptions() {
    const view = GAME_CONFIG.devView;
    setImageSrc(devBackgroundImg, view.backgroundSrc);
    applyImageTransform(devBackgroundImg, {
        width: view.width || GAME_CONFIG.stage.width,
        x: view.x ?? GAME_CONFIG.stage.width / 2,
        y: view.y ?? GAME_CONFIG.stage.height / 2,
        rotation: view.rotation || 0,
        zIndex: view.zIndex ?? 0,
    });
    devBackgroundImg.classList.toggle("hidden", !view.showBackground);
    document.getElementById("dev-stage").classList.toggle("no-background", !view.showBackground);
    document.getElementById("dev-stage").classList.toggle("no-grid", !view.showGrid);
    devBgToggleBtn.textContent = view.showBackground ? "Фон: вкл" : "Фон: выкл";
    devGridToggleBtn.textContent = view.showGrid ? "Сетка: вкл" : "Сетка: выкл";
}

function setDevModeTab(tab) {
    devModeTab = tab;
    activeDevIntroAnimationId += 1;
    stopDevDemoTimer();
    stopDevShake();
    stopDevFloat();
    resetDevCamera();
    updateDevVignette(1);
    devDemoState = "idle";
    document.getElementById("dev-stage").classList.remove("stage-win", "stage-lose", "dev-vignette-pulse");
    devModeSelect.value = tab;
    devFitControls.classList.toggle("hidden", tab !== "fit");
    devIntroControls.classList.toggle("hidden", tab !== "intro");
    devDemoControls.classList.toggle("hidden", tab !== "demo");
    devScreen.classList.toggle("dev-demo-active", tab === "demo");
    document.querySelector(".dev-level-label").textContent = tab === "demo" ? "Уровень" : "Предмет";
    renderDevMode();
}

function currentDevPose() {
    return devPoseSelect.value || "0.5";
}

function currentDevLevel() {
    return GAME_CONFIG.levels[Number(devLevelSelect.value) || 0];
}

function currentDevTargetSettings(createObject = false) {
    const pose = currentDevPose();
    const target = devTargetSelect.value;

    if (target === "body") {
        return GAME_CONFIG.poses[pose]?.body || null;
    }

    if (target === "head") {
        return GAME_CONFIG.poses[pose]?.head || null;
    }

    if (target === "background") {
        return GAME_CONFIG.devView;
    }

    const level = currentDevLevel();
    if (target === "shadow") {
        return createObject ? ensureShadowPoseSettings(level, pose) : getShadowPoseSettings(level, pose);
    }

    if (target === "heroShade") {
        return createObject ? ensureHeroShadeSettings(level, pose) : getHeroShadeSettings(level, pose);
    }

    return createObject ? ensureObjectPoseSettings(level, pose) : getObjectPoseSettings(level, pose);
}

function renderDevMode() {
    applyDevViewOptions();

    if (devModeTab === "intro") {
        renderDevIntroMode();
        return;
    }

    if (devModeTab === "demo") {
        renderDevDemoMode();
        return;
    }

    const pose = currentDevPose();
    const emotionIndex = Number(devEmotionSelect.value) || 0;
    const poseSettings = GAME_CONFIG.poses[pose];
    const level = currentDevLevel();
    if (!poseSettings || !level) return;

    applyDevShadow(level, pose);
    setImageSrc(devBodyImg, poseSettings.body.src);
    applyImageTransform(devBodyImg, poseSettings.body);

    if (poseSettings.head) {
        devHeadImg.classList.remove("hidden");
        setImageSrc(devHeadImg, GAME_CONFIG.heads[emotionIndex] || GAME_CONFIG.heads[0]);
        applyImageTransform(devHeadImg, poseSettings.head);
    } else {
        devHeadImg.classList.add("hidden");
    }

    const objectSettings = getObjectPoseSettings(level, pose);
    devObjectImg.classList.remove("hidden");
    setImageSrc(devObjectImg, level.src);
    applyImageTransform(devObjectImg, objectSettings);
    applyHeroShade(level, pose);

    const active = currentDevTargetSettings(false);
    if (devTargetSelect.value === "heroShade") {
        devValuesEl.textContent = [
            `target: ${devTargetSelect.value}`,
            `pose: ${pose}`,
            `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
            `opacity: ${active.opacity}`,
        ].join("\n");
    } else {
        devValuesEl.textContent = active
        ? [
            `target: ${devTargetSelect.value}`,
            `pose: ${pose}`,
            `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
            devTargetSelect.value === "background" ? `background: ${GAME_CONFIG.devView.backgroundSrc}` : "",
            devTargetSelect.value === "shadow" ? `shadow: ${GAME_CONFIG.heroShadow.src}` : "",
            `x: ${active.x}`,
            `y: ${active.y}`,
            `width: ${active.width}`,
            `scaleX: ${active.scaleX ?? 1}`,
            `scaleY: ${active.scaleY ?? 1}`,
            `rotation: ${active.rotation || 0}`,
            `zIndex: ${active.zIndex ?? ""}`,
        ].filter(Boolean).join("\n")
        : `target: ${devTargetSelect.value}\npose: ${pose}\nЭтот слой у позы отсутствует.`;
    }

    devExportEl.value = JSON.stringify(getSerializableDevConfig(), null, 2);
}

function syncDevIntroInputs(level) {
    const intro = getLevelIntroSettings(level);
    devIntroFallMsInput.value = String(intro.fallMs);
    devIntroPoseDelayMsInput.value = String(intro.poseSwitchDelayMs);
    devIntroPoseLeadMsInput.value = String(intro.poseLeadMs);
    devIntroStartDelayMsInput.value = String(intro.startSignalDelayMs);
    devIntroZoomScaleInput.value = String(intro.zoomScale);
    devIntroZoomMsInput.value = String(intro.zoomMs);
    devIntroZoomDelayMsInput.value = String(intro.zoomDelayMs);
    devIntroZoomStartSelect.value = intro.zoomStart;
    devIntroZoomXInput.value = String(intro.zoomX);
    devIntroZoomYInput.value = String(intro.zoomY);
}

function updateDevIntroSettingsFromInputs() {
    const intro = getLevelIntroSettings(currentDevLevel());
    intro.fallMs = Math.max(80, Number(devIntroFallMsInput.value) || intro.fallMs || 420);
    intro.poseSwitchDelayMs = Math.max(0, Number(devIntroPoseDelayMsInput.value) || 0);
    intro.poseLeadMs = Math.max(0, Number(devIntroPoseLeadMsInput.value) || 0);
    intro.startSignalDelayMs = Math.max(0, Number(devIntroStartDelayMsInput.value) || 0);
    intro.zoomScale = Math.max(1, Number(devIntroZoomScaleInput.value) || 1);
    intro.zoomMs = Math.max(0, Number(devIntroZoomMsInput.value) || 0);
    intro.zoomDelayMs = Math.max(0, Number(devIntroZoomDelayMsInput.value) || 0);
    intro.zoomStart = ["fall", "visible"].includes(devIntroZoomStartSelect.value) ? devIntroZoomStartSelect.value : "contact";
    intro.zoomX = Number(devIntroZoomXInput.value) || 195;
    intro.zoomY = Number(devIntroZoomYInput.value) || 255;
}

function syncDevShakeInputs() {
    devShakeDistanceInput.value = String(GAME_CONFIG.devShake.distance);
    devShakeSpeedInput.value = String(GAME_CONFIG.devShake.speed);
}

function updateDevShakeSettingsFromInputs() {
    GAME_CONFIG.devShake.distance = Math.max(0, Number(devShakeDistanceInput.value) || 0);
    GAME_CONFIG.devShake.speed = Math.max(1, Number(devShakeSpeedInput.value) || 1);
}

function syncDevDemoInputs() {
    devDemoTapsRequiredInput.value = String(GAME_CONFIG.devDemo.tapsRequired || 0);
}

function updateDevDemoSettingsFromInputs() {
    GAME_CONFIG.devDemo.tapsRequired = Math.max(0, Math.round(Number(devDemoTapsRequiredInput.value) || 0));
}

function getDevDemoTapGoal(level) {
    return Math.max(1, GAME_CONFIG.devDemo.tapsRequired || level.tapsRequired);
}

function syncDevFloatInputs() {
    devFloatDistanceInput.value = String(GAME_CONFIG.devFloat.distance);
    devFloatSpeedInput.value = String(GAME_CONFIG.devFloat.speed);
    devFloatShadowSpreadInput.value = String(GAME_CONFIG.devFloat.shadowSpread);
}

function updateDevFloatSettingsFromInputs() {
    GAME_CONFIG.devFloat.distance = Math.max(0, Number(devFloatDistanceInput.value) || 0);
    GAME_CONFIG.devFloat.speed = Math.max(0.1, Number(devFloatSpeedInput.value) || 0.1);
    GAME_CONFIG.devFloat.shadowSpread = Math.max(0, Number(devFloatShadowSpreadInput.value) || 0);
}

function syncDevPoseComboInputs() {
    devPose23MsInput.value = String(GAME_CONFIG.devPoseCombo.pose2To3Ms);
}

function updateDevPoseComboSettingsFromInputs() {
    GAME_CONFIG.devPoseCombo.pose2To3Ms = Math.max(0, Number(devPose23MsInput.value) || 0);
}

function applyDevCamera(scale, x, y) {
    devCameraScale = scale;
    devCameraLayer.style.transformOrigin = `${x}px ${y}px`;
    devCameraLayer.style.transform = `scale(${scale})`;
}

function resetDevCamera() {
    applyDevCamera(1, GAME_CONFIG.stage.width / 2, GAME_CONFIG.stage.height / 2);
}

function updateDevVignette(progress) {
    const intensity = 1 - Math.max(0, Math.min(1, progress));
    const opacity = (0.58 * intensity).toFixed(3);
    const blur = Math.round(110 * intensity);
    const spread = Math.round(30 * intensity);
    document.getElementById("dev-stage").style.setProperty("--dev-vignette-opacity", opacity);
    document.getElementById("dev-stage").style.setProperty("--dev-vignette-blur", `${blur}px`);
    document.getElementById("dev-stage").style.setProperty("--dev-vignette-spread", `${spread}px`);
}

function devVignetteProgressForPose(pose) {
    const poses = GAME_CONFIG.liftPoses;
    const index = Math.max(0, poses.indexOf(pose));
    return index / Math.max(1, poses.length);
}

function pulseDevVignette() {
    const stage = document.getElementById("dev-stage");
    stage.classList.remove("dev-vignette-pulse");
    void stage.offsetWidth;
    stage.classList.add("dev-vignette-pulse");
}

function setDevStageResult(result) {
    const stage = document.getElementById("dev-stage");
    stage.classList.toggle("stage-win", result === "win");
    stage.classList.toggle("stage-lose", result === "lose");
}

function animateDevCamera(intro, onDone) {
    if (!intro.zoomMs) {
        applyDevCamera(intro.zoomScale, intro.zoomX, intro.zoomY);
        if (onDone) onDone();
        return;
    }

    const animationId = activeDevIntroAnimationId;
    const startedAt = performance.now();

    function tick(now) {
        if (animationId !== activeDevIntroAnimationId) return;

        const raw = Math.min(1, (now - startedAt) / intro.zoomMs);
        const eased = 1 - Math.pow(1 - raw, 3);
        const scale = 1 + (intro.zoomScale - 1) * eased;
        applyDevCamera(scale, intro.zoomX, intro.zoomY);

        if (raw < 1) {
            requestAnimationFrame(tick);
            return;
        }

        if (onDone) onDone();
    }

    requestAnimationFrame(tick);
}

function animateDevCameraTo(scale, durationMs, onDone) {
    const intro = getLevelIntroSettings(currentDevLevel());
    const animationId = activeDevIntroAnimationId;
    const fromScale = devCameraScale;
    const startedAt = performance.now();

    if (!durationMs) {
        applyDevCamera(scale, intro.zoomX, intro.zoomY);
        if (onDone) onDone();
        return;
    }

    function tick(now) {
        if (animationId !== activeDevIntroAnimationId) return;

        const raw = Math.min(1, (now - startedAt) / durationMs);
        const eased = 1 - Math.pow(1 - raw, 3);
        applyDevCamera(fromScale + (scale - fromScale) * eased, intro.zoomX, intro.zoomY);

        if (raw < 1) {
            requestAnimationFrame(tick);
            return;
        }

        if (onDone) onDone();
    }

    requestAnimationFrame(tick);
}

function devCameraScaleForPose(pose) {
    const intro = getLevelIntroSettings(currentDevLevel());

    if (pose === "4") return 1;

    const poses = GAME_CONFIG.liftPoses;
    const index = Math.max(0, poses.indexOf(pose));
    const progress = index / Math.max(1, poses.length - 1);
    return intro.zoomScale + (1 - intro.zoomScale) * progress;
}

function renderDevIntroMode(message = "", keepSignal = false) {
    const level = currentDevLevel();
    if (!level) return;

    syncDevIntroInputs(level);
    resetDevCamera();
    updateDevVignette(1);
    if (!keepSignal) {
        devIntroSignalEl.classList.remove("pulsing");
        devIntroSignalEl.disabled = true;
        devIntroSignalEl.textContent = "Стартовая кнопка";
    }

    const standPose = GAME_CONFIG.poses["0"];
    applyDevShadow(level, "0");
    setImageSrc(devBodyImg, standPose.body.src);
    applyImageTransform(devBodyImg, standPose.body);
    devHeadImg.classList.remove("hidden");
    setImageSrc(devHeadImg, GAME_CONFIG.heads[0]);
    applyImageTransform(devHeadImg, standPose.head);

    const start = getDevIntroStartSettings(level);
    devObjectImg.classList.remove("hidden");
    setImageSrc(devObjectImg, level.src);
    applyImageTransform(devObjectImg, start);
    applyHeroShade(level, "0");

    const stop = getObjectPoseSettings(level, "0.5");
    const intro = getLevelIntroSettings(level);
    syncZoomToCatchButton(level);
    devValuesEl.textContent = [
        "mode: старт уровня",
        `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
        `fallMs: ${intro.fallMs}`,
        `poseSwitchDelayMs: ${intro.poseSwitchDelayMs}`,
        `poseLeadMs: ${intro.poseLeadMs}`,
        `startSignalDelayMs: ${intro.startSignalDelayMs}`,
        `zoom: scale ${intro.zoomScale}, ${intro.zoomMs}ms, delay ${intro.zoomDelayMs}ms`,
        `zoomStart: ${intro.zoomStart}`,
        `zoomFocus: x ${intro.zoomX}, y ${intro.zoomY}`,
        `start: x ${start.x}, y ${start.y}`,
        `stop 0.5: x ${stop.x}, y ${stop.y}, rotation ${stop.rotation || 0}`,
        message,
    ].filter(Boolean).join("\n");
    devExportEl.value = JSON.stringify(getSerializableDevConfig(), null, 2);
}

function renderDevDemoMode(message = "") {
    const level = currentDevLevel();
    if (!level) return;

    syncDevIntroInputs(level);
    syncDevDemoInputs();
    syncDevShakeInputs();
    syncDevFloatInputs();
    syncDevPoseComboInputs();
    resetDevCamera();
    const tapGoal = getDevDemoTapGoal(level);
    updateDevVignette(devDemoState === "idle" ? 1 : devDemoTaps / tapGoal);
    setDevStageResult(null);
    devIntroSignalEl.classList.remove("pulsing");
    devIntroSignalEl.disabled = true;
    devIntroSignalEl.textContent = "Запусти демо";
    setDevDemoButton("Запусти демо", false, false);

    const pose = devDemoState === "idle" ? "0" : (devDemoLiftPose || "0.5");
    const poseSettings = GAME_CONFIG.poses[pose];
    applyDevShadow(level, pose);
    setImageSrc(devBodyImg, poseSettings.body.src);
    applyImageTransform(devBodyImg, poseSettings.body);
    devHeadImg.classList.remove("hidden");
    setImageSrc(devHeadImg, GAME_CONFIG.heads[devDemoState === "idle" ? 0 : 2]);
    applyImageTransform(devHeadImg, poseSettings.head);

    const objectSettings = devDemoState === "idle" ? getDevIntroStartSettings(level) : getObjectPoseSettings(level, pose);
    devObjectImg.classList.remove("hidden");
    setImageSrc(devObjectImg, level.src);
    applyImageTransform(devObjectImg, objectSettings);
    applyHeroShade(level, pose);

    devValuesEl.textContent = [
        "mode: демо уровня",
        `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
        `state: ${devDemoState}`,
        `taps: ${devDemoTaps}/${tapGoal}`,
        `pose: ${pose}`,
        `shake: ${GAME_CONFIG.devShake.enabled ? "on" : "off"}, ${GAME_CONFIG.devShake.distance}px, speed ${GAME_CONFIG.devShake.speed}`,
        `float: ${GAME_CONFIG.devFloat.enabled ? "on" : "off"}, ${GAME_CONFIG.devFloat.distance}px, speed ${GAME_CONFIG.devFloat.speed}, shadow ${GAME_CONFIG.devFloat.shadowSpread}%`,
        `pose2to3: ${GAME_CONFIG.devPoseCombo.enabled ? "on" : "off"}, ${GAME_CONFIG.devPoseCombo.pose2To3Ms}ms`,
        "После старта проиграется падение, зум и затем кнопка станет тапабельной.",
        message,
    ].filter(Boolean).join("\n");
    devExportEl.value = JSON.stringify(getSerializableDevConfig(), null, 2);
}

function getDevIntroStartSettings(level) {
    return {
        width: level.object.width,
        x: level.object.startX,
        y: level.object.startY,
        rotation: level.object.rotation || 0,
        zIndex: level.object.zIndex,
    };
}

function getIntroObjectVisibleDelayMs(level, intro) {
    const start = getDevIntroStartSettings(level);
    const stop = getObjectPoseSettings(level, "0.5");
    const distance = stop.y - start.y;
    if (distance <= 0 || start.y >= 0) return 0;

    const raw = Math.sqrt(Math.max(0, Math.min(1, (0 - start.y) / distance)));
    return Math.round(raw * intro.fallMs);
}

function getZoomToCatchMs(level, intro) {
    const visibleDelayMs = getIntroObjectVisibleDelayMs(level, intro);
    return Math.max(80, intro.fallMs - intro.poseLeadMs - visibleDelayMs);
}

function syncZoomToCatchButton(level) {
    const intro = getLevelIntroSettings(level);
    const isActive = intro.zoomStart === "visible"
        && intro.zoomDelayMs === 0
        && Math.abs(intro.zoomMs - getZoomToCatchMs(level, intro)) <= 1;
    devZoomToCatchBtn.classList.toggle("active", isActive);
}

function flashDevButton(button) {
    button.classList.remove("flash");
    void button.offsetWidth;
    button.classList.add("flash");
}

function playDevIntroAnimation(options = {}) {
    updateDevIntroSettingsFromInputs();
    const animationId = ++activeDevIntroAnimationId;
    const level = currentDevLevel();
    const intro = getLevelIntroSettings(level);
    const start = getDevIntroStartSettings(level);
    const stop = getObjectPoseSettings(level, "0.5");
    const shadowStart = getShadowPoseSettings(level, "0");
    const shadowStop = getShadowPoseSettings(level, "0.5");
    const shadeStart = getHeroShadeSettings(level, "0");
    const shadeStop = getHeroShadeSettings(level, "0.5");
    const standPose = GAME_CONFIG.poses["0"];
    const contactPose = GAME_CONFIG.poses["0.5"];
    const startedAt = performance.now();
    let contactPoseApplied = false;
    let zoomAfterContactPlayed = false;

    resetDevCamera();
    setDevStageResult(null);
    updateDevVignette(1);
    devIntroSignalEl.classList.remove("pulsing");
    devIntroSignalEl.disabled = true;
    devIntroSignalEl.textContent = "Падение";
    applyDevShadowSettings(shadowStart);
    applyHeroShadeOpacity(shadeStart.opacity || 0);
    setImageSrc(devBodyImg, standPose.body.src);
    applyImageTransform(devBodyImg, standPose.body);
    setImageSrc(devHeadImg, GAME_CONFIG.heads[0]);
    applyImageTransform(devHeadImg, standPose.head);
    setImageSrc(devObjectImg, level.src);
    applyImageTransform(devObjectImg, start);

    function playAfterContactZoom(onDone) {
        if (zoomAfterContactPlayed) {
            if (onDone) onDone();
            return;
        }
        zoomAfterContactPlayed = true;

        if (intro.zoomStart === "fall" || intro.zoomStart === "visible") {
            if (onDone) onDone();
            return;
        }

        window.setTimeout(() => {
            if (animationId !== activeDevIntroAnimationId) return;
            animateDevCamera(intro, onDone);
        }, intro.zoomDelayMs);
    }

    function applyContactPose() {
        if (contactPoseApplied) return;
        contactPoseApplied = true;
        setImageSrc(devBodyImg, contactPose.body.src);
        applyImageTransform(devBodyImg, contactPose.body);
        setImageSrc(devHeadImg, GAME_CONFIG.heads[2] || GAME_CONFIG.heads[0]);
        applyImageTransform(devHeadImg, contactPose.head);
        applyDevShadowSettings(shadowStop);
        applyHeroShadeOpacity(shadeStop.opacity || 0);
        updateDevVignette(0);
        if (options.shakeOnContact) {
            devDemoLiftPose = "0.5";
            startDevShake();
        }
    }

    function tick(now) {
        if (animationId !== activeDevIntroAnimationId) return;

        const elapsed = now - startedAt;
        const raw = Math.min(1, elapsed / intro.fallMs);
        const eased = Math.pow(raw, 2);

        if (intro.zoomStart === "fall" || intro.zoomStart === "visible") {
            const visibleDelayMs = intro.zoomStart === "visible" ? getIntroObjectVisibleDelayMs(level, intro) : 0;
            const zoomElapsed = Math.max(0, elapsed - intro.zoomDelayMs - visibleDelayMs);
            const zoomRaw = Math.min(1, zoomElapsed / Math.max(1, intro.zoomMs));
            const zoomEased = 1 - Math.pow(1 - zoomRaw, 3);
            const zoomScale = 1 + (intro.zoomScale - 1) * zoomEased;
            applyDevCamera(zoomScale, intro.zoomX, intro.zoomY);
        }

        applyImageTransform(devObjectImg, {
            width: start.width + (stop.width - start.width) * eased,
            x: start.x + (stop.x - start.x) * eased,
            y: start.y + (stop.y - start.y) * eased,
            rotation: start.rotation + ((stop.rotation || 0) - start.rotation) * eased,
            zIndex: stop.zIndex ?? start.zIndex,
        });
        applyDevShadowSettings(interpolateLayerSettings(shadowStart, shadowStop, eased));
        applyHeroShadeOpacity(lerpValue(shadeStart.opacity || 0, shadeStop.opacity || 0, eased));

        if (elapsed >= intro.fallMs - intro.poseLeadMs) {
            applyContactPose();
        }

        if (raw < 1) {
            requestAnimationFrame(tick);
            return;
        }

        window.setTimeout(() => {
            if (animationId !== activeDevIntroAnimationId) return;
            applyContactPose();
            applyImageTransform(devObjectImg, stop);
            devIntroSignalEl.textContent = "Зум";

            playAfterContactZoom(() => {
                window.setTimeout(() => {
                    if (animationId !== activeDevIntroAnimationId) return;
                    devIntroSignalEl.textContent = "Игра началась";
                    devIntroSignalEl.classList.add("pulsing");
                    devIntroSignalEl.disabled = !options.playableButton;
                    devValuesEl.textContent = `${devValuesEl.textContent}\n\nАнимация проиграна. Камера приблизилась к герою, кнопка пульсирует как сигнал старта игры.`;
                    devExportEl.value = JSON.stringify(getSerializableDevConfig(), null, 2);
                    if (options.onReady) options.onReady();
                }, intro.startSignalDelayMs);
            });
        }, intro.poseSwitchDelayMs);
    }

    requestAnimationFrame(tick);
}

function adjustDevIntroStop(action) {
    const level = currentDevLevel();
    const intro = getLevelIntroSettings(level);
    if (action === "zoom-to-catch") {
        updateDevIntroSettingsFromInputs();
        intro.zoomStart = "visible";
        intro.zoomDelayMs = 0;
        intro.zoomMs = getZoomToCatchMs(level, intro);
        syncDevIntroInputs(level);
        syncZoomToCatchButton(level);
        flashDevButton(devZoomToCatchBtn);
        renderDevIntroMode("Зум настроен от появления предмета в кадре до момента подхвата.");
        return;
    }

    const settings = ensureObjectPoseSettings(level, "0.5");
    const step = Math.max(1, Number(devIntroStopStepInput.value) || 5);
    const rotationStep = Math.max(1, Math.round(step / 2));

    if (action === "stop-up") settings.y -= step;
    if (action === "stop-down") settings.y += step;
    if (action === "stop-left") settings.x -= step;
    if (action === "stop-right") settings.x += step;
    if (action === "stop-rotate-left") settings.rotation = (settings.rotation || 0) - rotationStep;
    if (action === "stop-rotate-right") settings.rotation = (settings.rotation || 0) + rotationStep;

    renderDevIntroMode("Точка остановки предмета для позы 0.5 изменена.");
}

function handleDevIntroAction(action) {
    if (action === "play") {
        playDevIntroAnimation();
        return;
    }

    if (action === "reset") {
        activeDevIntroAnimationId += 1;
        resetDevCamera();
        renderDevIntroMode("Вид сброшен на начало падения.");
        return;
    }

    adjustDevIntroStop(action);
}

function applyDevHeroPose(pose, headIndex) {
    const poseSettings = GAME_CONFIG.poses[pose];
    const visualSettings = getDevHeroLayerSettings(pose);
    if (!poseSettings) return;

    applyDevShadow(currentDevLevel(), pose);
    setImageSrc(devBodyImg, poseSettings.body.src);
    applyImageTransform(devBodyImg, visualSettings.body);

    if (!poseSettings.head) {
        devHeadImg.classList.add("hidden");
        applyHeroShade(currentDevLevel(), pose);
        return;
    }

    devHeadImg.classList.remove("hidden");
    setImageSrc(devHeadImg, GAME_CONFIG.heads[headIndex] || GAME_CONFIG.heads[0]);
    applyImageTransform(devHeadImg, visualSettings.head);
    applyHeroShade(currentDevLevel(), pose);
}

function applyDevObjectPose(level, pose) {
    const settings = getDevObjectLayerSettings(level, pose);
    devObjectImg.classList.remove("hidden");
    setImageSrc(devObjectImg, level.src);
    applyImageTransform(devObjectImg, settings);
}

function shouldShakeDevPose(pose) {
    return GAME_CONFIG.devShake.enabled && pose !== "0" && pose !== "4" && pose !== "dead";
}

function stopDevShake() {
    devShakeAnimationId += 1;
    if (devShakeFrameId) cancelAnimationFrame(devShakeFrameId);
    devShakeFrameId = null;
}

function startDevShake() {
    stopDevShake();
    if (!shouldShakeDevPose(devDemoLiftPose)) return;

    const animationId = devShakeAnimationId;
    const startedAt = performance.now() - 80;

    function applyShake(now) {
        const pose = devDemoLiftPose || "0.5";
        const poseSettings = GAME_CONFIG.poses[pose];
        const visualSettings = getDevHeroLayerSettings(pose);
        if (!shouldShakeDevPose(pose) || !poseSettings) return false;

        const distance = GAME_CONFIG.devShake.distance;
        const speed = GAME_CONFIG.devShake.speed;
        const wave = Math.sin(((now - startedAt) / 1000) * speed * Math.PI * 2);
        const offset = wave * distance;

        applyImageTransform(devBodyImg, {
            ...visualSettings.body,
            x: visualSettings.body.x + offset,
        });

        if (visualSettings.head) {
            applyImageTransform(devHeadImg, {
                ...visualSettings.head,
                x: visualSettings.head.x + offset * 1.15,
            });
        }

        return true;
    }

    applyShake(performance.now());

    function tick(now) {
        if (animationId !== devShakeAnimationId || !["intro", "running"].includes(devDemoState)) return;

        if (!applyShake(now)) return;

        devShakeFrameId = requestAnimationFrame(tick);
    }

    devShakeFrameId = requestAnimationFrame(tick);
}

function stopDevFloat() {
    devFloatAnimationId += 1;
    if (devFloatFrameId) cancelAnimationFrame(devFloatFrameId);
    devFloatFrameId = null;
}

function getDevObjectLayerSettings(level, pose) {
    let settings = getObjectPoseSettings(level, pose);
    if (shouldApplyDevPose3Lift(pose)) {
        const pose3Settings = getObjectPoseSettings(level, "3");
        settings = interpolateLayerSettings(
            pose3Settings,
            getObjectPoseSettings(level, "4"),
            devDemoPose3LiftProgress
        );
        settings.y = pose3Settings.y + getDevPose3LiftY();
    }

    const objectOverHero = ["3", "4"].includes(pose) && !isFishLevel(level);
    return {
        ...settings,
        zIndex: objectOverHero ? Math.max(settings.zIndex ?? 30, 60) : settings.zIndex,
    };
}

function isFishLevel(level) {
    return level?.src?.includes("fish") || /рыба/i.test(level?.title || "");
}

function startDevFloat() {
    stopDevFloat();
    if (!GAME_CONFIG.devFloat.enabled || devDemoState !== "complete") return;

    const level = currentDevLevel();
    const pose = "4";
    const poseSettings = GAME_CONFIG.poses[pose];
    const objectSettings = getDevObjectLayerSettings(level, pose);
    const shadowSettings = getShadowPoseSettings(level, pose);
    const animationId = devFloatAnimationId;
    const startedAt = performance.now();

    function tick(now) {
        if (animationId !== devFloatAnimationId || devDemoState !== "complete") return;

        const phase = ((now - startedAt) / 1000) * GAME_CONFIG.devFloat.speed * Math.PI * 2;
        const liftProgress = (1 - Math.cos(phase)) / 2;
        const liftOffset = liftProgress * GAME_CONFIG.devFloat.distance;
        const shadowExpand = (1 - liftProgress) * (GAME_CONFIG.devFloat.shadowSpread / 100);

        applyImageTransform(devBodyImg, {
            ...poseSettings.body,
            y: poseSettings.body.y - liftOffset,
        });

        if (poseSettings.head) {
            applyImageTransform(devHeadImg, {
                ...poseSettings.head,
                y: poseSettings.head.y - liftOffset,
            });
        }

        applyImageTransform(devObjectImg, {
            ...objectSettings,
            y: objectSettings.y - liftOffset,
        });

        applyDevShadowSettings({
            ...shadowSettings,
            scaleX: (shadowSettings.scaleX ?? 1) * (1 + shadowExpand),
        });

        devFloatFrameId = requestAnimationFrame(tick);
    }

    devFloatFrameId = requestAnimationFrame(tick);
}

function setDevDemoButton(text, enabled, pulsing) {
    devDemoTapBtn.disabled = !enabled;
    devDemoTapBtn.textContent = text;
    devDemoTapBtn.classList.toggle("pulsing", pulsing);
    devDemoTapBtn.classList.toggle("tap-btn-win", text === "Победа");
    devDemoTapBtn.classList.toggle("tap-btn-lose", text === "Возобновить");
}

function stopDevDemoTimer() {
    if (devDemoTimerId) clearInterval(devDemoTimerId);
    devDemoTimerId = null;
}

function stopDevDemoPoseTimer() {
    if (devDemoPoseTimerId) clearTimeout(devDemoPoseTimerId);
    devDemoPoseTimerId = null;
}

function devDemoHeadIndexByTime() {
    const elapsed = Math.max(0, performance.now() - devDemoStartedAt);
    const progress = Math.max(0, Math.min(1, elapsed / GAME_CONFIG.levelTimeMs));
    const available = [2, 3, 4].filter((index) => GAME_CONFIG.heads[index]);
    if (!available.length) return 2;
    return available[Math.min(available.length - 1, Math.floor(progress * available.length))];
}

function updateDevDemoHeadByTime() {
    if (devDemoState !== "running") return;
    const pose = devDemoLiftPose || "0.5";
    const poseSettings = GAME_CONFIG.poses[pose];
    const visualSettings = getDevHeroLayerSettings(pose);
    if (!poseSettings?.head) return;
    setImageSrc(devHeadImg, GAME_CONFIG.heads[devDemoHeadIndexByTime()] || GAME_CONFIG.heads[2]);
    if (!shouldShakeDevPose(pose)) {
        applyImageTransform(devHeadImg, visualSettings.head);
    }
}

function startDevDemoTimer() {
    stopDevDemoTimer();
    devDemoStartedAt = performance.now();
    devDemoTimerId = setInterval(() => {
        if (devDemoState !== "running") {
            stopDevDemoTimer();
            return;
        }

        updateDevDemoHeadByTime();

        if (performance.now() - devDemoStartedAt >= GAME_CONFIG.levelTimeMs) {
            failDevDemo();
        }
    }, 50);
}

function startDevDemo() {
    stopDevDemoTimer();
    stopDevDemoPoseTimer();
    stopDevShake();
    stopDevFloat();
    updateDevDemoSettingsFromInputs();
    updateDevShakeSettingsFromInputs();
    updateDevFloatSettingsFromInputs();
    updateDevPoseComboSettingsFromInputs();
    const level = currentDevLevel();
    const tapGoal = getDevDemoTapGoal(level);
    setDevStageResult(null);
    devDemoState = "intro";
    devDemoTaps = 0;
    devDemoLiftPose = "0.5";
    devDemoPose3LiftProgress = 0;
    renderDevDemoMode("Демо запущено: предмет падает, затем кнопка станет активной.");
    setDevDemoButton("Падение", false, false);
    playDevIntroAnimation({
        playableButton: true,
        shakeOnContact: true,
        onReady: () => {
            if (devModeTab !== "demo") return;
            devDemoState = "running";
            devDemoTaps = 0;
            devDemoLiftPose = "0.5";
            devDemoPose3LiftProgress = 0;
            updateDevVignette(devVignetteProgressForPose("0.5"));
            applyDevHeroPose("0.5", 2);
            applyDevObjectPose(level, "0.5");
            setDevDemoButton(`Тапай 0/${tapGoal}`, true, true);
            startDevDemoTimer();
            devValuesEl.textContent = [
                "mode: демо уровня",
                `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
                "state: running",
                `taps: 0/${tapGoal}`,
                "pose: 0.5",
                "Черная виньетка будет уходить к краям и слабеть по мере тапов.",
            ].join("\n");
        },
    });
}

function resetDevDemo() {
    activeDevIntroAnimationId += 1;
    stopDevDemoTimer();
    stopDevDemoPoseTimer();
    stopDevShake();
    stopDevFloat();
    devDemoState = "idle";
    devDemoTaps = 0;
    devDemoLiftPose = null;
    devDemoPose3LiftProgress = 0;
    resetDevCamera();
    setDevStageResult(null);
    updateDevVignette(1);
    renderDevDemoMode("Демо сброшено.");
}

function handleDevDemoAction(action) {
    if (action === "start") {
        startDevDemo();
        return;
    }

    if (action === "reset") {
        resetDevDemo();
        return;
    }

    if (action === "shake-on") {
        updateDevShakeSettingsFromInputs();
        GAME_CONFIG.devShake.enabled = true;
        startDevShake();
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nДрожание включено: ${GAME_CONFIG.devShake.distance}px, speed ${GAME_CONFIG.devShake.speed}.`;
        return;
    }

    if (action === "shake-off") {
        GAME_CONFIG.devShake.enabled = false;
        stopDevShake();
        if (devDemoLiftPose && devDemoState === "running") {
            applyDevHeroPose(devDemoLiftPose, devDemoHeadIndexByTime());
        }
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nДрожание выключено.`;
        return;
    }

    if (action === "float-on") {
        updateDevFloatSettingsFromInputs();
        GAME_CONFIG.devFloat.enabled = true;
        startDevFloat();
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nПарение включено: ${GAME_CONFIG.devFloat.distance}px, speed ${GAME_CONFIG.devFloat.speed}, shadow ${GAME_CONFIG.devFloat.shadowSpread}%.`;
        return;
    }

    if (action === "float-off") {
        GAME_CONFIG.devFloat.enabled = false;
        stopDevFloat();
        if (devDemoState === "complete") {
            const level = currentDevLevel();
            applyDevHeroPose("4", GAME_CONFIG.heads.length - 1);
            applyDevObjectPose(level, "4");
        }
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nПарение выключено.`;
        return;
    }

    if (action === "pose23-on") {
        updateDevPoseComboSettingsFromInputs();
        GAME_CONFIG.devPoseCombo.enabled = true;
        stopDevDemoPoseTimer();
        scheduleDevPose3();
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nАвтопереход 2->3 включен: ${GAME_CONFIG.devPoseCombo.pose2To3Ms}мс.`;
        return;
    }

    if (action === "pose23-off") {
        GAME_CONFIG.devPoseCombo.enabled = false;
        stopDevDemoPoseTimer();
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nАвтопереход 2->3 выключен.`;
    }
}

function setDevDemoPose(pose) {
    const level = currentDevLevel();
    if (pose === devDemoLiftPose) return;

    devDemoLiftPose = pose;
    devDemoPose3LiftProgress = 0;
    stopDevShake();
    updateDevVignette(devVignetteProgressForPose(pose));
    applyDevHeroPose(pose, devDemoHeadIndexByTime());
    applyDevObjectPose(level, pose);
    startDevShake();
    animateDevCameraTo(devCameraScaleForPose(pose), 180);
}

function scheduleDevPose3() {
    if (!GAME_CONFIG.devPoseCombo.enabled || devDemoLiftPose !== "2") return;
    if (devDemoPoseTimerId) return;

    devDemoPoseTimerId = setTimeout(() => {
        devDemoPoseTimerId = null;
        if (devDemoState !== "running" || devDemoLiftPose !== "2") return;
        setDevDemoPose("3");
    }, GAME_CONFIG.devPoseCombo.pose2To3Ms);
}

function devPose3LiftProgressFromLevelProgress(progress) {
    const start = GAME_CONFIG.devPoseCombo.enabled
        ? 2 / 3
        : GAME_CONFIG.liftPoses.indexOf("3") / GAME_CONFIG.liftPoses.length;
    return Math.max(0, Math.min(1, (progress - start) / Math.max(0.01, 1 - start)));
}

function applyDevPose3TapLift(progress) {
    devDemoPose3LiftProgress = devPose3LiftProgressFromLevelProgress(progress);
    if (devDemoLiftPose !== "3") return;

    const level = currentDevLevel();
    stopDevShake();
    applyDevHeroPose("3", devDemoHeadIndexByTime());
    applyDevObjectPose(level, "3");
    startDevShake();
}

function handleDevDemoTap() {
    if (devDemoState === "failed") {
        startDevDemo();
        return;
    }

    if (devDemoState !== "running") return;

    devDemoTapBtn.blur();
    const level = currentDevLevel();
    const tapGoal = getDevDemoTapGoal(level);
    devDemoTaps += 1;
    const progress = Math.min(1, devDemoTaps / tapGoal);
    pulseDevVignette();
    devDemoPose3LiftProgress = devPose3LiftProgressFromLevelProgress(progress);

    const poses = GAME_CONFIG.devPoseCombo.enabled ? ["0.5", "1", "2"] : GAME_CONFIG.liftPoses;
    const poseIndex = Math.min(poses.length - 1, Math.floor(progress * poses.length));
    let pose = poses[poseIndex];

    if (GAME_CONFIG.devPoseCombo.enabled && devDemoLiftPose === "3" && pose === "2") {
        pose = "3";
    }

    if (pose !== devDemoLiftPose) {
        setDevDemoPose(pose);
        scheduleDevPose3();
    } else {
        applyDevPose3TapLift(progress);
        updateDevDemoHeadByTime();
        scheduleDevPose3();
    }

    setDevDemoButton(`Тапай ${devDemoTaps}/${tapGoal}`, true, true);
    devValuesEl.textContent = [
        "mode: демо уровня",
        `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
        "state: running",
        `taps: ${devDemoTaps}/${tapGoal}`,
        `pose: ${devDemoLiftPose}`,
        `vignettePose: ${devDemoLiftPose}`,
    ].join("\n");

    if (progress >= 1) {
        stopDevDemoTimer();
        stopDevDemoPoseTimer();
        stopDevShake();
        stopDevFloat();
        devDemoState = "complete";
        updateDevVignette(1);
        setDevStageResult("win");
        applyDevHeroPose("4", GAME_CONFIG.heads.length - 1);
        applyDevObjectPose(level, "4");
        animateDevCameraTo(1, 220);
        startDevFloat();
        setDevDemoButton("Победа", false, false);
        devValuesEl.textContent = [
            "mode: демо уровня",
            `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
            "state: complete",
            `taps: ${devDemoTaps}/${tapGoal}`,
            "pose: 4",
            "Один уровень демо завершен победой.",
        ].join("\n");
    }
}

function failDevDemo() {
    if (devDemoState !== "running") return;

    const level = currentDevLevel();
    const tapGoal = getDevDemoTapGoal(level);
    stopDevDemoTimer();
    stopDevDemoPoseTimer();
    stopDevShake();
    stopDevFloat();
    devDemoState = "failed";
    updateDevVignette(1);
    setDevStageResult("lose");
    applyDevObjectPose(level, "dead");
    applyDevHeroPose("dead", 0);
    animateDevCameraTo(getLevelIntroSettings(level).zoomScale * 1.16, 220);
    setDevDemoButton("Возобновить", true, false);
    devValuesEl.textContent = [
        "mode: демо уровня",
        `level: ${Number(devLevelSelect.value) + 1} ${level.title}`,
        "state: failed",
        `taps: ${devDemoTaps}/${tapGoal}`,
        "pose: dead",
        "Время вышло: показана поза смерти и красная виньетка.",
    ].join("\n");
}

function adjustDevTarget(action) {
    const settings = currentDevTargetSettings(true);
    if (!settings) return;

    const step = Math.max(1, Number(devStepInput.value) || 5);
    const rotationStep = action.includes("rotate") ? Math.max(1, Math.round(step / 2)) : step;
    const target = devTargetSelect.value;
    const level = currentDevLevel();

    if (action === "up" && "y" in settings) settings.y -= step;
    if (action === "down" && "y" in settings) settings.y += step;
    if (action === "left" && "x" in settings) settings.x -= step;
    if (action === "right" && "x" in settings) settings.x += step;
    if (action === "rotate-left" && target !== "heroShade") settings.rotation = (settings.rotation || 0) - rotationStep;
    if (action === "rotate-right" && target !== "heroShade") settings.rotation = (settings.rotation || 0) + rotationStep;
    if (action === "narrower" && target === "shadow") settings.scaleX = Math.max(0.05, (settings.scaleX ?? 1) - step / 50);
    if (action === "wider" && target === "shadow") settings.scaleX = (settings.scaleX ?? 1) + step / 50;
    if (action === "shorter" && target === "shadow") settings.scaleY = Math.max(0.05, (settings.scaleY ?? 1) - step / 50);
    if (action === "taller" && target === "shadow") settings.scaleY = (settings.scaleY ?? 1) + step / 50;
    if (action === "shade-lighter" && target === "heroShade") settings.opacity = Math.max(0, (settings.opacity || 0) - step / 100);
    if (action === "shade-darker" && target === "heroShade") settings.opacity = Math.min(0.85, (settings.opacity || 0) + step / 100);
    if (action === "smaller") {
        if (target === "object") level.object.width = Math.max(5, level.object.width - step);
        else if (target === "background") settings.width = Math.max(20, (settings.width || GAME_CONFIG.stage.width) - step);
        else if (target === "heroShade") settings.opacity = Math.max(0, (settings.opacity || 0) - step / 100);
        else settings.width = Math.max(5, settings.width - step);
    }
    if (action === "bigger") {
        if (target === "object") level.object.width += step;
        else if (target === "background") settings.width = (settings.width || GAME_CONFIG.stage.width) + step;
        else if (target === "heroShade") settings.opacity = Math.min(0.85, (settings.opacity || 0) + step / 100);
        else settings.width += step;
    }

    renderDevMode();
}

function saveDevConfig() {
    localStorage.setItem(DEV_STORAGE_KEY, JSON.stringify(getSerializableDevConfig()));
    renderDevMode();
    devValuesEl.textContent = `${devValuesEl.textContent}\n\nСохранено.`;
}

async function saveDevConfigToProject() {
    const payload = getSerializableDevConfig();

    try {
        const response = await fetch("/api/dev-config", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        localStorage.setItem(DEV_STORAGE_KEY, JSON.stringify(payload));
        renderDevMode();
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nЗаписано в проект. Теперь эти настройки будут работать на других устройствах после обновления страницы.`;
    } catch (error) {
        devValuesEl.textContent = `Не удалось записать в проект:\n${error.message}`;
    }
}

function importDevConfig() {
    try {
        const imported = JSON.parse(devExportEl.value);
        deepMerge(GAME_CONFIG, imported);
        localStorage.setItem(DEV_STORAGE_KEY, JSON.stringify(getSerializableDevConfig()));
        renderDevMode();
        devValuesEl.textContent = `${devValuesEl.textContent}\n\nИмпортировано и сохранено.`;
    } catch (error) {
        devValuesEl.textContent = `Ошибка импорта JSON:\n${error.message}`;
    }
}

function resetDevConfig() {
    localStorage.removeItem(DEV_STORAGE_KEY);
    devValuesEl.textContent = "Сохранение сброшено. Обнови страницу, чтобы вернуться к значениям из кода.";
}

function animateObject(from, to, durationMs, onDone, easing = "easeOut") {
    const animationId = ++activeAnimationId;
    const startedAt = performance.now();

    function tick(now) {
        if (animationId !== activeAnimationId) return;

        const raw = Math.min(1, (now - startedAt) / durationMs);
        const eased = easing === "easeIn" ? Math.pow(raw, 2) : 1 - Math.pow(1 - raw, 3);
        applyImageTransform(activeObjectLevelEl || levelObjectImg, {
            width: from.width + (to.width - from.width) * eased,
            x: from.x + (to.x - from.x) * eased,
            y: from.y + (to.y - from.y) * eased,
            rotation: from.rotation + (to.rotation - from.rotation) * eased,
            zIndex: to.zIndex ?? from.zIndex,
        });

        if (raw < 1) {
            requestAnimationFrame(tick);
        } else if (onDone) {
            onDone();
        }
    }

    requestAnimationFrame(tick);
}

function updateTapButtonProgress(progress) {
    const pct = Math.max(0, Math.min(1, progress)) * 100;
    tapBtn.style.background = `linear-gradient(to top, #facc15 ${pct}%, #2563eb ${pct}%)`;
    progressTextEl.textContent = `${taps}/${currentLevel().tapsRequired}`;
}

function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
}

function startTimer() {
    stopTimer();
    timeLeft = GAME_CONFIG.levelTimeMs;
    const startedAt = performance.now();

    timerId = setInterval(() => {
        const elapsed = performance.now() - startedAt;
        timeLeft = Math.max(0, GAME_CONFIG.levelTimeMs - elapsed);
        setHeadByTime();

        if (timeLeft <= 0) {
            onLevelFailed();
        }
    }, 50);
}

function prepareLevel() {
    const level = currentLevel();
    taps = 0;
    timeLeft = GAME_CONFIG.levelTimeMs;
    gameState = "falling";
    currentLiftPose = null;
    activeAnimationId += 1;
    stageEl.classList.remove("stage-win");
    stageEl.classList.remove("stage-lose");
    tapBtn.classList.remove("tap-btn-win");
    tapBtn.classList.remove("tap-btn-lose");

    levelTitleEl.textContent = `Уровень ${levelIndex + 1}: ${level.title}`;
    tapBtn.disabled = true;
    tapBtn.textContent = "Лови!";
    progressTextEl.textContent = `0/${level.tapsRequired}`;
    updateTapButtonProgress(0);
    setHeroPose("0");
    currentHeadEmotionIndex = 0;
    setImageSrc(heroHeadImg, GAME_CONFIG.heads[0]);

    const settings = level.object;
    const objectEl = setActiveLevelObject();
    const from = {
        width: settings.width,
        x: settings.startX,
        y: settings.startY,
        rotation: settings.rotation,
        zIndex: settings.zIndex,
    };
    const to = {
        width: settings.width,
        x: settings.contactX,
        y: settings.contactY,
        rotation: settings.rotation,
        zIndex: settings.zIndex,
    };
    applyImageTransform(objectEl, from);

    animateObject(from, to, settings.fallMs, () => {
        setHeroPose("0.5");
        setObjectForPose("0.5");
        gameState = "waiting";
        tapBtn.disabled = false;
        tapBtn.textContent = "Поднимать!";
        setHeadByTime();
    });
}

function previewLevelBeforeFall() {
    const level = currentLevel();
    const settings = level.object;

    stopTimer();
    activeAnimationId += 1;
    taps = 0;
    timeLeft = GAME_CONFIG.levelTimeMs;
    gameState = "ready";
    currentLiftPose = null;
    stageEl.classList.remove("stage-win");
    stageEl.classList.remove("stage-lose");
    tapBtn.classList.remove("tap-btn-win");
    tapBtn.classList.remove("tap-btn-lose");

    levelTitleEl.textContent = `Уровень ${levelIndex + 1}: ${level.title}`;
    progressTextEl.textContent = `0/${level.tapsRequired}`;
    tapBtn.disabled = true;
    tapBtn.textContent = "Ждем падение";
    updateTapButtonProgress(0);
    setHeroPose("0");
    currentHeadEmotionIndex = 0;
    setImageSrc(heroHeadImg, GAME_CONFIG.heads[0]);
    showLevelObject();
    const objectEl = setActiveLevelObject();
    applyImageTransform(objectEl, {
        width: settings.width,
        x: settings.startX,
        y: settings.startY,
        rotation: settings.rotation,
        zIndex: settings.zIndex,
    });
}

function updateLiftVisual(progress) {
    const poses = GAME_CONFIG.liftPoses;
    const poseIndex = Math.min(poses.length - 1, Math.floor(progress * poses.length));
    const pose = poses[poseIndex];
    if (pose === currentLiftPose) return;

    currentLiftPose = pose;
    setHeroPose(pose);
    setObjectForPose(pose);
}

function onSuccessfulLift() {
    const usedTime = GAME_CONFIG.levelTimeMs - timeLeft;
    stopTimer();
    gameState = "level-complete";
    tapBtn.disabled = false;
    tapBtn.textContent = "Продолжить";
    tapBtn.classList.add("tap-btn-win");
    stageEl.classList.add("stage-win");
    currentLiftPose = "4";
    setHeroPose("4");
    setObjectForPose("4");
    setHeadFinal();

    if (levelIndex + 1 > sessionBestLevel || (levelIndex + 1 === sessionBestLevel && usedTime < sessionBestTime)) {
        sessionBestLevel = levelIndex + 1;
        sessionBestTime = usedTime;
    }

}

function continueAfterLevelComplete() {
    tapBtn.classList.remove("tap-btn-win");
    stageEl.classList.remove("stage-win");

    if (levelIndex >= GAME_CONFIG.levels.length - 1) {
        showFinalScreen();
        return;
    }

    levelIndex += 1;
    prepareLevel();
}

function showFinalScreen() {
    gameState = "finished";
    showScreen(finalScreen);
}

function hideLoseOverlay() {
    loseOverlay.classList.add("hidden");
}

function onLevelFailed() {
    if (gameState === "finished") return;

    stopTimer();
    gameState = "level-failed";
    stageEl.classList.remove("stage-win");
    stageEl.classList.add("stage-lose");
    tapBtn.classList.remove("tap-btn-win");
    tapBtn.classList.add("tap-btn-lose");
    tapBtn.disabled = false;
    tapBtn.textContent = "Возобновить";
    setObjectForPose("dead");
    setHeroPose("dead");
}

function handleTap() {
    if (gameState === "level-failed") {
        restartGame();
        return;
    }

    if (gameState === "level-complete") {
        continueAfterLevelComplete();
        return;
    }

    if (gameState === "falling" || gameState === "fly-away" || gameState === "finished") return;
    if (gameState === "waiting") {
        gameState = "running";
        startTimer();
    }

    taps += 1;
    const progress = Math.min(1, taps / currentLevel().tapsRequired);
    updateTapButtonProgress(progress);
    updateLiftVisual(progress);

    if (progress >= 1) {
        onSuccessfulLift();
    }
}

function restartGame() {
    hideLoseOverlay();
    levelIndex = 0;
    sessionBestLevel = 0;
    sessionBestTime = 0;
    showLoading("Готовим картинки...");
    preloadAssets().then(() => {
        showScreen(gameScreen);
        prepareLevel();
    });
}

menuPlayBtn.addEventListener("click", () => {
    levelIndex = 0;
    sessionBestLevel = 0;
    sessionBestTime = 0;
    showLoading("Готовим картинки...");
    previewLevelBeforeFall();
    preloadAssets().then(() => {
        showScreen(rulesScreen);
    });
});
menuDevBtn.addEventListener("click", () => {
    stopTimer();
    initDevMode();
    showScreen(devScreen);
    renderDevMode();
});
menuStatsBtn.addEventListener("click", () => {
    showScreen(statsScreen);
});
rulesContinueBtn.addEventListener("click", () => {
    showScreen(gameScreen);
    requestAnimationFrame(prepareLevel);
});
statsBackBtn.addEventListener("click", () => {
    showScreen(menuScreen);
});
devBackBtn.addEventListener("click", () => {
    showScreen(menuScreen);
});
loseRetryBtn.addEventListener("click", restartGame);
loseMenuBtn.addEventListener("click", () => {
    hideLoseOverlay();
    showScreen(menuScreen);
});
finalRetryBtn.addEventListener("click", restartGame);
finalMenuBtn.addEventListener("click", () => {
    showScreen(menuScreen);
});
gameMenuBtn.addEventListener("click", () => {
    stopTimer();
    hideLoseOverlay();
    stageEl.classList.remove("stage-win", "stage-lose");
    tapBtn.classList.remove("tap-btn-win", "tap-btn-lose");
    showScreen(menuScreen);
});
tapBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleTap();
});

initBodyPoseLayers();
initObjectLevelLayers();
setHeroPose("0");
setImageSrc(heroHeadImg, GAME_CONFIG.heads[0]);
preloadAssets();
showScreen(menuScreen);
