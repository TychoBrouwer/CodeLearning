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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/desktop/desktop.ts");
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

/***/ "./src/public/desktop/desktop.ts":
/*!***************************************!*\
  !*** ./src/public/desktop/desktop.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AppWindow_1 = __webpack_require__(/*! ../AppWindow */ "./src/public/AppWindow.ts");
const ow_window_1 = __webpack_require__(/*! ../../odk-ts/ow-window */ "./src/odk-ts/ow-window.ts");
const controllers_1 = __webpack_require__(/*! ../../odk-ts/controllers */ "./src/odk-ts/controllers.ts");
const localstorage_1 = __webpack_require__(/*! ../../odk-ts/localstorage */ "./src/odk-ts/localstorage.ts");
const consts_1 = __webpack_require__(/*! ../../consts */ "./src/consts.ts");
const overwolfStatusDiv = document.getElementById('overwolf-status');
const ineternetStatusDiv = document.getElementById('internet-status');
const owWindow = new ow_window_1.OWWindow(consts_1.windowNames.desktop);
const controllers = new controllers_1.Controllers();
const localstorage = new localstorage_1.Localstorage();
owWindow.changeWindowLocation('center-center', 'desktop');
const promise = localstorage.initiateLocalStorage()
    .then(() => {
    controllers.setTheme();
    owWindow.scaleWindow('desktop', 800, 500, JSON.parse(localStorage.scaleSlider));
});
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
    owWindow.scaleWindow('desktop', 800, 500, JSON.parse(localStorage.scaleSlider));
});
new AppWindow_1.AppWindow(consts_1.windowNames.desktop, 'settings_desktop', 'statistics_desktop');


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2NvbnRyb2xsZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvbG9jYWxzdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctd2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvQXBwV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvZGVza3RvcC9kZXNrdG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBc2F6Qix3Q0FBYztBQXBhbEIsTUFBTSxvQkFBb0IsR0FBRztJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNY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QUFXLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNwRixDQUFDLENBQUMsQ0FBQztBQUVILElBQUkscUJBQVMsQ0FBQyxvQkFBVyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDIiwiZmlsZSI6ImRlc2t0b3AvZGVza3RvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9kZXNrdG9wL2Rlc2t0b3AudHNcIik7XG4iLCJjb25zdCByYWluYm93Q2xhc3NJZCA9IDEwODI2O1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczEgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuICAgICdyb3N0ZXInLFxyXG4gICAgJ2tpbGwnLFxyXG4gICAgJ2RlYXRoJyxcclxuICAgICdtZScsXHJcbl07XHJcblxyXG5jb25zdCBpbnRlcmVzdGluZ0ZlYXR1cmVzMiA9IFtcclxuICAgICdnZXBfaW50ZXJuYWwnLFxyXG4gICAgJ2dhbWVfaW5mbycsXHJcbiAgICAnbWF0Y2gnLFxyXG4gICAgJ21hdGNoX2luZm8nLFxyXG5dO1xyXG5cclxuY29uc3Qgd2luZG93TmFtZXMgPSB7XHJcbiAgICBkZXNrdG9wOiAnZGVza3RvcCcsXHJcbiAgICBpbkxvYmJ5OiAnaW5fbG9iYnknLFxyXG4gICAgaW5HYW1lOiAnaW5fZ2FtZScsXHJcbiAgICBpbkxvYmJ5RGVza3RvcE9ubHk6ICdpbl9sb2JieV9kZXNrdG9wX29ubHknLFxyXG4gICAgaW5HYW1lRGVza3RvcE9ubHk6ICdpbl9nYW1lX2Rlc2t0b3Bfb25seScsXHJcbiAgICBzZXR0aW5nczogJ3NldHRpbmdzX2luX2dhbWUnLFxyXG4gICAgc2V0dGluZ3NEZXNrdG9wT25seTogJ3NldHRpbmdzX2Rlc2t0b3AnLFxyXG4gICAgc3RhdGlzdGljczogJ3N0YXRpc3RpY3NfaW5fZ2FtZScsXHJcbiAgICBzdGF0aXN0aWNzRGVza3RvcE9ubHk6ICdzdGF0aXN0aWNzX2Rlc2t0b3AnXHJcbn07XHJcblxyXG5jb25zdCBob3RrZXlzID0ge1xyXG4gICAgdG9nZ2xlOiAnc2hvd2hpZGUnLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZFID0gW1xyXG4gICAgJ09QRVJBVElPTlMnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRV9MT05FV09MRicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfUEFSVFknLFxyXG5dO1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZQID0gW1xyXG4gICAgJ01BVENITUFLSU5HX1BWUF9ORVdDT01FUicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfRVZFTlQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcsXHJcbiAgICAnQ1VTVE9NR0FNRV9QVlAnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQX0RFRElDQVRFRCcsXHJcbl07XHJcblxyXG5jb25zdCBkYXRhYmFzZU9iamVjdCA9IHtcclxuICAgIE1BVENITUFLSU5HX1BWUF9SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlA6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNlYXNvbkNvbG9ycyA9IHtcclxuICAgIDY6JyMwMDUwYjMnLFxyXG4gICAgNzonI2NhMzYxYycsXHJcbiAgICA4OicjMDA2NTQzJyxcclxuICAgIDk6JyNmZmMxMTMnLFxyXG4gICAgMTA6JyM5NDlmMzknLFxyXG4gICAgMTE6JyM4MWEwYzEnLFxyXG4gICAgMTI6JyNhYTg1NGYnLFxyXG4gICAgMTM6JyNkMjAwNWEnLFxyXG4gICAgMTQ6JyMzMDQzOTUnLFxyXG4gICAgMTU6JyMxMzYzMGMnLFxyXG4gICAgMTY6JyMwNjlkYjMnLFxyXG4gICAgMTc6JyM5NDZhOTcnLFxyXG4gICAgMTg6JyMyYjdlOWEnLFxyXG4gICAgMTk6JyM2Y2E1MTEnLFxyXG4gICAgMjA6JyNkMTQwMDcnLFxyXG59XHJcblxyXG5jb25zdCBvcGVyYXRvcnMgPSB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJTbGVkZ2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjFcIlxyXG4gICAgfSxcclxuICAgIDEwMjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUaGF0Y2hlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6MVwiXHJcbiAgICB9LFxyXG4gICAgNTEzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoyXCJcclxuICAgIH0sXHJcbiAgICAxMDI1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhlcm1pdGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjJcIlxyXG4gICAgfSxcclxuICAgIDc3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlR3aXRjaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6M1wiXHJcbiAgICB9LFxyXG4gICAgMTAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1vbnRhZ25lXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTozXCJcclxuICAgIH0sXHJcbiAgICAyNTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHbGF6XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo0XCJcclxuICAgIH0sXHJcbiAgICA1MTU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGdXplXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo0XCJcclxuICAgIH0sXHJcbiAgICAyNjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGl0elwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSVFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjVcIlxyXG4gICAgfSxcclxuICAgIDI2MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJ1Y2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjZcIlxyXG4gICAgfSxcclxuICAgIDI2Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJsYWNrYmVhcmRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjdcIlxyXG4gICAgfSxcclxuICAgIDI2Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhcGl0YW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjhcIlxyXG4gICAgfSxcclxuICAgIDI2NDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkhpYmFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6OVwiXHJcbiAgICB9LFxyXG4gICAgMjY1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSmFja2FsXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpBXCJcclxuICAgIH0sXHJcbiAgICAyNjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJZaW5nXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpCXCJcclxuICAgIH0sXHJcbiAgICA1MjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJab2ZpYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6Q1wiXHJcbiAgICB9LFxyXG4gICAgMjY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRG9ra2FlYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkRcIlxyXG4gICAgfSxcclxuICAgIDUyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkVcIlxyXG4gICAgfSxcclxuICAgIDc4MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkZpbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDpFXCJcclxuICAgIH0sXHJcbiAgICAyNzE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNYXZlcmlja1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTBcIlxyXG4gICAgfSxcclxuICAgIDI3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk5vbWFkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxMVwiXHJcbiAgICB9LFxyXG4gICAgNTI5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR3JpZGxvY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb2trXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxM1wiXHJcbiAgICB9LFxyXG4gICAgMjc3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQW1hcnVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE2XCJcclxuICAgIH0sXHJcbiAgICAyNzg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJLYWxpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxN1wiXHJcbiAgICB9LFxyXG4gICAgMjgwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSWFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTlcIlxyXG4gICAgfSxcclxuICAgIDc5MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFjZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6MTdcIlxyXG4gICAgfSxcclxuICAgIDI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWmVyb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjE6MUJcIlxyXG4gICAgfSxcclxuICAgIDE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJSZWNydWl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwicmVjcnVpdFwiXHJcbiAgICB9LFxyXG4gICAgMjU2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU21va2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFcIlxyXG4gICAgfSxcclxuICAgIDUxMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk11dGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjFcIlxyXG4gICAgfSxcclxuICAgIDI1Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhc3RsZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MlwiXHJcbiAgICB9LFxyXG4gICAgNzY5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUHVsc2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjJcIlxyXG4gICAgfSxcclxuICAgIDI1ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRvY1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6M1wiXHJcbiAgICB9LFxyXG4gICAgNTE0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUm9va1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6M1wiXHJcbiAgICB9LFxyXG4gICAgNzcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2Fwa2FuXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo0XCJcclxuICAgIH0sXHJcbiAgICAxMDI3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGFjaGFua2FcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjRcIlxyXG4gICAgfSxcclxuICAgIDc3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphZ2VyXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo1XCJcclxuICAgIH0sXHJcbiAgICAxMDI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmFuZGl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo1XCJcclxuICAgIH0sXHJcbiAgICA1MTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGcm9zdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NlwiXHJcbiAgICB9LFxyXG4gICAgNTE4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmFsa3lyaWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjdcIlxyXG4gICAgfSxcclxuICAgIDUxOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhdmVpcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjhcIlxyXG4gICAgfSxcclxuICAgIDUyMDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVjaG9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjlcIlxyXG4gICAgfSxcclxuICAgIDUyMToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1pcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkFcIlxyXG4gICAgfSxcclxuICAgIDUyMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxlc2lvblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6QlwiXHJcbiAgICB9LFxyXG4gICAgMjY3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRWxhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpDXCJcclxuICAgIH0sXHJcbiAgICA1MjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJWaWdpbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6RFwiXHJcbiAgICB9LFxyXG4gICAgMjcwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWFlc3Ryb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6RlwiXHJcbiAgICB9LFxyXG4gICAgNTI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQWxpYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNsYXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMFwiXHJcbiAgICB9LFxyXG4gICAgNTI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FpZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTFcIlxyXG4gICAgfSxcclxuICAgIDI3Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1venppZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTJcIlxyXG4gICAgfSxcclxuICAgIDI3NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIldhcmRlblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTRcIlxyXG4gICAgfSxcclxuICAgIDI3Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdveW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE1XCJcclxuICAgIH0sXHJcbiAgICA1MzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYW1haVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTdcIlxyXG4gICAgfSxcclxuICAgIDI3OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk9yeXhcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE4XCJcclxuICAgIH0sXHJcbiAgICAyODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNZWx1c2lcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFBXCJcclxuICAgIH0sXHJcbiAgICAxMDQ2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXJ1bmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjE3XCJcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJhbmtPZmZzZXQgPSB7XHJcbiAgICAwOiAwLFxyXG4gICAgMTogMixcclxuICAgIDI6IDMsXHJcbiAgICAzOiA0LFxyXG4gICAgNDogNSxcclxuICAgIDU6IDcsXHJcbiAgICA2OiA4LFxyXG4gICAgNzogOSxcclxuICAgIDg6IDEwLFxyXG4gICAgOTogMTIsXHJcbiAgICAxMDogMTMsXHJcbiAgICAxMTogMTQsXHJcbiAgICAxMjogMTUsXHJcbiAgICAxMzogNTAsXHJcbiAgICAxNDogMTYsXHJcbiAgICAxNTogMTcsXHJcbiAgICAxNjogMTgsXHJcbiAgICAxNzogMTksXHJcbiAgICAxODogMjAsXHJcbiAgICAxOTogMjEsXHJcbiAgICAyMDogMjIsXHJcbiAgICAyMTogMjIsXHJcbiAgICAyMjogMjIsXHJcbiAgICAyMzogMjIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgcmFpbmJvd0NsYXNzSWQsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMSxcclxuICAgIGludGVyZXN0aW5nRmVhdHVyZXMyLFxyXG4gICAgd2luZG93TmFtZXMsXHJcbiAgICBob3RrZXlzLFxyXG4gICAgZ2FtZU1vZGVzUFZQLFxyXG4gICAgZ2FtZU1vZGVzUFZFLFxyXG4gICAgZGF0YWJhc2VPYmplY3QsXHJcbiAgICBzZWFzb25Db2xvcnMsXHJcbiAgICByYW5rT2Zmc2V0LFxyXG4gICAgb3BlcmF0b3JzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJzIHtcclxuICAgIHB1YmxpYyBzZXRTaG9ydGN1dFRleHQoc2hvcnRjdXRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5nZXQocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdGtleSA9IHJlc3VsdC5nYW1lc1snMTA4MjYnXVswXS5iaW5kaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhvdGtleSA9PT0gJ1VuYXNzaWduZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGN1dENvbnRhaW5lci5pbm5lckhUTUwgPSAnVU5BU1NJR05FRCB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gaG90a2V5ICsgJyB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXkgaW4gZ2FtZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhcHAgaG90a2V5IFwiJHtob3RrZXl9XCJgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZ2FtZS1ldmVudHMtc3RhdHVzLm92ZXJ3b2xmLmNvbS8xMDgyNl9wcm9kLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcndvbGZTdGF0dXMgPSBkYXRhLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgc29tZSBmdW5jdGlvbnMgbWlnaHQgbm90IHdvcmsgLSB3ZeKAmWxsIGZpeCBpdCBzaG9ydGx5PC9oND4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgT3ZlcndvbGYgYXBwIEFQSSBoYXMgc3RvcHBlZCB3b3JraW5nIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvdmVyd29sZiBzdGF0dXMgXCIke292ZXJ3b2xmU3RhdHVzfVwiYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnRlcm5ldFN0YXR1cyhpbmV0ZXJuZXRTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJuZXRTdGF0dXMgPSBuYXZpZ2F0b3Iub25MaW5lO1xyXG5cclxuICAgICAgICBpZiAoaW50ZXJuZXRTdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGluZXRlcm5ldFN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbnRlcm5ldCBzdGF0dXMgXCIke2ludGVybmV0U3RhdHVzfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRhYmxlVGFiKHRhYjogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllci10clwiKS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFua2VkU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFua2VkJyArIGkgKyBqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3VhbFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc3VhbCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFzb25TdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFzb25hbCcgKyBpICsgaik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmtlZFN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYiA9PT0gJ3JhbmtlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2Nhc3VhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ3NlYXNvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHRhYmxlIHRhYiBcIiR7dGFifVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dEZXRhaWxlZFBsYXllcihkZXRhaWxlZHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChkZXRhaWxlZHN0YXR1cykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgZGV0YWlsZWQgc3RhdHMgXCIkeyFkZXRhaWxlZHN0YXR1c31cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV0YWlsZWRzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRoZW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpKTtcclxuICAgICAgICBjb25zdCBzdHlsZVZhcmlhYmxlcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiI0YwRjBGMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjYxXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiMxMjEyMTJcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjRkZGRkZGMTRcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiIzAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjRkZGRkZGMUVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJ1cmwoJy9pbWcvYmFja2dyb3VuZC53ZWJwJylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1saWdodC1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudGhlbWUgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtaG92ZXItY29sb3JcIiwgXCIjMzMzMzMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiNmM2YzZjNcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjZWVlZWVlXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiNmM2YzZjNcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjOTk5OTk5XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93bi1idG4tY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItZGFyay1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudGhlbWUgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiMzMzMzMzNcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLWJnLWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy1iZy1jb2xvclwiLCBcIiNiMGIwYjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ0bi1jb2xvclwiLCBcIiM5OTk5OTlcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1kYXJrLWxvZ28uc3ZnXCIpJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBmZXRjaENvbmZpZygpIHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9zdGFnaW5nLWFwaS5zdGF0c2RiLm5ldC9yNi9vdmVybGF5L2NvbmZpZycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5jb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5wYXlsb2FkLnJhaW5ib3cpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbmZpZycpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcudmVyc2lvbiAhPSBkYXRhLnBheWxvYWQucmFpbmJvdy52ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeShkYXRhLnBheWxvYWQucmFpbmJvdykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldENvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJykpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXJzIH0gZnJvbSAnLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi9vdy13aW5kb3cnO1xyXG5cclxuY29uc3QgY29udHJvbGxlcnMgPSBuZXcgQ29udHJvbGxlcnMsIG93V2luZG93OiBPV1dpbmRvdyA9IG5ldyBPV1dpbmRvdztcclxuXHJcbmxldCBsb2NhbERlc2t0b3BPbmx5ID0gbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5LCB2YWx1ZXNDdXN0b20sIGxvY2FsO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvY2Fsc3RvcmFnZSB7XHJcbiAgICBwcml2YXRlIGR0YWJsZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZHRoZW1lOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkbWF4aW1pemU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRkaXNwbGF5OiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkbW9uaXRvcnM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRjaXJjbGU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kdGFibGUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmR0aGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWR0aGVtZSAuY3VzdG9tLW9wdGlvbicpIDtcclxuICAgICAgICB0aGlzLmRtYXhpbWl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtYXhpbWl6ZSAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kZGlzcGxheSAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZG1vbml0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1vbml0b3JzIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZGNpcmNsZSAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWF0ZUxvY2FsU3RvcmFnZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLnNldHRpbmdzIHx8IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKSkubGVuZ3RoID4gNSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICd0YWJsZSc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWF4aW1pemUnOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aGVtZVwiOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNpcmNsZVwiOiBcImdlbmVyYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1vbml0b3JJZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NhbGVTbGlkZXInLCAnXCIxXCInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUgfHwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpKS5sZW5ndGggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndmFsdWVzVGFibGUnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgMCA6ICdDb3VudHJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAxIDogJ0xWTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgMiA6ICdLaWxscycsXHJcbiAgICAgICAgICAgICAgICAgICAgMyA6ICdEZWF0aHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDQgOiAnSy9EJyxcclxuICAgICAgICAgICAgICAgICAgICA1IDogJ1dpbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDYgOiAnTG9zc2VzJyxcclxuICAgICAgICAgICAgICAgICAgICA3IDogJ1cvTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgOCA6ICdIYWNrZXIgJSdcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZXNrdG9wT25seScsICdcIjBcIicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdmFsdWVzQ3VzdG9tID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVNldHRpbmcoc2VsZWN0ZWRPcHRpb246IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdJZCA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgnc2V0dGluZ2lkJyk7XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLXZhbHVlVGFibGUnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xyXG5cclxuICAgICAgICAgICAgdmFsdWVzQ3VzdG9tW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3ZhbHVlc1RhYmxlJywgdmFsdWVzQ3VzdG9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWR0aGVtZScpIHtcclxuICAgICAgICAgICAgbG9jYWwudGhlbWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJzLnNldFRoZW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kdGFibGUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLnRhYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kZGlzcGxheScpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdkZXNrdG9wT25seScsIHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRtYXhpbWl6ZScpIHtcclxuICAgICAgICAgICAgbG9jYWwubWF4aW1pemUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRtb25pdG9ycycpIHtcclxuICAgICAgICAgICAgbG9jYWwubW9uaXRvcklkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kY2lyY2xlJykge1xyXG4gICAgICAgICAgICBsb2NhbC5jaXJjbGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRzbGlkZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2NhbGVTbGlkZXInLCBzZWxlY3RlZE9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U3RvcmFnZShrZXk6IHN0cmluZywgdmFsdWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNldHRpbmdzKCkge1xyXG4gICAgICAgIGNvbnN0IGNpcmNsZXMgPSB7XHJcbiAgICAgICAgICAgIFwiZ2VuZXJhbFwiIDogMCxcclxuICAgICAgICAgICAgXCJyYW5rZWRcIiA6IDEsXHJcbiAgICAgICAgICAgIFwiY2FzdWFsXCIgOiAyLFxyXG4gICAgICAgICAgICBcInVucmFua2VkXCIgOiAzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZXR0aW5nc0FyciA9IFtcclxuICAgICAgICAgICAgdGhpcy5kdGFibGVbbG9jYWwudGFibGVdLFxyXG4gICAgICAgICAgICB0aGlzLmR0aGVtZVtsb2NhbC50aGVtZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZG1heGltaXplW2xvY2FsLm1heGltaXplXSxcclxuICAgICAgICAgICAgdGhpcy5kZGlzcGxheVtsb2NhbERlc2t0b3BPbmx5LnJlcGxhY2UoL1wiL2csICcnKV0sXHJcbiAgICAgICAgICAgIHRoaXMuZG1vbml0b3JzW2xvY2FsLm1vbml0b3JJZF0sXHJcbiAgICAgICAgICAgIHRoaXMuZGNpcmNsZVtjaXJjbGVzW2xvY2FsLmNpcmNsZV1dLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3NBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNldHRpbmcgPSBzZXR0aW5nc0FycltpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nICE9PSB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHNldHRpbmcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBzZXR0aW5nLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNldHRpbmcgPT09IHRoaXMuZG1vbml0b3JzW2xvY2FsLm1vbml0b3JJZF0pIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbW9uaXRvcnMgLmN1c3RvbS1vcHRpb24nKVtsb2NhbC5tb25pdG9ySWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBvd1dpbmRvdy5nZXRNb25pdG9yc0xpc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG1vbml0b3JMaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9uLnNlbGVjdGVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IG1vbml0b3JMaXN0LmRpc3BsYXlzW2xvY2FsLm1vbml0b3JJZF0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyJykgYXMgYW55KS52YWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93U2l6ZS1zbGlkZXItdmFsdWUnKS5pbm5lckhUTUwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGVmYXVsdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc0N1c3RvbVtpXS5yZXBsYWNlKC9bIC9dL2csICctJykgKyBpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0dGluZy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9uLnNlbGVjdGVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNldHRpbmcuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2V0dGluZy5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IHNldHRpbmcudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInR5cGUgR2V0V2luZG93U3RhdGVSZXN1bHQgPSBvdmVyd29sZi53aW5kb3dzLkdldFdpbmRvd1N0YXRlUmVzdWx0O1xyXG50eXBlIE93V2luZG93SW5mbyA9IG92ZXJ3b2xmLndpbmRvd3MuV2luZG93SW5mbztcclxuZXhwb3J0IGNsYXNzIE9XV2luZG93IHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVzdG9yZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IHJlc3RvcmVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLnJlc3RvcmUoaWQsIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtyZXN0b3JlXSAtIGFuIGVycm9yIG9jY3VycmVkLCB3aW5kb3dJZD0ke2lkfSwgcmVhc29uPSR7cmVzdWx0LmVycm9yfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtaW5pbWl6ZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWluaW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBicmluZ1RvRnJvbnQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtaW5pbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmJyaW5nVG9Gcm9udChpZCwgdHJ1ZSwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1heGltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWF4aW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm1heGltaXplKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaGlkZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IGhpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5oaWRlKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIChyZXN1bHQud2luZG93X3N0YXRlICE9PSAnY2xvc2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW50ZXJuYWxDbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoYW5nZVdpbmRvd1NpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVNpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQsIChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93TG9jYXRpb24obW9kZSwgd2luZG93SWQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gcmVzdWx0LndpbmRvdy53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHJlc3VsdC53aW5kb3cuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KChtb25pdG9yUmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvcklkOiBzdHJpbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykubW9uaXRvcklkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yV2lkdGggPSBtb25pdG9yUmVzLmRpc3BsYXlzW21vbml0b3JJZF0ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvckhlaWdodCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVmdDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnY2VudGVyLWNlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbW9uaXRvcldpZHRoIC8gMiAtICh3aW5kb3dXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2VudGVyLXJpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAobW9uaXRvcldpZHRoIC0gd2luZG93V2lkdGgpIC0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jaGFuZ2VQb3NpdGlvbih3aW5kb3dJZCwgTWF0aC5yb3VuZChsZWZ0KSwgTWF0aC5yb3VuZCh0b3ApLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzY2FsZVdpbmRvdyh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpOiBQcm9taXNlIDwgdm9pZCA+ICB7XHJcbiAgICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWA7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9nYW1lJyB8fCB3aW5kb3dJZCA9PT0gJ2luX2dhbWVfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgY2FsYygke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSUgLSAzMnB4KWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUud2lkdGggPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5JyB8fCB3aW5kb3dJZCA9PT0gJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY2FsZSA8PSAwLjYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvcnRjdXQtdGV4dCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmFnTW92ZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGVsZW0ub25tb3VzZWRvd24gPSBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmRyYWdNb3ZlKHRoaXMuX25hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TW9uaXRvcnNMaXN0KCk6IFByb21pc2UgPCBhbnkgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgYW55ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCk6IFByb21pc2UgPCBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5nZXRXaW5kb3dTdGF0ZShpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEN1cnJlbnRJbmZvKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgT3dXaW5kb3dJbmZvID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3cocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LndpbmRvdyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9idGFpbigpOiBQcm9taXNlIDwgT3dXaW5kb3dJbmZvIHwgbnVsbCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYiA9IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJyAmJiByZXMud2luZG93ICYmIHJlcy53aW5kb3cuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IHJlcy53aW5kb3cuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uYW1lID0gcmVzLndpbmRvdy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMud2luZG93KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coY2IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5vYnRhaW5EZWNsYXJlZFdpbmRvdyh0aGlzLl9uYW1lLCBjYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYXNzdXJlT2J0YWluZWQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQub2J0YWluKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGludGVybmFsQ2xvc2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKGlkLCByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4uL29kay10cy9vdy13aW5kb3cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFdpbmRvdyB7XHJcbiAgICBwcm90ZWN0ZWQgY3VycldpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgbWFpbldpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgc2V0dGluZ3NXaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpc3RpY3NXaW5kb3c6IE9XV2luZG93O1xyXG4gICAgcHJvdGVjdGVkIG1heGltaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpbmRvd05hbWU6IHN0cmluZywgc2V0dGluZ3NXaW5kb3dJZDogc3RyaW5nLCBzdGF0c2lzdGljc1dpbmRvd0lkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1haW5XaW5kb3cgPSBuZXcgT1dXaW5kb3coJ2JhY2tncm91bmQnKTtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZSk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdyA9IG5ldyBPV1dpbmRvdyhzZXR0aW5nc1dpbmRvd0lkKTtcclxuICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coc3RhdHNpc3RpY3NXaW5kb3dJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbWF4aW1pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4aW1pemVCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtaW5pbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5pbWl6ZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgZ2FtZUhpc3RvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUhpc3RvcnknKTtcclxuICAgICAgICBjb25zdCBjbG9zZVdpbmRvd0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZVdpbmRvd0J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXRNaW5pbWl6ZU1vZGFsJyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGl0Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxNaW5pbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5pbWl6ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3dOYW1lID09PSAnZGVza3RvcCcgfHwgd2luZG93TmFtZSA9PT0gJ3NldHRpbmdzX2Rlc2t0b3AnIHx8IHdpbmRvd05hbWUgPT09ICdzdGF0aXN0aWNzX2Rlc2t0b3AnIHx8IGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSA9PT0gJ1wiMVwiJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldERyYWcoaGVhZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZVdpbmRvd0J1dHRvbikge1xyXG4gICAgICAgICAgICBjbG9zZVdpbmRvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtaW5pbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXhpbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtYXhpbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXhpbWl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWF4aW1pemUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heGltaXplZCA9ICF0aGlzLm1heGltaXplZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3NCdXR0b24pIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2FtZUhpc3RvcnkpIHtcclxuICAgICAgICAgICAgZ2FtZUhpc3RvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENhbmNlbEJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGFsQ2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbldpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbE1pbmltaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsTWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2luZG93U3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuY3VycldpbmRvdy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0RHJhZyhlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycldpbmRvdy5kcmFnTW92ZShlbGVtKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBcHBXaW5kb3cgfSBmcm9tICcuLi9BcHBXaW5kb3cnO1xyXG5pbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4uLy4uL29kay10cy9vdy13aW5kb3cnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4uLy4uL29kay10cy9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IExvY2Fsc3RvcmFnZSB9IGZyb20gJy4uLy4uL29kay10cy9sb2NhbHN0b3JhZ2UnO1xyXG5pbXBvcnQgeyB3aW5kb3dOYW1lcyB9IGZyb20gJy4uLy4uL2NvbnN0cyc7XHJcblxyXG5jb25zdCBvdmVyd29sZlN0YXR1c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyd29sZi1zdGF0dXMnKTtcclxuY29uc3QgaW5ldGVybmV0U3RhdHVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludGVybmV0LXN0YXR1cycpO1xyXG5cclxuY29uc3Qgb3dXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuZGVza3RvcCk7XHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzKCk7XHJcbmNvbnN0IGxvY2Fsc3RvcmFnZSA9IG5ldyBMb2NhbHN0b3JhZ2UoKTtcclxuXHJcbm93V2luZG93LmNoYW5nZVdpbmRvd0xvY2F0aW9uKCdjZW50ZXItY2VudGVyJywgJ2Rlc2t0b3AnKTtcclxuXHJcbmNvbnN0IHByb21pc2UgPSBsb2NhbHN0b3JhZ2UuaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXJzLnNldFRoZW1lKCk7XHJcbiAgICAgICAgb3dXaW5kb3cuc2NhbGVXaW5kb3coJ2Rlc2t0b3AnLCA4MDAsIDUwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKTtcclxuICAgIH0pO1xyXG5cclxuY29udHJvbGxlcnMuZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXYpO1xyXG5jb250cm9sbGVycy5nZXRJbnRlcm5ldFN0YXR1cyhpbmV0ZXJuZXRTdGF0dXNEaXYpO1xyXG5jb250cm9sbGVycy5zZXRTaG9ydGN1dFRleHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKSk7XHJcblxyXG5jb25zdCBvdmVyd29sZlN0YXR1c0lEID0gd2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnRyb2xsZXJzLmdldE92ZXJ3b2xmU3RhdHVzKG92ZXJ3b2xmU3RhdHVzRGl2KSwgNjAwMDApO1xyXG5jb25zdCBpbnRlcm5ldFN0YXR1c0lEID0gd2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnRyb2xsZXJzLmdldEludGVybmV0U3RhdHVzKGluZXRlcm5ldFN0YXR1c0RpdiksIDYwMDAwKTtcclxub3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgY29udHJvbGxlcnMuc2V0U2hvcnRjdXRUZXh0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0JykpO1xyXG59KTtcclxuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsICgpID0+IHtcclxuICAgIGNvbnRyb2xsZXJzLnNldFRoZW1lKCk7XHJcbiAgICBvd1dpbmRvdy5zY2FsZVdpbmRvdygnZGVza3RvcCcsIDgwMCwgNTAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpO1xyXG59KTtcclxuXHJcbm5ldyBBcHBXaW5kb3cod2luZG93TmFtZXMuZGVza3RvcCwgJ3NldHRpbmdzX2Rlc2t0b3AnLCAnc3RhdGlzdGljc19kZXNrdG9wJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=