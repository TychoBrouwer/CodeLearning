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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/settings/settings.ts");
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

/***/ "./src/public/settings/settings.ts":
/*!*****************************************!*\
  !*** ./src/public/settings/settings.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AppWindow_1 = __webpack_require__(/*! ../AppWindow */ "./src/public/AppWindow.ts");
const ow_window_1 = __webpack_require__(/*! ../../odk-ts/ow-window */ "./src/odk-ts/ow-window.ts");
const controllers_1 = __webpack_require__(/*! ../../odk-ts/controllers */ "./src/odk-ts/controllers.ts");
const localstorage_1 = __webpack_require__(/*! ../../odk-ts/localstorage */ "./src/odk-ts/localstorage.ts");
const consts_1 = __webpack_require__(/*! ../../consts */ "./src/consts.ts");
const settingDivs = document.querySelectorAll('.settingOptions');
let owWindow, mode;
const controllers = new controllers_1.Controllers();
const localstorage = new localstorage_1.Localstorage();
class Settings extends AppWindow_1.AppWindow {
    constructor() {
        if (mode === 'desktop') {
            super(consts_1.windowNames.settingsDesktopOnly, 'desktop');
            owWindow.scaleWindow('settings_desktop', 900, 700, JSON.parse(localStorage.scaleSlider));
        }
        else {
            super(consts_1.windowNames.settings, 'ingame');
            const promise = owWindow.scaleWindow('settings_in_game', 900, 700, JSON.parse(localStorage.scaleSlider))
                .then(() => owWindow.changeWindowLocation('center-center', 'settings_in_game'));
        }
        owWindow.restore();
        const promise = owWindow.getMonitorsList()
            .then(monitorList => {
            let monitorListHTML = '';
            for (let i = 0; i < monitorList.displays.length; i++) {
                monitorListHTML += `
                        <span settingId="setting-dmonitors" class="custom-option" value="${i}">${monitorList.displays[i].name}</span>
                    `;
            }
            document.getElementById('setting-dmonitors').innerHTML = monitorListHTML;
        })
            .then(() => {
            this.setSettingSelector();
            const promise = localstorage.initiateLocalStorage()
                .then(() => {
                localstorage.setSettings();
                controllers.setTheme();
            });
        });
        overwolf.settings.hotkeys.onChanged.addListener(() => {
            controllers.setShortcutText(document.getElementById('shortcut-text'));
        });
        addEventListener('storage', () => {
            controllers.setTheme();
        });
    }
    static instance() {
        if (!this._instance) {
            this._instance = new Settings();
        }
        return this._instance;
    }
    setSettingSelector() {
        document.addEventListener('click', function (el) {
            const target = el.target;
            let outside = true;
            for (let i = 0; i < settingDivs.length; i++) {
                if (settingDivs[i].contains(target)) {
                    outside = false;
                }
            }
            if (outside) {
                for (let i = 0; i < settingDivs.length; i++) {
                    settingDivs[i].classList.remove('open');
                }
            }
        });
        for (let i = 0; i < settingDivs.length; i++) {
            const settingDiv = settingDivs[i];
            settingDiv.addEventListener('click', function () {
                for (let j = 0; j < settingDivs.length; j++) {
                    const settingDiv2 = settingDivs[j];
                    if (settingDiv !== settingDiv2) {
                        if (settingDiv2.querySelector('.custom-select')) {
                            settingDiv2.querySelector('.custom-select').classList.remove('open');
                        }
                        else {
                            settingDiv2.classList.remove('open');
                        }
                    }
                    else {
                        settingDiv.classList.toggle('open');
                    }
                }
            });
        }
        document.getElementById('windowSize-slider').addEventListener('change', function (option) {
            localstorage.changeSetting(option.target);
        });
        document.getElementById('windowSize-slider').addEventListener('input', function () {
            document.getElementById('windowSize-slider-value').innerHTML = document.getElementById('windowSize-slider').value;
        });
        for (const option of document.querySelectorAll(".custom-option")) {
            option.addEventListener('click', function () {
                var _a;
                if (!option.classList.contains('selected')) {
                    (_a = option.parentNode.querySelector('.custom-option.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('selected');
                    option.classList.add('selected');
                    option.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
                }
                localstorage.changeSetting(option);
            });
        }
    }
}
overwolf.windows.getOpenWindows(data => {
    const windows = Object.keys(data);
    if (windows.includes('in_lobby_desktop_only') || windows.includes('in_game_desktop_only') || windows.includes('desktop')) {
        mode = 'desktop';
        owWindow = new ow_window_1.OWWindow(consts_1.windowNames.settingsDesktopOnly);
    }
    else {
        owWindow = new ow_window_1.OWWindow(consts_1.windowNames.settings);
    }
    Settings.instance();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2NvbnRyb2xsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvbG9jYWxzdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctd2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvQXBwV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUM7QUF3YXpCLHdDQUFjO0FBdGFsQixNQUFNLG9CQUFvQixHQUFHO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lB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QUN4QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsS0FBSztRQUN0QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEVBQUUsRUFBRTtRQUNBLE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxDQUFDLEVBQUU7UUFDQyxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFlBQVksRUFBRSxTQUFTO0tBQzFCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLEtBQUs7UUFDdEIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFN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SSxvQkFBUSxDQUFDLG9CQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakQ7SUFFRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic2V0dGluZ3Mvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMvc2V0dGluZ3Mvc2V0dGluZ3MudHNcIik7XG4iLCJjb25zdCByYWluYm93Q2xhc3NJZCA9IDEwODI2O1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczEgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuICAgICdyb3N0ZXInLFxyXG4gICAgJ2tpbGwnLFxyXG4gICAgJ2RlYXRoJyxcclxuICAgICdtZScsXHJcbl07XHJcblxyXG5jb25zdCBpbnRlcmVzdGluZ0ZlYXR1cmVzMiA9IFtcclxuICAgICdnZXBfaW50ZXJuYWwnLFxyXG4gICAgJ2dhbWVfaW5mbycsXHJcbiAgICAnbWF0Y2gnLFxyXG4gICAgJ21hdGNoX2luZm8nLFxyXG5dO1xyXG5cclxuY29uc3Qgd2luZG93TmFtZXMgPSB7XHJcbiAgICBkZXNrdG9wOiAnZGVza3RvcCcsXHJcbiAgICBpbkxvYmJ5OiAnaW5fbG9iYnknLFxyXG4gICAgaW5HYW1lOiAnaW5fZ2FtZScsXHJcbiAgICBpbkxvYmJ5RGVza3RvcE9ubHk6ICdpbl9sb2JieV9kZXNrdG9wX29ubHknLFxyXG4gICAgaW5HYW1lRGVza3RvcE9ubHk6ICdpbl9nYW1lX2Rlc2t0b3Bfb25seScsXHJcbiAgICBzZXR0aW5nczogJ3NldHRpbmdzX2luX2dhbWUnLFxyXG4gICAgc2V0dGluZ3NEZXNrdG9wT25seTogJ3NldHRpbmdzX2Rlc2t0b3AnLFxyXG4gICAgc3RhdGlzdGljczogJ3N0YXRpc3RpY3NfaW5fZ2FtZScsXHJcbiAgICBzdGF0aXN0aWNzRGVza3RvcE9ubHk6ICdzdGF0aXN0aWNzX2Rlc2t0b3AnLFxyXG4gICAgd2Vic2l0ZTogJ3dlYnNpdGVfaW5fZ2FtZScsXHJcbiAgICB3ZWJzaXRlRGVza3RvcE9ubHk6ICd3ZWJzaXRlX2Rlc2t0b3AnXHJcbn07XHJcblxyXG5jb25zdCBob3RrZXlzID0ge1xyXG4gICAgdG9nZ2xlOiAnc2hvd2hpZGUnLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZFID0gW1xyXG4gICAgJ09QRVJBVElPTlMnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRV9MT05FV09MRicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfUEFSVFknLFxyXG5dO1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZQID0gW1xyXG4gICAgJ01BVENITUFLSU5HX1BWUF9ORVdDT01FUicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfRVZFTlQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcsXHJcbiAgICAnQ1VTVE9NR0FNRV9QVlAnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQX0RFRElDQVRFRCcsXHJcbl07XHJcblxyXG5jb25zdCBkYXRhYmFzZU9iamVjdCA9IHtcclxuICAgIE1BVENITUFLSU5HX1BWUF9SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlA6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNlYXNvbkNvbG9ycyA9IHtcclxuICAgIDY6JyMwMDUwYjMnLFxyXG4gICAgNzonI2NhMzYxYycsXHJcbiAgICA4OicjMDA2NTQzJyxcclxuICAgIDk6JyNmZmMxMTMnLFxyXG4gICAgMTA6JyM5NDlmMzknLFxyXG4gICAgMTE6JyM4MWEwYzEnLFxyXG4gICAgMTI6JyNhYTg1NGYnLFxyXG4gICAgMTM6JyNkMjAwNWEnLFxyXG4gICAgMTQ6JyMzMDQzOTUnLFxyXG4gICAgMTU6JyMxMzYzMGMnLFxyXG4gICAgMTY6JyMwNjlkYjMnLFxyXG4gICAgMTc6JyM5NDZhOTcnLFxyXG4gICAgMTg6JyMyYjdlOWEnLFxyXG4gICAgMTk6JyM2Y2E1MTEnLFxyXG4gICAgMjA6JyNkMTQwMDcnLFxyXG59XHJcblxyXG5jb25zdCBvcGVyYXRvcnMgPSB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJTbGVkZ2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjFcIlxyXG4gICAgfSxcclxuICAgIDEwMjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUaGF0Y2hlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6MVwiXHJcbiAgICB9LFxyXG4gICAgNTEzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoyXCJcclxuICAgIH0sXHJcbiAgICAxMDI1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhlcm1pdGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjJcIlxyXG4gICAgfSxcclxuICAgIDc3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlR3aXRjaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6M1wiXHJcbiAgICB9LFxyXG4gICAgMTAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1vbnRhZ25lXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTozXCJcclxuICAgIH0sXHJcbiAgICAyNTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHbGF6XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo0XCJcclxuICAgIH0sXHJcbiAgICA1MTU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGdXplXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo0XCJcclxuICAgIH0sXHJcbiAgICAyNjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGl0elwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSVFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjVcIlxyXG4gICAgfSxcclxuICAgIDI2MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJ1Y2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjZcIlxyXG4gICAgfSxcclxuICAgIDI2Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJsYWNrYmVhcmRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjdcIlxyXG4gICAgfSxcclxuICAgIDI2Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhcGl0YW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjhcIlxyXG4gICAgfSxcclxuICAgIDI2NDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkhpYmFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6OVwiXHJcbiAgICB9LFxyXG4gICAgMjY1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSmFja2FsXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpBXCJcclxuICAgIH0sXHJcbiAgICAyNjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJZaW5nXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpCXCJcclxuICAgIH0sXHJcbiAgICA1MjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJab2ZpYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6Q1wiXHJcbiAgICB9LFxyXG4gICAgMjY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRG9ra2FlYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkRcIlxyXG4gICAgfSxcclxuICAgIDUyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkVcIlxyXG4gICAgfSxcclxuICAgIDc4MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkZpbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDpFXCJcclxuICAgIH0sXHJcbiAgICAyNzE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNYXZlcmlja1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTBcIlxyXG4gICAgfSxcclxuICAgIDI3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk5vbWFkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxMVwiXHJcbiAgICB9LFxyXG4gICAgNTI5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR3JpZGxvY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb2trXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxM1wiXHJcbiAgICB9LFxyXG4gICAgMjc3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQW1hcnVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE2XCJcclxuICAgIH0sXHJcbiAgICAyNzg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJLYWxpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxN1wiXHJcbiAgICB9LFxyXG4gICAgMjgwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSWFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTlcIlxyXG4gICAgfSxcclxuICAgIDc5MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFjZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6MTdcIlxyXG4gICAgfSxcclxuICAgIDI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWmVyb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjE6MUJcIlxyXG4gICAgfSxcclxuICAgIDE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJSZWNydWl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwicmVjcnVpdFwiXHJcbiAgICB9LFxyXG4gICAgMjU2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU21va2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFcIlxyXG4gICAgfSxcclxuICAgIDUxMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk11dGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjFcIlxyXG4gICAgfSxcclxuICAgIDI1Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhc3RsZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MlwiXHJcbiAgICB9LFxyXG4gICAgNzY5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUHVsc2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjJcIlxyXG4gICAgfSxcclxuICAgIDI1ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRvY1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6M1wiXHJcbiAgICB9LFxyXG4gICAgNTE0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUm9va1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6M1wiXHJcbiAgICB9LFxyXG4gICAgNzcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2Fwa2FuXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo0XCJcclxuICAgIH0sXHJcbiAgICAxMDI3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGFjaGFua2FcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjRcIlxyXG4gICAgfSxcclxuICAgIDc3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphZ2VyXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo1XCJcclxuICAgIH0sXHJcbiAgICAxMDI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmFuZGl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo1XCJcclxuICAgIH0sXHJcbiAgICA1MTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGcm9zdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NlwiXHJcbiAgICB9LFxyXG4gICAgNTE4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmFsa3lyaWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjdcIlxyXG4gICAgfSxcclxuICAgIDUxOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhdmVpcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjhcIlxyXG4gICAgfSxcclxuICAgIDUyMDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVjaG9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjlcIlxyXG4gICAgfSxcclxuICAgIDUyMToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1pcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkFcIlxyXG4gICAgfSxcclxuICAgIDUyMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxlc2lvblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6QlwiXHJcbiAgICB9LFxyXG4gICAgMjY3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRWxhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpDXCJcclxuICAgIH0sXHJcbiAgICA1MjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJWaWdpbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6RFwiXHJcbiAgICB9LFxyXG4gICAgMjcwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWFlc3Ryb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6RlwiXHJcbiAgICB9LFxyXG4gICAgNTI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQWxpYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNsYXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMFwiXHJcbiAgICB9LFxyXG4gICAgNTI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FpZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTFcIlxyXG4gICAgfSxcclxuICAgIDI3Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1venppZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTJcIlxyXG4gICAgfSxcclxuICAgIDI3NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIldhcmRlblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTRcIlxyXG4gICAgfSxcclxuICAgIDI3Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdveW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE1XCJcclxuICAgIH0sXHJcbiAgICA1MzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYW1haVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTdcIlxyXG4gICAgfSxcclxuICAgIDI3OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk9yeXhcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE4XCJcclxuICAgIH0sXHJcbiAgICAyODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNZWx1c2lcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFBXCJcclxuICAgIH0sXHJcbiAgICAxMDQ2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXJ1bmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjE3XCJcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJhbmtPZmZzZXQgPSB7XHJcbiAgICAwOiAwLFxyXG4gICAgMTogMixcclxuICAgIDI6IDMsXHJcbiAgICAzOiA0LFxyXG4gICAgNDogNSxcclxuICAgIDU6IDcsXHJcbiAgICA2OiA4LFxyXG4gICAgNzogOSxcclxuICAgIDg6IDEwLFxyXG4gICAgOTogMTIsXHJcbiAgICAxMDogMTMsXHJcbiAgICAxMTogMTQsXHJcbiAgICAxMjogMTUsXHJcbiAgICAxMzogNTAsXHJcbiAgICAxNDogMTYsXHJcbiAgICAxNTogMTcsXHJcbiAgICAxNjogMTgsXHJcbiAgICAxNzogMTksXHJcbiAgICAxODogMjAsXHJcbiAgICAxOTogMjEsXHJcbiAgICAyMDogMjIsXHJcbiAgICAyMTogMjIsXHJcbiAgICAyMjogMjIsXHJcbiAgICAyMzogMjIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgcmFpbmJvd0NsYXNzSWQsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMSxcclxuICAgIGludGVyZXN0aW5nRmVhdHVyZXMyLFxyXG4gICAgd2luZG93TmFtZXMsXHJcbiAgICBob3RrZXlzLFxyXG4gICAgZ2FtZU1vZGVzUFZQLFxyXG4gICAgZ2FtZU1vZGVzUFZFLFxyXG4gICAgZGF0YWJhc2VPYmplY3QsXHJcbiAgICBzZWFzb25Db2xvcnMsXHJcbiAgICByYW5rT2Zmc2V0LFxyXG4gICAgb3BlcmF0b3JzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJzIHtcclxuICAgIHB1YmxpYyBzZXRTaG9ydGN1dFRleHQoc2hvcnRjdXRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5nZXQocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdGtleSA9IHJlc3VsdC5nYW1lc1snMTA4MjYnXVswXS5iaW5kaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhvdGtleSA9PT0gJ1VuYXNzaWduZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGN1dENvbnRhaW5lci5pbm5lckhUTUwgPSAnVU5BU1NJR05FRCB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gaG90a2V5ICsgJyB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXkgaW4gZ2FtZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhcHAgaG90a2V5IFwiJHtob3RrZXl9XCJgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZ2FtZS1ldmVudHMtc3RhdHVzLm92ZXJ3b2xmLmNvbS8xMDgyNl9wcm9kLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcndvbGZTdGF0dXMgPSBkYXRhLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgc29tZSBmdW5jdGlvbnMgbWlnaHQgbm90IHdvcmsgLSB3ZeKAmWxsIGZpeCBpdCBzaG9ydGx5PC9oND4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgT3ZlcndvbGYgYXBwIEFQSSBoYXMgc3RvcHBlZCB3b3JraW5nIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvdmVyd29sZiBzdGF0dXMgXCIke292ZXJ3b2xmU3RhdHVzfVwiYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnRlcm5ldFN0YXR1cyhpbmV0ZXJuZXRTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJuZXRTdGF0dXMgPSBuYXZpZ2F0b3Iub25MaW5lO1xyXG5cclxuICAgICAgICBpZiAoaW50ZXJuZXRTdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGluZXRlcm5ldFN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbnRlcm5ldCBzdGF0dXMgXCIke2ludGVybmV0U3RhdHVzfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRhYmxlVGFiKHRhYjogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllci10clwiKS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFua2VkU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFua2VkJyArIGkgKyBqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3VhbFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc3VhbCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFzb25TdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFzb25hbCcgKyBpICsgaik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmtlZFN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYiA9PT0gJ3JhbmtlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2Nhc3VhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ3NlYXNvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHRhYmxlIHRhYiBcIiR7dGFifVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dEZXRhaWxlZFBsYXllcihkZXRhaWxlZHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChkZXRhaWxlZHN0YXR1cykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgZGV0YWlsZWQgc3RhdHMgXCIkeyFkZXRhaWxlZHN0YXR1c31cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV0YWlsZWRzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRoZW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpKTtcclxuICAgICAgICBjb25zdCBzdHlsZVZhcmlhYmxlcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiI0YwRjBGMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjYxXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiMxMjEyMTJcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjRkZGRkZGMTRcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiIzAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjRkZGRkZGMUVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJ1cmwoJy9pbWcvYmFja2dyb3VuZC53ZWJwJylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1saWdodC1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpLnNldEF0dHJpYnV0ZSgneGxpbms6aHJlZicsICcvaW1nL3NvY2lhbG1lZGlhX2ljb25zLnN2ZyNyNmRiJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKS5zZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnLCAnL2ltZy9zb2NpYWxtZWRpYV9pY29ucy5zdmcjcjZkYmRhcmsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudGhlbWUgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiMzMzMzMzNcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLWJnLWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy1iZy1jb2xvclwiLCBcIiNiMGIwYjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ0bi1jb2xvclwiLCBcIiM5OTk5OTlcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1kYXJrLWxvZ28uc3ZnXCIpJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykuc2V0QXR0cmlidXRlKCd4bGluazpocmVmJywgJy9pbWcvc29jaWFsbWVkaWFfaWNvbnMuc3ZnI3I2ZGJkYXJrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGZldGNoQ29uZmlnKCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3N0YWdpbmctYXBpLnN0YXRzZGIubmV0L3I2L292ZXJsYXkvY29uZmlnJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeShkYXRhLnBheWxvYWQucmFpbmJvdykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy52ZXJzaW9uICE9IGRhdGEucGF5bG9hZC5yYWluYm93LnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuL293LXdpbmRvdyc7XHJcblxyXG5jb25zdCBjb250cm9sbGVycyA9IG5ldyBDb250cm9sbGVycywgb3dXaW5kb3c6IE9XV2luZG93ID0gbmV3IE9XV2luZG93O1xyXG5cclxubGV0IGxvY2FsRGVza3RvcE9ubHkgPSBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHksIHZhbHVlc0N1c3RvbSwgbG9jYWw7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlIHtcclxuICAgIHByaXZhdGUgZHRhYmxlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkdGhlbWU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtYXhpbWl6ZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGRpc3BsYXk6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtb25pdG9yczogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGNpcmNsZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmR0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWR0YWJsZSAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRoZW1lIC5jdXN0b20tb3B0aW9uJykgO1xyXG4gICAgICAgIHRoaXMuZG1heGltaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1heGltaXplIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRkaXNwbGF5IC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kbW9uaXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbW9uaXRvcnMgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kY2lyY2xlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYXRlTG9jYWxTdG9yYWdlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgfHwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpKS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmxlJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXhpbWl6ZSc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICBcInRoZW1lXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlXCI6IFwiZ2VuZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibW9uaXRvcklkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY2FsZVNsaWRlcicsICdcIjFcIicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aCA8IDkpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2YWx1ZXNUYWJsZScsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAwIDogJ0NvdW50cnknLFxyXG4gICAgICAgICAgICAgICAgICAgIDEgOiAnTFZMJyxcclxuICAgICAgICAgICAgICAgICAgICAyIDogJ0tpbGxzJyxcclxuICAgICAgICAgICAgICAgICAgICAzIDogJ0RlYXRocycsXHJcbiAgICAgICAgICAgICAgICAgICAgNCA6ICdLL0QnLFxyXG4gICAgICAgICAgICAgICAgICAgIDUgOiAnV2lucycsXHJcbiAgICAgICAgICAgICAgICAgICAgNiA6ICdMb3NzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDcgOiAnVy9MJyxcclxuICAgICAgICAgICAgICAgICAgICA4IDogJ0hhY2tlciAlJ1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rlc2t0b3BPbmx5JywgJ1wiMFwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b20gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSk7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU2V0dGluZyhzZWxlY3RlZE9wdGlvbjogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ0lkID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCdzZXR0aW5naWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctdmFsdWVUYWJsZScpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b21baW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgndmFsdWVzVGFibGUnLCB2YWx1ZXNDdXN0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRoZW1lJykge1xyXG4gICAgICAgICAgICBsb2NhbC50aGVtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcnMuc2V0VGhlbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWR0YWJsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwudGFibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRkaXNwbGF5Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ2Rlc2t0b3BPbmx5JywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1heGltaXplJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tYXhpbWl6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1vbml0b3JzJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tb25pdG9ySWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRjaXJjbGUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLmNpcmNsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHNsaWRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzY2FsZVNsaWRlcicsIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3MoKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHtcclxuICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiAwLFxyXG4gICAgICAgICAgICBcInJhbmtlZFwiIDogMSxcclxuICAgICAgICAgICAgXCJjYXN1YWxcIiA6IDIsXHJcbiAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IDNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzQXJyID0gW1xyXG4gICAgICAgICAgICB0aGlzLmR0YWJsZVtsb2NhbC50YWJsZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZHRoZW1lW2xvY2FsLnRoZW1lXSxcclxuICAgICAgICAgICAgdGhpcy5kbWF4aW1pemVbbG9jYWwubWF4aW1pemVdLFxyXG4gICAgICAgICAgICB0aGlzLmRkaXNwbGF5W2xvY2FsRGVza3RvcE9ubHkucmVwbGFjZSgvXCIvZywgJycpXSxcclxuICAgICAgICAgICAgdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSxcclxuICAgICAgICAgICAgdGhpcy5kY2lyY2xlW2NpcmNsZXNbbG9jYWwuY2lyY2xlXV0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHNldHRpbmdzQXJyW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNldHRpbmcgIT09IHRoaXMuZG1vbml0b3JzW2xvY2FsLm1vbml0b3JJZF0pIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IHNldHRpbmcudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZyA9PT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpW2xvY2FsLm1vbml0b3JJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LmdldE1vbml0b3JzTGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obW9uaXRvckxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gbW9uaXRvckxpc3QuZGlzcGxheXNbbG9jYWwubW9uaXRvcklkXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93U2l6ZS1zbGlkZXInKSBhcyBhbnkpLnZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlci12YWx1ZScpLmlubmVySFRNTCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzQ3VzdG9tW2ldLnJlcGxhY2UoL1sgL10vZywgJy0nKSArIGk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidHlwZSBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA9IG92ZXJ3b2xmLndpbmRvd3MuR2V0V2luZG93U3RhdGVSZXN1bHQ7XHJcbnR5cGUgT3dXaW5kb3dJbmZvID0gb3ZlcndvbGYud2luZG93cy5XaW5kb3dJbmZvO1xyXG5leHBvcnQgY2xhc3MgT1dXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXN0b3JlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogcmVzdG9yZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MucmVzdG9yZShpZCwgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW3Jlc3RvcmVdIC0gYW4gZXJyb3Igb2NjdXJyZWQsIHdpbmRvd0lkPSR7aWR9LCByZWFzb249JHtyZXN1bHQuZXJyb3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1pbmltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWluaW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5taW5pbWl6ZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGJyaW5nVG9Gcm9udCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuYnJpbmdUb0Zyb250KGlkLCB0cnVlLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbWF4aW1pemUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtYXhpbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWF4aW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBoaWRlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmhpZGUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmdldFdpbmRvd1N0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgKHJlc3VsdC53aW5kb3dfc3RhdGUgIT09ICdjbG9zZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5pbnRlcm5hbENsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2hhbmdlU2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2VXaW5kb3dMb2NhdGlvbihtb2RlLCB3aW5kb3dJZCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdygocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgd2luZG93V2lkdGggPSByZXN1bHQud2luZG93LndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gcmVzdWx0LndpbmRvdy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoKG1vbml0b3JSZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySWQ6IHN0cmluZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKS5tb25pdG9ySWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JXaWR0aCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySGVpZ2h0ID0gbW9uaXRvclJlcy5kaXNwbGF5c1ttb25pdG9ySWRdLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdjZW50ZXItY2VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBtb25pdG9yV2lkdGggLyAyIC0gKHdpbmRvd1dpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItcmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IChtb25pdG9yV2lkdGggLSB3aW5kb3dXaWR0aCkgLSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2NlbnRlci1sZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVBvc2l0aW9uKHdpbmRvd0lkLCBNYXRoLnJvdW5kKGxlZnQpLCBNYXRoLnJvdW5kKHRvcCksIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNjYWxlV2luZG93KHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZSk6IFByb21pc2UgPCB2b2lkID4gIHtcclxuICAgICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgucm91bmQod2lkdGggKiBzY2FsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhhdC5jaGFuZ2VXaW5kb3dTaXplKHdpbmRvd0lkLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2dhbWUnIHx8IHdpbmRvd0lkID09PSAnaW5fZ2FtZV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JSAtIDMycHgpYDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5JyB8fCB3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuaGVpZ2h0ID0gYGNhbGMoJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lIC0gMzJweClgO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbi1sb2JieSAuYWQtbG9iYnknKSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm90dG9tID0gYCR7TWF0aC5jZWlsKE1hdGgucG93KHNjYWxlLCAtNCkgKiA3ICogMTAwKSAvIDEwMH1weGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9sb2JieScgfHwgd2luZG93SWQgPT09ICdpbl9sb2JieV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NhbGUgPD0gMC42KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhZ01vdmUoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtLm9ubW91c2Vkb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5kcmFnTW92ZSh0aGlzLl9uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldE1vbml0b3JzTGlzdCgpOiBQcm9taXNlIDwgYW55ID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IGFueSA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRXaW5kb3dTdGF0ZSgpOiBQcm9taXNlIDwgR2V0V2luZG93U3RhdGVSZXN1bHQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0V2luZG93U3RhdGUoaWQsIHJlc29sdmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDdXJyZW50SW5mbygpOiBQcm9taXNlIDwgT3dXaW5kb3dJbmZvID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IE93V2luZG93SW5mbyA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC53aW5kb3cpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvYnRhaW4oKTogUHJvbWlzZSA8IE93V2luZG93SW5mbyB8IG51bGwgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2IgPSByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgJiYgcmVzLndpbmRvdyAmJiByZXMud2luZG93LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWQgPSByZXMud2luZG93LmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHJlcy53aW5kb3cubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLndpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3Mub2J0YWluRGVjbGFyZWRXaW5kb3codGhpcy5fbmFtZSwgY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGFzc3VyZU9idGFpbmVkKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0Lm9idGFpbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbnRlcm5hbENsb3NlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZShpZCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi9vZGstdHMvb3ctd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xyXG4gICAgcHJvdGVjdGVkIGN1cnJXaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIG1haW5XaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIHNldHRpbmdzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCB3ZWJzaXRlV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYXhpbWl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3dOYW1lOiBzdHJpbmcsIG1vZGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubWFpbldpbmRvdyA9IG5ldyBPV1dpbmRvdygnYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIHRoaXMuY3VycldpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdkZXNrdG9wJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93ID0gbmV3IE9XV2luZG93KCdzZXR0aW5nc19kZXNrdG9wJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc3RhdGlzdGljc19kZXNrdG9wJyk7XHJcbiAgICAgICAgICAgIHRoaXMud2Vic2l0ZVdpbmRvdyA9IG5ldyBPV1dpbmRvdygnd2Vic2l0ZV9kZXNrdG9wJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnaW5nYW1lJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93ID0gbmV3IE9XV2luZG93KCdzZXR0aW5nc19pbl9nYW1lJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc3RhdGlzdGljc19pbl9nYW1lJyk7XHJcbiAgICAgICAgICAgIHRoaXMud2Vic2l0ZVdpbmRvdyA9IG5ldyBPV1dpbmRvdygnd2Vic2l0ZV9pbl9nYW1lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1heGltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heGltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemVCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nc0J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVIaXN0b3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVIaXN0b3J5Jyk7XHJcbiAgICAgICAgY29uc3Qgd2Vic2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJzaXRlJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VXaW5kb3dCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VXaW5kb3dCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0TWluaW1pemVNb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsTWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93TmFtZSA9PT0gJ2Rlc2t0b3AnIHx8IHdpbmRvd05hbWUgPT09ICdzZXR0aW5nc19kZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc3RhdGlzdGljc19kZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnd2Vic2l0ZV9kZXNrdG9wJyB8fCBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjFcIicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VXaW5kb3dCdXR0b24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2xvc2VXaW5kb3dCdXR0b24pO1xyXG5cclxuICAgICAgICAgICAgY2xvc2VXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtaW5pbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXhpbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtYXhpbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXhpbWl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWF4aW1pemUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heGltaXplZCA9ICF0aGlzLm1heGltaXplZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3NCdXR0b24pIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2FtZUhpc3RvcnkpIHtcclxuICAgICAgICAgICAgZ2FtZUhpc3RvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3ZWJzaXRlKSB7XHJcbiAgICAgICAgICAgIHdlYnNpdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYnNpdGVXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGFsQ2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbldpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbE1pbmltaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsTWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2luZG93U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY3VycldpbmRvdy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0RHJhZyhlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycldpbmRvdy5kcmFnTW92ZShlbGVtKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBcHBXaW5kb3cgfSBmcm9tICcuLi9BcHBXaW5kb3cnO1xyXG5pbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4uLy4uL29kay10cy9vdy13aW5kb3cnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4uLy4uL29kay10cy9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IExvY2Fsc3RvcmFnZSB9IGZyb20gJy4uLy4uL29kay10cy9sb2NhbHN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB3aW5kb3dOYW1lcyB9IGZyb20gJy4uLy4uL2NvbnN0cyc7XHJcblxyXG5jb25zdCBzZXR0aW5nRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5nT3B0aW9ucycpO1xyXG5cclxubGV0IG93V2luZG93OiBPV1dpbmRvdywgbW9kZTogc3RyaW5nO1xyXG5cclxuY29uc3QgY29udHJvbGxlcnMgPSBuZXcgQ29udHJvbGxlcnMoKTtcclxuY29uc3QgbG9jYWxzdG9yYWdlID0gbmV3IExvY2Fsc3RvcmFnZSgpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBBcHBXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTZXR0aW5ncztcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChtb2RlID09PSAnZGVza3RvcCcpIHtcclxuICAgICAgICAgICAgc3VwZXIod2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSwgJ2Rlc2t0b3AnKTtcclxuXHJcbiAgICAgICAgICAgIG93V2luZG93LnNjYWxlV2luZG93KCdzZXR0aW5nc19kZXNrdG9wJywgOTAwLCA3MDAsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3VwZXIod2luZG93TmFtZXMuc2V0dGluZ3MsICdpbmdhbWUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBvd1dpbmRvdy5zY2FsZVdpbmRvdygnc2V0dGluZ3NfaW5fZ2FtZScsIDkwMCwgNzAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBvd1dpbmRvdy5jaGFuZ2VXaW5kb3dMb2NhdGlvbignY2VudGVyLWNlbnRlcicsICdzZXR0aW5nc19pbl9nYW1lJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvd1dpbmRvdy5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBvd1dpbmRvdy5nZXRNb25pdG9yc0xpc3QoKVxyXG4gICAgICAgICAgICAudGhlbihtb25pdG9yTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvckxpc3RIVE1MOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vbml0b3JMaXN0LmRpc3BsYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9uaXRvckxpc3RIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc2V0dGluZ0lkPVwic2V0dGluZy1kbW9uaXRvcnNcIiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiB2YWx1ZT1cIiR7aX1cIj4ke21vbml0b3JMaXN0LmRpc3BsYXlzW2ldLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmctZG1vbml0b3JzJykuaW5uZXJIVE1MID0gbW9uaXRvckxpc3RIVE1MO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNldHRpbmdTZWxlY3RvcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBsb2NhbHN0b3JhZ2UuaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzdG9yYWdlLnNldFNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzLnNldFRoZW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLmhvdGtleXMub25DaGFuZ2VkLmFkZExpc3RlbmVyKCgpID0+IHtcclxuICAgICAgICAgICAgY29udHJvbGxlcnMuc2V0U2hvcnRjdXRUZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0JykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVycy5zZXRUaGVtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTZXR0aW5ncygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2V0dGluZ1NlbGVjdG9yKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBlbC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3V0c2lkZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdEaXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ0RpdnNbaV0uY29udGFpbnModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHNpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG91dHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ0RpdnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdEaXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdEaXYgPSBzZXR0aW5nRGl2c1tpXTtcclxuXHJcbiAgICAgICAgICAgIHNldHRpbmdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2V0dGluZ0RpdnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5nRGl2MiA9IHNldHRpbmdEaXZzW2pdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ0RpdiAhPT0gc2V0dGluZ0RpdjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdEaXYyLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdEaXYyLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ0RpdjIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgICAgICAgICAgbG9jYWxzdG9yYWdlLmNoYW5nZVNldHRpbmcob3B0aW9uLnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlci12YWx1ZScpLmlubmVySFRNTCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93U2l6ZS1zbGlkZXInKSBhcyBhbnkpLnZhbHVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLW9wdGlvblwiKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9uLnNlbGVjdGVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxvY2Fsc3RvcmFnZS5jaGFuZ2VTZXR0aW5nKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5vdmVyd29sZi53aW5kb3dzLmdldE9wZW5XaW5kb3dzKGRhdGEgPT4ge1xyXG4gICAgY29uc3Qgd2luZG93cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG5cclxuICAgIGlmICh3aW5kb3dzLmluY2x1ZGVzKCdpbl9sb2JieV9kZXNrdG9wX29ubHknKSB8fCB3aW5kb3dzLmluY2x1ZGVzKCdpbl9nYW1lX2Rlc2t0b3Bfb25seScpIHx8IHdpbmRvd3MuaW5jbHVkZXMoJ2Rlc2t0b3AnKSkge1xyXG4gICAgICAgIG1vZGUgPSAnZGVza3RvcCc7XHJcblxyXG4gICAgICAgIG93V2luZG93ID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5zZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=