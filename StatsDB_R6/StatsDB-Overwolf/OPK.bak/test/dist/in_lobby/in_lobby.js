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
    statisticsDesktopOnly: 'statistics_desktop',
    website: 'website_in_game',
    websiteDesktopOnly: 'website_desktop'
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
            if (document.getElementById('r6db-logo-small')) {
                document.getElementById('r6db-logo-small').setAttribute('xlink:href', '/img/socialmedia_icons.svg#r6db');
            }
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
            if (document.getElementById('r6db-logo-small')) {
                document.getElementById('r6db-logo-small').setAttribute('xlink:href', '/img/socialmedia_icons.svg#r6dbdark');
            }
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
            if (document.getElementById('r6db-logo-small')) {
                document.getElementById('r6db-logo-small').setAttribute('xlink:href', '/img/socialmedia_icons.svg#r6dbdark');
            }
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
            if (!localStorage.settings || Object.keys(JSON.parse(localStorage.settings)).length < 5) {
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
            console.log('test');
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
                else if (windowId === 'in_lobby' || windowId === 'in_lobby_desktop_only') {
                    document.getElementsByTagName('main')[0].style.width = `${Math.ceil(100 / scale * 10) / 10}%`;
                    document.getElementsByTagName('main')[0].style.height = `calc(${Math.ceil(100 / scale * 10) / 10}% - 32px)`;
                    document.querySelector('#in-lobby .ad-lobby').style.bottom = `${Math.ceil(Math.pow(scale, -4) * 7 * 100) / 100}px`;
                }
                else {
                    document.getElementsByTagName('main')[0].style.width = `${Math.ceil(100 / scale * 10) / 10}%`;
                    document.getElementsByTagName('main')[0].style.height = `${Math.ceil(100 / scale * 10) / 10}%`;
                }
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
    constructor(windowName, mode) {
        this.maximized = false;
        this.mainWindow = new ow_window_1.OWWindow('background');
        this.currWindow = new ow_window_1.OWWindow(windowName);
        if (mode === 'desktop') {
            this.settingsWindow = new ow_window_1.OWWindow('settings_desktop');
            this.statisticsWindow = new ow_window_1.OWWindow('statistics_desktop');
            this.websiteWindow = new ow_window_1.OWWindow('website_desktop');
        }
        else if (mode === 'ingame') {
            this.settingsWindow = new ow_window_1.OWWindow('settings_in_game');
            this.statisticsWindow = new ow_window_1.OWWindow('statistics_in_game');
            this.websiteWindow = new ow_window_1.OWWindow('website_in_game');
        }
        const closeButton = document.getElementById('closeButton');
        const maximizeButton = document.getElementById('maximizeButton');
        const minimizeButton = document.getElementById('minimizeButton');
        const settingsButton = document.getElementById('settingsButton');
        const gameHistory = document.getElementById('gameHistory');
        const website = document.getElementById('website');
        const closeWindowButton = document.getElementById('closeWindowButton');
        const modal = document.getElementById('exitMinimizeModal');
        const modalCancelButton = document.getElementById('cancel');
        const modalCloseButton = document.getElementById('exit');
        const modalMinimizeButton = document.getElementById('minimize');
        const header = document.getElementById('header');
        if (windowName === 'desktop' || windowName === 'settings_desktop' || windowName === 'statistics_desktop' || windowName === 'website_desktop' || localStorage.desktopOnly === '"1"') {
            this.setDrag(header);
        }
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        }
        if (closeWindowButton) {
            console.log('test');
            console.log(closeWindowButton);
            closeWindowButton.addEventListener('click', () => {
                console.log('test');
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
        if (website) {
            website.addEventListener('click', () => {
                this.websiteWindow.restore();
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
            super(consts_1.windowNames.inLobby, 'ingame');
            const promise = owWindow.scaleWindow('in_lobby', 420, 700, JSON.parse(localStorage.scaleSlider))
                .then(() => owWindow.changeWindowLocation('center-right', windowId));
        }
        else {
            super(consts_1.windowNames.inLobbyDesktopOnly, 'desktop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2NvbnRyb2xsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy1nYW1lcy1ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy1ob3RrZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctd2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9BcHBXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbl9sb2JieS9pbl9sb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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Q0FBQyxLQUFLLENBQUM7d0JBQ2hFLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO3dCQUNsRSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzt3QkFDOUQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7d0JBQ2xFLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7d0JBQ3ZFLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7d0JBQ3pFLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7d0JBQ3JFLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7d0JBQ3pFLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7d0JBQzNFLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUM7d0JBQzdFLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7d0JBQ3pFLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFD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QztvQkFDaEQsSUFBSSxXQUFXLENBQUMsWUFBWSxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUMsWUFBWSxLQUFLLFdBQVcsRUFBRTt3QkFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDOUI7eUJBQU0sSUFBSSxXQUFXLENBQUMsWUFBWSxLQUFLLFdBQVcsSUFBSSxXQUFXLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBRTt3QkFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDN0I7b0JBRUQsUUFBUSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDM0Q7cUJBQU07b0JBQ0gsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDaEU7Z0JBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxvQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsQ0FBQztnQkFDSCxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLG9CQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUVELHNCQUFTLENBQUMsWUFBWSxDQUFDLGdCQUFPLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDaEUsQ0FBQztLQUFBO0NBQ0o7QUFFRCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoiaW5fbG9iYnkvaW5fbG9iYnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMvaW5fbG9iYnkvaW5fbG9iYnkudHNcIik7XG4iLCJjb25zdCByYWluYm93Q2xhc3NJZCA9IDEwODI2O1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczEgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuICAgICdyb3N0ZXInLFxyXG4gICAgJ2tpbGwnLFxyXG4gICAgJ2RlYXRoJyxcclxuICAgICdtZScsXHJcbl07XHJcblxyXG5jb25zdCBpbnRlcmVzdGluZ0ZlYXR1cmVzMiA9IFtcclxuICAgICdnZXBfaW50ZXJuYWwnLFxyXG4gICAgJ2dhbWVfaW5mbycsXHJcbiAgICAnbWF0Y2gnLFxyXG4gICAgJ21hdGNoX2luZm8nLFxyXG5dO1xyXG5cclxuY29uc3Qgd2luZG93TmFtZXMgPSB7XHJcbiAgICBkZXNrdG9wOiAnZGVza3RvcCcsXHJcbiAgICBpbkxvYmJ5OiAnaW5fbG9iYnknLFxyXG4gICAgaW5HYW1lOiAnaW5fZ2FtZScsXHJcbiAgICBpbkxvYmJ5RGVza3RvcE9ubHk6ICdpbl9sb2JieV9kZXNrdG9wX29ubHknLFxyXG4gICAgaW5HYW1lRGVza3RvcE9ubHk6ICdpbl9nYW1lX2Rlc2t0b3Bfb25seScsXHJcbiAgICBzZXR0aW5nczogJ3NldHRpbmdzX2luX2dhbWUnLFxyXG4gICAgc2V0dGluZ3NEZXNrdG9wT25seTogJ3NldHRpbmdzX2Rlc2t0b3AnLFxyXG4gICAgc3RhdGlzdGljczogJ3N0YXRpc3RpY3NfaW5fZ2FtZScsXHJcbiAgICBzdGF0aXN0aWNzRGVza3RvcE9ubHk6ICdzdGF0aXN0aWNzX2Rlc2t0b3AnLFxyXG4gICAgd2Vic2l0ZTogJ3dlYnNpdGVfaW5fZ2FtZScsXHJcbiAgICB3ZWJzaXRlRGVza3RvcE9ubHk6ICd3ZWJzaXRlX2Rlc2t0b3AnXHJcbn07XHJcblxyXG5jb25zdCBob3RrZXlzID0ge1xyXG4gICAgdG9nZ2xlOiAnc2hvd2hpZGUnLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZFID0gW1xyXG4gICAgJ09QRVJBVElPTlMnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRV9MT05FV09MRicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfUEFSVFknLFxyXG5dO1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZQID0gW1xyXG4gICAgJ01BVENITUFLSU5HX1BWUF9ORVdDT01FUicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfRVZFTlQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcsXHJcbiAgICAnQ1VTVE9NR0FNRV9QVlAnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQX0RFRElDQVRFRCcsXHJcbl07XHJcblxyXG5jb25zdCBkYXRhYmFzZU9iamVjdCA9IHtcclxuICAgIE1BVENITUFLSU5HX1BWUF9SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlA6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNlYXNvbkNvbG9ycyA9IHtcclxuICAgIDY6JyMwMDUwYjMnLFxyXG4gICAgNzonI2NhMzYxYycsXHJcbiAgICA4OicjMDA2NTQzJyxcclxuICAgIDk6JyNmZmMxMTMnLFxyXG4gICAgMTA6JyM5NDlmMzknLFxyXG4gICAgMTE6JyM4MWEwYzEnLFxyXG4gICAgMTI6JyNhYTg1NGYnLFxyXG4gICAgMTM6JyNkMjAwNWEnLFxyXG4gICAgMTQ6JyMzMDQzOTUnLFxyXG4gICAgMTU6JyMxMzYzMGMnLFxyXG4gICAgMTY6JyMwNjlkYjMnLFxyXG4gICAgMTc6JyM5NDZhOTcnLFxyXG4gICAgMTg6JyMyYjdlOWEnLFxyXG4gICAgMTk6JyM2Y2E1MTEnLFxyXG4gICAgMjA6JyNkMTQwMDcnLFxyXG59XHJcblxyXG5jb25zdCBvcGVyYXRvcnMgPSB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJTbGVkZ2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjFcIlxyXG4gICAgfSxcclxuICAgIDEwMjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUaGF0Y2hlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6MVwiXHJcbiAgICB9LFxyXG4gICAgNTEzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoyXCJcclxuICAgIH0sXHJcbiAgICAxMDI1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhlcm1pdGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjJcIlxyXG4gICAgfSxcclxuICAgIDc3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlR3aXRjaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6M1wiXHJcbiAgICB9LFxyXG4gICAgMTAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1vbnRhZ25lXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTozXCJcclxuICAgIH0sXHJcbiAgICAyNTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHbGF6XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo0XCJcclxuICAgIH0sXHJcbiAgICA1MTU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGdXplXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo0XCJcclxuICAgIH0sXHJcbiAgICAyNjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGl0elwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSVFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjVcIlxyXG4gICAgfSxcclxuICAgIDI2MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJ1Y2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjZcIlxyXG4gICAgfSxcclxuICAgIDI2Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJsYWNrYmVhcmRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjdcIlxyXG4gICAgfSxcclxuICAgIDI2Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhcGl0YW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjhcIlxyXG4gICAgfSxcclxuICAgIDI2NDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkhpYmFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6OVwiXHJcbiAgICB9LFxyXG4gICAgMjY1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSmFja2FsXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpBXCJcclxuICAgIH0sXHJcbiAgICAyNjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJZaW5nXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpCXCJcclxuICAgIH0sXHJcbiAgICA1MjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJab2ZpYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6Q1wiXHJcbiAgICB9LFxyXG4gICAgMjY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRG9ra2FlYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkRcIlxyXG4gICAgfSxcclxuICAgIDUyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkVcIlxyXG4gICAgfSxcclxuICAgIDc4MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkZpbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDpFXCJcclxuICAgIH0sXHJcbiAgICAyNzE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNYXZlcmlja1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTBcIlxyXG4gICAgfSxcclxuICAgIDI3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk5vbWFkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxMVwiXHJcbiAgICB9LFxyXG4gICAgNTI5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR3JpZGxvY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb2trXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxM1wiXHJcbiAgICB9LFxyXG4gICAgMjc3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQW1hcnVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE2XCJcclxuICAgIH0sXHJcbiAgICAyNzg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJLYWxpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxN1wiXHJcbiAgICB9LFxyXG4gICAgMjgwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSWFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTlcIlxyXG4gICAgfSxcclxuICAgIDc5MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFjZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6MTdcIlxyXG4gICAgfSxcclxuICAgIDI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWmVyb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjE6MUJcIlxyXG4gICAgfSxcclxuICAgIDE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJSZWNydWl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwicmVjcnVpdFwiXHJcbiAgICB9LFxyXG4gICAgMjU2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU21va2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFcIlxyXG4gICAgfSxcclxuICAgIDUxMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk11dGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjFcIlxyXG4gICAgfSxcclxuICAgIDI1Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhc3RsZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MlwiXHJcbiAgICB9LFxyXG4gICAgNzY5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUHVsc2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjJcIlxyXG4gICAgfSxcclxuICAgIDI1ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRvY1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6M1wiXHJcbiAgICB9LFxyXG4gICAgNTE0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUm9va1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6M1wiXHJcbiAgICB9LFxyXG4gICAgNzcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2Fwa2FuXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo0XCJcclxuICAgIH0sXHJcbiAgICAxMDI3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGFjaGFua2FcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjRcIlxyXG4gICAgfSxcclxuICAgIDc3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphZ2VyXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo1XCJcclxuICAgIH0sXHJcbiAgICAxMDI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmFuZGl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo1XCJcclxuICAgIH0sXHJcbiAgICA1MTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGcm9zdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NlwiXHJcbiAgICB9LFxyXG4gICAgNTE4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmFsa3lyaWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjdcIlxyXG4gICAgfSxcclxuICAgIDUxOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhdmVpcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjhcIlxyXG4gICAgfSxcclxuICAgIDUyMDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVjaG9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjlcIlxyXG4gICAgfSxcclxuICAgIDUyMToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1pcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkFcIlxyXG4gICAgfSxcclxuICAgIDUyMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxlc2lvblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6QlwiXHJcbiAgICB9LFxyXG4gICAgMjY3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRWxhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpDXCJcclxuICAgIH0sXHJcbiAgICA1MjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJWaWdpbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6RFwiXHJcbiAgICB9LFxyXG4gICAgMjcwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWFlc3Ryb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6RlwiXHJcbiAgICB9LFxyXG4gICAgNTI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQWxpYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNsYXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMFwiXHJcbiAgICB9LFxyXG4gICAgNTI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FpZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTFcIlxyXG4gICAgfSxcclxuICAgIDI3Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1venppZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTJcIlxyXG4gICAgfSxcclxuICAgIDI3NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIldhcmRlblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTRcIlxyXG4gICAgfSxcclxuICAgIDI3Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdveW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE1XCJcclxuICAgIH0sXHJcbiAgICA1MzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYW1haVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTdcIlxyXG4gICAgfSxcclxuICAgIDI3OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk9yeXhcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE4XCJcclxuICAgIH0sXHJcbiAgICAyODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNZWx1c2lcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFBXCJcclxuICAgIH0sXHJcbiAgICAxMDQ2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXJ1bmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjE3XCJcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJhbmtPZmZzZXQgPSB7XHJcbiAgICAwOiAwLFxyXG4gICAgMTogMixcclxuICAgIDI6IDMsXHJcbiAgICAzOiA0LFxyXG4gICAgNDogNSxcclxuICAgIDU6IDcsXHJcbiAgICA2OiA4LFxyXG4gICAgNzogOSxcclxuICAgIDg6IDEwLFxyXG4gICAgOTogMTIsXHJcbiAgICAxMDogMTMsXHJcbiAgICAxMTogMTQsXHJcbiAgICAxMjogMTUsXHJcbiAgICAxMzogNTAsXHJcbiAgICAxNDogMTYsXHJcbiAgICAxNTogMTcsXHJcbiAgICAxNjogMTgsXHJcbiAgICAxNzogMTksXHJcbiAgICAxODogMjAsXHJcbiAgICAxOTogMjEsXHJcbiAgICAyMDogMjIsXHJcbiAgICAyMTogMjIsXHJcbiAgICAyMjogMjIsXHJcbiAgICAyMzogMjIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgcmFpbmJvd0NsYXNzSWQsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMSxcclxuICAgIGludGVyZXN0aW5nRmVhdHVyZXMyLFxyXG4gICAgd2luZG93TmFtZXMsXHJcbiAgICBob3RrZXlzLFxyXG4gICAgZ2FtZU1vZGVzUFZQLFxyXG4gICAgZ2FtZU1vZGVzUFZFLFxyXG4gICAgZGF0YWJhc2VPYmplY3QsXHJcbiAgICBzZWFzb25Db2xvcnMsXHJcbiAgICByYW5rT2Zmc2V0LFxyXG4gICAgb3BlcmF0b3JzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJzIHtcclxuICAgIHB1YmxpYyBzZXRTaG9ydGN1dFRleHQoc2hvcnRjdXRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5nZXQocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdGtleSA9IHJlc3VsdC5nYW1lc1snMTA4MjYnXVswXS5iaW5kaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhvdGtleSA9PT0gJ1VuYXNzaWduZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGN1dENvbnRhaW5lci5pbm5lckhUTUwgPSAnVU5BU1NJR05FRCB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gaG90a2V5ICsgJyB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXkgaW4gZ2FtZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhcHAgaG90a2V5IFwiJHtob3RrZXl9XCJgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZ2FtZS1ldmVudHMtc3RhdHVzLm92ZXJ3b2xmLmNvbS8xMDgyNl9wcm9kLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcndvbGZTdGF0dXMgPSBkYXRhLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgc29tZSBmdW5jdGlvbnMgbWlnaHQgbm90IHdvcmsgLSB3ZeKAmWxsIGZpeCBpdCBzaG9ydGx5PC9oND4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgT3ZlcndvbGYgYXBwIEFQSSBoYXMgc3RvcHBlZCB3b3JraW5nIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvdmVyd29sZiBzdGF0dXMgXCIke292ZXJ3b2xmU3RhdHVzfVwiYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnRlcm5ldFN0YXR1cyhpbmV0ZXJuZXRTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJuZXRTdGF0dXMgPSBuYXZpZ2F0b3Iub25MaW5lO1xyXG5cclxuICAgICAgICBpZiAoaW50ZXJuZXRTdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGluZXRlcm5ldFN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbnRlcm5ldCBzdGF0dXMgXCIke2ludGVybmV0U3RhdHVzfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRhYmxlVGFiKHRhYjogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllci10clwiKS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFua2VkU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFua2VkJyArIGkgKyBqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3VhbFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc3VhbCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFzb25TdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFzb25hbCcgKyBpICsgaik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmtlZFN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYiA9PT0gJ3JhbmtlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2Nhc3VhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ3NlYXNvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHRhYmxlIHRhYiBcIiR7dGFifVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dEZXRhaWxlZFBsYXllcihkZXRhaWxlZHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChkZXRhaWxlZHN0YXR1cykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgZGV0YWlsZWQgc3RhdHMgXCIkeyFkZXRhaWxlZHN0YXR1c31cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV0YWlsZWRzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRoZW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpKTtcclxuICAgICAgICBjb25zdCBzdHlsZVZhcmlhYmxlcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiI0YwRjBGMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjYxXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiMxMjEyMTJcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjRkZGRkZGMTRcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiIzAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjRkZGRkZGMUVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJ1cmwoJy9pbWcvYmFja2dyb3VuZC53ZWJwJylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1saWdodC1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpLnNldEF0dHJpYnV0ZSgneGxpbms6aHJlZicsICcvaW1nL3NvY2lhbG1lZGlhX2ljb25zLnN2ZyNyNmRiJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKS5zZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnLCAnL2ltZy9zb2NpYWxtZWRpYV9pY29ucy5zdmcjcjZkYmRhcmsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudGhlbWUgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiMzMzMzMzNcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLWJnLWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy1iZy1jb2xvclwiLCBcIiNiMGIwYjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ0bi1jb2xvclwiLCBcIiM5OTk5OTlcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1kYXJrLWxvZ28uc3ZnXCIpJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykuc2V0QXR0cmlidXRlKCd4bGluazpocmVmJywgJy9pbWcvc29jaWFsbWVkaWFfaWNvbnMuc3ZnI3I2ZGJkYXJrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGZldGNoQ29uZmlnKCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3N0YWdpbmctYXBpLnN0YXRzZGIubmV0L3I2L292ZXJsYXkvY29uZmlnJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeShkYXRhLnBheWxvYWQucmFpbmJvdykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy52ZXJzaW9uICE9IGRhdGEucGF5bG9hZC5yYWluYm93LnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGF0YWJhc2VPYmplY3QgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcclxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVJREIobmFtZUlEQjogc3RyaW5nLCBrZXlQYXRoSURCOiBzdHJpbmcsIHZlcnNpb246IG51bWJlciwgaW5kZXhlcyA9IG51bGwpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicsIHZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlOiBJREJPYmplY3RTdG9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUobmFtZUlEQiwgeyBrZXlQYXRoOiBrZXlQYXRoSURCIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBldmVudC50YXJnZXQudHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleChpbmRleCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShvYmplY3RTdG9yZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RvcmVUb0lEQihuYW1lSURCOiBzdHJpbmcsIHZhbHVlSURCLCBpbml0aWF0ZUlEQjogYm9vbGVhbik6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGJPYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkd3JpdGUnKS5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWluaXRpYXRlSURCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGJPYmplY3RTdG9yZS5wdXQodmFsdWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWF0ZUlEQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRiT2JqZWN0U3RvcmUuYWRkKHZhbHVlSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlYWRGcm9tSURCKG5hbWVJREI6IHN0cmluZywga2V5SURCOiBudW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYiA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERiLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3REYi5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3REYi5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYk9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUobmFtZUlEQik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gZGJPYmplY3RTdG9yZS5nZXQoa2V5SURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlYWRGcm9tSURCUmFuZ2UobmFtZUlEQjogc3RyaW5nLCBpbmRleDogc3RyaW5nLCBiZWdpblJhbmdlOiBzdHJpbmcsIGVuZFJhbmdlOiBzdHJpbmcsIGJlZ2luOiBudW1iZXIsIGVuZDogbnVtYmVyKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGIgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicpO1xyXG4gICAgICAgICAgICBsZXQga2V5UmFuZ2VWYWx1ZTogSURCS2V5UmFuZ2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmVnaW5SYW5nZSAmJiBlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLmJvdW5kKGJlZ2luUmFuZ2UsIGVuZFJhbmdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiZWdpblJhbmdlICYmICFlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLmxvd2VyQm91bmQoYmVnaW5SYW5nZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJlZ2luUmFuZ2UgJiYgZW5kUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGtleVJhbmdlVmFsdWUgPSBJREJLZXlSYW5nZS51cHBlckJvdW5kKGVuZFJhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3REYi5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0RGIuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0RGIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShuYW1lSURCKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmluZGV4KGluZGV4KS5vcGVuQ3Vyc29yKGtleVJhbmdlVmFsdWUsICdwcmV2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwLCBqID0gMCwgcmVzdWx0ID0gbmV3IE9iamVjdDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJzb3IgPSByZXF1ZXN0LnJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmVnaW4gIT09IDAgJiYgaSA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmFkdmFuY2UoYmVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBiZWdpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJzb3IgJiYgaSA8PSBlbmQgJiYgaSA+PSBiZWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2N1cnNvci52YWx1ZS50aW1lU3RhbXBdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjdXJzb3IudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaW5pdEFsbElEQigpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdERheU9mWWVhcjogYW55ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3REYXlzT2ZZZWFyOiBhbnkgPSAodG9kYXkgLSBmaXJzdERheU9mWWVhcikgLyA4NjQwMDAwMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQldlZWtzID0gYCR7TWF0aC5jZWlsKChwYXN0RGF5c09mWWVhciArIGZpcnN0RGF5T2ZZZWFyLmdldERheSgpICsgMSkgLyA3KX0sJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQkRheXMgPSB0b2RheS5nZXREYXRlKCkgKyAnLCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJywnICsgdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUlEQldlZWtzOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlSURCV2Vla3NbaV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGFiYXNlT2JqZWN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsdWVJREJXZWVrcy53ZWVrID0ga2V5SURCV2Vla3M7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVJREJEYXlzOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGFiYXNlT2JqZWN0KSk7XHJcbiAgICAgICAgICAgIHZhbHVlSURCRGF5cy5kYXRlID0ga2V5SURCRGF5cztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UxID0gdGhpcy5zdG9yZVRvSURCKCd3ZWVrcycsIHZhbHVlSURCV2Vla3MsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMiA9IHRoaXMuc3RvcmVUb0lEQignZGF5cycsIHZhbHVlSURCRGF5cywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGRpc3BsYXlEYWlseVdlZWtseSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdERheU9mWWVhcjogYW55ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3REYXlzT2ZZZWFyOiBhbnkgPSAodG9kYXkgLSBmaXJzdERheU9mWWVhcikgLyA4NjQwMDAwMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQldlZWtzID0gYCR7TWF0aC5jZWlsKChwYXN0RGF5c09mWWVhciArIGZpcnN0RGF5T2ZZZWFyLmdldERheSgpICsgMSkgLyA3KX0sJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQkRheXMgPSB0b2RheS5nZXREYXRlKCkgKyAnLCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJywnICsgdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXR0aW5ncycpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UxID0gdGhpcy5yZWFkRnJvbUlEQignd2Vla3MnLCBrZXlJREJXZWVrcylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdFdlZWsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3ZWVrbHlTdGF0czogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdlbmVyYWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXN1YWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmtpbGxzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC53aW5zICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5sb3NzZXMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMod2Vla2x5U3RhdHMpLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNb2RlID0gd2Vla2x5U3RhdHNbb2JqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZS5kZWF0aHMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAoKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzKS50b0ZpeGVkKDIpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9IE1hdGgucm91bmQoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMgKiAzMykgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVNb2RlLmRlYXRocyA9PT0gMCAmJiBnYW1lTW9kZS5raWxscyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICdJTkYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcxMDAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICcwLjAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9IChNYXRoLnJvdW5kKGdhbWVNb2RlLndpbnMgLyAoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgKiAxMDApKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9IGdhbWVNb2RlLndsICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVXTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQod2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5rZCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS53bCArICclJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWVrbHlTdGF0czpcIiwgd2Vla2x5U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2Vla2x5U3RhdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UyID0gdGhpcy5yZWFkRnJvbUlEQignZGF5cycsIGtleUlEQkRheXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHREYXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFpbHlTdGF0czogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5raWxscyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5kZWF0aHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5sb3NzZXMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6ICByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLndpbnMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXN1YWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhaWx5U3RhdHMpLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNb2RlID0gZGFpbHlTdGF0c1tvYmpdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNb2RlLmRlYXRocyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAoKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzKS50b0ZpeGVkKDIpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9IE1hdGgucm91bmQoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMgKiAzMykgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVNb2RlLmRlYXRocyA9PT0gMCAmJiBnYW1lTW9kZS5raWxscyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnSU5GJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMTAwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnMC4wMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gKE1hdGgucm91bmQoZ2FtZU1vZGUud2lucyAvIChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAqIDEwMCkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gZ2FtZU1vZGUud2wgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVLRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5LXRleHQnKS5pbm5lckhUTUwgPSBwYXJzZUZsb2F0KGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5rZCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5LXRleHQnKS5pbm5lckhUTUwgPSBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ud2wgKyAnJSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGFpbHlTdGF0czpcIiwgZGFpbHlTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYWlseVN0YXRzO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzTmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFpbHktd2Vla2x5LW5hdi1idG4nKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0c05hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3RhdHNOYXZCdG5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzLmNpcmNsZSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuL293LXdpbmRvdyc7XHJcblxyXG5jb25zdCBjb250cm9sbGVycyA9IG5ldyBDb250cm9sbGVycywgb3dXaW5kb3c6IE9XV2luZG93ID0gbmV3IE9XV2luZG93O1xyXG5cclxubGV0IGxvY2FsRGVza3RvcE9ubHkgPSBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHksIHZhbHVlc0N1c3RvbSwgbG9jYWw7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlIHtcclxuICAgIHByaXZhdGUgZHRhYmxlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkdGhlbWU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtYXhpbWl6ZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGRpc3BsYXk6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtb25pdG9yczogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGNpcmNsZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmR0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWR0YWJsZSAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRoZW1lIC5jdXN0b20tb3B0aW9uJykgO1xyXG4gICAgICAgIHRoaXMuZG1heGltaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1heGltaXplIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRkaXNwbGF5IC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kbW9uaXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbW9uaXRvcnMgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kY2lyY2xlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYXRlTG9jYWxTdG9yYWdlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgfHwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpKS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmxlJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXhpbWl6ZSc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICBcInRoZW1lXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlXCI6IFwiZ2VuZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibW9uaXRvcklkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY2FsZVNsaWRlcicsICdcIjFcIicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aCA8IDkpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2YWx1ZXNUYWJsZScsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAwIDogJ0NvdW50cnknLFxyXG4gICAgICAgICAgICAgICAgICAgIDEgOiAnTFZMJyxcclxuICAgICAgICAgICAgICAgICAgICAyIDogJ0tpbGxzJyxcclxuICAgICAgICAgICAgICAgICAgICAzIDogJ0RlYXRocycsXHJcbiAgICAgICAgICAgICAgICAgICAgNCA6ICdLL0QnLFxyXG4gICAgICAgICAgICAgICAgICAgIDUgOiAnV2lucycsXHJcbiAgICAgICAgICAgICAgICAgICAgNiA6ICdMb3NzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDcgOiAnVy9MJyxcclxuICAgICAgICAgICAgICAgICAgICA4IDogJ0hhY2tlciAlJ1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rlc2t0b3BPbmx5JywgJ1wiMFwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b20gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSk7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU2V0dGluZyhzZWxlY3RlZE9wdGlvbjogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ0lkID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCdzZXR0aW5naWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctdmFsdWVUYWJsZScpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b21baW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgndmFsdWVzVGFibGUnLCB2YWx1ZXNDdXN0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRoZW1lJykge1xyXG4gICAgICAgICAgICBsb2NhbC50aGVtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcnMuc2V0VGhlbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWR0YWJsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwudGFibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRkaXNwbGF5Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ2Rlc2t0b3BPbmx5JywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1heGltaXplJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tYXhpbWl6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1vbml0b3JzJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tb25pdG9ySWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRjaXJjbGUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLmNpcmNsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHNsaWRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzY2FsZVNsaWRlcicsIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3MoKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHtcclxuICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiAwLFxyXG4gICAgICAgICAgICBcInJhbmtlZFwiIDogMSxcclxuICAgICAgICAgICAgXCJjYXN1YWxcIiA6IDIsXHJcbiAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IDNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzQXJyID0gW1xyXG4gICAgICAgICAgICB0aGlzLmR0YWJsZVtsb2NhbC50YWJsZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZHRoZW1lW2xvY2FsLnRoZW1lXSxcclxuICAgICAgICAgICAgdGhpcy5kbWF4aW1pemVbbG9jYWwubWF4aW1pemVdLFxyXG4gICAgICAgICAgICB0aGlzLmRkaXNwbGF5W2xvY2FsRGVza3RvcE9ubHkucmVwbGFjZSgvXCIvZywgJycpXSxcclxuICAgICAgICAgICAgdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSxcclxuICAgICAgICAgICAgdGhpcy5kY2lyY2xlW2NpcmNsZXNbbG9jYWwuY2lyY2xlXV0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHNldHRpbmdzQXJyW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNldHRpbmcgIT09IHRoaXMuZG1vbml0b3JzW2xvY2FsLm1vbml0b3JJZF0pIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IHNldHRpbmcudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZyA9PT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpW2xvY2FsLm1vbml0b3JJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LmdldE1vbml0b3JzTGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obW9uaXRvckxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gbW9uaXRvckxpc3QuZGlzcGxheXNbbG9jYWwubW9uaXRvcklkXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93U2l6ZS1zbGlkZXInKSBhcyBhbnkpLnZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlci12YWx1ZScpLmlubmVySFRNTCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzQ3VzdG9tW2ldLnJlcGxhY2UoL1sgL10vZywgJy0nKSArIGk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGltZXIgfSBmcm9tICcuL3RpbWVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9XR2FtZXNFdmVudHNEZWxlZ2F0ZSB7XHJcbiAgICBvbkluZm9VcGRhdGVzKGluZm86IGFueSk7XHJcbiAgICBvbk5ld0V2ZW50cyhlOiBhbnkpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT1dHYW1lc0V2ZW50cyB7XHJcbiAgICBwcml2YXRlIF9kZWxlZ2F0ZTogSU9XR2FtZXNFdmVudHNEZWxlZ2F0ZTtcclxuICAgIHByaXZhdGUgX3JlcXVpcmVkRmVhdHVyZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlLCByZXF1aXJlZEZlYXR1cmVzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZWRGZWF0dXJlcyA9IHJlcXVpcmVkRmVhdHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldEluZm8oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLmdldEluZm8ocmVzb2x2ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldFJlcXVpcmVkRmVhdHVyZXMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgbGV0IHRyaWVzOm51bWJlciA9IDEsXHJcbiAgICAgICAgcmVzdWx0O1xyXG5cclxuICAgICAgICB3aGlsZSAoIHRyaWVzID4gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5zZXRSZXF1aXJlZEZlYXR1cmVzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVkRmVhdHVyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmICggcmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldFJlcXVpcmVkRmVhdHVyZXMoKTogc3VjY2VzczogJysgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlc3VsdC5zdXBwb3J0ZWRGZWF0dXJlcy5sZW5ndGggPiAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgVGltZXIud2FpdCgzMDAwKTtcclxuICAgICAgICAgICAgdHJpZXMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUud2Fybignc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBmYWlsdXJlIGFmdGVyICcrIHRyaWVzICsnIHRyaWVzJysgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5vbkluZm9VcGRhdGVzMi5hZGRMaXN0ZW5lcih0aGlzLm9uSW5mb1VwZGF0ZXMpO1xyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5vbk5ld0V2ZW50cy5hZGRMaXN0ZW5lcih0aGlzLm9uTmV3RXZlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVuUmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uSW5mb1VwZGF0ZXMyLnJlbW92ZUxpc3RlbmVyKHRoaXMub25JbmZvVXBkYXRlcyk7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uTmV3RXZlbnRzLnJlbW92ZUxpc3RlbmVyKHRoaXMub25OZXdFdmVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25JbmZvVXBkYXRlcyA9IChpbmZvOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vbkluZm9VcGRhdGVzKGluZm8uaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk5ld0V2ZW50cyA9IChlOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vbk5ld0V2ZW50cyhlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtvdy1nYW1lLWV2ZW50c10gU1RBUlRgKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLnNldFJlcXVpcmVkRmVhdHVyZXMoKTtcclxuXHJcbiAgICAgICAgbGV0IHRyaWVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCB7IHJlcywgc3RhdHVzIH0gPSBhd2FpdCB0aGlzLmdldEluZm8oKTtcclxuXHJcbiAgICAgICAgaWYgKCByZXMgJiYgc3RhdHVzID09PSAnc3VjY2VzcycgKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25JbmZvVXBkYXRlcyh7IGluZm86IHJlcyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtvdy1nYW1lLWV2ZW50c10gU1RPUGApO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50cygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBPV0hvdGtleXMge1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGdldEhvdGtleVRleHQoaG90a2V5SWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLmdldEhvdEtleShob3RrZXlJZCwgcmVzdWx0ID0+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnN1Y2Nlc3MgfHwgIXJlc3VsdC5ob3RrZXkpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKCdVTkFTU0lHTkVEJyk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuaG90a2V5KTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvbkhvdGtleURvd24oaG90a2V5SWQ6IHN0cmluZywgYWN0aW9uOiAoaG90a2V5UmVzdWx0OiBvdmVyd29sZi5zZXR0aW5ncy5Ib3RLZXlSZXN1bHQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBvdmVyd29sZi5zZXR0aW5ncy5yZWdpc3RlckhvdEtleShob3RrZXlJZCwgYWN0aW9uKTtcclxuICAgIH1cclxufVxyXG4iLCJ0eXBlIEdldFdpbmRvd1N0YXRlUmVzdWx0ID0gb3ZlcndvbGYud2luZG93cy5HZXRXaW5kb3dTdGF0ZVJlc3VsdDtcclxudHlwZSBPd1dpbmRvd0luZm8gPSBvdmVyd29sZi53aW5kb3dzLldpbmRvd0luZm87XHJcbmV4cG9ydCBjbGFzcyBPV1dpbmRvdyB7XHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlc3RvcmUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiByZXN0b3JlZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5yZXN0b3JlKGlkLCByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbcmVzdG9yZV0gLSBhbiBlcnJvciBvY2N1cnJlZCwgd2luZG93SWQ9JHtpZH0sIHJlYXNvbj0ke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbWluaW1pemUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtaW5pbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm1pbmltaXplKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYnJpbmdUb0Zyb250KCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWluaW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5icmluZ1RvRnJvbnQoaWQsIHRydWUsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtYXhpbWl6ZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1heGltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5tYXhpbWl6ZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGhpZGUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuaGlkZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNsb3NlKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiAocmVzdWx0LndpbmRvd19zdGF0ZSAhPT0gJ2Nsb3NlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmludGVybmFsQ2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2VXaW5kb3dTaXplKHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgb3ZlcndvbGYud2luZG93cy5jaGFuZ2VTaXplKHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0LCAocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoYW5nZVdpbmRvd0xvY2F0aW9uKG1vZGUsIHdpbmRvd0lkKSB7XHJcbiAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHJlc3VsdC53aW5kb3cud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSByZXN1bHQud2luZG93LmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLnV0aWxzLmdldE1vbml0b3JzTGlzdCgobW9uaXRvclJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JJZDogc3RyaW5nID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpLm1vbml0b3JJZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvcldpZHRoID0gbW9uaXRvclJlcy5kaXNwbGF5c1ttb25pdG9ySWRdLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JIZWlnaHQgPSBtb25pdG9yUmVzLmRpc3BsYXlzW21vbml0b3JJZF0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlZnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGxldCB0b3A6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2NlbnRlci1jZW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IG1vbml0b3JXaWR0aCAvIDIgLSAod2luZG93V2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2NlbnRlci1yaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gKG1vbml0b3JXaWR0aCAtIHdpbmRvd1dpZHRoKSAtIDIwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2VudGVyLWxlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IDIwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2hhbmdlUG9zaXRpb24od2luZG93SWQsIE1hdGgucm91bmQobGVmdCksIE1hdGgucm91bmQodG9wKSwgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2NhbGVXaW5kb3cod2luZG93SWQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlKTogUHJvbWlzZSA8IHZvaWQgPiAge1xyXG4gICAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5yb3VuZCh3aWR0aCAqIHNjYWxlKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChoZWlnaHQgKiBzY2FsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGF0LmNoYW5nZVdpbmRvd1NpemUod2luZG93SWQsIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSlgO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvd0lkID09PSAnaW5fZ2FtZScgfHwgd2luZG93SWQgPT09ICdpbl9nYW1lX2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuaGVpZ2h0ID0gYGNhbGMoJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lIC0gMzJweClgO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvd0lkID09PSAnaW5fbG9iYnknIHx8IHdpbmRvd0lkID09PSAnaW5fbG9iYnlfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgY2FsYygke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSUgLSAzMnB4KWA7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luLWxvYmJ5IC5hZC1sb2JieScpIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5ib3R0b20gPSBgJHtNYXRoLmNlaWwoTWF0aC5wb3coc2NhbGUsIC00KSAqIDcgKiAxMDApIC8gMTAwfXB4YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5JyB8fCB3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY2FsZSA8PSAwLjYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmFnTW92ZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGVsZW0ub25tb3VzZWRvd24gPSBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmRyYWdNb3ZlKHRoaXMuX25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TW9uaXRvcnNMaXN0KCk6IFByb21pc2UgPCBhbnkgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgYW55ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCk6IFByb21pc2UgPCBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRXaW5kb3dTdGF0ZShpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEN1cnJlbnRJbmZvKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgT3dXaW5kb3dJbmZvID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3cocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LndpbmRvdyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9idGFpbigpOiBQcm9taXNlIDwgT3dXaW5kb3dJbmZvIHwgbnVsbCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYiA9IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJyAmJiByZXMud2luZG93ICYmIHJlcy53aW5kb3cuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHJlcy53aW5kb3cuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gcmVzLndpbmRvdy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMud2luZG93KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coY2IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5vYnRhaW5EZWNsYXJlZFdpbmRvdyh0aGlzLl9uYW1lLCBjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYXNzdXJlT2J0YWluZWQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQub2J0YWluKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGludGVybmFsQ2xvc2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKGlkLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFRpbWVyRGVsZWdhdGUge1xyXG4gICAgb25UaW1lcihpZD86IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBUaW1lciB7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgX3RpbWVySWQ6IG51bWJlcnxudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBfZGVsZWdhdGU6IFRpbWVyRGVsZWdhdGU7XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdhaXQoaW50ZXJ2YWxJbk1TOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgaW50ZXJ2YWxJbk1TKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IFRpbWVyRGVsZWdhdGUsIGlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIHN0YXJ0KGludGVydmFsSW5NUzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3RpbWVySWQgPSA8bnVtYmVyPnNldFRpbWVvdXQodGhpcy5oYW5kbGVUaW1lckV2ZW50LCBpbnRlcnZhbEluTVMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVySWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGhhbmRsZVRpbWVyRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25UaW1lcih0aGlzLl9pZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi9vZGstdHMvb3ctd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xyXG4gICAgcHJvdGVjdGVkIGN1cnJXaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIG1haW5XaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIHNldHRpbmdzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCB3ZWJzaXRlV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYXhpbWl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3dOYW1lOiBzdHJpbmcsIG1vZGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubWFpbldpbmRvdyA9IG5ldyBPV1dpbmRvdygnYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIHRoaXMuY3VycldpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdkZXNrdG9wJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93ID0gbmV3IE9XV2luZG93KCdzZXR0aW5nc19kZXNrdG9wJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc3RhdGlzdGljc19kZXNrdG9wJyk7XHJcbiAgICAgICAgICAgIHRoaXMud2Vic2l0ZVdpbmRvdyA9IG5ldyBPV1dpbmRvdygnd2Vic2l0ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnaW5nYW1lJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93ID0gbmV3IE9XV2luZG93KCdzZXR0aW5nc19pbl9nYW1lJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc3RhdGlzdGljc19pbl9nYW1lJyk7XHJcbiAgICAgICAgICAgIHRoaXMud2Vic2l0ZVdpbmRvdyA9IG5ldyBPV1dpbmRvdygnd2Vic2l0ZV9pbl9nYW1lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1heGltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heGltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemVCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nc0J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVIaXN0b3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVIaXN0b3J5Jyk7XHJcbiAgICAgICAgY29uc3Qgd2Vic2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJzaXRlJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VXaW5kb3dCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VXaW5kb3dCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0TWluaW1pemVNb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsTWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93TmFtZSA9PT0gJ2Rlc2t0b3AnIHx8IHdpbmRvd05hbWUgPT09ICdzZXR0aW5nc19kZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc3RhdGlzdGljc19kZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnd2Vic2l0ZV9kZXNrdG9wJyB8fCBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjFcIicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VXaW5kb3dCdXR0b24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2xvc2VXaW5kb3dCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY2xvc2VXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtaW5pbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXhpbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtYXhpbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXhpbWl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWF4aW1pemUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heGltaXplZCA9ICF0aGlzLm1heGltaXplZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3NCdXR0b24pIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2FtZUhpc3RvcnkpIHtcclxuICAgICAgICAgICAgZ2FtZUhpc3RvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3ZWJzaXRlKSB7XHJcbiAgICAgICAgICAgIHdlYnNpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYnNpdGVXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGFsQ2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbldpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbE1pbmltaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsTWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2luZG93U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY3VycldpbmRvdy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0RHJhZyhlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycldpbmRvdy5kcmFnTW92ZShlbGVtKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBcHBXaW5kb3cgfSBmcm9tICcuLi9BcHBXaW5kb3cnO1xyXG5pbXBvcnQgeyBPV0dhbWVzRXZlbnRzIH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LWdhbWVzLWV2ZW50cyc7XHJcbmltcG9ydCB7IE9XSG90a2V5cyB9IGZyb20gJy4uLy4uL29kay10cy9vdy1ob3RrZXlzJztcclxuaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctd2luZG93JztcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuLi8uLi9vZGstdHMvZGF0YWJhc2UnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4uLy4uL29kay10cy9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IExvY2Fsc3RvcmFnZSB9IGZyb20gJy4uLy4uL29kay10cy9sb2NhbHN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBpbnRlcmVzdGluZ0ZlYXR1cmVzMSwgaG90a2V5cywgd2luZG93TmFtZXMgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xyXG5cclxuY29uc3Qgc2VhcmNoaW5nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGluZycpO1xyXG5jb25zdCBvdmVyd29sZlN0YXR1c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyd29sZi1zdGF0dXMnKTtcclxuY29uc3QgaW5ldGVybmV0U3RhdHVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludGVybmV0LXN0YXR1cycpO1xyXG5jb25zdCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtYnRuJyk7XHJcbmNvbnN0IGNpcmNsZURpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXJjbGUtZGl2Jyk7XHJcbmNvbnN0IHNldHRpbmdzVGFicyA9IFsnb3ZlcnZpZXcnLCAnZGFpbHktd2Vla2x5JywgJ3NldHRpbmdzJ107XHJcblxyXG5sZXQgZ2FtZU1vZGU6IHN0cmluZywgZ2FtZVN0YXR1czogc3RyaW5nLCB3aW5kb3dJZDogc3RyaW5nLCBvd1dpbmRvdzogT1dXaW5kb3csIGNpcmNsZVN0YXRzOiBhbnk7XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIwXCInKSB7XHJcbiAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5pbkxvYmJ5KTtcclxuXHJcbiAgICB3aW5kb3dJZCA9ICdpbl9sb2JieSc7XHJcbn0gZWxzZSB7XHJcbiAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHkpO1xyXG5cclxuICAgIHdpbmRvd0lkID0gJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seSc7XHJcbn1cclxuY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcclxuY29uc3QgY29udHJvbGxlcnMgPSBuZXcgQ29udHJvbGxlcnMoKTtcclxuY29uc3QgbG9jYWxzdG9yYWdlID0gbmV3IExvY2Fsc3RvcmFnZSgpO1xyXG5cclxuY29uc3QgcHJvbWlzZTEgPSBsb2NhbHN0b3JhZ2UuaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29udHJvbGxlcnMuc2V0VGhlbWUoKSk7XHJcblxyXG5jb250cm9sbGVycy5nZXRPdmVyd29sZlN0YXR1cyhvdmVyd29sZlN0YXR1c0Rpdik7XHJcbmNvbnRyb2xsZXJzLmdldEludGVybmV0U3RhdHVzKGluZXRlcm5ldFN0YXR1c0Rpdik7XHJcbmNvbnRyb2xsZXJzLnNldFNob3J0Y3V0VGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpKTtcclxuXHJcbmNvbnN0IG92ZXJ3b2xmU3RhdHVzSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4gY29udHJvbGxlcnMuZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXYpLCA2MDAwMCk7XHJcbmNvbnN0IGludGVybmV0U3RhdHVzSUQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4gY29udHJvbGxlcnMuZ2V0SW50ZXJuZXRTdGF0dXMoaW5ldGVybmV0U3RhdHVzRGl2KSwgNjAwMDApO1xyXG5vdmVyd29sZi5zZXR0aW5ncy5ob3RrZXlzLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICBjb250cm9sbGVycy5zZXRTaG9ydGN1dFRleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKSk7XHJcbn0pO1xyXG5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKCkgPT4ge1xyXG4gICAgY29udHJvbGxlcnMuc2V0VGhlbWUoKTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuc2NhbGVXaW5kb3coJ2luX2xvYmJ5JywgNDIwLCA3MDAsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gb3dXaW5kb3cuY2hhbmdlV2luZG93TG9jYXRpb24oJ2NlbnRlci1yaWdodCcsIHdpbmRvd0lkKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG93V2luZG93LnNjYWxlV2luZG93KCdpbl9sb2JieV9kZXNrdG9wX29ubHknLCA0MjAsIDcwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBzdGF0c05hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhaWx5LXdlZWtseS1uYXYtYnRuJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHN0YXRzTmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzdGF0c05hdkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKHRoaXM6YW55KSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdHNOYXZCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3RhdHNOYXZCdG5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBzZXRDaXJjbGVzKHRoaXMuaWQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENpcmNsZXMoaWQpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMF1baWRdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBjaXJjbGVTdGF0c1swXVtpZF0uYXR0cmlidXRlVmFsdWVXTCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gcGFyc2VGbG9hdChjaXJjbGVTdGF0c1swXVtpZF0ua2QpLnRvRml4ZWQoMik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gY2lyY2xlU3RhdHNbMF1baWRdLndsICsgJyUnO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBjaXJjbGVTdGF0c1sxXVtpZF0uYXR0cmlidXRlVmFsdWVLRCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMV1baWRdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gcGFyc2VGbG9hdChjaXJjbGVTdGF0c1sxXVtpZF0ua2QpLnRvRml4ZWQoMik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5LXRleHQnKS5pbm5lckhUTUwgPSBjaXJjbGVTdGF0c1sxXVtpZF0ud2wgKyAnJSc7XHJcbn1cclxuXHJcbmNsYXNzIEluTG9iYnkgZXh0ZW5kcyBBcHBXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJbkxvYmJ5O1xyXG4gICAgcHJpdmF0ZSBfcmFpbmJvd0dhbWVFdmVudHNMaXN0ZW5lcjogT1dHYW1lc0V2ZW50cztcclxuICAgIHByaXZhdGUgX2V2ZW50c0xvZzogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9pbmZvTG9nOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgICAgICAgICAgc3VwZXIod2luZG93TmFtZXMuaW5Mb2JieSwgJ2luZ2FtZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LnNjYWxlV2luZG93KCdpbl9sb2JieScsIDQyMCwgNzAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBvd1dpbmRvdy5jaGFuZ2VXaW5kb3dMb2NhdGlvbignY2VudGVyLXJpZ2h0Jywgd2luZG93SWQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlcih3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHksICdkZXNrdG9wJyk7XHJcblxyXG4gICAgICAgICAgICBvd1dpbmRvdy5zY2FsZVdpbmRvdygnaW5fbG9iYnlfZGVza3RvcF9vbmx5JywgNDIwLCA3MDAsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvd1dpbmRvdy5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlSG90a2V5QmVoYXZpb3IoKTtcclxuICAgICAgICB0aGlzLnNldE5hdkxpc3RlbmVycygpO1xyXG4gICAgICAgIC8vdGhpcy5zZXRUb2dnbGVIb3RrZXlUZXh0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JhaW5ib3dHYW1lRXZlbnRzTGlzdGVuZXIgPSBuZXcgT1dHYW1lc0V2ZW50cyh7XHJcbiAgICAgICAgICAgIG9uSW5mb1VwZGF0ZXM6IHRoaXMub25JbmZvVXBkYXRlcy5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBvbk5ld0V2ZW50czogdGhpcy5vbk5ld0V2ZW50cy5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSwgaW50ZXJlc3RpbmdGZWF0dXJlczEpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZGF0YWJhc2UuaW5pdEFsbElEQigpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGRhdGFiYXNlLmRpc3BsYXlEYWlseVdlZWtseSgpKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY2lyY2xlU3RhdHMgPSByZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBJbkxvYmJ5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJ1bigpIHtcclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUV2ZW50c0xpc3RlbmVyLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkluZm9VcGRhdGVzKGluZm8pIHtcclxuICAgICAgICBpZiAoKCdtYXRjaF9pbmZvJyBpbiBpbmZvICYmICdnYW1lX21vZGUnIGluIGluZm8ubWF0Y2hfaW5mbykgfHwgKCdnYW1lX2luZm8nIGluIGluZm8gJiYgJ3BoYXNlJyBpbiBpbmZvLmdhbWVfaW5mbyAmJiBpbmZvLmdhbWVfaW5mby5waGFzZSA9PT0gJ2xvYmJ5JykpIHtcclxuICAgICAgICAgICAgaWYgKGluZm8ubWF0Y2hfaW5mbykge1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGUgPSBpbmZvLm1hdGNoX2luZm8uZ2FtZV9tb2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2FtZU1vZGUgIT09ICdOT05FJykge1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXR1cyA9ICdzZWFyY2hpbmcnO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGdhbWUgc3RhdHVzIFwiJHtnYW1lU3RhdHVzfVwiYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoTWFraW5nOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVNb2RlLnNwbGl0KCdfJylbMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaE1ha2luZyA9IGdhbWVNb2RlLnNwbGl0KCdfJylbMV0gKyAnICcgKyBnYW1lTW9kZS5zcGxpdCgnXycpWzJdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaE1ha2luZyA9IGdhbWVNb2RlLnNwbGl0KCdfJylbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGNoLW1ha2luZy10ZXh0JykuaW5uZXJIVE1MID0gJ21hdGNobWFraW5nICcgKyBtYXRjaE1ha2luZztcclxuICAgICAgICAgICAgICAgIHNlYXJjaGluZ0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMgPSAnbG9iYnknO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGdhbWUgc3RhdHVzIFwiJHtnYW1lU3RhdHVzfVwiYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VhcmNoaW5nRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5sb2dMaW5lKCdsb2cnLCAnaW5mb1VwZGF0ZScsIGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25OZXdFdmVudHMoZXZlbnRJbmZvKSB7XHJcbiAgICAgICAgLy8gdGhpcy5sb2dMaW5lKCdsb2cnLCAnaW5mb0V2ZW50JywgZXZlbnRJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE5hdkxpc3RlbmVycygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuYXZCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbih0aGlzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmF2QnRuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2QnRuW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzVGFic1tqXSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3NUYWJzW2ldKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0cyB0b2dnbGVJbkxvYmJ5V2luZG93IGFzIHRoZSBiZWhhdmlvciBmb3IgdGhlIEN0cmwrWCBob3RrZXlcclxuICAgIHByaXZhdGUgYXN5bmMgc2V0VG9nZ2xlSG90a2V5QmVoYXZpb3IoKSB7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlSW5Mb2JieVdpbmRvdyA9IGFzeW5jIGhvdGtleVJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAnaW5mbyc6IHsgcHJlc3NlZCBob3RrZXkgZm9yICR7aG90a2V5UmVzdWx0LmZlYXR1cmVJZH0gfWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSA9PT0gJ1wiMFwiJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5HYW1lU3RhdGUgPSBhd2FpdCB0aGlzLmdldFdpbmRvd1N0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5HYW1lU3RhdGUud2luZG93X3N0YXRlID09PSAnbm9ybWFsJyB8fCBpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdtYXhpbWl6ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ21pbmltaXplZCcgfHwgaW5HYW1lU3RhdGUud2luZG93X3N0YXRlID09PSAnY2xvc2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3dXaW5kb3cuY2hhbmdlV2luZG93TG9jYXRpb24oJ2NlbnRlci1yaWdodCcsIHdpbmRvd0lkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG93V2luZG93LmNoYW5nZVdpbmRvd1NpemUoJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScsIDQyMCwgNzAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZSh3aW5kb3dOYW1lcy5zZXR0aW5ncywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlIHdpbmRvdycgKyB3aW5kb3dOYW1lcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnN0YXRpc3RpY3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZSB3aW5kb3cnICsgd2luZG93TmFtZXMuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT1dIb3RrZXlzLm9uSG90a2V5RG93bihob3RrZXlzLnRvZ2dsZSwgdG9nZ2xlSW5Mb2JieVdpbmRvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkluTG9iYnkuaW5zdGFuY2UoKS5ydW4oKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==