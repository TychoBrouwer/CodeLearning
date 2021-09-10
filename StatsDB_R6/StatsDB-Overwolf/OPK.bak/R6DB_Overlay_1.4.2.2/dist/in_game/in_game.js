/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/in_game/in_game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/consts.ts":
/*!***********************!*\
  !*** ./src/consts.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.operators = exports.rankOffset = exports.seasonColors = exports.databaseObject = exports.gameModesPVE = exports.gameModesPVP = exports.hotkeys = exports.windowNames = exports.interestingFeatures2 = exports.interestingFeatures1 = exports.rainbowClassId = void 0;
const rainbowClassId = 10826;
exports.rainbowClassId = rainbowClassId;
const interestingFeatures1 = [
    'gep_internal',
    'game_info',
    'match',
    'match_info',
    'roster',
    'kill',
    'death',
    'me',
];
exports.interestingFeatures1 = interestingFeatures1;
const interestingFeatures2 = [
    'gep_internal',
    'game_info',
    'match',
    'match_info',
];
exports.interestingFeatures2 = interestingFeatures2;
const windowNames = {
    desktop: 'desktop',
    inLobby: 'in_lobby',
    inGame: 'in_game',
    inLobbyDesktopOnly: 'in_lobby_desktop_only',
    inGameDesktopOnly: 'in_game_desktop_only',
    settings: 'settings_in_game',
    settingsDesktopOnly: 'settings_desktop',
    statistics: 'statistics_in_game',
    statisticsDesktopOnly: 'statistics_desktop'
};
exports.windowNames = windowNames;
const hotkeys = {
    toggle: 'showhide',
};
exports.hotkeys = hotkeys;
const gameModesPVE = [
    'OPERATIONS',
    'MATCHMAKING_PVE_LONEWOLF',
    'MATCHMAKING_PVE',
    'MATCHMAKING_PVE_PARTY',
];
exports.gameModesPVE = gameModesPVE;
const gameModesPVP = [
    'MATCHMAKING_PVP_NEWCOMER',
    'MATCHMAKING_PVP',
    'MATCHMAKING_PVP_EVENT',
    'MATCHMAKING_PVP_UNRANKED',
    'MATCHMAKING_PVP_RANKED',
    'CUSTOMGAME_PVP',
    'CUSTOMGAME_PVP_DEDICATED',
];
exports.gameModesPVP = gameModesPVP;
const databaseObject = {
    MATCHMAKING_PVP_RANKED: {
        kills: 0,
        deaths: 0,
        wins: 0,
        losses: 0,
    }, MATCHMAKING_PVP: {
        kills: 0,
        deaths: 0,
        wins: 0,
        losses: 0,
    }, MATCHMAKING_PVP_UNRANKED: {
        kills: 0,
        deaths: 0,
        wins: 0,
        losses: 0,
    }, CUSTOMGAME_PVP_DEDICATED: {
        kills: 0,
        deaths: 0,
        wins: 0,
        losses: 0,
    }
};
exports.databaseObject = databaseObject;
const seasonColors = {
    6: '#0050b3',
    7: '#ca361c',
    8: '#006543',
    9: '#ffc113',
    10: '#949f39',
    11: '#81a0c1',
    12: '#aa854f',
    13: '#d2005a',
    14: '#304395',
    15: '#13630c',
    16: '#069db3',
    17: '#946a97',
    18: '#2b7e9a',
    19: '#6ca511',
    20: '#d14007',
};
exports.seasonColors = seasonColors;
const operators = {
    768: {
        "side": "atk",
        "operator_name": "Sledge",
        "ubisoft_id": "4:1"
    },
    1024: {
        "side": "atk",
        "operator_name": "Thatcher",
        "ubisoft_id": "5:1"
    },
    513: {
        "side": "atk",
        "operator_name": "Ash",
        "ubisoft_id": "3:2"
    },
    1025: {
        "side": "atk",
        "operator_name": "Thermite",
        "ubisoft_id": "5:2"
    },
    770: {
        "side": "atk",
        "operator_name": "Twitch",
        "ubisoft_id": "4:3"
    },
    1026: {
        "side": "atk",
        "operator_name": "Montagne",
        "ubisoft_id": "5:3"
    },
    259: {
        "side": "atk",
        "operator_name": "Glaz",
        "ubisoft_id": "2:4"
    },
    515: {
        "side": "atk",
        "operator_name": "Fuze",
        "ubisoft_id": "3:4"
    },
    260: {
        "side": "atk",
        "operator_name": "Blitz",
        "ubisoft_id": "2:5"
    },
    516: {
        "side": "atk",
        "operator_name": "IQ",
        "ubisoft_id": "3:5"
    },
    261: {
        "side": "atk",
        "operator_name": "Buck",
        "ubisoft_id": "2:6"
    },
    262: {
        "side": "atk",
        "operator_name": "Blackbeard",
        "ubisoft_id": "2:7"
    },
    263: {
        "side": "atk",
        "operator_name": "Capitao",
        "ubisoft_id": "2:8"
    },
    264: {
        "side": "atk",
        "operator_name": "Hibana",
        "ubisoft_id": "2:9"
    },
    265: {
        "side": "atk",
        "operator_name": "Jackal",
        "ubisoft_id": "2:A"
    },
    266: {
        "side": "atk",
        "operator_name": "Ying",
        "ubisoft_id": "2:B"
    },
    523: {
        "side": "atk",
        "operator_name": "Zofia",
        "ubisoft_id": "3:C"
    },
    268: {
        "side": "atk",
        "operator_name": "Dokkaebi",
        "ubisoft_id": "2:D"
    },
    525: {
        "side": "atk",
        "operator_name": "Lion",
        "ubisoft_id": "3:E"
    },
    781: {
        "side": "atk",
        "operator_name": "Finka",
        "ubisoft_id": "4:E"
    },
    271: {
        "side": "atk",
        "operator_name": "Maverick",
        "ubisoft_id": "2:10"
    },
    272: {
        "side": "atk",
        "operator_name": "Nomad",
        "ubisoft_id": "2:11"
    },
    529: {
        "side": "atk",
        "operator_name": "Gridlock",
        "ubisoft_id": "3:12"
    },
    274: {
        "side": "atk",
        "operator_name": "Nokk",
        "ubisoft_id": "2:13"
    },
    277: {
        "side": "atk",
        "operator_name": "Amaru",
        "ubisoft_id": "2:16"
    },
    278: {
        "side": "atk",
        "operator_name": "Kali",
        "ubisoft_id": "2:17"
    },
    280: {
        "side": "atk",
        "operator_name": "Iana",
        "ubisoft_id": "2:19"
    },
    790: {
        "side": "atk",
        "operator_name": "Ace",
        "ubisoft_id": "4:17"
    },
    26: {
        "side": "atk",
        "operator_name": "Zero",
        "ubisoft_id": "1:1B"
    },
    1: {
        "side": "atk",
        "operator_name": "Recruit",
        "ubisoft_id": "recruit"
    },
    256: {
        "side": "def",
        "operator_name": "Smoke",
        "ubisoft_id": "2:1"
    },
    512: {
        "side": "def",
        "operator_name": "Mute",
        "ubisoft_id": "3:1"
    },
    257: {
        "side": "def",
        "operator_name": "Castle",
        "ubisoft_id": "2:2"
    },
    769: {
        "side": "def",
        "operator_name": "Pulse",
        "ubisoft_id": "4:2"
    },
    258: {
        "side": "def",
        "operator_name": "Doc",
        "ubisoft_id": "2:3"
    },
    514: {
        "side": "def",
        "operator_name": "Rook",
        "ubisoft_id": "3:3"
    },
    771: {
        "side": "def",
        "operator_name": "Kapkan",
        "ubisoft_id": "4:4"
    },
    1027: {
        "side": "def",
        "operator_name": "Tachanka",
        "ubisoft_id": "5:4"
    },
    772: {
        "side": "def",
        "operator_name": "Jager",
        "ubisoft_id": "4:5"
    },
    1028: {
        "side": "def",
        "operator_name": "Bandit",
        "ubisoft_id": "5:5"
    },
    517: {
        "side": "def",
        "operator_name": "Frost",
        "ubisoft_id": "3:6"
    },
    518: {
        "side": "def",
        "operator_name": "Valkyrie",
        "ubisoft_id": "3:7"
    },
    519: {
        "side": "def",
        "operator_name": "Caveira",
        "ubisoft_id": "3:8"
    },
    520: {
        "side": "def",
        "operator_name": "Echo",
        "ubisoft_id": "3:9"
    },
    521: {
        "side": "def",
        "operator_name": "Mira",
        "ubisoft_id": "3:A"
    },
    522: {
        "side": "def",
        "operator_name": "Lesion",
        "ubisoft_id": "3:B"
    },
    267: {
        "side": "def",
        "operator_name": "Ela",
        "ubisoft_id": "2:C"
    },
    524: {
        "side": "def",
        "operator_name": "Vigil",
        "ubisoft_id": "3:D"
    },
    270: {
        "side": "def",
        "operator_name": "Maestro",
        "ubisoft_id": "2:F"
    },
    526: {
        "side": "def",
        "operator_name": "Alibi",
        "ubisoft_id": "3:F"
    },
    527: {
        "side": "def",
        "operator_name": "Clash",
        "ubisoft_id": "3:10"
    },
    528: {
        "side": "def",
        "operator_name": "Kaid",
        "ubisoft_id": "3:11"
    },
    273: {
        "side": "def",
        "operator_name": "Mozzie",
        "ubisoft_id": "2:12"
    },
    275: {
        "side": "def",
        "operator_name": "Warden",
        "ubisoft_id": "2:14"
    },
    276: {
        "side": "def",
        "operator_name": "Goyo",
        "ubisoft_id": "2:15"
    },
    534: {
        "side": "def",
        "operator_name": "Wamai",
        "ubisoft_id": "3:17"
    },
    279: {
        "side": "def",
        "operator_name": "Oryx",
        "ubisoft_id": "2:18"
    },
    281: {
        "side": "def",
        "operator_name": "Melusi",
        "ubisoft_id": "2:1A"
    },
    1046: {
        "side": "def",
        "operator_name": "Aruni",
        "ubisoft_id": "5:17"
    }
};
exports.operators = operators;
const rankOffset = {
    0: 0,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 7,
    6: 8,
    7: 9,
    8: 10,
    9: 12,
    10: 13,
    11: 14,
    12: 15,
    13: 50,
    14: 16,
    15: 17,
    16: 18,
    17: 19,
    18: 20,
    19: 21,
    20: 22,
    21: 22,
    22: 22,
    23: 22,
};
exports.rankOffset = rankOffset;


/***/ }),

/***/ "./src/odk-ts/controllers.ts":
/*!***********************************!*\
  !*** ./src/odk-ts/controllers.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controllers = void 0;
class Controllers {
    setShortcutText(shortcutContainer) {
        overwolf.settings.hotkeys.get(result => {
            if (!result.success)
                console.error(result);
            const hotkey = result.games['10826'][0].binding;
            if (hotkey === 'Unassigned') {
                shortcutContainer.innerHTML = 'UNASSIGNED to show/hide the overlay';
            }
            else {
                shortcutContainer.innerHTML = hotkey + ' to show/hide the overlay in game';
            }
            console.log(`app hotkey "${hotkey}"`);
        });
    }
    getOverwolfStatus(overwolfStatusDiv) {
        fetch('https://game-events-status.overwolf.com/10826_prod.json')
            .then(response => response.json())
            .then(data => {
            const overwolfStatus = data.state;
            if (overwolfStatus === 2) {
                overwolfStatusDiv.style.display = 'block';
                overwolfStatusDiv.innerHTML = '<h4 class="announcement">Due to a recent game patch, some functions might not work - we’ll fix it shortly</h4>';
            }
            else if (overwolfStatus === 3) {
                overwolfStatusDiv.style.display = 'block';
                overwolfStatusDiv.innerHTML = '<h4 class="announcement">Due to a recent game patch, Overwolf app API has stopped working - we’ll fix it shortly</h4>';
            }
            else if (overwolfStatus === 1) {
                overwolfStatusDiv.style.display = 'none';
                overwolfStatusDiv.innerHTML = '';
            }
            console.log(`overwolf status "${overwolfStatus}"`);
        });
    }
    getInternetStatus(ineternetStatusDiv) {
        const internetStatus = navigator.onLine;
        if (internetStatus === false) {
            ineternetStatusDiv.style.display = 'block';
        }
        else {
            ineternetStatusDiv.style.display = 'none';
        }
        console.log(`internet status "${internetStatus}"`);
    }
    setTableTab(tab) {
        for (let i = 0; i < Object.keys(JSON.parse(localStorage.valuesTable)).length; i++) {
            for (let j = 0; j < document.getElementsByClassName("player-tr").length; j++) {
                const rankedStats = document.getElementById('ranked' + i + j);
                const casualStats = document.getElementById('casual' + i + j);
                const seasonStats = document.getElementById('seasonal' + i + j);
                if (rankedStats) {
                    if (tab === 'ranked') {
                        rankedStats.classList.add("current");
                        casualStats.classList.remove("current");
                        seasonStats.classList.remove("current");
                    }
                    else if (tab === 'casual') {
                        rankedStats.classList.remove("current");
                        casualStats.classList.add("current");
                        seasonStats.classList.remove("current");
                    }
                    else if (tab === 'season') {
                        rankedStats.classList.remove("current");
                        casualStats.classList.remove("current");
                        seasonStats.classList.add("current");
                    }
                }
            }
        }
        console.log(`current table tab "${tab}"`);
    }
    showDetailedPlayer(detailedstatus) {
        if (detailedstatus) {
            document.getElementById('table-body').style.display = 'block';
            document.getElementById('detailed-body').style.display = 'none';
            detailedstatus = false;
        }
        else {
            document.getElementById('table-body').style.display = 'none';
            document.getElementById('detailed-body').style.display = 'block';
            detailedstatus = true;
        }
        console.log(`detailed stats "${!detailedstatus}"`);
        return detailedstatus;
    }
    setTheme() {
        const selected = JSON.parse(localStorage.getItem("settings"));
        const styleVariables = document.documentElement.style;
        if (selected.theme === "0") {
            styleVariables.setProperty("--main-text-color", "rgba(255, 255, 255, 0.87)");
            styleVariables.setProperty("--sec-text-color", "#F0F0F0");
            styleVariables.setProperty("--sec-text-hover-color", "#FFFFFF61");
            styleVariables.setProperty("--main-bg-color", "#121212");
            styleVariables.setProperty("--sec-bg-color", "#FFFFFF14");
            styleVariables.setProperty("--overlay-color", "#000");
            styleVariables.setProperty("--dropdown", "#FFFFFF");
            styleVariables.setProperty("--darker-btn-color", "#FFFFFF1E");
            styleVariables.setProperty("--darker-button-hover-color", "#FFFFFF33");
            styleVariables.setProperty("--dropdown-btn-color", "#FFFFFF");
            styleVariables.setProperty("--backgroundUrl", "url('/img/background.webp')");
            styleVariables.setProperty("--r6DB-logo-large", 'url("/img/statsdb-light-logo.svg")');
        }
        else if (selected.theme === "1") {
            styleVariables.setProperty("--main-text-color", "#000000");
            styleVariables.setProperty("--sec-text-color", "#000000");
            styleVariables.setProperty("--sec-text-hover-color", "#333333");
            styleVariables.setProperty("--main-bg-color", "#f3f3f3");
            styleVariables.setProperty("--sec-bg-color", "#eeeeee");
            styleVariables.setProperty("--overlay-color", "#f3f3f3");
            styleVariables.setProperty("--backgroundUrl", "none");
            styleVariables.setProperty("--darker-btn-color", "#999999");
            styleVariables.setProperty("--darker-button-hover-color", "#000000");
            styleVariables.setProperty("--dropdown", "#000000");
            styleVariables.setProperty("--dropdown-btn-color", "#000000");
            styleVariables.setProperty("--r6DB-logo-large", 'url("/img/statsdb-dark-logo.svg")');
        }
        else if (selected.theme == "2") {
            styleVariables.setProperty("--main-text-color", "#000000");
            styleVariables.setProperty("--sec-text-color", "#000000");
            styleVariables.setProperty("--sec-text-hover-color", "#333333");
            styleVariables.setProperty("--main-bg-color", "#b8b8b8");
            styleVariables.setProperty("--sec-bg-color", "#b0b0b0");
            styleVariables.setProperty("--overlay-color", "#b8b8b8");
            styleVariables.setProperty("--backgroundUrl", "none");
            styleVariables.setProperty("--darker-btn-color", "#999999");
            styleVariables.setProperty("--darker-button-hover-color", "#000000");
            styleVariables.setProperty("--dropdown", "#000000");
            styleVariables.setProperty("--dropdown-btn-color", "#000000");
            styleVariables.setProperty("--r6DB-logo-large", 'url("/img/statsdb-dark-logo.svg")');
        }
    }
    fetchConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            fetch('https://staging-api.statsdb.net/r6/overlay/config')
                .then(response => response.json())
                .then(data => {
                if (!localStorage.config) {
                    localStorage.setItem('config', JSON.stringify(data.payload.rainbow));
                }
                else if (localStorage.config) {
                    const config = JSON.parse(localStorage.getItem('config'));
                    if (config.version != data.payload.rainbow.version) {
                        localStorage.setItem('config', JSON.stringify(data.payload.rainbow));
                    }
                }
            });
        });
    }
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse(localStorage.getItem('config'));
        });
    }
}
exports.Controllers = Controllers;


/***/ }),

/***/ "./src/odk-ts/database.ts":
/*!********************************!*\
  !*** ./src/odk-ts/database.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const consts_1 = __webpack_require__(/*! ../consts */ "./src/consts.ts");
class Database {
    createIDB(nameIDB, keyPathIDB, version, indexes = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const request = indexedDB.open('statsDB', version);
                request.onerror = function () {
                    console.log(request.error);
                    resolve(request.error);
                };
                request.onupgradeneeded = function (event) {
                    const db = request.result;
                    let objectStore;
                    try {
                        objectStore = db.createObjectStore(nameIDB, { keyPath: keyPathIDB });
                    }
                    catch (_a) {
                        const transaction = event.target.transaction;
                        objectStore = transaction.objectStore(nameIDB);
                    }
                    if (indexes) {
                        indexes.forEach(index => {
                            try {
                                objectStore.createIndex(index, index);
                            }
                            catch (_a) { }
                        });
                    }
                    resolve(objectStore);
                };
                resolve(request);
            }));
        });
    }
    storeToIDB(nameIDB, valueIDB, initiateIDB) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const request = indexedDB.open('statsDB');
                request.onerror = function () {
                    console.log(request.error);
                    resolve(request.error);
                };
                request.onsuccess = function () {
                    const db = request.result;
                    const dbObjectStore = db.transaction(nameIDB, 'readwrite').objectStore(nameIDB);
                    if (!initiateIDB) {
                        const result = dbObjectStore.put(valueIDB);
                        result.onsuccess = () => {
                            resolve(result);
                        };
                        result.onerror = function () {
                            resolve(result.error);
                        };
                    }
                    else if (initiateIDB) {
                        const result = dbObjectStore.add(valueIDB);
                        result.onsuccess = () => {
                            resolve(result);
                        };
                        result.onerror = function () {
                            resolve(result.error);
                        };
                    }
                };
            }));
        });
    }
    readFromIDB(nameIDB, keyIDB) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const requestDb = indexedDB.open('statsDB');
                requestDb.onerror = function () {
                    console.log(requestDb.error);
                    resolve(requestDb.error);
                };
                requestDb.onsuccess = function () {
                    const db = requestDb.result;
                    const dbObjectStore = db.transaction(nameIDB, 'readonly').objectStore(nameIDB);
                    const request = dbObjectStore.get(keyIDB);
                    request.onerror = function () {
                        console.log(request.error);
                        resolve(request.error);
                    };
                    request.onsuccess = function () {
                        resolve(request.result);
                    };
                };
            }));
        });
    }
    readFromIDBRange(nameIDB, index, beginRange, endRange, begin, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const requestDb = indexedDB.open('statsDB');
                let keyRangeValue;
                if (beginRange && endRange) {
                    keyRangeValue = IDBKeyRange.bound(beginRange, endRange);
                }
                else if (beginRange && !endRange) {
                    keyRangeValue = IDBKeyRange.lowerBound(beginRange);
                }
                else if (!beginRange && endRange) {
                    keyRangeValue = IDBKeyRange.upperBound(endRange);
                }
                requestDb.onerror = function () {
                    console.log(requestDb.error);
                    resolve(requestDb.error);
                };
                requestDb.onsuccess = function () {
                    const db = requestDb.result;
                    const objectStore = db.transaction(nameIDB, 'readonly').objectStore(nameIDB);
                    const request = objectStore.index(index).openCursor(keyRangeValue, 'prev');
                    let i = 0, j = 0, result = new Object;
                    request.onerror = function () {
                        console.log(request.error);
                        resolve(request.error);
                    };
                    request.onsuccess = function () {
                        const cursor = request.result;
                        if (cursor) {
                            if (begin !== 0 && i === 0) {
                                try {
                                    cursor.advance(begin);
                                    i = begin;
                                }
                                catch (_a) {
                                    resolve(result);
                                }
                            }
                            else if (cursor && i <= end && i >= begin) {
                                result[cursor.value.timeStamp] = JSON.parse(JSON.stringify(cursor.value));
                                i++;
                                j++;
                            }
                            else if (!cursor) {
                                resolve(result);
                            }
                            try {
                                cursor.continue();
                            }
                            catch (_b) { }
                        }
                        else {
                            resolve(result);
                        }
                    };
                };
            }));
        });
    }
    initAllIDB() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const today = new Date();
                const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
                const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
                const keyIDBWeeks = `${Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)},${today.getFullYear()}`;
                const keyIDBDays = today.getDate() + ',' + (today.getMonth() + 1) + ',' + today.getFullYear();
                let valueIDBWeeks = {};
                for (let i = 0; i < 7; i++) {
                    valueIDBWeeks[i] = JSON.parse(JSON.stringify(consts_1.databaseObject));
                }
                valueIDBWeeks.week = keyIDBWeeks;
                let valueIDBDays = JSON.parse(JSON.stringify(consts_1.databaseObject));
                valueIDBDays.date = keyIDBDays;
                const promise1 = this.storeToIDB('weeks', valueIDBWeeks, true);
                const promise2 = this.storeToIDB('days', valueIDBDays, true);
                Promise.all([promise1, promise2])
                    .then(result => resolve(result));
            }));
        });
    }
    displayDailyWeekly() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const today = new Date();
                const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
                const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
                const keyIDBWeeks = `${Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)},${today.getFullYear()}`;
                const keyIDBDays = today.getDate() + ',' + (today.getMonth() + 1) + ',' + today.getFullYear();
                const settings = JSON.parse(localStorage.getItem('settings'));
                const promise1 = this.readFromIDB('weeks', keyIDBWeeks)
                    .then(resultWeek => {
                    let weeklyStats = {
                        "general": {
                            "kills": 0,
                            "deaths": 0,
                            "losses": 0,
                            "wins": 0,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        },
                        "casual": {
                            "kills": 0,
                            "deaths": 0,
                            "losses": 0,
                            "wins": 0,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        },
                        "ranked": {
                            "kills": 0,
                            "deaths": 0,
                            "losses": 0,
                            "wins": 0,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        },
                        "unranked": {
                            "kills": 0,
                            "deaths": 0,
                            "losses": 0,
                            "wins": 0,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        }
                    };
                    for (let i = 0; i < 7; i++) {
                        weeklyStats.general.kills += resultWeek[i].MATCHMAKING_PVP.kills + resultWeek[i].MATCHMAKING_PVP_RANKED.kills + resultWeek[i].MATCHMAKING_PVP_UNRANKED.kills;
                        weeklyStats.general.deaths += resultWeek[i].MATCHMAKING_PVP.deaths + resultWeek[i].MATCHMAKING_PVP_RANKED.deaths + resultWeek[i].MATCHMAKING_PVP_UNRANKED.deaths;
                        weeklyStats.general.wins += resultWeek[i].MATCHMAKING_PVP.wins + resultWeek[i].MATCHMAKING_PVP_RANKED.wins + resultWeek[i].MATCHMAKING_PVP_UNRANKED.wins;
                        weeklyStats.general.losses += resultWeek[i].MATCHMAKING_PVP.losses + resultWeek[i].MATCHMAKING_PVP_RANKED.losses + resultWeek[i].MATCHMAKING_PVP_UNRANKED.losses;
                        weeklyStats.casual.kills += resultWeek[i].MATCHMAKING_PVP.kills;
                        weeklyStats.casual.deaths += resultWeek[i].MATCHMAKING_PVP.deaths;
                        weeklyStats.casual.wins += resultWeek[i].MATCHMAKING_PVP.wins;
                        weeklyStats.casual.losses += resultWeek[i].MATCHMAKING_PVP.losses;
                        weeklyStats.ranked.kills += resultWeek[i].MATCHMAKING_PVP_RANKED.kills;
                        weeklyStats.ranked.deaths += resultWeek[i].MATCHMAKING_PVP_RANKED.deaths;
                        weeklyStats.ranked.wins += resultWeek[i].MATCHMAKING_PVP_RANKED.wins;
                        weeklyStats.ranked.losses += resultWeek[i].MATCHMAKING_PVP_RANKED.losses;
                        weeklyStats.unranked.kills += resultWeek[i].MATCHMAKING_PVP_UNRANKED.kills;
                        weeklyStats.unranked.deaths += resultWeek[i].MATCHMAKING_PVP_UNRANKED.deaths;
                        weeklyStats.unranked.wins += resultWeek[i].MATCHMAKING_PVP_UNRANKED.wins;
                        weeklyStats.unranked.losses += resultWeek[i].MATCHMAKING_PVP_UNRANKED.losses;
                    }
                    Object.keys(weeklyStats).forEach(obj => {
                        let gameMode = weeklyStats[obj];
                        if (gameMode.deaths != 0) {
                            gameMode.kd = ((gameMode.kills / gameMode.deaths).toFixed(2)).toString();
                            gameMode.attributeValueKD = Math.round(gameMode.kills / gameMode.deaths * 33) + ', 100';
                        }
                        else if (gameMode.deaths === 0 && gameMode.kills != 0) {
                            gameMode.kd = 'INF';
                            gameMode.attributeValueKD = '100, 100';
                        }
                        else {
                            gameMode.kd = '0.00';
                            gameMode.attributeValueKD = '0, 100';
                        }
                        if ((gameMode.wins + gameMode.losses) != 0) {
                            gameMode.wl = (Math.round(gameMode.wins / (gameMode.wins + gameMode.losses) * 100)).toString();
                            gameMode.attributeValueWL = gameMode.wl + ', 100';
                        }
                        else {
                            gameMode.wl = '0';
                            gameMode.attributeValueWL = '0, 100';
                        }
                    });
                    document.getElementById('kd-circle-weekly').setAttribute('stroke-dasharray', weeklyStats[settings.circle].attributeValueKD);
                    document.getElementById('wl-circle-weekly').setAttribute('stroke-dasharray', weeklyStats[settings.circle].attributeValueWL);
                    document.getElementById('kd-circle-weekly-text').innerHTML = parseFloat(weeklyStats[settings.circle].kd).toFixed(2);
                    document.getElementById('wl-circle-weekly-text').innerHTML = weeklyStats[settings.circle].wl + '%';
                    console.log("WeeklyStats:", weeklyStats);
                    return weeklyStats;
                });
                const promise2 = this.readFromIDB('days', keyIDBDays)
                    .then(resultDay => {
                    let dailyStats = {
                        "general": {
                            "kills": resultDay.MATCHMAKING_PVP.kills + resultDay.MATCHMAKING_PVP_RANKED.kills + resultDay.MATCHMAKING_PVP_UNRANKED.kills,
                            "deaths": resultDay.MATCHMAKING_PVP.deaths + resultDay.MATCHMAKING_PVP_RANKED.deaths + resultDay.MATCHMAKING_PVP_UNRANKED.deaths,
                            "losses": resultDay.MATCHMAKING_PVP.losses + resultDay.MATCHMAKING_PVP_RANKED.losses + resultDay.MATCHMAKING_PVP_UNRANKED.losses,
                            "wins": resultDay.MATCHMAKING_PVP.wins + resultDay.MATCHMAKING_PVP_RANKED.wins + resultDay.MATCHMAKING_PVP_UNRANKED.wins,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        },
                        "casual": {
                            "kills": resultDay.MATCHMAKING_PVP.kills,
                            "deaths": resultDay.MATCHMAKING_PVP.deaths,
                            "losses": resultDay.MATCHMAKING_PVP.losses,
                            "wins": resultDay.MATCHMAKING_PVP.wins,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        },
                        "ranked": {
                            "kills": resultDay.MATCHMAKING_PVP_RANKED.kills,
                            "deaths": resultDay.MATCHMAKING_PVP_RANKED.deaths,
                            "losses": resultDay.MATCHMAKING_PVP_RANKED.losses,
                            "wins": resultDay.MATCHMAKING_PVP_RANKED.wins,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        },
                        "unranked": {
                            "kills": resultDay.MATCHMAKING_PVP_UNRANKED.kills,
                            "deaths": resultDay.MATCHMAKING_PVP_UNRANKED.deaths,
                            "losses": resultDay.MATCHMAKING_PVP_UNRANKED.losses,
                            "wins": resultDay.MATCHMAKING_PVP_UNRANKED.wins,
                            "kd": "0",
                            "wl": "0",
                            "attributeValueKD": "0, 100",
                            "attributeValueWL": '0, 100'
                        }
                    };
                    Object.keys(dailyStats).forEach(obj => {
                        let gameMode = dailyStats[obj];
                        if (gameMode.deaths !== 0) {
                            gameMode.kd = ((gameMode.kills / gameMode.deaths).toFixed(2)).toString();
                            gameMode.attributeValueKD = Math.round(gameMode.kills / gameMode.deaths * 33) + ', 100';
                        }
                        else if (gameMode.deaths === 0 && gameMode.kills !== 0) {
                            gameMode.kd = 'INF';
                            gameMode.attributeValueKD = '100, 100';
                        }
                        else {
                            gameMode.kd = '0.00';
                            gameMode.attributeValueKD = '0, 100';
                        }
                        if ((gameMode.wins + gameMode.losses) !== 0) {
                            gameMode.wl = (Math.round(gameMode.wins / (gameMode.wins + gameMode.losses) * 100)).toString();
                            gameMode.attributeValueWL = gameMode.wl + ', 100';
                        }
                        else {
                            gameMode.wl = '0';
                            gameMode.attributeValueWL = '0, 100';
                        }
                    });
                    document.getElementById('kd-circle-daily').setAttribute('stroke-dasharray', dailyStats[settings.circle].attributeValueKD);
                    document.getElementById('wl-circle-daily').setAttribute('stroke-dasharray', dailyStats[settings.circle].attributeValueWL);
                    document.getElementById('kd-circle-daily-text').innerHTML = parseFloat(dailyStats[settings.circle].kd).toFixed(2);
                    document.getElementById('wl-circle-daily-text').innerHTML = dailyStats[settings.circle].wl + '%';
                    console.log("DailyStats:", dailyStats);
                    return dailyStats;
                });
                const statsNavBtn = document.getElementsByClassName('daily-weekly-nav-btn');
                for (let i = 0; i < statsNavBtn.length; i++) {
                    statsNavBtn[i].classList.remove('active');
                }
                document.getElementById(settings.circle).classList.add('active');
                Promise.all([promise1, promise2])
                    .then(result => resolve(result));
            }));
        });
    }
}
exports.Database = Database;


/***/ }),

/***/ "./src/odk-ts/localstorage.ts":
/*!************************************!*\
  !*** ./src/odk-ts/localstorage.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localstorage = void 0;
const controllers_1 = __webpack_require__(/*! ./controllers */ "./src/odk-ts/controllers.ts");
const ow_window_1 = __webpack_require__(/*! ./ow-window */ "./src/odk-ts/ow-window.ts");
const controllers = new controllers_1.Controllers, owWindow = new ow_window_1.OWWindow;
let localDesktopOnly = localStorage.desktopOnly, valuesCustom, local;
class Localstorage {
    constructor() {
        this.dtable = document.querySelectorAll('#setting-dtable .custom-option');
        this.dtheme = document.querySelectorAll('#setting-dtheme .custom-option');
        this.dmaximize = document.querySelectorAll('#setting-dmaximize .custom-option');
        this.ddisplay = document.querySelectorAll('#setting-ddisplay .custom-option');
        this.dmonitors = document.querySelectorAll('#setting-dmonitors .custom-option');
        this.dcircle = document.querySelectorAll('#setting-dcircle .custom-option');
    }
    initiateLocalStorage() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (!localStorage.settings || Object.keys(JSON.parse(localStorage.settings)).length > 5) {
                localStorage.setItem('settings', JSON.stringify({
                    'table': '0',
                    'maximize': '0',
                    "theme": "0",
                    "circle": "general",
                    "monitorId": "0",
                }));
            }
            if (!localStorage.scaleSlider) {
                localStorage.setItem('scaleSlider', '"1"');
            }
            if (!localStorage.valuesTable || Object.keys(JSON.parse(localStorage.valuesTable)).length < 9) {
                localStorage.setItem('valuesTable', JSON.stringify({
                    0: 'Country',
                    1: 'LVL',
                    2: 'Kills',
                    3: 'Deaths',
                    4: 'K/D',
                    5: 'Wins',
                    6: 'Losses',
                    7: 'W/L',
                    8: 'Hacker %'
                }));
            }
            if (!localStorage.desktopOnly) {
                localStorage.setItem('desktopOnly', '"0"');
            }
            local = JSON.parse(localStorage.settings);
            valuesCustom = JSON.parse(localStorage.valuesTable);
            resolve();
        }));
    }
    changeSetting(selectedOption) {
        const value = selectedOption.getAttribute('value');
        const settingId = selectedOption.getAttribute('settingid');
        if (settingId === 'setting-valueTable') {
            const index = selectedOption.getAttribute('index');
            valuesCustom[index] = value;
            this.setStorage('valuesTable', valuesCustom);
        }
        if (settingId === 'setting-dtheme') {
            local.theme = value;
            this.setStorage('settings', local);
            controllers.setTheme();
        }
        if (settingId === 'setting-dtable') {
            local.table = value;
            this.setStorage('settings', local);
        }
        if (settingId === 'setting-ddisplay') {
            this.setStorage('desktopOnly', value);
        }
        if (settingId === 'setting-dmaximize') {
            local.maximize = value;
            this.setStorage('settings', local);
        }
        if (settingId === 'setting-dmonitors') {
            local.monitorId = value;
            this.setStorage('settings', local);
        }
        if (settingId === 'setting-dcircle') {
            local.circle = value;
            this.setStorage('settings', local);
        }
        if (settingId === 'setting-dslider') {
            this.setStorage('scaleSlider', selectedOption.value);
        }
    }
    setStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    setSettings() {
        var _a;
        const circles = {
            "general": 0,
            "ranked": 1,
            "casual": 2,
            "unranked": 3
        };
        const settingsArr = [
            this.dtable[local.table],
            this.dtheme[local.theme],
            this.dmaximize[local.maximize],
            this.ddisplay[localDesktopOnly.replace(/"/g, '')],
            this.dmonitors[local.monitorId],
            this.dcircle[circles[local.circle]],
        ];
        for (let i = 0; i < settingsArr.length; i++) {
            let setting = settingsArr[i];
            if (setting !== this.dmonitors[local.monitorId]) {
                (_a = setting.parentNode.querySelector('.custom-option.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('selected');
                setting.classList.add('selected');
                setting.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = setting.textContent;
            }
            else if (setting === this.dmonitors[local.monitorId]) {
                setting = document.querySelectorAll('#setting-dmonitors .custom-option')[local.monitorId];
                const promise = owWindow.getMonitorsList()
                    .then(monitorList => {
                    var _a;
                    (_a = setting.parentNode.querySelector('.custom-option.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('selected');
                    setting.classList.add('selected');
                    setting.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = monitorList.displays[local.monitorId].name;
                });
            }
        }
        document.getElementById('windowSize-slider').value = JSON.parse(localStorage.scaleSlider);
        document.getElementById('windowSize-slider-value').innerHTML = JSON.parse(localStorage.scaleSlider);
        this.setDefault();
    }
    setDefault() {
        var _a;
        for (let i = 0; i < 9; i++) {
            const value = valuesCustom[i].replace(/[ /]/g, '-') + i;
            const setting = document.getElementById(value);
            (_a = setting.parentNode.querySelector('.custom-option.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('selected');
            setting.classList.add('selected');
            setting.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = setting.textContent;
        }
    }
}
exports.Localstorage = Localstorage;


/***/ }),

/***/ "./src/odk-ts/match.ts":
/*!*****************************!*\
  !*** ./src/odk-ts/match.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const database_1 = __webpack_require__(/*! ./database */ "./src/odk-ts/database.ts");
const consts_1 = __webpack_require__(/*! ../consts */ "./src/consts.ts");
let players = {};
class Match {
    constructor(gameMode, matchId, mapId) {
        this.database = new database_1.Database();
        this.gameMode = gameMode;
        this.matchId = matchId;
        this.mapId = mapId;
        this.timeStamp = Math.round(new Date().getTime() / 1000);
        console.log(this.matchId);
    }
    playerJoin(id, stats, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const that = this;
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const promise = that.playerSearch(id, stats, info)
                    .then(() => {
                    that.addPlayer(id, stats);
                    resolve(players);
                });
            }));
        });
    }
    playerSearch(id, stats, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const that = this;
            this.sendPlayerPing(stats.name, stats.team, 'JocularWasHere');
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const url = `https://api.statsdb.net/r6/overlay/${stats.name}`;
                that.fetch(url, { cache: 'no-cache' }, 10)
                    .then(result => {
                    players[id] = result.payload;
                    players[id].team = stats.team;
                    players[id].stats.rank.matchesplayed = players[id].stats.rank.wins + players[id].stats.rank.losses;
                    if (players[id].stats.rank.max_mmr === 0) {
                        players[id].stats.rank.max_mmr = players[id].stats.rank.mmr;
                    }
                    if (players[id].stats.rank.rank === 0) {
                        players[id].stats.rank.previous_rank = players[id].stats.rank.rank;
                    }
                    else {
                        players[id].stats.rank.previous_rank = players[id].stats.rank.rank - 1;
                    }
                    if (players[id].stats.rank.rank === 23 || players[id].stats.rank.rank === 0) {
                        players[id].stats.rank.next_rank = players[id].stats.rank.rank;
                    }
                    else {
                        players[id].stats.rank.next_rank = players[id].stats.rank.rank + 1;
                    }
                    players[id].stats.rank.kd = ~~Math.round(players[id].stats.rank.kills / players[id].stats.rank.deaths * 100) / 100;
                    players[id].stats.ranked.kd = ~~Math.round(players[id].stats.ranked.kills / players[id].stats.ranked.deaths * 100) / 100;
                    players[id].stats.casual.kd = ~~Math.round(players[id].stats.casual.kills / players[id].stats.casual.deaths * 100) / 100;
                    players[id].stats.general.kd = ~~Math.round(players[id].stats.general.kills / players[id].stats.general.deaths * 100) / 100;
                    players[id].stats.rank.wl = ~~Math.round(players[id].stats.rank.wins / players[id].stats.rank.matchesplayed * 1000) / 10;
                    players[id].stats.ranked.wl = ~~Math.round(players[id].stats.ranked.wins / players[id].stats.ranked.matchesplayed * 1000) / 10;
                    players[id].stats.casual.wl = ~~Math.round(players[id].stats.casual.wins / players[id].stats.casual.matchesplayed * 1000) / 10;
                    players[id].stats.general.wl = ~~Math.round(players[id].stats.general.wins / players[id].stats.general.matchesplayed * 1000) / 10;
                    players[id].stats.general.penetration_ratio = ~~Math.round(players[id].stats.general.penetrations / players[id].stats.general.kills * 100) / 100;
                    players[id].stats.general.headshot_ratio = ~~Math.round(players[id].stats.general.headshots / players[id].stats.general.kills * 100) / 100;
                    resolve();
                });
            }));
        });
    }
    fetch(url, options, tries) {
        return __awaiter(this, void 0, void 0, function* () {
            const that = this;
            return fetch(encodeURI(url), options)
                .then(response => response.json())
                .then(data => {
                if (!data.error) {
                    return data;
                }
                if (tries > 0) {
                    return that.fetch(url, options, tries - 1);
                }
                else {
                    throw new Error(data);
                }
            })
                .catch(console.error);
        });
    }
    sendPlayerPing(name, team, lobbyId) {
        const pingUserData = {
            name: name,
            team: team.toLowerCase(),
            lobbyId: lobbyId,
        };
        const formData = new FormData();
        for (const key in pingUserData) {
            if (pingUserData.hasOwnProperty(key)) {
                formData.append(key, pingUserData[key]);
            }
        }
        fetch('https://staging-api.statsdb.net/r6/overlay/ping', { method: 'POST', body: formData });
        console.log(`website ping "${name}", "${team}", "${lobbyId}"`);
    }
    addPlayer(id, stats) {
        const playerStats = players[id];
        let table;
        if (stats.team === 'Blue') {
            table = document.getElementById('team-blue-tbody');
        }
        else if (stats.team === 'Orange') {
            table = document.getElementById('team-orange-tbody');
        }
        const statsObject = {
            "Empty": {
                0: true,
                1: true,
                2: true
            },
            "Country": {
                0: `<img src="https://api.statsdb.net/assets/flags/${playerStats.user.countryCode}" alt="${playerStats.user.countryCode}" class="img-country">`,
                1: `<img src="https://api.statsdb.net/assets/flags/${playerStats.user.countryCode}" alt="${playerStats.user.countryCode}" class="img-country">`,
                2: `<img src="https://api.statsdb.net/assets/flags/${playerStats.user.countryCode}" alt="${playerStats.user.countryCode}" class="img-country">`
            },
            "LVL": {
                0: playerStats.stats.progression.level,
                1: playerStats.stats.progression.level,
                2: playerStats.stats.progression.level
            },
            "Hacker %": {
                0: '0%',
                1: '0%',
                2: '0%'
            },
            "Kills": {
                0: playerStats.stats.rank.kills,
                1: playerStats.stats.ranked.kills,
                2: playerStats.stats.casual.kills
            },
            "Deaths": {
                0: playerStats.stats.rank.deaths,
                1: playerStats.stats.ranked.deaths,
                2: playerStats.stats.casual.deaths
            },
            "K/D": {
                0: playerStats.stats.rank.kd.toFixed(2),
                1: playerStats.stats.ranked.kd.toFixed(2),
                2: playerStats.stats.casual.kd.toFixed(2)
            },
            "Wins": {
                0: playerStats.stats.rank.wins,
                1: playerStats.stats.ranked.wins,
                2: playerStats.stats.casual.wins
            },
            "Losses": {
                0: playerStats.stats.rank.losses,
                1: playerStats.stats.ranked.losses,
                2: playerStats.stats.casual.losses
            },
            "W/L": {
                0: playerStats.stats.rank.wl.toFixed(1) + "%",
                1: playerStats.stats.ranked.wl.toFixed(1) + "%",
                2: playerStats.stats.casual.wl.toFixed(1) + "%",
            },
            "Max MMR": {
                0: Math.trunc(playerStats.stats.rank.max_mmr),
                1: Math.trunc(playerStats.stats.rank.max_mmr),
                2: Math.trunc(playerStats.stats.rank.max_mmr)
            },
            "HS/K": {
                0: playerStats.stats.general.headshot_ratio.toFixed(2),
                1: playerStats.stats.general.headshot_ratio.toFixed(2),
                2: playerStats.stats.general.headshot_ratio.toFixed(2)
            },
            "PEN/K": {
                0: playerStats.stats.general.penetration_ratio.toFixed(2),
                1: playerStats.stats.general.penetration_ratio.toFixed(2),
                2: playerStats.stats.general.penetration_ratio.toFixed(2)
            },
            "Games played": {
                0: playerStats.stats.rank.wins + playerStats.stats.rank.losses,
                1: playerStats.stats.ranked.matchesplayed,
                2: playerStats.stats.casual.matchesplayed
            },
            "MMR change": {
                0: playerStats.stats.rank.last_match_mmr_change,
                1: playerStats.stats.rank.last_match_mmr_change,
                2: playerStats.stats.rank.last_match_mmr_change
            },
            "Alpha %": {
                0: Math.round(playerStats.stats.progression.lootbox_probability / 100) + "%",
                1: Math.round(playerStats.stats.progression.lootbox_probability / 100) + "%",
                2: Math.round(playerStats.stats.progression.lootbox_probability / 100) + "%"
            }
        };
        const cusTStats = JSON.parse(localStorage.valuesTable);
        const playerTrValue = `
            <div class="player-tr" id=${id}>
                <div class="stat name">
                    <div class="img">
                        <img src="/img/ranks/rank${playerStats.stats.rank.rank}.svg" alt="rank">
                        ${playerStats.stats.rank.mmr}
                    </div>
                    <div class="player-name">${stats.name}</div>
                </div>

                <div class="stat ranked current" id="ranked0${id}">${statsObject[cusTStats[0]][1]}</div>
                <div class="stat casual" id="casual0${id}">${statsObject[cusTStats[0]][2]}</div>
                <div class="stat seasonal" id="seasonal0${id}">${statsObject[cusTStats[0]][0]}</div>
                <div class="stat ranked current" id="ranked1${id}">${statsObject[cusTStats[1]][1]}</div>
                <div class="stat casual" id="casual1${id}">${statsObject[cusTStats[1]][2]}</div>
                <div class="stat seasonal" id="seasonal1${id}">${statsObject[cusTStats[1]][0]}</div>
                <div class="stat ranked current" id="ranked2${id}">${statsObject[cusTStats[2]][1]}</div>
                <div class="stat casual" id="casual2${id}">${statsObject[cusTStats[2]][2]}</div>
                <div class="stat seasonal" id="seasonal2${id}">${statsObject[cusTStats[2]][0]}</div>
                <div class="stat ranked current" id="ranked3${id}">${statsObject[cusTStats[3]][1]}</div>
                <div class="stat casual" id="casual3${id}">${statsObject[cusTStats[3]][2]}</div>
                <div class="stat seasonal" id="seasonal3${id}">${statsObject[cusTStats[3]][0]}</div>
                <div class="stat ranked current" id="ranked4${id}">${statsObject[cusTStats[4]][1]}</div>
                <div class="stat casual" id="casual4${id}">${statsObject[cusTStats[4]][2]}</div>
                <div class="stat seasonal" id="seasonal4${id}">${statsObject[cusTStats[4]][0]}</div>
                <div class="stat ranked current" id="ranked5${id}">${statsObject[cusTStats[5]][1]}</div>
                <div class="stat casual" id="casual5${id}">${statsObject[cusTStats[5]][2]}</div>
                <div class="stat seasonal" id="seasonal5${id}">${statsObject[cusTStats[5]][0]}</div>
                <div class="stat ranked current" id="ranked6${id}">${statsObject[cusTStats[6]][1]}</div>
                <div class="stat casual" id="casual6${id}">${statsObject[cusTStats[6]][2]}</div>
                <div class="stat seasonal" id="seasonal6${id}">${statsObject[cusTStats[6]][0]}</div>
                <div class="stat ranked current" id="ranked7${id}">${statsObject[cusTStats[7]][1]}</div>
                <div class="stat casual" id="casual7${id}">${statsObject[cusTStats[7]][2]}</div>
                <div class="stat seasonal" id="seasonal7${id}">${statsObject[cusTStats[7]][0]}</div>
                <div class="stat ranked current" id="ranked8${id}">${statsObject[cusTStats[8]][1]}</div>
                <div class="stat casual" id="casual8${id}">${statsObject[cusTStats[8]][2]}</div>
                <div class="stat seasonal" id="seasonal8${id}">${statsObject[cusTStats[8]][0]}</div>
            </div>`;
        if (!document.getElementById(id)) {
            table.innerHTML += playerTrValue;
            for (const index in cusTStats) {
                if (cusTStats.hasOwnProperty(index)) {
                    const customStat = cusTStats[index];
                    if (customStat === 'Empty') {
                        document.getElementById(`ranked${index + id}`).style.display = 'none';
                        document.getElementById(`casual${index + id}`).style.display = 'none';
                        document.getElementById(`seasonal${index + id}`).style.display = 'none';
                        let thead = document.getElementsByClassName('value-' + index);
                        for (let i = 0; i < thead.length; i++) {
                            thead[i].style.display = 'none';
                        }
                    }
                }
            }
            console.log(`player joined "${playerStats.user.nickname}, ${id}"`);
        }
    }
    playerLeave(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                if (document.getElementById(id)) {
                    document.getElementById(id).remove();
                    const player = players[id];
                    console.log(`player left "${players[id].user.nickname}, ${id}"`);
                    delete players[id];
                }
                resolve();
            }));
        });
    }
    printDetailedPlayer(playerTr) {
        if (!playerTr) {
            return;
        }
        const rosterId = playerTr.id;
        const playerStats = players[rosterId];
        let timeplayed = {
            generalSec: parseInt(playerStats.stats.general.timeplayed, 10) + parseInt(playerStats.stats.pve.timeplayed, 10),
            rankedSec: parseInt(playerStats.stats.ranked.timeplayed, 10),
            casualSec: parseInt(playerStats.stats.casual.timeplayed, 10),
        };
        timeplayed.generalHours = Math.floor(timeplayed.generalSec / 3600);
        timeplayed.generalMinutes = Math.floor(timeplayed.generalSec / 60) % 60;
        timeplayed.rankedHours = Math.floor(timeplayed.rankedSec / 3600);
        timeplayed.rankedMinutes = Math.floor(timeplayed.rankedSec / 60) % 60;
        timeplayed.casualHours = Math.floor(timeplayed.casualSec / 3600);
        timeplayed.casualMinutes = Math.floor(timeplayed.casualSec / 60) % 60;
        let seasonRankBar, seasonRankBarText;
        if (playerStats.stats.rank.rank !== 0 && playerStats.stats.rank.next_rank_mmr > playerStats.stats.rank.mmr) {
            seasonRankBar = ((playerStats.stats.rank.mmr - playerStats.stats.rank.previous_rank_mmr) / (playerStats.stats.rank.next_rank_mmr - playerStats.stats.rank.previous_rank_mmr) * 100).toString();
        }
        else {
            seasonRankBar = '100';
        }
        if (playerStats.stats.rank.rank !== 0 && playerStats.stats.rank.next_rank_mmr > playerStats.stats.rank.mmr) {
            seasonRankBarText = playerStats.stats.rank.mmr + ' / ' + playerStats.stats.rank.next_rank_mmr;
        }
        else {
            seasonRankBarText = playerStats.stats.rank.mmr;
        }
        const detailedSeasonal = `
            <div class="stats-row-headline">
                <h2>Seasonal Statistics</h2>
            </div>
            <div class="stats-row">
                <div class="stats-row-placeholder season-rank-row-placeholder">
                    <div class="season-rank">
                        <div class="season-previous-img">
                            <img id="season-previous-img" src="/img/ranks/rank${playerStats.stats.rank.rank}.svg" alt="rank img">
                        </div>
                        <div class="season-rank-div">
                            <div class="season-max-mmr-div">
                                <p id="season-max-mmr">${playerStats.stats.rank.max_mmr}<span> Max Mmr</span></p>
                            </div>
                            <div class="season-current-rank">
                                <div id="season-rank-bar" style="width:${seasonRankBar}%;"></div>
                                <p id="season-rank-bar-text">${seasonRankBarText}</p>
                            </div>
                        </div>
                        <div class="season-next-img">
                            <img id="season-next-img" src="/img/ranks/rank${playerStats.stats.rank.next_rank}.svg" alt="rank img">
                        </div>
                        <div class="season-max-rank">
                            <div class="season-max-img">
                                <img id="season-max-img" src="/img/ranks/rank${playerStats.stats.rank.max_rank}.svg" alt="rank img">
                            </div>
                            <div class="season-max-rank-text" id="max-rank-text">
                                <p>Max Rank</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="stats-row-placeholder">
                    <h3>Kills</h3>
                    <p>${playerStats.stats.rank.kills}</p>
                </div>
                <div class="stats-row-placeholder">
                    <h3>Deaths</h3>
                    <p>${playerStats.stats.rank.deaths}</p>
                </div>
                <div class="stats-row-placeholder">
                    <h3>K/D</h3>
                    <p>${playerStats.stats.rank.kd.toFixed(2)}</p>
                </div>
                <div class="stats-row-placeholder">
                    <h3>Wins</h3>
                    <p>${playerStats.stats.rank.wins}</p>
                </div>
                <div class="stats-row-placeholder">
                    <h3>Losses</h3>
                    <p>${playerStats.stats.rank.losses}</p>
                </div>
                <div class="stats-row-placeholder">
                    <h3>W/L</h3>
                    <p>${playerStats.stats.rank.wl.toFixed(1)}%</p>
                </div>
            </div>`;
        const detailedRanked = `
            <div class="stats-row-headline">
                <h2>Ranked Statistics</h2>
            </div>
            <div class="stats-row">
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Time Played</h3>
                    <p>${timeplayed['rankedHours']}h ${timeplayed['rankedMinutes']}m</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>K/D</h3>
                    <p>${playerStats.stats.ranked.kd.toFixed(2)}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Kills</h3>
                    <p>${playerStats.stats.ranked.kills}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Deaths</h3>
                    <p>${playerStats.stats.ranked.deaths}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Games Played</h3>
                    <p>${playerStats.stats.ranked.matchesplayed}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>W/L</h3>
                    <p>${playerStats.stats.ranked.wl.toFixed(1)}%</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Wins</h3>
                    <p>${playerStats.stats.ranked.wins}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Losses</h3>
                    <p>${playerStats.stats.ranked.losses}</p>
                </div>
            </div>`;
        const detailedCasual = `
            <div class="stats-row-headline">
                <h2>Casual Statistics</h2>
            </div>
            <div class="stats-row">
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Time Played</h3>
                    <p>${timeplayed['casualHours']}h ${timeplayed['casualMinutes']}m</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>K/D</h3>
                    <p>${playerStats.stats.casual.kd.toFixed(2)}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Kills</h3>
                    <p>${playerStats.stats.casual.kills}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Deaths</h3>
                    <p>${playerStats.stats.casual.deaths}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Games Played</h3>
                    <p>${playerStats.stats.casual.matchesplayed}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>W/L</h3>
                    <p>${playerStats.stats.casual.wl.toFixed(1)}%</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Wins</h3>
                    <p>${playerStats.stats.casual.wins}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Losses</h3>
                    <p>${playerStats.stats.casual.losses}</p>
                </div>
            </div>`;
        const detailedPlayer = `
            <div class="stats-row-headline">
                <h2>Player Statistics</h2>
            </div>
            <div class="stats-row">
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Travelled</h3>
                    <p>${Math.floor(playerStats.stats.general.distancetravelled / 1000)}km</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Barricades</h3>
                    <p>${playerStats.stats.general.barricadedeployed}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Reinforcements</h3>
                    <p>${playerStats.stats.general.reinforcementdeploy}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Suicides</h3>
                    <p>${playerStats.stats.general.suicide}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Revives</h3>
                    <p>${playerStats.stats.general.revives}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>DBNO</h3>
                    <p>${playerStats.stats.general.dbno}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>DBNO Assists</h3>
                    <p>${playerStats.stats.general.dbnoassists}</p>
                </div>
                <div class="stats-row-placeholder overall-row-placeholder">
                    <h3>Gadgets Destroyed</h3>
                    <p>${playerStats.stats.general.gadgetdestroy}</p>
                </div>
            </div>`;
        const detailedGeneral = `
            <div class="stats-row-headline">
                <h2>General Statistics</h2>
            </div>
            <div class="stats-row">
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>K/D</h3>
                    <p>${playerStats.stats.general.kd}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Kills</h3>
                    <p>${playerStats.stats.general.kills}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Deaths</h3>
                    <p>${playerStats.stats.general.deaths}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Time Played</h3>
                    <p>${timeplayed['generalHours']}h ${timeplayed['generalMinutes']}m</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>HS Kills</h3>
                    <p>${playerStats.stats.general.headshots}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>HS/K</h3>
                    <p>${playerStats.stats.general.headshot_ratio.toFixed(2)}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>PEN Kills</h3>
                    <p>${playerStats.stats.general.penetrations}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>PEN/K</h3>
                    <p>${playerStats.stats.general.penetration_ratio.toFixed(2)}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>W/L</h3>
                    <p>${playerStats.stats.general.wl}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Wins</h3>
                    <p>${playerStats.stats.general.wins}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Losses</h3>
                    <p>${playerStats.stats.general.losses}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Games Played</h3>
                    <p>${playerStats.stats.general.matchesplayed}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Assists</h3>
                    <p>${playerStats.stats.general.assists}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Melee Kills</h3>
                    <p>${playerStats.stats.general.melees}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Blind Kills</h3>
                    <p>${playerStats.stats.general.blindkills}</p>
                </div>
                <div class="stats-row-placeholder general-row-placeholder">
                    <h3>Hacker %</h3>
                    <p>0%</p>
                </div>
            </div>`;
        document.getElementById('detailedStats-name').innerHTML = playerStats.user.nickname;
        document.getElementById('detailedStats-level').innerHTML = playerStats.stats.progression.level;
        document.getElementById('detailedStats-profileImg').src = playerStats.user.smallAvatar;
        document.getElementById('detailedSeasonal').innerHTML = detailedSeasonal;
        document.getElementById('detailedRanked').innerHTML = detailedRanked;
        document.getElementById('detailedCasual').innerHTML = detailedCasual;
        document.getElementById('detailedPlayer').innerHTML = detailedPlayer;
        document.getElementById('detailedGeneral').innerHTML = detailedGeneral;
        console.log(`shown detailed player "${playerStats.user.nickname}"`);
        fetch('https://api.statsdb.net/r6/config')
            .then(response => response.json())
            .then(data => {
            fetch(`https://api.statsdb.net/r6/player/${playerStats.user.id}`)
                .then(response2 => response2.json())
                .then(userData => {
                const historyStats = userData.payload.stats.history;
                const numberOfSeasons = Object.keys(data.payload.seasons).length;
                let seasonsHTML = '';
                for (let i = 0; i < 14; i++) {
                    const season = numberOfSeasons - i;
                    let seasonData = { rank: 0, mmr: 2500, kills: 0, deaths: 0 };
                    let mPRegion = {
                        gamesPlayed: 0,
                        region: 'emea',
                    };
                    for (const region in historyStats[season]) {
                        if (historyStats[season].hasOwnProperty(region)) {
                            const regionStats = historyStats[season][region];
                            const gamesPlayed = regionStats.wins + regionStats.losses;
                            if (regionStats.noMatchesPlayed === false && gamesPlayed > mPRegion.gamesPlayed) {
                                mPRegion.gamesPlayed = gamesPlayed;
                                mPRegion.region = region;
                            }
                        }
                    }
                    if (historyStats[season][mPRegion.region].noMatchesPlayed === false) {
                        seasonData = historyStats[season][mPRegion.region];
                    }
                    if (seasonData.deaths + seasonData.kills !== 0) {
                        seasonData.kd = "K/D:" + (seasonData.kills / seasonData.deaths).toFixed(2);
                    }
                    else {
                        seasonData.kd = "";
                    }
                    if (seasonData.max_mmr !== undefined && seasonData.max_mmr !== 0) {
                        seasonData.max_rank = this.rankOffset(season, seasonData.max_rank);
                        seasonData.max_mmr = Math.trunc(seasonData.max_mmr);
                    }
                    else {
                        seasonData.max_rank = 0;
                        seasonData.max_mmr = "2500";
                    }
                    seasonsHTML += `
                                <div class="box">
                                    <div class="box-left">
                                        <img src="/img/ranks/rank${seasonData.max_rank}.svg" alt="rank img">
                                    </div>
                                    <div class="box-right">
                                        <h4 style="color:${consts_1.seasonColors[season]}">${data.payload.seasons[season].name}</h4>
                                        <h3>MMR:${seasonData.max_mmr}</h3>
                                        <h3 class="seasonKD">${seasonData.kd}</h3>
                                    </div>
                                </div>
                            `;
                    document.getElementById('seasonsStats').innerHTML = seasonsHTML;
                }
            });
        });
    }
    rankOffset(a, b) {
        if (a < 15) {
            return consts_1.rankOffset[b];
        }
        else {
            return b;
        }
    }
    storeMatchData(matchStats, matchOutcome, roundStats, self) {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
        const keyIDBDays = today.getDate() + ',' + (today.getMonth() + 1) + ',' + today.getFullYear();
        const keyIDBWeeks = `${Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)},${today.getFullYear()}`;
        const dayOfWeek = today.getDay();
        const promise1 = this.storeDaily(keyIDBDays, matchStats, matchOutcome, self);
        const promise2 = this.storeWeekly(keyIDBWeeks, dayOfWeek, matchStats, matchOutcome, self);
        const promise3 = this.storeMatch(matchStats, roundStats, matchOutcome, self);
        Promise.all([promise1, promise2, promise3])
            .then(result => console.log(`storeMatch "${result}"`));
    }
    storeDaily(keyIDB, matchStats, matchOutcome, self) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const promise = this.database.readFromIDB('days', keyIDB)
                .then(dbResult => {
                const id = self.id;
                dbResult[this.gameMode].kills += matchStats[id].kills;
                dbResult[this.gameMode].deaths += matchStats[id].deaths;
                if (matchOutcome === 'victory') {
                    dbResult[this.gameMode].wins++;
                }
                else if (matchOutcome === 'defeat') {
                    dbResult[this.gameMode].losses++;
                }
                const promise = this.database.storeToIDB('days', dbResult, false)
                    .then(result => {
                    console.log(result);
                    resolve(result);
                });
            });
        }));
    }
    storeWeekly(keyIDB, dayOfWeek, matchStats, matchOutcome, self) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const promise = this.database.readFromIDB('weeks', keyIDB)
                .then(dbResult => {
                const id = self.id;
                dbResult[dayOfWeek][this.gameMode].kills += matchStats[id].kills;
                dbResult[dayOfWeek][this.gameMode].deaths += matchStats[id].deaths;
                if (matchOutcome === 'victory') {
                    dbResult[dayOfWeek][this.gameMode].wins++;
                }
                else if (matchOutcome === 'defeat') {
                    dbResult[dayOfWeek][this.gameMode].losses++;
                }
                const promise = this.database.storeToIDB('weeks', dbResult, false)
                    .then(result => {
                    console.log(result);
                    resolve(result);
                });
            });
        }));
    }
    storeMatch(matchStats, roundStats, matchOutcome, self) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const dbValue = {
                matchId: this.matchId,
                map: this.mapId,
                timeStamp: this.timeStamp,
                timeStampIndex: this.timeStamp,
                gameMode: this.gameMode,
                matchOutcome: matchOutcome,
                matchStats: matchStats,
                roundStats: roundStats,
                self: self,
            };
            const promise = this.database.storeToIDB('matches', dbValue, false)
                .then(result => {
                console.log(result);
                resolve(result);
            });
        }));
    }
}
exports.Match = Match;


/***/ }),

/***/ "./src/odk-ts/ow-games-events.ts":
/*!***************************************!*\
  !*** ./src/odk-ts/ow-games-events.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OWGamesEvents = void 0;
const timer_1 = __webpack_require__(/*! ./timer */ "./src/odk-ts/timer.ts");
class OWGamesEvents {
    constructor(delegate, requiredFeatures) {
        this.onInfoUpdates = (info) => {
            this._delegate.onInfoUpdates(info.info);
        };
        this.onNewEvents = (e) => {
            this._delegate.onNewEvents(e);
        };
        this._delegate = delegate;
        this._requiredFeatures = requiredFeatures;
    }
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                overwolf.games.events.getInfo(resolve);
            });
        });
    }
    setRequiredFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            let tries = 1, result;
            while (tries > 0) {
                result = yield new Promise(resolve => {
                    overwolf.games.events.setRequiredFeatures(this._requiredFeatures, resolve);
                });
                if (result.status === 'success') {
                    console.log('setRequiredFeatures(): success: ' + JSON.stringify(result, null, 2));
                    return (result.supportedFeatures.length > 0);
                }
                yield timer_1.Timer.wait(3000);
                tries++;
            }
            console.warn('setRequiredFeatures(): failure after ' + tries + ' tries' + JSON.stringify(result, null, 2));
            return false;
        });
    }
    registerEvents() {
        this.unRegisterEvents();
        overwolf.games.events.onInfoUpdates2.addListener(this.onInfoUpdates);
        overwolf.games.events.onNewEvents.addListener(this.onNewEvents);
    }
    unRegisterEvents() {
        overwolf.games.events.onInfoUpdates2.removeListener(this.onInfoUpdates);
        overwolf.games.events.onNewEvents.removeListener(this.onNewEvents);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[ow-game-events] START`);
            this.registerEvents();
            yield this.setRequiredFeatures();
            let tries = 0;
            const { res, status } = yield this.getInfo();
            if (res && status === 'success') {
                this.onInfoUpdates({ info: res });
            }
        });
    }
    stop() {
        console.log(`[ow-game-events] STOP`);
        this.unRegisterEvents();
    }
}
exports.OWGamesEvents = OWGamesEvents;


/***/ }),

/***/ "./src/odk-ts/ow-hotkeys.ts":
/*!**********************************!*\
  !*** ./src/odk-ts/ow-hotkeys.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OWHotkeys = void 0;
class OWHotkeys {
    constructor() { }
    static onHotkeyDown(hotkeyId, action) {
        overwolf.settings.registerHotKey(hotkeyId, action);
    }
}
exports.OWHotkeys = OWHotkeys;


/***/ }),

/***/ "./src/odk-ts/ow-window.ts":
/*!*********************************!*\
  !*** ./src/odk-ts/ow-window.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OWWindow = void 0;
class OWWindow {
    constructor(name = null) {
        this._name = name;
        this._id = null;
    }
    restore() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            console.log('window: restored');
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                overwolf.windows.restore(id, result => {
                    if (!result.success)
                        console.error(`[restore] - an error occurred, windowId=${id}, reason=${result.error}`);
                    resolve();
                });
            }));
        });
    }
    minimize() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            console.log('window: minimized');
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                overwolf.windows.minimize(id, () => { });
                return resolve();
            }));
        });
    }
    bringToFront() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            console.log('window: minimized');
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                overwolf.windows.bringToFront(id, true, () => { });
                return resolve();
            }));
        });
    }
    maximize() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            console.log('window: maximized');
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                overwolf.windows.maximize(id, () => { });
                return resolve();
            }));
        });
    }
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            console.log('window: hidden');
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                overwolf.windows.hide(id, () => { });
                return resolve();
            }));
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                const result = yield this.getWindowState();
                if (!result.success) {
                    console.error(result);
                }
                if (result.success && (result.window_state !== 'closed')) {
                    yield this.internalClose();
                }
                return resolve();
            }));
        });
    }
    changeWindowSize(windowId, width, height) {
        return __awaiter(this, void 0, void 0, function* () {
            overwolf.windows.changeSize(windowId, width, height, (result) => {
                if (!result.success)
                    console.error(result);
            });
        });
    }
    changeWindowLocation(mode, windowId) {
        return __awaiter(this, void 0, void 0, function* () {
            overwolf.windows.getCurrentWindow((result) => {
                if (!result.success)
                    console.error(result);
                let windowWidth = result.window.width;
                let windowHeight = result.window.height;
                overwolf.utils.getMonitorsList((monitorRes) => {
                    if (!result.success)
                        console.error(result);
                    let monitorId = JSON.parse(localStorage.settings).monitorId;
                    let monitorWidth = monitorRes.displays[monitorId].width;
                    let monitorHeight = monitorRes.displays[monitorId].height;
                    let left;
                    let top;
                    if (mode === 'center-center') {
                        left = monitorWidth / 2 - (windowWidth / 2);
                        top = monitorHeight / 2 - (windowHeight / 2);
                    }
                    else if (mode === 'center-right') {
                        left = (monitorWidth - windowWidth) - 20;
                        top = monitorHeight / 2 - (windowHeight / 2);
                    }
                    else if (mode === 'center-left') {
                        left = 20;
                        top = monitorHeight / 2 - (windowHeight / 2);
                    }
                    overwolf.windows.changePosition(windowId, Math.round(left), Math.round(top), (result) => {
                        if (!result.success)
                            console.error(result);
                    });
                });
            });
        });
    }
    scaleWindow(windowId, width, height, scale) {
        return __awaiter(this, void 0, void 0, function* () {
            const that = this;
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const newWidth = Math.round(width * scale);
                const newHeight = Math.round(height * scale);
                that.changeWindowSize(windowId, newWidth, newHeight);
                document.getElementsByTagName('main')[0].style.transform = `scale(${scale})`;
                if (windowId === 'in_game' || windowId === 'in_game_desktop_only') {
                    document.getElementsByTagName('main')[0].style.width = `${Math.ceil(100 / scale * 10) / 10}%`;
                    document.getElementsByTagName('main')[0].style.height = `calc(${Math.ceil(100 / scale * 10) / 10}% - 32px)`;
                }
                document.getElementsByTagName('main')[0].style.width = `${Math.ceil(100 / scale * 10) / 10}%`;
                document.getElementsByTagName('main')[0].style.height = `${Math.ceil(100 / scale * 10) / 10}%`;
                if (windowId === 'in_lobby' || windowId === 'in_lobby_desktop_only') {
                    if (scale <= 0.6) {
                        document.getElementById('shortcut-text').style.display = 'none';
                    }
                    else {
                        document.getElementById('shortcut-text').style.display = 'block';
                    }
                }
                resolve();
            }));
        });
    }
    dragMove(elem) {
        elem.onmousedown = e => {
            e.preventDefault();
            overwolf.windows.dragMove(this._name);
        };
    }
    getMonitorsList() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                overwolf.utils.getMonitorsList(data => {
                    resolve(data);
                });
            }));
        });
    }
    getWindowState() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                overwolf.windows.getWindowState(id, resolve);
            }));
        });
    }
    static getCurrentInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                overwolf.windows.getCurrentWindow(result => {
                    resolve(result.window);
                });
            }));
        });
    }
    obtain() {
        return new Promise((resolve, reject) => {
            const cb = res => {
                if (res && res.status === 'success' && res.window && res.window.id) {
                    this._id = res.window.id;
                    if (!this._name) {
                        this._name = res.window.name;
                    }
                    resolve(res.window);
                }
                else {
                    this._id = null;
                    reject();
                }
            };
            if (!this._name) {
                overwolf.windows.getCurrentWindow(cb);
            }
            else {
                overwolf.windows.obtainDeclaredWindow(this._name, cb);
            }
        });
    }
    assureObtained() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                yield that.obtain();
                return resolve();
            }));
        });
    }
    internalClose() {
        return __awaiter(this, void 0, void 0, function* () {
            let that = this;
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield that.assureObtained();
                let id = that._id;
                overwolf.windows.close(id, res => {
                    if (res && res.success)
                        resolve();
                    else
                        reject(res);
                });
            }));
        });
    }
}
exports.OWWindow = OWWindow;


/***/ }),

/***/ "./src/odk-ts/player-compare.ts":
/*!**************************************!*\
  !*** ./src/odk-ts/player-compare.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCompare = void 0;
class PlayerCompare {
    constructor() {
        this.htmlElements = {
            compareTeamBlues: document.querySelectorAll('.blueStat'),
            compareTeamOranges: document.querySelectorAll('.orangeStat'),
            compareVSText: document.querySelectorAll('.teamVSText.aggro'),
        };
    }
    calculateTeamStats(allPlayerStats, userTeam) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let teamStats = {}, teamMMRV, teamKDV, teamWLV, teamGamesPlayedV;
                for (const id in allPlayerStats) {
                    if (allPlayerStats.hasOwnProperty(id)) {
                        const playerStats = allPlayerStats[id];
                        const teamName = playerStats.team;
                        if (!teamStats[teamName]) {
                            teamStats[teamName] = {};
                            teamStats[teamName].mmr = [];
                            teamStats[teamName].kd = [];
                            teamStats[teamName].wl = [];
                            teamStats[teamName].gamesPlayed = [];
                        }
                        teamStats[teamName].mmr.push(playerStats.stats.rank.mmr);
                        teamStats[teamName].kd.push(playerStats.stats.rank.kd);
                        teamStats[teamName].wl.push(playerStats.stats.rank.wl);
                        teamStats[teamName].gamesPlayed.push(playerStats.stats.rank.matchesplayed);
                        teamMMRV = this.calculateAvg(teamStats[teamName].mmr, "trunc", null);
                        teamKDV = this.calculateAvg(teamStats[teamName].kd, "tofixed", 2);
                        teamWLV = this.calculateAvg(teamStats[teamName].wl, "tofixed", 1);
                        teamGamesPlayedV = this.calculateAvg(teamStats[teamName].gamesPlayed, "trunc", null);
                        document.getElementById(`team${teamName}Mmr`).innerHTML = teamMMRV;
                        document.getElementById(`team${teamName}Kd`).innerHTML = teamKDV;
                        document.getElementById(`team${teamName}Wl`).innerHTML = teamWLV + '%';
                        document.getElementById(`team${teamName}GamesPlayed`).innerHTML = teamGamesPlayedV;
                        if (userTeam) {
                            for (let i = 0; i < this.htmlElements.compareTeamBlues.length; i++) {
                                if (userTeam === 'Blue') {
                                    this.htmlElements.compareVSText[i].before(this.htmlElements.compareTeamBlues[i]);
                                    this.htmlElements.compareVSText[i].after(this.htmlElements.compareTeamOranges[i]);
                                }
                                else if (userTeam === 'Orange') {
                                    this.htmlElements.compareVSText[i].before(this.htmlElements.compareTeamOranges[i]);
                                    this.htmlElements.compareVSText[i].after(this.htmlElements.compareTeamBlues[i]);
                                }
                            }
                        }
                        this.teamWinningOdds(allPlayerStats, teamStats);
                        resolve();
                    }
                }
            }));
        });
    }
    calculateAvg(statArray, mode, decimals) {
        let output = 0;
        if (typeof statArray === "object") {
            for (let i = 0; i < statArray.length; i++) {
                output += statArray[i];
            }
        }
        output = output / statArray.length;
        if (mode === "trunc") {
            output = Math.trunc(output).toString();
        }
        else if (mode === "tofixed") {
            output = output.toFixed(decimals);
        }
        return output;
    }
    teamWinningOdds(allPlayerStats, teamStats) {
        let startPerc, smallChance, largeChance, blueBIG, oddsBlue, oddsOrange, blueTot = 0, orangeTot = 0, teamsPoint = { Blue: 0, Orange: 0 }, team;
        Object.keys(allPlayerStats).forEach(i => {
            const playerStats = allPlayerStats[i];
            team = playerStats.team;
            let wlWeight = 0, kdWeight = 0, hsWeight = 0;
            if (playerStats.stats.rank.rank > 0 && playerStats.stats.rank.wins + playerStats.stats.rank.losses > 40) {
                if (playerStats.stats.rank.kd > 1.4) {
                    if (playerStats.stats.rank.wins + playerStats.stats.rank.losses > 150) {
                        kdWeight = 2.5;
                    }
                    else {
                        kdWeight = 2.2;
                    }
                }
                else if (playerStats.stats.rank.kd > 1.2) {
                    kdWeight = 1.6;
                }
                else if (playerStats.stats.rank.kd > 1.0) {
                    kdWeight = 1.5;
                }
                else if (playerStats.stats.rank.kd < 1.0) {
                    kdWeight = 1.2;
                }
                if (playerStats.generalpvp_kills > 100) {
                    if ((playerStats.stats.general.headshots / playerStats.stats.general.kills) > 0.55) {
                        hsWeight = 1.3;
                    }
                    else if ((playerStats.stats.general.headshots / playerStats.stats.general.kills) > 0.50) {
                        hsWeight = 1.2;
                    }
                    else if ((playerStats.stats.general.headshots / playerStats.stats.general.kills) > 0.47) {
                        hsWeight = 1.1;
                    }
                }
                if (playerStats.stats.rank.wins + playerStats.stats.rank.losses > 100) {
                    if (playerStats.stats.rank.wl > 75) {
                        wlWeight = 1.3;
                    }
                    else if (playerStats.stats.rank.wl > 63) {
                        wlWeight = 1.2;
                    }
                    else if (playerStats.stats.rank.wl > 50) {
                        wlWeight = 1.1;
                    }
                }
            }
            if (playerStats.stats.history[19].emea.rank > 0 && playerStats.stats.history[19].emea.wins + playerStats.stats.history[19].emea.losses > 40) {
                if (playerStats.stats.history[19].emea.kd > 1.4) {
                    if (playerStats.playerStats.stats.history[19].emea.wins + playerStats.stats.history[19].emea.losses > 150) {
                        kdWeight += 1.25;
                    }
                    else {
                        kdWeight += 1.1;
                    }
                }
                else if (playerStats.stats.history[19].emea.kd > 1.2) {
                    kdWeight += 0.8;
                }
                else if (playerStats.stats.history[19].emea.kd > 1.0) {
                    kdWeight += 0.75;
                }
                else if (playerStats.stats.history[19].emea.kd < 1.0) {
                    kdWeight += 0.6;
                }
                if (playerStats.stats.history[19].emea.wins + playerStats.stats.history[19].emea.losses > 100) {
                    if (playerStats.stats.history[19].emea.wl > 75) {
                        wlWeight += 0.65;
                    }
                    else if (playerStats.stats.history[19].emea.wl > 63) {
                        wlWeight += 0.6;
                    }
                    else if (playerStats.stats.history[19].emea.wl > 50) {
                        wlWeight += 0.55;
                    }
                }
            }
            teamsPoint[team] += kdWeight * (playerStats.stats.rank.rank / 3);
            teamsPoint[team] += hsWeight * (playerStats.stats.rank.rank / 3);
            teamsPoint[team] += wlWeight * (playerStats.stats.rank.rank / 5);
        });
        if (teamStats.Blue) {
            blueTot += parseFloat(teamStats.Blue.mmr) / 1000;
            blueTot += parseFloat(teamStats.Blue.kd) * 2;
        }
        teamsPoint.Blue += blueTot;
        if (teamStats.Orange) {
            orangeTot += parseFloat(teamStats.Orange.mmr) / 1000;
            orangeTot += parseFloat(teamStats.Orange.kd) * 2;
        }
        teamsPoint.Orange += orangeTot;
        if (teamsPoint.Blue > teamsPoint.Orange) {
            startPerc = (teamsPoint.Blue - teamsPoint.Orange) / (teamsPoint.Blue + teamsPoint.Orange) * 100;
            blueBIG = true;
        }
        else {
            startPerc = (teamsPoint.Orange - teamsPoint.Blue) / (teamsPoint.Orange + teamsPoint.Blue) * 100;
            blueBIG = false;
        }
        largeChance = 50 + startPerc / 2;
        smallChance = 50 - startPerc / 2;
        if (blueBIG === true) {
            oddsBlue = largeChance;
            oddsOrange = smallChance;
        }
        else if (blueBIG === false) {
            oddsBlue = smallChance;
            oddsOrange = largeChance;
        }
        document.getElementById("oddsBlue").innerHTML = oddsBlue.toFixed(1) + "%";
        document.getElementById("oddsOrange").innerHTML = oddsOrange.toFixed(1) + "%";
    }
}
exports.PlayerCompare = PlayerCompare;


/***/ }),

/***/ "./src/odk-ts/timer.ts":
/*!*****************************!*\
  !*** ./src/odk-ts/timer.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor(delegate, id) {
        this._timerId = null;
        this.handleTimerEvent = () => {
            this._timerId = null;
            this._delegate.onTimer(this._id);
        };
        this._delegate = delegate;
        this._id = id;
    }
    static wait(intervalInMS) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(resolve, intervalInMS);
            });
        });
    }
    start(intervalInMS) {
        this.stop();
        this._timerId = setTimeout(this.handleTimerEvent, intervalInMS);
    }
    stop() {
        if (this._timerId == null) {
            return;
        }
        clearTimeout(this._timerId);
        this._timerId = null;
    }
}
exports.Timer = Timer;


/***/ }),

/***/ "./src/public/AppWindow.ts":
/*!*********************************!*\
  !*** ./src/public/AppWindow.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppWindow = void 0;
const ow_window_1 = __webpack_require__(/*! ../odk-ts/ow-window */ "./src/odk-ts/ow-window.ts");
class AppWindow {
    constructor(windowName, settingsWindowId, statsisticsWindowId) {
        this.maximized = false;
        this.mainWindow = new ow_window_1.OWWindow('background');
        this.currWindow = new ow_window_1.OWWindow(windowName);
        this.settingsWindow = new ow_window_1.OWWindow(settingsWindowId);
        this.statisticsWindow = new ow_window_1.OWWindow(statsisticsWindowId);
        const closeButton = document.getElementById('closeButton');
        const maximizeButton = document.getElementById('maximizeButton');
        const minimizeButton = document.getElementById('minimizeButton');
        const settingsButton = document.getElementById('settingsButton');
        const gameHistory = document.getElementById('gameHistory');
        const closeWindowButton = document.getElementById('closeWindowButton');
        const modal = document.getElementById('exitMinimizeModal');
        const modalCancelButton = document.getElementById('cancel');
        const modalCloseButton = document.getElementById('exit');
        const modalMinimizeButton = document.getElementById('minimize');
        const header = document.getElementById('header');
        if (windowName === 'desktop' || windowName === 'settings_desktop' || windowName === 'statistics_desktop' || localStorage.desktopOnly === '"1"') {
            this.setDrag(header);
        }
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        }
        if (closeWindowButton) {
            closeWindowButton.addEventListener('click', () => {
                this.currWindow.close();
            });
        }
        if (minimizeButton) {
            minimizeButton.addEventListener('click', () => {
                this.currWindow.minimize();
            });
        }
        if (maximizeButton) {
            maximizeButton.addEventListener('click', () => {
                if (!this.maximized) {
                    this.currWindow.maximize();
                }
                else {
                    this.currWindow.restore();
                }
                this.maximized = !this.maximized;
            });
        }
        if (settingsButton) {
            settingsButton.addEventListener('click', () => {
                this.settingsWindow.restore();
            });
        }
        if (gameHistory) {
            gameHistory.addEventListener('click', () => {
                this.statisticsWindow.restore();
            });
        }
        if (modalCancelButton) {
            modalCancelButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        if (modalCloseButton) {
            modalCloseButton.addEventListener('click', () => {
                this.mainWindow.close();
            });
        }
        if (modalMinimizeButton) {
            modalMinimizeButton.addEventListener('click', () => {
                this.currWindow.minimize();
                modal.style.display = 'none';
            });
        }
    }
    getWindowState() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.currWindow.getWindowState();
        });
    }
    setDrag(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            this.currWindow.dragMove(elem);
        });
    }
}
exports.AppWindow = AppWindow;


/***/ }),

/***/ "./src/public/in_game/in_game.ts":
/*!***************************************!*\
  !*** ./src/public/in_game/in_game.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppWindow_1 = __webpack_require__(/*! ../AppWindow */ "./src/public/AppWindow.ts");
const ow_games_events_1 = __webpack_require__(/*! ../../odk-ts/ow-games-events */ "./src/odk-ts/ow-games-events.ts");
const ow_hotkeys_1 = __webpack_require__(/*! ../../odk-ts/ow-hotkeys */ "./src/odk-ts/ow-hotkeys.ts");
const ow_window_1 = __webpack_require__(/*! ../../odk-ts/ow-window */ "./src/odk-ts/ow-window.ts");
const database_1 = __webpack_require__(/*! ../../odk-ts/database */ "./src/odk-ts/database.ts");
const controllers_1 = __webpack_require__(/*! ../../odk-ts/controllers */ "./src/odk-ts/controllers.ts");
const localstorage_1 = __webpack_require__(/*! ../../odk-ts/localstorage */ "./src/odk-ts/localstorage.ts");
const player_compare_1 = __webpack_require__(/*! ../../odk-ts/player-compare */ "./src/odk-ts/player-compare.ts");
const match_1 = __webpack_require__(/*! ../../odk-ts/match */ "./src/odk-ts/match.ts");
const consts_1 = __webpack_require__(/*! ../../consts */ "./src/consts.ts");
const blueTeamDiv = document.getElementById('team-blue');
const orangeTeamDiv = document.getElementById('team-orange');
const compareTeamDiv = document.getElementById('team-compare-div');
const navBtn = document.getElementsByClassName('nav-btn');
const mainTabs = ['season', 'ranked', 'casual'];
const table = document.getElementsByClassName("player-tr");
const backBtn = document.getElementById('detailed-back-btn');
let count = 0, matchStats = {}, matchOutcome, roundsStats = {}, roundNumber, self = {}, currentTab, windowId, owWindow, countPlayers = -1, detailedstatus = false, matchData, players = {}, circleStats;
if (localStorage.desktopOnly === '"0"') {
    owWindow = new ow_window_1.OWWindow(consts_1.windowNames.inGame);
}
else {
    owWindow = new ow_window_1.OWWindow(consts_1.windowNames.inGameDesktopOnly);
}
const controllers = new controllers_1.Controllers();
const database = new database_1.Database();
const localstorage = new localstorage_1.Localstorage();
const playerCompare = new player_compare_1.PlayerCompare();
owWindow.minimize();
const promise1 = localstorage.initiateLocalStorage()
    .then(() => controllers.setTheme());
if (localStorage.desktopOnly === '"0"') {
    windowId = 'in_game';
}
else {
    windowId = 'in_game_desktop_only';
}
const valuesCustom = JSON.parse(localStorage.valuesTable);
const local = JSON.parse(localStorage.settings);
for (let i = 0; i < Object.keys(valuesCustom).length; i++) {
    const playerTableThs = document.querySelectorAll('.value-' + i);
    for (let j = 0; j < playerTableThs.length; j++) {
        playerTableThs[j].innerHTML = valuesCustom[i];
    }
}
let statsNavBtn = document.getElementsByClassName('sec-nav-btn');
for (let i = 0; i < statsNavBtn.length; i++) {
    statsNavBtn[i].addEventListener('click', function () {
        for (let i = 0; i < statsNavBtn.length; i++) {
            statsNavBtn[i].classList.remove('active');
        }
        this.classList.add('active');
        setCircles(this.id);
    });
}
function setCircles(id) {
    document.getElementById('kd-circle-weekly').setAttribute('stroke-dasharray', circleStats[0][id].attributeValueKD);
    document.getElementById('wl-circle-weekly').setAttribute('stroke-dasharray', circleStats[0][id].attributeValueWL);
    document.getElementById('kd-circle-weekly-text').innerHTML = parseFloat(circleStats[0][id].kd).toFixed(2);
    document.getElementById('wl-circle-weekly-text').innerHTML = circleStats[0][id].wl + '%';
    document.getElementById('kd-circle-daily').setAttribute('stroke-dasharray', circleStats[1][id].attributeValueKD);
    document.getElementById('wl-circle-daily').setAttribute('stroke-dasharray', circleStats[1][id].attributeValueWL);
    document.getElementById('kd-circle-daily-text').innerHTML = parseFloat(circleStats[1][id].kd).toFixed(2);
    document.getElementById('wl-circle-daily-text').innerHTML = circleStats[1][id].wl + '%';
}
class InGame extends AppWindow_1.AppWindow {
    constructor() {
        if (localStorage.desktopOnly === '"0"') {
            super(consts_1.windowNames.inGame, 'settings_in_game', 'statistics_in_game');
            const promise = owWindow.scaleWindow('in_game', 1600, 900, JSON.parse(localStorage.scaleSlider))
                .then(() => owWindow.changeWindowLocation('center-center', 'in_game'));
            if (local.maximize === '1') {
                owWindow.restore();
            }
        }
        else {
            super(consts_1.windowNames.inGameDesktopOnly, 'settings_desktop', 'statistics_desktop');
            owWindow.scaleWindow('in_game_desktop_only', 1600, 900, JSON.parse(localStorage.scaleSlider));
            owWindow.restore();
        }
        this.setToggleHotkeyBehavior();
        this.setTableTabDefault();
        this.setTableTabSelector();
        this.setHotkeyText();
        this.setOwKeyListener();
        this.setDetailedBackBtn();
        this._rainbowGameEventsListener = new ow_games_events_1.OWGamesEvents({
            onInfoUpdates: this.onInfoUpdates.bind(this),
            onNewEvents: this.onNewEvents.bind(this)
        }, consts_1.interestingFeatures1);
        const promise = database.initAllIDB()
            .then(() => database.displayDailyWeekly())
            .then(result => circleStats = result);
        const that = this;
        overwolf.games.events.getInfo(function (info) {
            that.setThisValue(info.res.me.account_id, 'profileId');
            that.setThisValue(info.res.me.name, 'profileName');
            that.setThisValue(info.res.match_info.match_id, 'matchId');
            that.setThisValue(info.res.match_info.game_mode, 'gameMode');
            if (info.res.match_info.map_id !== null) {
                that.setThisValue(info.res.match_info.map_id, 'mapId');
                matchData = new match_1.Match(info.res.match_info.game_mode, info.res.match_info.match_id, info.res.match_info.map_id);
                console.log(`matchId "${info.res.match_info.match_id}", gameMode "${info.res.match_info.game_mode}", mapId "${info.res.match_info.map_id}"`);
            }
            else {
                overwolf.games.events.getInfo(function (info) {
                    that.setThisValue(info.res.match_info.map_id, 'mapId');
                    matchData = new match_1.Match(info.res.match_info.game_mode, info.res.match_info.match_id, info.res.match_info.map_id);
                    console.log(`matchId "${info.res.match_info.match_id}", gameMode "${info.res.match_info.game_mode}", mapId "${info.res.match_info.map_id}"`);
                });
            }
        });
    }
    static instance() {
        if (!this._instance) {
            this._instance = new InGame();
        }
        return this._instance;
    }
    run() {
        this._rainbowGameEventsListener.start();
    }
    onInfoUpdates(info) {
        if ('round' in info) {
            console.log(`roundNumber "${info.round.number}"`);
            roundNumber = info.round.number;
        }
        if ('players' in info && (info.players.roster_0 != null || Object.values(info.players)[0] != null)) {
            for (let i = 0; i < Object.keys(info.players).length; i++) {
                if (Object.values(info.players)[i] !== null) {
                    const statsRaw = Object.values(info.players)[i];
                    const stats = JSON.parse(JSON.parse(JSON.stringify(statsRaw)));
                    const id = Object.keys(info.players)[i].substr(7);
                    if (this.profileName === stats.name) {
                        self.userTeam = stats.team;
                        self.id = id;
                        self.name = stats.name;
                        if (self.userTeam === 'Blue') {
                            compareTeamDiv.before(blueTeamDiv);
                            compareTeamDiv.after(orangeTeamDiv);
                            if (consts_1.gameModesPVE.includes(this.gameMode)) {
                                blueTeamDiv.style.display = 'block';
                                orangeTeamDiv.style.display = 'none';
                                console.log(`displayed team "blue"`);
                            }
                        }
                        else if (self.userTeam === 'Orange') {
                            compareTeamDiv.before(orangeTeamDiv);
                            compareTeamDiv.after(blueTeamDiv);
                            if (consts_1.gameModesPVE.includes(this.gameMode)) {
                                blueTeamDiv.style.display = 'none';
                                orangeTeamDiv.style.display = 'block';
                                console.log(`displayed team "orange"`);
                            }
                        }
                    }
                    if (!roundsStats[roundNumber]) {
                        roundsStats[roundNumber] = {};
                    }
                    if (!roundsStats[roundNumber].roundOutcome) {
                        roundsStats[roundNumber][id] = stats;
                    }
                    if (!document.getElementById(id)) {
                        const promise = matchData.playerJoin(id, stats, info)
                            .then(data => {
                            players = data;
                            playerCompare.calculateTeamStats(players, self.userTeam);
                            controllers.setTableTab(currentTab);
                            this.setDetailedOnClick();
                        });
                    }
                    console.log(`playerUpdate "${statsRaw}"`);
                }
            }
        }
        else if ('players' in info) {
            for (let i = 0; i < Object.keys(info.players).length; i++) {
                const id = Object.keys(info.players)[i].substr(7);
                delete matchStats[id];
                const promise = matchData.playerLeave(id)
                    .then((data) => {
                    players = data;
                    playerCompare.calculateTeamStats(players, self.userTeam);
                });
                console.log(`playerLeft "${id}"`);
            }
        }
    }
    onNewEvents(eventInfo) {
        if ('events' in eventInfo && eventInfo.events[0].name === 'roundOutcome' && (this.gameMode === 'MATCHMAKING_PVP' || this.gameMode === 'MATCHMAKING_PVP_RANKED' || this.gameMode === 'MATCHMAKING_PVP_UNRANKED' || this.gameMode === 'CUSTOMGAME_PVP_DEDICATED')) {
            roundsStats[roundNumber].roundOutcome = eventInfo.events[0].data;
            this.setMatchStats();
            const promise = database.initAllIDB()
                .then(() => matchData.storeMatchData(matchStats, matchOutcome, roundsStats, self));
        }
        if ('events' in eventInfo && eventInfo.events[0].name === 'matchOutcome' && (this.gameMode === 'MATCHMAKING_PVP' || this.gameMode === 'MATCHMAKING_PVP_RANKED' || this.gameMode === 'MATCHMAKING_PVP_UNRANKED' || this.gameMode === 'CUSTOMGAME_PVP_DEDICATED')) {
            matchOutcome = eventInfo.events[0].data;
            this.setMatchStats();
            owWindow.minimize();
            const promise = database.initAllIDB()
                .then(() => matchData.storeMatchData(matchStats, matchOutcome, roundsStats, self));
        }
        console.log(`infoEvent "${eventInfo.events[0].name}" "${eventInfo.events[0].data}"`);
    }
    setMatchStats() {
        const latestRound = roundsStats[Object.keys(roundsStats).reverse()[0]];
        for (const owPlayerId in latestRound) {
            if (latestRound.hasOwnProperty(owPlayerId) && owPlayerId !== 'roundOutcome') {
                matchStats[owPlayerId] = {};
                matchStats[owPlayerId].kills = 0;
                matchStats[owPlayerId].deaths = 0;
                matchStats[owPlayerId].score = 0;
                if (players) {
                    matchStats[owPlayerId].user = {
                        country: players[owPlayerId].user.countryCode,
                        level: players[owPlayerId].stats.progression.level,
                        rank: players[owPlayerId].stats.rank.rank,
                        mmr: players[owPlayerId].stats.rank.mmr,
                    };
                }
            }
        }
        for (const round in roundsStats) {
            if (roundsStats.hasOwnProperty(round)) {
                const roundStats = roundsStats[round];
                for (const owPlayerId in roundStats) {
                    if (roundStats.hasOwnProperty(owPlayerId) && owPlayerId !== 'roundOutcome') {
                        const owPlayerStats = roundStats[owPlayerId];
                        if (!matchStats[owPlayerId]) {
                            matchStats[owPlayerId] = {};
                        }
                        matchStats[owPlayerId].name = owPlayerStats.name;
                        matchStats[owPlayerId].team = owPlayerStats.team;
                        matchStats[owPlayerId].kills += owPlayerStats.kills;
                        matchStats[owPlayerId].deaths += owPlayerStats.deaths;
                        matchStats[owPlayerId].score += owPlayerStats.score;
                    }
                }
            }
        }
    }
    setThisValue(value, key) {
        this[key] = value;
    }
    setDetailedOnClick() {
        const playerButton = document.getElementsByClassName('player-tr');
        for (let i = 0; i < playerButton.length; i++) {
            playerButton[i].addEventListener('click', function () {
                matchData.printDetailedPlayer(this);
                detailedstatus = controllers.showDetailedPlayer(false);
            });
        }
    }
    setHotkeyText() {
        controllers.setShortcutText(document.getElementById('shortcut-text'));
        overwolf.settings.hotkeys.onChanged.addListener(() => {
            controllers.setShortcutText(document.getElementById('shortcut-text'));
        });
    }
    setTableTabDefault() {
        count = local.table;
        for (var i = 0; i < navBtn.length; i++) {
            navBtn[i].classList.remove('active');
            if (count == i) {
                navBtn[i].classList.add('active');
            }
        }
        currentTab = mainTabs[count];
        controllers.setTableTab(currentTab);
    }
    setTableTabSelector() {
        for (let i = 0; i < navBtn.length; i++) {
            navBtn[i].addEventListener('click', function () {
                currentTab = this.innerText.toLowerCase();
                for (i = 0; i < navBtn.length; i++) {
                    navBtn[i].classList.remove('active');
                }
                this.classList.add('active');
                controllers.setTableTab(currentTab);
            });
        }
    }
    setOwKeyListener() {
        overwolf.games.inputTracking.onKeyDown.addListener(event => {
            if (event.key === '40' || event.key === '38' || event.key === '13') {
                const playerAmount = document.getElementsByClassName('player-tr');
                const countPlayersMax = playerAmount.length - 1;
                for (let i = 0; i < table.length; i++) {
                    table[i].classList.remove('selected');
                }
                if (event.key === '13') {
                    if (detailedstatus === false) {
                        detailedstatus = false;
                        matchData.printDetailedPlayer(table[countPlayers]);
                    }
                    else {
                        detailedstatus = true;
                    }
                    detailedstatus = controllers.showDetailedPlayer(detailedstatus);
                }
                else if (event.key === '40') {
                    if (countPlayers === countPlayersMax) {
                        countPlayers = 0;
                    }
                    else {
                        countPlayers++;
                    }
                    if (detailedstatus === true) {
                        matchData.printDetailedPlayer(table[countPlayers]);
                    }
                }
                else if (event.key === '38') {
                    if (countPlayers === 0) {
                        countPlayers = countPlayersMax;
                    }
                    else {
                        countPlayers--;
                    }
                    if (detailedstatus === true) {
                        matchData.printDetailedPlayer(table[countPlayers]);
                    }
                }
                if (table[countPlayers]) {
                    table[countPlayers].classList.add('selected');
                }
            }
            if (event.key === '39' || event.key === '37') {
                if (event.key === '39') {
                    if (count === 2) {
                        count = 0;
                    }
                    else {
                        count++;
                    }
                }
                else if (event.key === '37') {
                    if (count === 0) {
                        count = 2;
                    }
                    else {
                        count--;
                    }
                }
                currentTab = mainTabs[count];
                for (var i = 0; i < navBtn.length; i++) {
                    navBtn[i].classList.remove('active');
                    if (count === i) {
                        navBtn[i].classList.add('active');
                    }
                }
                controllers.setTableTab(currentTab);
            }
        });
    }
    setDetailedBackBtn() {
        backBtn.addEventListener('click', function () {
            detailedstatus = controllers.showDetailedPlayer(true);
        });
    }
    setToggleHotkeyBehavior() {
        const toggleInGameWindow = (hotkeyResult) => __awaiter(this, void 0, void 0, function* () {
            console.log(`pressed hotkey "${hotkeyResult.featureId}"`);
            if (localStorage.desktopOnly === '"0"') {
                const inGameState = yield this.getWindowState();
                if (inGameState.window_state === 'normal' || inGameState.window_state === 'maximized') {
                    this.currWindow.minimize();
                }
                else if (inGameState.window_state === 'minimized' || inGameState.window_state === 'closed') {
                    this.currWindow.restore();
                }
                detailedstatus = controllers.showDetailedPlayer(true);
                for (let i = 0; i < table.length; i++) {
                    table[i].classList.remove('selected');
                }
                countPlayers = -1;
                owWindow.changeWindowLocation('center-center', windowId);
                overwolf.windows.close(consts_1.windowNames.statistics, () => {
                    console.log('close window' + consts_1.windowNames.statistics);
                });
            }
            else {
                owWindow.changeWindowSize('in_game_desktop_only', 1600, 900);
            }
        });
        ow_hotkeys_1.OWHotkeys.onHotkeyDown(consts_1.hotkeys.toggle, toggleInGameWindow);
    }
}
InGame.instance().run();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2NvbnRyb2xsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWdhbWVzLWV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWhvdGtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy13aW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9wbGF5ZXItY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL3RpbWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvQXBwV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvaW5fZ2FtZS9pbl9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzhEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzREFDM0MsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7MERBQy9CLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO21CQUMxRSxDQUFDO1FBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDOUIsS0FBSyxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUM7WUFFakMsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLEVBQUU7Z0JBQzNCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVwQyxJQUFJLFVBQVUsS0FBSyxPQUFPLEVBQUU7d0JBQ3hCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDdEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUN0RSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBRXhFLElBQUksS0FBSyxHQUFRLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUNsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDbkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3lCQUVuQztxQkFDSjtpQkFDSjthQUNKO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFWSxXQUFXLENBQUMsRUFBVTs7WUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBVyxDQUFNLE9BQU8sRUFBQyxFQUFFO2dCQUN6QyxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFakUsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0lBRU0sbUJBQW1CLENBQUMsUUFBcUI7UUFDNUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU87U0FDVjtRQUVELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDN0IsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRDLElBQUksVUFBVSxHQUFRO1lBQ2xCLFVBQVUsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQy9HLFNBQVMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUM1RCxTQUFTLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7U0FDL0QsQ0FBQztRQUVGLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ25FLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4RSxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNqRSxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEUsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXRFLElBQUksYUFBcUIsRUFBRSxpQkFBeUIsQ0FBQztRQUVyRCxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4RyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbE07YUFBTTtZQUNILGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDekI7UUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUN4RyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNqRzthQUFNO1lBQ0gsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2xEO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRzs7Ozs7Ozs7Z0ZBUStDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7eURBSWxELFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87Ozt5RUFHZCxhQUFhOytEQUN2QixpQkFBaUI7Ozs7NEVBSUosV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUzs7OzsrRUFJN0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7Ozt5QkFVckYsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSzs7Ozt5QkFJNUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTs7Ozt5QkFJN0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7eUJBSXBDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7eUJBSTNCLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7eUJBSTdCLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzttQkFFMUMsQ0FBQztRQUVaLE1BQU0sY0FBYyxHQUFHOzs7Ozs7O3lCQU9OLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLENBQUMsZUFBZSxDQUFDOzs7O3lCQUl6RCxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozt5QkFJdEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzs7Ozt5QkFJOUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTs7Ozt5QkFJL0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYTs7Ozt5QkFJdEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7eUJBSXRDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7eUJBSTdCLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07O21CQUVyQyxDQUFDO1FBRVosTUFBTSxjQUFjLEdBQUc7Ozs7Ozs7eUJBT04sVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxlQUFlLENBQUM7Ozs7eUJBSXpELFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7O3lCQUl0QyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLOzs7O3lCQUk5QixXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O3lCQUkvQixXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhOzs7O3lCQUl0QyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozt5QkFJdEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs7Ozt5QkFJN0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTs7bUJBRXJDLENBQUM7UUFFWixNQUFNLGNBQWMsR0FBRzs7Ozs7Ozt5QkFPTixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzs7Ozt5QkFJOUQsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCOzs7O3lCQUkzQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUI7Ozs7eUJBSTdDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7eUJBSWpDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7eUJBSWpDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7eUJBSTlCLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVc7Ozs7eUJBSXJDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWE7O21CQUU3QyxDQUFDO1FBRVosTUFBTSxlQUFlLEdBQUc7Ozs7Ozs7eUJBT1AsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTs7Ozt5QkFJNUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSzs7Ozt5QkFJL0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTs7Ozt5QkFJaEMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozt5QkFJM0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUzs7Ozt5QkFJbkMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7eUJBSW5ELFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVk7Ozs7eUJBSXRDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7eUJBSXRELFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7eUJBSTVCLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7eUJBSTlCLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7eUJBSWhDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWE7Ozs7eUJBSXZDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7eUJBSWpDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7eUJBSWhDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVU7Ozs7OzttQkFNMUMsQ0FBQztRQUVaLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDcEYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDOUYsUUFBUSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBc0IsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0csUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6RSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNyRSxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUV2RSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFcEUsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO2FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxLQUFLLENBQUMscUNBQXFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNiLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDcEQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFFakUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUVyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN6QixNQUFNLE1BQU0sR0FBRyxlQUFlLEdBQUcsQ0FBQyxDQUFDO29CQUVuQyxJQUFJLFVBQVUsR0FBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFFbEUsSUFBSSxRQUFRLEdBQUc7d0JBQ1gsV0FBVyxFQUFFLENBQUM7d0JBQ2QsTUFBTSxFQUFFLE1BQU07cUJBQ2pCO29CQUVELEtBQUssTUFBTSxNQUFNLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUN2QyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQzdDLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDakQsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDOzRCQUUxRCxJQUFJLFdBQVcsQ0FBQyxlQUFlLEtBQUssS0FBSyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFO2dDQUM3RSxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQ0FDbkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7NkJBQzVCO3lCQUNKO3FCQUNKO29CQUVELElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEtBQUssS0FBSyxFQUFFO3dCQUNqRSxVQUFVLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDdEQ7b0JBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO3dCQUM1QyxVQUFVLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDOUU7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7cUJBQ3RCO29CQUVELElBQUksVUFBVSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksVUFBVSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7d0JBQzlELFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRSxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN2RDt5QkFBTTt3QkFDSCxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzt3QkFDeEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7cUJBQy9CO29CQUVELFdBQVcsSUFBSzs7O21FQUd1QixVQUFVLENBQUMsUUFBUTs7OzJEQUczQixxQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUk7a0RBQ25FLFVBQVUsQ0FBQyxPQUFPOytEQUNMLFVBQVUsQ0FBQyxFQUFFOzs7NkJBRy9DLENBQUM7b0JBRUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO2lCQUNuRTtZQUNMLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFTyxVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1IsT0FBTyxtQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO2FBQU07WUFDSCxPQUFPLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQUVNLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBb0IsRUFBRSxVQUFVLEVBQUUsSUFBSTtRQUNwRSxNQUFNLEtBQUssR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlCLE1BQU0sY0FBYyxHQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxjQUFjLEdBQVEsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBRWhFLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5RixNQUFNLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBQzlHLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sVUFBVSxDQUFDLE1BQWMsRUFBRSxVQUFVLEVBQUUsWUFBb0IsRUFBRSxJQUFJO1FBQ3JFLE9BQU8sSUFBSSxPQUFPLENBQVEsQ0FBTyxPQUFPLEVBQUUsRUFBRTtZQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO2lCQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFFbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDdEQsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFFeEQsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO29CQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRyxDQUFDO2lCQUNuQztxQkFBTSxJQUFJLFlBQVksS0FBSyxRQUFRLEVBQUU7b0JBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFHLENBQUM7aUJBQ3JDO2dCQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDO3FCQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUM7WUFDVixDQUFDLENBQUM7UUFDVixDQUFDLEVBQUM7SUFDTixDQUFDO0lBRU8sV0FBVyxDQUFDLE1BQWMsRUFBRSxTQUFpQixFQUFFLFVBQVUsRUFBRSxZQUFvQixFQUFFLElBQUk7UUFDekYsT0FBTyxJQUFJLE9BQU8sQ0FBUSxDQUFPLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7aUJBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDYixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUVuQixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNqRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUVuRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7b0JBQzVCLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFHLENBQUM7aUJBQzlDO3FCQUFNLElBQUksWUFBWSxLQUFLLFFBQVEsRUFBRTtvQkFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUcsQ0FBQztpQkFDaEQ7Z0JBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7cUJBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUVwQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBQztJQUNOLENBQUM7SUFFTyxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFvQixFQUFFLElBQUk7UUFDakUsT0FBTyxJQUFJLE9BQU8sQ0FBUSxDQUFPLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE1BQU0sT0FBTyxHQUFHO2dCQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUM5QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQztZQUVGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO2lCQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBQztJQUNOLENBQUM7Q0FDSjtBQW52QkQsc0JBbXZCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3h2QkQsNEVBQWdDO0FBT2hDLE1BQWEsYUFBYTtJQUl0QixZQUFZLFFBQWdDLEVBQUUsZ0JBQTBCO1FBZ0RoRSxrQkFBYSxHQUFHLENBQUMsSUFBUyxFQUFRLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFTyxnQkFBVyxHQUFHLENBQUMsQ0FBTSxFQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQXJERyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7SUFDOUMsQ0FBQztJQUVZLE9BQU87O1lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDM0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQztRQUNOLENBQUM7S0FBQTtJQUVhLG1CQUFtQjs7WUFDN0IsSUFBSSxLQUFLLEdBQVUsQ0FBQyxFQUNwQixNQUFNLENBQUM7WUFFUCxPQUFRLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsTUFBTSxHQUFHLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUNyQyxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLE9BQU8sQ0FDVixDQUFDO2dCQUNOLENBQUMsQ0FBQztnQkFFRixJQUFLLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFHO29CQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRixPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDaEQ7Z0JBRUQsTUFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixLQUFLLEVBQUUsQ0FBQzthQUNYO1lBRUQsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsR0FBRSxLQUFLLEdBQUUsUUFBUSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hHLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVPLGNBQWM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVPLGdCQUFnQjtRQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBVVksS0FBSzs7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFdEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXRCLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFFakMsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO1lBRXRCLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFN0MsSUFBSyxHQUFHLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQztLQUFBO0lBRU0sSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0o7QUFoRkQsc0NBZ0ZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkZELE1BQWEsU0FBUztJQUVsQixnQkFBd0IsQ0FBQztJQWdCbEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFnQixFQUFFLE1BQThEO1FBQ3ZHLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFyQkQsOEJBcUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELE1BQWEsUUFBUTtJQUlqQixZQUFZLE9BQXNCLElBQUk7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVZLE9BQU87O1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFaEMsT0FBTyxJQUFJLE9BQU8sQ0FBVyxDQUFPLE9BQU8sRUFBRSxFQUFFO2dCQUMzQyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLEdBQXNCLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBRXJDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO3dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLEVBQUUsWUFBWSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFFM0YsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUVqQyxPQUFPLElBQUksT0FBTyxDQUFXLENBQU0sT0FBTyxFQUFDLEVBQUU7Z0JBQ3pDLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsR0FBc0IsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFckMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtJQUVZLFlBQVk7O1lBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFFakMsT0FBTyxJQUFJLE9BQU8sQ0FBVyxDQUFNLE9BQU8sRUFBQyxFQUFFO2dCQUN6QyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLEdBQXNCLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBRXJDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELE9BQU8sT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUVqQyxPQUFPLElBQUksT0FBTyxDQUFXLENBQU0sT0FBTyxFQUFDLEVBQUU7Z0JBQ3pDLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsR0FBc0IsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDckMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtJQUVZLElBQUk7O1lBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUU5QixPQUFPLElBQUksT0FBTyxDQUFXLENBQU0sT0FBTyxFQUFDLEVBQUU7Z0JBQ3pDLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsR0FBc0IsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDckMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtJQUVZLEtBQUs7O1lBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBTSxPQUFPLEVBQUMsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzVCLElBQUksRUFBRSxHQUFzQixJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUVyQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDLEVBQUU7b0JBQ3RELE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUM5QjtnQkFFRCxPQUFPLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtJQUVZLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDakQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFFNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO29CQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO1FBQ04sQ0FBQztLQUFBO0lBRVksb0JBQW9CLENBQUMsSUFBSSxFQUFFLFFBQVE7O1lBQzVDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO29CQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTFCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFFeEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO3dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRTFCLElBQUksU0FBUyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFFcEUsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ3hELElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUMxRCxJQUFJLElBQVksQ0FBQztvQkFDakIsSUFBSSxHQUFXLENBQUM7b0JBRWhCLElBQUksSUFBSSxLQUFLLGVBQWUsRUFBRTt3QkFDMUIsSUFBSSxHQUFHLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLEdBQUcsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNoRDt5QkFBTSxJQUFJLElBQUksS0FBSyxjQUFjLEVBQUU7d0JBQ2hDLElBQUksR0FBRyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3pDLEdBQUcsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNoRDt5QkFBTSxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7d0JBQy9CLElBQUksR0FBRyxFQUFFLENBQUM7d0JBQ1YsR0FBRyxHQUFHLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2hEO29CQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTt3QkFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzRCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlCLENBQUMsQ0FBQztnQkFDTixDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7UUFDTixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSzs7WUFDbkQsTUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDO1lBRXZCLE9BQU8sSUFBSSxPQUFPLENBQVcsQ0FBTSxPQUFPLEVBQUMsRUFBRTtnQkFDekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDckQsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxLQUFLLEdBQUcsQ0FBQztnQkFFN0UsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxzQkFBc0IsRUFBRTtvQkFDL0QsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQzlGLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO2lCQUMvRztnQkFFRCxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUYsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBRS9GLElBQUksUUFBUSxLQUFLLFVBQVUsSUFBSSxRQUFRLEtBQUssdUJBQXVCLEVBQUU7b0JBQ2pFLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTt3QkFDZCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3FCQUNuRTt5QkFBTTt3QkFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3FCQUNwRTtpQkFDSjtnQkFFRCxPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtJQUVNLFFBQVEsQ0FBQyxJQUFpQjtRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNMLENBQUM7SUFFWSxlQUFlOztZQUN4QixPQUFPLElBQUksT0FBTyxDQUFVLENBQU0sT0FBTyxFQUFDLEVBQUU7Z0JBQ3hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQztZQUNOLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtJQUVZLGNBQWM7O1lBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUVoQixPQUFPLElBQUksT0FBTyxDQUEyQixDQUFNLE9BQU8sRUFBQyxFQUFFO2dCQUN6RCxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLEdBQXNCLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3JDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqRCxDQUFDLEVBQUM7UUFDTixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sY0FBYzs7WUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBbUIsQ0FBTSxPQUFPLEVBQUMsRUFBRTtnQkFDakQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDdkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0lBRU8sTUFBTTtRQUNWLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztxQkFDaEM7b0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLE1BQU0sRUFBRSxDQUFDO2lCQUNaO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDSCxRQUFRLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDekQ7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRWEsY0FBYzs7WUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQVcsQ0FBTSxPQUFPLEVBQUMsRUFBRTtnQkFDekMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0lBRWEsYUFBYTs7WUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLE9BQU8sSUFBSSxPQUFPLENBQVcsQ0FBTyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ25ELE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsR0FBc0IsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFckMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTzt3QkFDbEIsT0FBTyxFQUFFLENBQUM7O3dCQUVWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFqUUQsNEJBaVFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblFELE1BQWEsYUFBYTtJQUd0QjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztZQUN4RCxrQkFBa0IsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBQzVELGFBQWEsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7U0FDaEU7SUFDTCxDQUFDO0lBRVksa0JBQWtCLENBQUMsY0FBYyxFQUFFLFFBQWdCOztZQUM1RCxPQUFPLElBQUksT0FBTyxDQUFXLENBQU0sT0FBTyxFQUFDLEVBQUU7Z0JBQ3pDLElBQUksU0FBUyxHQUFRLEVBQUUsRUFBRSxRQUFnQixFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsZ0JBQXdCLENBQUM7Z0JBRXRHLEtBQUssTUFBTSxFQUFFLElBQUksY0FBYyxFQUFFO29CQUM3QixJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUU7d0JBQ25DLE1BQU0sV0FBVyxHQUFRLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDNUMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFFbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTs0QkFDdEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDekIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7NEJBQzdCLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDOzRCQUM1QixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs0QkFDNUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7eUJBQ3hDO3dCQUVELFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6RCxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDdkQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3ZELFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUUzRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDckUsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xFLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNsRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUVyRixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sUUFBUSxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO3dCQUNuRSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO3dCQUNqRSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQzt3QkFDdkUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLFFBQVEsYUFBYSxDQUFDLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO3dCQUVuRixJQUFJLFFBQVEsRUFBRTs0QkFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2hFLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtvQ0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDckY7cUNBQU0sSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO29DQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUNuRjs2QkFDSjt5QkFDSjt3QkFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFFaEQsT0FBTyxFQUFFLENBQUM7cUJBQ2I7aUJBQ0o7WUFDTCxDQUFDLEVBQUM7UUFDTixDQUFDO0tBQUE7SUFFTyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQVksRUFBRSxRQUFnQjtRQUMxRCxJQUFJLE1BQU0sR0FBUSxDQUFDLENBQUM7UUFFcEIsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUVELE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUVuQyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDbEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUM7YUFBTSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sZUFBZSxDQUFDLGNBQWMsRUFBRSxTQUFTO1FBQzdDLElBQUksU0FBaUIsRUFBRSxXQUFtQixFQUFFLFdBQW1CLEVBQUUsT0FBZ0IsRUFBRSxRQUFnQixFQUFFLFVBQWtCLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBUSxFQUFFLElBQUksRUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFLElBQVksQ0FBQztRQUUxTSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJO1lBQ3ZCLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFFN0MsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2dCQUNyRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUU7b0JBQ2pDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7d0JBQ25FLFFBQVEsR0FBRyxHQUFHLENBQUM7cUJBQ2xCO3lCQUFNO3dCQUNILFFBQVEsR0FBRyxHQUFHLENBQUM7cUJBQ2xCO2lCQUNKO3FCQUFNLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDeEMsUUFBUSxHQUFHLEdBQUcsQ0FBQztpQkFDbEI7cUJBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFO29CQUN4QyxRQUFRLEdBQUcsR0FBRyxDQUFDO2lCQUNsQjtxQkFBTSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUU7b0JBQ3hDLFFBQVEsR0FBRyxHQUFHLENBQUM7aUJBQ2xCO2dCQUVELElBQUksV0FBVyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUU7d0JBQ2hGLFFBQVEsR0FBRyxHQUFHLENBQUM7cUJBQ2xCO3lCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFO3dCQUN2RixRQUFRLEdBQUcsR0FBRyxDQUFDO3FCQUNsQjt5QkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRTt3QkFDdkYsUUFBUSxHQUFHLEdBQUcsQ0FBQztxQkFDbEI7aUJBQ0o7Z0JBRUQsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDbkUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNoQyxRQUFRLEdBQUcsR0FBRyxDQUFDO3FCQUNsQjt5QkFBTSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7d0JBQ3ZDLFFBQVEsR0FBRyxHQUFHLENBQUM7cUJBQ2xCO3lCQUFNLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTt3QkFDdkMsUUFBUSxHQUFHLEdBQUcsQ0FBQztxQkFDbEI7aUJBQ0o7YUFDSjtZQUNELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtnQkFDekksSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDN0MsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTt3QkFDdkcsUUFBUSxJQUFJLElBQUksQ0FBQztxQkFDcEI7eUJBQU07d0JBQ0gsUUFBUSxJQUFJLEdBQUcsQ0FBQztxQkFDbkI7aUJBQ0o7cUJBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDcEQsUUFBUSxJQUFJLEdBQUcsQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDcEQsUUFBUSxJQUFJLElBQUksQ0FBQztpQkFDcEI7cUJBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRTtvQkFDcEQsUUFBUSxJQUFJLEdBQUcsQ0FBQztpQkFDbkI7Z0JBRUQsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUMzRixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUM1QyxRQUFRLElBQUksSUFBSSxDQUFDO3FCQUNwQjt5QkFBTSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNuRCxRQUFRLElBQUksR0FBRyxDQUFDO3FCQUNuQjt5QkFBTSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO3dCQUNuRCxRQUFRLElBQUksSUFBSSxDQUFDO3FCQUNwQjtpQkFDSjthQUNKO1lBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBRTtZQUNsRCxPQUFPLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsVUFBVSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUM7UUFFM0IsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2xCLFNBQVMsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUU7WUFDdEQsU0FBUyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRDtRQUNELFVBQVUsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO1FBRS9CLElBQUksVUFBVSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3JDLFNBQVMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2hHLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFBTTtZQUNILFNBQVMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2hHLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbkI7UUFFRCxXQUFXLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDakMsV0FBVyxHQUFHLEVBQUUsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsQixRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQ3ZCLFVBQVUsR0FBRyxXQUFXLENBQUM7U0FDNUI7YUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUIsUUFBUSxHQUFHLFdBQVcsQ0FBQztZQUN2QixVQUFVLEdBQUcsV0FBVyxDQUFDO1NBQzVCO1FBRUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDbEYsQ0FBQztDQUNKO0FBL0xELHNDQStMQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMRCxNQUFhLEtBQUs7SUFjZCxZQUFZLFFBQXVCLEVBQUUsRUFBVztRQVp4QyxhQUFRLEdBQWdCLElBQUksQ0FBQztRQW9DN0IscUJBQWdCLEdBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBMUJHLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFWTSxNQUFNLENBQU8sSUFBSSxDQUFDLFlBQW9COztZQUN6QyxPQUFPLElBQUksT0FBTyxDQUFPLE9BQU8sQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztRQUNOLENBQUM7S0FBQTtJQVNNLEtBQUssQ0FBQyxZQUFvQjtRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFHWixJQUFJLENBQUMsUUFBUSxHQUFXLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUdNLElBQUk7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLE9BQU87U0FDVjtRQUVELFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztDQU9KO0FBMUNELHNCQTBDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRCxnR0FBK0M7QUFFL0MsTUFBYSxTQUFTO0lBT2xCLFlBQVksVUFBa0IsRUFBRSxnQkFBd0IsRUFBRSxtQkFBMkI7UUFGM0UsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUdqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksb0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG9CQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUUxRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRSxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakUsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0QsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsTUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakQsSUFBSSxVQUFVLEtBQUssU0FBUyxJQUFJLFVBQVUsS0FBSyxrQkFBa0IsSUFBSSxVQUFVLEtBQUssb0JBQW9CLElBQUksWUFBWSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7WUFDNUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksV0FBVyxFQUFFO1lBQ2IsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxpQkFBaUIsRUFBRTtZQUNuQixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLGNBQWMsRUFBRTtZQUNoQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUM3QjtnQkFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxjQUFjLEVBQUU7WUFDaEIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksV0FBVyxFQUFFO1lBQ2IsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxpQkFBaUIsRUFBRTtZQUNuQixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksZ0JBQWdCLEVBQUU7WUFDbEIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxtQkFBbUIsRUFBRTtZQUNyQixtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFWSxjQUFjOztZQUN2QixPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFYSxPQUFPLENBQUMsSUFBaUI7O1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtDQUNKO0FBbkdELDhCQW1HQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdELHlGQUF5QztBQUN6QyxxSEFBNkQ7QUFDN0Qsc0dBQW9EO0FBQ3BELG1HQUFrRDtBQUNsRCxnR0FBaUQ7QUFDakQseUdBQXVEO0FBQ3ZELDRHQUF5RDtBQUN6RCxrSEFBNEQ7QUFDNUQsdUZBQTJDO0FBQzNDLDRFQUF3RjtBQUV4RixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0QsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25FLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxRCxNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDaEQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUU3RCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFRLEVBQUUsRUFBRSxZQUFvQixFQUFFLFdBQVcsR0FBUSxFQUFFLEVBQUUsV0FBbUIsRUFBRSxJQUFJLEdBQVEsRUFBRSxFQUFFLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxRQUFrQixFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLFdBQWdCLENBQUM7QUFFdFEsSUFBSSxZQUFZLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtJQUNwQyxRQUFRLEdBQUcsSUFBSSxvQkFBUSxDQUFDLG9CQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDL0M7S0FBTTtJQUNILFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsb0JBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0NBQzFEO0FBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDaEMsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFDeEMsTUFBTSxhQUFhLEdBQUcsSUFBSSw4QkFBYSxFQUFFLENBQUM7QUFFMUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRXBCLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtLQUMvQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFeEMsSUFBSSxZQUFZLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtJQUNwQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0NBQ3hCO0tBQU07SUFDSCxRQUFRLEdBQUcsc0JBQXNCLENBQUM7Q0FDckM7QUFFRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUdoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdkQsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqRDtDQUNKO0FBRUQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRWpFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3pDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFFckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3QixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0NBQ047QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUFFO0lBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsSCxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFFekYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNqSCxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pILFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUM1RixDQUFDO0FBRUQsTUFBTSxNQUFPLFNBQVEscUJBQVM7SUFXMUI7UUFDSSxJQUFJLFlBQVksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxvQkFBVyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBRXBFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzNGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFM0UsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3RCO1NBQ0o7YUFBTTtZQUNILEtBQUssQ0FBQyxvQkFBVyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFFL0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDOUYsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLCtCQUFhLENBQUM7WUFDaEQsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzNDLEVBQUUsNkJBQW9CLENBQUMsQ0FBQztRQUV6QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFO2FBQ2hDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFMUMsTUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBRXZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUk7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFN0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFdkQsU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRS9HLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLGdCQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLGFBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNoSjtpQkFBTTtnQkFDSCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJO29CQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFFdkQsU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRS9HLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLGdCQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLGFBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDakosQ0FBQyxDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVE7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxHQUFHO1FBQ04sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTyxhQUFhLENBQUMsSUFBSTtRQUN0QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWxELFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUNuQztRQUVELElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNoRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDekMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVsRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTt3QkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzt3QkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBRXZCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7NEJBQzFCLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ25DLGNBQWMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7NEJBRXBDLElBQUkscUJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dDQUN0QyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0NBQ3BDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQ0FFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOzZCQUN4Qzt5QkFDSjs2QkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFOzRCQUNuQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQyxjQUFjLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUVsQyxJQUFJLHFCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQ0FDdEMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dDQUNuQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0NBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQzs2QkFDMUM7eUJBQ0o7cUJBQ0o7b0JBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDM0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztxQkFDakM7b0JBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLEVBQUU7d0JBQ3hDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ3hDO29CQUVELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUM5QixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDOzZCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQzs0QkFDZixhQUFhLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDekQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7d0JBQzlCLENBQUMsQ0FBQyxDQUFDO3FCQUNWO29CQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLFFBQVEsR0FBRyxDQUFDLENBQUM7aUJBQzdDO2FBQ0o7U0FDSjthQUFNLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2RCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWxELE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUV0QixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztxQkFDcEMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixhQUFhLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDO2dCQUVOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0o7SUFDTCxDQUFDO0lBRU8sV0FBVyxDQUFDLFNBQVM7UUFDekIsSUFBSSxRQUFRLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssaUJBQWlCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLDBCQUEwQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssMEJBQTBCLENBQUMsRUFBRTtZQUM3UCxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRWpFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUVyQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFO2lCQUNoQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsSUFBSSxRQUFRLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssaUJBQWlCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLDBCQUEwQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssMEJBQTBCLENBQUMsRUFBRTtZQUM3UCxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFeEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXJCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFO2lCQUNoQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU8sYUFBYTtRQUNqQixNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZFLEtBQUssTUFBTSxVQUFVLElBQUksV0FBVyxFQUFFO1lBQ2xDLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLEtBQUssY0FBYyxFQUFFO2dCQUN6RSxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDakMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUlqQyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxHQUFHO3dCQUMxQixPQUFPLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO3dCQUM3QyxLQUFLLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSzt3QkFDbEQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7d0JBQ3pDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHO3FCQUMxQyxDQUFDO2lCQUNMO2FBQ0o7U0FDSjtRQUVELEtBQUssTUFBTSxLQUFLLElBQUksV0FBVyxFQUFFO1lBQzdCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV0QyxLQUFLLE1BQU0sVUFBVSxJQUFJLFVBQVUsRUFBRTtvQkFDakMsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsS0FBSyxjQUFjLEVBQUU7d0JBQ3hFLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFFN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTs0QkFDekIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt5QkFDL0I7d0JBRUQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO3dCQUNqRCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ2pELFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQzt3QkFDcEQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDO3dCQUN0RCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUM7cUJBQ3ZEO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBYSxFQUFFLEdBQVc7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU8sa0JBQWtCO1FBQ3RCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUUxQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUN0QyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXBDLGNBQWMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRU8sYUFBYTtRQUNqQixXQUFXLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUV0RSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNqRCxXQUFXLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8sa0JBQWtCO1FBQ3RCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXJDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7YUFDcEM7U0FDSjtRQUVELFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sbUJBQW1CO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUUxQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4QztnQkFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFTyxnQkFBZ0I7UUFDcEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2RCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUVoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7b0JBQ3BCLElBQUksY0FBYyxLQUFLLEtBQUssRUFBRTt3QkFDMUIsY0FBYyxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUN0RDt5QkFBTTt3QkFDSCxjQUFjLEdBQUcsSUFBSSxDQUFDO3FCQUN6QjtvQkFFRCxjQUFjLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUNuRTtxQkFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLFlBQVksS0FBSyxlQUFlLEVBQUU7d0JBQ2xDLFlBQVksR0FBRyxDQUFDLENBQUM7cUJBQ3BCO3lCQUFNO3dCQUNILFlBQVksRUFBRSxDQUFDO3FCQUNsQjtvQkFFRCxJQUFJLGNBQWMsS0FBSyxJQUFJLEVBQUU7d0JBQ3pCLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDdEQ7aUJBQ0o7cUJBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRTtvQkFDM0IsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixZQUFZLEdBQUcsZUFBZSxDQUFDO3FCQUNsQzt5QkFBTTt3QkFDSCxZQUFZLEVBQUUsQ0FBQztxQkFDbEI7b0JBRUQsSUFBSSxjQUFjLEtBQUssSUFBSSxFQUFFO3dCQUN6QixTQUFTLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ3REO2lCQUNKO2dCQUVELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNyQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDakQ7YUFDSjtZQUVELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQzFDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7b0JBQ3BCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTt3QkFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO3FCQUNiO3lCQUFNO3dCQUNILEtBQUssRUFBRTtxQkFDVjtpQkFDSjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7d0JBQ2IsS0FBSyxHQUFHLENBQUMsQ0FBQztxQkFDYjt5QkFBTTt3QkFDSCxLQUFLLEVBQUU7cUJBQ1Y7aUJBQ0o7Z0JBRUQsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7d0JBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO3FCQUNwQztpQkFDSjtnQkFFRCxXQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLGtCQUFrQjtRQUN0QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzlCLGNBQWMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLHVCQUF1QjtRQUMzQixNQUFNLGtCQUFrQixHQUFHLENBQU0sWUFBWSxFQUFDLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFFMUQsSUFBSSxZQUFZLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtnQkFDcEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2hELElBQUksV0FBVyxDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksV0FBVyxDQUFDLFlBQVksS0FBSyxXQUFXLEVBQUU7b0JBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQzlCO3FCQUFNLElBQUksV0FBVyxDQUFDLFlBQVksS0FBSyxXQUFXLElBQUksV0FBVyxDQUFDLFlBQVksS0FBSyxRQUFRLEVBQUU7b0JBQzFGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQzdCO2dCQUVELGNBQWMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXRELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVsQixRQUFRLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUV6RCxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLG9CQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNoRTtRQUNMLENBQUM7UUFFRCxzQkFBUyxDQUFDLFlBQVksQ0FBQyxnQkFBTyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDSjtBQUVELE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJpbl9nYW1lL2luX2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMvaW5fZ2FtZS9pbl9nYW1lLnRzXCIpO1xuIiwiY29uc3QgcmFpbmJvd0NsYXNzSWQgPSAxMDgyNjtcclxuXHJcbmNvbnN0IGludGVyZXN0aW5nRmVhdHVyZXMxID0gW1xyXG4gICAgJ2dlcF9pbnRlcm5hbCcsXHJcbiAgICAnZ2FtZV9pbmZvJyxcclxuICAgICdtYXRjaCcsXHJcbiAgICAnbWF0Y2hfaW5mbycsXHJcbiAgICAncm9zdGVyJyxcclxuICAgICdraWxsJyxcclxuICAgICdkZWF0aCcsXHJcbiAgICAnbWUnLFxyXG5dO1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczIgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuXTtcclxuXHJcbmNvbnN0IHdpbmRvd05hbWVzID0ge1xyXG4gICAgZGVza3RvcDogJ2Rlc2t0b3AnLFxyXG4gICAgaW5Mb2JieTogJ2luX2xvYmJ5JyxcclxuICAgIGluR2FtZTogJ2luX2dhbWUnLFxyXG4gICAgaW5Mb2JieURlc2t0b3BPbmx5OiAnaW5fbG9iYnlfZGVza3RvcF9vbmx5JyxcclxuICAgIGluR2FtZURlc2t0b3BPbmx5OiAnaW5fZ2FtZV9kZXNrdG9wX29ubHknLFxyXG4gICAgc2V0dGluZ3M6ICdzZXR0aW5nc19pbl9nYW1lJyxcclxuICAgIHNldHRpbmdzRGVza3RvcE9ubHk6ICdzZXR0aW5nc19kZXNrdG9wJyxcclxuICAgIHN0YXRpc3RpY3M6ICdzdGF0aXN0aWNzX2luX2dhbWUnLFxyXG4gICAgc3RhdGlzdGljc0Rlc2t0b3BPbmx5OiAnc3RhdGlzdGljc19kZXNrdG9wJ1xyXG59O1xyXG5cclxuY29uc3QgaG90a2V5cyA9IHtcclxuICAgIHRvZ2dsZTogJ3Nob3doaWRlJyxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWRSA9IFtcclxuICAgICdPUEVSQVRJT05TJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfTE9ORVdPTEYnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRScsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFX1BBUlRZJyxcclxuXTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWUCA9IFtcclxuICAgICdNQVRDSE1BS0lOR19QVlBfTkVXQ09NRVInLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX0VWRU5UJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9SQU5LRUQnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQJyxcclxuICAgICdDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQnLFxyXG5dO1xyXG5cclxuY29uc3QgZGF0YWJhc2VPYmplY3QgPSB7XHJcbiAgICBNQVRDSE1BS0lOR19QVlBfUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZWFzb25Db2xvcnMgPSB7XHJcbiAgICA2OicjMDA1MGIzJyxcclxuICAgIDc6JyNjYTM2MWMnLFxyXG4gICAgODonIzAwNjU0MycsXHJcbiAgICA5OicjZmZjMTEzJyxcclxuICAgIDEwOicjOTQ5ZjM5JyxcclxuICAgIDExOicjODFhMGMxJyxcclxuICAgIDEyOicjYWE4NTRmJyxcclxuICAgIDEzOicjZDIwMDVhJyxcclxuICAgIDE0OicjMzA0Mzk1JyxcclxuICAgIDE1OicjMTM2MzBjJyxcclxuICAgIDE2OicjMDY5ZGIzJyxcclxuICAgIDE3OicjOTQ2YTk3JyxcclxuICAgIDE4OicjMmI3ZTlhJyxcclxuICAgIDE5OicjNmNhNTExJyxcclxuICAgIDIwOicjZDE0MDA3JyxcclxufVxyXG5cclxuY29uc3Qgb3BlcmF0b3JzID0ge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU2xlZGdlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoxXCJcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhhdGNoZXJcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjFcIlxyXG4gICAgfSxcclxuICAgIDUxMzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MlwiXHJcbiAgICB9LFxyXG4gICAgMTAyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRoZXJtaXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToyXCJcclxuICAgIH0sXHJcbiAgICA3NzA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUd2l0Y2hcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjNcIlxyXG4gICAgfSxcclxuICAgIDEwMjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb250YWduZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6M1wiXHJcbiAgICB9LFxyXG4gICAgMjU5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR2xhelwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NFwiXHJcbiAgICB9LFxyXG4gICAgNTE1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnV6ZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NFwiXHJcbiAgICB9LFxyXG4gICAgMjYwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmxpdHpcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjVcIlxyXG4gICAgfSxcclxuICAgIDUxNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklRXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo1XCJcclxuICAgIH0sXHJcbiAgICAyNjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCdWNrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo2XCJcclxuICAgIH0sXHJcbiAgICAyNjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGFja2JlYXJkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo3XCJcclxuICAgIH0sXHJcbiAgICAyNjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXBpdGFvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo4XCJcclxuICAgIH0sXHJcbiAgICAyNjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJIaWJhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjlcIlxyXG4gICAgfSxcclxuICAgIDI2NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphY2thbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QVwiXHJcbiAgICB9LFxyXG4gICAgMjY2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWWluZ1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QlwiXHJcbiAgICB9LFxyXG4gICAgNTIzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWm9maWFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkNcIlxyXG4gICAgfSxcclxuICAgIDI2ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRva2thZWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpEXCJcclxuICAgIH0sXHJcbiAgICA1MjU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMaW9uXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpFXCJcclxuICAgIH0sXHJcbiAgICA3ODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGaW5rYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6RVwiXHJcbiAgICB9LFxyXG4gICAgMjcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWF2ZXJpY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEwXCJcclxuICAgIH0sXHJcbiAgICAyNzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb21hZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTFcIlxyXG4gICAgfSxcclxuICAgIDUyOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdyaWRsb2NrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMlwiXHJcbiAgICB9LFxyXG4gICAgMjc0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTm9ra1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTNcIlxyXG4gICAgfSxcclxuICAgIDI3Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFtYXJ1XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNlwiXHJcbiAgICB9LFxyXG4gICAgMjc4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FsaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTdcIlxyXG4gICAgfSxcclxuICAgIDI4MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE5XCJcclxuICAgIH0sXHJcbiAgICA3OTA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBY2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjE3XCJcclxuICAgIH0sXHJcbiAgICAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlplcm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIxOjFCXCJcclxuICAgIH0sXHJcbiAgICAxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUmVjcnVpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcInJlY3J1aXRcIlxyXG4gICAgfSxcclxuICAgIDI1Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlNtb2tlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxXCJcclxuICAgIH0sXHJcbiAgICA1MTI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNdXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxXCJcclxuICAgIH0sXHJcbiAgICAyNTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXN0bGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjJcIlxyXG4gICAgfSxcclxuICAgIDc2OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlB1bHNlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoyXCJcclxuICAgIH0sXHJcbiAgICAyNTg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJEb2NcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjNcIlxyXG4gICAgfSxcclxuICAgIDUxNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlJvb2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjNcIlxyXG4gICAgfSxcclxuICAgIDc3MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthcGthblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NFwiXHJcbiAgICB9LFxyXG4gICAgMTAyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRhY2hhbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo0XCJcclxuICAgIH0sXHJcbiAgICA3NzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJKYWdlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NVwiXHJcbiAgICB9LFxyXG4gICAgMTAyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJhbmRpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnJvc3RcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjZcIlxyXG4gICAgfSxcclxuICAgIDUxODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlZhbGt5cmllXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo3XCJcclxuICAgIH0sXHJcbiAgICA1MTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXZlaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo4XCJcclxuICAgIH0sXHJcbiAgICA1MjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJFY2hvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo5XCJcclxuICAgIH0sXHJcbiAgICA1MjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpBXCJcclxuICAgIH0sXHJcbiAgICA1MjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMZXNpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkJcIlxyXG4gICAgfSxcclxuICAgIDI2Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVsYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6Q1wiXHJcbiAgICB9LFxyXG4gICAgNTI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmlnaWxcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkRcIlxyXG4gICAgfSxcclxuICAgIDI3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1hZXN0cm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFsaWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpGXCJcclxuICAgIH0sXHJcbiAgICA1Mjc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDbGFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTBcIlxyXG4gICAgfSxcclxuICAgIDUyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthaWRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjExXCJcclxuICAgIH0sXHJcbiAgICAyNzM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb3p6aWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYXJkZW5cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE0XCJcclxuICAgIH0sXHJcbiAgICAyNzY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHb3lvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNVwiXHJcbiAgICB9LFxyXG4gICAgNTM0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiV2FtYWlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjE3XCJcclxuICAgIH0sXHJcbiAgICAyNzk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJPcnl4XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxOFwiXHJcbiAgICB9LFxyXG4gICAgMjgxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWVsdXNpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxQVwiXHJcbiAgICB9LFxyXG4gICAgMTA0Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFydW5pXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToxN1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByYW5rT2Zmc2V0ID0ge1xyXG4gICAgMDogMCxcclxuICAgIDE6IDIsXHJcbiAgICAyOiAzLFxyXG4gICAgMzogNCxcclxuICAgIDQ6IDUsXHJcbiAgICA1OiA3LFxyXG4gICAgNjogOCxcclxuICAgIDc6IDksXHJcbiAgICA4OiAxMCxcclxuICAgIDk6IDEyLFxyXG4gICAgMTA6IDEzLFxyXG4gICAgMTE6IDE0LFxyXG4gICAgMTI6IDE1LFxyXG4gICAgMTM6IDUwLFxyXG4gICAgMTQ6IDE2LFxyXG4gICAgMTU6IDE3LFxyXG4gICAgMTY6IDE4LFxyXG4gICAgMTc6IDE5LFxyXG4gICAgMTg6IDIwLFxyXG4gICAgMTk6IDIxLFxyXG4gICAgMjA6IDIyLFxyXG4gICAgMjE6IDIyLFxyXG4gICAgMjI6IDIyLFxyXG4gICAgMjM6IDIyLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJhaW5ib3dDbGFzc0lkLFxyXG4gICAgaW50ZXJlc3RpbmdGZWF0dXJlczEsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMixcclxuICAgIHdpbmRvd05hbWVzLFxyXG4gICAgaG90a2V5cyxcclxuICAgIGdhbWVNb2Rlc1BWUCxcclxuICAgIGdhbWVNb2Rlc1BWRSxcclxuICAgIGRhdGFiYXNlT2JqZWN0LFxyXG4gICAgc2Vhc29uQ29sb3JzLFxyXG4gICAgcmFua09mZnNldCxcclxuICAgIG9wZXJhdG9yc1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sbGVycyB7XHJcbiAgICBwdWJsaWMgc2V0U2hvcnRjdXRUZXh0KHNob3J0Y3V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLmhvdGtleXMuZ2V0KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBob3RrZXkgPSByZXN1bHQuZ2FtZXNbJzEwODI2J11bMF0uYmluZGluZztcclxuXHJcbiAgICAgICAgICAgIGlmIChob3RrZXkgPT09ICdVbmFzc2lnbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gJ1VOQVNTSUdORUQgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3J0Y3V0Q29udGFpbmVyLmlubmVySFRNTCA9IGhvdGtleSArICcgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5IGluIGdhbWUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYXBwIGhvdGtleSBcIiR7aG90a2V5fVwiYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE92ZXJ3b2xmU3RhdHVzKG92ZXJ3b2xmU3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2dhbWUtZXZlbnRzLXN0YXR1cy5vdmVyd29sZi5jb20vMTA4MjZfcHJvZC5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJ3b2xmU3RhdHVzID0gZGF0YS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIHNvbWUgZnVuY3Rpb25zIG1pZ2h0IG5vdCB3b3JrIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIE92ZXJ3b2xmIGFwcCBBUEkgaGFzIHN0b3BwZWQgd29ya2luZyAtIHdl4oCZbGwgZml4IGl0IHNob3J0bHk8L2g0Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJ3b2xmU3RhdHVzID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcndvbGZTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb3ZlcndvbGYgc3RhdHVzIFwiJHtvdmVyd29sZlN0YXR1c31cImApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW50ZXJuZXRTdGF0dXMoaW5ldGVybmV0U3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGludGVybmV0U3RhdHVzID0gbmF2aWdhdG9yLm9uTGluZTtcclxuXHJcbiAgICAgICAgaWYgKGludGVybmV0U3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5ldGVybmV0U3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgaW50ZXJuZXQgc3RhdHVzIFwiJHtpbnRlcm5ldFN0YXR1c31cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUYWJsZVRhYih0YWI6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItdHJcIikubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtlZFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmtlZCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXN1YWxTdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXN1YWwnICsgaSArIGopO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vhc29uU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vhc29uYWwnICsgaSArIGopO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyYW5rZWRTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWIgPT09ICdyYW5rZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdjYXN1YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdzZWFzb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCB0YWJsZSB0YWIgXCIke3RhYn1cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGV0YWlsZWRQbGF5ZXIoZGV0YWlsZWRzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoZGV0YWlsZWRzdGF0dXMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1ib2R5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZGV0YWlsZWRzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGRldGFpbGVkIHN0YXRzIFwiJHshZGV0YWlsZWRzdGF0dXN9XCJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRldGFpbGVkc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUaGVtZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVWYXJpYWJsZXMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZC50aGVtZSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiNGMEYwRjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkY2MVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjMTIxMjEyXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI0ZGRkZGRjE0XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiMwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRjFFXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkYzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwidXJsKCcvaW1nL2JhY2tncm91bmQud2VicCcpXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItbGlnaHQtbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtaG92ZXItY29sb3JcIiwgXCIjMzMzMzMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjYjBiMGIwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjOTk5OTk5XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93bi1idG4tY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItZGFyay1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hDb25maWcoKSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vc3RhZ2luZy1hcGkuc3RhdHNkYi5uZXQvcjYvb3ZlcmxheS9jb25maWcnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5jb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnZlcnNpb24gIT0gZGF0YS5wYXlsb2FkLnJhaW5ib3cudmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5wYXlsb2FkLnJhaW5ib3cpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbmZpZycpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkYXRhYmFzZU9iamVjdCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xyXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUlEQihuYW1lSURCOiBzdHJpbmcsIGtleVBhdGhJREI6IHN0cmluZywgdmVyc2lvbjogbnVtYmVyLCBpbmRleGVzID0gbnVsbCk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJywgdmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmU6IElEQk9iamVjdFN0b3JlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShuYW1lSURCLCB7IGtleVBhdGg6IGtleVBhdGhJREIgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGV2ZW50LnRhcmdldC50cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KGluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG9iamVjdFN0b3JlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdG9yZVRvSURCKG5hbWVJREI6IHN0cmluZywgdmFsdWVJREIsIGluaXRpYXRlSURCOiBib29sZWFuKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYk9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWR3cml0ZScpLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5pdGlhdGVJREIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYk9iamVjdFN0b3JlLnB1dCh2YWx1ZUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYXRlSURCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGJPYmplY3RTdG9yZS5hZGQodmFsdWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVhZEZyb21JREIobmFtZUlEQjogc3RyaW5nLCBrZXlJREI6IG51bWJlciB8IHN0cmluZyk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERiID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RGIuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdERiLmVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdERiLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiT2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBkYk9iamVjdFN0b3JlLmdldChrZXlJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVhZEZyb21JREJSYW5nZShuYW1lSURCOiBzdHJpbmcsIGluZGV4OiBzdHJpbmcsIGJlZ2luUmFuZ2U6IHN0cmluZywgZW5kUmFuZ2U6IHN0cmluZywgYmVnaW46IG51bWJlciwgZW5kOiBudW1iZXIpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYiA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcbiAgICAgICAgICAgIGxldCBrZXlSYW5nZVZhbHVlOiBJREJLZXlSYW5nZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZWdpblJhbmdlICYmIGVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UuYm91bmQoYmVnaW5SYW5nZSwgZW5kUmFuZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJlZ2luUmFuZ2UgJiYgIWVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UubG93ZXJCb3VuZChiZWdpblJhbmdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghYmVnaW5SYW5nZSAmJiBlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLnVwcGVyQm91bmQoZW5kUmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERiLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3REYi5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3REYi5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkb25seScpLm9iamVjdFN0b3JlKG5hbWVJREIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuaW5kZXgoaW5kZXgpLm9wZW5DdXJzb3Ioa2V5UmFuZ2VWYWx1ZSwgJ3ByZXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDAsIGogPSAwLCByZXN1bHQgPSBuZXcgT2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IHJlcXVlc3QucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZWdpbiAhPT0gMCAmJiBpID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuYWR2YW5jZShiZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGJlZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnNvciAmJiBpIDw9IGVuZCAmJiBpID49IGJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbY3Vyc29yLnZhbHVlLnRpbWVTdGFtcF0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGN1cnNvci52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbml0QWxsSURCKCk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kYXk6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZZZWFyOiBhbnkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgcGFzdERheXNPZlllYXI6IGFueSA9ICh0b2RheSAtIGZpcnN0RGF5T2ZZZWFyKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qga2V5SURCV2Vla3MgPSBgJHtNYXRoLmNlaWwoKHBhc3REYXlzT2ZZZWFyICsgZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyAxKSAvIDcpfSwke3RvZGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgICAgY29uc3Qga2V5SURCRGF5cyA9IHRvZGF5LmdldERhdGUoKSArICcsJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLCcgKyB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbHVlSURCV2Vla3M6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVJREJXZWVrc1tpXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2VPYmplY3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZUlEQldlZWtzLndlZWsgPSBrZXlJREJXZWVrcztcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUlEQkRheXM6IGFueSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2VPYmplY3QpKTtcclxuICAgICAgICAgICAgdmFsdWVJREJEYXlzLmRhdGUgPSBrZXlJREJEYXlzO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTEgPSB0aGlzLnN0b3JlVG9JREIoJ3dlZWtzJywgdmFsdWVJREJXZWVrcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UyID0gdGhpcy5zdG9yZVRvSURCKCdkYXlzJywgdmFsdWVJREJEYXlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTJdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZGlzcGxheURhaWx5V2Vla2x5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kYXk6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZZZWFyOiBhbnkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgcGFzdERheXNPZlllYXI6IGFueSA9ICh0b2RheSAtIGZpcnN0RGF5T2ZZZWFyKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qga2V5SURCV2Vla3MgPSBgJHtNYXRoLmNlaWwoKHBhc3REYXlzT2ZZZWFyICsgZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyAxKSAvIDcpfSwke3RvZGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgICAgY29uc3Qga2V5SURCRGF5cyA9IHRvZGF5LmdldERhdGUoKSArICcsJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLCcgKyB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmdzJykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTEgPSB0aGlzLnJlYWRGcm9tSURCKCd3ZWVrcycsIGtleUlEQldlZWtzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0V2VlayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdlZWtseVN0YXRzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2VuZXJhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhc3VhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVucmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAua2lsbHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLndpbnMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3ZWVrbHlTdGF0cykuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGUgPSB3ZWVrbHlTdGF0c1tvYmpdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNb2RlLmRlYXRocyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICgoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMpLnRvRml4ZWQoMikpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gTWF0aC5yb3VuZChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocyAqIDMzKSArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZGUuZGVhdGhzID09PSAwICYmIGdhbWVNb2RlLmtpbGxzICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJ0lORic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzEwMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJzAuMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gKE1hdGgucm91bmQoZ2FtZU1vZGUud2lucyAvIChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAqIDEwMCkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gZ2FtZU1vZGUud2wgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gcGFyc2VGbG9hdCh3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5LXRleHQnKS5pbm5lckhUTUwgPSB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLndsICsgJyUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlZWtseVN0YXRzOlwiLCB3ZWVrbHlTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrbHlTdGF0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTIgPSB0aGlzLnJlYWRGcm9tSURCKCdkYXlzJywga2V5SURCRGF5cylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdERheSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYWlseVN0YXRzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdlbmVyYWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmtpbGxzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAud2lucyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhc3VhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6ICByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVucmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGFpbHlTdGF0cykuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGUgPSBkYWlseVN0YXRzW29ial07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZGUuZGVhdGhzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICgoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMpLnRvRml4ZWQoMikpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gTWF0aC5yb3VuZChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocyAqIDMzKSArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZGUuZGVhdGhzID09PSAwICYmIGdhbWVNb2RlLmtpbGxzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICdJTkYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcxMDAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICcwLjAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAoTWF0aC5yb3VuZChnYW1lTW9kZS53aW5zIC8gKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICogMTAwKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSBnYW1lTW9kZS53bCArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS53bCArICclJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYWlseVN0YXRzOlwiLCBkYWlseVN0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhaWx5U3RhdHM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHNOYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYWlseS13ZWVrbHktbmF2LWJ0bicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRzTmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0c05hdkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3MuY2lyY2xlKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTJdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4vb3ctd2luZG93JztcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzLCBvd1dpbmRvdzogT1dXaW5kb3cgPSBuZXcgT1dXaW5kb3c7XHJcblxyXG5sZXQgbG9jYWxEZXNrdG9wT25seSA9IGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSwgdmFsdWVzQ3VzdG9tLCBsb2NhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBkdGFibGU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGR0aGVtZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1heGltaXplOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkZGlzcGxheTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1vbml0b3JzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkY2lyY2xlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRhYmxlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kdGhlbWUgLmN1c3RvbS1vcHRpb24nKSA7XHJcbiAgICAgICAgdGhpcy5kbWF4aW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbWF4aW1pemUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZGRpc3BsYXkgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRtb25pdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRjaXJjbGUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zZXR0aW5ncyB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykpLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAndGFibGUnOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21heGltaXplJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGhlbWVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGVcIjogXCJnZW5lcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtb25pdG9ySWRcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NjYWxlU2xpZGVyJywgJ1wiMVwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlIHx8IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKSkubGVuZ3RoIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZhbHVlc1RhYmxlJywgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIDAgOiAnQ291bnRyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgMSA6ICdMVkwnLFxyXG4gICAgICAgICAgICAgICAgICAgIDIgOiAnS2lsbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDMgOiAnRGVhdGhzJyxcclxuICAgICAgICAgICAgICAgICAgICA0IDogJ0svRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgNSA6ICdXaW5zJyxcclxuICAgICAgICAgICAgICAgICAgICA2IDogJ0xvc3NlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgNyA6ICdXL0wnLFxyXG4gICAgICAgICAgICAgICAgICAgIDggOiAnSGFja2VyICUnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVza3RvcE9ubHknLCAnXCIwXCInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTZXR0aW5nKHNlbGVjdGVkT3B0aW9uOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nSWQgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NldHRpbmdpZCcpO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy12YWx1ZVRhYmxlJykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCd2YWx1ZXNUYWJsZScsIHZhbHVlc0N1c3RvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kdGhlbWUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLnRoZW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcblxyXG4gICAgICAgICAgICBjb250cm9sbGVycy5zZXRUaGVtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRhYmxlJykge1xyXG4gICAgICAgICAgICBsb2NhbC50YWJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGRpc3BsYXknKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnZGVza3RvcE9ubHknLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbWF4aW1pemUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1heGltaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbW9uaXRvcnMnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1vbml0b3JJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGNpcmNsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwuY2lyY2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kc2xpZGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NjYWxlU2xpZGVyJywgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBjaXJjbGVzID0ge1xyXG4gICAgICAgICAgICBcImdlbmVyYWxcIiA6IDAsXHJcbiAgICAgICAgICAgIFwicmFua2VkXCIgOiAxLFxyXG4gICAgICAgICAgICBcImNhc3VhbFwiIDogMixcclxuICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDogM1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NBcnIgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuZHRhYmxlW2xvY2FsLnRhYmxlXSxcclxuICAgICAgICAgICAgdGhpcy5kdGhlbWVbbG9jYWwudGhlbWVdLFxyXG4gICAgICAgICAgICB0aGlzLmRtYXhpbWl6ZVtsb2NhbC5tYXhpbWl6ZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZGRpc3BsYXlbbG9jYWxEZXNrdG9wT25seS5yZXBsYWNlKC9cIi9nLCAnJyldLFxyXG4gICAgICAgICAgICB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdLFxyXG4gICAgICAgICAgICB0aGlzLmRjaXJjbGVbY2lyY2xlc1tsb2NhbC5jaXJjbGVdXSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXR0aW5nID0gc2V0dGluZ3NBcnJbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZyAhPT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9uLnNlbGVjdGVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nID09PSB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1vbml0b3JzIC5jdXN0b20tb3B0aW9uJylbbG9jYWwubW9uaXRvcklkXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuZ2V0TW9uaXRvcnNMaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihtb25pdG9yTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBtb25pdG9yTGlzdC5kaXNwbGF5c1tsb2NhbC5tb25pdG9ySWRdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlcicpIGFzIGFueSkudmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyLXZhbHVlJykuaW5uZXJIVE1MID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERlZmF1bHQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNDdXN0b21baV0ucmVwbGFjZSgvWyAvXS9nLCAnLScpICsgaTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBzZXR0aW5nLnRleHRDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4vZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBzZWFzb25Db2xvcnMsIHJhbmtPZmZzZXQgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxubGV0IHBsYXllcnM6IGFueSA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGNoIHtcclxuICAgIHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlO1xyXG4gICAgcHJpdmF0ZSBnYW1lTW9kZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0aW1lU3RhbXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbWF0Y2hJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtYXBJZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWVNb2RlOiBzdHJpbmcsIG1hdGNoSWQ6IHN0cmluZywgbWFwSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlID0gZ2FtZU1vZGU7XHJcbiAgICAgICAgdGhpcy5tYXRjaElkID0gbWF0Y2hJZDtcclxuICAgICAgICB0aGlzLm1hcElkID0gbWFwSWQ7XHJcbiAgICAgICAgdGhpcy50aW1lU3RhbXAgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWF0Y2hJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHBsYXllckpvaW4oaWQ6IHN0cmluZywgc3RhdHMsIGluZm8pOiBQcm9taXNlIDwgYW55ID4ge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhhdC5wbGF5ZXJTZWFyY2goaWQsIHN0YXRzLCBpbmZvKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYWRkUGxheWVyKGlkLCBzdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGxheWVycyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBwbGF5ZXJTZWFyY2goaWQ6IHN0cmluZywgc3RhdHMsIGluZm8pOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kUGxheWVyUGluZyhzdGF0cy5uYW1lLCBzdGF0cy50ZWFtLCAnSm9jdWxhcldhc0hlcmUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnN0YXRzZGIubmV0L3I2L292ZXJsYXkvJHtzdGF0cy5uYW1lfWA7XHJcblxyXG4gICAgICAgICAgICB0aGF0LmZldGNoKHVybCwge2NhY2hlOiAnbm8tY2FjaGUnfSwgMTApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdID0gcmVzdWx0LnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0udGVhbSA9IHN0YXRzLnRlYW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsubWF0Y2hlc3BsYXllZCA9IHBsYXllcnNbaWRdLnN0YXRzLnJhbmsud2lucyArIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsubG9zc2VzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyc1tpZF0uc3RhdHMucmFuay5tYXhfbW1yID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsubWF4X21tciA9IHBsYXllcnNbaWRdLnN0YXRzLnJhbmsubW1yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcnNbaWRdLnN0YXRzLnJhbmsucmFuayA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLnByZXZpb3VzX3JhbmsgPSBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLnJhbms7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMucmFuay5wcmV2aW91c19yYW5rID0gcGxheWVyc1tpZF0uc3RhdHMucmFuay5yYW5rIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLnJhbmsgPT09IDIzIHx8IHBsYXllcnNbaWRdLnN0YXRzLnJhbmsucmFuayA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLm5leHRfcmFuayA9IHBsYXllcnNbaWRdLnN0YXRzLnJhbmsucmFuaztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLm5leHRfcmFuayA9IHBsYXllcnNbaWRdLnN0YXRzLnJhbmsucmFuayArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLmtkID0gfn5NYXRoLnJvdW5kKHBsYXllcnNbaWRdLnN0YXRzLnJhbmsua2lsbHMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLmRlYXRocyAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMucmFua2VkLmtkID0gfn5NYXRoLnJvdW5kKHBsYXllcnNbaWRdLnN0YXRzLnJhbmtlZC5raWxscyAvIHBsYXllcnNbaWRdLnN0YXRzLnJhbmtlZC5kZWF0aHMgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLmNhc3VhbC5rZCA9IH5+TWF0aC5yb3VuZChwbGF5ZXJzW2lkXS5zdGF0cy5jYXN1YWwua2lsbHMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5jYXN1YWwuZGVhdGhzICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLmtkID0gfn5NYXRoLnJvdW5kKHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwua2lsbHMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLmRlYXRocyAqIDEwMCkgLyAxMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsud2wgPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMucmFuay53aW5zIC8gcGxheWVyc1tpZF0uc3RhdHMucmFuay5tYXRjaGVzcGxheWVkICogMTAwMCkgLyAxMDtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rZWQud2wgPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMucmFua2VkLndpbnMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rZWQubWF0Y2hlc3BsYXllZCAqIDEwMDApIC8gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMuY2FzdWFsLndsID0gfn5NYXRoLnJvdW5kKHBsYXllcnNbaWRdLnN0YXRzLmNhc3VhbC53aW5zIC8gcGxheWVyc1tpZF0uc3RhdHMuY2FzdWFsLm1hdGNoZXNwbGF5ZWQgKiAxMDAwKSAvIDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwud2wgPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC53aW5zIC8gcGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC5tYXRjaGVzcGxheWVkICogMTAwMCkgLyAxMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC5wZW5ldHJhdGlvbl9yYXRpbyA9IH5+TWF0aC5yb3VuZChwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLnBlbmV0cmF0aW9ucyAvIHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwua2lsbHMgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwuaGVhZHNob3RfcmF0aW8gPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC5oZWFkc2hvdHMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLmtpbGxzICogMTAwKSAvIDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZmV0Y2godXJsOiBzdHJpbmcsIG9wdGlvbnMsIHRyaWVzOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGVuY29kZVVSSSh1cmwpLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmZldGNoKHVybCwgb3B0aW9ucywgdHJpZXMgLSAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kUGxheWVyUGluZyhuYW1lOiBzdHJpbmcsIHRlYW06IHN0cmluZywgbG9iYnlJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcGluZ1VzZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICB0ZWFtOiB0ZWFtLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGxvYmJ5SWQ6IGxvYmJ5SWQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwaW5nVXNlckRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHBpbmdVc2VyRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBwaW5nVXNlckRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwczovL3N0YWdpbmctYXBpLnN0YXRzZGIubmV0L3I2L292ZXJsYXkvcGluZycsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgd2Vic2l0ZSBwaW5nIFwiJHtuYW1lfVwiLCBcIiR7dGVhbX1cIiwgXCIke2xvYmJ5SWR9XCJgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFBsYXllcihpZDogc3RyaW5nLCBzdGF0cykge1xyXG4gICAgICAgIGNvbnN0IHBsYXllclN0YXRzID0gcGxheWVyc1tpZF07XHJcblxyXG4gICAgICAgIGxldCB0YWJsZTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChzdGF0cy50ZWFtID09PSAnQmx1ZScpIHtcclxuICAgICAgICAgICAgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1ibHVlLXRib2R5Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0cy50ZWFtID09PSAnT3JhbmdlJykge1xyXG4gICAgICAgICAgICB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLW9yYW5nZS10Ym9keScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdHNPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIFwiRW1wdHlcIiA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgMSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAyIDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkNvdW50cnlcIiA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5zdGF0c2RiLm5ldC9hc3NldHMvZmxhZ3MvJHtwbGF5ZXJTdGF0cy51c2VyLmNvdW50cnlDb2RlfVwiIGFsdD1cIiR7cGxheWVyU3RhdHMudXNlci5jb3VudHJ5Q29kZX1cIiBjbGFzcz1cImltZy1jb3VudHJ5XCI+YCxcclxuICAgICAgICAgICAgICAgIDEgOiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5zdGF0c2RiLm5ldC9hc3NldHMvZmxhZ3MvJHtwbGF5ZXJTdGF0cy51c2VyLmNvdW50cnlDb2RlfVwiIGFsdD1cIiR7cGxheWVyU3RhdHMudXNlci5jb3VudHJ5Q29kZX1cIiBjbGFzcz1cImltZy1jb3VudHJ5XCI+YCxcclxuICAgICAgICAgICAgICAgIDIgOiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5zdGF0c2RiLm5ldC9hc3NldHMvZmxhZ3MvJHtwbGF5ZXJTdGF0cy51c2VyLmNvdW50cnlDb2RlfVwiIGFsdD1cIiR7cGxheWVyU3RhdHMudXNlci5jb3VudHJ5Q29kZX1cIiBjbGFzcz1cImltZy1jb3VudHJ5XCI+YFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkxWTFwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnByb2dyZXNzaW9uLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLnByb2dyZXNzaW9uLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLnByb2dyZXNzaW9uLmxldmVsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIFwiSGFja2VyICVcIiA6IHtcclxuICAgICAgICAgICAgLy8gICAgIDAgOiBwbGF5ZXJTdGF0cy5oYWNrZXJfcGVyY2VudGFnZSArICclJyxcclxuICAgICAgICAgICAgLy8gICAgIDEgOiBwbGF5ZXJTdGF0cy5oYWNrZXJfcGVyY2VudGFnZSArICclJyxcclxuICAgICAgICAgICAgLy8gICAgIDIgOiBwbGF5ZXJTdGF0cy5oYWNrZXJfcGVyY2VudGFnZSArICclJ1xyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICBcIkhhY2tlciAlXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogJzAlJyxcclxuICAgICAgICAgICAgICAgIDEgOiAnMCUnLFxyXG4gICAgICAgICAgICAgICAgMiA6ICcwJSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJLaWxsc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAxIDogcGxheWVyU3RhdHMuc3RhdHMucmFua2VkLmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5raWxsc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkRlYXRoc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLmRlYXRoc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIksvRFwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsua2QudG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIDEgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQua2QudG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIDIgOiBwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwua2QudG9GaXhlZCgyKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIldpbnNcIiA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndpbnMsXHJcbiAgICAgICAgICAgICAgICAxIDogcGxheWVyU3RhdHMuc3RhdHMucmFua2VkLndpbnMsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLndpbnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJMb3NzZXNcIiA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmxvc3NlcyxcclxuICAgICAgICAgICAgICAgIDEgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5sb3NzZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJXL0xcIiA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndsLnRvRml4ZWQoMSkgKyBcIiVcIixcclxuICAgICAgICAgICAgICAgIDEgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQud2wudG9GaXhlZCgxKSArIFwiJVwiLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLmNhc3VhbC53bC50b0ZpeGVkKDEpICsgXCIlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiTWF4IE1NUlwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IE1hdGgudHJ1bmMocGxheWVyU3RhdHMuc3RhdHMucmFuay5tYXhfbW1yKSxcclxuICAgICAgICAgICAgICAgIDEgOiBNYXRoLnRydW5jKHBsYXllclN0YXRzLnN0YXRzLnJhbmsubWF4X21tciksXHJcbiAgICAgICAgICAgICAgICAyIDogTWF0aC50cnVuYyhwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1heF9tbXIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiSFMvS1wiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuaGVhZHNob3RfcmF0aW8udG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIDEgOiBwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmhlYWRzaG90X3JhdGlvLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5oZWFkc2hvdF9yYXRpby50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiUEVOL0tcIiA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiBwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnBlbmV0cmF0aW9uX3JhdGlvLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICAxIDogcGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5wZW5ldHJhdGlvbl9yYXRpby50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwucGVuZXRyYXRpb25fcmF0aW8udG9GaXhlZCgyKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkdhbWVzIHBsYXllZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2lucyArIHBsYXllclN0YXRzLnN0YXRzLnJhbmsubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5tYXRjaGVzcGxheWVkLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5tYXRjaGVzcGxheWVkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiTU1SIGNoYW5nZVwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsubGFzdF9tYXRjaF9tbXJfY2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsubGFzdF9tYXRjaF9tbXJfY2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsubGFzdF9tYXRjaF9tbXJfY2hhbmdlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQWxwaGEgJVwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IE1hdGgucm91bmQocGxheWVyU3RhdHMuc3RhdHMucHJvZ3Jlc3Npb24ubG9vdGJveF9wcm9iYWJpbGl0eSAvIDEwMCkgKyBcIiVcIixcclxuICAgICAgICAgICAgICAgIDEgOiBNYXRoLnJvdW5kKHBsYXllclN0YXRzLnN0YXRzLnByb2dyZXNzaW9uLmxvb3Rib3hfcHJvYmFiaWxpdHkgLyAxMDApICsgXCIlXCIsXHJcbiAgICAgICAgICAgICAgICAyIDogTWF0aC5yb3VuZChwbGF5ZXJTdGF0cy5zdGF0cy5wcm9ncmVzc2lvbi5sb290Ym94X3Byb2JhYmlsaXR5IC8gMTAwKSArIFwiJVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c1RTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJUclZhbHVlID1gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItdHJcIiBpZD0ke2lkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9yYW5rcy9yYW5rJHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnJhbmt9LnN2Z1wiIGFsdD1cInJhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1tcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLW5hbWVcIj4ke3N0YXRzLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkMCR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbMF1dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWwwJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1swXV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWwwJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1swXV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkMSR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbMV1dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWwxJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1sxXV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWwxJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1sxXV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkMiR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbMl1dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWwyJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1syXV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWwyJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1syXV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkMyR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbM11dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWwzJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1szXV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWwzJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1szXV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkNCR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbNF1dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWw0JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s0XV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWw0JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s0XV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkNSR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbNV1dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWw1JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s1XV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWw1JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s1XV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkNiR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbNl1dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWw2JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s2XV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWw2JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s2XV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkNyR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbN11dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWw3JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s3XV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWw3JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s3XV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCByYW5rZWQgY3VycmVudFwiIGlkPVwicmFua2VkOCR7aWR9XCI+JHtzdGF0c09iamVjdFtjdXNUU3RhdHNbOF1dWzFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgY2FzdWFsXCIgaWQ9XCJjYXN1YWw4JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s4XV1bMl19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBzZWFzb25hbFwiIGlkPVwic2Vhc29uYWw4JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s4XV1bMF19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmlubmVySFRNTCArPSBwbGF5ZXJUclZhbHVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiBjdXNUU3RhdHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXNUU3RhdHMuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tU3RhdCA9IGN1c1RTdGF0c1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21TdGF0ID09PSAnRW1wdHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByYW5rZWQke2luZGV4ICsgaWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhc3VhbCR7aW5kZXggKyBpZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2Vhc29uYWwke2luZGV4ICsgaWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGVhZDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmFsdWUtJyArIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZWFkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHBsYXllciBqb2luZWQgXCIke3BsYXllclN0YXRzLnVzZXIubmlja25hbWV9LCAke2lkfVwiYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBwbGF5ZXJMZWF2ZShpZDogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyc1tpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHBsYXllciBsZWZ0IFwiJHtwbGF5ZXJzW2lkXS51c2VyLm5pY2tuYW1lfSwgJHtpZH1cImApO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwbGF5ZXJzW2lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJpbnREZXRhaWxlZFBsYXllcihwbGF5ZXJUcjogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoIXBsYXllclRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJvc3RlcklkID0gcGxheWVyVHIuaWQ7XHJcbiAgICAgICAgY29uc3QgcGxheWVyU3RhdHMgPSBwbGF5ZXJzW3Jvc3RlcklkXTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVwbGF5ZWQ6IGFueSA9IHtcclxuICAgICAgICAgICAgZ2VuZXJhbFNlYzogcGFyc2VJbnQocGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC50aW1lcGxheWVkLCAxMCkgKyBwYXJzZUludChwbGF5ZXJTdGF0cy5zdGF0cy5wdmUudGltZXBsYXllZCwgMTApLFxyXG4gICAgICAgICAgICByYW5rZWRTZWM6IHBhcnNlSW50KHBsYXllclN0YXRzLnN0YXRzLnJhbmtlZC50aW1lcGxheWVkLCAxMCksXHJcbiAgICAgICAgICAgIGNhc3VhbFNlYzogcGFyc2VJbnQocGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLnRpbWVwbGF5ZWQsIDEwKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aW1lcGxheWVkLmdlbmVyYWxIb3VycyA9IE1hdGguZmxvb3IodGltZXBsYXllZC5nZW5lcmFsU2VjIC8gMzYwMCk7XHJcbiAgICAgICAgdGltZXBsYXllZC5nZW5lcmFsTWludXRlcyA9IE1hdGguZmxvb3IodGltZXBsYXllZC5nZW5lcmFsU2VjIC8gNjApICUgNjA7XHJcbiAgICAgICAgdGltZXBsYXllZC5yYW5rZWRIb3VycyA9IE1hdGguZmxvb3IodGltZXBsYXllZC5yYW5rZWRTZWMgLyAzNjAwKTtcclxuICAgICAgICB0aW1lcGxheWVkLnJhbmtlZE1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWVwbGF5ZWQucmFua2VkU2VjIC8gNjApICUgNjA7XHJcbiAgICAgICAgdGltZXBsYXllZC5jYXN1YWxIb3VycyA9IE1hdGguZmxvb3IodGltZXBsYXllZC5jYXN1YWxTZWMgLyAzNjAwKTtcclxuICAgICAgICB0aW1lcGxheWVkLmNhc3VhbE1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWVwbGF5ZWQuY2FzdWFsU2VjIC8gNjApICUgNjA7XHJcblxyXG4gICAgICAgIGxldCBzZWFzb25SYW5rQmFyOiBzdHJpbmcsIHNlYXNvblJhbmtCYXJUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnJhbmsgIT09IDAgJiYgcGxheWVyU3RhdHMuc3RhdHMucmFuay5uZXh0X3JhbmtfbW1yID4gcGxheWVyU3RhdHMuc3RhdHMucmFuay5tbXIpIHtcclxuICAgICAgICAgICAgc2Vhc29uUmFua0JhciA9ICgocGxheWVyU3RhdHMuc3RhdHMucmFuay5tbXIgLSBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnByZXZpb3VzX3JhbmtfbW1yKSAvIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm5leHRfcmFua19tbXIgLSBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnByZXZpb3VzX3JhbmtfbW1yKSAqIDEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWFzb25SYW5rQmFyID0gJzEwMCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay5yYW5rICE9PSAwICYmIHBsYXllclN0YXRzLnN0YXRzLnJhbmsubmV4dF9yYW5rX21tciA+IHBsYXllclN0YXRzLnN0YXRzLnJhbmsubW1yKSB7XHJcbiAgICAgICAgICAgIHNlYXNvblJhbmtCYXJUZXh0ID0gcGxheWVyU3RhdHMuc3RhdHMucmFuay5tbXIgKyAnIC8gJyArIHBsYXllclN0YXRzLnN0YXRzLnJhbmsubmV4dF9yYW5rX21tcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWFzb25SYW5rQmFyVGV4dCA9IHBsYXllclN0YXRzLnN0YXRzLnJhbmsubW1yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGV0YWlsZWRTZWFzb25hbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1oZWFkbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlNlYXNvbmFsIFN0YXRpc3RpY3M8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBzZWFzb24tcmFuay1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLXJhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbi1wcmV2aW91cy1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJzZWFzb24tcHJldmlvdXMtaW1nXCIgc3JjPVwiL2ltZy9yYW5rcy9yYW5rJHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnJhbmt9LnN2Z1wiIGFsdD1cInJhbmsgaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLXJhbmstZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLW1heC1tbXItZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzZWFzb24tbWF4LW1tclwiPiR7cGxheWVyU3RhdHMuc3RhdHMucmFuay5tYXhfbW1yfTxzcGFuPiBNYXggTW1yPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbi1jdXJyZW50LXJhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2Vhc29uLXJhbmstYmFyXCIgc3R5bGU9XCJ3aWR0aDoke3NlYXNvblJhbmtCYXJ9JTtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNlYXNvbi1yYW5rLWJhci10ZXh0XCI+JHtzZWFzb25SYW5rQmFyVGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb24tbmV4dC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJzZWFzb24tbmV4dC1pbWdcIiBzcmM9XCIvaW1nL3JhbmtzL3Jhbmske3BsYXllclN0YXRzLnN0YXRzLnJhbmsubmV4dF9yYW5rfS5zdmdcIiBhbHQ9XCJyYW5rIGltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbi1tYXgtcmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbi1tYXgtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInNlYXNvbi1tYXgtaW1nXCIgc3JjPVwiL2ltZy9yYW5rcy9yYW5rJHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1heF9yYW5rfS5zdmdcIiBhbHQ9XCJyYW5rIGltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLW1heC1yYW5rLXRleHRcIiBpZD1cIm1heC1yYW5rLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXggUmFuazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5LaWxsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmtpbGxzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EZWF0aHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMucmFuay5kZWF0aHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPksvRDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmtkLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPldpbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMucmFuay53aW5zfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Mb3NzZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMucmFuay5sb3NzZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlcvTDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndsLnRvRml4ZWQoMSl9JTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBjb25zdCBkZXRhaWxlZFJhbmtlZCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1oZWFkbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlJhbmtlZCBTdGF0aXN0aWNzPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGltZSBQbGF5ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7dGltZXBsYXllZFsncmFua2VkSG91cnMnXX1oICR7dGltZXBsYXllZFsncmFua2VkTWludXRlcyddfW08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Sy9EPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5rZC50b0ZpeGVkKDIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5LaWxsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQua2lsbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlYXRoczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQuZGVhdGhzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5HYW1lcyBQbGF5ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMucmFua2VkLm1hdGNoZXNwbGF5ZWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlcvTDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQud2wudG9GaXhlZCgxKX0lPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPldpbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMucmFua2VkLndpbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxvc3NlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQubG9zc2VzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBjb25zdCBkZXRhaWxlZENhc3VhbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1oZWFkbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNhc3VhbCBTdGF0aXN0aWNzPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGltZSBQbGF5ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7dGltZXBsYXllZFsnY2FzdWFsSG91cnMnXX1oICR7dGltZXBsYXllZFsnY2FzdWFsTWludXRlcyddfW08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Sy9EPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5rZC50b0ZpeGVkKDIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5LaWxsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwua2lsbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlYXRoczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwuZGVhdGhzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5HYW1lcyBQbGF5ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLm1hdGNoZXNwbGF5ZWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlcvTDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwud2wudG9GaXhlZCgxKX0lPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPldpbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLndpbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxvc3NlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwubG9zc2VzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBjb25zdCBkZXRhaWxlZFBsYXllciA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1oZWFkbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlBsYXllciBTdGF0aXN0aWNzPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VHJhdmVsbGVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke01hdGguZmxvb3IocGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5kaXN0YW5jZXRyYXZlbGxlZCAvIDEwMDApfWttPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkJhcnJpY2FkZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5iYXJyaWNhZGVkZXBsb3llZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UmVpbmZvcmNlbWVudHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5yZWluZm9yY2VtZW50ZGVwbG95fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TdWljaWRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnN1aWNpZGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlJldml2ZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5yZXZpdmVzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EQk5PPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuZGJub308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+REJOTyBBc3Npc3RzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuZGJub2Fzc2lzdHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkdhZGdldHMgRGVzdHJveWVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuZ2FkZ2V0ZGVzdHJveX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgY29uc3QgZGV0YWlsZWRHZW5lcmFsID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LWhlYWRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+R2VuZXJhbCBTdGF0aXN0aWNzPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Sy9EPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwua2R9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPktpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwua2lsbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlYXRoczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmRlYXRoc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGltZSBQbGF5ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7dGltZXBsYXllZFsnZ2VuZXJhbEhvdXJzJ119aCAke3RpbWVwbGF5ZWRbJ2dlbmVyYWxNaW51dGVzJ119bTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5IUyBLaWxsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmhlYWRzaG90c308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+SFMvSzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmhlYWRzaG90X3JhdGlvLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlBFTiBLaWxsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnBlbmV0cmF0aW9uc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UEVOL0s8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5wZW5ldHJhdGlvbl9yYXRpby50b0ZpeGVkKDIpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5XL0w8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC53bH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+V2luczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLndpbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxvc3NlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmxvc3Nlc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+R2FtZXMgUGxheWVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwubWF0Y2hlc3BsYXllZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+QXNzaXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmFzc2lzdHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPk1lbGVlIEtpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwubWVsZWVzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5CbGluZCBLaWxsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmJsaW5ka2lsbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkhhY2tlciAlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4wJTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRTdGF0cy1uYW1lJykuaW5uZXJIVE1MID0gcGxheWVyU3RhdHMudXNlci5uaWNrbmFtZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRTdGF0cy1sZXZlbCcpLmlubmVySFRNTCA9IHBsYXllclN0YXRzLnN0YXRzLnByb2dyZXNzaW9uLmxldmVsO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRTdGF0cy1wcm9maWxlSW1nJykgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gcGxheWVyU3RhdHMudXNlci5zbWFsbEF2YXRhcjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRTZWFzb25hbCcpLmlubmVySFRNTCA9IGRldGFpbGVkU2Vhc29uYWw7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkUmFua2VkJykuaW5uZXJIVE1MID0gZGV0YWlsZWRSYW5rZWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkQ2FzdWFsJykuaW5uZXJIVE1MID0gZGV0YWlsZWRDYXN1YWw7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkUGxheWVyJykuaW5uZXJIVE1MID0gZGV0YWlsZWRQbGF5ZXI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkR2VuZXJhbCcpLmlubmVySFRNTCA9IGRldGFpbGVkR2VuZXJhbDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYHNob3duIGRldGFpbGVkIHBsYXllciBcIiR7cGxheWVyU3RhdHMudXNlci5uaWNrbmFtZX1cImApO1xyXG5cclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuc3RhdHNkYi5uZXQvcjYvY29uZmlnJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5zdGF0c2RiLm5ldC9yNi9wbGF5ZXIvJHtwbGF5ZXJTdGF0cy51c2VyLmlkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UyID0+IHJlc3BvbnNlMi5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXNlckRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaXN0b3J5U3RhdHMgPSB1c2VyRGF0YS5wYXlsb2FkLnN0YXRzLmhpc3Rvcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlck9mU2Vhc29ucyA9IE9iamVjdC5rZXlzKGRhdGEucGF5bG9hZC5zZWFzb25zKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2Vhc29uc0hUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vhc29uID0gbnVtYmVyT2ZTZWFzb25zIC0gaTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2Vhc29uRGF0YTogYW55ID0geyByYW5rOiAwLCBtbXI6IDI1MDAsIGtpbGxzOiAwLCBkZWF0aHM6IDAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbVBSZWdpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZXNQbGF5ZWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiAnZW1lYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCByZWdpb24gaW4gaGlzdG9yeVN0YXRzW3NlYXNvbl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeVN0YXRzW3NlYXNvbl0uaGFzT3duUHJvcGVydHkocmVnaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpb25TdGF0cyA9IGhpc3RvcnlTdGF0c1tzZWFzb25dW3JlZ2lvbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVzUGxheWVkID0gcmVnaW9uU3RhdHMud2lucyArIHJlZ2lvblN0YXRzLmxvc3NlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdpb25TdGF0cy5ub01hdGNoZXNQbGF5ZWQgPT09IGZhbHNlICYmIGdhbWVzUGxheWVkID4gbVBSZWdpb24uZ2FtZXNQbGF5ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1QUmVnaW9uLmdhbWVzUGxheWVkID0gZ2FtZXNQbGF5ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtUFJlZ2lvbi5yZWdpb24gPSByZWdpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhpc3RvcnlTdGF0c1tzZWFzb25dW21QUmVnaW9uLnJlZ2lvbl0ubm9NYXRjaGVzUGxheWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGEgPSBoaXN0b3J5U3RhdHNbc2Vhc29uXVttUFJlZ2lvbi5yZWdpb25dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFzb25EYXRhLmRlYXRocyArIHNlYXNvbkRhdGEua2lsbHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhLmtkID0gXCJLL0Q6XCIgKyAoc2Vhc29uRGF0YS5raWxscyAvIHNlYXNvbkRhdGEuZGVhdGhzKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhLmtkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Vhc29uRGF0YS5tYXhfbW1yICE9PSB1bmRlZmluZWQgJiYgc2Vhc29uRGF0YS5tYXhfbW1yICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YS5tYXhfcmFuayA9IHRoaXMucmFua09mZnNldChzZWFzb24sIHNlYXNvbkRhdGEubWF4X3JhbmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGEubWF4X21tciA9IE1hdGgudHJ1bmMoc2Vhc29uRGF0YS5tYXhfbW1yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YS5tYXhfcmFuayA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YS5tYXhfbW1yID0gXCIyNTAwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uc0hUTUwgKz0gIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3JhbmtzL3Jhbmske3NlYXNvbkRhdGEubWF4X3Jhbmt9LnN2Z1wiIGFsdD1cInJhbmsgaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9XCJjb2xvcjoke3NlYXNvbkNvbG9yc1tzZWFzb25dfVwiPiR7ZGF0YS5wYXlsb2FkLnNlYXNvbnNbc2Vhc29uXS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TU1SOiR7c2Vhc29uRGF0YS5tYXhfbW1yfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWFzb25LRFwiPiR7c2Vhc29uRGF0YS5rZH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXNvbnNTdGF0cycpLmlubmVySFRNTCA9IHNlYXNvbnNIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmtPZmZzZXQoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYSA8IDE1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5rT2Zmc2V0W2JdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcmVNYXRjaERhdGEobWF0Y2hTdGF0cywgbWF0Y2hPdXRjb21lOiBzdHJpbmcsIHJvdW5kU3RhdHMsIHNlbGYpIHtcclxuICAgICAgICBjb25zdCB0b2RheTogYW55ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBmaXJzdERheU9mWWVhcjogYW55ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgY29uc3QgcGFzdERheXNPZlllYXI6IGFueSA9ICh0b2RheSAtIGZpcnN0RGF5T2ZZZWFyKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlJREJEYXlzID0gdG9kYXkuZ2V0RGF0ZSgpICsgJywnICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKSArICcsJyArIHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY29uc3Qga2V5SURCV2Vla3MgPSBgJHtNYXRoLmNlaWwoKHBhc3REYXlzT2ZZZWFyICsgZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyAxKSAvIDcpfSwke3RvZGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICBjb25zdCBkYXlPZldlZWsgPSB0b2RheS5nZXREYXkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZTEgPSB0aGlzLnN0b3JlRGFpbHkoa2V5SURCRGF5cywgbWF0Y2hTdGF0cywgbWF0Y2hPdXRjb21lLCBzZWxmKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlMiA9IHRoaXMuc3RvcmVXZWVrbHkoa2V5SURCV2Vla3MsIGRheU9mV2VlaywgbWF0Y2hTdGF0cywgbWF0Y2hPdXRjb21lLCBzZWxmKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlMyA9IHRoaXMuc3RvcmVNYXRjaChtYXRjaFN0YXRzLCByb3VuZFN0YXRzLCBtYXRjaE91dGNvbWUsIHNlbGYpO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlM10pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhgc3RvcmVNYXRjaCBcIiR7cmVzdWx0fVwiYCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcmVEYWlseShrZXlJREI6IHN0cmluZywgbWF0Y2hTdGF0cywgbWF0Y2hPdXRjb21lOiBzdHJpbmcsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmRhdGFiYXNlLnJlYWRGcm9tSURCKCdkYXlzJywga2V5SURCKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGJSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gc2VsZi5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGJSZXN1bHRbdGhpcy5nYW1lTW9kZV0ua2lsbHMgKz0gbWF0Y2hTdGF0c1tpZF0ua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGJSZXN1bHRbdGhpcy5nYW1lTW9kZV0uZGVhdGhzICs9IG1hdGNoU3RhdHNbaWRdLmRlYXRocztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoT3V0Y29tZSA9PT0gJ3ZpY3RvcnknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiUmVzdWx0W3RoaXMuZ2FtZU1vZGVdLndpbnMgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaE91dGNvbWUgPT09ICdkZWZlYXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiUmVzdWx0W3RoaXMuZ2FtZU1vZGVdLmxvc3NlcyArKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmRhdGFiYXNlLnN0b3JlVG9JREIoJ2RheXMnLCBkYlJlc3VsdCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3JlV2Vla2x5KGtleUlEQjogc3RyaW5nLCBkYXlPZldlZWs6IG51bWJlciwgbWF0Y2hTdGF0cywgbWF0Y2hPdXRjb21lOiBzdHJpbmcsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmRhdGFiYXNlLnJlYWRGcm9tSURCKCd3ZWVrcycsIGtleUlEQilcclxuICAgICAgICAgICAgICAgIC50aGVuKGRiUmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHNlbGYuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRiUmVzdWx0W2RheU9mV2Vla11bdGhpcy5nYW1lTW9kZV0ua2lsbHMgKz0gbWF0Y2hTdGF0c1tpZF0ua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGJSZXN1bHRbZGF5T2ZXZWVrXVt0aGlzLmdhbWVNb2RlXS5kZWF0aHMgKz0gbWF0Y2hTdGF0c1tpZF0uZGVhdGhzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hPdXRjb21lID09PSAndmljdG9yeScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGJSZXN1bHRbZGF5T2ZXZWVrXVt0aGlzLmdhbWVNb2RlXS53aW5zICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hPdXRjb21lID09PSAnZGVmZWF0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYlJlc3VsdFtkYXlPZldlZWtdW3RoaXMuZ2FtZU1vZGVdLmxvc3NlcyArKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmRhdGFiYXNlLnN0b3JlVG9JREIoJ3dlZWtzJywgZGJSZXN1bHQsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yZU1hdGNoKG1hdGNoU3RhdHMsIHJvdW5kU3RhdHMsIG1hdGNoT3V0Y29tZTogc3RyaW5nLCBzZWxmKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYlZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hJZDogdGhpcy5tYXRjaElkLFxyXG4gICAgICAgICAgICAgICAgbWFwOiB0aGlzLm1hcElkLFxyXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wOiB0aGlzLnRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcEluZGV4OiB0aGlzLnRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlOiB0aGlzLmdhbWVNb2RlLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2hPdXRjb21lOiBtYXRjaE91dGNvbWUsXHJcbiAgICAgICAgICAgICAgICBtYXRjaFN0YXRzOiBtYXRjaFN0YXRzLFxyXG4gICAgICAgICAgICAgICAgcm91bmRTdGF0czogcm91bmRTdGF0cyxcclxuICAgICAgICAgICAgICAgIHNlbGY6IHNlbGYsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5kYXRhYmFzZS5zdG9yZVRvSURCKCdtYXRjaGVzJywgZGJWYWx1ZSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vdGltZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlIHtcclxuICAgIG9uSW5mb1VwZGF0ZXMoaW5mbzogYW55KTtcclxuICAgIG9uTmV3RXZlbnRzKGU6IGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPV0dhbWVzRXZlbnRzIHtcclxuICAgIHByaXZhdGUgX2RlbGVnYXRlOiBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWlyZWRGZWF0dXJlczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IElPV0dhbWVzRXZlbnRzRGVsZWdhdGUsIHJlcXVpcmVkRmVhdHVyZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlZEZlYXR1cmVzID0gcmVxdWlyZWRGZWF0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0SW5mbygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMuZ2V0SW5mbyhyZXNvbHZlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBsZXQgdHJpZXM6bnVtYmVyID0gMSxcclxuICAgICAgICByZXN1bHQ7XHJcblxyXG4gICAgICAgIHdoaWxlICggdHJpZXMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLnNldFJlcXVpcmVkRmVhdHVyZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWRGZWF0dXJlcyxcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKCByZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBzdWNjZXNzOiAnKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocmVzdWx0LnN1cHBvcnRlZEZlYXR1cmVzLmxlbmd0aCA+IDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBUaW1lci53YWl0KDMwMDApO1xyXG4gICAgICAgICAgICB0cmllcysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdzZXRSZXF1aXJlZEZlYXR1cmVzKCk6IGZhaWx1cmUgYWZ0ZXIgJysgdHJpZXMgKycgdHJpZXMnKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudHMoKTtcclxuXHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uSW5mb1VwZGF0ZXMyLmFkZExpc3RlbmVyKHRoaXMub25JbmZvVXBkYXRlcyk7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uTmV3RXZlbnRzLmFkZExpc3RlbmVyKHRoaXMub25OZXdFdmVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5SZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25JbmZvVXBkYXRlczIucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkluZm9VcGRhdGVzKTtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25OZXdFdmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5vbk5ld0V2ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkluZm9VcGRhdGVzID0gKGluZm86IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uSW5mb1VwZGF0ZXMoaW5mby5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTmV3RXZlbnRzID0gKGU6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uTmV3RXZlbnRzKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW293LWdhbWUtZXZlbnRzXSBTVEFSVGApO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0UmVxdWlyZWRGZWF0dXJlcygpO1xyXG5cclxuICAgICAgICBsZXQgdHJpZXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgcmVzLCBzdGF0dXMgfSA9IGF3YWl0IHRoaXMuZ2V0SW5mbygpO1xyXG5cclxuICAgICAgICBpZiAoIHJlcyAmJiBzdGF0dXMgPT09ICdzdWNjZXNzJyApIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluZm9VcGRhdGVzKHsgaW5mbzogcmVzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW293LWdhbWUtZXZlbnRzXSBTVE9QYCk7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE9XSG90a2V5cyB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgZ2V0SG90a2V5VGV4dChob3RrZXlJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuZ2V0SG90S2V5KGhvdGtleUlkLCByZXN1bHQgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuc3VjY2VzcyB8fCAhcmVzdWx0LmhvdGtleSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlc29sdmUoJ1VOQVNTSUdORUQnKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5ob3RrZXkpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9uSG90a2V5RG93bihob3RrZXlJZDogc3RyaW5nLCBhY3Rpb246IChob3RrZXlSZXN1bHQ6IG92ZXJ3b2xmLnNldHRpbmdzLkhvdEtleVJlc3VsdCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLnJlZ2lzdGVySG90S2V5KGhvdGtleUlkLCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsInR5cGUgR2V0V2luZG93U3RhdGVSZXN1bHQgPSBvdmVyd29sZi53aW5kb3dzLkdldFdpbmRvd1N0YXRlUmVzdWx0O1xyXG50eXBlIE93V2luZG93SW5mbyA9IG92ZXJ3b2xmLndpbmRvd3MuV2luZG93SW5mbztcclxuZXhwb3J0IGNsYXNzIE9XV2luZG93IHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVzdG9yZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IHJlc3RvcmVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLnJlc3RvcmUoaWQsIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtyZXN0b3JlXSAtIGFuIGVycm9yIG9jY3VycmVkLCB3aW5kb3dJZD0ke2lkfSwgcmVhc29uPSR7cmVzdWx0LmVycm9yfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtaW5pbWl6ZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWluaW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBicmluZ1RvRnJvbnQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtaW5pbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmJyaW5nVG9Gcm9udChpZCwgdHJ1ZSwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1heGltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWF4aW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm1heGltaXplKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaGlkZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IGhpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5oaWRlKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIChyZXN1bHQud2luZG93X3N0YXRlICE9PSAnY2xvc2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW50ZXJuYWxDbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoYW5nZVdpbmRvd1NpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVNpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQsIChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93TG9jYXRpb24obW9kZSwgd2luZG93SWQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gcmVzdWx0LndpbmRvdy53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHJlc3VsdC53aW5kb3cuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KChtb25pdG9yUmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvcklkOiBzdHJpbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykubW9uaXRvcklkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yV2lkdGggPSBtb25pdG9yUmVzLmRpc3BsYXlzW21vbml0b3JJZF0ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvckhlaWdodCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVmdDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnY2VudGVyLWNlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbW9uaXRvcldpZHRoIC8gMiAtICh3aW5kb3dXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2VudGVyLXJpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAobW9uaXRvcldpZHRoIC0gd2luZG93V2lkdGgpIC0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jaGFuZ2VQb3NpdGlvbih3aW5kb3dJZCwgTWF0aC5yb3VuZChsZWZ0KSwgTWF0aC5yb3VuZCh0b3ApLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzY2FsZVdpbmRvdyh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpOiBQcm9taXNlIDwgdm9pZCA+ICB7XHJcbiAgICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWA7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9nYW1lJyB8fCB3aW5kb3dJZCA9PT0gJ2luX2dhbWVfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgY2FsYygke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSUgLSAzMnB4KWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5JyB8fCB3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY2FsZSA8PSAwLjYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmFnTW92ZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGVsZW0ub25tb3VzZWRvd24gPSBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmRyYWdNb3ZlKHRoaXMuX25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TW9uaXRvcnNMaXN0KCk6IFByb21pc2UgPCBhbnkgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgYW55ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCk6IFByb21pc2UgPCBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRXaW5kb3dTdGF0ZShpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEN1cnJlbnRJbmZvKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgT3dXaW5kb3dJbmZvID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3cocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LndpbmRvdyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9idGFpbigpOiBQcm9taXNlIDwgT3dXaW5kb3dJbmZvIHwgbnVsbCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYiA9IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJyAmJiByZXMud2luZG93ICYmIHJlcy53aW5kb3cuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHJlcy53aW5kb3cuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gcmVzLndpbmRvdy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMud2luZG93KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coY2IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5vYnRhaW5EZWNsYXJlZFdpbmRvdyh0aGlzLl9uYW1lLCBjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYXNzdXJlT2J0YWluZWQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQub2J0YWluKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGludGVybmFsQ2xvc2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKGlkLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUGxheWVyQ29tcGFyZSB7XHJcbiAgICBwcml2YXRlIGh0bWxFbGVtZW50czogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnRzID0ge1xyXG4gICAgICAgICAgICBjb21wYXJlVGVhbUJsdWVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmx1ZVN0YXQnKSxcclxuICAgICAgICAgICAgY29tcGFyZVRlYW1PcmFuZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JhbmdlU3RhdCcpLFxyXG4gICAgICAgICAgICBjb21wYXJlVlNUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbVZTVGV4dC5hZ2dybycpLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2FsY3VsYXRlVGVhbVN0YXRzKGFsbFBsYXllclN0YXRzLCB1c2VyVGVhbTogc3RyaW5nKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbGV0IHRlYW1TdGF0czogYW55ID0ge30sIHRlYW1NTVJWOiBzdHJpbmcsIHRlYW1LRFY6IHN0cmluZywgdGVhbVdMVjogc3RyaW5nLCB0ZWFtR2FtZXNQbGF5ZWRWOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIGluIGFsbFBsYXllclN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsUGxheWVyU3RhdHMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyU3RhdHM6IGFueSA9IGFsbFBsYXllclN0YXRzW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IHBsYXllclN0YXRzLnRlYW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGVhbVN0YXRzW3RlYW1OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtU3RhdHNbdGVhbU5hbWVdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1TdGF0c1t0ZWFtTmFtZV0ubW1yID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1TdGF0c1t0ZWFtTmFtZV0ua2QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVN0YXRzW3RlYW1OYW1lXS53bCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtU3RhdHNbdGVhbU5hbWVdLmdhbWVzUGxheWVkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZWFtU3RhdHNbdGVhbU5hbWVdLm1tci5wdXNoKHBsYXllclN0YXRzLnN0YXRzLnJhbmsubW1yKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtU3RhdHNbdGVhbU5hbWVdLmtkLnB1c2gocGxheWVyU3RhdHMuc3RhdHMucmFuay5rZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVN0YXRzW3RlYW1OYW1lXS53bC5wdXNoKHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2wpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1TdGF0c1t0ZWFtTmFtZV0uZ2FtZXNQbGF5ZWQucHVzaChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1hdGNoZXNwbGF5ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZWFtTU1SViA9IHRoaXMuY2FsY3VsYXRlQXZnKHRlYW1TdGF0c1t0ZWFtTmFtZV0ubW1yLCBcInRydW5jXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1LRFYgPSB0aGlzLmNhbGN1bGF0ZUF2Zyh0ZWFtU3RhdHNbdGVhbU5hbWVdLmtkLCBcInRvZml4ZWRcIiwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVdMViA9IHRoaXMuY2FsY3VsYXRlQXZnKHRlYW1TdGF0c1t0ZWFtTmFtZV0ud2wsIFwidG9maXhlZFwiLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtR2FtZXNQbGF5ZWRWID0gdGhpcy5jYWxjdWxhdGVBdmcodGVhbVN0YXRzW3RlYW1OYW1lXS5nYW1lc1BsYXllZCwgXCJ0cnVuY1wiLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRlYW0ke3RlYW1OYW1lfU1tcmApLmlubmVySFRNTCA9IHRlYW1NTVJWO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0ZWFtJHt0ZWFtTmFtZX1LZGApLmlubmVySFRNTCA9IHRlYW1LRFY7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRlYW0ke3RlYW1OYW1lfVdsYCkuaW5uZXJIVE1MID0gdGVhbVdMViArICclJztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGVhbSR7dGVhbU5hbWV9R2FtZXNQbGF5ZWRgKS5pbm5lckhUTUwgPSB0ZWFtR2FtZXNQbGF5ZWRWO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlclRlYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmh0bWxFbGVtZW50cy5jb21wYXJlVGVhbUJsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclRlYW0gPT09ICdCbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnRzLmNvbXBhcmVWU1RleHRbaV0uYmVmb3JlKHRoaXMuaHRtbEVsZW1lbnRzLmNvbXBhcmVUZWFtQmx1ZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnRzLmNvbXBhcmVWU1RleHRbaV0uYWZ0ZXIodGhpcy5odG1sRWxlbWVudHMuY29tcGFyZVRlYW1PcmFuZ2VzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlclRlYW0gPT09ICdPcmFuZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudHMuY29tcGFyZVZTVGV4dFtpXS5iZWZvcmUodGhpcy5odG1sRWxlbWVudHMuY29tcGFyZVRlYW1PcmFuZ2VzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50cy5jb21wYXJlVlNUZXh0W2ldLmFmdGVyKHRoaXMuaHRtbEVsZW1lbnRzLmNvbXBhcmVUZWFtQmx1ZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW1XaW5uaW5nT2RkcyhhbGxQbGF5ZXJTdGF0cywgdGVhbVN0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZUF2ZyhzdGF0QXJyYXksIG1vZGU6IHN0cmluZywgZGVjaW1hbHM6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBvdXRwdXQ6IGFueSA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdEFycmF5ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gc3RhdEFycmF5W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgLyBzdGF0QXJyYXkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJ0cnVuY1wiKSB7XHJcbiAgICAgICAgICAgIG91dHB1dCA9IE1hdGgudHJ1bmMob3V0cHV0KS50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJ0b2ZpeGVkXCIpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnRvRml4ZWQoZGVjaW1hbHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRlYW1XaW5uaW5nT2RkcyhhbGxQbGF5ZXJTdGF0cywgdGVhbVN0YXRzKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UGVyYzogbnVtYmVyLCBzbWFsbENoYW5jZTogbnVtYmVyLCBsYXJnZUNoYW5jZTogbnVtYmVyLCBibHVlQklHOiBib29sZWFuLCBvZGRzQmx1ZTogbnVtYmVyLCBvZGRzT3JhbmdlOiBudW1iZXIsIGJsdWVUb3QgPSAwLCBvcmFuZ2VUb3QgPSAwLCB0ZWFtc1BvaW50OiBhbnkgPSB7IEJsdWU6MCwgT3JhbmdlOjAgfSwgdGVhbTogc3RyaW5nO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhhbGxQbGF5ZXJTdGF0cykuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclN0YXRzID0gYWxsUGxheWVyU3RhdHNbaV07XHJcbiAgICAgICAgICAgICAgICB0ZWFtID0gcGxheWVyU3RhdHMudGVhbVxyXG4gICAgICAgICAgICAgICAgbGV0IHdsV2VpZ2h0ID0gMCwga2RXZWlnaHQgPSAwLCBoc1dlaWdodCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllclN0YXRzLnN0YXRzLnJhbmsucmFuayA+IDAgJiYgcGxheWVyU3RhdHMuc3RhdHMucmFuay53aW5zICsgcGxheWVyU3RhdHMuc3RhdHMucmFuay5sb3NzZXMgPiA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmtkID4gMS40KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndpbnMgKyBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmxvc3NlcyA+IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2RXZWlnaHQgPSAyLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZFdlaWdodCA9IDIuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay5rZCA+IDEuMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZFdlaWdodCA9IDEuNjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllclN0YXRzLnN0YXRzLnJhbmsua2QgPiAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2RXZWlnaHQgPSAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmtkIDwgMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtkV2VpZ2h0ID0gMS4yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclN0YXRzLmdlbmVyYWxwdnBfa2lsbHMgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmhlYWRzaG90cyAvIHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwua2lsbHMpID4gMC41NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNXZWlnaHQgPSAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuaGVhZHNob3RzIC8gcGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5raWxscykgPiAwLjUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc1dlaWdodCA9IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgocGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5oZWFkc2hvdHMgLyBwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmtpbGxzKSA+IDAuNDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzV2VpZ2h0ID0gMS4xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay53aW5zICsgcGxheWVyU3RhdHMuc3RhdHMucmFuay5sb3NzZXMgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2wgPiA3NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2xXZWlnaHQgPSAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay53bCA+IDYzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3bFdlaWdodCA9IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndsID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdsV2VpZ2h0ID0gMS4xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllclN0YXRzLnN0YXRzLmhpc3RvcnlbMTldLmVtZWEucmFuayA+IDAgJiYgcGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS53aW5zICsgcGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS5sb3NzZXMgPiA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLmtkID4gMS40KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5wbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLndpbnMgKyBwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLmxvc3NlcyA+IDE1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2RXZWlnaHQgKz0gMS4yNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtkV2VpZ2h0ICs9IDEuMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS5rZCA+IDEuMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZFdlaWdodCArPSAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLmtkID4gMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtkV2VpZ2h0ICs9IDAuNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLmtkIDwgMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtkV2VpZ2h0ICs9IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLndpbnMgKyBwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLmxvc3NlcyA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS53bCA+IDc1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3bFdlaWdodCArPSAwLjY1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllclN0YXRzLnN0YXRzLmhpc3RvcnlbMTldLmVtZWEud2wgPiA2Mykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2xXZWlnaHQgKz0gMC42O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllclN0YXRzLnN0YXRzLmhpc3RvcnlbMTldLmVtZWEud2wgPiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2xXZWlnaHQgKz0gMC41NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZWFtc1BvaW50W3RlYW1dICs9IGtkV2VpZ2h0ICogKHBsYXllclN0YXRzLnN0YXRzLnJhbmsucmFuayAvIDMpO1xyXG4gICAgICAgICAgICAgICAgdGVhbXNQb2ludFt0ZWFtXSArPSBoc1dlaWdodCAqIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnJhbmsgLyAzKTtcclxuICAgICAgICAgICAgICAgIHRlYW1zUG9pbnRbdGVhbV0gKz0gd2xXZWlnaHQgKiAocGxheWVyU3RhdHMuc3RhdHMucmFuay5yYW5rIC8gNSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0ZWFtU3RhdHMuQmx1ZSkge1xyXG4gICAgICAgICAgICBibHVlVG90ICs9IHBhcnNlRmxvYXQodGVhbVN0YXRzLkJsdWUubW1yKSAvIDEwMDAgO1xyXG4gICAgICAgICAgICBibHVlVG90ICs9IHBhcnNlRmxvYXQodGVhbVN0YXRzLkJsdWUua2QpICogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGVhbXNQb2ludC5CbHVlICs9IGJsdWVUb3Q7XHJcblxyXG4gICAgICAgIGlmICh0ZWFtU3RhdHMuT3JhbmdlKSB7XHJcbiAgICAgICAgICAgIG9yYW5nZVRvdCArPSBwYXJzZUZsb2F0KHRlYW1TdGF0cy5PcmFuZ2UubW1yKSAvIDEwMDAgO1xyXG4gICAgICAgICAgICBvcmFuZ2VUb3QgKz0gcGFyc2VGbG9hdCh0ZWFtU3RhdHMuT3JhbmdlLmtkKSAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlYW1zUG9pbnQuT3JhbmdlICs9IG9yYW5nZVRvdDtcclxuXHJcbiAgICAgICAgaWYgKHRlYW1zUG9pbnQuQmx1ZSA+IHRlYW1zUG9pbnQuT3JhbmdlKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UGVyYyA9ICh0ZWFtc1BvaW50LkJsdWUgLSB0ZWFtc1BvaW50Lk9yYW5nZSkgLyAodGVhbXNQb2ludC5CbHVlICsgdGVhbXNQb2ludC5PcmFuZ2UpICogMTAwO1xyXG4gICAgICAgICAgICBibHVlQklHID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFydFBlcmMgPSAodGVhbXNQb2ludC5PcmFuZ2UgLSB0ZWFtc1BvaW50LkJsdWUpIC8gKHRlYW1zUG9pbnQuT3JhbmdlICsgdGVhbXNQb2ludC5CbHVlKSAqIDEwMDtcclxuICAgICAgICAgICAgYmx1ZUJJRyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFyZ2VDaGFuY2UgPSA1MCArIHN0YXJ0UGVyYyAvIDI7XHJcbiAgICAgICAgc21hbGxDaGFuY2UgPSA1MCAtIHN0YXJ0UGVyYyAvIDI7XHJcblxyXG4gICAgICAgIGlmIChibHVlQklHID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIG9kZHNCbHVlID0gbGFyZ2VDaGFuY2U7XHJcbiAgICAgICAgICAgIG9kZHNPcmFuZ2UgPSBzbWFsbENoYW5jZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJsdWVCSUcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9kZHNCbHVlID0gc21hbGxDaGFuY2U7XHJcbiAgICAgICAgICAgIG9kZHNPcmFuZ2UgPSBsYXJnZUNoYW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2Rkc0JsdWVcIikuaW5uZXJIVE1MID0gb2Rkc0JsdWUudG9GaXhlZCgxKSArIFwiJVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2Rkc09yYW5nZVwiKS5pbm5lckhUTUwgPSBvZGRzT3JhbmdlLnRvRml4ZWQoMSkgKyBcIiVcIjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFRpbWVyRGVsZWdhdGUge1xyXG4gICAgb25UaW1lcihpZD86IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBUaW1lciB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgX3RpbWVySWQ6IG51bWJlcnxudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBfZGVsZWdhdGU6IFRpbWVyRGVsZWdhdGU7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdhaXQoaW50ZXJ2YWxJbk1TOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgaW50ZXJ2YWxJbk1TKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IFRpbWVyRGVsZWdhdGUsIGlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIHN0YXJ0KGludGVydmFsSW5NUzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3RpbWVySWQgPSA8bnVtYmVyPnNldFRpbWVvdXQodGhpcy5oYW5kbGVUaW1lckV2ZW50LCBpbnRlcnZhbEluTVMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGhhbmRsZVRpbWVyRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25UaW1lcih0aGlzLl9pZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi9vZGstdHMvb3ctd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xyXG4gICAgcHJvdGVjdGVkIGN1cnJXaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIG1haW5XaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIHNldHRpbmdzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYXhpbWl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3dOYW1lOiBzdHJpbmcsIHNldHRpbmdzV2luZG93SWQ6IHN0cmluZywgc3RhdHNpc3RpY3NXaW5kb3dJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tYWluV2luZG93ID0gbmV3IE9XV2luZG93KCdiYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5jdXJyV2luZG93ID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coc2V0dGluZ3NXaW5kb3dJZCk7XHJcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93ID0gbmV3IE9XV2luZG93KHN0YXRzaXN0aWNzV2luZG93SWQpO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1heGltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heGltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemVCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nc0J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVIaXN0b3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVIaXN0b3J5Jyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VXaW5kb3dCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VXaW5kb3dCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0TWluaW1pemVNb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsTWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93TmFtZSA9PT0gJ2Rlc2t0b3AnIHx8IHdpbmRvd05hbWUgPT09ICdzZXR0aW5nc19kZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc3RhdGlzdGljc19kZXNrdG9wJyB8fCBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjFcIicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VXaW5kb3dCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWluaW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4aW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWF4aW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWF4aW1pemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1heGltaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhpbWl6ZWQgPSAhdGhpcy5tYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVIaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIGdhbWVIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxDYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxNaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbE1pbmltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmN1cnJXaW5kb3cuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldERyYWcoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cuZHJhZ01vdmUoZWxlbSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwV2luZG93IH0gZnJvbSAnLi4vQXBwV2luZG93JztcclxuaW1wb3J0IHsgT1dHYW1lc0V2ZW50cyB9IGZyb20gJy4uLy4uL29kay10cy9vdy1nYW1lcy1ldmVudHMnO1xyXG5pbXBvcnQgeyBPV0hvdGtleXMgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctaG90a2V5cyc7XHJcbmltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi4vLi4vb2RrLXRzL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuLi8uLi9vZGstdHMvY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9vZGstdHMvbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHsgUGxheWVyQ29tcGFyZSB9IGZyb20gJy4uLy4uL29kay10cy9wbGF5ZXItY29tcGFyZSc7XHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSAnLi4vLi4vb2RrLXRzL21hdGNoJztcclxuaW1wb3J0IHsgaW50ZXJlc3RpbmdGZWF0dXJlczEsIGhvdGtleXMsIHdpbmRvd05hbWVzLCBnYW1lTW9kZXNQVkUgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xyXG5cclxuY29uc3QgYmx1ZVRlYW1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1ibHVlJyk7XHJcbmNvbnN0IG9yYW5nZVRlYW1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1vcmFuZ2UnKTtcclxuY29uc3QgY29tcGFyZVRlYW1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1jb21wYXJlLWRpdicpO1xyXG5jb25zdCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtYnRuJyk7XHJcbmNvbnN0IG1haW5UYWJzID0gWydzZWFzb24nLCAncmFua2VkJywgJ2Nhc3VhbCddO1xyXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItdHJcIik7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYmFjay1idG4nKTtcclxuXHJcbmxldCBjb3VudCA9IDAsIG1hdGNoU3RhdHM6IGFueSA9IHt9LCBtYXRjaE91dGNvbWU6IHN0cmluZywgcm91bmRzU3RhdHM6IGFueSA9IHt9LCByb3VuZE51bWJlcjogbnVtYmVyLCBzZWxmOiBhbnkgPSB7fSwgY3VycmVudFRhYjogc3RyaW5nLCB3aW5kb3dJZDogc3RyaW5nLCBvd1dpbmRvdzogT1dXaW5kb3csIGNvdW50UGxheWVycyA9IC0xLCBkZXRhaWxlZHN0YXR1cyA9IGZhbHNlLCBtYXRjaERhdGEsIHBsYXllcnMgPSB7fSwgY2lyY2xlU3RhdHM6IGFueTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgIG93V2luZG93ID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWVzLmluR2FtZSk7XHJcbn0gZWxzZSB7XHJcbiAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5pbkdhbWVEZXNrdG9wT25seSk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzKCk7XHJcbmNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XHJcbmNvbnN0IGxvY2Fsc3RvcmFnZSA9IG5ldyBMb2NhbHN0b3JhZ2UoKTtcclxuY29uc3QgcGxheWVyQ29tcGFyZSA9IG5ldyBQbGF5ZXJDb21wYXJlKCk7XHJcblxyXG5vd1dpbmRvdy5taW5pbWl6ZSgpO1xyXG5cclxuY29uc3QgcHJvbWlzZTEgPSBsb2NhbHN0b3JhZ2UuaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29udHJvbGxlcnMuc2V0VGhlbWUoKSk7XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIwXCInKSB7XHJcbiAgICB3aW5kb3dJZCA9ICdpbl9nYW1lJztcclxufSBlbHNlIHtcclxuICAgIHdpbmRvd0lkID0gJ2luX2dhbWVfZGVza3RvcF9vbmx5JztcclxufVxyXG5cclxuY29uc3QgdmFsdWVzQ3VzdG9tID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpO1xyXG5jb25zdCBsb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKTtcclxuXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHZhbHVlc0N1c3RvbSkubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHBsYXllclRhYmxlVGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlLScgKyBpKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllclRhYmxlVGhzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgcGxheWVyVGFibGVUaHNbal0uaW5uZXJIVE1MID0gdmFsdWVzQ3VzdG9tW2ldO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc3RhdHNOYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWMtbmF2LWJ0bicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0c05hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgc3RhdHNOYXZCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbih0aGlzOmFueSkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRzTmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YXRzTmF2QnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgc2V0Q2lyY2xlcyh0aGlzLmlkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDaXJjbGVzKGlkKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGNpcmNsZVN0YXRzWzBdW2lkXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMF1baWRdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoY2lyY2xlU3RhdHNbMF1baWRdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IGNpcmNsZVN0YXRzWzBdW2lkXS53bCArICclJztcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMV1baWRdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGNpcmNsZVN0YXRzWzFdW2lkXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoY2lyY2xlU3RhdHNbMV1baWRdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gY2lyY2xlU3RhdHNbMV1baWRdLndsICsgJyUnO1xyXG59XHJcblxyXG5jbGFzcyBJbkdhbWUgZXh0ZW5kcyBBcHBXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJbkdhbWU7XHJcbiAgICBwcml2YXRlIF9yYWluYm93R2FtZUV2ZW50c0xpc3RlbmVyOiBPV0dhbWVzRXZlbnRzO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRzTG9nOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2luZm9Mb2c6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwcm9maWxlSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvZmlsZU5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgZ2FtZU1vZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgbWF0Y2hJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtYXBJZDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSA9PT0gJ1wiMFwiJykge1xyXG4gICAgICAgICAgICBzdXBlcih3aW5kb3dOYW1lcy5pbkdhbWUsICdzZXR0aW5nc19pbl9nYW1lJywgJ3N0YXRpc3RpY3NfaW5fZ2FtZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LnNjYWxlV2luZG93KCdpbl9nYW1lJywgMTYwMCwgOTAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBvd1dpbmRvdy5jaGFuZ2VXaW5kb3dMb2NhdGlvbignY2VudGVyLWNlbnRlcicsICdpbl9nYW1lJykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvY2FsLm1heGltaXplID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgIG93V2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHdpbmRvd05hbWVzLmluR2FtZURlc2t0b3BPbmx5LCAnc2V0dGluZ3NfZGVza3RvcCcsICdzdGF0aXN0aWNzX2Rlc2t0b3AnKTtcclxuXHJcbiAgICAgICAgICAgIG93V2luZG93LnNjYWxlV2luZG93KCdpbl9nYW1lX2Rlc2t0b3Bfb25seScsIDE2MDAsIDkwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKTtcclxuICAgICAgICAgICAgb3dXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRUb2dnbGVIb3RrZXlCZWhhdmlvcigpO1xyXG4gICAgICAgIHRoaXMuc2V0VGFibGVUYWJEZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRUYWJsZVRhYlNlbGVjdG9yKCk7XHJcbiAgICAgICAgdGhpcy5zZXRIb3RrZXlUZXh0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRPd0tleUxpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXREZXRhaWxlZEJhY2tCdG4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmFpbmJvd0dhbWVFdmVudHNMaXN0ZW5lciA9IG5ldyBPV0dhbWVzRXZlbnRzKHtcclxuICAgICAgICAgICAgb25JbmZvVXBkYXRlczogdGhpcy5vbkluZm9VcGRhdGVzLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG9uTmV3RXZlbnRzOiB0aGlzLm9uTmV3RXZlbnRzLmJpbmQodGhpcylcclxuICAgICAgICB9LCBpbnRlcmVzdGluZ0ZlYXR1cmVzMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkYXRhYmFzZS5pbml0QWxsSURCKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gZGF0YWJhc2UuZGlzcGxheURhaWx5V2Vla2x5KCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjaXJjbGVTdGF0cyA9IHJlc3VsdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5nZXRJbmZvKGZ1bmN0aW9uKGluZm8pIHtcclxuICAgICAgICAgICAgdGhhdC5zZXRUaGlzVmFsdWUoaW5mby5yZXMubWUuYWNjb3VudF9pZCwgJ3Byb2ZpbGVJZCcpO1xyXG4gICAgICAgICAgICB0aGF0LnNldFRoaXNWYWx1ZShpbmZvLnJlcy5tZS5uYW1lLCAncHJvZmlsZU5hbWUnKTtcclxuICAgICAgICAgICAgdGhhdC5zZXRUaGlzVmFsdWUoaW5mby5yZXMubWF0Y2hfaW5mby5tYXRjaF9pZCwgJ21hdGNoSWQnKTtcclxuICAgICAgICAgICAgdGhhdC5zZXRUaGlzVmFsdWUoaW5mby5yZXMubWF0Y2hfaW5mby5nYW1lX21vZGUsICdnYW1lTW9kZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZm8ucmVzLm1hdGNoX2luZm8ubWFwX2lkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFRoaXNWYWx1ZShpbmZvLnJlcy5tYXRjaF9pbmZvLm1hcF9pZCwgJ21hcElkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0Y2hEYXRhID0gbmV3IE1hdGNoKGluZm8ucmVzLm1hdGNoX2luZm8uZ2FtZV9tb2RlLCBpbmZvLnJlcy5tYXRjaF9pbmZvLm1hdGNoX2lkLCBpbmZvLnJlcy5tYXRjaF9pbmZvLm1hcF9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG1hdGNoSWQgXCIke2luZm8ucmVzLm1hdGNoX2luZm8ubWF0Y2hfaWR9XCIsIGdhbWVNb2RlIFwiJHtpbmZvLnJlcy5tYXRjaF9pbmZvLmdhbWVfbW9kZX1cIiwgbWFwSWQgXCIke2luZm8ucmVzLm1hdGNoX2luZm8ubWFwX2lkfVwiYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMuZ2V0SW5mbyhmdW5jdGlvbihpbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRUaGlzVmFsdWUoaW5mby5yZXMubWF0Y2hfaW5mby5tYXBfaWQsICdtYXBJZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYXRjaERhdGEgPSBuZXcgTWF0Y2goaW5mby5yZXMubWF0Y2hfaW5mby5nYW1lX21vZGUsIGluZm8ucmVzLm1hdGNoX2luZm8ubWF0Y2hfaWQsIGluZm8ucmVzLm1hdGNoX2luZm8ubWFwX2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG1hdGNoSWQgXCIke2luZm8ucmVzLm1hdGNoX2luZm8ubWF0Y2hfaWR9XCIsIGdhbWVNb2RlIFwiJHtpbmZvLnJlcy5tYXRjaF9pbmZvLmdhbWVfbW9kZX1cIiwgbWFwSWQgXCIke2luZm8ucmVzLm1hdGNoX2luZm8ubWFwX2lkfVwiYCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgSW5HYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJ1bigpIHtcclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUV2ZW50c0xpc3RlbmVyLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkluZm9VcGRhdGVzKGluZm8pIHtcclxuICAgICAgICBpZiAoJ3JvdW5kJyBpbiBpbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByb3VuZE51bWJlciBcIiR7aW5mby5yb3VuZC5udW1iZXJ9XCJgKTtcclxuXHJcbiAgICAgICAgICAgIHJvdW5kTnVtYmVyID0gaW5mby5yb3VuZC5udW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ3BsYXllcnMnIGluIGluZm8gJiYgKGluZm8ucGxheWVycy5yb3N0ZXJfMCAhPSBudWxsIHx8IE9iamVjdC52YWx1ZXMoaW5mby5wbGF5ZXJzKVswXSAhPSBudWxsKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGluZm8ucGxheWVycykubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGluZm8ucGxheWVycylbaV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0c1JhdyA9IE9iamVjdC52YWx1ZXMoaW5mby5wbGF5ZXJzKVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0cyA9IEpTT04ucGFyc2UoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0c1JhdykpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IE9iamVjdC5rZXlzKGluZm8ucGxheWVycylbaV0uc3Vic3RyKDcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9maWxlTmFtZSA9PT0gc3RhdHMubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXJUZWFtID0gc3RhdHMudGVhbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pZCA9IGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5hbWUgPSBzdGF0cy5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudXNlclRlYW0gPT09ICdCbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZVRlYW1EaXYuYmVmb3JlKGJsdWVUZWFtRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVUZWFtRGl2LmFmdGVyKG9yYW5nZVRlYW1EaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZXNQVkUuaW5jbHVkZXModGhpcy5nYW1lTW9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVlVGVhbURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmFuZ2VUZWFtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkaXNwbGF5ZWQgdGVhbSBcImJsdWVcImApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYudXNlclRlYW0gPT09ICdPcmFuZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlVGVhbURpdi5iZWZvcmUob3JhbmdlVGVhbURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlVGVhbURpdi5hZnRlcihibHVlVGVhbURpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNb2Rlc1BWRS5pbmNsdWRlcyh0aGlzLmdhbWVNb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdWVUZWFtRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JhbmdlVGVhbURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc3BsYXllZCB0ZWFtIFwib3JhbmdlXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyb3VuZHNTdGF0c1tyb3VuZE51bWJlcl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRzU3RhdHNbcm91bmROdW1iZXJdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJvdW5kc1N0YXRzW3JvdW5kTnVtYmVyXS5yb3VuZE91dGNvbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRzU3RhdHNbcm91bmROdW1iZXJdW2lkXSA9IHN0YXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG1hdGNoRGF0YS5wbGF5ZXJKb2luKGlkLCBzdGF0cywgaW5mbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckNvbXBhcmUuY2FsY3VsYXRlVGVhbVN0YXRzKHBsYXllcnMsIHNlbGYudXNlclRlYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzLnNldFRhYmxlVGFiKGN1cnJlbnRUYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGV0YWlsZWRPbkNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwbGF5ZXJVcGRhdGUgXCIke3N0YXRzUmF3fVwiYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKCdwbGF5ZXJzJyBpbiBpbmZvKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoaW5mby5wbGF5ZXJzKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBPYmplY3Qua2V5cyhpbmZvLnBsYXllcnMpW2ldLnN1YnN0cig3KTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgbWF0Y2hTdGF0c1tpZF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG1hdGNoRGF0YS5wbGF5ZXJMZWF2ZShpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQ29tcGFyZS5jYWxjdWxhdGVUZWFtU3RhdHMocGxheWVycywgc2VsZi51c2VyVGVhbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcGxheWVyTGVmdCBcIiR7aWR9XCJgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTmV3RXZlbnRzKGV2ZW50SW5mbykge1xyXG4gICAgICAgIGlmICgnZXZlbnRzJyBpbiBldmVudEluZm8gJiYgZXZlbnRJbmZvLmV2ZW50c1swXS5uYW1lID09PSAncm91bmRPdXRjb21lJyAmJiAodGhpcy5nYW1lTW9kZSA9PT0gJ01BVENITUFLSU5HX1BWUCcgfHwgdGhpcy5nYW1lTW9kZSA9PT0gJ01BVENITUFLSU5HX1BWUF9SQU5LRUQnIHx8IHRoaXMuZ2FtZU1vZGUgPT09ICdNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQnIHx8IHRoaXMuZ2FtZU1vZGUgPT09ICdDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQnKSkge1xyXG4gICAgICAgICAgICByb3VuZHNTdGF0c1tyb3VuZE51bWJlcl0ucm91bmRPdXRjb21lID0gZXZlbnRJbmZvLmV2ZW50c1swXS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRNYXRjaFN0YXRzKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZGF0YWJhc2UuaW5pdEFsbElEQigpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBtYXRjaERhdGEuc3RvcmVNYXRjaERhdGEobWF0Y2hTdGF0cywgbWF0Y2hPdXRjb21lLCByb3VuZHNTdGF0cywgc2VsZikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCdldmVudHMnIGluIGV2ZW50SW5mbyAmJiBldmVudEluZm8uZXZlbnRzWzBdLm5hbWUgPT09ICdtYXRjaE91dGNvbWUnICYmICh0aGlzLmdhbWVNb2RlID09PSAnTUFUQ0hNQUtJTkdfUFZQJyB8fCB0aGlzLmdhbWVNb2RlID09PSAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcgfHwgdGhpcy5nYW1lTW9kZSA9PT0gJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcgfHwgdGhpcy5nYW1lTW9kZSA9PT0gJ0NVU1RPTUdBTUVfUFZQX0RFRElDQVRFRCcpKSB7XHJcbiAgICAgICAgICAgIG1hdGNoT3V0Y29tZSA9IGV2ZW50SW5mby5ldmVudHNbMF0uZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF0Y2hTdGF0cygpO1xyXG5cclxuICAgICAgICAgICAgb3dXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRhdGFiYXNlLmluaXRBbGxJREIoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gbWF0Y2hEYXRhLnN0b3JlTWF0Y2hEYXRhKG1hdGNoU3RhdHMsIG1hdGNoT3V0Y29tZSwgcm91bmRzU3RhdHMsIHNlbGYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbmZvRXZlbnQgXCIke2V2ZW50SW5mby5ldmVudHNbMF0ubmFtZX1cIiBcIiR7ZXZlbnRJbmZvLmV2ZW50c1swXS5kYXRhfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNYXRjaFN0YXRzKCkge1xyXG4gICAgICAgIGNvbnN0IGxhdGVzdFJvdW5kID0gcm91bmRzU3RhdHNbT2JqZWN0LmtleXMocm91bmRzU3RhdHMpLnJldmVyc2UoKVswXV07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgb3dQbGF5ZXJJZCBpbiBsYXRlc3RSb3VuZCkge1xyXG4gICAgICAgICAgICBpZiAobGF0ZXN0Um91bmQuaGFzT3duUHJvcGVydHkob3dQbGF5ZXJJZCkgJiYgb3dQbGF5ZXJJZCAhPT0gJ3JvdW5kT3V0Y29tZScpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0gPSB7fTtcclxuICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0ua2lsbHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hTdGF0c1tvd1BsYXllcklkXS5kZWF0aHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hTdGF0c1tvd1BsYXllcklkXS5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUExBWUVSUyBTT01FVEhJTUVTIFVOREVGSU5FRD8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXRzW293UGxheWVySWRdLnVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IHBsYXllcnNbb3dQbGF5ZXJJZF0udXNlci5jb3VudHJ5Q29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IHBsYXllcnNbb3dQbGF5ZXJJZF0uc3RhdHMucHJvZ3Jlc3Npb24ubGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbms6IHBsYXllcnNbb3dQbGF5ZXJJZF0uc3RhdHMucmFuay5yYW5rLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtbXI6IHBsYXllcnNbb3dQbGF5ZXJJZF0uc3RhdHMucmFuay5tbXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCByb3VuZCBpbiByb3VuZHNTdGF0cykge1xyXG4gICAgICAgICAgICBpZiAocm91bmRzU3RhdHMuaGFzT3duUHJvcGVydHkocm91bmQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3VuZFN0YXRzID0gcm91bmRzU3RhdHNbcm91bmRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3dQbGF5ZXJJZCBpbiByb3VuZFN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdW5kU3RhdHMuaGFzT3duUHJvcGVydHkob3dQbGF5ZXJJZCkgJiYgb3dQbGF5ZXJJZCAhPT0gJ3JvdW5kT3V0Y29tZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3dQbGF5ZXJTdGF0cyA9IHJvdW5kU3RhdHNbb3dQbGF5ZXJJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hTdGF0c1tvd1BsYXllcklkXS5uYW1lID0gb3dQbGF5ZXJTdGF0cy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXRzW293UGxheWVySWRdLnRlYW0gPSBvd1BsYXllclN0YXRzLnRlYW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0ua2lsbHMgKz0gb3dQbGF5ZXJTdGF0cy5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hTdGF0c1tvd1BsYXllcklkXS5kZWF0aHMgKz0gb3dQbGF5ZXJTdGF0cy5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0uc2NvcmUgKz0gb3dQbGF5ZXJTdGF0cy5zY29yZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUaGlzVmFsdWUodmFsdWU6IHN0cmluZywga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERldGFpbGVkT25DbGljaygpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5ZXItdHInKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCdXR0b24ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHBsYXllckJ1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKHRoaXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hEYXRhLnByaW50RGV0YWlsZWRQbGF5ZXIodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGV0YWlsZWRzdGF0dXMgPSBjb250cm9sbGVycy5zaG93RGV0YWlsZWRQbGF5ZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvdGtleVRleHQoKSB7XHJcbiAgICAgICAgY29udHJvbGxlcnMuc2V0U2hvcnRjdXRUZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0JykpO1xyXG5cclxuICAgICAgICBvdmVyd29sZi5zZXR0aW5ncy5ob3RrZXlzLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJzLnNldFNob3J0Y3V0VGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGFibGVUYWJEZWZhdWx0KCkge1xyXG4gICAgICAgIGNvdW50ID0gbG9jYWwudGFibGU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5hdkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZCdG5baV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFRhYiA9IG1haW5UYWJzW2NvdW50XTtcclxuICAgICAgICBjb250cm9sbGVycy5zZXRUYWJsZVRhYihjdXJyZW50VGFiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRhYmxlVGFiU2VsZWN0b3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmF2QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24odGhpczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiID0gdGhpcy5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2QnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVycy5zZXRUYWJsZVRhYihjdXJyZW50VGFiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRPd0tleUxpc3RlbmVyKCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmlucHV0VHJhY2tpbmcub25LZXlEb3duLmFkZExpc3RlbmVyKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJzQwJyB8fCBldmVudC5rZXkgPT09ICczOCcgfHwgZXZlbnQua2V5ID09PSAnMTMnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJBbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5ZXItdHInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50UGxheWVyc01heCA9IHBsYXllckFtb3VudC5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICcxMycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsZWRzdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRGF0YS5wcmludERldGFpbGVkUGxheWVyKHRhYmxlW2NvdW50UGxheWVyc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gY29udHJvbGxlcnMuc2hvd0RldGFpbGVkUGxheWVyKGRldGFpbGVkc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnNDAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50UGxheWVycyA9PT0gY291bnRQbGF5ZXJzTWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50UGxheWVycyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRQbGF5ZXJzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsZWRzdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hEYXRhLnByaW50RGV0YWlsZWRQbGF5ZXIodGFibGVbY291bnRQbGF5ZXJzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICczOCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRQbGF5ZXJzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50UGxheWVycyA9IGNvdW50UGxheWVyc01heDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudFBsYXllcnMtLTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhaWxlZHN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaERhdGEucHJpbnREZXRhaWxlZFBsYXllcih0YWJsZVtjb3VudFBsYXllcnNdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlW2NvdW50UGxheWVyc10pIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVtjb3VudFBsYXllcnNdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICczOScgfHwgZXZlbnQua2V5ID09PSAnMzcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnMzknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICczNycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IG1haW5UYWJzW2NvdW50XTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2QnRuW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzLnNldFRhYmxlVGFiKGN1cnJlbnRUYWIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERldGFpbGVkQmFja0J0bigpIHtcclxuICAgICAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gY29udHJvbGxlcnMuc2hvd0RldGFpbGVkUGxheWVyKHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUb2dnbGVIb3RrZXlCZWhhdmlvcigpIHtcclxuICAgICAgICBjb25zdCB0b2dnbGVJbkdhbWVXaW5kb3cgPSBhc3luYyBob3RrZXlSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJlc3NlZCBob3RrZXkgXCIke2hvdGtleVJlc3VsdC5mZWF0dXJlSWR9XCJgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluR2FtZVN0YXRlID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ25vcm1hbCcgfHwgaW5HYW1lU3RhdGUud2luZG93X3N0YXRlID09PSAnbWF4aW1pemVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdtaW5pbWl6ZWQnIHx8IGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gY29udHJvbGxlcnMuc2hvd0RldGFpbGVkUGxheWVyKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY291bnRQbGF5ZXJzID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgb3dXaW5kb3cuY2hhbmdlV2luZG93TG9jYXRpb24oJ2NlbnRlci1jZW50ZXInLCB3aW5kb3dJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZSh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIHdpbmRvdycgKyB3aW5kb3dOYW1lcy5zdGF0aXN0aWNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3dXaW5kb3cuY2hhbmdlV2luZG93U2l6ZSgnaW5fZ2FtZV9kZXNrdG9wX29ubHknLCAxNjAwLCA5MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPV0hvdGtleXMub25Ib3RrZXlEb3duKGhvdGtleXMudG9nZ2xlLCB0b2dnbGVJbkdhbWVXaW5kb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbkdhbWUuaW5zdGFuY2UoKS5ydW4oKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==