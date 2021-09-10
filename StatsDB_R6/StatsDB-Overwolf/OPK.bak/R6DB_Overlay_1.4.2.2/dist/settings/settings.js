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
            super(consts_1.windowNames.settingsDesktopOnly, 'settings_desktop', 'statistics_desktop');
            owWindow.scaleWindow('settings_desktop', 900, 700, JSON.parse(localStorage.scaleSlider));
        }
        else {
            super(consts_1.windowNames.settings, 'settings_in_game', 'statistics_in_game');
            const promise = owWindow.scaleWindow('settings_in_game', 900, 700, JSON.parse(localStorage.scaleSlider))
                .then(() => owWindow.changeWindowLocation('center-center', 'settings_in_game'));
        }
        owWindow.restore();
        this.setSettingSelector();
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
    mode = Object.keys(data)[1];
    if (mode === 'desktop') {
        owWindow = new ow_window_1.OWWindow(consts_1.windowNames.settingsDesktopOnly);
    }
    else {
        owWindow = new ow_window_1.OWWindow(consts_1.windowNames.settings);
    }
    Settings.instance();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2NvbnRyb2xsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvbG9jYWxzdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctd2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvQXBwV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFzYXpCLHdDQUFjO0FBcGFsQixNQUFNLG9CQUFvQixHQUFHO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lB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QU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsS0FBSztRQUN0QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEVBQUUsRUFBRTtRQUNBLE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxDQUFDLEVBQUU7UUFDQyxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFlBQVksRUFBRSxTQUFTO0tBQzFCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLEtBQUs7UUFDdEIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0Qs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QUMsQ0FBQztLQUM1RDtTQUFNO1FBQ0gsUUFBUSxHQUFHLElBQUksb0JBQVEsQ0FBQyxvQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNldHRpbmdzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVibGljL3NldHRpbmdzL3NldHRpbmdzLnRzXCIpO1xuIiwiY29uc3QgcmFpbmJvd0NsYXNzSWQgPSAxMDgyNjtcclxuXHJcbmNvbnN0IGludGVyZXN0aW5nRmVhdHVyZXMxID0gW1xyXG4gICAgJ2dlcF9pbnRlcm5hbCcsXHJcbiAgICAnZ2FtZV9pbmZvJyxcclxuICAgICdtYXRjaCcsXHJcbiAgICAnbWF0Y2hfaW5mbycsXHJcbiAgICAncm9zdGVyJyxcclxuICAgICdraWxsJyxcclxuICAgICdkZWF0aCcsXHJcbiAgICAnbWUnLFxyXG5dO1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczIgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuXTtcclxuXHJcbmNvbnN0IHdpbmRvd05hbWVzID0ge1xyXG4gICAgZGVza3RvcDogJ2Rlc2t0b3AnLFxyXG4gICAgaW5Mb2JieTogJ2luX2xvYmJ5JyxcclxuICAgIGluR2FtZTogJ2luX2dhbWUnLFxyXG4gICAgaW5Mb2JieURlc2t0b3BPbmx5OiAnaW5fbG9iYnlfZGVza3RvcF9vbmx5JyxcclxuICAgIGluR2FtZURlc2t0b3BPbmx5OiAnaW5fZ2FtZV9kZXNrdG9wX29ubHknLFxyXG4gICAgc2V0dGluZ3M6ICdzZXR0aW5nc19pbl9nYW1lJyxcclxuICAgIHNldHRpbmdzRGVza3RvcE9ubHk6ICdzZXR0aW5nc19kZXNrdG9wJyxcclxuICAgIHN0YXRpc3RpY3M6ICdzdGF0aXN0aWNzX2luX2dhbWUnLFxyXG4gICAgc3RhdGlzdGljc0Rlc2t0b3BPbmx5OiAnc3RhdGlzdGljc19kZXNrdG9wJ1xyXG59O1xyXG5cclxuY29uc3QgaG90a2V5cyA9IHtcclxuICAgIHRvZ2dsZTogJ3Nob3doaWRlJyxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWRSA9IFtcclxuICAgICdPUEVSQVRJT05TJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfTE9ORVdPTEYnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRScsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFX1BBUlRZJyxcclxuXTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWUCA9IFtcclxuICAgICdNQVRDSE1BS0lOR19QVlBfTkVXQ09NRVInLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX0VWRU5UJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9SQU5LRUQnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQJyxcclxuICAgICdDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQnLFxyXG5dO1xyXG5cclxuY29uc3QgZGF0YWJhc2VPYmplY3QgPSB7XHJcbiAgICBNQVRDSE1BS0lOR19QVlBfUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZWFzb25Db2xvcnMgPSB7XHJcbiAgICA2OicjMDA1MGIzJyxcclxuICAgIDc6JyNjYTM2MWMnLFxyXG4gICAgODonIzAwNjU0MycsXHJcbiAgICA5OicjZmZjMTEzJyxcclxuICAgIDEwOicjOTQ5ZjM5JyxcclxuICAgIDExOicjODFhMGMxJyxcclxuICAgIDEyOicjYWE4NTRmJyxcclxuICAgIDEzOicjZDIwMDVhJyxcclxuICAgIDE0OicjMzA0Mzk1JyxcclxuICAgIDE1OicjMTM2MzBjJyxcclxuICAgIDE2OicjMDY5ZGIzJyxcclxuICAgIDE3OicjOTQ2YTk3JyxcclxuICAgIDE4OicjMmI3ZTlhJyxcclxuICAgIDE5OicjNmNhNTExJyxcclxuICAgIDIwOicjZDE0MDA3JyxcclxufVxyXG5cclxuY29uc3Qgb3BlcmF0b3JzID0ge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU2xlZGdlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoxXCJcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhhdGNoZXJcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjFcIlxyXG4gICAgfSxcclxuICAgIDUxMzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MlwiXHJcbiAgICB9LFxyXG4gICAgMTAyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRoZXJtaXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToyXCJcclxuICAgIH0sXHJcbiAgICA3NzA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUd2l0Y2hcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjNcIlxyXG4gICAgfSxcclxuICAgIDEwMjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb250YWduZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6M1wiXHJcbiAgICB9LFxyXG4gICAgMjU5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR2xhelwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NFwiXHJcbiAgICB9LFxyXG4gICAgNTE1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnV6ZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NFwiXHJcbiAgICB9LFxyXG4gICAgMjYwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmxpdHpcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjVcIlxyXG4gICAgfSxcclxuICAgIDUxNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklRXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo1XCJcclxuICAgIH0sXHJcbiAgICAyNjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCdWNrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo2XCJcclxuICAgIH0sXHJcbiAgICAyNjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGFja2JlYXJkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo3XCJcclxuICAgIH0sXHJcbiAgICAyNjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXBpdGFvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo4XCJcclxuICAgIH0sXHJcbiAgICAyNjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJIaWJhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjlcIlxyXG4gICAgfSxcclxuICAgIDI2NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphY2thbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QVwiXHJcbiAgICB9LFxyXG4gICAgMjY2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWWluZ1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QlwiXHJcbiAgICB9LFxyXG4gICAgNTIzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWm9maWFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkNcIlxyXG4gICAgfSxcclxuICAgIDI2ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRva2thZWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpEXCJcclxuICAgIH0sXHJcbiAgICA1MjU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMaW9uXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpFXCJcclxuICAgIH0sXHJcbiAgICA3ODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGaW5rYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6RVwiXHJcbiAgICB9LFxyXG4gICAgMjcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWF2ZXJpY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEwXCJcclxuICAgIH0sXHJcbiAgICAyNzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb21hZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTFcIlxyXG4gICAgfSxcclxuICAgIDUyOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdyaWRsb2NrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMlwiXHJcbiAgICB9LFxyXG4gICAgMjc0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTm9ra1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTNcIlxyXG4gICAgfSxcclxuICAgIDI3Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFtYXJ1XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNlwiXHJcbiAgICB9LFxyXG4gICAgMjc4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FsaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTdcIlxyXG4gICAgfSxcclxuICAgIDI4MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE5XCJcclxuICAgIH0sXHJcbiAgICA3OTA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBY2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjE3XCJcclxuICAgIH0sXHJcbiAgICAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlplcm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIxOjFCXCJcclxuICAgIH0sXHJcbiAgICAxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUmVjcnVpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcInJlY3J1aXRcIlxyXG4gICAgfSxcclxuICAgIDI1Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlNtb2tlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxXCJcclxuICAgIH0sXHJcbiAgICA1MTI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNdXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxXCJcclxuICAgIH0sXHJcbiAgICAyNTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXN0bGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjJcIlxyXG4gICAgfSxcclxuICAgIDc2OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlB1bHNlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoyXCJcclxuICAgIH0sXHJcbiAgICAyNTg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJEb2NcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjNcIlxyXG4gICAgfSxcclxuICAgIDUxNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlJvb2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjNcIlxyXG4gICAgfSxcclxuICAgIDc3MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthcGthblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NFwiXHJcbiAgICB9LFxyXG4gICAgMTAyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRhY2hhbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo0XCJcclxuICAgIH0sXHJcbiAgICA3NzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJKYWdlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NVwiXHJcbiAgICB9LFxyXG4gICAgMTAyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJhbmRpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnJvc3RcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjZcIlxyXG4gICAgfSxcclxuICAgIDUxODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlZhbGt5cmllXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo3XCJcclxuICAgIH0sXHJcbiAgICA1MTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXZlaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo4XCJcclxuICAgIH0sXHJcbiAgICA1MjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJFY2hvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo5XCJcclxuICAgIH0sXHJcbiAgICA1MjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpBXCJcclxuICAgIH0sXHJcbiAgICA1MjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMZXNpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkJcIlxyXG4gICAgfSxcclxuICAgIDI2Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVsYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6Q1wiXHJcbiAgICB9LFxyXG4gICAgNTI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmlnaWxcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkRcIlxyXG4gICAgfSxcclxuICAgIDI3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1hZXN0cm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFsaWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpGXCJcclxuICAgIH0sXHJcbiAgICA1Mjc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDbGFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTBcIlxyXG4gICAgfSxcclxuICAgIDUyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthaWRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjExXCJcclxuICAgIH0sXHJcbiAgICAyNzM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb3p6aWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYXJkZW5cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE0XCJcclxuICAgIH0sXHJcbiAgICAyNzY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHb3lvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNVwiXHJcbiAgICB9LFxyXG4gICAgNTM0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiV2FtYWlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjE3XCJcclxuICAgIH0sXHJcbiAgICAyNzk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJPcnl4XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxOFwiXHJcbiAgICB9LFxyXG4gICAgMjgxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWVsdXNpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxQVwiXHJcbiAgICB9LFxyXG4gICAgMTA0Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFydW5pXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToxN1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByYW5rT2Zmc2V0ID0ge1xyXG4gICAgMDogMCxcclxuICAgIDE6IDIsXHJcbiAgICAyOiAzLFxyXG4gICAgMzogNCxcclxuICAgIDQ6IDUsXHJcbiAgICA1OiA3LFxyXG4gICAgNjogOCxcclxuICAgIDc6IDksXHJcbiAgICA4OiAxMCxcclxuICAgIDk6IDEyLFxyXG4gICAgMTA6IDEzLFxyXG4gICAgMTE6IDE0LFxyXG4gICAgMTI6IDE1LFxyXG4gICAgMTM6IDUwLFxyXG4gICAgMTQ6IDE2LFxyXG4gICAgMTU6IDE3LFxyXG4gICAgMTY6IDE4LFxyXG4gICAgMTc6IDE5LFxyXG4gICAgMTg6IDIwLFxyXG4gICAgMTk6IDIxLFxyXG4gICAgMjA6IDIyLFxyXG4gICAgMjE6IDIyLFxyXG4gICAgMjI6IDIyLFxyXG4gICAgMjM6IDIyLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJhaW5ib3dDbGFzc0lkLFxyXG4gICAgaW50ZXJlc3RpbmdGZWF0dXJlczEsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMixcclxuICAgIHdpbmRvd05hbWVzLFxyXG4gICAgaG90a2V5cyxcclxuICAgIGdhbWVNb2Rlc1BWUCxcclxuICAgIGdhbWVNb2Rlc1BWRSxcclxuICAgIGRhdGFiYXNlT2JqZWN0LFxyXG4gICAgc2Vhc29uQ29sb3JzLFxyXG4gICAgcmFua09mZnNldCxcclxuICAgIG9wZXJhdG9yc1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sbGVycyB7XHJcbiAgICBwdWJsaWMgc2V0U2hvcnRjdXRUZXh0KHNob3J0Y3V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLmhvdGtleXMuZ2V0KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBob3RrZXkgPSByZXN1bHQuZ2FtZXNbJzEwODI2J11bMF0uYmluZGluZztcclxuXHJcbiAgICAgICAgICAgIGlmIChob3RrZXkgPT09ICdVbmFzc2lnbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gJ1VOQVNTSUdORUQgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3J0Y3V0Q29udGFpbmVyLmlubmVySFRNTCA9IGhvdGtleSArICcgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5IGluIGdhbWUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYXBwIGhvdGtleSBcIiR7aG90a2V5fVwiYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE92ZXJ3b2xmU3RhdHVzKG92ZXJ3b2xmU3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2dhbWUtZXZlbnRzLXN0YXR1cy5vdmVyd29sZi5jb20vMTA4MjZfcHJvZC5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJ3b2xmU3RhdHVzID0gZGF0YS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIHNvbWUgZnVuY3Rpb25zIG1pZ2h0IG5vdCB3b3JrIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIE92ZXJ3b2xmIGFwcCBBUEkgaGFzIHN0b3BwZWQgd29ya2luZyAtIHdl4oCZbGwgZml4IGl0IHNob3J0bHk8L2g0Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJ3b2xmU3RhdHVzID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcndvbGZTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb3ZlcndvbGYgc3RhdHVzIFwiJHtvdmVyd29sZlN0YXR1c31cImApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW50ZXJuZXRTdGF0dXMoaW5ldGVybmV0U3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGludGVybmV0U3RhdHVzID0gbmF2aWdhdG9yLm9uTGluZTtcclxuXHJcbiAgICAgICAgaWYgKGludGVybmV0U3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5ldGVybmV0U3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgaW50ZXJuZXQgc3RhdHVzIFwiJHtpbnRlcm5ldFN0YXR1c31cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUYWJsZVRhYih0YWI6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItdHJcIikubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtlZFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmtlZCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXN1YWxTdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXN1YWwnICsgaSArIGopO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vhc29uU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vhc29uYWwnICsgaSArIGopO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyYW5rZWRTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWIgPT09ICdyYW5rZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdjYXN1YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdzZWFzb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCB0YWJsZSB0YWIgXCIke3RhYn1cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGV0YWlsZWRQbGF5ZXIoZGV0YWlsZWRzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoZGV0YWlsZWRzdGF0dXMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1ib2R5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZGV0YWlsZWRzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGRldGFpbGVkIHN0YXRzIFwiJHshZGV0YWlsZWRzdGF0dXN9XCJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRldGFpbGVkc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUaGVtZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVWYXJpYWJsZXMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZC50aGVtZSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiNGMEYwRjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkY2MVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjMTIxMjEyXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI0ZGRkZGRjE0XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiMwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRjFFXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkYzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwidXJsKCcvaW1nL2JhY2tncm91bmQud2VicCcpXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItbGlnaHQtbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtaG92ZXItY29sb3JcIiwgXCIjMzMzMzMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjYjBiMGIwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjOTk5OTk5XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93bi1idG4tY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItZGFyay1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hDb25maWcoKSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vc3RhZ2luZy1hcGkuc3RhdHNkYi5uZXQvcjYvb3ZlcmxheS9jb25maWcnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5jb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnZlcnNpb24gIT0gZGF0YS5wYXlsb2FkLnJhaW5ib3cudmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5wYXlsb2FkLnJhaW5ib3cpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbmZpZycpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4vb3ctd2luZG93JztcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzLCBvd1dpbmRvdzogT1dXaW5kb3cgPSBuZXcgT1dXaW5kb3c7XHJcblxyXG5sZXQgbG9jYWxEZXNrdG9wT25seSA9IGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSwgdmFsdWVzQ3VzdG9tLCBsb2NhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBkdGFibGU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGR0aGVtZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1heGltaXplOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkZGlzcGxheTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1vbml0b3JzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkY2lyY2xlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRhYmxlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kdGhlbWUgLmN1c3RvbS1vcHRpb24nKSA7XHJcbiAgICAgICAgdGhpcy5kbWF4aW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbWF4aW1pemUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZGRpc3BsYXkgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRtb25pdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRjaXJjbGUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zZXR0aW5ncyB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykpLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAndGFibGUnOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21heGltaXplJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGhlbWVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGVcIjogXCJnZW5lcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtb25pdG9ySWRcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NjYWxlU2xpZGVyJywgJ1wiMVwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlIHx8IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKSkubGVuZ3RoIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZhbHVlc1RhYmxlJywgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIDAgOiAnQ291bnRyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgMSA6ICdMVkwnLFxyXG4gICAgICAgICAgICAgICAgICAgIDIgOiAnS2lsbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDMgOiAnRGVhdGhzJyxcclxuICAgICAgICAgICAgICAgICAgICA0IDogJ0svRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgNSA6ICdXaW5zJyxcclxuICAgICAgICAgICAgICAgICAgICA2IDogJ0xvc3NlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgNyA6ICdXL0wnLFxyXG4gICAgICAgICAgICAgICAgICAgIDggOiAnSGFja2VyICUnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVza3RvcE9ubHknLCAnXCIwXCInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTZXR0aW5nKHNlbGVjdGVkT3B0aW9uOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nSWQgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NldHRpbmdpZCcpO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy12YWx1ZVRhYmxlJykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCd2YWx1ZXNUYWJsZScsIHZhbHVlc0N1c3RvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kdGhlbWUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLnRoZW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcblxyXG4gICAgICAgICAgICBjb250cm9sbGVycy5zZXRUaGVtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRhYmxlJykge1xyXG4gICAgICAgICAgICBsb2NhbC50YWJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGRpc3BsYXknKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnZGVza3RvcE9ubHknLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbWF4aW1pemUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1heGltaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbW9uaXRvcnMnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1vbml0b3JJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGNpcmNsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwuY2lyY2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kc2xpZGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NjYWxlU2xpZGVyJywgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBjaXJjbGVzID0ge1xyXG4gICAgICAgICAgICBcImdlbmVyYWxcIiA6IDAsXHJcbiAgICAgICAgICAgIFwicmFua2VkXCIgOiAxLFxyXG4gICAgICAgICAgICBcImNhc3VhbFwiIDogMixcclxuICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDogM1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NBcnIgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuZHRhYmxlW2xvY2FsLnRhYmxlXSxcclxuICAgICAgICAgICAgdGhpcy5kdGhlbWVbbG9jYWwudGhlbWVdLFxyXG4gICAgICAgICAgICB0aGlzLmRtYXhpbWl6ZVtsb2NhbC5tYXhpbWl6ZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZGRpc3BsYXlbbG9jYWxEZXNrdG9wT25seS5yZXBsYWNlKC9cIi9nLCAnJyldLFxyXG4gICAgICAgICAgICB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdLFxyXG4gICAgICAgICAgICB0aGlzLmRjaXJjbGVbY2lyY2xlc1tsb2NhbC5jaXJjbGVdXSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXR0aW5nID0gc2V0dGluZ3NBcnJbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZyAhPT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9uLnNlbGVjdGVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nID09PSB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1vbml0b3JzIC5jdXN0b20tb3B0aW9uJylbbG9jYWwubW9uaXRvcklkXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuZ2V0TW9uaXRvcnNMaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihtb25pdG9yTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBtb25pdG9yTGlzdC5kaXNwbGF5c1tsb2NhbC5tb25pdG9ySWRdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlcicpIGFzIGFueSkudmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyLXZhbHVlJykuaW5uZXJIVE1MID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERlZmF1bHQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNDdXN0b21baV0ucmVwbGFjZSgvWyAvXS9nLCAnLScpICsgaTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBzZXR0aW5nLnRleHRDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ0eXBlIEdldFdpbmRvd1N0YXRlUmVzdWx0ID0gb3ZlcndvbGYud2luZG93cy5HZXRXaW5kb3dTdGF0ZVJlc3VsdDtcclxudHlwZSBPd1dpbmRvd0luZm8gPSBvdmVyd29sZi53aW5kb3dzLldpbmRvd0luZm87XHJcbmV4cG9ydCBjbGFzcyBPV1dpbmRvdyB7XHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlc3RvcmUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiByZXN0b3JlZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5yZXN0b3JlKGlkLCByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbcmVzdG9yZV0gLSBhbiBlcnJvciBvY2N1cnJlZCwgd2luZG93SWQ9JHtpZH0sIHJlYXNvbj0ke3Jlc3VsdC5lcnJvcn1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbWluaW1pemUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtaW5pbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm1pbmltaXplKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYnJpbmdUb0Zyb250KCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWluaW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5icmluZ1RvRnJvbnQoaWQsIHRydWUsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtYXhpbWl6ZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1heGltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5tYXhpbWl6ZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGhpZGUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuaGlkZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNsb3NlKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiAocmVzdWx0LndpbmRvd19zdGF0ZSAhPT0gJ2Nsb3NlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmludGVybmFsQ2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2VXaW5kb3dTaXplKHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgb3ZlcndvbGYud2luZG93cy5jaGFuZ2VTaXplKHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0LCAocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoYW5nZVdpbmRvd0xvY2F0aW9uKG1vZGUsIHdpbmRvd0lkKSB7XHJcbiAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHJlc3VsdC53aW5kb3cud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSByZXN1bHQud2luZG93LmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLnV0aWxzLmdldE1vbml0b3JzTGlzdCgobW9uaXRvclJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JJZDogc3RyaW5nID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpLm1vbml0b3JJZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvcldpZHRoID0gbW9uaXRvclJlcy5kaXNwbGF5c1ttb25pdG9ySWRdLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JIZWlnaHQgPSBtb25pdG9yUmVzLmRpc3BsYXlzW21vbml0b3JJZF0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlZnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGxldCB0b3A6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2NlbnRlci1jZW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IG1vbml0b3JXaWR0aCAvIDIgLSAod2luZG93V2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2NlbnRlci1yaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gKG1vbml0b3JXaWR0aCAtIHdpbmRvd1dpZHRoKSAtIDIwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2VudGVyLWxlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IDIwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2hhbmdlUG9zaXRpb24od2luZG93SWQsIE1hdGgucm91bmQobGVmdCksIE1hdGgucm91bmQodG9wKSwgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2NhbGVXaW5kb3cod2luZG93SWQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlKTogUHJvbWlzZSA8IHZvaWQgPiAge1xyXG4gICAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5yb3VuZCh3aWR0aCAqIHNjYWxlKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChoZWlnaHQgKiBzY2FsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGF0LmNoYW5nZVdpbmRvd1NpemUod2luZG93SWQsIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSlgO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvd0lkID09PSAnaW5fZ2FtZScgfHwgd2luZG93SWQgPT09ICdpbl9nYW1lX2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuaGVpZ2h0ID0gYGNhbGMoJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lIC0gMzJweClgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9sb2JieScgfHwgd2luZG93SWQgPT09ICdpbl9sb2JieV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NhbGUgPD0gMC42KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhZ01vdmUoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtLm9ubW91c2Vkb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5kcmFnTW92ZSh0aGlzLl9uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldE1vbml0b3JzTGlzdCgpOiBQcm9taXNlIDwgYW55ID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IGFueSA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRXaW5kb3dTdGF0ZSgpOiBQcm9taXNlIDwgR2V0V2luZG93U3RhdGVSZXN1bHQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0V2luZG93U3RhdGUoaWQsIHJlc29sdmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRDdXJyZW50SW5mbygpOiBQcm9taXNlIDwgT3dXaW5kb3dJbmZvID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IE93V2luZG93SW5mbyA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC53aW5kb3cpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvYnRhaW4oKTogUHJvbWlzZSA8IE93V2luZG93SW5mbyB8IG51bGwgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2IgPSByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgJiYgcmVzLndpbmRvdyAmJiByZXMud2luZG93LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWQgPSByZXMud2luZG93LmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHJlcy53aW5kb3cubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLndpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRDdXJyZW50V2luZG93KGNiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3Mub2J0YWluRGVjbGFyZWRXaW5kb3codGhpcy5fbmFtZSwgY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGFzc3VyZU9idGFpbmVkKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0Lm9idGFpbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbnRlcm5hbENsb3NlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZShpZCwgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi9vZGstdHMvb3ctd2luZG93JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xyXG4gICAgcHJvdGVjdGVkIGN1cnJXaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIG1haW5XaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIHNldHRpbmdzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYXhpbWl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3dOYW1lOiBzdHJpbmcsIHNldHRpbmdzV2luZG93SWQ6IHN0cmluZywgc3RhdHNpc3RpY3NXaW5kb3dJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tYWluV2luZG93ID0gbmV3IE9XV2luZG93KCdiYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5jdXJyV2luZG93ID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coc2V0dGluZ3NXaW5kb3dJZCk7XHJcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93ID0gbmV3IE9XV2luZG93KHN0YXRzaXN0aWNzV2luZG93SWQpO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1heGltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heGltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemVCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nc0J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVIaXN0b3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVIaXN0b3J5Jyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VXaW5kb3dCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VXaW5kb3dCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0TWluaW1pemVNb2RhbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdCcpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsTWluaW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1pemUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93TmFtZSA9PT0gJ2Rlc2t0b3AnIHx8IHdpbmRvd05hbWUgPT09ICdzZXR0aW5nc19kZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc3RhdGlzdGljc19kZXNrdG9wJyB8fCBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjFcIicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREcmFnKGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VXaW5kb3dCdXR0b24pIHtcclxuICAgICAgICAgICAgY2xvc2VXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWluaW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4aW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWF4aW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWF4aW1pemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1heGltaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhpbWl6ZWQgPSAhdGhpcy5tYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVIaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIGdhbWVIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxDYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxNaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbE1pbmltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmN1cnJXaW5kb3cuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldERyYWcoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cuZHJhZ01vdmUoZWxlbSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwV2luZG93IH0gZnJvbSAnLi4vQXBwV2luZG93JztcclxuaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctd2luZG93JztcclxuaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuLi8uLi9vZGstdHMvY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9vZGstdHMvbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHsgd2luZG93TmFtZXMgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xyXG5cclxuY29uc3Qgc2V0dGluZ0RpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ09wdGlvbnMnKTtcclxuXHJcbmxldCBvd1dpbmRvdzogT1dXaW5kb3csIG1vZGU6IHN0cmluZztcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzKCk7XHJcbmNvbnN0IGxvY2Fsc3RvcmFnZSA9IG5ldyBMb2NhbHN0b3JhZ2UoKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgQXBwV2luZG93IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU2V0dGluZ3M7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ2Rlc2t0b3AnKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHksICdzZXR0aW5nc19kZXNrdG9wJywgJ3N0YXRpc3RpY3NfZGVza3RvcCcpO1xyXG5cclxuICAgICAgICAgICAgb3dXaW5kb3cuc2NhbGVXaW5kb3coJ3NldHRpbmdzX2Rlc2t0b3AnLCA5MDAsIDcwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdXBlcih3aW5kb3dOYW1lcy5zZXR0aW5ncywgJ3NldHRpbmdzX2luX2dhbWUnLCAnc3RhdGlzdGljc19pbl9nYW1lJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuc2NhbGVXaW5kb3coJ3NldHRpbmdzX2luX2dhbWUnLCA5MDAsIDcwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gb3dXaW5kb3cuY2hhbmdlV2luZG93TG9jYXRpb24oJ2NlbnRlci1jZW50ZXInLCAnc2V0dGluZ3NfaW5fZ2FtZScpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3dXaW5kb3cucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNldHRpbmdTZWxlY3RvcigpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuZ2V0TW9uaXRvcnNMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4obW9uaXRvckxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JMaXN0SFRNTDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb25pdG9yTGlzdC5kaXNwbGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbml0b3JMaXN0SFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHNldHRpbmdJZD1cInNldHRpbmctZG1vbml0b3JzXCIgY2xhc3M9XCJjdXN0b20tb3B0aW9uXCIgdmFsdWU9XCIke2l9XCI+JHttb25pdG9yTGlzdC5kaXNwbGF5c1tpXS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nLWRtb25pdG9ycycpLmlubmVySFRNTCA9IG1vbml0b3JMaXN0SFRNTDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGxvY2Fsc3RvcmFnZS5pbml0aWF0ZUxvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHN0b3JhZ2Uuc2V0U2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcnMuc2V0VGhlbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVycy5zZXRTaG9ydGN1dFRleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJzLnNldFRoZW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNldHRpbmdzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTZXR0aW5nU2VsZWN0b3IoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGVsLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGxldCBvdXRzaWRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ0RpdnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nRGl2c1tpXS5jb250YWlucyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0c2lkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAob3V0c2lkZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ0RpdnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ0RpdiA9IHNldHRpbmdEaXZzW2ldO1xyXG5cclxuICAgICAgICAgICAgc2V0dGluZ0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXR0aW5nRGl2cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdEaXYyID0gc2V0dGluZ0RpdnNbal07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nRGl2ICE9PSBzZXR0aW5nRGl2Mikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ0RpdjIucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ0RpdjIucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nRGl2Mi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nRGl2LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93U2l6ZS1zbGlkZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgICAgICAgICBsb2NhbHN0b3JhZ2UuY2hhbmdlU2V0dGluZyhvcHRpb24udGFyZ2V0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyLXZhbHVlJykuaW5uZXJIVE1MID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlcicpIGFzIGFueSkudmFsdWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b20tb3B0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxzdG9yYWdlLmNoYW5nZVNldHRpbmcob3B0aW9uKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm92ZXJ3b2xmLndpbmRvd3MuZ2V0T3BlbldpbmRvd3MoZGF0YSA9PiB7XHJcbiAgICBtb2RlID0gT2JqZWN0LmtleXMoZGF0YSlbMV07XHJcblxyXG4gICAgaWYgKG1vZGUgPT09ICdkZXNrdG9wJykge1xyXG4gICAgICAgIG93V2luZG93ID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5zZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=