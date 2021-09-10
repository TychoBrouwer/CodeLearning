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
    constructor(gameMode, matchId) {
        this.database = new database_1.Database();
        this.gameMode = gameMode;
        this.matchId = matchId;
        this.timeStamp = Math.round(new Date().getTime() / 1000);
        console.log(this.matchId);
    }
    setMapId(mapId) {
        this.mapId = mapId;
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
            super(consts_1.windowNames.inGame, 'ingame');
            const promise = owWindow.scaleWindow('in_game', 1600, 900, JSON.parse(localStorage.scaleSlider))
                .then(() => owWindow.changeWindowLocation('center-center', 'in_game'));
            if (local.maximize === '1') {
                owWindow.restore();
            }
        }
        else {
            super(consts_1.windowNames.inGameDesktopOnly, 'desktop');
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
            matchData = new match_1.Match(info.res.match_info.game_mode, info.res.match_info.match_id);
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
            overwolf.games.events.getInfo(function (info) {
                matchData.setMapId(info.res.match_info.map_id);
                console.log(info.res.match_info.map_id);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2NvbnRyb2xsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWdhbWVzLWV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWhvdGtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy13aW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9wbGF5ZXItY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL3RpbWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvQXBwV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvaW5fZ2FtZS9pbl9nYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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LENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNsRTt5QkFBTTt3QkFDSCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztxQkFDdEU7b0JBRUQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNuSCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ3pILE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFB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QUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7c0RBQzNDLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzBEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs4REFDL0IsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7c0RBQzNDLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzBEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs4REFDL0IsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7c0RBQzNDLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzBEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs4REFDL0IsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7c0RBQzNDLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzBEQUMvQixFQUFFLEtBQUssV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs4REFDL0IsRUFBRSxLQUFLLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7c0RBQzNDLEVBQUUsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMs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LENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25DLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRWxCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRXpELFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsb0JBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2hFO1FBQ0wsQ0FBQztRQUVELHNCQUFTLENBQUMsWUFBWSxDQUFDLGdCQUFPLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBRUQsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6ImluX2dhbWUvaW5fZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9pbl9nYW1lL2luX2dhbWUudHNcIik7XG4iLCJjb25zdCByYWluYm93Q2xhc3NJZCA9IDEwODI2O1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczEgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuICAgICdyb3N0ZXInLFxyXG4gICAgJ2tpbGwnLFxyXG4gICAgJ2RlYXRoJyxcclxuICAgICdtZScsXHJcbl07XHJcblxyXG5jb25zdCBpbnRlcmVzdGluZ0ZlYXR1cmVzMiA9IFtcclxuICAgICdnZXBfaW50ZXJuYWwnLFxyXG4gICAgJ2dhbWVfaW5mbycsXHJcbiAgICAnbWF0Y2gnLFxyXG4gICAgJ21hdGNoX2luZm8nLFxyXG5dO1xyXG5cclxuY29uc3Qgd2luZG93TmFtZXMgPSB7XHJcbiAgICBkZXNrdG9wOiAnZGVza3RvcCcsXHJcbiAgICBpbkxvYmJ5OiAnaW5fbG9iYnknLFxyXG4gICAgaW5HYW1lOiAnaW5fZ2FtZScsXHJcbiAgICBpbkxvYmJ5RGVza3RvcE9ubHk6ICdpbl9sb2JieV9kZXNrdG9wX29ubHknLFxyXG4gICAgaW5HYW1lRGVza3RvcE9ubHk6ICdpbl9nYW1lX2Rlc2t0b3Bfb25seScsXHJcbiAgICBzZXR0aW5nczogJ3NldHRpbmdzX2luX2dhbWUnLFxyXG4gICAgc2V0dGluZ3NEZXNrdG9wT25seTogJ3NldHRpbmdzX2Rlc2t0b3AnLFxyXG4gICAgc3RhdGlzdGljczogJ3N0YXRpc3RpY3NfaW5fZ2FtZScsXHJcbiAgICBzdGF0aXN0aWNzRGVza3RvcE9ubHk6ICdzdGF0aXN0aWNzX2Rlc2t0b3AnLFxyXG4gICAgd2Vic2l0ZTogJ3dlYnNpdGVfaW5fZ2FtZScsXHJcbiAgICB3ZWJzaXRlRGVza3RvcE9ubHk6ICd3ZWJzaXRlX2Rlc2t0b3AnXHJcbn07XHJcblxyXG5jb25zdCBob3RrZXlzID0ge1xyXG4gICAgdG9nZ2xlOiAnc2hvd2hpZGUnLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZFID0gW1xyXG4gICAgJ09QRVJBVElPTlMnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRV9MT05FV09MRicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfUEFSVFknLFxyXG5dO1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZQID0gW1xyXG4gICAgJ01BVENITUFLSU5HX1BWUF9ORVdDT01FUicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfRVZFTlQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcsXHJcbiAgICAnQ1VTVE9NR0FNRV9QVlAnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQX0RFRElDQVRFRCcsXHJcbl07XHJcblxyXG5jb25zdCBkYXRhYmFzZU9iamVjdCA9IHtcclxuICAgIE1BVENITUFLSU5HX1BWUF9SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlA6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNlYXNvbkNvbG9ycyA9IHtcclxuICAgIDY6JyMwMDUwYjMnLFxyXG4gICAgNzonI2NhMzYxYycsXHJcbiAgICA4OicjMDA2NTQzJyxcclxuICAgIDk6JyNmZmMxMTMnLFxyXG4gICAgMTA6JyM5NDlmMzknLFxyXG4gICAgMTE6JyM4MWEwYzEnLFxyXG4gICAgMTI6JyNhYTg1NGYnLFxyXG4gICAgMTM6JyNkMjAwNWEnLFxyXG4gICAgMTQ6JyMzMDQzOTUnLFxyXG4gICAgMTU6JyMxMzYzMGMnLFxyXG4gICAgMTY6JyMwNjlkYjMnLFxyXG4gICAgMTc6JyM5NDZhOTcnLFxyXG4gICAgMTg6JyMyYjdlOWEnLFxyXG4gICAgMTk6JyM2Y2E1MTEnLFxyXG4gICAgMjA6JyNkMTQwMDcnLFxyXG59XHJcblxyXG5jb25zdCBvcGVyYXRvcnMgPSB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJTbGVkZ2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjFcIlxyXG4gICAgfSxcclxuICAgIDEwMjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUaGF0Y2hlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6MVwiXHJcbiAgICB9LFxyXG4gICAgNTEzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoyXCJcclxuICAgIH0sXHJcbiAgICAxMDI1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhlcm1pdGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjJcIlxyXG4gICAgfSxcclxuICAgIDc3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlR3aXRjaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6M1wiXHJcbiAgICB9LFxyXG4gICAgMTAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1vbnRhZ25lXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTozXCJcclxuICAgIH0sXHJcbiAgICAyNTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHbGF6XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo0XCJcclxuICAgIH0sXHJcbiAgICA1MTU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGdXplXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo0XCJcclxuICAgIH0sXHJcbiAgICAyNjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGl0elwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSVFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjVcIlxyXG4gICAgfSxcclxuICAgIDI2MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJ1Y2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjZcIlxyXG4gICAgfSxcclxuICAgIDI2Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJsYWNrYmVhcmRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjdcIlxyXG4gICAgfSxcclxuICAgIDI2Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhcGl0YW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjhcIlxyXG4gICAgfSxcclxuICAgIDI2NDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkhpYmFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6OVwiXHJcbiAgICB9LFxyXG4gICAgMjY1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSmFja2FsXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpBXCJcclxuICAgIH0sXHJcbiAgICAyNjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJZaW5nXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpCXCJcclxuICAgIH0sXHJcbiAgICA1MjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJab2ZpYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6Q1wiXHJcbiAgICB9LFxyXG4gICAgMjY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRG9ra2FlYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkRcIlxyXG4gICAgfSxcclxuICAgIDUyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkVcIlxyXG4gICAgfSxcclxuICAgIDc4MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkZpbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDpFXCJcclxuICAgIH0sXHJcbiAgICAyNzE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNYXZlcmlja1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTBcIlxyXG4gICAgfSxcclxuICAgIDI3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk5vbWFkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxMVwiXHJcbiAgICB9LFxyXG4gICAgNTI5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR3JpZGxvY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb2trXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxM1wiXHJcbiAgICB9LFxyXG4gICAgMjc3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQW1hcnVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE2XCJcclxuICAgIH0sXHJcbiAgICAyNzg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJLYWxpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxN1wiXHJcbiAgICB9LFxyXG4gICAgMjgwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSWFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTlcIlxyXG4gICAgfSxcclxuICAgIDc5MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFjZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6MTdcIlxyXG4gICAgfSxcclxuICAgIDI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWmVyb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjE6MUJcIlxyXG4gICAgfSxcclxuICAgIDE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJSZWNydWl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwicmVjcnVpdFwiXHJcbiAgICB9LFxyXG4gICAgMjU2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU21va2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFcIlxyXG4gICAgfSxcclxuICAgIDUxMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk11dGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjFcIlxyXG4gICAgfSxcclxuICAgIDI1Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhc3RsZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MlwiXHJcbiAgICB9LFxyXG4gICAgNzY5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUHVsc2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjJcIlxyXG4gICAgfSxcclxuICAgIDI1ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRvY1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6M1wiXHJcbiAgICB9LFxyXG4gICAgNTE0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUm9va1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6M1wiXHJcbiAgICB9LFxyXG4gICAgNzcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2Fwa2FuXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo0XCJcclxuICAgIH0sXHJcbiAgICAxMDI3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGFjaGFua2FcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjRcIlxyXG4gICAgfSxcclxuICAgIDc3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphZ2VyXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo1XCJcclxuICAgIH0sXHJcbiAgICAxMDI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmFuZGl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo1XCJcclxuICAgIH0sXHJcbiAgICA1MTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGcm9zdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NlwiXHJcbiAgICB9LFxyXG4gICAgNTE4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmFsa3lyaWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjdcIlxyXG4gICAgfSxcclxuICAgIDUxOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhdmVpcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjhcIlxyXG4gICAgfSxcclxuICAgIDUyMDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVjaG9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjlcIlxyXG4gICAgfSxcclxuICAgIDUyMToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1pcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkFcIlxyXG4gICAgfSxcclxuICAgIDUyMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxlc2lvblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6QlwiXHJcbiAgICB9LFxyXG4gICAgMjY3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRWxhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpDXCJcclxuICAgIH0sXHJcbiAgICA1MjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJWaWdpbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6RFwiXHJcbiAgICB9LFxyXG4gICAgMjcwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWFlc3Ryb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6RlwiXHJcbiAgICB9LFxyXG4gICAgNTI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQWxpYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNsYXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMFwiXHJcbiAgICB9LFxyXG4gICAgNTI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FpZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTFcIlxyXG4gICAgfSxcclxuICAgIDI3Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1venppZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTJcIlxyXG4gICAgfSxcclxuICAgIDI3NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIldhcmRlblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTRcIlxyXG4gICAgfSxcclxuICAgIDI3Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdveW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE1XCJcclxuICAgIH0sXHJcbiAgICA1MzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYW1haVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTdcIlxyXG4gICAgfSxcclxuICAgIDI3OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk9yeXhcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE4XCJcclxuICAgIH0sXHJcbiAgICAyODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNZWx1c2lcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFBXCJcclxuICAgIH0sXHJcbiAgICAxMDQ2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXJ1bmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjE3XCJcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJhbmtPZmZzZXQgPSB7XHJcbiAgICAwOiAwLFxyXG4gICAgMTogMixcclxuICAgIDI6IDMsXHJcbiAgICAzOiA0LFxyXG4gICAgNDogNSxcclxuICAgIDU6IDcsXHJcbiAgICA2OiA4LFxyXG4gICAgNzogOSxcclxuICAgIDg6IDEwLFxyXG4gICAgOTogMTIsXHJcbiAgICAxMDogMTMsXHJcbiAgICAxMTogMTQsXHJcbiAgICAxMjogMTUsXHJcbiAgICAxMzogNTAsXHJcbiAgICAxNDogMTYsXHJcbiAgICAxNTogMTcsXHJcbiAgICAxNjogMTgsXHJcbiAgICAxNzogMTksXHJcbiAgICAxODogMjAsXHJcbiAgICAxOTogMjEsXHJcbiAgICAyMDogMjIsXHJcbiAgICAyMTogMjIsXHJcbiAgICAyMjogMjIsXHJcbiAgICAyMzogMjIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgcmFpbmJvd0NsYXNzSWQsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMSxcclxuICAgIGludGVyZXN0aW5nRmVhdHVyZXMyLFxyXG4gICAgd2luZG93TmFtZXMsXHJcbiAgICBob3RrZXlzLFxyXG4gICAgZ2FtZU1vZGVzUFZQLFxyXG4gICAgZ2FtZU1vZGVzUFZFLFxyXG4gICAgZGF0YWJhc2VPYmplY3QsXHJcbiAgICBzZWFzb25Db2xvcnMsXHJcbiAgICByYW5rT2Zmc2V0LFxyXG4gICAgb3BlcmF0b3JzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJzIHtcclxuICAgIHB1YmxpYyBzZXRTaG9ydGN1dFRleHQoc2hvcnRjdXRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5nZXQocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdGtleSA9IHJlc3VsdC5nYW1lc1snMTA4MjYnXVswXS5iaW5kaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhvdGtleSA9PT0gJ1VuYXNzaWduZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGN1dENvbnRhaW5lci5pbm5lckhUTUwgPSAnVU5BU1NJR05FRCB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gaG90a2V5ICsgJyB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXkgaW4gZ2FtZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhcHAgaG90a2V5IFwiJHtob3RrZXl9XCJgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZ2FtZS1ldmVudHMtc3RhdHVzLm92ZXJ3b2xmLmNvbS8xMDgyNl9wcm9kLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcndvbGZTdGF0dXMgPSBkYXRhLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgc29tZSBmdW5jdGlvbnMgbWlnaHQgbm90IHdvcmsgLSB3ZeKAmWxsIGZpeCBpdCBzaG9ydGx5PC9oND4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgT3ZlcndvbGYgYXBwIEFQSSBoYXMgc3RvcHBlZCB3b3JraW5nIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvdmVyd29sZiBzdGF0dXMgXCIke292ZXJ3b2xmU3RhdHVzfVwiYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnRlcm5ldFN0YXR1cyhpbmV0ZXJuZXRTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJuZXRTdGF0dXMgPSBuYXZpZ2F0b3Iub25MaW5lO1xyXG5cclxuICAgICAgICBpZiAoaW50ZXJuZXRTdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGluZXRlcm5ldFN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbnRlcm5ldCBzdGF0dXMgXCIke2ludGVybmV0U3RhdHVzfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRhYmxlVGFiKHRhYjogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllci10clwiKS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFua2VkU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFua2VkJyArIGkgKyBqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3VhbFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc3VhbCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFzb25TdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFzb25hbCcgKyBpICsgaik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmtlZFN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYiA9PT0gJ3JhbmtlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2Nhc3VhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ3NlYXNvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHRhYmxlIHRhYiBcIiR7dGFifVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dEZXRhaWxlZFBsYXllcihkZXRhaWxlZHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChkZXRhaWxlZHN0YXR1cykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgZGV0YWlsZWQgc3RhdHMgXCIkeyFkZXRhaWxlZHN0YXR1c31cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV0YWlsZWRzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRoZW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpKTtcclxuICAgICAgICBjb25zdCBzdHlsZVZhcmlhYmxlcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiI0YwRjBGMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjYxXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiMxMjEyMTJcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjRkZGRkZGMTRcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiIzAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjRkZGRkZGMUVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJ1cmwoJy9pbWcvYmFja2dyb3VuZC53ZWJwJylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1saWdodC1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpLnNldEF0dHJpYnV0ZSgneGxpbms6aHJlZicsICcvaW1nL3NvY2lhbG1lZGlhX2ljb25zLnN2ZyNyNmRiJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKS5zZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnLCAnL2ltZy9zb2NpYWxtZWRpYV9pY29ucy5zdmcjcjZkYmRhcmsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudGhlbWUgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiMzMzMzMzNcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLWJnLWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy1iZy1jb2xvclwiLCBcIiNiMGIwYjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ0bi1jb2xvclwiLCBcIiM5OTk5OTlcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1kYXJrLWxvZ28uc3ZnXCIpJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykuc2V0QXR0cmlidXRlKCd4bGluazpocmVmJywgJy9pbWcvc29jaWFsbWVkaWFfaWNvbnMuc3ZnI3I2ZGJkYXJrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGZldGNoQ29uZmlnKCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3N0YWdpbmctYXBpLnN0YXRzZGIubmV0L3I2L292ZXJsYXkvY29uZmlnJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeShkYXRhLnBheWxvYWQucmFpbmJvdykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy52ZXJzaW9uICE9IGRhdGEucGF5bG9hZC5yYWluYm93LnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGF0YWJhc2VPYmplY3QgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcclxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVJREIobmFtZUlEQjogc3RyaW5nLCBrZXlQYXRoSURCOiBzdHJpbmcsIHZlcnNpb246IG51bWJlciwgaW5kZXhlcyA9IG51bGwpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicsIHZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlOiBJREJPYmplY3RTdG9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUobmFtZUlEQiwgeyBrZXlQYXRoOiBrZXlQYXRoSURCIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBldmVudC50YXJnZXQudHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleChpbmRleCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShvYmplY3RTdG9yZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RvcmVUb0lEQihuYW1lSURCOiBzdHJpbmcsIHZhbHVlSURCLCBpbml0aWF0ZUlEQjogYm9vbGVhbik6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGJPYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkd3JpdGUnKS5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWluaXRpYXRlSURCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGJPYmplY3RTdG9yZS5wdXQodmFsdWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWF0ZUlEQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRiT2JqZWN0U3RvcmUuYWRkKHZhbHVlSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlYWRGcm9tSURCKG5hbWVJREI6IHN0cmluZywga2V5SURCOiBudW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYiA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERiLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3REYi5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3REYi5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYk9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUobmFtZUlEQik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gZGJPYmplY3RTdG9yZS5nZXQoa2V5SURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlYWRGcm9tSURCUmFuZ2UobmFtZUlEQjogc3RyaW5nLCBpbmRleDogc3RyaW5nLCBiZWdpblJhbmdlOiBzdHJpbmcsIGVuZFJhbmdlOiBzdHJpbmcsIGJlZ2luOiBudW1iZXIsIGVuZDogbnVtYmVyKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGIgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicpO1xyXG4gICAgICAgICAgICBsZXQga2V5UmFuZ2VWYWx1ZTogSURCS2V5UmFuZ2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmVnaW5SYW5nZSAmJiBlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLmJvdW5kKGJlZ2luUmFuZ2UsIGVuZFJhbmdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiZWdpblJhbmdlICYmICFlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLmxvd2VyQm91bmQoYmVnaW5SYW5nZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJlZ2luUmFuZ2UgJiYgZW5kUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGtleVJhbmdlVmFsdWUgPSBJREJLZXlSYW5nZS51cHBlckJvdW5kKGVuZFJhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3REYi5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0RGIuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0RGIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShuYW1lSURCKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmluZGV4KGluZGV4KS5vcGVuQ3Vyc29yKGtleVJhbmdlVmFsdWUsICdwcmV2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwLCBqID0gMCwgcmVzdWx0ID0gbmV3IE9iamVjdDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJzb3IgPSByZXF1ZXN0LnJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmVnaW4gIT09IDAgJiYgaSA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmFkdmFuY2UoYmVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBiZWdpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJzb3IgJiYgaSA8PSBlbmQgJiYgaSA+PSBiZWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2N1cnNvci52YWx1ZS50aW1lU3RhbXBdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjdXJzb3IudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaW5pdEFsbElEQigpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdERheU9mWWVhcjogYW55ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3REYXlzT2ZZZWFyOiBhbnkgPSAodG9kYXkgLSBmaXJzdERheU9mWWVhcikgLyA4NjQwMDAwMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQldlZWtzID0gYCR7TWF0aC5jZWlsKChwYXN0RGF5c09mWWVhciArIGZpcnN0RGF5T2ZZZWFyLmdldERheSgpICsgMSkgLyA3KX0sJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQkRheXMgPSB0b2RheS5nZXREYXRlKCkgKyAnLCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJywnICsgdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUlEQldlZWtzOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlSURCV2Vla3NbaV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGFiYXNlT2JqZWN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsdWVJREJXZWVrcy53ZWVrID0ga2V5SURCV2Vla3M7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVJREJEYXlzOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGFiYXNlT2JqZWN0KSk7XHJcbiAgICAgICAgICAgIHZhbHVlSURCRGF5cy5kYXRlID0ga2V5SURCRGF5cztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UxID0gdGhpcy5zdG9yZVRvSURCKCd3ZWVrcycsIHZhbHVlSURCV2Vla3MsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMiA9IHRoaXMuc3RvcmVUb0lEQignZGF5cycsIHZhbHVlSURCRGF5cywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGRpc3BsYXlEYWlseVdlZWtseSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdERheU9mWWVhcjogYW55ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3REYXlzT2ZZZWFyOiBhbnkgPSAodG9kYXkgLSBmaXJzdERheU9mWWVhcikgLyA4NjQwMDAwMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQldlZWtzID0gYCR7TWF0aC5jZWlsKChwYXN0RGF5c09mWWVhciArIGZpcnN0RGF5T2ZZZWFyLmdldERheSgpICsgMSkgLyA3KX0sJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQkRheXMgPSB0b2RheS5nZXREYXRlKCkgKyAnLCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJywnICsgdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXR0aW5ncycpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UxID0gdGhpcy5yZWFkRnJvbUlEQignd2Vla3MnLCBrZXlJREJXZWVrcylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdFdlZWsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3ZWVrbHlTdGF0czogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdlbmVyYWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXN1YWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmtpbGxzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC53aW5zICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5sb3NzZXMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMod2Vla2x5U3RhdHMpLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNb2RlID0gd2Vla2x5U3RhdHNbb2JqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZS5kZWF0aHMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAoKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzKS50b0ZpeGVkKDIpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9IE1hdGgucm91bmQoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMgKiAzMykgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVNb2RlLmRlYXRocyA9PT0gMCAmJiBnYW1lTW9kZS5raWxscyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICdJTkYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcxMDAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICcwLjAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9IChNYXRoLnJvdW5kKGdhbWVNb2RlLndpbnMgLyAoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgKiAxMDApKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9IGdhbWVNb2RlLndsICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVXTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQod2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5rZCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS53bCArICclJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWVrbHlTdGF0czpcIiwgd2Vla2x5U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2Vla2x5U3RhdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UyID0gdGhpcy5yZWFkRnJvbUlEQignZGF5cycsIGtleUlEQkRheXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHREYXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFpbHlTdGF0czogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5raWxscyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5kZWF0aHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5sb3NzZXMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6ICByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLndpbnMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXN1YWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhaWx5U3RhdHMpLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNb2RlID0gZGFpbHlTdGF0c1tvYmpdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNb2RlLmRlYXRocyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAoKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzKS50b0ZpeGVkKDIpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9IE1hdGgucm91bmQoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMgKiAzMykgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVNb2RlLmRlYXRocyA9PT0gMCAmJiBnYW1lTW9kZS5raWxscyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnSU5GJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMTAwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnMC4wMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gKE1hdGgucm91bmQoZ2FtZU1vZGUud2lucyAvIChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAqIDEwMCkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gZ2FtZU1vZGUud2wgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVLRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5LXRleHQnKS5pbm5lckhUTUwgPSBwYXJzZUZsb2F0KGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5rZCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5LXRleHQnKS5pbm5lckhUTUwgPSBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ud2wgKyAnJSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGFpbHlTdGF0czpcIiwgZGFpbHlTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYWlseVN0YXRzO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzTmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFpbHktd2Vla2x5LW5hdi1idG4nKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0c05hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3RhdHNOYXZCdG5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzLmNpcmNsZSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuL293LXdpbmRvdyc7XHJcblxyXG5jb25zdCBjb250cm9sbGVycyA9IG5ldyBDb250cm9sbGVycywgb3dXaW5kb3c6IE9XV2luZG93ID0gbmV3IE9XV2luZG93O1xyXG5cclxubGV0IGxvY2FsRGVza3RvcE9ubHkgPSBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHksIHZhbHVlc0N1c3RvbSwgbG9jYWw7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlIHtcclxuICAgIHByaXZhdGUgZHRhYmxlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkdGhlbWU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtYXhpbWl6ZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGRpc3BsYXk6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtb25pdG9yczogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGNpcmNsZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmR0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWR0YWJsZSAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRoZW1lIC5jdXN0b20tb3B0aW9uJykgO1xyXG4gICAgICAgIHRoaXMuZG1heGltaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1heGltaXplIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRkaXNwbGF5IC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kbW9uaXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbW9uaXRvcnMgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kY2lyY2xlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYXRlTG9jYWxTdG9yYWdlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgfHwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpKS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmxlJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXhpbWl6ZSc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICBcInRoZW1lXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlXCI6IFwiZ2VuZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibW9uaXRvcklkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY2FsZVNsaWRlcicsICdcIjFcIicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aCA8IDkpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2YWx1ZXNUYWJsZScsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAwIDogJ0NvdW50cnknLFxyXG4gICAgICAgICAgICAgICAgICAgIDEgOiAnTFZMJyxcclxuICAgICAgICAgICAgICAgICAgICAyIDogJ0tpbGxzJyxcclxuICAgICAgICAgICAgICAgICAgICAzIDogJ0RlYXRocycsXHJcbiAgICAgICAgICAgICAgICAgICAgNCA6ICdLL0QnLFxyXG4gICAgICAgICAgICAgICAgICAgIDUgOiAnV2lucycsXHJcbiAgICAgICAgICAgICAgICAgICAgNiA6ICdMb3NzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDcgOiAnVy9MJyxcclxuICAgICAgICAgICAgICAgICAgICA4IDogJ0hhY2tlciAlJ1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rlc2t0b3BPbmx5JywgJ1wiMFwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b20gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSk7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU2V0dGluZyhzZWxlY3RlZE9wdGlvbjogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ0lkID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCdzZXR0aW5naWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctdmFsdWVUYWJsZScpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b21baW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgndmFsdWVzVGFibGUnLCB2YWx1ZXNDdXN0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRoZW1lJykge1xyXG4gICAgICAgICAgICBsb2NhbC50aGVtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcnMuc2V0VGhlbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWR0YWJsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwudGFibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRkaXNwbGF5Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ2Rlc2t0b3BPbmx5JywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1heGltaXplJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tYXhpbWl6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1vbml0b3JzJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tb25pdG9ySWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRjaXJjbGUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLmNpcmNsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHNsaWRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzY2FsZVNsaWRlcicsIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3MoKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHtcclxuICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiAwLFxyXG4gICAgICAgICAgICBcInJhbmtlZFwiIDogMSxcclxuICAgICAgICAgICAgXCJjYXN1YWxcIiA6IDIsXHJcbiAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IDNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzQXJyID0gW1xyXG4gICAgICAgICAgICB0aGlzLmR0YWJsZVtsb2NhbC50YWJsZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZHRoZW1lW2xvY2FsLnRoZW1lXSxcclxuICAgICAgICAgICAgdGhpcy5kbWF4aW1pemVbbG9jYWwubWF4aW1pemVdLFxyXG4gICAgICAgICAgICB0aGlzLmRkaXNwbGF5W2xvY2FsRGVza3RvcE9ubHkucmVwbGFjZSgvXCIvZywgJycpXSxcclxuICAgICAgICAgICAgdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSxcclxuICAgICAgICAgICAgdGhpcy5kY2lyY2xlW2NpcmNsZXNbbG9jYWwuY2lyY2xlXV0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHNldHRpbmdzQXJyW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNldHRpbmcgIT09IHRoaXMuZG1vbml0b3JzW2xvY2FsLm1vbml0b3JJZF0pIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IHNldHRpbmcudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZyA9PT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpW2xvY2FsLm1vbml0b3JJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LmdldE1vbml0b3JzTGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obW9uaXRvckxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gbW9uaXRvckxpc3QuZGlzcGxheXNbbG9jYWwubW9uaXRvcklkXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93U2l6ZS1zbGlkZXInKSBhcyBhbnkpLnZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlci12YWx1ZScpLmlubmVySFRNTCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzQ3VzdG9tW2ldLnJlcGxhY2UoL1sgL10vZywgJy0nKSArIGk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgc2Vhc29uQ29sb3JzLCByYW5rT2Zmc2V0IH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmxldCBwbGF5ZXJzOiBhbnkgPSB7fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRjaCB7XHJcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZTtcclxuICAgIHByaXZhdGUgZ2FtZU1vZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGltZVN0YW1wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG1hdGNoSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgbWFwSWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lTW9kZTogc3RyaW5nLCBtYXRjaElkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZSA9IGdhbWVNb2RlO1xyXG4gICAgICAgIHRoaXMubWF0Y2hJZCA9IG1hdGNoSWQ7XHJcbiAgICAgICAgdGhpcy50aW1lU3RhbXAgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWF0Y2hJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1hcElkKG1hcElkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1hcElkID0gbWFwSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHBsYXllckpvaW4oaWQ6IHN0cmluZywgc3RhdHMsIGluZm8pOiBQcm9taXNlIDwgYW55ID4ge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhhdC5wbGF5ZXJTZWFyY2goaWQsIHN0YXRzLCBpbmZvKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYWRkUGxheWVyKGlkLCBzdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGxheWVycyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBwbGF5ZXJTZWFyY2goaWQ6IHN0cmluZywgc3RhdHMsIGluZm8pOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zZW5kUGxheWVyUGluZyhzdGF0cy5uYW1lLCBzdGF0cy50ZWFtLCB0aGlzLm1hdGNoSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkuc3RhdHNkYi5uZXQvcjYvb3ZlcmxheS8ke3N0YXRzLm5hbWV9YDtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuZmV0Y2godXJsLCB7Y2FjaGU6ICduby1jYWNoZSd9LCAxMClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0gPSByZXN1bHQucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS50ZWFtID0gc3RhdHMudGVhbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMucmFuay5tYXRjaGVzcGxheWVkID0gcGxheWVyc1tpZF0uc3RhdHMucmFuay53aW5zICsgcGxheWVyc1tpZF0uc3RhdHMucmFuay5sb3NzZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLm1heF9tbXIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMucmFuay5tYXhfbW1yID0gcGxheWVyc1tpZF0uc3RhdHMucmFuay5tbXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyc1tpZF0uc3RhdHMucmFuay5yYW5rID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsucHJldmlvdXNfcmFuayA9IHBsYXllcnNbaWRdLnN0YXRzLnJhbmsucmFuaztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLnByZXZpb3VzX3JhbmsgPSBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLnJhbmsgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcnNbaWRdLnN0YXRzLnJhbmsucmFuayA9PT0gMjMgfHwgcGxheWVyc1tpZF0uc3RhdHMucmFuay5yYW5rID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsubmV4dF9yYW5rID0gcGxheWVyc1tpZF0uc3RhdHMucmFuay5yYW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsubmV4dF9yYW5rID0gcGxheWVyc1tpZF0uc3RhdHMucmFuay5yYW5rICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsua2QgPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMucmFuay5raWxscyAvIHBsYXllcnNbaWRdLnN0YXRzLnJhbmsuZGVhdGhzICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rZWQua2QgPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMucmFua2VkLmtpbGxzIC8gcGxheWVyc1tpZF0uc3RhdHMucmFua2VkLmRlYXRocyAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMuY2FzdWFsLmtkID0gfn5NYXRoLnJvdW5kKHBsYXllcnNbaWRdLnN0YXRzLmNhc3VhbC5raWxscyAvIHBsYXllcnNbaWRdLnN0YXRzLmNhc3VhbC5kZWF0aHMgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwua2QgPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC5raWxscyAvIHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwuZGVhdGhzICogMTAwKSAvIDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMucmFuay53bCA9IH5+TWF0aC5yb3VuZChwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLndpbnMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rLm1hdGNoZXNwbGF5ZWQgKiAxMDAwKSAvIDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnNbaWRdLnN0YXRzLnJhbmtlZC53bCA9IH5+TWF0aC5yb3VuZChwbGF5ZXJzW2lkXS5zdGF0cy5yYW5rZWQud2lucyAvIHBsYXllcnNbaWRdLnN0YXRzLnJhbmtlZC5tYXRjaGVzcGxheWVkICogMTAwMCkgLyAxMDtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5jYXN1YWwud2wgPSB+fk1hdGgucm91bmQocGxheWVyc1tpZF0uc3RhdHMuY2FzdWFsLndpbnMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5jYXN1YWwubWF0Y2hlc3BsYXllZCAqIDEwMDApIC8gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC53bCA9IH5+TWF0aC5yb3VuZChwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLndpbnMgLyBwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLm1hdGNoZXNwbGF5ZWQgKiAxMDAwKSAvIDEwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLnBlbmV0cmF0aW9uX3JhdGlvID0gfn5NYXRoLnJvdW5kKHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwucGVuZXRyYXRpb25zIC8gcGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC5raWxscyAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyc1tpZF0uc3RhdHMuZ2VuZXJhbC5oZWFkc2hvdF9yYXRpbyA9IH5+TWF0aC5yb3VuZChwbGF5ZXJzW2lkXS5zdGF0cy5nZW5lcmFsLmhlYWRzaG90cyAvIHBsYXllcnNbaWRdLnN0YXRzLmdlbmVyYWwua2lsbHMgKiAxMDApIC8gMTAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBmZXRjaCh1cmw6IHN0cmluZywgb3B0aW9ucywgdHJpZXM6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2goZW5jb2RlVVJJKHVybCksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJpZXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuZmV0Y2godXJsLCBvcHRpb25zLCB0cmllcyAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRQbGF5ZXJQaW5nKG5hbWU6IHN0cmluZywgdGVhbTogc3RyaW5nLCBsb2JieUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBwaW5nVXNlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHRlYW06IHRlYW0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgbG9iYnlJZDogbG9iYnlJZCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBpbmdVc2VyRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAocGluZ1VzZXJEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHBpbmdVc2VyRGF0YVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vc3RhZ2luZy1hcGkuc3RhdHNkYi5uZXQvcjYvb3ZlcmxheS9waW5nJywgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGB3ZWJzaXRlIHBpbmcgXCIke25hbWV9XCIsIFwiJHt0ZWFtfVwiLCBcIiR7bG9iYnlJZH1cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkUGxheWVyKGlkOiBzdHJpbmcsIHN0YXRzKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyU3RhdHMgPSBwbGF5ZXJzW2lkXTtcclxuXHJcbiAgICAgICAgbGV0IHRhYmxlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRzLnRlYW0gPT09ICdCbHVlJykge1xyXG4gICAgICAgICAgICB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLWJsdWUtdGJvZHknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRzLnRlYW0gPT09ICdPcmFuZ2UnKSB7XHJcbiAgICAgICAgICAgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW0tb3JhbmdlLXRib2R5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdGF0c09iamVjdCA9IHtcclxuICAgICAgICAgICAgXCJFbXB0eVwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAxIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIDIgOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQ291bnRyeVwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IGA8aW1nIHNyYz1cImh0dHBzOi8vYXBpLnN0YXRzZGIubmV0L2Fzc2V0cy9mbGFncy8ke3BsYXllclN0YXRzLnVzZXIuY291bnRyeUNvZGV9XCIgYWx0PVwiJHtwbGF5ZXJTdGF0cy51c2VyLmNvdW50cnlDb2RlfVwiIGNsYXNzPVwiaW1nLWNvdW50cnlcIj5gLFxyXG4gICAgICAgICAgICAgICAgMSA6IGA8aW1nIHNyYz1cImh0dHBzOi8vYXBpLnN0YXRzZGIubmV0L2Fzc2V0cy9mbGFncy8ke3BsYXllclN0YXRzLnVzZXIuY291bnRyeUNvZGV9XCIgYWx0PVwiJHtwbGF5ZXJTdGF0cy51c2VyLmNvdW50cnlDb2RlfVwiIGNsYXNzPVwiaW1nLWNvdW50cnlcIj5gLFxyXG4gICAgICAgICAgICAgICAgMiA6IGA8aW1nIHNyYz1cImh0dHBzOi8vYXBpLnN0YXRzZGIubmV0L2Fzc2V0cy9mbGFncy8ke3BsYXllclN0YXRzLnVzZXIuY291bnRyeUNvZGV9XCIgYWx0PVwiJHtwbGF5ZXJTdGF0cy51c2VyLmNvdW50cnlDb2RlfVwiIGNsYXNzPVwiaW1nLWNvdW50cnlcIj5gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiTFZMXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogcGxheWVyU3RhdHMuc3RhdHMucHJvZ3Jlc3Npb24ubGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAxIDogcGxheWVyU3RhdHMuc3RhdHMucHJvZ3Jlc3Npb24ubGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMucHJvZ3Jlc3Npb24ubGV2ZWxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gXCJIYWNrZXIgJVwiIDoge1xyXG4gICAgICAgICAgICAvLyAgICAgMCA6IHBsYXllclN0YXRzLmhhY2tlcl9wZXJjZW50YWdlICsgJyUnLFxyXG4gICAgICAgICAgICAvLyAgICAgMSA6IHBsYXllclN0YXRzLmhhY2tlcl9wZXJjZW50YWdlICsgJyUnLFxyXG4gICAgICAgICAgICAvLyAgICAgMiA6IHBsYXllclN0YXRzLmhhY2tlcl9wZXJjZW50YWdlICsgJyUnXHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIFwiSGFja2VyICVcIiA6IHtcclxuICAgICAgICAgICAgICAgIDAgOiAnMCUnLFxyXG4gICAgICAgICAgICAgICAgMSA6ICcwJScsXHJcbiAgICAgICAgICAgICAgICAyIDogJzAlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIktpbGxzXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogcGxheWVyU3RhdHMuc3RhdHMucmFuay5raWxscyxcclxuICAgICAgICAgICAgICAgIDEgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLmtpbGxzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRGVhdGhzXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogcGxheWVyU3RhdHMuc3RhdHMucmFuay5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAxIDogcGxheWVyU3RhdHMuc3RhdHMucmFua2VkLmRlYXRocyxcclxuICAgICAgICAgICAgICAgIDIgOiBwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwuZGVhdGhzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiSy9EXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogcGxheWVyU3RhdHMuc3RhdHMucmFuay5rZC50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5rZC50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAgICAgMiA6IHBsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5rZC50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiV2luc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2lucyxcclxuICAgICAgICAgICAgICAgIDEgOiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQud2lucyxcclxuICAgICAgICAgICAgICAgIDIgOiBwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwud2luc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkxvc3Nlc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLmxvc3Nlc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlcvTFwiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2wudG9GaXhlZCgxKSArIFwiJVwiLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLnJhbmtlZC53bC50b0ZpeGVkKDEpICsgXCIlXCIsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLndsLnRvRml4ZWQoMSkgKyBcIiVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJNYXggTU1SXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogTWF0aC50cnVuYyhwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1heF9tbXIpLFxyXG4gICAgICAgICAgICAgICAgMSA6IE1hdGgudHJ1bmMocGxheWVyU3RhdHMuc3RhdHMucmFuay5tYXhfbW1yKSxcclxuICAgICAgICAgICAgICAgIDIgOiBNYXRoLnRydW5jKHBsYXllclN0YXRzLnN0YXRzLnJhbmsubWF4X21tcilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJIUy9LXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogcGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5oZWFkc2hvdF9yYXRpby50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAgICAgMSA6IHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuaGVhZHNob3RfcmF0aW8udG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIDIgOiBwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmhlYWRzaG90X3JhdGlvLnRvRml4ZWQoMilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJQRU4vS1wiIDoge1xyXG4gICAgICAgICAgICAgICAgMCA6IHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwucGVuZXRyYXRpb25fcmF0aW8udG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIDEgOiBwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnBlbmV0cmF0aW9uX3JhdGlvLnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5wZW5ldHJhdGlvbl9yYXRpby50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiR2FtZXMgcGxheWVkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogcGxheWVyU3RhdHMuc3RhdHMucmFuay53aW5zICsgcGxheWVyU3RhdHMuc3RhdHMucmFuay5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAxIDogcGxheWVyU3RhdHMuc3RhdHMucmFua2VkLm1hdGNoZXNwbGF5ZWQsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLm1hdGNoZXNwbGF5ZWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJNTVIgY2hhbmdlXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogcGxheWVyU3RhdHMuc3RhdHMucmFuay5sYXN0X21hdGNoX21tcl9jaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAxIDogcGxheWVyU3RhdHMuc3RhdHMucmFuay5sYXN0X21hdGNoX21tcl9jaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAyIDogcGxheWVyU3RhdHMuc3RhdHMucmFuay5sYXN0X21hdGNoX21tcl9jaGFuZ2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJBbHBoYSAlXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAwIDogTWF0aC5yb3VuZChwbGF5ZXJTdGF0cy5zdGF0cy5wcm9ncmVzc2lvbi5sb290Ym94X3Byb2JhYmlsaXR5IC8gMTAwKSArIFwiJVwiLFxyXG4gICAgICAgICAgICAgICAgMSA6IE1hdGgucm91bmQocGxheWVyU3RhdHMuc3RhdHMucHJvZ3Jlc3Npb24ubG9vdGJveF9wcm9iYWJpbGl0eSAvIDEwMCkgKyBcIiVcIixcclxuICAgICAgICAgICAgICAgIDIgOiBNYXRoLnJvdW5kKHBsYXllclN0YXRzLnN0YXRzLnByb2dyZXNzaW9uLmxvb3Rib3hfcHJvYmFiaWxpdHkgLyAxMDApICsgXCIlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VzVFN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllclRyVmFsdWUgPWBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci10clwiIGlkPSR7aWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3JhbmtzL3Jhbmske3BsYXllclN0YXRzLnN0YXRzLnJhbmsucmFua30uc3ZnXCIgYWx0PVwicmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3BsYXllclN0YXRzLnN0YXRzLnJhbmsubW1yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPiR7c3RhdHMubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQwJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1swXV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDAke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzBdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDAke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzBdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQxJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1sxXV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDEke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzFdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDEke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzFdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQyJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1syXV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDIke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzJdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDIke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzJdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQzJHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1szXV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDMke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzNdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDMke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzNdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQ0JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s0XV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDQke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzRdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDQke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzRdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQ1JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s1XV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDUke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzVdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDUke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzVdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQ2JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s2XV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDYke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzZdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDYke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzZdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQ3JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s3XV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDcke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzddXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDcke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzddXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHJhbmtlZCBjdXJyZW50XCIgaWQ9XCJyYW5rZWQ4JHtpZH1cIj4ke3N0YXRzT2JqZWN0W2N1c1RTdGF0c1s4XV1bMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBjYXN1YWxcIiBpZD1cImNhc3VhbDgke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzhdXVsyXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHNlYXNvbmFsXCIgaWQ9XCJzZWFzb25hbDgke2lkfVwiPiR7c3RhdHNPYmplY3RbY3VzVFN0YXRzWzhdXVswXX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgICAgICAgdGFibGUuaW5uZXJIVE1MICs9IHBsYXllclRyVmFsdWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIGN1c1RTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1c1RTdGF0cy5oYXNPd25Qcm9wZXJ0eShpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21TdGF0ID0gY3VzVFN0YXRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbVN0YXQgPT09ICdFbXB0eScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJhbmtlZCR7aW5kZXggKyBpZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2FzdWFsJHtpbmRleCArIGlkfWApLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzZWFzb25hbCR7aW5kZXggKyBpZH1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoZWFkOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2YWx1ZS0nICsgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcGxheWVyIGpvaW5lZCBcIiR7cGxheWVyU3RhdHMudXNlci5uaWNrbmFtZX0sICR7aWR9XCJgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHBsYXllckxlYXZlKGlkOiBzdHJpbmcpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW2lkXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcGxheWVyIGxlZnQgXCIke3BsYXllcnNbaWRdLnVzZXIubmlja25hbWV9LCAke2lkfVwiYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBsYXllcnNbaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludERldGFpbGVkUGxheWVyKHBsYXllclRyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmICghcGxheWVyVHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm9zdGVySWQgPSBwbGF5ZXJUci5pZDtcclxuICAgICAgICBjb25zdCBwbGF5ZXJTdGF0cyA9IHBsYXllcnNbcm9zdGVySWRdO1xyXG5cclxuICAgICAgICBsZXQgdGltZXBsYXllZDogYW55ID0ge1xyXG4gICAgICAgICAgICBnZW5lcmFsU2VjOiBwYXJzZUludChwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnRpbWVwbGF5ZWQsIDEwKSArIHBhcnNlSW50KHBsYXllclN0YXRzLnN0YXRzLnB2ZS50aW1lcGxheWVkLCAxMCksXHJcbiAgICAgICAgICAgIHJhbmtlZFNlYzogcGFyc2VJbnQocGxheWVyU3RhdHMuc3RhdHMucmFua2VkLnRpbWVwbGF5ZWQsIDEwKSxcclxuICAgICAgICAgICAgY2FzdWFsU2VjOiBwYXJzZUludChwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwudGltZXBsYXllZCwgMTApLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRpbWVwbGF5ZWQuZ2VuZXJhbEhvdXJzID0gTWF0aC5mbG9vcih0aW1lcGxheWVkLmdlbmVyYWxTZWMgLyAzNjAwKTtcclxuICAgICAgICB0aW1lcGxheWVkLmdlbmVyYWxNaW51dGVzID0gTWF0aC5mbG9vcih0aW1lcGxheWVkLmdlbmVyYWxTZWMgLyA2MCkgJSA2MDtcclxuICAgICAgICB0aW1lcGxheWVkLnJhbmtlZEhvdXJzID0gTWF0aC5mbG9vcih0aW1lcGxheWVkLnJhbmtlZFNlYyAvIDM2MDApO1xyXG4gICAgICAgIHRpbWVwbGF5ZWQucmFua2VkTWludXRlcyA9IE1hdGguZmxvb3IodGltZXBsYXllZC5yYW5rZWRTZWMgLyA2MCkgJSA2MDtcclxuICAgICAgICB0aW1lcGxheWVkLmNhc3VhbEhvdXJzID0gTWF0aC5mbG9vcih0aW1lcGxheWVkLmNhc3VhbFNlYyAvIDM2MDApO1xyXG4gICAgICAgIHRpbWVwbGF5ZWQuY2FzdWFsTWludXRlcyA9IE1hdGguZmxvb3IodGltZXBsYXllZC5jYXN1YWxTZWMgLyA2MCkgJSA2MDtcclxuXHJcbiAgICAgICAgbGV0IHNlYXNvblJhbmtCYXI6IHN0cmluZywgc2Vhc29uUmFua0JhclRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKHBsYXllclN0YXRzLnN0YXRzLnJhbmsucmFuayAhPT0gMCAmJiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm5leHRfcmFua19tbXIgPiBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1tcikge1xyXG4gICAgICAgICAgICBzZWFzb25SYW5rQmFyID0gKChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1tciAtIHBsYXllclN0YXRzLnN0YXRzLnJhbmsucHJldmlvdXNfcmFua19tbXIpIC8gKHBsYXllclN0YXRzLnN0YXRzLnJhbmsubmV4dF9yYW5rX21tciAtIHBsYXllclN0YXRzLnN0YXRzLnJhbmsucHJldmlvdXNfcmFua19tbXIpICogMTAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlYXNvblJhbmtCYXIgPSAnMTAwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnJhbmsgIT09IDAgJiYgcGxheWVyU3RhdHMuc3RhdHMucmFuay5uZXh0X3JhbmtfbW1yID4gcGxheWVyU3RhdHMuc3RhdHMucmFuay5tbXIpIHtcclxuICAgICAgICAgICAgc2Vhc29uUmFua0JhclRleHQgPSBwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1tciArICcgLyAnICsgcGxheWVyU3RhdHMuc3RhdHMucmFuay5uZXh0X3JhbmtfbW1yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlYXNvblJhbmtCYXJUZXh0ID0gcGxheWVyU3RhdHMuc3RhdHMucmFuay5tbXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZXRhaWxlZFNlYXNvbmFsID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LWhlYWRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+U2Vhc29uYWwgU3RhdGlzdGljczwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIHNlYXNvbi1yYW5rLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb24tcmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLXByZXZpb3VzLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInNlYXNvbi1wcmV2aW91cy1pbWdcIiBzcmM9XCIvaW1nL3JhbmtzL3Jhbmske3BsYXllclN0YXRzLnN0YXRzLnJhbmsucmFua30uc3ZnXCIgYWx0PVwicmFuayBpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb24tcmFuay1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb24tbWF4LW1tci1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInNlYXNvbi1tYXgtbW1yXCI+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1heF9tbXJ9PHNwYW4+IE1heCBNbXI8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLWN1cnJlbnQtcmFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFzb24tcmFuay1iYXJcIiBzdHlsZT1cIndpZHRoOiR7c2Vhc29uUmFua0Jhcn0lO1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwic2Vhc29uLXJhbmstYmFyLXRleHRcIj4ke3NlYXNvblJhbmtCYXJUZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbi1uZXh0LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInNlYXNvbi1uZXh0LWltZ1wiIHNyYz1cIi9pbWcvcmFua3MvcmFuayR7cGxheWVyU3RhdHMuc3RhdHMucmFuay5uZXh0X3Jhbmt9LnN2Z1wiIGFsdD1cInJhbmsgaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLW1heC1yYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uLW1heC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwic2Vhc29uLW1heC1pbWdcIiBzcmM9XCIvaW1nL3JhbmtzL3Jhbmske3BsYXllclN0YXRzLnN0YXRzLnJhbmsubWF4X3Jhbmt9LnN2Z1wiIGFsdD1cInJhbmsgaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb24tbWF4LXJhbmstdGV4dFwiIGlkPVwibWF4LXJhbmstdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1heCBSYW5rPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPktpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmsua2lsbHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRlYXRoczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmRlYXRoc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Sy9EPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmsua2QudG9GaXhlZCgyKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+V2luczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndpbnN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxvc3NlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmxvc3Nlc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Vy9MPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmsud2wudG9GaXhlZCgxKX0lPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGNvbnN0IGRldGFpbGVkUmFua2VkID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LWhlYWRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UmFua2VkIFN0YXRpc3RpY3M8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UaW1lIFBsYXllZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHt0aW1lcGxheWVkWydyYW5rZWRIb3VycyddfWggJHt0aW1lcGxheWVkWydyYW5rZWRNaW51dGVzJ119bTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5LL0Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMucmFua2VkLmtkLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPktpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5raWxsc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RGVhdGhzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5kZWF0aHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkdhbWVzIFBsYXllZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQubWF0Y2hlc3BsYXllZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Vy9MPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmtlZC53bC50b0ZpeGVkKDEpfSU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+V2luczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rZWQud2luc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TG9zc2VzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLnJhbmtlZC5sb3NzZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGNvbnN0IGRldGFpbGVkQ2FzdWFsID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LWhlYWRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q2FzdWFsIFN0YXRpc3RpY3M8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UaW1lIFBsYXllZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHt0aW1lcGxheWVkWydjYXN1YWxIb3VycyddfWggJHt0aW1lcGxheWVkWydjYXN1YWxNaW51dGVzJ119bTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5LL0Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuY2FzdWFsLmtkLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPktpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5raWxsc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RGVhdGhzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5kZWF0aHN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkdhbWVzIFBsYXllZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwubWF0Y2hlc3BsYXllZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+Vy9MPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmNhc3VhbC53bC50b0ZpeGVkKDEpfSU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+V2luczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5jYXN1YWwud2luc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TG9zc2VzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmNhc3VhbC5sb3NzZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGNvbnN0IGRldGFpbGVkUGxheWVyID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LWhlYWRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UGxheWVyIFN0YXRpc3RpY3M8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UcmF2ZWxsZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7TWF0aC5mbG9vcihwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmRpc3RhbmNldHJhdmVsbGVkIC8gMTAwMCl9a208L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+QmFycmljYWRlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmJhcnJpY2FkZWRlcGxveWVkfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZWluZm9yY2VtZW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnJlaW5mb3JjZW1lbnRkZXBsb3l9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlN1aWNpZGVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuc3VpY2lkZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UmV2aXZlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnJldml2ZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIG92ZXJhbGwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkRCTk88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5kYm5vfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBvdmVyYWxsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EQk5PIEFzc2lzdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5kYm5vYXNzaXN0c308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgb3ZlcmFsbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+R2FkZ2V0cyBEZXN0cm95ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5nYWRnZXRkZXN0cm95fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBjb25zdCBkZXRhaWxlZEdlbmVyYWwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctaGVhZGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5HZW5lcmFsIFN0YXRpc3RpY3M8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5LL0Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5rZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+S2lsbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5raWxsc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RGVhdGhzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuZGVhdGhzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UaW1lIFBsYXllZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHt0aW1lcGxheWVkWydnZW5lcmFsSG91cnMnXX1oICR7dGltZXBsYXllZFsnZ2VuZXJhbE1pbnV0ZXMnXX1tPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkhTIEtpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuaGVhZHNob3RzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5IUy9LPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuaGVhZHNob3RfcmF0aW8udG9GaXhlZCgyKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UEVOIEtpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwucGVuZXRyYXRpb25zfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5QRU4vSzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLnBlbmV0cmF0aW9uX3JhdGlvLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlcvTDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLndsfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5XaW5zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwud2luc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TG9zc2VzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwubG9zc2VzfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5HYW1lcyBQbGF5ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5tYXRjaGVzcGxheWVkfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRzLXJvdy1wbGFjZWhvbGRlciBnZW5lcmFsLXJvdy1wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Bc3Npc3RzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuYXNzaXN0c308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TWVsZWUgS2lsbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5tZWxlZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHMtcm93LXBsYWNlaG9sZGVyIGdlbmVyYWwtcm93LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkJsaW5kIEtpbGxzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3BsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuYmxpbmRraWxsc308L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0cy1yb3ctcGxhY2Vob2xkZXIgZ2VuZXJhbC1yb3ctcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+SGFja2VyICU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjAlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxlZFN0YXRzLW5hbWUnKS5pbm5lckhUTUwgPSBwbGF5ZXJTdGF0cy51c2VyLm5pY2tuYW1lO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxlZFN0YXRzLWxldmVsJykuaW5uZXJIVE1MID0gcGxheWVyU3RhdHMuc3RhdHMucHJvZ3Jlc3Npb24ubGV2ZWw7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxlZFN0YXRzLXByb2ZpbGVJbWcnKSBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMgPSBwbGF5ZXJTdGF0cy51c2VyLnNtYWxsQXZhdGFyO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxlZFNlYXNvbmFsJykuaW5uZXJIVE1MID0gZGV0YWlsZWRTZWFzb25hbDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRSYW5rZWQnKS5pbm5lckhUTUwgPSBkZXRhaWxlZFJhbmtlZDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRDYXN1YWwnKS5pbm5lckhUTUwgPSBkZXRhaWxlZENhc3VhbDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRQbGF5ZXInKS5pbm5lckhUTUwgPSBkZXRhaWxlZFBsYXllcjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWRHZW5lcmFsJykuaW5uZXJIVE1MID0gZGV0YWlsZWRHZW5lcmFsO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgc2hvd24gZGV0YWlsZWQgcGxheWVyIFwiJHtwbGF5ZXJTdGF0cy51c2VyLm5pY2tuYW1lfVwiYCk7XHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwczovL2FwaS5zdGF0c2RiLm5ldC9yNi9jb25maWcnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnN0YXRzZGIubmV0L3I2L3BsYXllci8ke3BsYXllclN0YXRzLnVzZXIuaWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZTIgPT4gcmVzcG9uc2UyLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbih1c2VyRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpc3RvcnlTdGF0cyA9IHVzZXJEYXRhLnBheWxvYWQuc3RhdHMuaGlzdG9yeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZTZWFzb25zID0gT2JqZWN0LmtleXMoZGF0YS5wYXlsb2FkLnNlYXNvbnMpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWFzb25zSFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFzb24gPSBudW1iZXJPZlNlYXNvbnMgLSBpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWFzb25EYXRhOiBhbnkgPSB7IHJhbms6IDAsIG1tcjogMjUwMCwga2lsbHM6IDAsIGRlYXRoczogMCB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtUFJlZ2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lc1BsYXllZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpb246ICdlbWVhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBpbiBoaXN0b3J5U3RhdHNbc2Vhc29uXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5U3RhdHNbc2Vhc29uXS5oYXNPd25Qcm9wZXJ0eShyZWdpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lvblN0YXRzID0gaGlzdG9yeVN0YXRzW3NlYXNvbl1bcmVnaW9uXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZXNQbGF5ZWQgPSByZWdpb25TdGF0cy53aW5zICsgcmVnaW9uU3RhdHMubG9zc2VzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2lvblN0YXRzLm5vTWF0Y2hlc1BsYXllZCA9PT0gZmFsc2UgJiYgZ2FtZXNQbGF5ZWQgPiBtUFJlZ2lvbi5nYW1lc1BsYXllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbVBSZWdpb24uZ2FtZXNQbGF5ZWQgPSBnYW1lc1BsYXllZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1QUmVnaW9uLnJlZ2lvbiA9IHJlZ2lvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeVN0YXRzW3NlYXNvbl1bbVBSZWdpb24ucmVnaW9uXS5ub01hdGNoZXNQbGF5ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YSA9IGhpc3RvcnlTdGF0c1tzZWFzb25dW21QUmVnaW9uLnJlZ2lvbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXNvbkRhdGEuZGVhdGhzICsgc2Vhc29uRGF0YS5raWxscyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGEua2QgPSBcIksvRDpcIiArIChzZWFzb25EYXRhLmtpbGxzIC8gc2Vhc29uRGF0YS5kZWF0aHMpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXNvbkRhdGEua2QgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFzb25EYXRhLm1heF9tbXIgIT09IHVuZGVmaW5lZCAmJiBzZWFzb25EYXRhLm1heF9tbXIgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhLm1heF9yYW5rID0gdGhpcy5yYW5rT2Zmc2V0KHNlYXNvbiwgc2Vhc29uRGF0YS5tYXhfcmFuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uRGF0YS5tYXhfbW1yID0gTWF0aC50cnVuYyhzZWFzb25EYXRhLm1heF9tbXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhLm1heF9yYW5rID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25EYXRhLm1heF9tbXIgPSBcIjI1MDBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25zSFRNTCArPSAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcmFua3MvcmFuayR7c2Vhc29uRGF0YS5tYXhfcmFua30uc3ZnXCIgYWx0PVwicmFuayBpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT1cImNvbG9yOiR7c2Vhc29uQ29sb3JzW3NlYXNvbl19XCI+JHtkYXRhLnBheWxvYWQuc2Vhc29uc1tzZWFzb25dLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NTVI6JHtzZWFzb25EYXRhLm1heF9tbXJ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlYXNvbktEXCI+JHtzZWFzb25EYXRhLmtkfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vhc29uc1N0YXRzJykuaW5uZXJIVE1MID0gc2Vhc29uc0hUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFua09mZnNldChhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhIDwgMTUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmtPZmZzZXRbYl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9yZU1hdGNoRGF0YShtYXRjaFN0YXRzLCBtYXRjaE91dGNvbWU6IHN0cmluZywgcm91bmRTdGF0cywgc2VsZikge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZZZWFyOiBhbnkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICBjb25zdCBwYXN0RGF5c09mWWVhcjogYW55ID0gKHRvZGF5IC0gZmlyc3REYXlPZlllYXIpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleUlEQkRheXMgPSB0b2RheS5nZXREYXRlKCkgKyAnLCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJywnICsgdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjb25zdCBrZXlJREJXZWVrcyA9IGAke01hdGguY2VpbCgocGFzdERheXNPZlllYXIgKyBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDEpIC8gNyl9LCR7dG9kYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IHRvZGF5LmdldERheSgpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlMSA9IHRoaXMuc3RvcmVEYWlseShrZXlJREJEYXlzLCBtYXRjaFN0YXRzLCBtYXRjaE91dGNvbWUsIHNlbGYpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UyID0gdGhpcy5zdG9yZVdlZWtseShrZXlJREJXZWVrcywgZGF5T2ZXZWVrLCBtYXRjaFN0YXRzLCBtYXRjaE91dGNvbWUsIHNlbGYpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UzID0gdGhpcy5zdG9yZU1hdGNoKG1hdGNoU3RhdHMsIHJvdW5kU3RhdHMsIG1hdGNoT3V0Y29tZSwgc2VsZik7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzXSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKGBzdG9yZU1hdGNoIFwiJHtyZXN1bHR9XCJgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yZURhaWx5KGtleUlEQjogc3RyaW5nLCBtYXRjaFN0YXRzLCBtYXRjaE91dGNvbWU6IHN0cmluZywgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZGF0YWJhc2UucmVhZEZyb21JREIoJ2RheXMnLCBrZXlJREIpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYlJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBzZWxmLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYlJlc3VsdFt0aGlzLmdhbWVNb2RlXS5raWxscyArPSBtYXRjaFN0YXRzW2lkXS5raWxscztcclxuICAgICAgICAgICAgICAgICAgICBkYlJlc3VsdFt0aGlzLmdhbWVNb2RlXS5kZWF0aHMgKz0gbWF0Y2hTdGF0c1tpZF0uZGVhdGhzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hPdXRjb21lID09PSAndmljdG9yeScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGJSZXN1bHRbdGhpcy5nYW1lTW9kZV0ud2lucyArKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoT3V0Y29tZSA9PT0gJ2RlZmVhdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGJSZXN1bHRbdGhpcy5nYW1lTW9kZV0ubG9zc2VzICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZGF0YWJhc2Uuc3RvcmVUb0lEQignZGF5cycsIGRiUmVzdWx0LCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcmVXZWVrbHkoa2V5SURCOiBzdHJpbmcsIGRheU9mV2VlazogbnVtYmVyLCBtYXRjaFN0YXRzLCBtYXRjaE91dGNvbWU6IHN0cmluZywgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZGF0YWJhc2UucmVhZEZyb21JREIoJ3dlZWtzJywga2V5SURCKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGJSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gc2VsZi5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGJSZXN1bHRbZGF5T2ZXZWVrXVt0aGlzLmdhbWVNb2RlXS5raWxscyArPSBtYXRjaFN0YXRzW2lkXS5raWxscztcclxuICAgICAgICAgICAgICAgICAgICBkYlJlc3VsdFtkYXlPZldlZWtdW3RoaXMuZ2FtZU1vZGVdLmRlYXRocyArPSBtYXRjaFN0YXRzW2lkXS5kZWF0aHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaE91dGNvbWUgPT09ICd2aWN0b3J5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYlJlc3VsdFtkYXlPZldlZWtdW3RoaXMuZ2FtZU1vZGVdLndpbnMgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaE91dGNvbWUgPT09ICdkZWZlYXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiUmVzdWx0W2RheU9mV2Vla11bdGhpcy5nYW1lTW9kZV0ubG9zc2VzICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZGF0YWJhc2Uuc3RvcmVUb0lEQignd2Vla3MnLCBkYlJlc3VsdCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3JlTWF0Y2gobWF0Y2hTdGF0cywgcm91bmRTdGF0cywgbWF0Y2hPdXRjb21lOiBzdHJpbmcsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRiVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaElkOiB0aGlzLm1hdGNoSWQsXHJcbiAgICAgICAgICAgICAgICBtYXA6IHRoaXMubWFwSWQsXHJcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IHRoaXMudGltZVN0YW1wLFxyXG4gICAgICAgICAgICAgICAgdGltZVN0YW1wSW5kZXg6IHRoaXMudGltZVN0YW1wLFxyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGU6IHRoaXMuZ2FtZU1vZGUsXHJcbiAgICAgICAgICAgICAgICBtYXRjaE91dGNvbWU6IG1hdGNoT3V0Y29tZSxcclxuICAgICAgICAgICAgICAgIG1hdGNoU3RhdHM6IG1hdGNoU3RhdHMsXHJcbiAgICAgICAgICAgICAgICByb3VuZFN0YXRzOiByb3VuZFN0YXRzLFxyXG4gICAgICAgICAgICAgICAgc2VsZjogc2VsZixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmRhdGFiYXNlLnN0b3JlVG9JREIoJ21hdGNoZXMnLCBkYlZhbHVlLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRpbWVyIH0gZnJvbSAnLi90aW1lcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPV0dhbWVzRXZlbnRzRGVsZWdhdGUge1xyXG4gICAgb25JbmZvVXBkYXRlcyhpbmZvOiBhbnkpO1xyXG4gICAgb25OZXdFdmVudHMoZTogYW55KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9XR2FtZXNFdmVudHMge1xyXG4gICAgcHJpdmF0ZSBfZGVsZWdhdGU6IElPV0dhbWVzRXZlbnRzRGVsZWdhdGU7XHJcbiAgICBwcml2YXRlIF9yZXF1aXJlZEZlYXR1cmVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogSU9XR2FtZXNFdmVudHNEZWxlZ2F0ZSwgcmVxdWlyZWRGZWF0dXJlczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xyXG4gICAgICAgIHRoaXMuX3JlcXVpcmVkRmVhdHVyZXMgPSByZXF1aXJlZEZlYXR1cmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRJbmZvKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5nZXRJbmZvKHJlc29sdmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXRSZXF1aXJlZEZlYXR1cmVzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGxldCB0cmllczpudW1iZXIgPSAxLFxyXG4gICAgICAgIHJlc3VsdDtcclxuXHJcbiAgICAgICAgd2hpbGUgKCB0cmllcyA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMuc2V0UmVxdWlyZWRGZWF0dXJlcyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXF1aXJlZEZlYXR1cmVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiAoIHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJyApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRSZXF1aXJlZEZlYXR1cmVzKCk6IHN1Y2Nlc3M6ICcrIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXN1bHQuc3VwcG9ydGVkRmVhdHVyZXMubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFRpbWVyLndhaXQoMzAwMCk7XHJcbiAgICAgICAgICAgIHRyaWVzKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLndhcm4oJ3NldFJlcXVpcmVkRmVhdHVyZXMoKTogZmFpbHVyZSBhZnRlciAnKyB0cmllcyArJyB0cmllcycrIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50cygpO1xyXG5cclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25JbmZvVXBkYXRlczIuYWRkTGlzdGVuZXIodGhpcy5vbkluZm9VcGRhdGVzKTtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25OZXdFdmVudHMuYWRkTGlzdGVuZXIodGhpcy5vbk5ld0V2ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1blJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5vbkluZm9VcGRhdGVzMi5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uSW5mb1VwZGF0ZXMpO1xyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5vbk5ld0V2ZW50cy5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uTmV3RXZlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSW5mb1VwZGF0ZXMgPSAoaW5mbzogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25JbmZvVXBkYXRlcyhpbmZvLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25OZXdFdmVudHMgPSAoZTogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUub25OZXdFdmVudHMoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbb3ctZ2FtZS1ldmVudHNdIFNUQVJUYCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRSZXF1aXJlZEZlYXR1cmVzKCk7XHJcblxyXG4gICAgICAgIGxldCB0cmllczogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgY29uc3QgeyByZXMsIHN0YXR1cyB9ID0gYXdhaXQgdGhpcy5nZXRJbmZvKCk7XHJcblxyXG4gICAgICAgIGlmICggcmVzICYmIHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICkge1xyXG4gICAgICAgICAgICB0aGlzLm9uSW5mb1VwZGF0ZXMoeyBpbmZvOiByZXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbb3ctZ2FtZS1ldmVudHNdIFNUT1BgKTtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudHMoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgT1dIb3RrZXlzIHtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBnZXRIb3RrZXlUZXh0KGhvdGtleUlkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBvdmVyd29sZi5zZXR0aW5ncy5nZXRIb3RLZXkoaG90a2V5SWQsIHJlc3VsdCA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5zdWNjZXNzIHx8ICFyZXN1bHQuaG90a2V5KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnVU5BU1NJR05FRCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmhvdGtleSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb25Ib3RrZXlEb3duKGhvdGtleUlkOiBzdHJpbmcsIGFjdGlvbjogKGhvdGtleVJlc3VsdDogb3ZlcndvbGYuc2V0dGluZ3MuSG90S2V5UmVzdWx0KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MucmVnaXN0ZXJIb3RLZXkoaG90a2V5SWQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuIiwidHlwZSBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA9IG92ZXJ3b2xmLndpbmRvd3MuR2V0V2luZG93U3RhdGVSZXN1bHQ7XHJcbnR5cGUgT3dXaW5kb3dJbmZvID0gb3ZlcndvbGYud2luZG93cy5XaW5kb3dJbmZvO1xyXG5leHBvcnQgY2xhc3MgT1dXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXN0b3JlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogcmVzdG9yZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MucmVzdG9yZShpZCwgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW3Jlc3RvcmVdIC0gYW4gZXJyb3Igb2NjdXJyZWQsIHdpbmRvd0lkPSR7aWR9LCByZWFzb249JHtyZXN1bHQuZXJyb3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1pbmltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWluaW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5taW5pbWl6ZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGJyaW5nVG9Gcm9udCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuYnJpbmdUb0Zyb250KGlkLCB0cnVlLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbWF4aW1pemUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtYXhpbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWF4aW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBoaWRlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmhpZGUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmdldFdpbmRvd1N0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgKHJlc3VsdC53aW5kb3dfc3RhdGUgIT09ICdjbG9zZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5pbnRlcm5hbENsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2hhbmdlU2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2VXaW5kb3dMb2NhdGlvbihtb2RlLCB3aW5kb3dJZCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdygocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgd2luZG93V2lkdGggPSByZXN1bHQud2luZG93LndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gcmVzdWx0LndpbmRvdy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoKG1vbml0b3JSZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySWQ6IHN0cmluZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKS5tb25pdG9ySWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JXaWR0aCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySGVpZ2h0ID0gbW9uaXRvclJlcy5kaXNwbGF5c1ttb25pdG9ySWRdLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdjZW50ZXItY2VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBtb25pdG9yV2lkdGggLyAyIC0gKHdpbmRvd1dpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItcmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IChtb25pdG9yV2lkdGggLSB3aW5kb3dXaWR0aCkgLSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2NlbnRlci1sZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVBvc2l0aW9uKHdpbmRvd0lkLCBNYXRoLnJvdW5kKGxlZnQpLCBNYXRoLnJvdW5kKHRvcCksIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNjYWxlV2luZG93KHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZSk6IFByb21pc2UgPCB2b2lkID4gIHtcclxuICAgICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgucm91bmQod2lkdGggKiBzY2FsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhhdC5jaGFuZ2VXaW5kb3dTaXplKHdpbmRvd0lkLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2dhbWUnIHx8IHdpbmRvd0lkID09PSAnaW5fZ2FtZV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JSAtIDMycHgpYDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5JyB8fCB3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuaGVpZ2h0ID0gYGNhbGMoJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lIC0gMzJweClgO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbi1sb2JieSAuYWQtbG9iYnknKSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm90dG9tID0gYCR7TWF0aC5jZWlsKE1hdGgucG93KHNjYWxlLCAtNCkgKiA3ICogMTAwKSAvIDEwMH1weGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9sb2JieScgfHwgd2luZG93SWQgPT09ICdpbl9sb2JieV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NhbGUgPD0gMC42KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhZ01vdmUoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtLm9ubW91c2Vkb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5kcmFnTW92ZSh0aGlzLl9uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldE1vbml0b3JzTGlzdCgpOiBQcm9taXNlIDwgYW55ID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IGFueSA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRXaW5kb3dTdGF0ZSgpOiBQcm9taXNlIDwgR2V0V2luZG93U3RhdGVSZXN1bHQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0V2luZG93U3RhdGUoaWQsIHJlc29sdmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDdXJyZW50SW5mbygpOiBQcm9taXNlIDwgT3dXaW5kb3dJbmZvID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IE93V2luZG93SW5mbyA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC53aW5kb3cpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvYnRhaW4oKTogUHJvbWlzZSA8IE93V2luZG93SW5mbyB8IG51bGwgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2IgPSByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgJiYgcmVzLndpbmRvdyAmJiByZXMud2luZG93LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWQgPSByZXMud2luZG93LmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHJlcy53aW5kb3cubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLndpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3Mub2J0YWluRGVjbGFyZWRXaW5kb3codGhpcy5fbmFtZSwgY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGFzc3VyZU9idGFpbmVkKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0Lm9idGFpbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbnRlcm5hbENsb3NlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZShpZCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBsYXllckNvbXBhcmUge1xyXG4gICAgcHJpdmF0ZSBodG1sRWxlbWVudHM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50cyA9IHtcclxuICAgICAgICAgICAgY29tcGFyZVRlYW1CbHVlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsdWVTdGF0JyksXHJcbiAgICAgICAgICAgIGNvbXBhcmVUZWFtT3JhbmdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yYW5nZVN0YXQnKSxcclxuICAgICAgICAgICAgY29tcGFyZVZTVGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlYW1WU1RleHQuYWdncm8nKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNhbGN1bGF0ZVRlYW1TdGF0cyhhbGxQbGF5ZXJTdGF0cywgdXNlclRlYW06IHN0cmluZyk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZWFtU3RhdHM6IGFueSA9IHt9LCB0ZWFtTU1SVjogc3RyaW5nLCB0ZWFtS0RWOiBzdHJpbmcsIHRlYW1XTFY6IHN0cmluZywgdGVhbUdhbWVzUGxheWVkVjogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBpbiBhbGxQbGF5ZXJTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbFBsYXllclN0YXRzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclN0YXRzOiBhbnkgPSBhbGxQbGF5ZXJTdGF0c1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBwbGF5ZXJTdGF0cy50ZWFtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRlYW1TdGF0c1t0ZWFtTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVN0YXRzW3RlYW1OYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtU3RhdHNbdGVhbU5hbWVdLm1tciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtU3RhdHNbdGVhbU5hbWVdLmtkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1TdGF0c1t0ZWFtTmFtZV0ud2wgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVN0YXRzW3RlYW1OYW1lXS5nYW1lc1BsYXllZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVN0YXRzW3RlYW1OYW1lXS5tbXIucHVzaChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLm1tcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbVN0YXRzW3RlYW1OYW1lXS5rZC5wdXNoKHBsYXllclN0YXRzLnN0YXRzLnJhbmsua2QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1TdGF0c1t0ZWFtTmFtZV0ud2wucHVzaChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndsKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtU3RhdHNbdGVhbU5hbWVdLmdhbWVzUGxheWVkLnB1c2gocGxheWVyU3RhdHMuc3RhdHMucmFuay5tYXRjaGVzcGxheWVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbU1NUlYgPSB0aGlzLmNhbGN1bGF0ZUF2Zyh0ZWFtU3RhdHNbdGVhbU5hbWVdLm1tciwgXCJ0cnVuY1wiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtS0RWID0gdGhpcy5jYWxjdWxhdGVBdmcodGVhbVN0YXRzW3RlYW1OYW1lXS5rZCwgXCJ0b2ZpeGVkXCIsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1XTFYgPSB0aGlzLmNhbGN1bGF0ZUF2Zyh0ZWFtU3RhdHNbdGVhbU5hbWVdLndsLCBcInRvZml4ZWRcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbUdhbWVzUGxheWVkViA9IHRoaXMuY2FsY3VsYXRlQXZnKHRlYW1TdGF0c1t0ZWFtTmFtZV0uZ2FtZXNQbGF5ZWQsIFwidHJ1bmNcIiwgbnVsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0ZWFtJHt0ZWFtTmFtZX1NbXJgKS5pbm5lckhUTUwgPSB0ZWFtTU1SVjtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGVhbSR7dGVhbU5hbWV9S2RgKS5pbm5lckhUTUwgPSB0ZWFtS0RWO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0ZWFtJHt0ZWFtTmFtZX1XbGApLmlubmVySFRNTCA9IHRlYW1XTFYgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRlYW0ke3RlYW1OYW1lfUdhbWVzUGxheWVkYCkuaW5uZXJIVE1MID0gdGVhbUdhbWVzUGxheWVkVjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJUZWFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5odG1sRWxlbWVudHMuY29tcGFyZVRlYW1CbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJUZWFtID09PSAnQmx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50cy5jb21wYXJlVlNUZXh0W2ldLmJlZm9yZSh0aGlzLmh0bWxFbGVtZW50cy5jb21wYXJlVGVhbUJsdWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxFbGVtZW50cy5jb21wYXJlVlNUZXh0W2ldLmFmdGVyKHRoaXMuaHRtbEVsZW1lbnRzLmNvbXBhcmVUZWFtT3Jhbmdlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVzZXJUZWFtID09PSAnT3JhbmdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbEVsZW1lbnRzLmNvbXBhcmVWU1RleHRbaV0uYmVmb3JlKHRoaXMuaHRtbEVsZW1lbnRzLmNvbXBhcmVUZWFtT3Jhbmdlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sRWxlbWVudHMuY29tcGFyZVZTVGV4dFtpXS5hZnRlcih0aGlzLmh0bWxFbGVtZW50cy5jb21wYXJlVGVhbUJsdWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtV2lubmluZ09kZHMoYWxsUGxheWVyU3RhdHMsIHRlYW1TdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVBdmcoc3RhdEFycmF5LCBtb2RlOiBzdHJpbmcsIGRlY2ltYWxzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb3V0cHV0OiBhbnkgPSAwO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRBcnJheSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IHN0YXRBcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0IC8gc3RhdEFycmF5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwidHJ1bmNcIikge1xyXG4gICAgICAgICAgICBvdXRwdXQgPSBNYXRoLnRydW5jKG91dHB1dCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwidG9maXhlZFwiKSB7XHJcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC50b0ZpeGVkKGRlY2ltYWxzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZWFtV2lubmluZ09kZHMoYWxsUGxheWVyU3RhdHMsIHRlYW1TdGF0cykge1xyXG4gICAgICAgIGxldCBzdGFydFBlcmM6IG51bWJlciwgc21hbGxDaGFuY2U6IG51bWJlciwgbGFyZ2VDaGFuY2U6IG51bWJlciwgYmx1ZUJJRzogYm9vbGVhbiwgb2Rkc0JsdWU6IG51bWJlciwgb2Rkc09yYW5nZTogbnVtYmVyLCBibHVlVG90ID0gMCwgb3JhbmdlVG90ID0gMCwgdGVhbXNQb2ludDogYW55ID0geyBCbHVlOjAsIE9yYW5nZTowIH0sIHRlYW06IHN0cmluZztcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYWxsUGxheWVyU3RhdHMpLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJTdGF0cyA9IGFsbFBsYXllclN0YXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGVhbSA9IHBsYXllclN0YXRzLnRlYW1cclxuICAgICAgICAgICAgICAgIGxldCB3bFdlaWdodCA9IDAsIGtkV2VpZ2h0ID0gMCwgaHNXZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnJhbmsgPiAwICYmIHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2lucyArIHBsYXllclN0YXRzLnN0YXRzLnJhbmsubG9zc2VzID4gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay5rZCA+IDEuNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay53aW5zICsgcGxheWVyU3RhdHMuc3RhdHMucmFuay5sb3NzZXMgPiAxNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtkV2VpZ2h0ID0gMi41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2RXZWlnaHQgPSAyLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllclN0YXRzLnN0YXRzLnJhbmsua2QgPiAxLjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2RXZWlnaHQgPSAxLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLmtkID4gMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtkV2VpZ2h0ID0gMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay5rZCA8IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZFdlaWdodCA9IDEuMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5nZW5lcmFscHZwX2tpbGxzID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5oZWFkc2hvdHMgLyBwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmtpbGxzKSA+IDAuNTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhzV2VpZ2h0ID0gMS4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChwbGF5ZXJTdGF0cy5zdGF0cy5nZW5lcmFsLmhlYWRzaG90cyAvIHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwua2lsbHMpID4gMC41MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHNXZWlnaHQgPSAxLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHBsYXllclN0YXRzLnN0YXRzLmdlbmVyYWwuaGVhZHNob3RzIC8gcGxheWVyU3RhdHMuc3RhdHMuZ2VuZXJhbC5raWxscykgPiAwLjQ3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoc1dlaWdodCA9IDEuMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2lucyArIHBsYXllclN0YXRzLnN0YXRzLnJhbmsubG9zc2VzID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLndsID4gNzUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdsV2VpZ2h0ID0gMS4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllclN0YXRzLnN0YXRzLnJhbmsud2wgPiA2Mykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2xXZWlnaHQgPSAxLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyU3RhdHMuc3RhdHMucmFuay53bCA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3bFdlaWdodCA9IDEuMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLnJhbmsgPiAwICYmIHBsYXllclN0YXRzLnN0YXRzLmhpc3RvcnlbMTldLmVtZWEud2lucyArIHBsYXllclN0YXRzLnN0YXRzLmhpc3RvcnlbMTldLmVtZWEubG9zc2VzID4gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS5rZCA+IDEuNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RhdHMucGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS53aW5zICsgcGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS5sb3NzZXMgPiAxNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtkV2VpZ2h0ICs9IDEuMjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZFdlaWdodCArPSAxLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllclN0YXRzLnN0YXRzLmhpc3RvcnlbMTldLmVtZWEua2QgPiAxLjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2RXZWlnaHQgKz0gMC44O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS5rZCA+IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZFdlaWdodCArPSAwLjc1O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS5rZCA8IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZFdlaWdodCArPSAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS53aW5zICsgcGxheWVyU3RhdHMuc3RhdHMuaGlzdG9yeVsxOV0uZW1lYS5sb3NzZXMgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclN0YXRzLnN0YXRzLmhpc3RvcnlbMTldLmVtZWEud2wgPiA3NSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2xXZWlnaHQgKz0gMC42NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLndsID4gNjMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdsV2VpZ2h0ICs9IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJTdGF0cy5zdGF0cy5oaXN0b3J5WzE5XS5lbWVhLndsID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdsV2VpZ2h0ICs9IDAuNTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGVhbXNQb2ludFt0ZWFtXSArPSBrZFdlaWdodCAqIChwbGF5ZXJTdGF0cy5zdGF0cy5yYW5rLnJhbmsgLyAzKTtcclxuICAgICAgICAgICAgICAgIHRlYW1zUG9pbnRbdGVhbV0gKz0gaHNXZWlnaHQgKiAocGxheWVyU3RhdHMuc3RhdHMucmFuay5yYW5rIC8gMyk7XHJcbiAgICAgICAgICAgICAgICB0ZWFtc1BvaW50W3RlYW1dICs9IHdsV2VpZ2h0ICogKHBsYXllclN0YXRzLnN0YXRzLnJhbmsucmFuayAvIDUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGVhbVN0YXRzLkJsdWUpIHtcclxuICAgICAgICAgICAgYmx1ZVRvdCArPSBwYXJzZUZsb2F0KHRlYW1TdGF0cy5CbHVlLm1tcikgLyAxMDAwIDtcclxuICAgICAgICAgICAgYmx1ZVRvdCArPSBwYXJzZUZsb2F0KHRlYW1TdGF0cy5CbHVlLmtkKSAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlYW1zUG9pbnQuQmx1ZSArPSBibHVlVG90O1xyXG5cclxuICAgICAgICBpZiAodGVhbVN0YXRzLk9yYW5nZSkge1xyXG4gICAgICAgICAgICBvcmFuZ2VUb3QgKz0gcGFyc2VGbG9hdCh0ZWFtU3RhdHMuT3JhbmdlLm1tcikgLyAxMDAwIDtcclxuICAgICAgICAgICAgb3JhbmdlVG90ICs9IHBhcnNlRmxvYXQodGVhbVN0YXRzLk9yYW5nZS5rZCkgKiAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZWFtc1BvaW50Lk9yYW5nZSArPSBvcmFuZ2VUb3Q7XHJcblxyXG4gICAgICAgIGlmICh0ZWFtc1BvaW50LkJsdWUgPiB0ZWFtc1BvaW50Lk9yYW5nZSkge1xyXG4gICAgICAgICAgICBzdGFydFBlcmMgPSAodGVhbXNQb2ludC5CbHVlIC0gdGVhbXNQb2ludC5PcmFuZ2UpIC8gKHRlYW1zUG9pbnQuQmx1ZSArIHRlYW1zUG9pbnQuT3JhbmdlKSAqIDEwMDtcclxuICAgICAgICAgICAgYmx1ZUJJRyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhcnRQZXJjID0gKHRlYW1zUG9pbnQuT3JhbmdlIC0gdGVhbXNQb2ludC5CbHVlKSAvICh0ZWFtc1BvaW50Lk9yYW5nZSArIHRlYW1zUG9pbnQuQmx1ZSkgKiAxMDA7XHJcbiAgICAgICAgICAgIGJsdWVCSUcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhcmdlQ2hhbmNlID0gNTAgKyBzdGFydFBlcmMgLyAyO1xyXG4gICAgICAgIHNtYWxsQ2hhbmNlID0gNTAgLSBzdGFydFBlcmMgLyAyO1xyXG5cclxuICAgICAgICBpZiAoYmx1ZUJJRyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBvZGRzQmx1ZSA9IGxhcmdlQ2hhbmNlO1xyXG4gICAgICAgICAgICBvZGRzT3JhbmdlID0gc21hbGxDaGFuY2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChibHVlQklHID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBvZGRzQmx1ZSA9IHNtYWxsQ2hhbmNlO1xyXG4gICAgICAgICAgICBvZGRzT3JhbmdlID0gbGFyZ2VDaGFuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9kZHNCbHVlXCIpLmlubmVySFRNTCA9IG9kZHNCbHVlLnRvRml4ZWQoMSkgKyBcIiVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9kZHNPcmFuZ2VcIikuaW5uZXJIVE1MID0gb2Rkc09yYW5nZS50b0ZpeGVkKDEpICsgXCIlXCI7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBUaW1lckRlbGVnYXRlIHtcclxuICAgIG9uVGltZXIoaWQ/OiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY2xhc3MgVGltZXIge1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIF90aW1lcklkOiBudW1iZXJ8bnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgX2RlbGVnYXRlOiBUaW1lckRlbGVnYXRlO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3YWl0KGludGVydmFsSW5NUzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGludGVydmFsSW5NUyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBUaW1lckRlbGVnYXRlLCBpZD86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBzdGFydChpbnRlcnZhbEluTVM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl90aW1lcklkID0gPG51bWJlcj5zZXRUaW1lb3V0KHRoaXMuaGFuZGxlVGltZXJFdmVudCwgaW50ZXJ2YWxJbk1TKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl90aW1lcklkID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVySWQpO1xyXG4gICAgICAgIHRoaXMuX3RpbWVySWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUaW1lckV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3RpbWVySWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uVGltZXIodGhpcy5faWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwV2luZG93IHtcclxuICAgIHByb3RlY3RlZCBjdXJyV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYWluV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzZXR0aW5nc1dpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGlzdGljc1dpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgd2Vic2l0ZVdpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgbWF4aW1pemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2luZG93TmFtZTogc3RyaW5nLCBtb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1haW5XaW5kb3cgPSBuZXcgT1dXaW5kb3coJ2JhY2tncm91bmQnKTtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChtb2RlID09PSAnZGVza3RvcCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc2V0dGluZ3NfZGVza3RvcCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3N0YXRpc3RpY3NfZGVza3RvcCcpO1xyXG4gICAgICAgICAgICB0aGlzLndlYnNpdGVXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3dlYnNpdGVfZGVza3RvcCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2luZ2FtZScpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc2V0dGluZ3NfaW5fZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3N0YXRpc3RpY3NfaW5fZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLndlYnNpdGVXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3dlYnNpdGVfaW5fZ2FtZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtYXhpbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhpbWl6ZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBnYW1lSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lSGlzdG9yeScpO1xyXG4gICAgICAgIGNvbnN0IHdlYnNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vic2l0ZScpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlV2luZG93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlV2luZG93QnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdE1pbmltaXplTW9kYWwnKTtcclxuICAgICAgICBjb25zdCBtb2RhbENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcclxuICAgICAgICBjb25zdCBtb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQnKTtcclxuICAgICAgICBjb25zdCBtb2RhbE1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltaXplJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd05hbWUgPT09ICdkZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc2V0dGluZ3NfZGVza3RvcCcgfHwgd2luZG93TmFtZSA9PT0gJ3N0YXRpc3RpY3NfZGVza3RvcCcgfHwgd2luZG93TmFtZSA9PT0gJ3dlYnNpdGVfZGVza3RvcCcgfHwgbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIxXCInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZyhoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlV2luZG93QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsb3NlV2luZG93QnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlV2luZG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWluaW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4aW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWF4aW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWF4aW1pemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1heGltaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhpbWl6ZWQgPSAhdGhpcy5tYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVIaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIGdhbWVIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2Vic2l0ZSkge1xyXG4gICAgICAgICAgICB3ZWJzaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJzaXRlV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxDYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxNaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbE1pbmltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmN1cnJXaW5kb3cuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldERyYWcoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cuZHJhZ01vdmUoZWxlbSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwV2luZG93IH0gZnJvbSAnLi4vQXBwV2luZG93JztcclxuaW1wb3J0IHsgT1dHYW1lc0V2ZW50cyB9IGZyb20gJy4uLy4uL29kay10cy9vdy1nYW1lcy1ldmVudHMnO1xyXG5pbXBvcnQgeyBPV0hvdGtleXMgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctaG90a2V5cyc7XHJcbmltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi4vLi4vb2RrLXRzL2RhdGFiYXNlJztcclxuaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuLi8uLi9vZGstdHMvY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9vZGstdHMvbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHsgUGxheWVyQ29tcGFyZSB9IGZyb20gJy4uLy4uL29kay10cy9wbGF5ZXItY29tcGFyZSc7XHJcbmltcG9ydCB7IE1hdGNoIH0gZnJvbSAnLi4vLi4vb2RrLXRzL21hdGNoJztcclxuaW1wb3J0IHsgaW50ZXJlc3RpbmdGZWF0dXJlczEsIGhvdGtleXMsIHdpbmRvd05hbWVzLCBnYW1lTW9kZXNQVkUgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xyXG5cclxuY29uc3QgYmx1ZVRlYW1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1ibHVlJyk7XHJcbmNvbnN0IG9yYW5nZVRlYW1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1vcmFuZ2UnKTtcclxuY29uc3QgY29tcGFyZVRlYW1EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbS1jb21wYXJlLWRpdicpO1xyXG5jb25zdCBuYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtYnRuJyk7XHJcbmNvbnN0IG1haW5UYWJzID0gWydzZWFzb24nLCAncmFua2VkJywgJ2Nhc3VhbCddO1xyXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItdHJcIik7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYmFjay1idG4nKTtcclxuXHJcbmxldCBjb3VudCA9IDAsIG1hdGNoU3RhdHM6IGFueSA9IHt9LCBtYXRjaE91dGNvbWU6IHN0cmluZywgcm91bmRzU3RhdHM6IGFueSA9IHt9LCByb3VuZE51bWJlcjogbnVtYmVyLCBzZWxmOiBhbnkgPSB7fSwgY3VycmVudFRhYjogc3RyaW5nLCB3aW5kb3dJZDogc3RyaW5nLCBvd1dpbmRvdzogT1dXaW5kb3csIGNvdW50UGxheWVycyA9IC0xLCBkZXRhaWxlZHN0YXR1cyA9IGZhbHNlLCBtYXRjaERhdGEsIHBsYXllcnMgPSB7fSwgY2lyY2xlU3RhdHM6IGFueTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgIG93V2luZG93ID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWVzLmluR2FtZSk7XHJcbn0gZWxzZSB7XHJcbiAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5pbkdhbWVEZXNrdG9wT25seSk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzKCk7XHJcbmNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XHJcbmNvbnN0IGxvY2Fsc3RvcmFnZSA9IG5ldyBMb2NhbHN0b3JhZ2UoKTtcclxuY29uc3QgcGxheWVyQ29tcGFyZSA9IG5ldyBQbGF5ZXJDb21wYXJlKCk7XHJcblxyXG5vd1dpbmRvdy5taW5pbWl6ZSgpO1xyXG5cclxuY29uc3QgcHJvbWlzZTEgPSBsb2NhbHN0b3JhZ2UuaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29udHJvbGxlcnMuc2V0VGhlbWUoKSk7XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIwXCInKSB7XHJcbiAgICB3aW5kb3dJZCA9ICdpbl9nYW1lJztcclxufSBlbHNlIHtcclxuICAgIHdpbmRvd0lkID0gJ2luX2dhbWVfZGVza3RvcF9vbmx5JztcclxufVxyXG5cclxuY29uc3QgdmFsdWVzQ3VzdG9tID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpO1xyXG5jb25zdCBsb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKTtcclxuXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHZhbHVlc0N1c3RvbSkubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHBsYXllclRhYmxlVGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlLScgKyBpKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllclRhYmxlVGhzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgcGxheWVyVGFibGVUaHNbal0uaW5uZXJIVE1MID0gdmFsdWVzQ3VzdG9tW2ldO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc3RhdHNOYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWMtbmF2LWJ0bicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0c05hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgc3RhdHNOYXZCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbih0aGlzOmFueSkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRzTmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN0YXRzTmF2QnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgc2V0Q2lyY2xlcyh0aGlzLmlkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDaXJjbGVzKGlkKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGNpcmNsZVN0YXRzWzBdW2lkXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMF1baWRdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoY2lyY2xlU3RhdHNbMF1baWRdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IGNpcmNsZVN0YXRzWzBdW2lkXS53bCArICclJztcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgY2lyY2xlU3RhdHNbMV1baWRdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGNpcmNsZVN0YXRzWzFdW2lkXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoY2lyY2xlU3RhdHNbMV1baWRdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gY2lyY2xlU3RhdHNbMV1baWRdLndsICsgJyUnO1xyXG59XHJcblxyXG5jbGFzcyBJbkdhbWUgZXh0ZW5kcyBBcHBXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJbkdhbWU7XHJcbiAgICBwcml2YXRlIF9yYWluYm93R2FtZUV2ZW50c0xpc3RlbmVyOiBPV0dhbWVzRXZlbnRzO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRzTG9nOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2luZm9Mb2c6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwcm9maWxlSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvZmlsZU5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgZ2FtZU1vZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgbWF0Y2hJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtYXBJZDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSA9PT0gJ1wiMFwiJykge1xyXG4gICAgICAgICAgICBzdXBlcih3aW5kb3dOYW1lcy5pbkdhbWUsICdpbmdhbWUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBvd1dpbmRvdy5zY2FsZVdpbmRvdygnaW5fZ2FtZScsIDE2MDAsIDkwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gb3dXaW5kb3cuY2hhbmdlV2luZG93TG9jYXRpb24oJ2NlbnRlci1jZW50ZXInLCAnaW5fZ2FtZScpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2NhbC5tYXhpbWl6ZSA9PT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICBvd1dpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlcih3aW5kb3dOYW1lcy5pbkdhbWVEZXNrdG9wT25seSwgJ2Rlc2t0b3AnKTtcclxuXHJcbiAgICAgICAgICAgIG93V2luZG93LnNjYWxlV2luZG93KCdpbl9nYW1lX2Rlc2t0b3Bfb25seScsIDE2MDAsIDkwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKTtcclxuICAgICAgICAgICAgb3dXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRUb2dnbGVIb3RrZXlCZWhhdmlvcigpO1xyXG4gICAgICAgIHRoaXMuc2V0VGFibGVUYWJEZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRUYWJsZVRhYlNlbGVjdG9yKCk7XHJcbiAgICAgICAgdGhpcy5zZXRIb3RrZXlUZXh0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRPd0tleUxpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXREZXRhaWxlZEJhY2tCdG4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmFpbmJvd0dhbWVFdmVudHNMaXN0ZW5lciA9IG5ldyBPV0dhbWVzRXZlbnRzKHtcclxuICAgICAgICAgICAgb25JbmZvVXBkYXRlczogdGhpcy5vbkluZm9VcGRhdGVzLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG9uTmV3RXZlbnRzOiB0aGlzLm9uTmV3RXZlbnRzLmJpbmQodGhpcylcclxuICAgICAgICB9LCBpbnRlcmVzdGluZ0ZlYXR1cmVzMSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkYXRhYmFzZS5pbml0QWxsSURCKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gZGF0YWJhc2UuZGlzcGxheURhaWx5V2Vla2x5KCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjaXJjbGVTdGF0cyA9IHJlc3VsdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXM7XHJcblxyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5nZXRJbmZvKGZ1bmN0aW9uKGluZm8pIHtcclxuICAgICAgICAgICAgdGhhdC5zZXRUaGlzVmFsdWUoaW5mby5yZXMubWUuYWNjb3VudF9pZCwgJ3Byb2ZpbGVJZCcpO1xyXG4gICAgICAgICAgICB0aGF0LnNldFRoaXNWYWx1ZShpbmZvLnJlcy5tZS5uYW1lLCAncHJvZmlsZU5hbWUnKTtcclxuICAgICAgICAgICAgdGhhdC5zZXRUaGlzVmFsdWUoaW5mby5yZXMubWF0Y2hfaW5mby5tYXRjaF9pZCwgJ21hdGNoSWQnKTtcclxuICAgICAgICAgICAgdGhhdC5zZXRUaGlzVmFsdWUoaW5mby5yZXMubWF0Y2hfaW5mby5nYW1lX21vZGUsICdnYW1lTW9kZScpO1xyXG5cclxuICAgICAgICAgICAgbWF0Y2hEYXRhID0gbmV3IE1hdGNoKGluZm8ucmVzLm1hdGNoX2luZm8uZ2FtZV9tb2RlLCBpbmZvLnJlcy5tYXRjaF9pbmZvLm1hdGNoX2lkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBJbkdhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuX3JhaW5ib3dHYW1lRXZlbnRzTGlzdGVuZXIuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSW5mb1VwZGF0ZXMoaW5mbykge1xyXG4gICAgICAgIGlmICgncm91bmQnIGluIGluZm8pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHJvdW5kTnVtYmVyIFwiJHtpbmZvLnJvdW5kLm51bWJlcn1cImApO1xyXG5cclxuICAgICAgICAgICAgcm91bmROdW1iZXIgPSBpbmZvLnJvdW5kLm51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5nZXRJbmZvKGZ1bmN0aW9uKGluZm8pIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoRGF0YS5zZXRNYXBJZChpbmZvLnJlcy5tYXRjaF9pbmZvLm1hcF9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5mby5yZXMubWF0Y2hfaW5mby5tYXBfaWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCdwbGF5ZXJzJyBpbiBpbmZvICYmIChpbmZvLnBsYXllcnMucm9zdGVyXzAgIT0gbnVsbCB8fCBPYmplY3QudmFsdWVzKGluZm8ucGxheWVycylbMF0gIT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhpbmZvLnBsYXllcnMpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhpbmZvLnBsYXllcnMpW2ldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHNSYXcgPSBPYmplY3QudmFsdWVzKGluZm8ucGxheWVycylbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBKU09OLnBhcnNlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdHNSYXcpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBPYmplY3Qua2V5cyhpbmZvLnBsYXllcnMpW2ldLnN1YnN0cig3KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZmlsZU5hbWUgPT09IHN0YXRzLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VyVGVhbSA9IHN0YXRzLnRlYW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5uYW1lID0gc3RhdHMubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnVzZXJUZWFtID09PSAnQmx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVUZWFtRGl2LmJlZm9yZShibHVlVGVhbURpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlVGVhbURpdi5hZnRlcihvcmFuZ2VUZWFtRGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZGVzUFZFLmluY2x1ZGVzKHRoaXMuZ2FtZU1vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1ZVRlYW1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JhbmdlVGVhbURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlzcGxheWVkIHRlYW0gXCJibHVlXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLnVzZXJUZWFtID09PSAnT3JhbmdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZVRlYW1EaXYuYmVmb3JlKG9yYW5nZVRlYW1EaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZVRlYW1EaXYuYWZ0ZXIoYmx1ZVRlYW1EaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZXNQVkUuaW5jbHVkZXModGhpcy5nYW1lTW9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVlVGVhbURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yYW5nZVRlYW1EaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkaXNwbGF5ZWQgdGVhbSBcIm9yYW5nZVwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcm91bmRzU3RhdHNbcm91bmROdW1iZXJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kc1N0YXRzW3JvdW5kTnVtYmVyXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyb3VuZHNTdGF0c1tyb3VuZE51bWJlcl0ucm91bmRPdXRjb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kc1N0YXRzW3JvdW5kTnVtYmVyXVtpZF0gPSBzdGF0cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBtYXRjaERhdGEucGxheWVySm9pbihpZCwgc3RhdHMsIGluZm8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDb21wYXJlLmNhbGN1bGF0ZVRlYW1TdGF0cyhwbGF5ZXJzLCBzZWxmLnVzZXJUZWFtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVycy5zZXRUYWJsZVRhYihjdXJyZW50VGFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERldGFpbGVkT25DbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcGxheWVyVXBkYXRlIFwiJHtzdGF0c1Jhd31cImApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgncGxheWVycycgaW4gaW5mbykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGluZm8ucGxheWVycykubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gT2JqZWN0LmtleXMoaW5mby5wbGF5ZXJzKVtpXS5zdWJzdHIoNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1hdGNoU3RhdHNbaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBtYXRjaERhdGEucGxheWVyTGVhdmUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVycyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckNvbXBhcmUuY2FsY3VsYXRlVGVhbVN0YXRzKHBsYXllcnMsIHNlbGYudXNlclRlYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHBsYXllckxlZnQgXCIke2lkfVwiYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk5ld0V2ZW50cyhldmVudEluZm8pIHtcclxuICAgICAgICBpZiAoJ2V2ZW50cycgaW4gZXZlbnRJbmZvICYmIGV2ZW50SW5mby5ldmVudHNbMF0ubmFtZSA9PT0gJ3JvdW5kT3V0Y29tZScgJiYgKHRoaXMuZ2FtZU1vZGUgPT09ICdNQVRDSE1BS0lOR19QVlAnIHx8IHRoaXMuZ2FtZU1vZGUgPT09ICdNQVRDSE1BS0lOR19QVlBfUkFOS0VEJyB8fCB0aGlzLmdhbWVNb2RlID09PSAnTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VEJyB8fCB0aGlzLmdhbWVNb2RlID09PSAnQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEJykpIHtcclxuICAgICAgICAgICAgcm91bmRzU3RhdHNbcm91bmROdW1iZXJdLnJvdW5kT3V0Y29tZSA9IGV2ZW50SW5mby5ldmVudHNbMF0uZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF0Y2hTdGF0cygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRhdGFiYXNlLmluaXRBbGxJREIoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gbWF0Y2hEYXRhLnN0b3JlTWF0Y2hEYXRhKG1hdGNoU3RhdHMsIG1hdGNoT3V0Y29tZSwgcm91bmRzU3RhdHMsIHNlbGYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgnZXZlbnRzJyBpbiBldmVudEluZm8gJiYgZXZlbnRJbmZvLmV2ZW50c1swXS5uYW1lID09PSAnbWF0Y2hPdXRjb21lJyAmJiAodGhpcy5nYW1lTW9kZSA9PT0gJ01BVENITUFLSU5HX1BWUCcgfHwgdGhpcy5nYW1lTW9kZSA9PT0gJ01BVENITUFLSU5HX1BWUF9SQU5LRUQnIHx8IHRoaXMuZ2FtZU1vZGUgPT09ICdNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQnIHx8IHRoaXMuZ2FtZU1vZGUgPT09ICdDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQnKSkge1xyXG4gICAgICAgICAgICBtYXRjaE91dGNvbWUgPSBldmVudEluZm8uZXZlbnRzWzBdLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldE1hdGNoU3RhdHMoKTtcclxuXHJcbiAgICAgICAgICAgIG93V2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBkYXRhYmFzZS5pbml0QWxsSURCKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IG1hdGNoRGF0YS5zdG9yZU1hdGNoRGF0YShtYXRjaFN0YXRzLCBtYXRjaE91dGNvbWUsIHJvdW5kc1N0YXRzLCBzZWxmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgaW5mb0V2ZW50IFwiJHtldmVudEluZm8uZXZlbnRzWzBdLm5hbWV9XCIgXCIke2V2ZW50SW5mby5ldmVudHNbMF0uZGF0YX1cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TWF0Y2hTdGF0cygpIHtcclxuICAgICAgICBjb25zdCBsYXRlc3RSb3VuZCA9IHJvdW5kc1N0YXRzW09iamVjdC5rZXlzKHJvdW5kc1N0YXRzKS5yZXZlcnNlKClbMF1dO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG93UGxheWVySWQgaW4gbGF0ZXN0Um91bmQpIHtcclxuICAgICAgICAgICAgaWYgKGxhdGVzdFJvdW5kLmhhc093blByb3BlcnR5KG93UGxheWVySWQpICYmIG93UGxheWVySWQgIT09ICdyb3VuZE91dGNvbWUnKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaFN0YXRzW293UGxheWVySWRdID0ge307XHJcbiAgICAgICAgICAgICAgICBtYXRjaFN0YXRzW293UGxheWVySWRdLmtpbGxzID0gMDtcclxuICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0uZGVhdGhzID0gMDtcclxuICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0uc2NvcmUgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFBMQVlFUlMgU09NRVRISU1FUyBVTkRFRklORUQ/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hTdGF0c1tvd1BsYXllcklkXS51c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiBwbGF5ZXJzW293UGxheWVySWRdLnVzZXIuY291bnRyeUNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBwbGF5ZXJzW293UGxheWVySWRdLnN0YXRzLnByb2dyZXNzaW9uLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5rOiBwbGF5ZXJzW293UGxheWVySWRdLnN0YXRzLnJhbmsucmFuayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW1yOiBwbGF5ZXJzW293UGxheWVySWRdLnN0YXRzLnJhbmsubW1yLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgcm91bmQgaW4gcm91bmRzU3RhdHMpIHtcclxuICAgICAgICAgICAgaWYgKHJvdW5kc1N0YXRzLmhhc093blByb3BlcnR5KHJvdW5kKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91bmRTdGF0cyA9IHJvdW5kc1N0YXRzW3JvdW5kXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG93UGxheWVySWQgaW4gcm91bmRTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3VuZFN0YXRzLmhhc093blByb3BlcnR5KG93UGxheWVySWQpICYmIG93UGxheWVySWQgIT09ICdyb3VuZE91dGNvbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG93UGxheWVyU3RhdHMgPSByb3VuZFN0YXRzW293UGxheWVySWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaFN0YXRzW293UGxheWVySWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXRzW293UGxheWVySWRdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0ubmFtZSA9IG93UGxheWVyU3RhdHMubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hTdGF0c1tvd1BsYXllcklkXS50ZWFtID0gb3dQbGF5ZXJTdGF0cy50ZWFtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXRzW293UGxheWVySWRdLmtpbGxzICs9IG93UGxheWVyU3RhdHMua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoU3RhdHNbb3dQbGF5ZXJJZF0uZGVhdGhzICs9IG93UGxheWVyU3RhdHMuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFN0YXRzW293UGxheWVySWRdLnNjb3JlICs9IG93UGxheWVyU3RhdHMuc2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGhpc1ZhbHVlKHZhbHVlOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZXRhaWxlZE9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheWVyLXRyJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXJCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbih0aGlzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoRGF0YS5wcmludERldGFpbGVkUGxheWVyKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gY29udHJvbGxlcnMuc2hvd0RldGFpbGVkUGxheWVyKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3RrZXlUZXh0KCkge1xyXG4gICAgICAgIGNvbnRyb2xsZXJzLnNldFNob3J0Y3V0VGV4dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpKTtcclxuXHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVycy5zZXRTaG9ydGN1dFRleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRhYmxlVGFiRGVmYXVsdCgpIHtcclxuICAgICAgICBjb3VudCA9IGxvY2FsLnRhYmxlO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuYXZCdG5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgbmF2QnRuW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRUYWIgPSBtYWluVGFic1tjb3VudF07XHJcbiAgICAgICAgY29udHJvbGxlcnMuc2V0VGFibGVUYWIoY3VycmVudFRhYik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUYWJsZVRhYlNlbGVjdG9yKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5hdkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKHRoaXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhYiA9IHRoaXMuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcnMuc2V0VGFibGVUYWIoY3VycmVudFRhYik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0T3dLZXlMaXN0ZW5lcigpIHtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5pbnB1dFRyYWNraW5nLm9uS2V5RG93bi5hZGRMaXN0ZW5lcihldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICc0MCcgfHwgZXZlbnQua2V5ID09PSAnMzgnIHx8IGV2ZW50LmtleSA9PT0gJzEzJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheWVyLXRyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudFBsYXllcnNNYXggPSBwbGF5ZXJBbW91bnQubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnMTMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbGVkc3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaERhdGEucHJpbnREZXRhaWxlZFBsYXllcih0YWJsZVtjb3VudFBsYXllcnNdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGNvbnRyb2xsZXJzLnNob3dEZXRhaWxlZFBsYXllcihkZXRhaWxlZHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJzQwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudFBsYXllcnMgPT09IGNvdW50UGxheWVyc01heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudFBsYXllcnMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50UGxheWVycysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFpbGVkc3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRGF0YS5wcmludERldGFpbGVkUGxheWVyKHRhYmxlW2NvdW50UGxheWVyc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnMzgnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50UGxheWVycyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudFBsYXllcnMgPSBjb3VudFBsYXllcnNNYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRQbGF5ZXJzLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsZWRzdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hEYXRhLnByaW50RGV0YWlsZWRQbGF5ZXIodGFibGVbY291bnRQbGF5ZXJzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0YWJsZVtjb3VudFBsYXllcnNdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVbY291bnRQbGF5ZXJzXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnMzknIHx8IGV2ZW50LmtleSA9PT0gJzM3Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJzM5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnMzcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIgPSBtYWluVGFic1tjb3VudF07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXZCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZCdG5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkJ0bltpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVycy5zZXRUYWJsZVRhYihjdXJyZW50VGFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZXRhaWxlZEJhY2tCdG4oKSB7XHJcbiAgICAgICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGNvbnRyb2xsZXJzLnNob3dEZXRhaWxlZFBsYXllcih0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG9nZ2xlSG90a2V5QmVoYXZpb3IoKSB7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlSW5HYW1lV2luZG93ID0gYXN5bmMgaG90a2V5UmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByZXNzZWQgaG90a2V5IFwiJHtob3RrZXlSZXN1bHQuZmVhdHVyZUlkfVwiYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIwXCInKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbkdhbWVTdGF0ZSA9IGF3YWl0IHRoaXMuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdub3JtYWwnIHx8IGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ21heGltaXplZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5HYW1lU3RhdGUud2luZG93X3N0YXRlID09PSAnbWluaW1pemVkJyB8fCBpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdjbG9zZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGNvbnRyb2xsZXJzLnNob3dEZXRhaWxlZFBsYXllcih0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvdW50UGxheWVycyA9IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIG93V2luZG93LmNoYW5nZVdpbmRvd0xvY2F0aW9uKCdjZW50ZXItY2VudGVyJywgd2luZG93SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc3RhdGlzdGljcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZSB3aW5kb3cnICsgd2luZG93TmFtZXMuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG93V2luZG93LmNoYW5nZVdpbmRvd1NpemUoJ2luX2dhbWVfZGVza3RvcF9vbmx5JywgMTYwMCwgOTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT1dIb3RrZXlzLm9uSG90a2V5RG93bihob3RrZXlzLnRvZ2dsZSwgdG9nZ2xlSW5HYW1lV2luZG93KTtcclxuICAgIH1cclxufVxyXG5cclxuSW5HYW1lLmluc3RhbmNlKCkucnVuKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=