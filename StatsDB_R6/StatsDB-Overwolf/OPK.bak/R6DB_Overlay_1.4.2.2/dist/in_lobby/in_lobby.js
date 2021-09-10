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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/in_lobby/in_lobby.ts");
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

/***/ "./src/public/in_lobby/in_lobby.ts":
/*!*****************************************!*\
  !*** ./src/public/in_lobby/in_lobby.ts ***!
  \*****************************************/
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
const consts_1 = __webpack_require__(/*! ../../consts */ "./src/consts.ts");
const searchingDiv = document.getElementById('searching');
const overwolfStatusDiv = document.getElementById('overwolf-status');
const ineternetStatusDiv = document.getElementById('internet-status');
const navBtn = document.getElementsByClassName('nav-btn');
const circleDivs = document.getElementsByClassName('circle-div');
const settingsTabs = ['overview', 'daily-weekly', 'settings'];
let gameMode, gameStatus, windowId, owWindow, circleStats;
if (localStorage.desktopOnly === '"0"') {
    owWindow = new ow_window_1.OWWindow(consts_1.windowNames.inLobby);
    windowId = 'in_lobby';
}
else {
    owWindow = new ow_window_1.OWWindow(consts_1.windowNames.inLobbyDesktopOnly);
    windowId = 'in_lobby_desktop_only';
}
const database = new database_1.Database();
const controllers = new controllers_1.Controllers();
const localstorage = new localstorage_1.Localstorage();
const promise1 = localstorage.initiateLocalStorage()
    .then(() => controllers.setTheme());
controllers.getOverwolfStatus(overwolfStatusDiv);
controllers.getInternetStatus(ineternetStatusDiv);
controllers.setShortcutText(document.getElementById('shortcut-text'));
const overwolfStatusID = window.setInterval(() => controllers.getOverwolfStatus(overwolfStatusDiv), 60000);
const internetStatusID = window.setInterval(() => controllers.getInternetStatus(ineternetStatusDiv), 60000);
overwolf.settings.hotkeys.onChanged.addListener(() => {
    controllers.setShortcutText(document.getElementById('shortcut-text'));
});
addEventListener('storage', () => {
    controllers.setTheme();
    if (localStorage.desktopOnly === '"0"') {
        const promise = owWindow.scaleWindow('in_lobby', 420, 700, JSON.parse(localStorage.scaleSlider))
            .then(() => owWindow.changeWindowLocation('center-right', windowId));
    }
    else {
        owWindow.scaleWindow('in_lobby_desktop_only', 420, 700, JSON.parse(localStorage.scaleSlider));
    }
});
const statsNavBtn = document.getElementsByClassName('daily-weekly-nav-btn');
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
class InLobby extends AppWindow_1.AppWindow {
    constructor() {
        if (localStorage.desktopOnly === '"0"') {
            super(consts_1.windowNames.inLobby, 'settings_in_game', 'statistics_in_game');
            const promise = owWindow.scaleWindow('in_lobby', 420, 700, JSON.parse(localStorage.scaleSlider))
                .then(() => owWindow.changeWindowLocation('center-right', windowId));
        }
        else {
            super(consts_1.windowNames.inLobbyDesktopOnly, 'settings_desktop', 'statistics_desktop');
            owWindow.scaleWindow('in_lobby_desktop_only', 420, 700, JSON.parse(localStorage.scaleSlider));
        }
        owWindow.restore();
        this.setToggleHotkeyBehavior();
        this.setNavListeners();
        this._rainbowGameEventsListener = new ow_games_events_1.OWGamesEvents({
            onInfoUpdates: this.onInfoUpdates.bind(this),
            onNewEvents: this.onNewEvents.bind(this)
        }, consts_1.interestingFeatures1);
        const promise = database.initAllIDB()
            .then(() => database.displayDailyWeekly())
            .then(result => circleStats = result);
    }
    static instance() {
        if (!this._instance) {
            this._instance = new InLobby();
        }
        return this._instance;
    }
    run() {
        this._rainbowGameEventsListener.start();
    }
    onInfoUpdates(info) {
        if (('match_info' in info && 'game_mode' in info.match_info) || ('game_info' in info && 'phase' in info.game_info && info.game_info.phase === 'lobby')) {
            if (info.match_info) {
                gameMode = info.match_info.game_mode;
            }
            if (gameMode !== 'NONE') {
                gameStatus = 'searching';
                console.log(`game status "${gameStatus}"`);
                let matchMaking;
                if (gameMode.split('_')[2]) {
                    matchMaking = gameMode.split('_')[1] + ' ' + gameMode.split('_')[2];
                }
                else {
                    matchMaking = gameMode.split('_')[1];
                }
                document.getElementById('match-making-text').innerHTML = 'matchmaking ' + matchMaking;
                searchingDiv.style.display = 'block';
            }
            else {
                gameStatus = 'lobby';
                console.log(`game status "${gameStatus}"`);
                searchingDiv.style.display = 'none';
            }
        }
    }
    onNewEvents(eventInfo) {
    }
    setNavListeners() {
        for (let i = 0; i < navBtn.length; i++) {
            navBtn[i].addEventListener('click', function () {
                for (let j = 0; j < navBtn.length; j++) {
                    navBtn[j].classList.remove('active');
                    document.getElementById(settingsTabs[j]).style.display = 'none';
                }
                this.classList.add('active');
                document.getElementById(settingsTabs[i]).style.display = 'block';
            });
        }
    }
    setToggleHotkeyBehavior() {
        return __awaiter(this, void 0, void 0, function* () {
            const toggleInLobbyWindow = (hotkeyResult) => __awaiter(this, void 0, void 0, function* () {
                console.log(`'info': { pressed hotkey for ${hotkeyResult.featureId} }`);
                if (localStorage.desktopOnly === '"0"') {
                    const inGameState = yield this.getWindowState();
                    if (inGameState.window_state === 'normal' || inGameState.window_state === 'maximized') {
                        this.currWindow.minimize();
                    }
                    else if (inGameState.window_state === 'minimized' || inGameState.window_state === 'closed') {
                        this.currWindow.restore();
                    }
                    owWindow.changeWindowLocation('center-right', windowId);
                }
                else {
                    owWindow.changeWindowSize('in_lobby_desktop_only', 420, 700);
                }
                overwolf.windows.close(consts_1.windowNames.settings, () => {
                    console.log('close window' + consts_1.windowNames.settings);
                });
                overwolf.windows.close(consts_1.windowNames.statistics, () => {
                    console.log('close window' + consts_1.windowNames.statistics);
                });
            });
            ow_hotkeys_1.OWHotkeys.onHotkeyDown(consts_1.hotkeys.toggle, toggleInLobbyWindow);
        });
    }
}
InLobby.instance().run();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2NvbnRyb2xsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy1nYW1lcy1ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy1ob3RrZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctd2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9BcHBXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbl9sb2JieS9pbl9sb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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O1FBQ2hFLENBQUM7S0FBQTtDQUNKO0FBRUQsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6ImluX2xvYmJ5L2luX2xvYmJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVibGljL2luX2xvYmJ5L2luX2xvYmJ5LnRzXCIpO1xuIiwiY29uc3QgcmFpbmJvd0NsYXNzSWQgPSAxMDgyNjtcclxuXHJcbmNvbnN0IGludGVyZXN0aW5nRmVhdHVyZXMxID0gW1xyXG4gICAgJ2dlcF9pbnRlcm5hbCcsXHJcbiAgICAnZ2FtZV9pbmZvJyxcclxuICAgICdtYXRjaCcsXHJcbiAgICAnbWF0Y2hfaW5mbycsXHJcbiAgICAncm9zdGVyJyxcclxuICAgICdraWxsJyxcclxuICAgICdkZWF0aCcsXHJcbiAgICAnbWUnLFxyXG5dO1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczIgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuXTtcclxuXHJcbmNvbnN0IHdpbmRvd05hbWVzID0ge1xyXG4gICAgZGVza3RvcDogJ2Rlc2t0b3AnLFxyXG4gICAgaW5Mb2JieTogJ2luX2xvYmJ5JyxcclxuICAgIGluR2FtZTogJ2luX2dhbWUnLFxyXG4gICAgaW5Mb2JieURlc2t0b3BPbmx5OiAnaW5fbG9iYnlfZGVza3RvcF9vbmx5JyxcclxuICAgIGluR2FtZURlc2t0b3BPbmx5OiAnaW5fZ2FtZV9kZXNrdG9wX29ubHknLFxyXG4gICAgc2V0dGluZ3M6ICdzZXR0aW5nc19pbl9nYW1lJyxcclxuICAgIHNldHRpbmdzRGVza3RvcE9ubHk6ICdzZXR0aW5nc19kZXNrdG9wJyxcclxuICAgIHN0YXRpc3RpY3M6ICdzdGF0aXN0aWNzX2luX2dhbWUnLFxyXG4gICAgc3RhdGlzdGljc0Rlc2t0b3BPbmx5OiAnc3RhdGlzdGljc19kZXNrdG9wJ1xyXG59O1xyXG5cclxuY29uc3QgaG90a2V5cyA9IHtcclxuICAgIHRvZ2dsZTogJ3Nob3doaWRlJyxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWRSA9IFtcclxuICAgICdPUEVSQVRJT05TJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfTE9ORVdPTEYnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRScsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFX1BBUlRZJyxcclxuXTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWUCA9IFtcclxuICAgICdNQVRDSE1BS0lOR19QVlBfTkVXQ09NRVInLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX0VWRU5UJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9SQU5LRUQnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQJyxcclxuICAgICdDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQnLFxyXG5dO1xyXG5cclxuY29uc3QgZGF0YWJhc2VPYmplY3QgPSB7XHJcbiAgICBNQVRDSE1BS0lOR19QVlBfUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZWFzb25Db2xvcnMgPSB7XHJcbiAgICA2OicjMDA1MGIzJyxcclxuICAgIDc6JyNjYTM2MWMnLFxyXG4gICAgODonIzAwNjU0MycsXHJcbiAgICA5OicjZmZjMTEzJyxcclxuICAgIDEwOicjOTQ5ZjM5JyxcclxuICAgIDExOicjODFhMGMxJyxcclxuICAgIDEyOicjYWE4NTRmJyxcclxuICAgIDEzOicjZDIwMDVhJyxcclxuICAgIDE0OicjMzA0Mzk1JyxcclxuICAgIDE1OicjMTM2MzBjJyxcclxuICAgIDE2OicjMDY5ZGIzJyxcclxuICAgIDE3OicjOTQ2YTk3JyxcclxuICAgIDE4OicjMmI3ZTlhJyxcclxuICAgIDE5OicjNmNhNTExJyxcclxuICAgIDIwOicjZDE0MDA3JyxcclxufVxyXG5cclxuY29uc3Qgb3BlcmF0b3JzID0ge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU2xlZGdlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoxXCJcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhhdGNoZXJcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjFcIlxyXG4gICAgfSxcclxuICAgIDUxMzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MlwiXHJcbiAgICB9LFxyXG4gICAgMTAyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRoZXJtaXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToyXCJcclxuICAgIH0sXHJcbiAgICA3NzA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUd2l0Y2hcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjNcIlxyXG4gICAgfSxcclxuICAgIDEwMjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb250YWduZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6M1wiXHJcbiAgICB9LFxyXG4gICAgMjU5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR2xhelwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NFwiXHJcbiAgICB9LFxyXG4gICAgNTE1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnV6ZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NFwiXHJcbiAgICB9LFxyXG4gICAgMjYwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmxpdHpcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjVcIlxyXG4gICAgfSxcclxuICAgIDUxNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklRXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo1XCJcclxuICAgIH0sXHJcbiAgICAyNjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCdWNrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo2XCJcclxuICAgIH0sXHJcbiAgICAyNjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGFja2JlYXJkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo3XCJcclxuICAgIH0sXHJcbiAgICAyNjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXBpdGFvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo4XCJcclxuICAgIH0sXHJcbiAgICAyNjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJIaWJhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjlcIlxyXG4gICAgfSxcclxuICAgIDI2NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphY2thbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QVwiXHJcbiAgICB9LFxyXG4gICAgMjY2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWWluZ1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QlwiXHJcbiAgICB9LFxyXG4gICAgNTIzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWm9maWFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkNcIlxyXG4gICAgfSxcclxuICAgIDI2ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRva2thZWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpEXCJcclxuICAgIH0sXHJcbiAgICA1MjU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMaW9uXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpFXCJcclxuICAgIH0sXHJcbiAgICA3ODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGaW5rYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6RVwiXHJcbiAgICB9LFxyXG4gICAgMjcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWF2ZXJpY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEwXCJcclxuICAgIH0sXHJcbiAgICAyNzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb21hZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTFcIlxyXG4gICAgfSxcclxuICAgIDUyOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdyaWRsb2NrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMlwiXHJcbiAgICB9LFxyXG4gICAgMjc0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTm9ra1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTNcIlxyXG4gICAgfSxcclxuICAgIDI3Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFtYXJ1XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNlwiXHJcbiAgICB9LFxyXG4gICAgMjc4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FsaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTdcIlxyXG4gICAgfSxcclxuICAgIDI4MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE5XCJcclxuICAgIH0sXHJcbiAgICA3OTA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBY2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjE3XCJcclxuICAgIH0sXHJcbiAgICAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlplcm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIxOjFCXCJcclxuICAgIH0sXHJcbiAgICAxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUmVjcnVpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcInJlY3J1aXRcIlxyXG4gICAgfSxcclxuICAgIDI1Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlNtb2tlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxXCJcclxuICAgIH0sXHJcbiAgICA1MTI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNdXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxXCJcclxuICAgIH0sXHJcbiAgICAyNTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXN0bGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjJcIlxyXG4gICAgfSxcclxuICAgIDc2OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlB1bHNlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoyXCJcclxuICAgIH0sXHJcbiAgICAyNTg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJEb2NcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjNcIlxyXG4gICAgfSxcclxuICAgIDUxNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlJvb2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjNcIlxyXG4gICAgfSxcclxuICAgIDc3MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthcGthblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NFwiXHJcbiAgICB9LFxyXG4gICAgMTAyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRhY2hhbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo0XCJcclxuICAgIH0sXHJcbiAgICA3NzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJKYWdlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NVwiXHJcbiAgICB9LFxyXG4gICAgMTAyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJhbmRpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnJvc3RcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjZcIlxyXG4gICAgfSxcclxuICAgIDUxODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlZhbGt5cmllXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo3XCJcclxuICAgIH0sXHJcbiAgICA1MTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXZlaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo4XCJcclxuICAgIH0sXHJcbiAgICA1MjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJFY2hvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo5XCJcclxuICAgIH0sXHJcbiAgICA1MjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpBXCJcclxuICAgIH0sXHJcbiAgICA1MjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMZXNpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkJcIlxyXG4gICAgfSxcclxuICAgIDI2Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVsYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6Q1wiXHJcbiAgICB9LFxyXG4gICAgNTI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmlnaWxcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkRcIlxyXG4gICAgfSxcclxuICAgIDI3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1hZXN0cm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFsaWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpGXCJcclxuICAgIH0sXHJcbiAgICA1Mjc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDbGFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTBcIlxyXG4gICAgfSxcclxuICAgIDUyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthaWRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjExXCJcclxuICAgIH0sXHJcbiAgICAyNzM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb3p6aWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYXJkZW5cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE0XCJcclxuICAgIH0sXHJcbiAgICAyNzY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHb3lvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNVwiXHJcbiAgICB9LFxyXG4gICAgNTM0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiV2FtYWlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjE3XCJcclxuICAgIH0sXHJcbiAgICAyNzk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJPcnl4XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxOFwiXHJcbiAgICB9LFxyXG4gICAgMjgxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWVsdXNpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxQVwiXHJcbiAgICB9LFxyXG4gICAgMTA0Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFydW5pXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToxN1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByYW5rT2Zmc2V0ID0ge1xyXG4gICAgMDogMCxcclxuICAgIDE6IDIsXHJcbiAgICAyOiAzLFxyXG4gICAgMzogNCxcclxuICAgIDQ6IDUsXHJcbiAgICA1OiA3LFxyXG4gICAgNjogOCxcclxuICAgIDc6IDksXHJcbiAgICA4OiAxMCxcclxuICAgIDk6IDEyLFxyXG4gICAgMTA6IDEzLFxyXG4gICAgMTE6IDE0LFxyXG4gICAgMTI6IDE1LFxyXG4gICAgMTM6IDUwLFxyXG4gICAgMTQ6IDE2LFxyXG4gICAgMTU6IDE3LFxyXG4gICAgMTY6IDE4LFxyXG4gICAgMTc6IDE5LFxyXG4gICAgMTg6IDIwLFxyXG4gICAgMTk6IDIxLFxyXG4gICAgMjA6IDIyLFxyXG4gICAgMjE6IDIyLFxyXG4gICAgMjI6IDIyLFxyXG4gICAgMjM6IDIyLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJhaW5ib3dDbGFzc0lkLFxyXG4gICAgaW50ZXJlc3RpbmdGZWF0dXJlczEsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMixcclxuICAgIHdpbmRvd05hbWVzLFxyXG4gICAgaG90a2V5cyxcclxuICAgIGdhbWVNb2Rlc1BWUCxcclxuICAgIGdhbWVNb2Rlc1BWRSxcclxuICAgIGRhdGFiYXNlT2JqZWN0LFxyXG4gICAgc2Vhc29uQ29sb3JzLFxyXG4gICAgcmFua09mZnNldCxcclxuICAgIG9wZXJhdG9yc1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sbGVycyB7XHJcbiAgICBwdWJsaWMgc2V0U2hvcnRjdXRUZXh0KHNob3J0Y3V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLmhvdGtleXMuZ2V0KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBob3RrZXkgPSByZXN1bHQuZ2FtZXNbJzEwODI2J11bMF0uYmluZGluZztcclxuXHJcbiAgICAgICAgICAgIGlmIChob3RrZXkgPT09ICdVbmFzc2lnbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gJ1VOQVNTSUdORUQgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3J0Y3V0Q29udGFpbmVyLmlubmVySFRNTCA9IGhvdGtleSArICcgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5IGluIGdhbWUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYXBwIGhvdGtleSBcIiR7aG90a2V5fVwiYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE92ZXJ3b2xmU3RhdHVzKG92ZXJ3b2xmU3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2dhbWUtZXZlbnRzLXN0YXR1cy5vdmVyd29sZi5jb20vMTA4MjZfcHJvZC5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJ3b2xmU3RhdHVzID0gZGF0YS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIHNvbWUgZnVuY3Rpb25zIG1pZ2h0IG5vdCB3b3JrIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIE92ZXJ3b2xmIGFwcCBBUEkgaGFzIHN0b3BwZWQgd29ya2luZyAtIHdl4oCZbGwgZml4IGl0IHNob3J0bHk8L2g0Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJ3b2xmU3RhdHVzID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcndvbGZTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb3ZlcndvbGYgc3RhdHVzIFwiJHtvdmVyd29sZlN0YXR1c31cImApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW50ZXJuZXRTdGF0dXMoaW5ldGVybmV0U3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGludGVybmV0U3RhdHVzID0gbmF2aWdhdG9yLm9uTGluZTtcclxuXHJcbiAgICAgICAgaWYgKGludGVybmV0U3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5ldGVybmV0U3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgaW50ZXJuZXQgc3RhdHVzIFwiJHtpbnRlcm5ldFN0YXR1c31cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUYWJsZVRhYih0YWI6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItdHJcIikubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtlZFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmtlZCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXN1YWxTdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXN1YWwnICsgaSArIGopO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vhc29uU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vhc29uYWwnICsgaSArIGopO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyYW5rZWRTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWIgPT09ICdyYW5rZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdjYXN1YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdzZWFzb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCB0YWJsZSB0YWIgXCIke3RhYn1cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGV0YWlsZWRQbGF5ZXIoZGV0YWlsZWRzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoZGV0YWlsZWRzdGF0dXMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1ib2R5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZGV0YWlsZWRzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGRldGFpbGVkIHN0YXRzIFwiJHshZGV0YWlsZWRzdGF0dXN9XCJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRldGFpbGVkc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUaGVtZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVWYXJpYWJsZXMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZC50aGVtZSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiNGMEYwRjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkY2MVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjMTIxMjEyXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI0ZGRkZGRjE0XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiMwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRjFFXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkYzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwidXJsKCcvaW1nL2JhY2tncm91bmQud2VicCcpXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItbGlnaHQtbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtaG92ZXItY29sb3JcIiwgXCIjMzMzMzMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjYjBiMGIwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjOTk5OTk5XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93bi1idG4tY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItZGFyay1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hDb25maWcoKSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vc3RhZ2luZy1hcGkuc3RhdHNkYi5uZXQvcjYvb3ZlcmxheS9jb25maWcnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5jb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnZlcnNpb24gIT0gZGF0YS5wYXlsb2FkLnJhaW5ib3cudmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5wYXlsb2FkLnJhaW5ib3cpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbmZpZycpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkYXRhYmFzZU9iamVjdCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xyXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUlEQihuYW1lSURCOiBzdHJpbmcsIGtleVBhdGhJREI6IHN0cmluZywgdmVyc2lvbjogbnVtYmVyLCBpbmRleGVzID0gbnVsbCk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJywgdmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmU6IElEQk9iamVjdFN0b3JlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShuYW1lSURCLCB7IGtleVBhdGg6IGtleVBhdGhJREIgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGV2ZW50LnRhcmdldC50cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KGluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG9iamVjdFN0b3JlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdG9yZVRvSURCKG5hbWVJREI6IHN0cmluZywgdmFsdWVJREIsIGluaXRpYXRlSURCOiBib29sZWFuKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYk9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWR3cml0ZScpLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5pdGlhdGVJREIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYk9iamVjdFN0b3JlLnB1dCh2YWx1ZUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYXRlSURCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGJPYmplY3RTdG9yZS5hZGQodmFsdWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVhZEZyb21JREIobmFtZUlEQjogc3RyaW5nLCBrZXlJREI6IG51bWJlciB8IHN0cmluZyk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERiID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RGIuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdERiLmVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdERiLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiT2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBkYk9iamVjdFN0b3JlLmdldChrZXlJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVhZEZyb21JREJSYW5nZShuYW1lSURCOiBzdHJpbmcsIGluZGV4OiBzdHJpbmcsIGJlZ2luUmFuZ2U6IHN0cmluZywgZW5kUmFuZ2U6IHN0cmluZywgYmVnaW46IG51bWJlciwgZW5kOiBudW1iZXIpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYiA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcbiAgICAgICAgICAgIGxldCBrZXlSYW5nZVZhbHVlOiBJREJLZXlSYW5nZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZWdpblJhbmdlICYmIGVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UuYm91bmQoYmVnaW5SYW5nZSwgZW5kUmFuZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJlZ2luUmFuZ2UgJiYgIWVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UubG93ZXJCb3VuZChiZWdpblJhbmdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghYmVnaW5SYW5nZSAmJiBlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLnVwcGVyQm91bmQoZW5kUmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERiLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3REYi5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3REYi5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkb25seScpLm9iamVjdFN0b3JlKG5hbWVJREIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuaW5kZXgoaW5kZXgpLm9wZW5DdXJzb3Ioa2V5UmFuZ2VWYWx1ZSwgJ3ByZXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDAsIGogPSAwLCByZXN1bHQgPSBuZXcgT2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IHJlcXVlc3QucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZWdpbiAhPT0gMCAmJiBpID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuYWR2YW5jZShiZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGJlZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnNvciAmJiBpIDw9IGVuZCAmJiBpID49IGJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbY3Vyc29yLnZhbHVlLnRpbWVTdGFtcF0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGN1cnNvci52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbml0QWxsSURCKCk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kYXk6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZZZWFyOiBhbnkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgcGFzdERheXNPZlllYXI6IGFueSA9ICh0b2RheSAtIGZpcnN0RGF5T2ZZZWFyKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qga2V5SURCV2Vla3MgPSBgJHtNYXRoLmNlaWwoKHBhc3REYXlzT2ZZZWFyICsgZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyAxKSAvIDcpfSwke3RvZGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgICAgY29uc3Qga2V5SURCRGF5cyA9IHRvZGF5LmdldERhdGUoKSArICcsJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLCcgKyB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbHVlSURCV2Vla3M6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVJREJXZWVrc1tpXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2VPYmplY3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZUlEQldlZWtzLndlZWsgPSBrZXlJREJXZWVrcztcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUlEQkRheXM6IGFueSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2VPYmplY3QpKTtcclxuICAgICAgICAgICAgdmFsdWVJREJEYXlzLmRhdGUgPSBrZXlJREJEYXlzO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTEgPSB0aGlzLnN0b3JlVG9JREIoJ3dlZWtzJywgdmFsdWVJREJXZWVrcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UyID0gdGhpcy5zdG9yZVRvSURCKCdkYXlzJywgdmFsdWVJREJEYXlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTJdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZGlzcGxheURhaWx5V2Vla2x5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kYXk6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZZZWFyOiBhbnkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgcGFzdERheXNPZlllYXI6IGFueSA9ICh0b2RheSAtIGZpcnN0RGF5T2ZZZWFyKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qga2V5SURCV2Vla3MgPSBgJHtNYXRoLmNlaWwoKHBhc3REYXlzT2ZZZWFyICsgZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyAxKSAvIDcpfSwke3RvZGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgICAgY29uc3Qga2V5SURCRGF5cyA9IHRvZGF5LmdldERhdGUoKSArICcsJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLCcgKyB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmdzJykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTEgPSB0aGlzLnJlYWRGcm9tSURCKCd3ZWVrcycsIGtleUlEQldlZWtzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0V2VlayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdlZWtseVN0YXRzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2VuZXJhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhc3VhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVucmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAua2lsbHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLndpbnMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3ZWVrbHlTdGF0cykuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGUgPSB3ZWVrbHlTdGF0c1tvYmpdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNb2RlLmRlYXRocyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICgoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMpLnRvRml4ZWQoMikpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gTWF0aC5yb3VuZChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocyAqIDMzKSArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZGUuZGVhdGhzID09PSAwICYmIGdhbWVNb2RlLmtpbGxzICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJ0lORic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzEwMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJzAuMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gKE1hdGgucm91bmQoZ2FtZU1vZGUud2lucyAvIChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAqIDEwMCkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gZ2FtZU1vZGUud2wgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gcGFyc2VGbG9hdCh3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5LXRleHQnKS5pbm5lckhUTUwgPSB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLndsICsgJyUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlZWtseVN0YXRzOlwiLCB3ZWVrbHlTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrbHlTdGF0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTIgPSB0aGlzLnJlYWRGcm9tSURCKCdkYXlzJywga2V5SURCRGF5cylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdERheSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYWlseVN0YXRzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdlbmVyYWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmtpbGxzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAud2lucyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhc3VhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6ICByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVucmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGFpbHlTdGF0cykuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGUgPSBkYWlseVN0YXRzW29ial07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZGUuZGVhdGhzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICgoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMpLnRvRml4ZWQoMikpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gTWF0aC5yb3VuZChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocyAqIDMzKSArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZGUuZGVhdGhzID09PSAwICYmIGdhbWVNb2RlLmtpbGxzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICdJTkYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcxMDAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICcwLjAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAoTWF0aC5yb3VuZChnYW1lTW9kZS53aW5zIC8gKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICogMTAwKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSBnYW1lTW9kZS53bCArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS53bCArICclJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYWlseVN0YXRzOlwiLCBkYWlseVN0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhaWx5U3RhdHM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHNOYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYWlseS13ZWVrbHktbmF2LWJ0bicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRzTmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0c05hdkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3MuY2lyY2xlKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTJdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4vb3ctd2luZG93JztcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzLCBvd1dpbmRvdzogT1dXaW5kb3cgPSBuZXcgT1dXaW5kb3c7XHJcblxyXG5sZXQgbG9jYWxEZXNrdG9wT25seSA9IGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSwgdmFsdWVzQ3VzdG9tLCBsb2NhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBkdGFibGU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGR0aGVtZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1heGltaXplOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkZGlzcGxheTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1vbml0b3JzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkY2lyY2xlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRhYmxlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kdGhlbWUgLmN1c3RvbS1vcHRpb24nKSA7XHJcbiAgICAgICAgdGhpcy5kbWF4aW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbWF4aW1pemUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZGRpc3BsYXkgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRtb25pdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRjaXJjbGUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zZXR0aW5ncyB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykpLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAndGFibGUnOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21heGltaXplJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGhlbWVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGVcIjogXCJnZW5lcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtb25pdG9ySWRcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NjYWxlU2xpZGVyJywgJ1wiMVwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlIHx8IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKSkubGVuZ3RoIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZhbHVlc1RhYmxlJywgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIDAgOiAnQ291bnRyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgMSA6ICdMVkwnLFxyXG4gICAgICAgICAgICAgICAgICAgIDIgOiAnS2lsbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDMgOiAnRGVhdGhzJyxcclxuICAgICAgICAgICAgICAgICAgICA0IDogJ0svRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgNSA6ICdXaW5zJyxcclxuICAgICAgICAgICAgICAgICAgICA2IDogJ0xvc3NlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgNyA6ICdXL0wnLFxyXG4gICAgICAgICAgICAgICAgICAgIDggOiAnSGFja2VyICUnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVza3RvcE9ubHknLCAnXCIwXCInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTZXR0aW5nKHNlbGVjdGVkT3B0aW9uOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nSWQgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NldHRpbmdpZCcpO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy12YWx1ZVRhYmxlJykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCd2YWx1ZXNUYWJsZScsIHZhbHVlc0N1c3RvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kdGhlbWUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLnRoZW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcblxyXG4gICAgICAgICAgICBjb250cm9sbGVycy5zZXRUaGVtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRhYmxlJykge1xyXG4gICAgICAgICAgICBsb2NhbC50YWJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGRpc3BsYXknKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnZGVza3RvcE9ubHknLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbWF4aW1pemUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1heGltaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbW9uaXRvcnMnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1vbml0b3JJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGNpcmNsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwuY2lyY2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kc2xpZGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NjYWxlU2xpZGVyJywgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBjaXJjbGVzID0ge1xyXG4gICAgICAgICAgICBcImdlbmVyYWxcIiA6IDAsXHJcbiAgICAgICAgICAgIFwicmFua2VkXCIgOiAxLFxyXG4gICAgICAgICAgICBcImNhc3VhbFwiIDogMixcclxuICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDogM1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NBcnIgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuZHRhYmxlW2xvY2FsLnRhYmxlXSxcclxuICAgICAgICAgICAgdGhpcy5kdGhlbWVbbG9jYWwudGhlbWVdLFxyXG4gICAgICAgICAgICB0aGlzLmRtYXhpbWl6ZVtsb2NhbC5tYXhpbWl6ZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZGRpc3BsYXlbbG9jYWxEZXNrdG9wT25seS5yZXBsYWNlKC9cIi9nLCAnJyldLFxyXG4gICAgICAgICAgICB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdLFxyXG4gICAgICAgICAgICB0aGlzLmRjaXJjbGVbY2lyY2xlc1tsb2NhbC5jaXJjbGVdXSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXR0aW5nID0gc2V0dGluZ3NBcnJbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZyAhPT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9uLnNlbGVjdGVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nID09PSB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1vbml0b3JzIC5jdXN0b20tb3B0aW9uJylbbG9jYWwubW9uaXRvcklkXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuZ2V0TW9uaXRvcnNMaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihtb25pdG9yTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBtb25pdG9yTGlzdC5kaXNwbGF5c1tsb2NhbC5tb25pdG9ySWRdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlcicpIGFzIGFueSkudmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyLXZhbHVlJykuaW5uZXJIVE1MID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERlZmF1bHQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNDdXN0b21baV0ucmVwbGFjZSgvWyAvXS9nLCAnLScpICsgaTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBzZXR0aW5nLnRleHRDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vdGltZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlIHtcclxuICAgIG9uSW5mb1VwZGF0ZXMoaW5mbzogYW55KTtcclxuICAgIG9uTmV3RXZlbnRzKGU6IGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPV0dhbWVzRXZlbnRzIHtcclxuICAgIHByaXZhdGUgX2RlbGVnYXRlOiBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWlyZWRGZWF0dXJlczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IElPV0dhbWVzRXZlbnRzRGVsZWdhdGUsIHJlcXVpcmVkRmVhdHVyZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlZEZlYXR1cmVzID0gcmVxdWlyZWRGZWF0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0SW5mbygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMuZ2V0SW5mbyhyZXNvbHZlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBsZXQgdHJpZXM6bnVtYmVyID0gMSxcclxuICAgICAgICByZXN1bHQ7XHJcblxyXG4gICAgICAgIHdoaWxlICggdHJpZXMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLnNldFJlcXVpcmVkRmVhdHVyZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWRGZWF0dXJlcyxcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKCByZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBzdWNjZXNzOiAnKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocmVzdWx0LnN1cHBvcnRlZEZlYXR1cmVzLmxlbmd0aCA+IDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBUaW1lci53YWl0KDMwMDApO1xyXG4gICAgICAgICAgICB0cmllcysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdzZXRSZXF1aXJlZEZlYXR1cmVzKCk6IGZhaWx1cmUgYWZ0ZXIgJysgdHJpZXMgKycgdHJpZXMnKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudHMoKTtcclxuXHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uSW5mb1VwZGF0ZXMyLmFkZExpc3RlbmVyKHRoaXMub25JbmZvVXBkYXRlcyk7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uTmV3RXZlbnRzLmFkZExpc3RlbmVyKHRoaXMub25OZXdFdmVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5SZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25JbmZvVXBkYXRlczIucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkluZm9VcGRhdGVzKTtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25OZXdFdmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5vbk5ld0V2ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkluZm9VcGRhdGVzID0gKGluZm86IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uSW5mb1VwZGF0ZXMoaW5mby5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTmV3RXZlbnRzID0gKGU6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uTmV3RXZlbnRzKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW293LWdhbWUtZXZlbnRzXSBTVEFSVGApO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0UmVxdWlyZWRGZWF0dXJlcygpO1xyXG5cclxuICAgICAgICBsZXQgdHJpZXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgcmVzLCBzdGF0dXMgfSA9IGF3YWl0IHRoaXMuZ2V0SW5mbygpO1xyXG5cclxuICAgICAgICBpZiAoIHJlcyAmJiBzdGF0dXMgPT09ICdzdWNjZXNzJyApIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluZm9VcGRhdGVzKHsgaW5mbzogcmVzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW293LWdhbWUtZXZlbnRzXSBTVE9QYCk7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE9XSG90a2V5cyB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgZ2V0SG90a2V5VGV4dChob3RrZXlJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuZ2V0SG90S2V5KGhvdGtleUlkLCByZXN1bHQgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuc3VjY2VzcyB8fCAhcmVzdWx0LmhvdGtleSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlc29sdmUoJ1VOQVNTSUdORUQnKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5ob3RrZXkpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9uSG90a2V5RG93bihob3RrZXlJZDogc3RyaW5nLCBhY3Rpb246IChob3RrZXlSZXN1bHQ6IG92ZXJ3b2xmLnNldHRpbmdzLkhvdEtleVJlc3VsdCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLnJlZ2lzdGVySG90S2V5KGhvdGtleUlkLCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsInR5cGUgR2V0V2luZG93U3RhdGVSZXN1bHQgPSBvdmVyd29sZi53aW5kb3dzLkdldFdpbmRvd1N0YXRlUmVzdWx0O1xyXG50eXBlIE93V2luZG93SW5mbyA9IG92ZXJ3b2xmLndpbmRvd3MuV2luZG93SW5mbztcclxuZXhwb3J0IGNsYXNzIE9XV2luZG93IHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVzdG9yZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IHJlc3RvcmVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLnJlc3RvcmUoaWQsIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtyZXN0b3JlXSAtIGFuIGVycm9yIG9jY3VycmVkLCB3aW5kb3dJZD0ke2lkfSwgcmVhc29uPSR7cmVzdWx0LmVycm9yfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtaW5pbWl6ZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWluaW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBicmluZ1RvRnJvbnQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtaW5pbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmJyaW5nVG9Gcm9udChpZCwgdHJ1ZSwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1heGltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWF4aW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm1heGltaXplKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaGlkZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IGhpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5oaWRlKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIChyZXN1bHQud2luZG93X3N0YXRlICE9PSAnY2xvc2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW50ZXJuYWxDbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoYW5nZVdpbmRvd1NpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVNpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQsIChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93TG9jYXRpb24obW9kZSwgd2luZG93SWQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gcmVzdWx0LndpbmRvdy53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHJlc3VsdC53aW5kb3cuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KChtb25pdG9yUmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvcklkOiBzdHJpbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykubW9uaXRvcklkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yV2lkdGggPSBtb25pdG9yUmVzLmRpc3BsYXlzW21vbml0b3JJZF0ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvckhlaWdodCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVmdDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnY2VudGVyLWNlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbW9uaXRvcldpZHRoIC8gMiAtICh3aW5kb3dXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2VudGVyLXJpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAobW9uaXRvcldpZHRoIC0gd2luZG93V2lkdGgpIC0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jaGFuZ2VQb3NpdGlvbih3aW5kb3dJZCwgTWF0aC5yb3VuZChsZWZ0KSwgTWF0aC5yb3VuZCh0b3ApLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzY2FsZVdpbmRvdyh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpOiBQcm9taXNlIDwgdm9pZCA+ICB7XHJcbiAgICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWA7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9nYW1lJyB8fCB3aW5kb3dJZCA9PT0gJ2luX2dhbWVfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgY2FsYygke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSUgLSAzMnB4KWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5JyB8fCB3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY2FsZSA8PSAwLjYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmFnTW92ZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGVsZW0ub25tb3VzZWRvd24gPSBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmRyYWdNb3ZlKHRoaXMuX25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TW9uaXRvcnNMaXN0KCk6IFByb21pc2UgPCBhbnkgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgYW55ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCk6IFByb21pc2UgPCBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRXaW5kb3dTdGF0ZShpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEN1cnJlbnRJbmZvKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgT3dXaW5kb3dJbmZvID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3cocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LndpbmRvdyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9idGFpbigpOiBQcm9taXNlIDwgT3dXaW5kb3dJbmZvIHwgbnVsbCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYiA9IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJyAmJiByZXMud2luZG93ICYmIHJlcy53aW5kb3cuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHJlcy53aW5kb3cuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gcmVzLndpbmRvdy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMud2luZG93KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coY2IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5vYnRhaW5EZWNsYXJlZFdpbmRvdyh0aGlzLl9uYW1lLCBjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYXNzdXJlT2J0YWluZWQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQub2J0YWluKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGludGVybmFsQ2xvc2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKGlkLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFRpbWVyRGVsZWdhdGUge1xyXG4gICAgb25UaW1lcihpZD86IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBUaW1lciB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgX3RpbWVySWQ6IG51bWJlcnxudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBfZGVsZWdhdGU6IFRpbWVyRGVsZWdhdGU7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdhaXQoaW50ZXJ2YWxJbk1TOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgaW50ZXJ2YWxJbk1TKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IFRpbWVyRGVsZWdhdGUsIGlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIHN0YXJ0KGludGVydmFsSW5NUzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3RpbWVySWQgPSA8bnVtYmVyPnNldFRpbWVvdXQodGhpcy5oYW5kbGVUaW1lckV2ZW50LCBpbnRlcnZhbEluTVMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGhhbmRsZVRpbWVyRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25UaW1lcih0aGlzLl9pZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi9vZGstdHMvb3ctd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xyXG4gICAgcHJvdGVjdGVkIGN1cnJXaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIG1haW5XaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIHNldHRpbmdzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYXhpbWl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3dOYW1lOiBzdHJpbmcsIHNldHRpbmdzV2luZG93SWQ6IHN0cmluZywgc3RhdHNpc3RpY3NXaW5kb3dJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tYWluV2luZG93ID0gbmV3IE9XV2luZG93KCdiYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5jdXJyV2luZG93ID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coc2V0dGluZ3NXaW5kb3dJZCk7XHJcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93ID0gbmV3IE9XV2luZG93KHN0YXRzaXN0aWNzV2luZG93SWQpO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1heGltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heGltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemVCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nc0J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVIaXN0b3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVIaXN0b3J5Jyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VXaW5kb3dCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VXaW5kb3dCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0TWluaW1pemVNb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsTWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93TmFtZSA9PT0gJ2Rlc2t0b3AnIHx8IHdpbmRvd05hbWUgPT09ICdzZXR0aW5nc19kZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc3RhdGlzdGljc19kZXNrdG9wJyB8fCBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjFcIicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VXaW5kb3dCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWluaW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4aW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWF4aW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWF4aW1pemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1heGltaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhpbWl6ZWQgPSAhdGhpcy5tYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVIaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIGdhbWVIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxDYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxNaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbE1pbmltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmN1cnJXaW5kb3cuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldERyYWcoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cuZHJhZ01vdmUoZWxlbSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwV2luZG93IH0gZnJvbSAnLi4vQXBwV2luZG93JztcclxuaW1wb3J0IHsgT1dHYW1lc0V2ZW50cyB9IGZyb20gJy4uLy4uL29kay10cy9vdy1nYW1lcy1ldmVudHMnO1xyXG5pbXBvcnQgeyBPV0hvdGtleXMgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctaG90a2V5cyc7XHJcbmltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi4vLi4vb2RrLXRzL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuLi8uLi9vZGstdHMvY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9vZGstdHMvbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHsgaW50ZXJlc3RpbmdGZWF0dXJlczEsIGhvdGtleXMsIHdpbmRvd05hbWVzIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuXHJcbmNvbnN0IHNlYXJjaGluZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hpbmcnKTtcclxuY29uc3Qgb3ZlcndvbGZTdGF0dXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcndvbGYtc3RhdHVzJyk7XHJcbmNvbnN0IGluZXRlcm5ldFN0YXR1c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcm5ldC1zdGF0dXMnKTtcclxuY29uc3QgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2LWJ0bicpO1xyXG5jb25zdCBjaXJjbGVEaXZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2lyY2xlLWRpdicpO1xyXG5jb25zdCBzZXR0aW5nc1RhYnMgPSBbJ292ZXJ2aWV3JywgJ2RhaWx5LXdlZWtseScsICdzZXR0aW5ncyddO1xyXG5cclxubGV0IGdhbWVNb2RlOiBzdHJpbmcsIGdhbWVTdGF0dXM6IHN0cmluZywgd2luZG93SWQ6IHN0cmluZywgb3dXaW5kb3c6IE9XV2luZG93LCBjaXJjbGVTdGF0czogYW55O1xyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSA9PT0gJ1wiMFwiJykge1xyXG4gICAgb3dXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuaW5Mb2JieSk7XHJcblxyXG4gICAgd2luZG93SWQgPSAnaW5fbG9iYnknO1xyXG59IGVsc2Uge1xyXG4gICAgb3dXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5KTtcclxuXHJcbiAgICB3aW5kb3dJZCA9ICdpbl9sb2JieV9kZXNrdG9wX29ubHknO1xyXG59XHJcbmNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzKCk7XHJcbmNvbnN0IGxvY2Fsc3RvcmFnZSA9IG5ldyBMb2NhbHN0b3JhZ2UoKTtcclxuXHJcbmNvbnN0IHByb21pc2UxID0gbG9jYWxzdG9yYWdlLmluaXRpYXRlTG9jYWxTdG9yYWdlKClcclxuICAgIC50aGVuKCgpID0+IGNvbnRyb2xsZXJzLnNldFRoZW1lKCkpO1xyXG5cclxuY29udHJvbGxlcnMuZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXYpO1xyXG5jb250cm9sbGVycy5nZXRJbnRlcm5ldFN0YXR1cyhpbmV0ZXJuZXRTdGF0dXNEaXYpO1xyXG5jb250cm9sbGVycy5zZXRTaG9ydGN1dFRleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKSk7XHJcblxyXG5jb25zdCBvdmVyd29sZlN0YXR1c0lEID0gd2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnRyb2xsZXJzLmdldE92ZXJ3b2xmU3RhdHVzKG92ZXJ3b2xmU3RhdHVzRGl2KSwgNjAwMDApO1xyXG5jb25zdCBpbnRlcm5ldFN0YXR1c0lEID0gd2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnRyb2xsZXJzLmdldEludGVybmV0U3RhdHVzKGluZXRlcm5ldFN0YXR1c0RpdiksIDYwMDAwKTtcclxub3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgY29udHJvbGxlcnMuc2V0U2hvcnRjdXRUZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0JykpO1xyXG59KTtcclxuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsICgpID0+IHtcclxuICAgIGNvbnRyb2xsZXJzLnNldFRoZW1lKCk7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIwXCInKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LnNjYWxlV2luZG93KCdpbl9sb2JieScsIDQyMCwgNzAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG93V2luZG93LmNoYW5nZVdpbmRvd0xvY2F0aW9uKCdjZW50ZXItcmlnaHQnLCB3aW5kb3dJZCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd1dpbmRvdy5zY2FsZVdpbmRvdygnaW5fbG9iYnlfZGVza3RvcF9vbmx5JywgNDIwLCA3MDAsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3RhdHNOYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYWlseS13ZWVrbHktbmF2LWJ0bicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0c05hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgc3RhdHNOYXZCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbih0aGlzOmFueSkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRzTmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YXRzTmF2QnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgc2V0Q2lyY2xlcyh0aGlzLmlkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDaXJjbGVzKGlkKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGNpcmNsZVN0YXRzWzBdW2lkXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMF1baWRdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoY2lyY2xlU3RhdHNbMF1baWRdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IGNpcmNsZVN0YXRzWzBdW2lkXS53bCArICclJztcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMV1baWRdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGNpcmNsZVN0YXRzWzFdW2lkXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoY2lyY2xlU3RhdHNbMV1baWRdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gY2lyY2xlU3RhdHNbMV1baWRdLndsICsgJyUnO1xyXG59XHJcblxyXG5jbGFzcyBJbkxvYmJ5IGV4dGVuZHMgQXBwV2luZG93IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSW5Mb2JieTtcclxuICAgIHByaXZhdGUgX3JhaW5ib3dHYW1lRXZlbnRzTGlzdGVuZXI6IE9XR2FtZXNFdmVudHM7XHJcbiAgICBwcml2YXRlIF9ldmVudHNMb2c6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfaW5mb0xvZzogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIwXCInKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHdpbmRvd05hbWVzLmluTG9iYnksICdzZXR0aW5nc19pbl9nYW1lJywgJ3N0YXRpc3RpY3NfaW5fZ2FtZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LnNjYWxlV2luZG93KCdpbl9sb2JieScsIDQyMCwgNzAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBvd1dpbmRvdy5jaGFuZ2VXaW5kb3dMb2NhdGlvbignY2VudGVyLXJpZ2h0Jywgd2luZG93SWQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlcih3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHksICdzZXR0aW5nc19kZXNrdG9wJywgJ3N0YXRpc3RpY3NfZGVza3RvcCcpO1xyXG5cclxuICAgICAgICAgICAgb3dXaW5kb3cuc2NhbGVXaW5kb3coJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScsIDQyMCwgNzAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3dXaW5kb3cucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFRvZ2dsZUhvdGtleUJlaGF2aW9yKCk7XHJcbiAgICAgICAgdGhpcy5zZXROYXZMaXN0ZW5lcnMoKTtcclxuICAgICAgICAvL3RoaXMuc2V0VG9nZ2xlSG90a2V5VGV4dCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUV2ZW50c0xpc3RlbmVyID0gbmV3IE9XR2FtZXNFdmVudHMoe1xyXG4gICAgICAgICAgICBvbkluZm9VcGRhdGVzOiB0aGlzLm9uSW5mb1VwZGF0ZXMuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgb25OZXdFdmVudHM6IHRoaXMub25OZXdFdmVudHMuYmluZCh0aGlzKVxyXG4gICAgICAgIH0sIGludGVyZXN0aW5nRmVhdHVyZXMxKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRhdGFiYXNlLmluaXRBbGxJREIoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBkYXRhYmFzZS5kaXNwbGF5RGFpbHlXZWVrbHkoKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNpcmNsZVN0YXRzID0gcmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgSW5Mb2JieSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5fcmFpbmJvd0dhbWVFdmVudHNMaXN0ZW5lci5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25JbmZvVXBkYXRlcyhpbmZvKSB7XHJcbiAgICAgICAgaWYgKCgnbWF0Y2hfaW5mbycgaW4gaW5mbyAmJiAnZ2FtZV9tb2RlJyBpbiBpbmZvLm1hdGNoX2luZm8pIHx8ICgnZ2FtZV9pbmZvJyBpbiBpbmZvICYmICdwaGFzZScgaW4gaW5mby5nYW1lX2luZm8gJiYgaW5mby5nYW1lX2luZm8ucGhhc2UgPT09ICdsb2JieScpKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLm1hdGNoX2luZm8pIHtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlID0gaW5mby5tYXRjaF9pbmZvLmdhbWVfbW9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGdhbWVNb2RlICE9PSAnTk9ORScpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMgPSAnc2VhcmNoaW5nJztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnYW1lIHN0YXR1cyBcIiR7Z2FtZVN0YXR1c31cImApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtYXRjaE1ha2luZzogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZS5zcGxpdCgnXycpWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hNYWtpbmcgPSBnYW1lTW9kZS5zcGxpdCgnXycpWzFdICsgJyAnICsgZ2FtZU1vZGUuc3BsaXQoJ18nKVsyXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hNYWtpbmcgPSBnYW1lTW9kZS5zcGxpdCgnXycpWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRjaC1tYWtpbmctdGV4dCcpLmlubmVySFRNTCA9ICdtYXRjaG1ha2luZyAnICsgbWF0Y2hNYWtpbmc7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hpbmdEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdHVzID0gJ2xvYmJ5JztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnYW1lIHN0YXR1cyBcIiR7Z2FtZVN0YXR1c31cImApO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlYXJjaGluZ0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMubG9nTGluZSgnbG9nJywgJ2luZm9VcGRhdGUnLCBpbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTmV3RXZlbnRzKGV2ZW50SW5mbykge1xyXG4gICAgICAgIC8vIHRoaXMubG9nTGluZSgnbG9nJywgJ2luZm9FdmVudCcsIGV2ZW50SW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXROYXZMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmF2QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24odGhpczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5hdkJ0bi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkJ0bltqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXR0aW5nc1RhYnNbal0pLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzVGFic1tpXSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHMgdG9nZ2xlSW5Mb2JieVdpbmRvdyBhcyB0aGUgYmVoYXZpb3IgZm9yIHRoZSBDdHJsK1ggaG90a2V5XHJcbiAgICBwcml2YXRlIGFzeW5jIHNldFRvZ2dsZUhvdGtleUJlaGF2aW9yKCkge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUluTG9iYnlXaW5kb3cgPSBhc3luYyBob3RrZXlSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJ2luZm8nOiB7IHByZXNzZWQgaG90a2V5IGZvciAke2hvdGtleVJlc3VsdC5mZWF0dXJlSWR9IH1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluR2FtZVN0YXRlID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ25vcm1hbCcgfHwgaW5HYW1lU3RhdGUud2luZG93X3N0YXRlID09PSAnbWF4aW1pemVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdtaW5pbWl6ZWQnIHx8IGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG93V2luZG93LmNoYW5nZVdpbmRvd0xvY2F0aW9uKCdjZW50ZXItcmlnaHQnLCB3aW5kb3dJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvd1dpbmRvdy5jaGFuZ2VXaW5kb3dTaXplKCdpbl9sb2JieV9kZXNrdG9wX29ubHknLCA0MjAsIDcwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZSB3aW5kb3cnICsgd2luZG93TmFtZXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZSh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2Ugd2luZG93JyArIHdpbmRvd05hbWVzLnN0YXRpc3RpY3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9XSG90a2V5cy5vbkhvdGtleURvd24oaG90a2V5cy50b2dnbGUsIHRvZ2dsZUluTG9iYnlXaW5kb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5JbkxvYmJ5Lmluc3RhbmNlKCkucnVuKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=