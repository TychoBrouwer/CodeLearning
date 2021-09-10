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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/background/background.ts");
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

/***/ "./src/odk-ts/ow-game-listener.ts":
/*!****************************************!*\
  !*** ./src/odk-ts/ow-game-listener.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OWGameListener = void 0;
const ow_listener_1 = __webpack_require__(/*! ./ow-listener */ "./src/odk-ts/ow-listener.ts");
class OWGameListener extends ow_listener_1.OWListener {
    constructor(delegate) {
        super(delegate);
        this.onGameInfoUpdated = (update) => {
            if (!update || !update.gameInfo) {
                return;
            }
            if (!update.runningChanged && !update.gameChanged) {
                return;
            }
            if (update.gameInfo.isRunning) {
                if (this._delegate.onGameStarted) {
                    this._delegate.onGameStarted(update.gameInfo);
                }
            }
            else {
                if (this._delegate.onGameEnded) {
                    this._delegate.onGameEnded(update.gameInfo);
                }
            }
        };
        this.onRunningGameInfo = (info) => {
            if (!info) {
                return;
            }
            if (info.isRunning) {
                if (this._delegate.onGameStarted) {
                    this._delegate.onGameStarted(info);
                }
            }
        };
    }
    start() {
        super.start();
        overwolf.games.onGameInfoUpdated.addListener(this.onGameInfoUpdated);
        overwolf.games.getRunningGameInfo(this.onRunningGameInfo);
    }
    stop() {
        overwolf.games.onGameInfoUpdated.removeListener(this.onGameInfoUpdated);
    }
}
exports.OWGameListener = OWGameListener;


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

/***/ "./src/odk-ts/ow-games.ts":
/*!********************************!*\
  !*** ./src/odk-ts/ow-games.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OWGames = void 0;
class OWGames {
    static getRunningGameInfo() {
        return new Promise((resolve) => {
            overwolf.games.getRunningGameInfo(resolve);
        });
    }
}
exports.OWGames = OWGames;


/***/ }),

/***/ "./src/odk-ts/ow-listener.ts":
/*!***********************************!*\
  !*** ./src/odk-ts/ow-listener.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OWListener = void 0;
class OWListener {
    constructor(delegate) {
        this._delegate = delegate;
    }
    start() {
        this.stop();
    }
}
exports.OWListener = OWListener;


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

/***/ "./src/public/background/background.ts":
/*!*********************************************!*\
  !*** ./src/public/background/background.ts ***!
  \*********************************************/
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
const ow_games_1 = __webpack_require__(/*! ../../odk-ts/ow-games */ "./src/odk-ts/ow-games.ts");
const ow_game_listener_1 = __webpack_require__(/*! ../../odk-ts/ow-game-listener */ "./src/odk-ts/ow-game-listener.ts");
const ow_window_1 = __webpack_require__(/*! ../../odk-ts/ow-window */ "./src/odk-ts/ow-window.ts");
const ow_games_events_1 = __webpack_require__(/*! ../../odk-ts/ow-games-events */ "./src/odk-ts/ow-games-events.ts");
const database_1 = __webpack_require__(/*! ../../odk-ts/database */ "./src/odk-ts/database.ts");
const consts_1 = __webpack_require__(/*! ../../consts */ "./src/consts.ts");
let gameMode, gameStatus, currentWindow;
function logLine(type, log, data) {
    const logLine = '"' + log + '": ' + JSON.stringify(data, undefined, 2);
    if (type === 'log') {
        console.log(logLine);
    }
    else if (type === 'error') {
        console.error(logLine);
    }
    else if (type === 'warn') {
        console.warn(logLine);
    }
}
class BackgroundController {
    constructor() {
        this._windows = {};
        this._windows[consts_1.windowNames.desktop] = new ow_window_1.OWWindow(consts_1.windowNames.desktop);
        this._windows[consts_1.windowNames.inGame] = new ow_window_1.OWWindow(consts_1.windowNames.inGame);
        this._windows[consts_1.windowNames.inLobby] = new ow_window_1.OWWindow(consts_1.windowNames.inLobby);
        this._windows[consts_1.windowNames.statistics] = new ow_window_1.OWWindow(consts_1.windowNames.statistics);
        this._windows[consts_1.windowNames.inGameDesktopOnly] = new ow_window_1.OWWindow(consts_1.windowNames.inGameDesktopOnly);
        this._windows[consts_1.windowNames.inLobbyDesktopOnly] = new ow_window_1.OWWindow(consts_1.windowNames.inLobbyDesktopOnly);
        this._windows[consts_1.windowNames.statisticsDesktopOnly] = new ow_window_1.OWWindow(consts_1.windowNames.statisticsDesktopOnly);
        this.database = new database_1.Database();
        this._rainbowGameListener = new ow_game_listener_1.OWGameListener({
            onGameStarted: this.toggleWindows.bind(this),
            onGameEnded: this.toggleWindows.bind(this)
        });
        this._rainbowGameEventsListener = new ow_games_events_1.OWGamesEvents({
            onInfoUpdates: this.onInfoUpdates.bind(this),
            onNewEvents: this.onNewEvents.bind(this)
        }, consts_1.interestingFeatures2);
        const promise = this.database.createIDB('weeks', 'week', 37)
            .then(() => this.database.createIDB('days', 'date', 38))
            .then(() => this.database.createIDB('matches', 'timeStamp', 39, ['timeStampIndex', 'matchId', 'gameMode']))
            .then(() => this.database.initAllIDB());
    }
    ;
    static instance() {
        if (!BackgroundController._instance) {
            BackgroundController._instance = new BackgroundController();
        }
        return BackgroundController._instance;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            this._rainbowGameEventsListener.start();
            this._rainbowGameListener.start();
            const currWindow = (yield this.isRainbowRunning()) ? null : this._windows[consts_1.windowNames.desktop].restore();
            if (currWindow) {
                logLine('log', 'open window', currWindow);
                currentWindow = currWindow;
            }
        });
    }
    toggleWindows(info) {
        if (!info || !this.isGameRainbow(info)) {
            return;
        }
        if (info.isRunning) {
            this._windows[consts_1.windowNames.desktop].close();
            logLine('log', 'close window', consts_1.windowNames.desktop);
        }
        else {
            this._windows[consts_1.windowNames.inGame].close();
            this._windows[consts_1.windowNames.inLobby].close();
            this._windows[consts_1.windowNames.statistics].close();
            this._windows[consts_1.windowNames.inGameDesktopOnly].close();
            this._windows[consts_1.windowNames.inLobbyDesktopOnly].close();
            this._windows[consts_1.windowNames.statisticsDesktopOnly].close();
            this._windows[consts_1.windowNames.desktop].restore();
            logLine('log', 'open window', consts_1.windowNames.desktop);
            currentWindow = 'desktop';
        }
    }
    isRainbowRunning() {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield ow_games_1.OWGames.getRunningGameInfo();
            return info && info.isRunning && this.isGameRainbow(info);
        });
    }
    isGameRainbow(info) {
        return info.classId === consts_1.rainbowClassId;
    }
    onInfoUpdates(info) {
        if (('match_info' in info && 'game_mode' in info.match_info) ||
            ('game_info' in info && 'phase' in info.game_info && info.game_info.phase === 'lobby') ||
            ('round' in info && 'number' in info.round && info.round === null)) {
            if (info.match_info) {
                gameMode = info.match_info.game_mode;
            }
            if (gameMode !== 'NONE' &&
                !('game_info' in info && 'phase' in info.game_info && info.game_info.phase === 'lobby') &&
                !('round' in info && 'number' in info.round && info.round === null)) {
                gameStatus = 'searching';
            }
            else {
                gameStatus = 'lobby';
                if (localStorage.desktopOnly === '"0"') {
                    this._windows[consts_1.windowNames.inGame].close();
                    this._windows[consts_1.windowNames.inGameDesktopOnly].close();
                    this._windows[consts_1.windowNames.inLobby].restore();
                    overwolf.windows.close(consts_1.windowNames.settings, () => {
                        logLine('log', 'close window', consts_1.windowNames.settings);
                    });
                    overwolf.windows.close(consts_1.windowNames.statistics, () => {
                        logLine('log', 'close window', consts_1.windowNames.settingsDesktopOnly);
                    });
                    overwolf.windows.close(consts_1.windowNames.settingsDesktopOnly, () => {
                        logLine('log', 'close window', consts_1.windowNames.settings);
                    });
                    overwolf.windows.close(consts_1.windowNames.statisticsDesktopOnly, () => {
                        logLine('log', 'close window', consts_1.windowNames.settingsDesktopOnly);
                    });
                    logLine('log', 'open window', consts_1.windowNames.inLobby);
                }
                else {
                    this._windows[consts_1.windowNames.inGameDesktopOnly].close();
                    this._windows[consts_1.windowNames.inGame].close();
                    this._windows[consts_1.windowNames.inLobbyDesktopOnly].restore();
                    overwolf.windows.close(consts_1.windowNames.settings, () => {
                        logLine('log', 'close window', consts_1.windowNames.settings);
                    });
                    overwolf.windows.close(consts_1.windowNames.statistics, () => {
                        logLine('log', 'close window', consts_1.windowNames.settingsDesktopOnly);
                    });
                    overwolf.windows.close(consts_1.windowNames.settingsDesktopOnly, () => {
                        logLine('log', 'close window', consts_1.windowNames.settings);
                    });
                    overwolf.windows.close(consts_1.windowNames.statisticsDesktopOnly, () => {
                        logLine('log', 'close window', consts_1.windowNames.settingsDesktopOnly);
                    });
                    logLine('log', 'open window', consts_1.windowNames.inLobbyDesktopOnly);
                }
            }
        }
        if ('round' in info && info.round.number != null && gameStatus !== 'in_game') {
            gameStatus = 'in_game';
            if (localStorage.desktopOnly === '"0"') {
                this._windows[consts_1.windowNames.inLobby].close();
                this._windows[consts_1.windowNames.inLobbyDesktopOnly].close();
                this._windows[consts_1.windowNames.inGame].restore();
                overwolf.windows.close(consts_1.windowNames.settings, () => {
                    logLine('log', 'close window', consts_1.windowNames.settings);
                });
                overwolf.windows.close(consts_1.windowNames.statistics, () => {
                    logLine('log', 'close window', consts_1.windowNames.statistics);
                });
                overwolf.windows.close(consts_1.windowNames.settingsDesktopOnly, () => {
                    logLine('log', 'close window', consts_1.windowNames.settingsDesktopOnly);
                });
                overwolf.windows.close(consts_1.windowNames.statisticsDesktopOnly, () => {
                    logLine('log', 'close window', consts_1.windowNames.statisticsDesktopOnly);
                });
                logLine('log', 'close window', consts_1.windowNames.inLobby + ' + ' + consts_1.windowNames.inLobbyDesktopOnly);
                logLine('log', 'open window', consts_1.windowNames.inGame);
            }
            else {
                this._windows[consts_1.windowNames.inLobbyDesktopOnly].close();
                this._windows[consts_1.windowNames.inLobby].close();
                this._windows[consts_1.windowNames.inGameDesktopOnly].restore();
                overwolf.windows.close(consts_1.windowNames.settings, () => {
                    logLine('log', 'close window', consts_1.windowNames.settings);
                });
                overwolf.windows.close(consts_1.windowNames.settingsDesktopOnly, () => {
                    logLine('log', 'close window', consts_1.windowNames.settingsDesktopOnly);
                });
                logLine('log', 'close window', consts_1.windowNames.inLobbyDesktopOnly + ' + ' + consts_1.windowNames.inLobby);
                logLine('log', 'open window', consts_1.windowNames.inGameDesktopOnly);
            }
        }
        logLine('log', 'infoEvent', info);
    }
    onNewEvents(eventInfo) {
        logLine('log', 'infoEvent', eventInfo);
    }
}
BackgroundController.instance().run();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2RhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctZ2FtZS1saXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWdhbWVzLWV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWdhbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctbGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy13aW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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S0FBSyxDQUFDLG9CQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtvQkFDOUMsT0FBTyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsb0JBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQVcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7b0JBQ3pELE9BQU8sQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLG9CQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsb0JBQVcsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLEdBQUcsb0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0YsT0FBTyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsb0JBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sV0FBVyxDQUFDLFNBQVM7UUFDekIsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNKO0FBRUQsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHVibGljL2JhY2tncm91bmQvYmFja2dyb3VuZC50c1wiKTtcbiIsImNvbnN0IHJhaW5ib3dDbGFzc0lkID0gMTA4MjY7XHJcblxyXG5jb25zdCBpbnRlcmVzdGluZ0ZlYXR1cmVzMSA9IFtcclxuICAgICdnZXBfaW50ZXJuYWwnLFxyXG4gICAgJ2dhbWVfaW5mbycsXHJcbiAgICAnbWF0Y2gnLFxyXG4gICAgJ21hdGNoX2luZm8nLFxyXG4gICAgJ3Jvc3RlcicsXHJcbiAgICAna2lsbCcsXHJcbiAgICAnZGVhdGgnLFxyXG4gICAgJ21lJyxcclxuXTtcclxuXHJcbmNvbnN0IGludGVyZXN0aW5nRmVhdHVyZXMyID0gW1xyXG4gICAgJ2dlcF9pbnRlcm5hbCcsXHJcbiAgICAnZ2FtZV9pbmZvJyxcclxuICAgICdtYXRjaCcsXHJcbiAgICAnbWF0Y2hfaW5mbycsXHJcbl07XHJcblxyXG5jb25zdCB3aW5kb3dOYW1lcyA9IHtcclxuICAgIGRlc2t0b3A6ICdkZXNrdG9wJyxcclxuICAgIGluTG9iYnk6ICdpbl9sb2JieScsXHJcbiAgICBpbkdhbWU6ICdpbl9nYW1lJyxcclxuICAgIGluTG9iYnlEZXNrdG9wT25seTogJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScsXHJcbiAgICBpbkdhbWVEZXNrdG9wT25seTogJ2luX2dhbWVfZGVza3RvcF9vbmx5JyxcclxuICAgIHNldHRpbmdzOiAnc2V0dGluZ3NfaW5fZ2FtZScsXHJcbiAgICBzZXR0aW5nc0Rlc2t0b3BPbmx5OiAnc2V0dGluZ3NfZGVza3RvcCcsXHJcbiAgICBzdGF0aXN0aWNzOiAnc3RhdGlzdGljc19pbl9nYW1lJyxcclxuICAgIHN0YXRpc3RpY3NEZXNrdG9wT25seTogJ3N0YXRpc3RpY3NfZGVza3RvcCcsXHJcbiAgICB3ZWJzaXRlOiAnd2Vic2l0ZV9pbl9nYW1lJyxcclxuICAgIHdlYnNpdGVEZXNrdG9wT25seTogJ3dlYnNpdGVfZGVza3RvcCdcclxufTtcclxuXHJcbmNvbnN0IGhvdGtleXMgPSB7XHJcbiAgICB0b2dnbGU6ICdzaG93aGlkZScsXHJcbn07XHJcblxyXG5jb25zdCBnYW1lTW9kZXNQVkUgPSBbXHJcbiAgICAnT1BFUkFUSU9OUycsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFX0xPTkVXT0xGJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkUnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRV9QQVJUWScsXHJcbl07XHJcblxyXG5jb25zdCBnYW1lTW9kZXNQVlAgPSBbXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX05FV0NPTUVSJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlAnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9FVkVOVCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VEJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfUkFOS0VEJyxcclxuICAgICdDVVNUT01HQU1FX1BWUCcsXHJcbiAgICAnQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEJyxcclxuXTtcclxuXHJcbmNvbnN0IGRhdGFiYXNlT2JqZWN0ID0ge1xyXG4gICAgTUFUQ0hNQUtJTkdfUFZQX1JBTktFRDoge1xyXG4gICAgICAgIGtpbGxzOiAwLFxyXG4gICAgICAgIGRlYXRoczogMCxcclxuICAgICAgICB3aW5zOiAwLFxyXG4gICAgICAgIGxvc3NlczogMCxcclxuICAgIH0sIE1BVENITUFLSU5HX1BWUDoge1xyXG4gICAgICAgIGtpbGxzOiAwLFxyXG4gICAgICAgIGRlYXRoczogMCxcclxuICAgICAgICB3aW5zOiAwLFxyXG4gICAgICAgIGxvc3NlczogMCxcclxuICAgIH0sIE1BVENITUFLSU5HX1BWUF9VTlJBTktFRDoge1xyXG4gICAgICAgIGtpbGxzOiAwLFxyXG4gICAgICAgIGRlYXRoczogMCxcclxuICAgICAgICB3aW5zOiAwLFxyXG4gICAgICAgIGxvc3NlczogMCxcclxuICAgIH0sIENVU1RPTUdBTUVfUFZQX0RFRElDQVRFRDoge1xyXG4gICAgICAgIGtpbGxzOiAwLFxyXG4gICAgICAgIGRlYXRoczogMCxcclxuICAgICAgICB3aW5zOiAwLFxyXG4gICAgICAgIGxvc3NlczogMCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2Vhc29uQ29sb3JzID0ge1xyXG4gICAgNjonIzAwNTBiMycsXHJcbiAgICA3OicjY2EzNjFjJyxcclxuICAgIDg6JyMwMDY1NDMnLFxyXG4gICAgOTonI2ZmYzExMycsXHJcbiAgICAxMDonIzk0OWYzOScsXHJcbiAgICAxMTonIzgxYTBjMScsXHJcbiAgICAxMjonI2FhODU0ZicsXHJcbiAgICAxMzonI2QyMDA1YScsXHJcbiAgICAxNDonIzMwNDM5NScsXHJcbiAgICAxNTonIzEzNjMwYycsXHJcbiAgICAxNjonIzA2OWRiMycsXHJcbiAgICAxNzonIzk0NmE5NycsXHJcbiAgICAxODonIzJiN2U5YScsXHJcbiAgICAxOTonIzZjYTUxMScsXHJcbiAgICAyMDonI2QxNDAwNycsXHJcbn1cclxuXHJcbmNvbnN0IG9wZXJhdG9ycyA9IHtcclxuICAgIDc2ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlNsZWRnZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6MVwiXHJcbiAgICB9LFxyXG4gICAgMTAyNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRoYXRjaGVyXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToxXCJcclxuICAgIH0sXHJcbiAgICA1MTM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBc2hcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjJcIlxyXG4gICAgfSxcclxuICAgIDEwMjU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUaGVybWl0ZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6MlwiXHJcbiAgICB9LFxyXG4gICAgNzcwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVHdpdGNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDozXCJcclxuICAgIH0sXHJcbiAgICAxMDI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTW9udGFnbmVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjNcIlxyXG4gICAgfSxcclxuICAgIDI1OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdsYXpcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjRcIlxyXG4gICAgfSxcclxuICAgIDUxNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkZ1emVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjRcIlxyXG4gICAgfSxcclxuICAgIDI2MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJsaXR6XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo1XCJcclxuICAgIH0sXHJcbiAgICA1MTY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJJUVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NVwiXHJcbiAgICB9LFxyXG4gICAgMjYxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQnVja1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NlwiXHJcbiAgICB9LFxyXG4gICAgMjYyOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmxhY2tiZWFyZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6N1wiXHJcbiAgICB9LFxyXG4gICAgMjYzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQ2FwaXRhb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6OFwiXHJcbiAgICB9LFxyXG4gICAgMjY0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSGliYW5hXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo5XCJcclxuICAgIH0sXHJcbiAgICAyNjU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJKYWNrYWxcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkFcIlxyXG4gICAgfSxcclxuICAgIDI2Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIllpbmdcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkJcIlxyXG4gICAgfSxcclxuICAgIDUyMzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlpvZmlhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpDXCJcclxuICAgIH0sXHJcbiAgICAyNjg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJEb2trYWViaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6RFwiXHJcbiAgICB9LFxyXG4gICAgNTI1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTGlvblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6RVwiXHJcbiAgICB9LFxyXG4gICAgNzgxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRmlua2FcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OkVcIlxyXG4gICAgfSxcclxuICAgIDI3MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1hdmVyaWNrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxMFwiXHJcbiAgICB9LFxyXG4gICAgMjcyOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTm9tYWRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjExXCJcclxuICAgIH0sXHJcbiAgICA1Mjk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHcmlkbG9ja1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTJcIlxyXG4gICAgfSxcclxuICAgIDI3NDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk5va2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEzXCJcclxuICAgIH0sXHJcbiAgICAyNzc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBbWFydVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTZcIlxyXG4gICAgfSxcclxuICAgIDI3ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthbGlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE3XCJcclxuICAgIH0sXHJcbiAgICAyODA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJJYW5hXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxOVwiXHJcbiAgICB9LFxyXG4gICAgNzkwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQWNlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoxN1wiXHJcbiAgICB9LFxyXG4gICAgMjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJaZXJvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMToxQlwiXHJcbiAgICB9LFxyXG4gICAgMToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlJlY3J1aXRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCJyZWNydWl0XCJcclxuICAgIH0sXHJcbiAgICAyNTY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJTbW9rZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MVwiXHJcbiAgICB9LFxyXG4gICAgNTEyOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTXV0ZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MVwiXHJcbiAgICB9LFxyXG4gICAgMjU3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQ2FzdGxlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoyXCJcclxuICAgIH0sXHJcbiAgICA3Njk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJQdWxzZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6MlwiXHJcbiAgICB9LFxyXG4gICAgMjU4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRG9jXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjozXCJcclxuICAgIH0sXHJcbiAgICA1MTQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJSb29rXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzozXCJcclxuICAgIH0sXHJcbiAgICA3NzE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJLYXBrYW5cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjRcIlxyXG4gICAgfSxcclxuICAgIDEwMjc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUYWNoYW5rYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6NFwiXHJcbiAgICB9LFxyXG4gICAgNzcyOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSmFnZXJcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjVcIlxyXG4gICAgfSxcclxuICAgIDEwMjg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCYW5kaXRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjVcIlxyXG4gICAgfSxcclxuICAgIDUxNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkZyb3N0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo2XCJcclxuICAgIH0sXHJcbiAgICA1MTg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJWYWxreXJpZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6N1wiXHJcbiAgICB9LFxyXG4gICAgNTE5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQ2F2ZWlyYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6OFwiXHJcbiAgICB9LFxyXG4gICAgNTIwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRWNob1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6OVwiXHJcbiAgICB9LFxyXG4gICAgNTIxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWlyYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6QVwiXHJcbiAgICB9LFxyXG4gICAgNTIyOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTGVzaW9uXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpCXCJcclxuICAgIH0sXHJcbiAgICAyNjc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJFbGFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkNcIlxyXG4gICAgfSxcclxuICAgIDUyNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlZpZ2lsXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpEXCJcclxuICAgIH0sXHJcbiAgICAyNzA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNYWVzdHJvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpGXCJcclxuICAgIH0sXHJcbiAgICA1MjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBbGliaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6RlwiXHJcbiAgICB9LFxyXG4gICAgNTI3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQ2xhc2hcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjEwXCJcclxuICAgIH0sXHJcbiAgICA1Mjg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJLYWlkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMVwiXHJcbiAgICB9LFxyXG4gICAgMjczOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTW96emllXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxMlwiXHJcbiAgICB9LFxyXG4gICAgMjc1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiV2FyZGVuXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNFwiXHJcbiAgICB9LFxyXG4gICAgMjc2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR295b1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTVcIlxyXG4gICAgfSxcclxuICAgIDUzNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIldhbWFpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxN1wiXHJcbiAgICB9LFxyXG4gICAgMjc5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiT3J5eFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MThcIlxyXG4gICAgfSxcclxuICAgIDI4MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1lbHVzaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MUFcIlxyXG4gICAgfSxcclxuICAgIDEwNDY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBcnVuaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6MTdcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcmFua09mZnNldCA9IHtcclxuICAgIDA6IDAsXHJcbiAgICAxOiAyLFxyXG4gICAgMjogMyxcclxuICAgIDM6IDQsXHJcbiAgICA0OiA1LFxyXG4gICAgNTogNyxcclxuICAgIDY6IDgsXHJcbiAgICA3OiA5LFxyXG4gICAgODogMTAsXHJcbiAgICA5OiAxMixcclxuICAgIDEwOiAxMyxcclxuICAgIDExOiAxNCxcclxuICAgIDEyOiAxNSxcclxuICAgIDEzOiA1MCxcclxuICAgIDE0OiAxNixcclxuICAgIDE1OiAxNyxcclxuICAgIDE2OiAxOCxcclxuICAgIDE3OiAxOSxcclxuICAgIDE4OiAyMCxcclxuICAgIDE5OiAyMSxcclxuICAgIDIwOiAyMixcclxuICAgIDIxOiAyMixcclxuICAgIDIyOiAyMixcclxuICAgIDIzOiAyMixcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgICByYWluYm93Q2xhc3NJZCxcclxuICAgIGludGVyZXN0aW5nRmVhdHVyZXMxLFxyXG4gICAgaW50ZXJlc3RpbmdGZWF0dXJlczIsXHJcbiAgICB3aW5kb3dOYW1lcyxcclxuICAgIGhvdGtleXMsXHJcbiAgICBnYW1lTW9kZXNQVlAsXHJcbiAgICBnYW1lTW9kZXNQVkUsXHJcbiAgICBkYXRhYmFzZU9iamVjdCxcclxuICAgIHNlYXNvbkNvbG9ycyxcclxuICAgIHJhbmtPZmZzZXQsXHJcbiAgICBvcGVyYXRvcnNcclxufVxyXG4iLCJpbXBvcnQgeyBkYXRhYmFzZU9iamVjdCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xyXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUlEQihuYW1lSURCOiBzdHJpbmcsIGtleVBhdGhJREI6IHN0cmluZywgdmVyc2lvbjogbnVtYmVyLCBpbmRleGVzID0gbnVsbCk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJywgdmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmU6IElEQk9iamVjdFN0b3JlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShuYW1lSURCLCB7IGtleVBhdGg6IGtleVBhdGhJREIgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGV2ZW50LnRhcmdldC50cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KGluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG9iamVjdFN0b3JlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdG9yZVRvSURCKG5hbWVJREI6IHN0cmluZywgdmFsdWVJREIsIGluaXRpYXRlSURCOiBib29sZWFuKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYk9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWR3cml0ZScpLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5pdGlhdGVJREIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYk9iamVjdFN0b3JlLnB1dCh2YWx1ZUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYXRlSURCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGJPYmplY3RTdG9yZS5hZGQodmFsdWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVhZEZyb21JREIobmFtZUlEQjogc3RyaW5nLCBrZXlJREI6IG51bWJlciB8IHN0cmluZyk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERiID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RGIuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdERiLmVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdERiLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiT2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBkYk9iamVjdFN0b3JlLmdldChrZXlJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVhZEZyb21JREJSYW5nZShuYW1lSURCOiBzdHJpbmcsIGluZGV4OiBzdHJpbmcsIGJlZ2luUmFuZ2U6IHN0cmluZywgZW5kUmFuZ2U6IHN0cmluZywgYmVnaW46IG51bWJlciwgZW5kOiBudW1iZXIpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYiA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcbiAgICAgICAgICAgIGxldCBrZXlSYW5nZVZhbHVlOiBJREJLZXlSYW5nZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiZWdpblJhbmdlICYmIGVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UuYm91bmQoYmVnaW5SYW5nZSwgZW5kUmFuZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJlZ2luUmFuZ2UgJiYgIWVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UubG93ZXJCb3VuZChiZWdpblJhbmdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghYmVnaW5SYW5nZSAmJiBlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLnVwcGVyQm91bmQoZW5kUmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERiLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3REYi5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3REYi5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkb25seScpLm9iamVjdFN0b3JlKG5hbWVJREIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuaW5kZXgoaW5kZXgpLm9wZW5DdXJzb3Ioa2V5UmFuZ2VWYWx1ZSwgJ3ByZXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDAsIGogPSAwLCByZXN1bHQgPSBuZXcgT2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IHJlcXVlc3QucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZWdpbiAhPT0gMCAmJiBpID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuYWR2YW5jZShiZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGJlZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnNvciAmJiBpIDw9IGVuZCAmJiBpID49IGJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbY3Vyc29yLnZhbHVlLnRpbWVTdGFtcF0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGN1cnNvci52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbml0QWxsSURCKCk6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kYXk6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZZZWFyOiBhbnkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgcGFzdERheXNPZlllYXI6IGFueSA9ICh0b2RheSAtIGZpcnN0RGF5T2ZZZWFyKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qga2V5SURCV2Vla3MgPSBgJHtNYXRoLmNlaWwoKHBhc3REYXlzT2ZZZWFyICsgZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyAxKSAvIDcpfSwke3RvZGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgICAgY29uc3Qga2V5SURCRGF5cyA9IHRvZGF5LmdldERhdGUoKSArICcsJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLCcgKyB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbHVlSURCV2Vla3M6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVJREJXZWVrc1tpXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2VPYmplY3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZUlEQldlZWtzLndlZWsgPSBrZXlJREJXZWVrcztcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUlEQkRheXM6IGFueSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YWJhc2VPYmplY3QpKTtcclxuICAgICAgICAgICAgdmFsdWVJREJEYXlzLmRhdGUgPSBrZXlJREJEYXlzO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTEgPSB0aGlzLnN0b3JlVG9JREIoJ3dlZWtzJywgdmFsdWVJREJXZWVrcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UyID0gdGhpcy5zdG9yZVRvSURCKCdkYXlzJywgdmFsdWVJREJEYXlzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTJdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZGlzcGxheURhaWx5V2Vla2x5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kYXk6IGFueSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZZZWFyOiBhbnkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgcGFzdERheXNPZlllYXI6IGFueSA9ICh0b2RheSAtIGZpcnN0RGF5T2ZZZWFyKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qga2V5SURCV2Vla3MgPSBgJHtNYXRoLmNlaWwoKHBhc3REYXlzT2ZZZWFyICsgZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyAxKSAvIDcpfSwke3RvZGF5LmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICAgICAgY29uc3Qga2V5SURCRGF5cyA9IHRvZGF5LmdldERhdGUoKSArICcsJyArICh0b2RheS5nZXRNb250aCgpICsgMSkgKyAnLCcgKyB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmdzJykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTEgPSB0aGlzLnJlYWRGcm9tSURCKCd3ZWVrcycsIGtleUlEQldlZWtzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0V2VlayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdlZWtseVN0YXRzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2VuZXJhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhc3VhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVucmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAua2lsbHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLndpbnMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC53aW5zICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3ZWVrbHlTdGF0cykuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGUgPSB3ZWVrbHlTdGF0c1tvYmpdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNb2RlLmRlYXRocyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICgoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMpLnRvRml4ZWQoMikpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gTWF0aC5yb3VuZChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocyAqIDMzKSArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZGUuZGVhdGhzID09PSAwICYmIGdhbWVNb2RlLmtpbGxzICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJ0lORic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzEwMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJzAuMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gKE1hdGgucm91bmQoZ2FtZU1vZGUud2lucyAvIChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAqIDEwMCkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gZ2FtZU1vZGUud2wgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gcGFyc2VGbG9hdCh3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtd2Vla2x5LXRleHQnKS5pbm5lckhUTUwgPSB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLndsICsgJyUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlZWtseVN0YXRzOlwiLCB3ZWVrbHlTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrbHlTdGF0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTIgPSB0aGlzLnJlYWRGcm9tSURCKCdkYXlzJywga2V5SURCRGF5cylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdERheSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYWlseVN0YXRzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdlbmVyYWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmtpbGxzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAud2lucyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhc3VhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6ICByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVucmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGFpbHlTdGF0cykuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGUgPSBkYWlseVN0YXRzW29ial07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZGUuZGVhdGhzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICgoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMpLnRvRml4ZWQoMikpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gTWF0aC5yb3VuZChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocyAqIDMzKSArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZGUuZGVhdGhzID09PSAwICYmIGdhbWVNb2RlLmtpbGxzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICdJTkYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcxMDAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICcwLjAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAoTWF0aC5yb3VuZChnYW1lTW9kZS53aW5zIC8gKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICogMTAwKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSBnYW1lTW9kZS53bCArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQoZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmtkKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtZGFpbHktdGV4dCcpLmlubmVySFRNTCA9IGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS53bCArICclJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYWlseVN0YXRzOlwiLCBkYWlseVN0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhaWx5U3RhdHM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHNOYXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYWlseS13ZWVrbHktbmF2LWJ0bicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRzTmF2QnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0c05hdkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3MuY2lyY2xlKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTJdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPV0xpc3RlbmVyLCBPV0xpc3RlbmVyRGVsZWdhdGUgfSBmcm9tICcuL293LWxpc3RlbmVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT1dHYW1lTGlzdGVuZXJEZWxlZ2F0ZSBleHRlbmRzIE9XTGlzdGVuZXJEZWxlZ2F0ZSB7XHJcbiAgICBvbkdhbWVTdGFydGVkPyhpbmZvOiBvdmVyd29sZi5nYW1lcy5SdW5uaW5nR2FtZUluZm8pO1xyXG4gICAgb25HYW1lRW5kZWQ/KGluZm86IG92ZXJ3b2xmLmdhbWVzLlJ1bm5pbmdHYW1lSW5mbyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPV0dhbWVMaXN0ZW5lciBleHRlbmRzIE9XTGlzdGVuZXI8T1dHYW1lTGlzdGVuZXJEZWxlZ2F0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IE9XR2FtZUxpc3RlbmVyRGVsZWdhdGUpIHtcclxuICAgICAgICBzdXBlcihkZWxlZ2F0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLm9uR2FtZUluZm9VcGRhdGVkLmFkZExpc3RlbmVyKHRoaXMub25HYW1lSW5mb1VwZGF0ZWQpO1xyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmdldFJ1bm5pbmdHYW1lSW5mbyh0aGlzLm9uUnVubmluZ0dhbWVJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5vbkdhbWVJbmZvVXBkYXRlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uR2FtZUluZm9VcGRhdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uR2FtZUluZm9VcGRhdGVkID0gKHVwZGF0ZTogb3ZlcndvbGYuZ2FtZXMuR2FtZUluZm9VcGRhdGVkRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoIXVwZGF0ZSB8fCAhdXBkYXRlLmdhbWVJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdXBkYXRlLnJ1bm5pbmdDaGFuZ2VkICYmICF1cGRhdGUuZ2FtZUNoYW5nZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVwZGF0ZS5nYW1lSW5mby5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlbGVnYXRlLm9uR2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uR2FtZVN0YXJ0ZWQodXBkYXRlLmdhbWVJbmZvKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlbGVnYXRlLm9uR2FtZUVuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vbkdhbWVFbmRlZCh1cGRhdGUuZ2FtZUluZm8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJ1bm5pbmdHYW1lSW5mbyA9IChpbmZvOiBvdmVyd29sZi5nYW1lcy5SdW5uaW5nR2FtZUluZm8pOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZm8uaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWxlZ2F0ZS5vbkdhbWVTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vbkdhbWVTdGFydGVkKGluZm8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGltZXIgfSBmcm9tICcuL3RpbWVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9XR2FtZXNFdmVudHNEZWxlZ2F0ZSB7XHJcbiAgICBvbkluZm9VcGRhdGVzKGluZm86IGFueSk7XHJcbiAgICBvbk5ld0V2ZW50cyhlOiBhbnkpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT1dHYW1lc0V2ZW50cyB7XHJcbiAgICBwcml2YXRlIF9kZWxlZ2F0ZTogSU9XR2FtZXNFdmVudHNEZWxlZ2F0ZTtcclxuICAgIHByaXZhdGUgX3JlcXVpcmVkRmVhdHVyZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlLCByZXF1aXJlZEZlYXR1cmVzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gZGVsZWdhdGU7XHJcbiAgICAgICAgdGhpcy5fcmVxdWlyZWRGZWF0dXJlcyA9IHJlcXVpcmVkRmVhdHVyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldEluZm8oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLmdldEluZm8ocmVzb2x2ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldFJlcXVpcmVkRmVhdHVyZXMoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgbGV0IHRyaWVzOm51bWJlciA9IDEsXHJcbiAgICAgICAgcmVzdWx0O1xyXG5cclxuICAgICAgICB3aGlsZSAoIHRyaWVzID4gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5zZXRSZXF1aXJlZEZlYXR1cmVzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVkRmVhdHVyZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmICggcmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldFJlcXVpcmVkRmVhdHVyZXMoKTogc3VjY2VzczogJysgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlc3VsdC5zdXBwb3J0ZWRGZWF0dXJlcy5sZW5ndGggPiAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgVGltZXIud2FpdCgzMDAwKTtcclxuICAgICAgICAgICAgdHJpZXMrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUud2Fybignc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBmYWlsdXJlIGFmdGVyICcrIHRyaWVzICsnIHRyaWVzJysgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5vbkluZm9VcGRhdGVzMi5hZGRMaXN0ZW5lcih0aGlzLm9uSW5mb1VwZGF0ZXMpO1xyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLmV2ZW50cy5vbk5ld0V2ZW50cy5hZGRMaXN0ZW5lcih0aGlzLm9uTmV3RXZlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVuUmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uSW5mb1VwZGF0ZXMyLnJlbW92ZUxpc3RlbmVyKHRoaXMub25JbmZvVXBkYXRlcyk7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uTmV3RXZlbnRzLnJlbW92ZUxpc3RlbmVyKHRoaXMub25OZXdFdmVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25JbmZvVXBkYXRlcyA9IChpbmZvOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vbkluZm9VcGRhdGVzKGluZm8uaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk5ld0V2ZW50cyA9IChlOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vbk5ld0V2ZW50cyhlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtvdy1nYW1lLWV2ZW50c10gU1RBUlRgKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLnNldFJlcXVpcmVkRmVhdHVyZXMoKTtcclxuXHJcbiAgICAgICAgbGV0IHRyaWVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdCB7IHJlcywgc3RhdHVzIH0gPSBhd2FpdCB0aGlzLmdldEluZm8oKTtcclxuXHJcbiAgICAgICAgaWYgKCByZXMgJiYgc3RhdHVzID09PSAnc3VjY2VzcycgKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25JbmZvVXBkYXRlcyh7IGluZm86IHJlcyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFtvdy1nYW1lLWV2ZW50c10gU1RPUGApO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50cygpO1xyXG4gICAgfVxyXG59XHJcbiIsInR5cGUgR2V0R2FtZURCSW5mb1Jlc3VsdCA9IG92ZXJ3b2xmLmdhbWVzLkdldEdhbWVEQkluZm9SZXN1bHRcclxudHlwZSBSdW5uaW5nR2FtZUluZm8gPSBvdmVyd29sZi5nYW1lcy5SdW5uaW5nR2FtZUluZm9cclxuXHJcbmV4cG9ydCBjbGFzcyBPV0dhbWVzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UnVubmluZ0dhbWVJbmZvKCk6IFByb21pc2U8UnVubmluZ0dhbWVJbmZvPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFJ1bm5pbmdHYW1lSW5mbz4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZ2V0UnVubmluZ0dhbWVJbmZvKHJlc29sdmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBjbGFzc0lkRnJvbUdhbWVJZChnYW1lSWQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyAgICAgbGV0IGNsYXNzSWQgPSBNYXRoLmZsb29yKGdhbWVJZCAvIDEwKTtcclxuICAgIC8vICAgICByZXR1cm4gY2xhc3NJZDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFJlY2VudGx5UGxheWVkR2FtZXMobGltaXQ6IG51bWJlciA9IDMpOlxyXG4gICAgLy8gUHJvbWlzZTxudW1iZXJbXXxudWxsPiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXJbXXxudWxsPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoIW92ZXJ3b2xmLmdhbWVzLmdldFJlY2VudGx5UGxheWVkR2FtZXMpIHtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICBvdmVyd29sZi5nYW1lcy5nZXRSZWNlbnRseVBsYXllZEdhbWVzKGxpbWl0LCByZXN1bHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZ2FtZXMpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0R2FtZURCSW5mbyhnYW1lQ2xhc3NJZDogbnVtYmVyKTpcclxuICAgIC8vIFByb21pc2U8R2V0R2FtZURCSW5mb1Jlc3VsdD4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2U8R2V0R2FtZURCSW5mb1Jlc3VsdD4oKHJlc29sdmUpID0+IHtcclxuICAgIC8vICAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZ2V0R2FtZURCSW5mbyhnYW1lQ2xhc3NJZCwgcmVzb2x2ZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBPV0xpc3RlbmVyRGVsZWdhdGUge1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT1dMaXN0ZW5lcjxUIGV4dGVuZHMgT1dMaXN0ZW5lckRlbGVnYXRlPiB7XHJcbiAgICBwcm90ZWN0ZWQgX2RlbGVnYXRlOiBUO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3Qgc3RvcCgpOiB2b2lkO1xyXG59XHJcbiIsInR5cGUgR2V0V2luZG93U3RhdGVSZXN1bHQgPSBvdmVyd29sZi53aW5kb3dzLkdldFdpbmRvd1N0YXRlUmVzdWx0O1xyXG50eXBlIE93V2luZG93SW5mbyA9IG92ZXJ3b2xmLndpbmRvd3MuV2luZG93SW5mbztcclxuZXhwb3J0IGNsYXNzIE9XV2luZG93IHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVzdG9yZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IHJlc3RvcmVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLnJlc3RvcmUoaWQsIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtyZXN0b3JlXSAtIGFuIGVycm9yIG9jY3VycmVkLCB3aW5kb3dJZD0ke2lkfSwgcmVhc29uPSR7cmVzdWx0LmVycm9yfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtaW5pbWl6ZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWluaW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBicmluZ1RvRnJvbnQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtaW5pbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmJyaW5nVG9Gcm9udChpZCwgdHJ1ZSwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1heGltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWF4aW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm1heGltaXplKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaGlkZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IGhpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5oaWRlKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIChyZXN1bHQud2luZG93X3N0YXRlICE9PSAnY2xvc2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW50ZXJuYWxDbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoYW5nZVdpbmRvd1NpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVNpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQsIChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93TG9jYXRpb24obW9kZSwgd2luZG93SWQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gcmVzdWx0LndpbmRvdy53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHJlc3VsdC53aW5kb3cuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KChtb25pdG9yUmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvcklkOiBzdHJpbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykubW9uaXRvcklkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yV2lkdGggPSBtb25pdG9yUmVzLmRpc3BsYXlzW21vbml0b3JJZF0ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvckhlaWdodCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVmdDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnY2VudGVyLWNlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbW9uaXRvcldpZHRoIC8gMiAtICh3aW5kb3dXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2VudGVyLXJpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAobW9uaXRvcldpZHRoIC0gd2luZG93V2lkdGgpIC0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jaGFuZ2VQb3NpdGlvbih3aW5kb3dJZCwgTWF0aC5yb3VuZChsZWZ0KSwgTWF0aC5yb3VuZCh0b3ApLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzY2FsZVdpbmRvdyh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpOiBQcm9taXNlIDwgdm9pZCA+ICB7XHJcbiAgICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWA7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9nYW1lJyB8fCB3aW5kb3dJZCA9PT0gJ2luX2dhbWVfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgY2FsYygke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSUgLSAzMnB4KWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93SWQgPT09ICdpbl9sb2JieScgfHwgd2luZG93SWQgPT09ICdpbl9sb2JieV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JSAtIDMycHgpYDtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW4tbG9iYnkgLmFkLWxvYmJ5JykgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJvdHRvbSA9IGAke01hdGguY2VpbChNYXRoLnBvdyhzY2FsZSwgLTQpICogNyAqIDEwMCkgLyAxMDB9cHhgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvd0lkID09PSAnaW5fbG9iYnknIHx8IHdpbmRvd0lkID09PSAnaW5fbG9iYnlfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlIDw9IDAuNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYWdNb3ZlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbS5vbm1vdXNlZG93biA9IGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZHJhZ01vdmUodGhpcy5fbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRNb25pdG9yc0xpc3QoKTogUHJvbWlzZSA8IGFueSA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBhbnkgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLnV0aWxzLmdldE1vbml0b3JzTGlzdChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2luZG93U3RhdGUoKTogUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgR2V0V2luZG93U3RhdGVSZXN1bHQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldFdpbmRvd1N0YXRlKGlkLCByZXNvbHZlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q3VycmVudEluZm8oKTogUHJvbWlzZSA8IE93V2luZG93SW5mbyA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQud2luZG93KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2J0YWluKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gfCBudWxsID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNiID0gcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICYmIHJlcy53aW5kb3cgJiYgcmVzLndpbmRvdy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gcmVzLndpbmRvdy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSByZXMud2luZG93Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy53aW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm9idGFpbkRlY2xhcmVkV2luZG93KHRoaXMuX25hbWUsIGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBhc3N1cmVPYnRhaW5lZCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5vYnRhaW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW50ZXJuYWxDbG9zZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2UoaWQsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgVGltZXJEZWxlZ2F0ZSB7XHJcbiAgICBvblRpbWVyKGlkPzogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNsYXNzIFRpbWVyIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBfdGltZXJJZDogbnVtYmVyfG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9kZWxlZ2F0ZTogVGltZXJEZWxlZ2F0ZTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd2FpdChpbnRlcnZhbEluTVM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBpbnRlcnZhbEluTVMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogVGltZXJEZWxlZ2F0ZSwgaWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RhcnQoaW50ZXJ2YWxJbk1TOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IDxudW1iZXI+c2V0VGltZW91dCh0aGlzLmhhbmRsZVRpbWVyRXZlbnQsIGludGVydmFsSW5NUyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZXJJZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcklkKTtcclxuICAgICAgICB0aGlzLl90aW1lcklkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgaGFuZGxlVGltZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLl90aW1lcklkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vblRpbWVyKHRoaXMuX2lkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPV0dhbWVzIH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LWdhbWVzJztcclxuaW1wb3J0IHsgT1dHYW1lTGlzdGVuZXIgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctZ2FtZS1saXN0ZW5lcic7XHJcbmltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcbmltcG9ydCB7IE9XR2FtZXNFdmVudHMgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctZ2FtZXMtZXZlbnRzJztcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuLi8uLi9vZGstdHMvZGF0YWJhc2UnO1xyXG5pbXBvcnQgUnVubmluZ0dhbWVJbmZvID0gb3ZlcndvbGYuZ2FtZXMuUnVubmluZ0dhbWVJbmZvO1xyXG5pbXBvcnQgeyB3aW5kb3dOYW1lcywgcmFpbmJvd0NsYXNzSWQsIGludGVyZXN0aW5nRmVhdHVyZXMyIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuXHJcbmxldCBnYW1lTW9kZTogc3RyaW5nLCBnYW1lU3RhdHVzOiBzdHJpbmcsIGN1cnJlbnRXaW5kb3c6IHN0cmluZztcclxuXHJcbmZ1bmN0aW9uIGxvZ0xpbmUodHlwZTogc3RyaW5nLCBsb2c6IHN0cmluZywgZGF0YSkge1xyXG4gICAgY29uc3QgbG9nTGluZSA9ICdcIicgKyBsb2cgKyAnXCI6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnbG9nJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ0xpbmUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihsb2dMaW5lKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dhcm4nKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGxvZ0xpbmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUaGUgYmFja2dyb3VuZCBjb250cm9sbGVyIGhvbGRzIGFsbCBvZiB0aGUgYXBwJ3MgYmFja2dyb3VuZCBsb2dpYyAtIGhlbmNlIGl0cyBuYW1lLiBpdCBoYXNcclxuLy8gbWFueSBwb3NzaWJsZSB1c2UgY2FzZXMsIGZvciBleGFtcGxlIHNoYXJpbmcgZGF0YSBiZXR3ZWVuIHdpbmRvd3MsIG9yLCBpbiBvdXIgY2FzZSxcclxuLy8gbWFuYWdpbmcgd2hpY2ggd2luZG93IGlzIGN1cnJlbnRseSBwcmVzZW50ZWQgdG8gdGhlIHVzZXIuIFRvIHRoYXQgZW5kLCBpdCBob2xkcyBhIGRpY3Rpb25hcnlcclxuLy8gb2YgdGhlIHdpbmRvd3MgYXZhaWxhYmxlIGluIHRoZSBhcHAuXHJcbi8vIE91ciBiYWNrZ3JvdW5kIGNvbnRyb2xsZXIgaW1wbGVtZW50cyB0aGUgU2luZ2xldG9uIGRlc2lnbiBwYXR0ZXJuLCBzaW5jZSBvbmx5IG9uZVxyXG4vLyBpbnN0YW5jZSBvZiBpdCBzaG91bGQgZXhpc3QuXHJcbmNsYXNzIEJhY2tncm91bmRDb250cm9sbGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQmFja2dyb3VuZENvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF93aW5kb3dzID0ge307XHJcbiAgICBwcml2YXRlIF9yYWluYm93R2FtZUxpc3RlbmVyOiBPV0dhbWVMaXN0ZW5lcjtcclxuICAgIHByaXZhdGUgX3JhaW5ib3dHYW1lRXZlbnRzTGlzdGVuZXI6IE9XR2FtZXNFdmVudHM7XHJcbiAgICBwcml2YXRlIF9ldmVudHNMb2c6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfaW5mb0xvZzogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFBvcHVsYXRpbmcgdGhlIGJhY2tncm91bmQgY29udHJvbGxlcidzIHdpbmRvdyBkaWN0aW9uYXJ5XHJcbiAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5kZXNrdG9wXSA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5kZXNrdG9wKTtcclxuICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0gPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuaW5HYW1lKTtcclxuICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluTG9iYnldID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWVzLmluTG9iYnkpO1xyXG4gICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuc3RhdGlzdGljc10gPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkdhbWVEZXNrdG9wT25seV0gPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuaW5HYW1lRGVza3RvcE9ubHkpO1xyXG4gICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XSA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHkpO1xyXG4gICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuc3RhdGlzdGljc0Rlc2t0b3BPbmx5XSA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzRGVza3RvcE9ubHkpO1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiBhIHJhaW5ib3cgZ2FtZSBpcyBzdGFydGVkIG9yIGlzIGVuZGVkLCB0b2dnbGUgdGhlIGFwcCdzIHdpbmRvd3NcclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUxpc3RlbmVyID0gbmV3IE9XR2FtZUxpc3RlbmVyKHtcclxuICAgICAgICAgICAgb25HYW1lU3RhcnRlZDogdGhpcy50b2dnbGVXaW5kb3dzLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG9uR2FtZUVuZGVkOiB0aGlzLnRvZ2dsZVdpbmRvd3MuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUV2ZW50c0xpc3RlbmVyID0gbmV3IE9XR2FtZXNFdmVudHMoe1xyXG4gICAgICAgICAgICBvbkluZm9VcGRhdGVzOiB0aGlzLm9uSW5mb1VwZGF0ZXMuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgb25OZXdFdmVudHM6IHRoaXMub25OZXdFdmVudHMuYmluZCh0aGlzKVxyXG4gICAgICAgIH0sIGludGVyZXN0aW5nRmVhdHVyZXMyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlSURCKCd3ZWVrcycsICd3ZWVrJywgMzcpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YWJhc2UuY3JlYXRlSURCKCdkYXlzJywgJ2RhdGUnLCAzOCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YWJhc2UuY3JlYXRlSURCKCdtYXRjaGVzJywgJ3RpbWVTdGFtcCcsIDM5LCBbJ3RpbWVTdGFtcEluZGV4JywgJ21hdGNoSWQnLCAnZ2FtZU1vZGUnXSkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YWJhc2UuaW5pdEFsbElEQigpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW1wbGVtZW50aW5nIHRoZSBTaW5nbGV0b24gZGVzaWduIHBhdHRlcm5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogQmFja2dyb3VuZENvbnRyb2xsZXIge1xyXG4gICAgICAgIGlmICghQmFja2dyb3VuZENvbnRyb2xsZXIuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEJhY2tncm91bmRDb250cm9sbGVyLl9pbnN0YW5jZSA9IG5ldyBCYWNrZ3JvdW5kQ29udHJvbGxlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEJhY2tncm91bmRDb250cm9sbGVyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIHJ1bm5pbmcgdGhlIGFwcCwgc3RhcnQgbGlzdGVuaW5nIHRvIGdhbWVzJyBzdGF0dXMgYW5kIGRlY2lkZSB3aGljaCB3aW5kb3cgc2hvdWxkXHJcbiAgICAvLyBiZSBsYXVuY2hlZCBmaXJzdCwgYmFzZWQgb24gd2hldGhlciByYWluYm93IGlzIGN1cnJlbnRseSBydW5uaW5nXHJcbiAgICBwdWJsaWMgYXN5bmMgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuX3JhaW5ib3dHYW1lRXZlbnRzTGlzdGVuZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUxpc3RlbmVyLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJXaW5kb3cgPSBhd2FpdCB0aGlzLmlzUmFpbmJvd1J1bm5pbmcoKSA/IG51bGwgOiB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmRlc2t0b3BdLnJlc3RvcmUoKTtcclxuICAgICAgICBpZiAoY3VycldpbmRvdykge1xyXG4gICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnb3BlbiB3aW5kb3cnLCBjdXJyV2luZG93KTtcclxuICAgICAgICAgICAgY3VycmVudFdpbmRvdyA9IGN1cnJXaW5kb3c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlV2luZG93cyhpbmZvKSB7XHJcbiAgICAgICAgaWYgKCFpbmZvIHx8ICF0aGlzLmlzR2FtZVJhaW5ib3coaW5mbykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZm8uaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuZGVza3RvcF0uY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5kZXNrdG9wKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLnN0YXRpc3RpY3NdLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5HYW1lRGVza3RvcE9ubHldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLnN0YXRpc3RpY3NEZXNrdG9wT25seV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5kZXNrdG9wXS5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnb3BlbiB3aW5kb3cnLCB3aW5kb3dOYW1lcy5kZXNrdG9wKTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3cgPSAnZGVza3RvcCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaXNSYWluYm93UnVubmluZygpOiBQcm9taXNlIDwgYm9vbGVhbiA+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgT1dHYW1lcy5nZXRSdW5uaW5nR2FtZUluZm8oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluZm8gJiYgaW5mby5pc1J1bm5pbmcgJiYgdGhpcy5pc0dhbWVSYWluYm93KGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElkZW50aWZ5IHdoZXRoZXIgdGhlIFJ1bm5pbmdHYW1lSW5mbyBvYmplY3Qgd2UgaGF2ZSByZWZlcmVuY2VzIFJhaW5ib3dcclxuICAgIHByaXZhdGUgaXNHYW1lUmFpbmJvdyhpbmZvOiBSdW5uaW5nR2FtZUluZm8pIHtcclxuICAgICAgICByZXR1cm4gaW5mby5jbGFzc0lkID09PSByYWluYm93Q2xhc3NJZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSW5mb1VwZGF0ZXMoaW5mbykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKCdtYXRjaF9pbmZvJyBpbiBpbmZvICYmICdnYW1lX21vZGUnIGluIGluZm8ubWF0Y2hfaW5mbykgfHxcclxuICAgICAgICAgICAgKCdnYW1lX2luZm8nIGluIGluZm8gJiYgJ3BoYXNlJyBpbiBpbmZvLmdhbWVfaW5mbyAmJiBpbmZvLmdhbWVfaW5mby5waGFzZSA9PT0gJ2xvYmJ5JykgfHxcclxuICAgICAgICAgICAgKCdyb3VuZCcgaW4gaW5mbyAmJiAnbnVtYmVyJyBpbiBpbmZvLnJvdW5kICYmIGluZm8ucm91bmQgPT09IG51bGwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLm1hdGNoX2luZm8pIHtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlID0gaW5mby5tYXRjaF9pbmZvLmdhbWVfbW9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGUgIT09ICdOT05FJyAmJlxyXG4gICAgICAgICAgICAgICAgISgnZ2FtZV9pbmZvJyBpbiBpbmZvICYmICdwaGFzZScgaW4gaW5mby5nYW1lX2luZm8gJiYgaW5mby5nYW1lX2luZm8ucGhhc2UgPT09ICdsb2JieScpICYmXHJcbiAgICAgICAgICAgICAgICAhKCdyb3VuZCcgaW4gaW5mbyAmJiAnbnVtYmVyJyBpbiBpbmZvLnJvdW5kICYmIGluZm8ucm91bmQgPT09IG51bGwpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXR1cyA9ICdzZWFyY2hpbmcnO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMgPSAnbG9iYnknO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieV0ucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnNldHRpbmdzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZSh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5nc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ2Nsb3NlIHdpbmRvdycsIHdpbmRvd05hbWVzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnN0YXRpc3RpY3NEZXNrdG9wT25seSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdvcGVuIHdpbmRvdycsIHdpbmRvd05hbWVzLmluTG9iYnkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5HYW1lXS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XS5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ2Nsb3NlIHdpbmRvdycsIHdpbmRvd05hbWVzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnN0YXRpc3RpY3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ2Nsb3NlIHdpbmRvdycsIHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc3RhdGlzdGljc0Rlc2t0b3BPbmx5LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5nc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ29wZW4gd2luZG93Jywgd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCdyb3VuZCcgaW4gaW5mbyAmJiBpbmZvLnJvdW5kLm51bWJlciAhPSBudWxsICYmIGdhbWVTdGF0dXMgIT09ICdpbl9nYW1lJykge1xyXG4gICAgICAgICAgICBnYW1lU3RhdHVzID0gJ2luX2dhbWUnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSA9PT0gJ1wiMFwiJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0ucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnN0YXRpc3RpY3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5nc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZSh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzRGVza3RvcE9ubHksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc3RhdGlzdGljc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5pbkxvYmJ5ICsgJyArICcgKyB3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHkpO1xyXG4gICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ29wZW4gd2luZG93Jywgd2luZG93TmFtZXMuaW5HYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkdhbWVEZXNrdG9wT25seV0ucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5ICsgJyArICcgKyB3aW5kb3dOYW1lcy5pbkxvYmJ5KTtcclxuICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdvcGVuIHdpbmRvdycsIHdpbmRvd05hbWVzLmluR2FtZURlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9nTGluZSgnbG9nJywgJ2luZm9FdmVudCcsIGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25OZXdFdmVudHMoZXZlbnRJbmZvKSB7XHJcbiAgICAgICAgbG9nTGluZSgnbG9nJywgJ2luZm9FdmVudCcsIGV2ZW50SW5mbyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJhY2tncm91bmRDb250cm9sbGVyLmluc3RhbmNlKCkucnVuKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=