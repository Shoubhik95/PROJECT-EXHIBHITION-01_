var APP_DATA = {
  "scenes": [
    {
      "id": "0-stat-1",
      "name": "stat 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.9829640605620877,
        "pitch": 0.03003210261063316,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 3.124138792247601,
          "pitch": 0.041256288880923364,
          "rotation": 0,
          "target": "1-start-2"
        },
        {
          "yaw": 2.3339401835689326,
          "pitch": 0.06717065314452775,
          "rotation": 0,
          "target": "2-gate-park"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-start-2",
      "name": "start 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.8845361833155234,
        "pitch": 0.004175367477170511,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.09421969922145124,
          "pitch": 0.20091142787218352,
          "rotation": 0,
          "target": "0-stat-1"
        },
        {
          "yaw": -2.585631721305667,
          "pitch": 0.1365715127806162,
          "rotation": 0.7853981633974483,
          "target": "3-start-3"
        },
        {
          "yaw": 2.698435784762001,
          "pitch": 0.1047765802061349,
          "rotation": 11.780972450961727,
          "target": "62-way-to-ab-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gate-park",
      "name": "gate park",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.1625326462565191,
        "pitch": -0.6180150555484865,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -2.7647945796391244,
          "pitch": 0.1095190017128207,
          "rotation": 0.7853981633974483,
          "target": "0-stat-1"
        },
        {
          "yaw": 2.6257578039375105,
          "pitch": 0.0943591173920737,
          "rotation": 5.497787143782138,
          "target": "1-start-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-start-3",
      "name": "start 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0688499546708776,
          "pitch": 0.15450094703668604,
          "rotation": 11.780972450961727,
          "target": "1-start-2"
        },
        {
          "yaw": 0.002384251909319346,
          "pitch": 0.17548221353001026,
          "rotation": 0,
          "target": "62-way-to-ab-"
        },
        {
          "yaw": -3.0752795533423374,
          "pitch": 0.1286412426132486,
          "rotation": 0,
          "target": "63-ab1-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ab-front-2",
      "name": "ab front 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.6946942017487725,
        "pitch": -0.22971957794904618,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 0.0978127673296676,
          "pitch": 0.10311826767570587,
          "rotation": 0,
          "target": "20-mayuri-mid"
        },
        {
          "yaw": 3.0106754061481924,
          "pitch": 0.05249088646062816,
          "rotation": 0,
          "target": "12-ab-front-gate-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lc-end",
      "name": "lc end",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.125768100721668,
          "pitch": 0.08311886693260284,
          "rotation": 0,
          "target": "6-lc-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lc-2",
      "name": "lc 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04351645520992875,
          "pitch": 0.04695800483062129,
          "rotation": 0,
          "target": "5-lc-end"
        },
        {
          "yaw": -3.1180406318941287,
          "pitch": 0.10139739173803619,
          "rotation": 0,
          "target": "7-lc-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lc-",
      "name": "lc ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.017748562244168653,
          "pitch": 0.05388888140219095,
          "rotation": 0,
          "target": "6-lc-2"
        },
        {
          "yaw": -2.9893012157982444,
          "pitch": 0.17049347416172544,
          "rotation": 0,
          "target": "10-arch-path-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-arch-2",
      "name": "arch 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0199211845194327,
          "pitch": -0.013792079914834332,
          "rotation": 0,
          "target": "9-arc-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-arc-1",
      "name": "arc 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1215125663190317,
          "pitch": 0.05026040239447127,
          "rotation": 0,
          "target": "10-arch-path-2"
        },
        {
          "yaw": -0.07410787568948685,
          "pitch": 0.06221532914892691,
          "rotation": 0,
          "target": "8-arch-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-arch-path-2",
      "name": "arch path 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.023560959619109312,
          "pitch": 0.06176306089980521,
          "rotation": 0,
          "target": "7-lc-"
        },
        {
          "yaw": -2.2988237887704273,
          "pitch": 0.12977247677534187,
          "rotation": 0.7853981633974483,
          "target": "9-arc-1"
        },
        {
          "yaw": -3.100508200115163,
          "pitch": 0.06498082064578092,
          "rotation": 0,
          "target": "11-arch-path"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-arch-path",
      "name": "arch path",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05502555100871831,
          "pitch": 0.06508968554118155,
          "rotation": 0,
          "target": "10-arch-path-2"
        },
        {
          "yaw": -3.071618875585159,
          "pitch": 0.0670210261052997,
          "rotation": 0,
          "target": "16-arch-mid-point"
        },
        {
          "yaw": 2.6314414990787087,
          "pitch": 0.05045318598966375,
          "rotation": 5.497787143782138,
          "target": "15-ab-back-gate-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ab-front-gate-",
      "name": "ab front gate ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.447051114242722,
          "pitch": 0.05217033235380519,
          "rotation": 0,
          "target": "4-ab-front-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ab-back-gate",
      "name": "ab back gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 1.5463786179812136,
        "pitch": -0.6274807774463298,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 3.140871579100039,
          "pitch": 0.09293562617654594,
          "rotation": 0,
          "target": "14-ab-back-gate-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ab-back-gate-2",
      "name": "ab back gate 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04121597417779199,
          "pitch": 0.1316759760390518,
          "rotation": 0,
          "target": "13-ab-back-gate"
        },
        {
          "yaw": 3.0881865667720083,
          "pitch": 0.08831328143504535,
          "rotation": 0,
          "target": "15-ab-back-gate-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ab-back-gate-3",
      "name": "ab back gate 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.019872009938685764,
          "pitch": 0.10432320737517742,
          "rotation": 0,
          "target": "14-ab-back-gate-2"
        },
        {
          "yaw": 2.9515775477301407,
          "pitch": 0.096316432845299,
          "rotation": 0,
          "target": "16-arch-mid-point"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-arch-mid-point",
      "name": "arch mid point",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3210766351801855,
          "pitch": 0.11376885490331645,
          "rotation": 0,
          "target": "15-ab-back-gate-3"
        },
        {
          "yaw": -0.08229239040074532,
          "pitch": 0.1023900168657157,
          "rotation": 0,
          "target": "11-arch-path"
        },
        {
          "yaw": 2.9731189021907127,
          "pitch": 0.032157212617070385,
          "rotation": 0,
          "target": "17-path-to-arch-mid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-path-to-arch-mid",
      "name": "path to arch mid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07797419472182554,
          "pitch": 0.11268170779869635,
          "rotation": 0,
          "target": "16-arch-mid-point"
        },
        {
          "yaw": 3.123279400688416,
          "pitch": 0.09957298875271192,
          "rotation": 0,
          "target": "18-underbelly"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-underbelly",
      "name": "underbelly",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.055442682938640075,
          "pitch": 0.09877709422663372,
          "rotation": 0,
          "target": "17-path-to-arch-mid"
        },
        {
          "yaw": -2.9865940280425924,
          "pitch": 0.13771793423182288,
          "rotation": 0,
          "target": "19-mayuri-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-mayuri-",
      "name": "mayuri ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.007415017003808089,
          "pitch": 0.12119617822533257,
          "rotation": 0,
          "target": "18-underbelly"
        },
        {
          "yaw": -2.994105967891505,
          "pitch": 0.09953099425738543,
          "rotation": 0,
          "target": "20-mayuri-mid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-mayuri-mid",
      "name": "mayuri mid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010370478667550032,
          "pitch": 0.20437508986983666,
          "rotation": 0,
          "target": "19-mayuri-"
        },
        {
          "yaw": -2.4870639876866925,
          "pitch": 0.1459363847096622,
          "rotation": 0.7853981633974483,
          "target": "1-start-2"
        },
        {
          "yaw": 2.4075668005703035,
          "pitch": 0.03366835791921119,
          "rotation": 5.497787143782138,
          "target": "4-ab-front-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-mph-5",
      "name": "mph 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "22-mph-4",
      "name": "mph 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "23-mph-3",
      "name": "mph 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "24-mph-2",
      "name": "mph 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "25-mph1",
      "name": "mph1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "26-parcel",
      "name": "parcel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1838382060668735,
          "pitch": 0.22459331240070668,
          "rotation": 12.566370614359176,
          "target": "27-way-to-parcel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-way-to-parcel",
      "name": "way to parcel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.017886222524746,
          "pitch": 0.12712709913013498,
          "rotation": 0.7853981633974483,
          "target": "67-girls-21"
        },
        {
          "yaw": 3.0848512126389087,
          "pitch": 0.2033289034803527,
          "rotation": 0,
          "target": "66-mid-"
        },
        {
          "yaw": 0.17544764044456684,
          "pitch": 0.12423463657753153,
          "rotation": 0,
          "target": "26-parcel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-girls-12",
      "name": "girls 12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 3.1164354224249706,
        "pitch": -0.08852875668508275,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 3.0725866401882502,
          "pitch": 0.034530577715356614,
          "rotation": 0,
          "target": "29-girls-11"
        },
        {
          "yaw": -0.1404597875050051,
          "pitch": 0.0702984914098348,
          "rotation": 0,
          "target": "28-girls-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-girls-11",
      "name": "girls 11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.1023510532041705,
        "pitch": -0.12710164185267026,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 3.1260155915161025,
          "pitch": 0.09019625767834327,
          "rotation": 0,
          "target": "30-girls-10"
        },
        {
          "yaw": -0.06066943501974542,
          "pitch": 0.05779757964606347,
          "rotation": 0,
          "target": "30-girls-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-girls-10",
      "name": "girls 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.116646110107723,
        "pitch": -0.17164860357589617,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 3.1020493191811003,
          "pitch": 0.06885489127605382,
          "rotation": 0,
          "target": "31-girls-9"
        },
        {
          "yaw": -0.04676993746440061,
          "pitch": 0.08030958426807544,
          "rotation": 0,
          "target": "29-girls-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-girls-9",
      "name": "girls 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.0562139530758436,
        "pitch": -0.26085017269079813,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.014727268964161766,
          "pitch": 0.05296661498876176,
          "rotation": 0,
          "target": "30-girls-10"
        },
        {
          "yaw": 3.1339884694247466,
          "pitch": 0.04086543186677538,
          "rotation": 0,
          "target": "32-girls-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-girls-8",
      "name": "girls 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.0718716484791777,
        "pitch": 0.004579029256266409,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 0.008836765786696787,
          "pitch": 0.06764428119372212,
          "rotation": 0,
          "target": "31-girls-9"
        },
        {
          "yaw": 3.1172952146256563,
          "pitch": 0.08357578397788146,
          "rotation": 0,
          "target": "33-girls-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-girls-7",
      "name": "girls 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.065887139115496,
        "pitch": -0.18835880585998943,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.07536391542934595,
          "pitch": 0.08201528168771155,
          "rotation": 0,
          "target": "32-girls-8"
        },
        {
          "yaw": 3.0926985636653566,
          "pitch": 0.06747823035572864,
          "rotation": 0,
          "target": "34-girls-6-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-girls-6-",
      "name": "girls 6 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 3.0121984579136267,
        "pitch": -0.20257377597771153,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.04164372999223076,
          "pitch": 0.08251007812352995,
          "rotation": 0,
          "target": "33-girls-7"
        },
        {
          "yaw": 3.0639830743401184,
          "pitch": 0.06390580368744558,
          "rotation": 0,
          "target": "35-girls-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-girls-5",
      "name": "girls 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.9536181302654807,
        "pitch": -0.09498682865835306,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.0588452923747127,
          "pitch": 0.10837464858855483,
          "rotation": 0,
          "target": "36-girls-4"
        },
        {
          "yaw": 3.072400018169529,
          "pitch": 0.07654748722938365,
          "rotation": 0,
          "target": "36-girls-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-girls-4",
      "name": "girls 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 3.135554872787667,
        "pitch": -0.2833081483412503,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.04415736636643608,
          "pitch": -3.26121352145492e-9,
          "rotation": 0,
          "target": "35-girls-5"
        },
        {
          "yaw": 3.058004507632732,
          "pitch": 0.06410326532978772,
          "rotation": 0,
          "target": "37-girls-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-girls-3",
      "name": "girls 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.0053652553531442,
        "pitch": -0.0987685992753633,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.04709579741195569,
          "pitch": 0.08220148860579357,
          "rotation": 0,
          "target": "36-girls-4"
        },
        {
          "yaw": 3.0991710409241,
          "pitch": 0.06368944319091341,
          "rotation": 0,
          "target": "38-girls-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-girls-2",
      "name": "girls 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.101326624473373,
        "pitch": -0.09543741526891836,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.08229234599931345,
          "pitch": 0.06449574611753484,
          "rotation": 0,
          "target": "37-girls-3"
        },
        {
          "yaw": 3.1306326286869073,
          "pitch": 0.10842915555137367,
          "rotation": 0,
          "target": "39-girls-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-girls-1",
      "name": "girls 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.5528126811147054,
        "pitch": -0.09675158392505523,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.06978485958949143,
          "pitch": 0.09708072686163405,
          "rotation": 0,
          "target": "38-girls-2"
        },
        {
          "yaw": -3.071388168571641,
          "pitch": 0.1271547068323322,
          "rotation": 0,
          "target": "49-ab2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-ab2-10",
      "name": "ab2 10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6725761644159611,
          "pitch": 0.03601148938748722,
          "rotation": 0,
          "target": "41-ab2-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-ab2-9",
      "name": "ab2 9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1288907796312433,
          "pitch": 0.06708744808409506,
          "rotation": 0,
          "target": "40-ab2-10"
        },
        {
          "yaw": -3.092598383771497,
          "pitch": 0.032683950847928855,
          "rotation": 0,
          "target": "42-ab2-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-ab2-8",
      "name": "ab2 8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16061611365978123,
          "pitch": 0.02906931974429483,
          "rotation": 0,
          "target": "41-ab2-9"
        },
        {
          "yaw": 3.033282346439373,
          "pitch": 0.024751938267232987,
          "rotation": 0,
          "target": "43-ab2-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-ab2-7",
      "name": "ab2 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0705785482381529,
          "pitch": 0.06455347108513365,
          "rotation": 0,
          "target": "42-ab2-8"
        },
        {
          "yaw": 2.992784654240115,
          "pitch": 0.08766858698892932,
          "rotation": 0,
          "target": "44-ab2-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-ab2-6",
      "name": "ab2 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07057857789226674,
          "pitch": 0.058699107325084654,
          "rotation": 0,
          "target": "43-ab2-7"
        },
        {
          "yaw": 3.0694703162123744,
          "pitch": 0.09086353296573435,
          "rotation": 0,
          "target": "45-ab2-5-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-ab2-5-",
      "name": "ab2 5 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.014727328555878216,
          "pitch": 0.18062118830087037,
          "rotation": 0,
          "target": "44-ab2-6"
        },
        {
          "yaw": -3.1345122837899133,
          "pitch": 0.17878294120715843,
          "rotation": 0,
          "target": "46-ab2-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-ab2-4",
      "name": "ab2 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.029448174563555085,
          "pitch": 0.10851441592051003,
          "rotation": 0,
          "target": "45-ab2-5-"
        },
        {
          "yaw": -3.139282343642229,
          "pitch": 0.13129547277272913,
          "rotation": 0,
          "target": "47-ab2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-ab2-3",
      "name": "ab2 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.035333361365275096,
          "pitch": 0.12301631713994965,
          "rotation": 0,
          "target": "47-ab2-3"
        },
        {
          "yaw": 3.0378703659603126,
          "pitch": 0.14773763848022448,
          "rotation": 0,
          "target": "48-ab2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-ab2-2",
      "name": "ab2 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0852174494031992,
          "pitch": 0.15144998410790933,
          "rotation": 0,
          "target": "47-ab2-3"
        },
        {
          "yaw": -3.1111436843704983,
          "pitch": 0.22486566359897076,
          "rotation": 0,
          "target": "49-ab2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-ab2-1",
      "name": "ab2 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.5968442726351988,
        "pitch": -0.049063008857586965,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 1.8951965281664256,
          "pitch": 0.13290102799485304,
          "rotation": 5.497787143782138,
          "target": "39-girls-1"
        },
        {
          "yaw": -0.07469606917408633,
          "pitch": 0.05976034416492659,
          "rotation": 0,
          "target": "48-ab2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-hostel-start-mid-",
      "name": "hostel start mid ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "51-way-to-ab-12-",
      "name": "way to ab 12 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.012402659115535286,
          "pitch": 0.09456895353191186,
          "rotation": 0,
          "target": "20-mayuri-mid"
        },
        {
          "yaw": 3.0757094637609326,
          "pitch": 0.13750204183703474,
          "rotation": 6.283185307179586,
          "target": "29-girls-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-way-to-ab-11",
      "name": "way to ab 11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04415629929143883,
          "pitch": 0.08221243507447795,
          "rotation": 0,
          "target": "51-way-to-ab-12-"
        },
        {
          "yaw": 3.1222507727918716,
          "pitch": 0.1395262133980637,
          "rotation": 0,
          "target": "53-way-to-ab-10-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-way-to-ab-10-",
      "name": "way to ab 10 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04936085829909409,
          "pitch": 0.13675617857265365,
          "rotation": 0,
          "target": "52-way-to-ab-11"
        },
        {
          "yaw": 2.823066044793732,
          "pitch": 0.14572863564576544,
          "rotation": 5.497787143782138,
          "target": "54-way-to-ab-9-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-way-to-ab-9-",
      "name": "way to ab 9 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12889101411089143,
          "pitch": 0.0758064420271527,
          "rotation": 0,
          "target": "53-way-to-ab-10-"
        },
        {
          "yaw": 2.008754946429166,
          "pitch": 0.11019156003156283,
          "rotation": 6.283185307179586,
          "target": "55-way-to-ab-8-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-way-to-ab-8-",
      "name": "way to ab 8 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07350904896031452,
          "pitch": 0.15732530807854772,
          "rotation": 0,
          "target": "54-way-to-ab-9-"
        },
        {
          "yaw": 3.0796933461697895,
          "pitch": 0.13181637731446116,
          "rotation": 0,
          "target": "56-way-to-ab-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-way-to-ab-7",
      "name": "way to ab 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.017671980536272613,
          "pitch": 0.07935277527946738,
          "rotation": 0,
          "target": "55-way-to-ab-8-"
        },
        {
          "yaw": 3.140063438833442,
          "pitch": 0.08022483482386633,
          "rotation": 0,
          "target": "57-way-to-ab-6-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-way-to-ab-6-",
      "name": "way to ab 6 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.029168964071235592,
          "pitch": 0.10514877619084473,
          "rotation": 0,
          "target": "56-way-to-ab-7"
        },
        {
          "yaw": 3.1150315219787226,
          "pitch": 0.11615329937438901,
          "rotation": 0,
          "target": "58-way-to-ab-5-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-way-to-ab-5-",
      "name": "way to ab 5 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.007403847712476264,
          "pitch": 0.06579106335517615,
          "rotation": 0,
          "target": "57-way-to-ab-6-"
        },
        {
          "yaw": 3.132606631391914,
          "pitch": 0.08126148970575997,
          "rotation": 0,
          "target": "59-way-to-ab-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-way-to-ab-4",
      "name": "way to ab 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06215575558829656,
          "pitch": 0.09952743302404343,
          "rotation": 0,
          "target": "58-way-to-ab-5-"
        },
        {
          "yaw": 3.1229169085872,
          "pitch": 0.07749168123877936,
          "rotation": 0,
          "target": "60-way-to-ab-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-way-to-ab-3",
      "name": "way to ab 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4808710875378424,
          "pitch": 0.13507169884406167,
          "rotation": 0,
          "target": "25-mph1"
        },
        {
          "yaw": -0.02072664829966442,
          "pitch": 0.15075485222094542,
          "rotation": 0,
          "target": "59-way-to-ab-4"
        },
        {
          "yaw": 3.1386016380463975,
          "pitch": 0.10294053483710286,
          "rotation": 0,
          "target": "61-way-to-ab-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-way-to-ab-2",
      "name": "way to ab 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1203517431930763,
          "pitch": 0.10408083502209209,
          "rotation": 0,
          "target": "62-way-to-ab-"
        },
        {
          "yaw": -0.066198897932642,
          "pitch": 0.07540386059297788,
          "rotation": 0,
          "target": "60-way-to-ab-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-way-to-ab-",
      "name": "way to ab ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0998069964227923,
          "pitch": 0.089782054603738,
          "rotation": 0,
          "target": "3-start-3"
        },
        {
          "yaw": -2.4016520312506024,
          "pitch": 0.2030175889272492,
          "rotation": 0.7853981633974483,
          "target": "1-start-2"
        },
        {
          "yaw": -0.01476493774634946,
          "pitch": 0.11994915722413424,
          "rotation": 0,
          "target": "61-way-to-ab-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-ab1-3",
      "name": "ab1 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 3.124394568492514,
        "pitch": -0.10156534234605985,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.022703859132418458,
          "pitch": 0.1156864726229152,
          "rotation": 0,
          "target": "3-start-3"
        },
        {
          "yaw": 3.124664867858458,
          "pitch": 0.112347015411558,
          "rotation": 0,
          "target": "64-ab1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-ab1-2",
      "name": "ab1 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.13685685012765,
        "pitch": -0.1335445700706792,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.05884535177319705,
          "pitch": 0.09964809447888356,
          "rotation": 0,
          "target": "63-ab1-3"
        },
        {
          "yaw": 3.070430135129432,
          "pitch": 0.20534657488750696,
          "rotation": 0,
          "target": "65-ab1-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-ab1-1",
      "name": "ab1 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.11651232573654,
        "pitch": -0.19525060635803015,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 0.002942536857842626,
          "pitch": 0.10157709237296508,
          "rotation": 0,
          "target": "64-ab1-2"
        },
        {
          "yaw": -2.966745454081032,
          "pitch": 0.04812373605998843,
          "rotation": 0,
          "target": "66-mid-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-mid-",
      "name": "mid ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5148817693674843,
          "pitch": 0.09573080555775171,
          "rotation": 0,
          "target": "27-way-to-parcel"
        },
        {
          "yaw": 0.0938117136085257,
          "pitch": 0.06287517906624274,
          "rotation": 0,
          "target": "67-girls-21"
        },
        {
          "yaw": -1.634202785407325,
          "pitch": 0.10233955830533503,
          "rotation": 0,
          "target": "65-ab1-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-girls-21",
      "name": "girls 21",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.9091648472093308,
        "pitch": -0.09498924804251274,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.1143795503955154,
          "pitch": 0.055544713032707804,
          "rotation": 0,
          "target": "66-mid-"
        },
        {
          "yaw": 3.0283919994399433,
          "pitch": 0.10185692076227681,
          "rotation": 0,
          "target": "68-girls-20-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-girls-20-",
      "name": "girls 20 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.9273915519966227,
        "pitch": -0.0836822326704656,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.014727259652953961,
          "pitch": 0.11727315080123901,
          "rotation": 0,
          "target": "67-girls-21"
        },
        {
          "yaw": 3.0567046981418473,
          "pitch": 0.11714139627298437,
          "rotation": 0,
          "target": "69-girls-19"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-girls-19",
      "name": "girls 19",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.9504719676112012,
        "pitch": 0.05780311330720522,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.012689021139156154,
          "pitch": 0.10238876340331338,
          "rotation": 0,
          "target": "68-girls-20-"
        },
        {
          "yaw": 3.101459432968289,
          "pitch": 0.08766599030174405,
          "rotation": 5.497787143782138,
          "target": "70-girls-18"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-girls-18",
      "name": "girls 18",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.8441088819078235,
        "pitch": 0.02071481261966568,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 0.014325246688535742,
          "pitch": 0.16415230520300028,
          "rotation": 0,
          "target": "69-girls-19"
        },
        {
          "yaw": 2.985811182251892,
          "pitch": 0.13828959331764956,
          "rotation": 0,
          "target": "71-girls-17"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-girls-17",
      "name": "girls 17",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.6641517211590333,
        "pitch": -0.11111795430092286,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 0.04877839944644968,
          "pitch": 0.12290201691744151,
          "rotation": 0,
          "target": "70-girls-18"
        },
        {
          "yaw": 3.0027383787130706,
          "pitch": 0.10736270572475881,
          "rotation": 0,
          "target": "72-girls-16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-girls-16",
      "name": "girls 16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 3.061717231358653,
        "pitch": -0.09150993096786131,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 0.017672151690568683,
          "pitch": 0.14043907836384406,
          "rotation": 0,
          "target": "71-girls-17"
        },
        {
          "yaw": 3.0857762173455203,
          "pitch": 0.092332395176145,
          "rotation": 0,
          "target": "73-girls-15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-girls-15",
      "name": "girls 15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.6156075024898549,
        "pitch": -0.007335572084167907,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": 1.5167426018417993,
          "pitch": 0.07674114771666751,
          "rotation": 0,
          "target": "72-girls-16"
        },
        {
          "yaw": -1.5830478084664819,
          "pitch": 0.12494119286027328,
          "rotation": 0,
          "target": "74-girls-14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-girls-14",
      "name": "girls 14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.1179906549820515,
        "pitch": 0.0832731541913212,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.05593060440912012,
          "pitch": 0.11367684736580941,
          "rotation": 0,
          "target": "73-girls-15"
        },
        {
          "yaw": -3.1373384392043597,
          "pitch": 0.11578411099829111,
          "rotation": 0,
          "target": "75-girls-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-girls-13",
      "name": "girls 13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.068997400317631,
        "pitch": -0.1305340819369114,
        "fov": 1.4441589412370424
      },
      "linkHotspots": [
        {
          "yaw": -0.07057860013285122,
          "pitch": 0.11119594687336054,
          "rotation": 0,
          "target": "74-girls-14"
        },
        {
          "yaw": -3.1219482898286834,
          "pitch": 0.08900627800167626,
          "rotation": 0,
          "target": "28-girls-12"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
