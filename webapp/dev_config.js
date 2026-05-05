window.SUPER_LIFT_PROJECT_CONFIG = {
  "devView": {
    "backgroundSrc": "../assets/places/place-city.PNG",
    "showBackground": true,
    "showGrid": false,
    "x": 195,
    "y": 230,
    "width": 390,
    "rotation": 0,
    "zIndex": 0
  },
  "devShake": {
    "enabled": true,
    "distance": 0.5,
    "speed": 10
  },
  "devFloat": {
    "enabled": true,
    "distance": 6,
    "speed": 0.55
  },
  "poses": {
    "0": {
      "body": {
        "src": "../assets/bodymove/body-standart-0.png",
        "width": 130,
        "x": 196,
        "y": 323,
        "rotation": 0,
        "zIndex": 20
      },
      "head": {
        "width": 46,
        "x": 195,
        "y": 277,
        "rotation": 0,
        "zIndex": 40
      }
    },
    "1": {
      "body": {
        "src": "../assets/bodymove/body-push-middle-1.png",
        "width": 138,
        "x": 196,
        "y": 323,
        "rotation": 0,
        "zIndex": 20
      },
      "head": {
        "width": 48,
        "x": 194,
        "y": 275,
        "rotation": -6,
        "zIndex": 40
      }
    },
    "2": {
      "body": {
        "src": "../assets/bodymove/body-push-up-2.png",
        "width": 149,
        "x": 196,
        "y": 314,
        "rotation": 0,
        "zIndex": 20
      },
      "head": {
        "width": 46,
        "x": 195,
        "y": 265,
        "rotation": -3,
        "zIndex": 40
      }
    },
    "3": {
      "body": {
        "src": "../assets/bodymove/body-push-fly-3.png",
        "width": 126,
        "x": 192,
        "y": 295,
        "rotation": 0,
        "zIndex": 20
      },
      "head": {
        "width": 46,
        "x": 195,
        "y": 243,
        "rotation": 4,
        "zIndex": 40
      }
    },
    "4": {
      "body": {
        "src": "../assets/bodymove/body-push-fly-final-4.png",
        "width": 126,
        "x": 195,
        "y": 295,
        "rotation": 0,
        "zIndex": 20
      },
      "head": {
        "width": 46,
        "x": 199,
        "y": 233,
        "rotation": 0,
        "zIndex": 40
      }
    },
    "0.5": {
      "body": {
        "src": "../assets/bodymove/body-push-down-0.5.png",
        "width": 143,
        "x": 196,
        "y": 323,
        "rotation": 0,
        "zIndex": 20
      },
      "head": {
        "width": 46,
        "x": 192,
        "y": 286,
        "rotation": -10,
        "zIndex": 40
      }
    },
    "dead": {
      "body": {
        "src": "../assets/bodymove/hero-dead.png",
        "width": 111,
        "x": 195,
        "y": 354,
        "rotation": 0,
        "zIndex": 20
      },
      "head": null
    }
  },
  "levels": [
    {
      "title": "Холодильник",
      "src": "../assets/levels/level-1-fridge.png",
      "tapsRequired": 10,
      "fallMs": 420,
      "flyAwayMs": 280,
      "object": {
        "width": 189,
        "rotation": -4,
        "zIndex": 30,
        "startX": 195,
        "startY": -110,
        "contactX": 195,
        "contactY": 248,
        "liftedY": 138,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "width": 188,
          "x": 195,
          "y": 8,
          "rotation": -4,
          "zIndex": 30
        },
        "1": {
          "x": 195,
          "y": 244,
          "rotation": 1,
          "zIndex": 30
        },
        "2": {
          "x": 193,
          "y": 223,
          "rotation": 1,
          "zIndex": 30
        },
        "3": {
          "x": 195,
          "y": 188,
          "rotation": 3,
          "zIndex": 30
        },
        "4": {
          "x": 195,
          "y": 183,
          "rotation": -4,
          "zIndex": 30
        },
        "0.5": {
          "x": 195,
          "y": 253,
          "rotation": 9,
          "zIndex": 30
        },
        "dead": {
          "x": 202,
          "y": 337,
          "rotation": 5,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 420,
        "poseSwitchDelayMs": 0,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 89,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "poseLeadMs": 100,
        "zoomStart": "visible"
      }
    },
    {
      "title": "Машина",
      "src": "../assets/levels/level-2-car.png",
      "tapsRequired": 12,
      "fallMs": 420,
      "flyAwayMs": 280,
      "object": {
        "width": 303,
        "rotation": 2,
        "zIndex": 30,
        "startX": 195,
        "startY": -110,
        "contactX": 195,
        "contactY": 238,
        "liftedY": 128,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "x": 195,
          "y": 48,
          "rotation": 2,
          "zIndex": 30
        },
        "1": {
          "x": 209,
          "y": 240.5,
          "rotation": 0,
          "zIndex": 30
        },
        "2": {
          "x": 209,
          "y": 221,
          "rotation": 1,
          "zIndex": 30
        },
        "3": {
          "x": 210,
          "y": 186.5,
          "rotation": 4,
          "zIndex": 30
        },
        "4": {
          "x": 216,
          "y": 175,
          "rotation": -2,
          "zIndex": 30
        },
        "0.5": {
          "x": 213,
          "y": 254,
          "rotation": 9,
          "zIndex": 30
        },
        "dead": {
          "x": 207,
          "y": 333,
          "rotation": 2,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 420,
        "poseSwitchDelayMs": 0,
        "poseLeadMs": 100,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 89,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "zoomStart": "visible"
      }
    },
    {
      "title": "Морская рыба",
      "src": "../assets/levels/level-3-fishsea.png",
      "tapsRequired": 14,
      "fallMs": 390,
      "flyAwayMs": 260,
      "object": {
        "width": 341,
        "rotation": -8,
        "zIndex": 30,
        "startX": 195,
        "startY": -130,
        "contactX": 195,
        "contactY": 230,
        "liftedY": 118,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "x": 195,
          "y": 60,
          "rotation": -8,
          "zIndex": 30
        },
        "1": {
          "x": 195,
          "y": 252,
          "rotation": -2,
          "zIndex": 30
        },
        "2": {
          "x": 195,
          "y": 222,
          "rotation": 6,
          "zIndex": 30
        },
        "3": {
          "x": 198,
          "y": 196,
          "rotation": 2,
          "zIndex": 30
        },
        "4": {
          "x": 197,
          "y": 198,
          "rotation": -2,
          "zIndex": 30
        },
        "0.5": {
          "x": 205,
          "y": 261,
          "rotation": 5,
          "zIndex": 30
        },
        "dead": {
          "x": 195,
          "y": 266,
          "rotation": 193,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 390,
        "poseSwitchDelayMs": 0,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 80,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "poseLeadMs": 100,
        "zoomStart": "visible"
      }
    },
    {
      "title": "Лодка",
      "src": "../assets/levels/level-4-lodka.png",
      "tapsRequired": 15,
      "fallMs": 390,
      "flyAwayMs": 260,
      "object": {
        "width": 405,
        "rotation": -2,
        "zIndex": 30,
        "startX": 195,
        "startY": -120,
        "contactX": 195,
        "contactY": 226,
        "liftedY": 112,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "x": 195,
          "y": 46,
          "rotation": -2,
          "zIndex": 30
        },
        "1": {
          "x": 195,
          "y": 199.5,
          "rotation": 4,
          "zIndex": 30
        },
        "2": {
          "x": 195,
          "y": 176,
          "rotation": 2,
          "zIndex": 30
        },
        "3": {
          "x": 195,
          "y": 142.5,
          "rotation": 7,
          "zIndex": 30
        },
        "4": {
          "x": 201,
          "y": 134,
          "rotation": -4,
          "zIndex": 30
        },
        "0.5": {
          "x": 212,
          "y": 211,
          "rotation": 10,
          "zIndex": 30
        },
        "dead": {
          "x": 195,
          "y": 292,
          "rotation": 4,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 390,
        "poseSwitchDelayMs": 0,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 80,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "poseLeadMs": 100,
        "zoomStart": "visible"
      }
    },
    {
      "title": "Пушкин",
      "src": "../assets/levels/level-5-pushkin.png",
      "tapsRequired": 17,
      "fallMs": 370,
      "flyAwayMs": 240,
      "object": {
        "width": 258,
        "rotation": 0,
        "zIndex": 30,
        "startX": 195,
        "startY": -150,
        "contactX": 195,
        "contactY": 208,
        "liftedY": 92,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "x": 188,
          "y": -42,
          "rotation": 170,
          "zIndex": 30
        },
        "1": {
          "x": 191,
          "y": 138,
          "rotation": 174,
          "zIndex": 30
        },
        "2": {
          "x": 193,
          "y": 116,
          "rotation": 177,
          "zIndex": 30
        },
        "3": {
          "x": 209,
          "y": 81,
          "rotation": 184,
          "zIndex": 30
        },
        "4": {
          "x": 214,
          "y": 68,
          "rotation": 183,
          "zIndex": 30
        },
        "0.5": {
          "x": 199,
          "y": 152,
          "rotation": 175,
          "zIndex": 30
        },
        "dead": {
          "x": 182,
          "y": 234,
          "rotation": 163,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 370,
        "poseSwitchDelayMs": 0,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 80,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "poseLeadMs": 100,
        "zoomStart": "visible"
      }
    },
    {
      "title": "НЛО",
      "src": "../assets/levels/level-6-ufoship.png",
      "tapsRequired": 18,
      "fallMs": 360,
      "flyAwayMs": 240,
      "object": {
        "width": 415,
        "rotation": 4,
        "zIndex": 30,
        "startX": 195,
        "startY": -130,
        "contactX": 195,
        "contactY": 222,
        "liftedY": 105,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "x": 195,
          "y": 2,
          "rotation": 4,
          "zIndex": 30
        },
        "1": {
          "x": 184,
          "y": 178.75,
          "rotation": -3,
          "zIndex": 30
        },
        "2": {
          "x": 180,
          "y": 154.5,
          "rotation": 2,
          "zIndex": 30
        },
        "3": {
          "x": 181,
          "y": 122.25,
          "rotation": 2,
          "zIndex": 30
        },
        "4": {
          "x": 182,
          "y": 113,
          "rotation": -6,
          "zIndex": 30
        },
        "0.5": {
          "x": 195,
          "y": 188,
          "rotation": 7,
          "zIndex": 30
        },
        "dead": {
          "x": 195,
          "y": 268,
          "rotation": 4,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 360,
        "poseSwitchDelayMs": 0,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 80,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "poseLeadMs": 100,
        "zoomStart": "visible"
      }
    },
    {
      "title": "Сосиска",
      "src": "../assets/levels/level-7-sosiska.png",
      "tapsRequired": 20,
      "fallMs": 350,
      "flyAwayMs": 230,
      "object": {
        "width": 415,
        "rotation": -7,
        "zIndex": 30,
        "startX": 195,
        "startY": -130,
        "contactX": 195,
        "contactY": 222,
        "liftedY": 105,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "x": 195,
          "y": 12,
          "rotation": -7,
          "zIndex": 30
        },
        "1": {
          "x": 195,
          "y": 187.75,
          "rotation": -10,
          "zIndex": 30
        },
        "2": {
          "x": 195,
          "y": 165.5,
          "rotation": -6,
          "zIndex": 30
        },
        "3": {
          "x": 195,
          "y": 132.25,
          "rotation": -2,
          "zIndex": 30
        },
        "4": {
          "x": 195,
          "y": 122,
          "rotation": -12,
          "zIndex": 30
        },
        "0.5": {
          "x": 195,
          "y": 200,
          "rotation": 2,
          "zIndex": 30
        },
        "dead": {
          "x": 195,
          "y": 281,
          "rotation": -2,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 350,
        "poseSwitchDelayMs": 0,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 80,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "poseLeadMs": 100,
        "zoomStart": "visible"
      }
    },
    {
      "title": "Метеорит",
      "src": "../assets/levels/level-8-meteorit.png",
      "tapsRequired": 22,
      "fallMs": 330,
      "flyAwayMs": 220,
      "object": {
        "width": 435,
        "rotation": -9,
        "zIndex": 30,
        "startX": 195,
        "startY": -140,
        "contactX": 195,
        "contactY": 218,
        "liftedY": 92,
        "flyAwayY": -900
      },
      "objectByPose": {
        "0": {
          "x": 195,
          "y": -62,
          "rotation": -9,
          "zIndex": 30
        },
        "1": {
          "x": 195,
          "y": 96.5,
          "rotation": 0,
          "zIndex": 30
        },
        "2": {
          "x": 199,
          "y": 73,
          "rotation": -7,
          "zIndex": 30
        },
        "3": {
          "x": 195,
          "y": 38.5,
          "rotation": 11,
          "zIndex": 30
        },
        "4": {
          "x": 201,
          "y": 29,
          "rotation": -2,
          "zIndex": 30
        },
        "0.5": {
          "x": 203,
          "y": 108,
          "rotation": 10,
          "zIndex": 30
        },
        "dead": {
          "x": 211,
          "y": 188,
          "rotation": -9,
          "zIndex": 10
        }
      },
      "intro": {
        "fallMs": 330,
        "poseSwitchDelayMs": 0,
        "startSignalDelayMs": 180,
        "zoomScale": 1.22,
        "zoomMs": 80,
        "zoomDelayMs": 0,
        "zoomX": 195,
        "zoomY": 255,
        "poseLeadMs": 100,
        "zoomStart": "visible"
      }
    }
  ]
};
