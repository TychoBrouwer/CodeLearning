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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/statistics/statistics.ts");
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

/***/ "./src/odk-ts/Database.ts":
/*!********************************!*\
  !*** ./src/odk-ts/Database.ts ***!
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

/***/ "./src/public/statistics/statistics.ts":
/*!*********************************************!*\
  !*** ./src/public/statistics/statistics.ts ***!
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
const AppWindow_1 = __webpack_require__(/*! ../AppWindow */ "./src/public/AppWindow.ts");
const ow_hotkeys_1 = __webpack_require__(/*! ../../odk-ts/ow-hotkeys */ "./src/odk-ts/ow-hotkeys.ts");
const ow_window_1 = __webpack_require__(/*! ../../odk-ts/ow-window */ "./src/odk-ts/ow-window.ts");
const controllers_1 = __webpack_require__(/*! ../../odk-ts/controllers */ "./src/odk-ts/controllers.ts");
const localstorage_1 = __webpack_require__(/*! ../../odk-ts/localstorage */ "./src/odk-ts/localstorage.ts");
const Database_1 = __webpack_require__(/*! ../../odk-ts/Database */ "./src/odk-ts/Database.ts");
const consts_1 = __webpack_require__(/*! ../../consts */ "./src/consts.ts");
const gameList = document.getElementById('gameList');
const loadMore = document.getElementById('loadMore');
const settingDivs = document.querySelectorAll('.settingOptions');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
let owWindow, mode, displayedGames = { begin: 0, end: 0 }, moreGames, showMoreGames, userTime = { year: 0, month: 0, unixDate: 0, unixEndDate: 0 };
const controllers = new controllers_1.Controllers();
const localstorage = new localstorage_1.Localstorage();
const database = new Database_1.Database();
const promise1 = localstorage.initiateLocalStorage()
    .then(() => controllers.setTheme());
addEventListener('storage', () => {
    controllers.setTheme();
});
function kd(a, b) {
    if (b !== 0) {
        return (a / b).toFixed(2);
    }
    else {
        return a.toFixed(2);
    }
}
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}
function loopiloop(array, key, className, displayName) {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(`badge-${key}-${array[i]}`).innerHTML += `
            <div class="badge-${className} badge">
                ${displayName}
            <div>
        `;
    }
}
class Statistics extends AppWindow_1.AppWindow {
    constructor() {
        if (mode === 'desktop') {
            super(consts_1.windowNames.statisticsDesktopOnly, 'settings_desktop', 'statistics_desktop');
            owWindow.scaleWindow('statistics_desktop', 1600, 900, JSON.parse(localStorage.scaleSlider));
        }
        else {
            super(consts_1.windowNames.statistics, 'settings_in_game', 'statistics_in_game');
            const promise = owWindow.scaleWindow('statistics_in_game', 1600, 900, JSON.parse(localStorage.scaleSlider))
                .then(() => owWindow.changeWindowLocation('center-center', 'statistics_in_game'));
        }
        owWindow.restore();
        this.setToggleHotkeyBehavior();
        const endDate = Math.round(new Date().getTime() / 1000);
        displayedGames.begin = 0;
        displayedGames.end = 10;
        this.printGameList(null, endDate, 0, 10, displayedGames.end);
        this.setDateSelector();
        this.setDisplayMoreGames();
    }
    static instance() {
        if (!this._instance) {
            this._instance = new Statistics();
        }
        return this._instance;
    }
    printGameList(beginDate, endDate, begin, end, displayedGamesEnd) {
        const keyRangeIDB = {
            begin: beginDate,
            end: endDate,
        };
        const promise = this.getGames(keyRangeIDB, begin, end)
            .then(games => {
            moreGames = false;
            showMoreGames = false;
            for (let i = 0; i < Object.keys(games).length; i++) {
                const game = Object.values(games).reverse()[i];
                if (i <= (displayedGamesEnd - 1)) {
                    const self = game.self;
                    const matchKD = kd(game.matchStats[self.id].kills, game.matchStats[self.id].deaths);
                    let gameMode, outcome, mapImg;
                    if (game.gameMode === 'MATCHMAKING_PVP') {
                        gameMode = 'casual';
                    }
                    else if (game.gameMode === 'MATCHMAKING_PVP_RANKED') {
                        gameMode = 'ranked';
                    }
                    else if (game.gameMode === 'MATCHMAKING_PVP_UNRANKED') {
                        gameMode = 'unranked';
                    }
                    else if (game.gameMode === 'CUSTOMGAME_PVP_DEDICATED') {
                        gameMode = 'custom';
                    }
                    if (game.matchOutcome) {
                        outcome = game.matchOutcome;
                    }
                    else {
                        outcome = 'left game';
                    }
                    if (game.map) {
                        mapImg = '<img class="map-img" src="/img/maps/' + game.map.toLowerCase() + '.webp">';
                    }
                    else {
                        mapImg = '<div>?</div>';
                    }
                    gameList.innerHTML += `
                        <div id="${game.timeStamp}" class="game-summary ${game.matchOutcome} md-whiteframe-1dp">
                            <div class="left">
                                ${mapImg}
                            </div>
                            <div class="right">
                                <div class="match-outcome ${game.matchOutcome}">
                                    <p>${outcome}</p>
                                </div>
                                <div class="game-stats">
                                    <p>K/D: <span>${matchKD}</span></p>
                                    <p>Gamemode: <span>${gameMode}</span></p>
                                </div>
                            </div>
                        </div>`;
                    console.log(`display game "${game.timeStamp}" "${game.matchOutcome}"`);
                }
                else {
                    moreGames = true;
                }
            }
        })
            .then(() => {
            this.setDetailedGamesListener();
            if (document.querySelectorAll('.game-summary')[0]) {
                this.displayDetailedStats(document.querySelectorAll('.game-summary')[0]);
                document.getElementById('blue-player-table').style.height = 'auto';
                document.getElementById('orange-player-table').style.height = 'auto';
            }
            else {
                document.getElementById('blue-player-table').innerHTML = '';
                document.getElementById('blue-player-table').style.height = '205px';
                document.getElementById('orange-player-table').innerHTML = '';
                document.getElementById('orange-player-table').style.height = '205px';
                document.getElementById('right-roundstats').innerHTML = '';
            }
            if (moreGames === true) {
                loadMore.innerHTML = '<p>More games to display</p><p>Double click to display more</p>';
            }
            else {
                loadMore.innerHTML = '<p>No more games to display</p><p>Change month for more games</p>';
            }
        });
    }
    getGames(keyRangeIDB, begin, end) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const promise = database.readFromIDBRange('matches', 'timeStampIndex', keyRangeIDB.begin, keyRangeIDB.end, begin, end)
                    .then(result => {
                    resolve(result);
                });
            }));
        });
    }
    setDateSelector() {
        const that = this;
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
            let current;
            if (settingDiv.id === 'setYear') {
                userTime.year = new Date().getFullYear();
                current = userTime.year.toString();
                for (let i = 0; i < 5; i++) {
                    const year = new Date().getFullYear() - i;
                    settingDiv.querySelector('.custom-options').innerHTML += `<span class="custom-option" settingMode="year" value='${year}'>${year}</span>`;
                    if (year === 2021) {
                        break;
                    }
                }
            }
            if (settingDiv.id === 'setMonth') {
                userTime.month = new Date().getMonth();
                current = monthNames[userTime.month];
            }
            settingDiv.querySelector('.custom-select__trigger span').innerHTML = current;
            userTime.unixDate = Math.round(new Date(userTime.year + "." + (monthNames[userTime.month])).getTime() / 1000);
            if (userTime.month !== 11) {
                userTime.unixEndDate = Math.round(new Date(userTime.year + "." + (monthNames[userTime.month + 1])).getTime() / 1000);
            }
            else {
                userTime.unixEndDate = Math.round(new Date([userTime.year - 1] + "." + (monthNames[0])).getTime() / 1000);
            }
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
        for (const option of document.querySelectorAll(".custom-option")) {
            option.addEventListener('click', function () {
                var _a;
                const value = option.getAttribute('value');
                const mode = option.getAttribute('settingMode');
                gameList.innerHTML = '';
                if (!option.classList.contains('selected')) {
                    (_a = option.parentNode.querySelector('.custom-option.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('selected');
                    option.classList.add('selected');
                    option.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
                }
                userTime[mode] = Number(value);
                userTime.unixDate = Math.round(new Date(userTime.year + "." + (monthNames[userTime.month])).getTime() / 1000);
                if (userTime.month !== 11) {
                    userTime.unixEndDate = Math.round(new Date(userTime.year + "." + (monthNames[userTime.month + 1])).getTime() / 1000);
                }
                else {
                    userTime.unixEndDate = Math.round(new Date([userTime.year - 1] + "." + (monthNames[0])).getTime() / 1000);
                }
                displayedGames.begin = 0;
                displayedGames.end = 10;
                that.printGameList(userTime.unixDate, userTime.unixEndDate, 0, 10, displayedGames.end);
            });
        }
    }
    setDisplayMoreGames() {
        loadMore.addEventListener('click', () => {
            if (showMoreGames === false || (loadMore.classList.contains('more-active') && moreGames === false)) {
                if (!loadMore.classList.contains('more-active')) {
                    loadMore.classList.add('more-active');
                }
                showMoreGames = true;
            }
            else {
                displayedGames.begin = displayedGames.end;
                displayedGames.end = displayedGames.end + 10;
                const begin = displayedGames.begin + 1;
                const end = displayedGames.end + 1;
                this.printGameList(userTime.unixDate, userTime.unixEndDate, begin, end, 10);
                loadMore.classList.remove('more-active');
                showMoreGames = false;
            }
        });
    }
    setDetailedGamesListener() {
        let gameSummary = document.getElementsByClassName('game-summary');
        const that = this;
        for (let i = 0; i < gameSummary.length; i++) {
            gameSummary[i].addEventListener('click', function () {
                that.displayDetailedStats(this);
            });
        }
    }
    displayDetailedStats(that) {
        const keyIDB = Number(that.id);
        document.getElementById('right-roundstats').innerHTML = '';
        const promise = database.readFromIDB('matches', keyIDB)
            .then(match => {
            const owId = match.self.id;
            let matchesScoreboardHTMLBlue = '', matchesScoreboardHTMLOrange = '', matchesRoundStatsHTMLHeader = '';
            for (const key in match.matchStats) {
                if (match.matchStats.hasOwnProperty(key)) {
                    let temp;
                    const elementsRank = document.getElementsByClassName('th-rank');
                    const elementsCountry = document.getElementsByClassName('th-country');
                    if (match.matchStats[key].user) {
                        temp = `
                                <div class="player-tr" id="${key}">
                                    <div class="stat player-rankImg"><img src="/img/ranks/rank${match.matchStats[key].user.rank}.svg" alt="rank"><span>${match.matchStats[key].user.mmr}</span></div>
                                    <div class="stat player-name">${match.matchStats[key].name}</div>
                                    <div class="stat player-country"><img src="https://api.statsdb.net/assets/flags/${match.matchStats[key].user.country}" alt="${match.matchStats[key].user.country}" class="img-country"></div>
                                    <div class="stat player-kills">${match.matchStats[key].kills}</div>
                                    <div class="stat player-deaths">${match.matchStats[key].deaths}</div>
                                    <div class="stat player-kd">${kd(match.matchStats[key].kills, match.matchStats[key].deaths)}</div>
                                    <div class="stat player-kpr">${kd(match.matchStats[key].kills, Object.keys(match.roundStats).length)}</div>
                                    <div class="stat player-score">${match.matchStats[key].score}</div>
                                </div>`;
                        for (let i = 0; i < elementsRank.length; i++) {
                            elementsRank[i].style.display = 'block';
                            elementsCountry[i].style.display = 'block';
                        }
                    }
                    else {
                        temp = `
                                <div class="player-tr" id="${key}">
                                    <div class="stat player-name">${match.matchStats[key].name}</div>
                                    <div class="stat player-kills">${match.matchStats[key].kills}</div>
                                    <div class="stat player-deaths">${match.matchStats[key].deaths}</div>
                                    <div class="stat player-kd">${kd(match.matchStats[key].kills, match.matchStats[key].deaths)}</div>
                                    <div class="stat player-kpr">${kd(match.matchStats[key].kills, Object.keys(match.roundStats).length)}</div>
                                    <div class="stat player-score">${match.matchStats[key].score}</div>
                                </div>`;
                        for (let i = 0; i < elementsRank.length; i++) {
                            elementsRank[i].style.display = 'none';
                            elementsCountry[i].style.display = 'none';
                        }
                    }
                    if (match.matchStats[key].team === "Orange") {
                        matchesScoreboardHTMLOrange += temp;
                    }
                    else {
                        matchesScoreboardHTMLBlue += temp;
                    }
                }
            }
            document.getElementById('orange-player-table').innerHTML = matchesScoreboardHTMLOrange;
            document.getElementById('blue-player-table').innerHTML = matchesScoreboardHTMLBlue;
            if (match.self.userTeam === 'Orange') {
                document.getElementById('blue-table').before(document.getElementById('orange-table'));
            }
            else {
                document.getElementById('orange-table').before(document.getElementById('blue-table'));
            }
            for (const key in match.roundStats) {
                if (match.roundStats.hasOwnProperty(key)) {
                    let matchesRoundStatsHTMLOrange = '', matchesRoundStatsHTMLBlue = '', killsArray = [], aceBadge = false, spectating = [], survided = [], died = [], roundOutcome;
                    if (typeof match.roundStats[key].roundOutcome != 'undefined') {
                        roundOutcome = match.roundStats[key].roundOutcome;
                    }
                    else {
                        roundOutcome = 'unknown';
                    }
                    matchesRoundStatsHTMLHeader = `
                            <div id="round-${key}" class="rounds-stats">
                                <h1>Round<span>${key}</span></h1>
                                <p class="round-${roundOutcome}">${roundOutcome.toUpperCase()}</p>
                                <div id="player-round-stats-${key}" class="round-stats"></div>
                            </div>`;
                    document.getElementById('right-roundstats').innerHTML += matchesRoundStatsHTMLHeader;
                    for (const player in match.roundStats[key]) {
                        if (match.roundStats[key].hasOwnProperty(player)) {
                            if (player !== 'roundOutcome') {
                                let roundOperator = match.roundStats[key][player].operator, operatorImg;
                                killsArray.push(match.roundStats[key][player].kills);
                                if (roundOperator === 0) {
                                    operatorImg = 'https://cdn3.iconfinder.com/data/icons/account-1/64/Account-06-512.png';
                                }
                                else {
                                    operatorImg = 'https://api.statsdb.net/r6/assets/operators/' + consts_1.operators[roundOperator].operator_name.toLowerCase() + '/badge';
                                }
                                if (match.roundStats[key][player].kills === 5) {
                                    aceBadge = player;
                                }
                                if (match.roundStats[key][player].deaths === 0 && match.roundStats[key][player].score === 0) {
                                    spectating.push(player);
                                }
                                if (match.roundStats[key][player].deaths === 0 && match.roundStats[key][player].score > 0) {
                                    survided.push(player);
                                }
                                if (match.roundStats[key][player].deaths > 0) {
                                    died.push(player);
                                }
                                const playerRound = `
                                        <div id="player-${player}" class="player-round-stats">
                                            <img src="${operatorImg}">
                                            <div class="player-stats">
                                                <div class="stat-div">
                                                    <div><span>${match.roundStats[key][player].name}</span></div>
                                                    <div id="badge-${key}-${player}" class="badge-container">

                                                    </div>
                                                </div>
                                                <div class="stat-div">
                                                    <div>kills: <span>${match.roundStats[key][player].kills}</span></div>
                                                    <div>deaths: <span>${match.roundStats[key][player].deaths}</span></div>
                                                    <div>k/d: <span>${kd(match.roundStats[key][player].kills, match.roundStats[key][player].deaths)}</span></div>
                                                    <div>score: <span>${match.roundStats[key][player].score}</span></div>
                                                </div>
                                            </div>
                                        </div>`;
                                if (match.roundStats[key][player].team === 'Orange') {
                                    matchesRoundStatsHTMLOrange += playerRound;
                                }
                                else {
                                    matchesRoundStatsHTMLBlue += playerRound;
                                }
                            }
                        }
                    }
                    if (match.self.userTeam === 'Orange') {
                        document.getElementById('player-round-stats-' + key).innerHTML = matchesRoundStatsHTMLOrange + matchesRoundStatsHTMLBlue;
                    }
                    else {
                        document.getElementById('player-round-stats-' + key).innerHTML = matchesRoundStatsHTMLBlue + matchesRoundStatsHTMLOrange;
                    }
                    var indexes = getAllIndexes(killsArray, killsArray.reduce((a, b) => { return Math.max(a, b); }));
                    loopiloop(spectating, key, 'spectating', 'Spectating');
                    loopiloop(survided, key, 'survided', 'Survided');
                    loopiloop(died, key, 'died', 'Died');
                    if (aceBadge) {
                        document.getElementById(`badge-${key}-${aceBadge}`).innerHTML += `
                                <div class="badge-ace badge">
                                    ACE
                                <div>
                            `;
                    }
                    loopiloop(indexes, key, 'kills', 'K/D');
                }
            }
        });
    }
    setToggleHotkeyBehavior() {
        const toggleInGameWindow = (hotkeyResult) => __awaiter(this, void 0, void 0, function* () {
            console.log(`pressed hotkey "${hotkeyResult.featureId}"`);
            if (mode !== 'desktop') {
                const inGameState = yield this.getWindowState();
                if (inGameState.window_state === 'normal' || inGameState.window_state === 'maximized') {
                    this.currWindow.minimize();
                }
                else if (inGameState.window_state === 'minimized' || inGameState.window_state === 'closed') {
                    this.currWindow.restore();
                }
                owWindow.changeWindowLocation('center-center', 'statistics_in_game');
            }
        });
        ow_hotkeys_1.OWHotkeys.onHotkeyDown(consts_1.hotkeys.toggle, toggleInGameWindow);
    }
}
overwolf.windows.getOpenWindows(data => {
    mode = Object.keys(data)[1];
    if (mode === 'desktop') {
        owWindow = new ow_window_1.OWWindow(consts_1.windowNames.statisticsDesktopOnly);
    }
    else {
        owWindow = new ow_window_1.OWWindow(consts_1.windowNames.statistics);
    }
    Statistics.instance();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL0RhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvY29udHJvbGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy1ob3RrZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctd2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvQXBwV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDO0FBc2F6Qix3Q0FBYztBQXBhbEIsTUFBTSxvQkFBb0IsR0FBRztJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0lBQ1osUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsSUFBSTtDQUNQLENBQUM7QUE0WkUsb0RBQW9CO0FBMVp4QixNQUFNLG9CQUFvQixHQUFHO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsT0FBTztJQUNQLFlBQVk7Q0FDZixDQUFDO0FBc1pFLG9EQUFvQjtBQXBaeEIsTUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFVBQVU7SUFDbkIsTUFBTSxFQUFFLFNBQVM7SUFDakIsa0JBQWtCLEVBQUUsdUJBQXVCO0lBQzNDLGlCQUFpQixFQUFFLHNCQUFzQjtJQUN6QyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLG1CQUFtQixFQUFFLGtCQUFrQjtJQUN2QyxVQUFVLEVBQUUsb0JBQW9CO0lBQ2hDLHFCQUFxQixFQUFFLG9CQUFvQjtDQUM5QyxDQUFDO0FBMllFLGtDQUFXO0FBellmLE1BQU0sT0FBTyxHQUFHO0lBQ1osTUFBTSxFQUFFLFVBQVU7Q0FDckIsQ0FBQztBQXdZRSwwQkFBTztBQXRZWCxNQUFNLFlBQVksR0FBRztJQUNqQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQix1QkFBdUI7Q0FDMUIsQ0FBQztBQW1ZRSxvQ0FBWTtBQWpZaEIsTUFBTSxZQUFZLEdBQUc7SUFDakIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0NBQzdCLENBQUM7QUF3WEUsb0NBQVk7QUF0WGhCLE1BQU0sY0FBYyxHQUFHO0lBQ25CLHNCQUFzQixFQUFFO1FBQ3BCLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLE1BQU0sRUFBRSxDQUFDO0tBQ1osRUFBRSxlQUFlLEVBQUU7UUFDaEIsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULElBQUksRUFBRSxDQUFDO1FBQ1AsTUFBTSxFQUFFLENBQUM7S0FDWixFQUFFLHdCQUF3QixFQUFFO1FBQ3pCLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLE1BQU0sRUFBRSxDQUFDO0tBQ1osRUFBRSx3QkFBd0IsRUFBRTtRQUN6QixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUM7UUFDUCxNQUFNLEVBQUUsQ0FBQztLQUNaO0NBQ0o7QUFrV0csd0NBQWM7QUFoV2xCLE1BQU0sWUFBWSxHQUFHO0lBQ2pCLENBQUMsRUFBQyxTQUFTO0lBQ1gsQ0FBQyxFQUFDLFNBQVM7SUFDWCxDQUFDLEVBQUMsU0FBUztJQUNYLENBQUMsRUFBQyxTQUFTO0lBQ1gsRUFBRSxFQUFDLFNBQVM7SUFDWixFQUFFLEVBQUMsU0FBUztJQUNaLEVBQUUsRUFBQyxTQUFTO0lBQ1osRUFBRSxFQUFDLFNBQVM7SUFDWixFQUFFLEVBQUMsU0FBUztJQUNaLEVBQUUsRUFBQyxTQUFTO0lBQ1osRUFBRSxFQUFDLFNBQVM7SUFDWixFQUFFLEVBQUMsU0FBUztJQUNaLEVBQUUsRUFBQyxTQUFTO0lBQ1osRUFBRSxFQUFDLFNBQVM7SUFDWixFQUFFLEVBQUMsU0FBUztDQUNmO0FBaVZHLG9DQUFZO0FBL1VoQixNQUFNLFNBQVMsR0FBRztJQUNkLEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFFBQVE7UUFDekIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxVQUFVO1FBQzNCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsS0FBSztRQUN0QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELElBQUksRUFBRTtRQUNGLE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFVBQVU7UUFDM0IsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsVUFBVTtRQUMzQixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLElBQUk7UUFDckIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsWUFBWTtRQUM3QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFNBQVM7UUFDMUIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsUUFBUTtRQUN6QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsVUFBVTtRQUMzQixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsVUFBVTtRQUMzQixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE9BQU87UUFDeEIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxVQUFVO1FBQzNCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsTUFBTTtRQUN2QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE9BQU87UUFDeEIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsTUFBTTtRQUN2QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLEtBQUs7UUFDdEIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxFQUFFLEVBQUU7UUFDQSxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0lBQ0QsQ0FBQyxFQUFFO1FBQ0MsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsU0FBUztRQUMxQixZQUFZLEVBQUUsU0FBUztLQUMxQjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE9BQU87UUFDeEIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsUUFBUTtRQUN6QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE9BQU87UUFDeEIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsTUFBTTtRQUN2QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFFBQVE7UUFDekIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxVQUFVO1FBQzNCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELElBQUksRUFBRTtRQUNGLE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFFBQVE7UUFDekIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsVUFBVTtRQUMzQixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFNBQVM7UUFDMUIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsTUFBTTtRQUN2QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFFBQVE7UUFDekIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFNBQVM7UUFDMUIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLFlBQVksRUFBRSxLQUFLO0tBQ3RCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsT0FBTztRQUN4QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsUUFBUTtRQUN6QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsTUFBTSxFQUFFLEtBQUs7UUFDYixlQUFlLEVBQUUsTUFBTTtRQUN2QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELEdBQUcsRUFBRTtRQUNELE1BQU0sRUFBRSxLQUFLO1FBQ2IsZUFBZSxFQUFFLFFBQVE7UUFDekIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsS0FBSztRQUNiLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLFlBQVksRUFBRSxNQUFNO0tBQ3ZCO0NBQ0osQ0FBQztBQXlDRSw4QkFBUztBQXZDYixNQUFNLFVBQVUsR0FBRztJQUNmLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRTtJQUNMLENBQUMsRUFBRSxFQUFFO0lBQ0wsRUFBRSxFQUFFLEVBQUU7SUFDTixFQUFFLEVBQUUsRUFBRTtJQUNOLEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEVBQUU7SUFDTixFQUFFLEVBQUUsRUFBRTtJQUNOLEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEVBQUU7SUFDTixFQUFFLEVBQUUsRUFBRTtJQUNOLEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEVBQUU7SUFDTixFQUFFLEVBQUUsRUFBRTtJQUNOLEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEVBQUU7SUFDTixFQUFFLEVBQUUsRUFBRTtDQUNUO0FBYUcsZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvYWQseUVBQTJDO0FBRTNDLE1BQWEsUUFBUTtJQUNKLFNBQVMsQ0FBQyxPQUFlLEVBQUUsVUFBa0IsRUFBRSxPQUFlLEVBQUUsT0FBTyxHQUFHLElBQUk7O1lBQ3ZGLE9BQU8sSUFBSSxPQUFPLENBQVEsQ0FBTyxPQUFPLEVBQUUsRUFBRTtnQkFDeEMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRW5ELE9BQU8sQ0FBQyxPQUFPLEdBQUc7b0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQztnQkFFRixPQUFPLENBQUMsZUFBZSxHQUFHLFVBQVMsS0FBVTtvQkFDekMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDMUIsSUFBSSxXQUEyQixDQUFDO29CQUVoQyxJQUFJO3dCQUNBLFdBQVcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQ3hFO29CQUFDLFdBQU07d0JBQ0osTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7d0JBQzdDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNsRDtvQkFFRCxJQUFJLE9BQU8sRUFBRTt3QkFDVCxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNwQixJQUFJO2dDQUNBLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOzZCQUN6Qzs0QkFBQyxXQUFNLEdBQUU7d0JBQ2QsQ0FBQyxDQUFDLENBQUM7cUJBQ047b0JBRUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQUM7UUFDTixDQUFDO0tBQUE7SUFFWSxVQUFVLENBQUMsT0FBZSxFQUFFLFFBQVEsRUFBRSxXQUFvQjs7WUFDbkUsT0FBTyxJQUFJLE9BQU8sQ0FBUSxDQUFPLE9BQU8sRUFBRSxFQUFFO2dCQUN4QyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUUxQyxPQUFPLENBQUMsT0FBTyxHQUFHO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUUzQixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELE9BQU8sQ0FBQyxTQUFTLEdBQUc7b0JBQ2hCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzFCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFaEYsSUFBSSxDQUFDLFdBQVcsRUFBRTt3QkFDZCxNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUUzQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNwQixDQUFDO3dCQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7NEJBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDMUIsQ0FBQztxQkFDSjt5QkFBTSxJQUFJLFdBQVcsRUFBRTt3QkFDcEIsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFFM0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7NEJBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDcEIsQ0FBQzt3QkFFRCxNQUFNLENBQUMsT0FBTyxHQUFHOzRCQUNiLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFCLENBQUM7cUJBQ0o7Z0JBQ0wsQ0FBQztZQUNMLENBQUMsRUFBQztRQUNOLENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxPQUFlLEVBQUUsTUFBdUI7O1lBQzdELE9BQU8sSUFBSSxPQUFPLENBQVEsQ0FBTyxPQUFPLEVBQUUsRUFBRTtnQkFDeEMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFNUMsU0FBUyxDQUFDLE9BQU8sR0FBRztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTdCLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztnQkFFRixTQUFTLENBQUMsU0FBUyxHQUFHO29CQUNsQixNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO29CQUM1QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9FLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRTFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7d0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRTNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQztvQkFFRixPQUFPLENBQUMsU0FBUyxHQUFHO3dCQUNoQixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLEVBQUM7UUFDTixDQUFDO0tBQUE7SUFFWSxnQkFBZ0IsQ0FBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsR0FBVzs7WUFDMUgsT0FBTyxJQUFJLE9BQU8sQ0FBUSxDQUFPLE9BQU8sRUFBRSxFQUFFO2dCQUN4QyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLGFBQTBCLENBQUM7Z0JBRS9CLElBQUksVUFBVSxJQUFJLFFBQVEsRUFBRTtvQkFDeEIsYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUMzRDtxQkFBTSxJQUFJLFVBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDaEMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3REO3FCQUFNLElBQUksQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFO29CQUNoQyxhQUFhLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsU0FBUyxDQUFDLE9BQU8sR0FBRztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTdCLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztnQkFFRixTQUFTLENBQUMsU0FBUyxHQUFHO29CQUNsQixNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO29CQUM1QixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO29CQUM1RSxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRTNFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztvQkFFdEMsT0FBTyxDQUFDLE9BQU8sR0FBRzt3QkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFM0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDO29CQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUc7d0JBQ2hCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBRTlCLElBQUksTUFBTSxFQUFFOzRCQUNSLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dDQUV4QixJQUFJO29DQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ3RCLENBQUMsR0FBRyxLQUFLLENBQUM7aUNBQ2I7Z0NBQUMsV0FBTTtvQ0FDSixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUNBQ25COzZCQUNKO2lDQUFNLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtnQ0FDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUUxRSxDQUFDLEVBQUUsQ0FBQztnQ0FDSixDQUFDLEVBQUUsQ0FBQzs2QkFDUDtpQ0FBTSxJQUFJLENBQUMsTUFBTSxFQUFFO2dDQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ25COzRCQUVELElBQUk7Z0NBQ0EsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDOzZCQUNyQjs0QkFBQyxXQUFNLEdBQUU7eUJBQ2I7NkJBQU07NEJBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUNuQjtvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLEVBQUM7UUFDTixDQUFDO0tBQUE7SUFFWSxVQUFVOztZQUNuQixPQUFPLElBQUksT0FBTyxDQUFRLENBQU8sT0FBTyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sS0FBSyxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sY0FBYyxHQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLE1BQU0sY0FBYyxHQUFRLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFFaEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztnQkFDOUcsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUU5RixJQUFJLGFBQWEsR0FBUSxFQUFFLENBQUM7Z0JBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hCLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQWMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pFO2dCQUNELGFBQWEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUVqQyxJQUFJLFlBQVksR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLFlBQVksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUUvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUFDO1FBQ04sQ0FBQztLQUFBO0lBRVksa0JBQWtCOztZQUMzQixPQUFPLElBQUksT0FBTyxDQUFRLENBQU8sT0FBTyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sS0FBSyxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzlCLE1BQU0sY0FBYyxHQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLE1BQU0sY0FBYyxHQUFRLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFFaEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztnQkFDOUcsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM5RixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFFOUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO3FCQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ2YsSUFBSSxXQUFXLEdBQVE7d0JBQ25CLFNBQVMsRUFBRzs0QkFDUixPQUFPLEVBQUcsQ0FBQzs0QkFDWCxRQUFRLEVBQUcsQ0FBQzs0QkFDWixRQUFRLEVBQUcsQ0FBQzs0QkFDWixNQUFNLEVBQUcsQ0FBQzs0QkFDVixJQUFJLEVBQUcsR0FBRzs0QkFDVixJQUFJLEVBQUcsR0FBRzs0QkFDVixrQkFBa0IsRUFBRyxRQUFROzRCQUM3QixrQkFBa0IsRUFBRyxRQUFRO3lCQUNoQzt3QkFDRCxRQUFRLEVBQUc7NEJBQ1AsT0FBTyxFQUFHLENBQUM7NEJBQ1gsUUFBUSxFQUFHLENBQUM7NEJBQ1osUUFBUSxFQUFHLENBQUM7NEJBQ1osTUFBTSxFQUFHLENBQUM7NEJBQ1YsSUFBSSxFQUFHLEdBQUc7NEJBQ1YsSUFBSSxFQUFHLEdBQUc7NEJBQ1Ysa0JBQWtCLEVBQUcsUUFBUTs0QkFDN0Isa0JBQWtCLEVBQUcsUUFBUTt5QkFDaEM7d0JBQ0QsUUFBUSxFQUFHOzRCQUNQLE9BQU8sRUFBRyxDQUFDOzRCQUNYLFFBQVEsRUFBRyxDQUFDOzRCQUNaLFFBQVEsRUFBRyxDQUFDOzRCQUNaLE1BQU0sRUFBRyxDQUFDOzRCQUNWLElBQUksRUFBRyxHQUFHOzRCQUNWLElBQUksRUFBRyxHQUFHOzRCQUNWLGtCQUFrQixFQUFHLFFBQVE7NEJBQzdCLGtCQUFrQixFQUFHLFFBQVE7eUJBQ2hDO3dCQUNELFVBQVUsRUFBRzs0QkFDVCxPQUFPLEVBQUcsQ0FBQzs0QkFDWCxRQUFRLEVBQUcsQ0FBQzs0QkFDWixRQUFRLEVBQUcsQ0FBQzs0QkFDWixNQUFNLEVBQUcsQ0FBQzs0QkFDVixJQUFJLEVBQUcsR0FBRzs0QkFDVixJQUFJLEVBQUcsR0FBRzs0QkFDVixrQkFBa0IsRUFBRyxRQUFROzRCQUM3QixrQkFBa0IsRUFBRyxRQUFRO3lCQUNoQztxQkFDSjtvQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN4QixXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7d0JBQzdKLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQzt3QkFDakssV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO3dCQUN6SixXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUM7d0JBQ2pLLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO3dCQUNoRSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7d0JBQzlELFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO3dCQUNsRSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO3dCQUN2RSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO3dCQUN6RSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO3dCQUNyRSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO3dCQUN6RSxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO3dCQUMzRSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO3dCQUM3RSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO3dCQUN6RSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO3FCQUNoRjtvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDbkMsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUVoQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFOzRCQUN0QixRQUFRLENBQUMsRUFBRSxHQUFHLENB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QUFDLENBQUM7S0FDOUQ7U0FBTTtRQUNILFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsb0JBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNuRDtJQUVELFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzdGF0aXN0aWNzL3N0YXRpc3RpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLnRzXCIpO1xuIiwiY29uc3QgcmFpbmJvd0NsYXNzSWQgPSAxMDgyNjtcclxuXHJcbmNvbnN0IGludGVyZXN0aW5nRmVhdHVyZXMxID0gW1xyXG4gICAgJ2dlcF9pbnRlcm5hbCcsXHJcbiAgICAnZ2FtZV9pbmZvJyxcclxuICAgICdtYXRjaCcsXHJcbiAgICAnbWF0Y2hfaW5mbycsXHJcbiAgICAncm9zdGVyJyxcclxuICAgICdraWxsJyxcclxuICAgICdkZWF0aCcsXHJcbiAgICAnbWUnLFxyXG5dO1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczIgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuXTtcclxuXHJcbmNvbnN0IHdpbmRvd05hbWVzID0ge1xyXG4gICAgZGVza3RvcDogJ2Rlc2t0b3AnLFxyXG4gICAgaW5Mb2JieTogJ2luX2xvYmJ5JyxcclxuICAgIGluR2FtZTogJ2luX2dhbWUnLFxyXG4gICAgaW5Mb2JieURlc2t0b3BPbmx5OiAnaW5fbG9iYnlfZGVza3RvcF9vbmx5JyxcclxuICAgIGluR2FtZURlc2t0b3BPbmx5OiAnaW5fZ2FtZV9kZXNrdG9wX29ubHknLFxyXG4gICAgc2V0dGluZ3M6ICdzZXR0aW5nc19pbl9nYW1lJyxcclxuICAgIHNldHRpbmdzRGVza3RvcE9ubHk6ICdzZXR0aW5nc19kZXNrdG9wJyxcclxuICAgIHN0YXRpc3RpY3M6ICdzdGF0aXN0aWNzX2luX2dhbWUnLFxyXG4gICAgc3RhdGlzdGljc0Rlc2t0b3BPbmx5OiAnc3RhdGlzdGljc19kZXNrdG9wJ1xyXG59O1xyXG5cclxuY29uc3QgaG90a2V5cyA9IHtcclxuICAgIHRvZ2dsZTogJ3Nob3doaWRlJyxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWRSA9IFtcclxuICAgICdPUEVSQVRJT05TJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfTE9ORVdPTEYnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRScsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFX1BBUlRZJyxcclxuXTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWUCA9IFtcclxuICAgICdNQVRDSE1BS0lOR19QVlBfTkVXQ09NRVInLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX0VWRU5UJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9SQU5LRUQnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQJyxcclxuICAgICdDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQnLFxyXG5dO1xyXG5cclxuY29uc3QgZGF0YWJhc2VPYmplY3QgPSB7XHJcbiAgICBNQVRDSE1BS0lOR19QVlBfUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZWFzb25Db2xvcnMgPSB7XHJcbiAgICA2OicjMDA1MGIzJyxcclxuICAgIDc6JyNjYTM2MWMnLFxyXG4gICAgODonIzAwNjU0MycsXHJcbiAgICA5OicjZmZjMTEzJyxcclxuICAgIDEwOicjOTQ5ZjM5JyxcclxuICAgIDExOicjODFhMGMxJyxcclxuICAgIDEyOicjYWE4NTRmJyxcclxuICAgIDEzOicjZDIwMDVhJyxcclxuICAgIDE0OicjMzA0Mzk1JyxcclxuICAgIDE1OicjMTM2MzBjJyxcclxuICAgIDE2OicjMDY5ZGIzJyxcclxuICAgIDE3OicjOTQ2YTk3JyxcclxuICAgIDE4OicjMmI3ZTlhJyxcclxuICAgIDE5OicjNmNhNTExJyxcclxuICAgIDIwOicjZDE0MDA3JyxcclxufVxyXG5cclxuY29uc3Qgb3BlcmF0b3JzID0ge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU2xlZGdlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoxXCJcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhhdGNoZXJcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjFcIlxyXG4gICAgfSxcclxuICAgIDUxMzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MlwiXHJcbiAgICB9LFxyXG4gICAgMTAyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRoZXJtaXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToyXCJcclxuICAgIH0sXHJcbiAgICA3NzA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUd2l0Y2hcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjNcIlxyXG4gICAgfSxcclxuICAgIDEwMjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb250YWduZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6M1wiXHJcbiAgICB9LFxyXG4gICAgMjU5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR2xhelwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NFwiXHJcbiAgICB9LFxyXG4gICAgNTE1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnV6ZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NFwiXHJcbiAgICB9LFxyXG4gICAgMjYwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmxpdHpcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjVcIlxyXG4gICAgfSxcclxuICAgIDUxNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklRXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo1XCJcclxuICAgIH0sXHJcbiAgICAyNjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCdWNrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo2XCJcclxuICAgIH0sXHJcbiAgICAyNjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGFja2JlYXJkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo3XCJcclxuICAgIH0sXHJcbiAgICAyNjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXBpdGFvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo4XCJcclxuICAgIH0sXHJcbiAgICAyNjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJIaWJhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjlcIlxyXG4gICAgfSxcclxuICAgIDI2NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphY2thbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QVwiXHJcbiAgICB9LFxyXG4gICAgMjY2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWWluZ1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QlwiXHJcbiAgICB9LFxyXG4gICAgNTIzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWm9maWFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkNcIlxyXG4gICAgfSxcclxuICAgIDI2ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRva2thZWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpEXCJcclxuICAgIH0sXHJcbiAgICA1MjU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMaW9uXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpFXCJcclxuICAgIH0sXHJcbiAgICA3ODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGaW5rYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6RVwiXHJcbiAgICB9LFxyXG4gICAgMjcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWF2ZXJpY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEwXCJcclxuICAgIH0sXHJcbiAgICAyNzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb21hZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTFcIlxyXG4gICAgfSxcclxuICAgIDUyOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdyaWRsb2NrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMlwiXHJcbiAgICB9LFxyXG4gICAgMjc0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTm9ra1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTNcIlxyXG4gICAgfSxcclxuICAgIDI3Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFtYXJ1XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNlwiXHJcbiAgICB9LFxyXG4gICAgMjc4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FsaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTdcIlxyXG4gICAgfSxcclxuICAgIDI4MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE5XCJcclxuICAgIH0sXHJcbiAgICA3OTA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBY2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjE3XCJcclxuICAgIH0sXHJcbiAgICAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlplcm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIxOjFCXCJcclxuICAgIH0sXHJcbiAgICAxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUmVjcnVpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcInJlY3J1aXRcIlxyXG4gICAgfSxcclxuICAgIDI1Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlNtb2tlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxXCJcclxuICAgIH0sXHJcbiAgICA1MTI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNdXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxXCJcclxuICAgIH0sXHJcbiAgICAyNTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXN0bGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjJcIlxyXG4gICAgfSxcclxuICAgIDc2OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlB1bHNlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoyXCJcclxuICAgIH0sXHJcbiAgICAyNTg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJEb2NcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjNcIlxyXG4gICAgfSxcclxuICAgIDUxNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlJvb2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjNcIlxyXG4gICAgfSxcclxuICAgIDc3MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthcGthblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NFwiXHJcbiAgICB9LFxyXG4gICAgMTAyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRhY2hhbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo0XCJcclxuICAgIH0sXHJcbiAgICA3NzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJKYWdlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NVwiXHJcbiAgICB9LFxyXG4gICAgMTAyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJhbmRpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnJvc3RcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjZcIlxyXG4gICAgfSxcclxuICAgIDUxODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlZhbGt5cmllXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo3XCJcclxuICAgIH0sXHJcbiAgICA1MTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXZlaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo4XCJcclxuICAgIH0sXHJcbiAgICA1MjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJFY2hvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo5XCJcclxuICAgIH0sXHJcbiAgICA1MjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpBXCJcclxuICAgIH0sXHJcbiAgICA1MjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMZXNpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkJcIlxyXG4gICAgfSxcclxuICAgIDI2Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVsYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6Q1wiXHJcbiAgICB9LFxyXG4gICAgNTI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmlnaWxcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkRcIlxyXG4gICAgfSxcclxuICAgIDI3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1hZXN0cm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFsaWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpGXCJcclxuICAgIH0sXHJcbiAgICA1Mjc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDbGFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTBcIlxyXG4gICAgfSxcclxuICAgIDUyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthaWRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjExXCJcclxuICAgIH0sXHJcbiAgICAyNzM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb3p6aWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYXJkZW5cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE0XCJcclxuICAgIH0sXHJcbiAgICAyNzY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHb3lvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNVwiXHJcbiAgICB9LFxyXG4gICAgNTM0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiV2FtYWlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjE3XCJcclxuICAgIH0sXHJcbiAgICAyNzk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJPcnl4XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxOFwiXHJcbiAgICB9LFxyXG4gICAgMjgxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWVsdXNpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxQVwiXHJcbiAgICB9LFxyXG4gICAgMTA0Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFydW5pXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToxN1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByYW5rT2Zmc2V0ID0ge1xyXG4gICAgMDogMCxcclxuICAgIDE6IDIsXHJcbiAgICAyOiAzLFxyXG4gICAgMzogNCxcclxuICAgIDQ6IDUsXHJcbiAgICA1OiA3LFxyXG4gICAgNjogOCxcclxuICAgIDc6IDksXHJcbiAgICA4OiAxMCxcclxuICAgIDk6IDEyLFxyXG4gICAgMTA6IDEzLFxyXG4gICAgMTE6IDE0LFxyXG4gICAgMTI6IDE1LFxyXG4gICAgMTM6IDUwLFxyXG4gICAgMTQ6IDE2LFxyXG4gICAgMTU6IDE3LFxyXG4gICAgMTY6IDE4LFxyXG4gICAgMTc6IDE5LFxyXG4gICAgMTg6IDIwLFxyXG4gICAgMTk6IDIxLFxyXG4gICAgMjA6IDIyLFxyXG4gICAgMjE6IDIyLFxyXG4gICAgMjI6IDIyLFxyXG4gICAgMjM6IDIyLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJhaW5ib3dDbGFzc0lkLFxyXG4gICAgaW50ZXJlc3RpbmdGZWF0dXJlczEsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMixcclxuICAgIHdpbmRvd05hbWVzLFxyXG4gICAgaG90a2V5cyxcclxuICAgIGdhbWVNb2Rlc1BWUCxcclxuICAgIGdhbWVNb2Rlc1BWRSxcclxuICAgIGRhdGFiYXNlT2JqZWN0LFxyXG4gICAgc2Vhc29uQ29sb3JzLFxyXG4gICAgcmFua09mZnNldCxcclxuICAgIG9wZXJhdG9yc1xyXG59XHJcbiIsImltcG9ydCB7IGRhdGFiYXNlT2JqZWN0IH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlSURCKG5hbWVJREI6IHN0cmluZywga2V5UGF0aElEQjogc3RyaW5nLCB2ZXJzaW9uOiBudW1iZXIsIGluZGV4ZXMgPSBudWxsKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInLCB2ZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24oZXZlbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZTogSURCT2JqZWN0U3RvcmU7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKG5hbWVJREIsIHsga2V5UGF0aDoga2V5UGF0aElEQiB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZXZlbnQudGFyZ2V0LnRyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUobmFtZUlEQik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoaW5kZXgsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUob2JqZWN0U3RvcmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHN0b3JlVG9JREIobmFtZUlEQjogc3RyaW5nLCB2YWx1ZUlEQiwgaW5pdGlhdGVJREI6IGJvb2xlYW4pOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiT2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZHdyaXRlJykub2JqZWN0U3RvcmUobmFtZUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbml0aWF0ZUlEQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRiT2JqZWN0U3RvcmUucHV0KHZhbHVlSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhdGVJREIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYk9iamVjdFN0b3JlLmFkZCh2YWx1ZUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZWFkRnJvbUlEQihuYW1lSURCOiBzdHJpbmcsIGtleUlEQjogbnVtYmVyIHwgc3RyaW5nKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGIgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3REYi5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0RGIuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0RGIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGJPYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkb25seScpLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGRiT2JqZWN0U3RvcmUuZ2V0KGtleUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZWFkRnJvbUlEQlJhbmdlKG5hbWVJREI6IHN0cmluZywgaW5kZXg6IHN0cmluZywgYmVnaW5SYW5nZTogc3RyaW5nLCBlbmRSYW5nZTogc3RyaW5nLCBiZWdpbjogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERiID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuICAgICAgICAgICAgbGV0IGtleVJhbmdlVmFsdWU6IElEQktleVJhbmdlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJlZ2luUmFuZ2UgJiYgZW5kUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGtleVJhbmdlVmFsdWUgPSBJREJLZXlSYW5nZS5ib3VuZChiZWdpblJhbmdlLCBlbmRSYW5nZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmVnaW5SYW5nZSAmJiAhZW5kUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGtleVJhbmdlVmFsdWUgPSBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGJlZ2luUmFuZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFiZWdpblJhbmdlICYmIGVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UudXBwZXJCb3VuZChlbmRSYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RGIuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdERiLmVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdERiLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUobmFtZUlEQilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5pbmRleChpbmRleCkub3BlbkN1cnNvcihrZXlSYW5nZVZhbHVlLCAncHJldicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpID0gMCwgaiA9IDAsIHJlc3VsdCA9IG5ldyBPYmplY3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gcmVxdWVzdC5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJlZ2luICE9PSAwICYmIGkgPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKGJlZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gYmVnaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3Vyc29yICYmIGkgPD0gZW5kICYmIGkgPj0gYmVnaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtjdXJzb3IudmFsdWUudGltZVN0YW1wXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY3Vyc29yLnZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGluaXRBbGxJREIoKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RheTogYW55ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3REYXlPZlllYXI6IGFueSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXN0RGF5c09mWWVhcjogYW55ID0gKHRvZGF5IC0gZmlyc3REYXlPZlllYXIpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJXZWVrcyA9IGAke01hdGguY2VpbCgocGFzdERheXNPZlllYXIgKyBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDEpIC8gNyl9LCR7dG9kYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJEYXlzID0gdG9kYXkuZ2V0RGF0ZSgpICsgJywnICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKSArICcsJyArIHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVJREJXZWVrczogYW55ID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlEQldlZWtzW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhYmFzZU9iamVjdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlSURCV2Vla3Mud2VlayA9IGtleUlEQldlZWtzO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbHVlSURCRGF5czogYW55ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhYmFzZU9iamVjdCkpO1xyXG4gICAgICAgICAgICB2YWx1ZUlEQkRheXMuZGF0ZSA9IGtleUlEQkRheXM7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMSA9IHRoaXMuc3RvcmVUb0lEQignd2Vla3MnLCB2YWx1ZUlEQldlZWtzLCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTIgPSB0aGlzLnN0b3JlVG9JREIoJ2RheXMnLCB2YWx1ZUlEQkRheXMsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3Byb21pc2UxLCBwcm9taXNlMl0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzb2x2ZShyZXN1bHQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkaXNwbGF5RGFpbHlXZWVrbHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RheTogYW55ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3REYXlPZlllYXI6IGFueSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXN0RGF5c09mWWVhcjogYW55ID0gKHRvZGF5IC0gZmlyc3REYXlPZlllYXIpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJXZWVrcyA9IGAke01hdGguY2VpbCgocGFzdERheXNPZlllYXIgKyBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDEpIC8gNyl9LCR7dG9kYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJEYXlzID0gdG9kYXkuZ2V0RGF0ZSgpICsgJywnICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKSArICcsJyArIHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2V0dGluZ3MnKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMSA9IHRoaXMucmVhZEZyb21JREIoJ3dlZWtzJywga2V5SURCV2Vla3MpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHRXZWVrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2Vla2x5U3RhdHM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FzdWFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5raWxscyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5kZWF0aHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAud2lucyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAubG9zc2VzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdlZWtseVN0YXRzKS5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTW9kZSA9IHdlZWtseVN0YXRzW29ial07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZGUuZGVhdGhzICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gKChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocykudG9GaXhlZCgyKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSBNYXRoLnJvdW5kKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzICogMzMpICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lTW9kZS5kZWF0aHMgPT09IDAgJiYgZ2FtZU1vZGUua2lsbHMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnSU5GJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMTAwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnMC4wMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAoTWF0aC5yb3VuZChnYW1lTW9kZS53aW5zIC8gKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICogMTAwKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSBnYW1lTW9kZS53bCArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVLRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtd2Vla2x5LXRleHQnKS5pbm5lckhUTUwgPSBwYXJzZUZsb2F0KHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ua2QpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ud2wgKyAnJSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2Vla2x5U3RhdHM6XCIsIHdlZWtseVN0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtseVN0YXRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMiA9IHRoaXMucmVhZEZyb21JREIoJ2RheXMnLCBrZXlJREJEYXlzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0RGF5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhaWx5U3RhdHM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2VuZXJhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAua2lsbHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAubG9zc2VzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC53aW5zICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FzdWFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYWlseVN0YXRzKS5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTW9kZSA9IGRhaWx5U3RhdHNbb2JqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZS5kZWF0aHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gKChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocykudG9GaXhlZCgyKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSBNYXRoLnJvdW5kKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzICogMzMpICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lTW9kZS5kZWF0aHMgPT09IDAgJiYgZ2FtZU1vZGUua2lsbHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJ0lORic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzEwMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJzAuMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9IChNYXRoLnJvdW5kKGdhbWVNb2RlLndpbnMgLyAoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgKiAxMDApKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9IGdhbWVNb2RlLndsICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtZGFpbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVXTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gcGFyc2VGbG9hdChkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ua2QpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLndsICsgJyUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhaWx5U3RhdHM6XCIsIGRhaWx5U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFpbHlTdGF0cztcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0c05hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhaWx5LXdlZWtseS1uYXYtYnRuJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdHNOYXZCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN0YXRzTmF2QnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXR0aW5ncy5jaXJjbGUpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3Byb21pc2UxLCBwcm9taXNlMl0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzb2x2ZShyZXN1bHQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sbGVycyB7XHJcbiAgICBwdWJsaWMgc2V0U2hvcnRjdXRUZXh0KHNob3J0Y3V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLmhvdGtleXMuZ2V0KHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBob3RrZXkgPSByZXN1bHQuZ2FtZXNbJzEwODI2J11bMF0uYmluZGluZztcclxuXHJcbiAgICAgICAgICAgIGlmIChob3RrZXkgPT09ICdVbmFzc2lnbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gJ1VOQVNTSUdORUQgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3J0Y3V0Q29udGFpbmVyLmlubmVySFRNTCA9IGhvdGtleSArICcgdG8gc2hvdy9oaWRlIHRoZSBvdmVybGF5IGluIGdhbWUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYXBwIGhvdGtleSBcIiR7aG90a2V5fVwiYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE92ZXJ3b2xmU3RhdHVzKG92ZXJ3b2xmU3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2dhbWUtZXZlbnRzLXN0YXR1cy5vdmVyd29sZi5jb20vMTA4MjZfcHJvZC5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJ3b2xmU3RhdHVzID0gZGF0YS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIHNvbWUgZnVuY3Rpb25zIG1pZ2h0IG5vdCB3b3JrIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnPGg0IGNsYXNzPVwiYW5ub3VuY2VtZW50XCI+RHVlIHRvIGEgcmVjZW50IGdhbWUgcGF0Y2gsIE92ZXJ3b2xmIGFwcCBBUEkgaGFzIHN0b3BwZWQgd29ya2luZyAtIHdl4oCZbGwgZml4IGl0IHNob3J0bHk8L2g0Pic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG92ZXJ3b2xmU3RhdHVzID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcndvbGZTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb3ZlcndvbGYgc3RhdHVzIFwiJHtvdmVyd29sZlN0YXR1c31cImApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW50ZXJuZXRTdGF0dXMoaW5ldGVybmV0U3RhdHVzRGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGludGVybmV0U3RhdHVzID0gbmF2aWdhdG9yLm9uTGluZTtcclxuXHJcbiAgICAgICAgaWYgKGludGVybmV0U3RhdHVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5ldGVybmV0U3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgaW50ZXJuZXQgc3RhdHVzIFwiJHtpbnRlcm5ldFN0YXR1c31cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUYWJsZVRhYih0YWI6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudmFsdWVzVGFibGUpKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5ZXItdHJcIikubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmtlZFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmtlZCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXN1YWxTdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXN1YWwnICsgaSArIGopO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vhc29uU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vhc29uYWwnICsgaSArIGopO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyYW5rZWRTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWIgPT09ICdyYW5rZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdjYXN1YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YWIgPT09ICdzZWFzb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtlZFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN1YWxTdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vhc29uU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCB0YWJsZSB0YWIgXCIke3RhYn1cImApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGV0YWlsZWRQbGF5ZXIoZGV0YWlsZWRzdGF0dXM6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoZGV0YWlsZWRzdGF0dXMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1ib2R5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbGVkLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZGV0YWlsZWRzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGRldGFpbGVkIHN0YXRzIFwiJHshZGV0YWlsZWRzdGF0dXN9XCJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRldGFpbGVkc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUaGVtZSgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVWYXJpYWJsZXMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZC50aGVtZSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiNGMEYwRjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkY2MVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjMTIxMjEyXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI0ZGRkZGRjE0XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiMwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRjFFXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiNGRkZGRkYzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwidXJsKCcvaW1nL2JhY2tncm91bmQud2VicCcpXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItbGlnaHQtbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLXRleHQtaG92ZXItY29sb3JcIiwgXCIjMzMzMzMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjYjBiMGIwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tb3ZlcmxheS1jb2xvclwiLCBcIiNiOGI4YjhcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kVXJsXCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjOTk5OTk5XCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93blwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kcm9wZG93bi1idG4tY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tcjZEQi1sb2dvLWxhcmdlXCIsICd1cmwoXCIvaW1nL3N0YXRzZGItZGFyay1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hDb25maWcoKSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vc3RhZ2luZy1hcGkuc3RhdHNkYi5uZXQvcjYvb3ZlcmxheS9jb25maWcnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5jb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnZlcnNpb24gIT0gZGF0YS5wYXlsb2FkLnJhaW5ib3cudmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5wYXlsb2FkLnJhaW5ib3cpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbmZpZycpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4vY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4vb3ctd2luZG93JztcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IENvbnRyb2xsZXJzLCBvd1dpbmRvdzogT1dXaW5kb3cgPSBuZXcgT1dXaW5kb3c7XHJcblxyXG5sZXQgbG9jYWxEZXNrdG9wT25seSA9IGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSwgdmFsdWVzQ3VzdG9tLCBsb2NhbDtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbHN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBkdGFibGU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGR0aGVtZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1heGltaXplOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkZGlzcGxheTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZG1vbml0b3JzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkY2lyY2xlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRhYmxlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kdGhlbWUgLmN1c3RvbS1vcHRpb24nKSA7XHJcbiAgICAgICAgdGhpcy5kbWF4aW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbWF4aW1pemUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZGRpc3BsYXkgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRtb25pdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRjaXJjbGUgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zZXR0aW5ncyB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykpLmxlbmd0aCA+IDUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAndGFibGUnOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21heGltaXplJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGhlbWVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGVcIjogXCJnZW5lcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtb25pdG9ySWRcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NjYWxlU2xpZGVyJywgJ1wiMVwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlIHx8IE9iamVjdC5rZXlzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKSkubGVuZ3RoIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZhbHVlc1RhYmxlJywgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIDAgOiAnQ291bnRyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgMSA6ICdMVkwnLFxyXG4gICAgICAgICAgICAgICAgICAgIDIgOiAnS2lsbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDMgOiAnRGVhdGhzJyxcclxuICAgICAgICAgICAgICAgICAgICA0IDogJ0svRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgNSA6ICdXaW5zJyxcclxuICAgICAgICAgICAgICAgICAgICA2IDogJ0xvc3NlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgNyA6ICdXL0wnLFxyXG4gICAgICAgICAgICAgICAgICAgIDggOiAnSGFja2VyICUnXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVza3RvcE9ubHknLCAnXCIwXCInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnZhbHVlc1RhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTZXR0aW5nKHNlbGVjdGVkT3B0aW9uOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nSWQgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NldHRpbmdpZCcpO1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy12YWx1ZVRhYmxlJykge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIHZhbHVlc0N1c3RvbVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCd2YWx1ZXNUYWJsZScsIHZhbHVlc0N1c3RvbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kdGhlbWUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLnRoZW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcblxyXG4gICAgICAgICAgICBjb250cm9sbGVycy5zZXRUaGVtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRhYmxlJykge1xyXG4gICAgICAgICAgICBsb2NhbC50YWJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGRpc3BsYXknKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnZGVza3RvcE9ubHknLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbWF4aW1pemUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1heGltaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kbW9uaXRvcnMnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLm1vbml0b3JJZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZGNpcmNsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwuY2lyY2xlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgnc2V0dGluZ3MnLCBsb2NhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ0lkID09PSAnc2V0dGluZy1kc2xpZGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NjYWxlU2xpZGVyJywgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTZXR0aW5ncygpIHtcclxuICAgICAgICBjb25zdCBjaXJjbGVzID0ge1xyXG4gICAgICAgICAgICBcImdlbmVyYWxcIiA6IDAsXHJcbiAgICAgICAgICAgIFwicmFua2VkXCIgOiAxLFxyXG4gICAgICAgICAgICBcImNhc3VhbFwiIDogMixcclxuICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDogM1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NBcnIgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuZHRhYmxlW2xvY2FsLnRhYmxlXSxcclxuICAgICAgICAgICAgdGhpcy5kdGhlbWVbbG9jYWwudGhlbWVdLFxyXG4gICAgICAgICAgICB0aGlzLmRtYXhpbWl6ZVtsb2NhbC5tYXhpbWl6ZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZGRpc3BsYXlbbG9jYWxEZXNrdG9wT25seS5yZXBsYWNlKC9cIi9nLCAnJyldLFxyXG4gICAgICAgICAgICB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdLFxyXG4gICAgICAgICAgICB0aGlzLmRjaXJjbGVbY2lyY2xlc1tsb2NhbC5jaXJjbGVdXSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXR0aW5nID0gc2V0dGluZ3NBcnJbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZyAhPT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9uLnNlbGVjdGVkJyk/LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nID09PSB0aGlzLmRtb25pdG9yc1tsb2NhbC5tb25pdG9ySWRdKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1vbml0b3JzIC5jdXN0b20tb3B0aW9uJylbbG9jYWwubW9uaXRvcklkXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuZ2V0TW9uaXRvcnNMaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihtb25pdG9yTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBtb25pdG9yTGlzdC5kaXNwbGF5c1tsb2NhbC5tb25pdG9ySWRdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlcicpIGFzIGFueSkudmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvd1NpemUtc2xpZGVyLXZhbHVlJykuaW5uZXJIVE1MID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERlZmF1bHQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNDdXN0b21baV0ucmVwbGFjZSgvWyAvXS9nLCAnLScpICsgaTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNldHRpbmcuY2xvc2VzdCgnLmN1c3RvbS1zZWxlY3QnKS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdF9fdHJpZ2dlciBzcGFuJykudGV4dENvbnRlbnQgPSBzZXR0aW5nLnRleHRDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgT1dIb3RrZXlzIHtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBnZXRIb3RrZXlUZXh0KGhvdGtleUlkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBvdmVyd29sZi5zZXR0aW5ncy5nZXRIb3RLZXkoaG90a2V5SWQsIHJlc3VsdCA9PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5zdWNjZXNzIHx8ICFyZXN1bHQuaG90a2V5KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnVU5BU1NJR05FRCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmhvdGtleSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb25Ib3RrZXlEb3duKGhvdGtleUlkOiBzdHJpbmcsIGFjdGlvbjogKGhvdGtleVJlc3VsdDogb3ZlcndvbGYuc2V0dGluZ3MuSG90S2V5UmVzdWx0KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MucmVnaXN0ZXJIb3RLZXkoaG90a2V5SWQsIGFjdGlvbik7XHJcbiAgICB9XHJcbn1cclxuIiwidHlwZSBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA9IG92ZXJ3b2xmLndpbmRvd3MuR2V0V2luZG93U3RhdGVSZXN1bHQ7XHJcbnR5cGUgT3dXaW5kb3dJbmZvID0gb3ZlcndvbGYud2luZG93cy5XaW5kb3dJbmZvO1xyXG5leHBvcnQgY2xhc3MgT1dXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXN0b3JlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogcmVzdG9yZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MucmVzdG9yZShpZCwgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW3Jlc3RvcmVdIC0gYW4gZXJyb3Igb2NjdXJyZWQsIHdpbmRvd0lkPSR7aWR9LCByZWFzb249JHtyZXN1bHQuZXJyb3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1pbmltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWluaW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5taW5pbWl6ZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGJyaW5nVG9Gcm9udCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuYnJpbmdUb0Zyb250KGlkLCB0cnVlLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbWF4aW1pemUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtYXhpbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWF4aW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBoaWRlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmhpZGUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmdldFdpbmRvd1N0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgKHJlc3VsdC53aW5kb3dfc3RhdGUgIT09ICdjbG9zZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5pbnRlcm5hbENsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2hhbmdlU2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2VXaW5kb3dMb2NhdGlvbihtb2RlLCB3aW5kb3dJZCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdygocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgd2luZG93V2lkdGggPSByZXN1bHQud2luZG93LndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gcmVzdWx0LndpbmRvdy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoKG1vbml0b3JSZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySWQ6IHN0cmluZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKS5tb25pdG9ySWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JXaWR0aCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySGVpZ2h0ID0gbW9uaXRvclJlcy5kaXNwbGF5c1ttb25pdG9ySWRdLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdjZW50ZXItY2VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBtb25pdG9yV2lkdGggLyAyIC0gKHdpbmRvd1dpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItcmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IChtb25pdG9yV2lkdGggLSB3aW5kb3dXaWR0aCkgLSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2NlbnRlci1sZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVBvc2l0aW9uKHdpbmRvd0lkLCBNYXRoLnJvdW5kKGxlZnQpLCBNYXRoLnJvdW5kKHRvcCksIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNjYWxlV2luZG93KHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZSk6IFByb21pc2UgPCB2b2lkID4gIHtcclxuICAgICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgucm91bmQod2lkdGggKiBzY2FsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhhdC5jaGFuZ2VXaW5kb3dTaXplKHdpbmRvd0lkLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2dhbWUnIHx8IHdpbmRvd0lkID09PSAnaW5fZ2FtZV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JSAtIDMycHgpYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvd0lkID09PSAnaW5fbG9iYnknIHx8IHdpbmRvd0lkID09PSAnaW5fbG9iYnlfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlIDw9IDAuNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYWdNb3ZlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbS5vbm1vdXNlZG93biA9IGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZHJhZ01vdmUodGhpcy5fbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRNb25pdG9yc0xpc3QoKTogUHJvbWlzZSA8IGFueSA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBhbnkgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLnV0aWxzLmdldE1vbml0b3JzTGlzdChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2luZG93U3RhdGUoKTogUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgR2V0V2luZG93U3RhdGVSZXN1bHQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldFdpbmRvd1N0YXRlKGlkLCByZXNvbHZlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q3VycmVudEluZm8oKTogUHJvbWlzZSA8IE93V2luZG93SW5mbyA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQud2luZG93KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2J0YWluKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gfCBudWxsID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNiID0gcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICYmIHJlcy53aW5kb3cgJiYgcmVzLndpbmRvdy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gcmVzLndpbmRvdy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSByZXMud2luZG93Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy53aW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm9idGFpbkRlY2xhcmVkV2luZG93KHRoaXMuX25hbWUsIGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBhc3N1cmVPYnRhaW5lZCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5vYnRhaW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW50ZXJuYWxDbG9zZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2UoaWQsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwV2luZG93IHtcclxuICAgIHByb3RlY3RlZCBjdXJyV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYWluV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzZXR0aW5nc1dpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGlzdGljc1dpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgbWF4aW1pemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2luZG93TmFtZTogc3RyaW5nLCBzZXR0aW5nc1dpbmRvd0lkOiBzdHJpbmcsIHN0YXRzaXN0aWNzV2luZG93SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubWFpbldpbmRvdyA9IG5ldyBPV1dpbmRvdygnYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIHRoaXMuY3VycldpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzV2luZG93ID0gbmV3IE9XV2luZG93KHNldHRpbmdzV2luZG93SWQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGlzdGljc1dpbmRvdyA9IG5ldyBPV1dpbmRvdyhzdGF0c2lzdGljc1dpbmRvd0lkKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtYXhpbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhpbWl6ZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBnYW1lSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lSGlzdG9yeScpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlV2luZG93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlV2luZG93QnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdE1pbmltaXplTW9kYWwnKTtcclxuICAgICAgICBjb25zdCBtb2RhbENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcclxuICAgICAgICBjb25zdCBtb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQnKTtcclxuICAgICAgICBjb25zdCBtb2RhbE1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltaXplJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd05hbWUgPT09ICdkZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc2V0dGluZ3NfZGVza3RvcCcgfHwgd2luZG93TmFtZSA9PT0gJ3N0YXRpc3RpY3NfZGVza3RvcCcgfHwgbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIxXCInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZyhoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlV2luZG93QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNsb3NlV2luZG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1pbmltaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1pbmltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heGltaXplQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1heGltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1heGltaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5tYXhpbWl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWF4aW1pemVkID0gIXRoaXMubWF4aW1pemVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nc0J1dHRvbikge1xyXG4gICAgICAgICAgICBzZXR0aW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnYW1lSGlzdG9yeSkge1xyXG4gICAgICAgICAgICBnYW1lSGlzdG9yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1dpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGFsQ2FuY2VsQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxDbG9zZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGFsTWluaW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxNaW5pbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRXaW5kb3dTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5jdXJyV2luZG93LmdldFdpbmRvd1N0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXREcmFnKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyV2luZG93LmRyYWdNb3ZlKGVsZW0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFwcFdpbmRvdyB9IGZyb20gJy4uL0FwcFdpbmRvdyc7XHJcbmltcG9ydCB7IE9XSG90a2V5cyB9IGZyb20gJy4uLy4uL29kay10cy9vdy1ob3RrZXlzJztcclxuaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctd2luZG93JztcclxuaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuLi8uLi9vZGstdHMvY29udHJvbGxlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbHN0b3JhZ2UgfSBmcm9tICcuLi8uLi9vZGstdHMvbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuLi8uLi9vZGstdHMvRGF0YWJhc2UnO1xyXG5pbXBvcnQgeyB3aW5kb3dOYW1lcywgb3BlcmF0b3JzLCBob3RrZXlzIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuXHJcbmNvbnN0IGdhbWVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVMaXN0Jyk7XHJcbmNvbnN0IGxvYWRNb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRNb3JlJyk7XHJcbmNvbnN0IHNldHRpbmdEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdPcHRpb25zJyk7XHJcbmNvbnN0IG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxyXG4gICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcclxuXTtcclxuXHJcbmxldCBvd1dpbmRvdzogT1dXaW5kb3csIG1vZGU6IHN0cmluZywgZGlzcGxheWVkR2FtZXMgPSB7IGJlZ2luOiAwLCBlbmQ6IDAgfSwgbW9yZUdhbWVzOiBib29sZWFuLCBzaG93TW9yZUdhbWVzOiBib29sZWFuLCB1c2VyVGltZSA9IHsgeWVhcjogMCwgbW9udGg6IDAsIHVuaXhEYXRlOiAwLCB1bml4RW5kRGF0ZTogMCB9O1xyXG5cclxuY29uc3QgY29udHJvbGxlcnMgPSBuZXcgQ29udHJvbGxlcnMoKTtcclxuY29uc3QgbG9jYWxzdG9yYWdlID0gbmV3IExvY2Fsc3RvcmFnZSgpO1xyXG5jb25zdCBkYXRhYmFzZSA9IG5ldyBEYXRhYmFzZSgpO1xyXG5cclxuY29uc3QgcHJvbWlzZTEgPSBsb2NhbHN0b3JhZ2UuaW5pdGlhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29udHJvbGxlcnMuc2V0VGhlbWUoKSk7XHJcblxyXG5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKCkgPT4ge1xyXG4gICAgY29udHJvbGxlcnMuc2V0VGhlbWUoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBrZChhLGIpIHtcclxuICAgIGlmIChiICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChhIC8gYikudG9GaXhlZCgyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGEudG9GaXhlZCgyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWxsSW5kZXhlcyhhcnIsIHZhbCkge1xyXG4gICAgdmFyIGluZGV4ZXMgPSBbXSwgaSA9IC0xO1xyXG4gICAgd2hpbGUgKChpID0gYXJyLmluZGV4T2YodmFsLCBpKzEpKSAhPSAtMSl7XHJcbiAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BpbG9vcChhcnJheSwga2V5LCBjbGFzc05hbWUsIGRpc3BsYXlOYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJhZGdlLSR7a2V5fS0ke2FycmF5W2ldfWApLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZS0ke2NsYXNzTmFtZX0gYmFkZ2VcIj5cclxuICAgICAgICAgICAgICAgICR7ZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIEFwcFdpbmRvdyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFN0YXRpc3RpY3M7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChtb2RlID09PSAnZGVza3RvcCcpIHtcclxuICAgICAgICAgICAgc3VwZXIod2luZG93TmFtZXMuc3RhdGlzdGljc0Rlc2t0b3BPbmx5LCAnc2V0dGluZ3NfZGVza3RvcCcsICdzdGF0aXN0aWNzX2Rlc2t0b3AnKTtcclxuXHJcbiAgICAgICAgICAgIG93V2luZG93LnNjYWxlV2luZG93KCdzdGF0aXN0aWNzX2Rlc2t0b3AnLCAxNjAwLCA5MDAsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3VwZXIod2luZG93TmFtZXMuc3RhdGlzdGljcywgJ3NldHRpbmdzX2luX2dhbWUnLCAnc3RhdGlzdGljc19pbl9nYW1lJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuc2NhbGVXaW5kb3coJ3N0YXRpc3RpY3NfaW5fZ2FtZScsIDE2MDAsIDkwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gb3dXaW5kb3cuY2hhbmdlV2luZG93TG9jYXRpb24oJ2NlbnRlci1jZW50ZXInLCAnc3RhdGlzdGljc19pbl9nYW1lJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvd1dpbmRvdy5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlSG90a2V5QmVoYXZpb3IoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgZGlzcGxheWVkR2FtZXMuYmVnaW4gPSAwO1xyXG4gICAgICAgIGRpc3BsYXllZEdhbWVzLmVuZCA9IDEwO1xyXG5cclxuICAgICAgICB0aGlzLnByaW50R2FtZUxpc3QobnVsbCwgZW5kRGF0ZSwgMCwgMTAsIGRpc3BsYXllZEdhbWVzLmVuZCk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRlU2VsZWN0b3IoKTtcclxuICAgICAgICB0aGlzLnNldERpc3BsYXlNb3JlR2FtZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU3RhdGlzdGljcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludEdhbWVMaXN0KGJlZ2luRGF0ZTogbnVtYmVyLCBlbmREYXRlOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIGVuZDogbnVtYmVyLCBkaXNwbGF5ZWRHYW1lc0VuZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qga2V5UmFuZ2VJREIgPSB7XHJcbiAgICAgICAgICAgIGJlZ2luOiBiZWdpbkRhdGUsXHJcbiAgICAgICAgICAgIGVuZDogZW5kRGF0ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmdldEdhbWVzKGtleVJhbmdlSURCLCBiZWdpbiwgZW5kKVxyXG4gICAgICAgICAgICAudGhlbihnYW1lcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb3JlR2FtZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNob3dNb3JlR2FtZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGdhbWVzKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWU6IGFueSA9IE9iamVjdC52YWx1ZXMoZ2FtZXMpLnJldmVyc2UoKVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gKGRpc3BsYXllZEdhbWVzRW5kIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IGdhbWUuc2VsZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hLRCA9IGtkKGdhbWUubWF0Y2hTdGF0c1tzZWxmLmlkXS5raWxscywgZ2FtZS5tYXRjaFN0YXRzW3NlbGYuaWRdLmRlYXRocyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGU6IHN0cmluZywgb3V0Y29tZTogc3RyaW5nLCBtYXBJbWc6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmdhbWVNb2RlID09PSAnTUFUQ0hNQUtJTkdfUFZQJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUgPSAnY2FzdWFsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVNb2RlID09PSAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlID0gJ3JhbmtlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lTW9kZSA9PT0gJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlID0gJ3VucmFua2VkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVNb2RlID09PSAnQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUgPSAnY3VzdG9tJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUubWF0Y2hPdXRjb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lID0gZ2FtZS5tYXRjaE91dGNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lID0gJ2xlZnQgZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLm1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwSW1nID0gJzxpbWcgY2xhc3M9XCJtYXAtaW1nXCIgc3JjPVwiL2ltZy9tYXBzLycgKyBnYW1lLm1hcC50b0xvd2VyQ2FzZSgpICsgJy53ZWJwXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEltZyA9ICc8ZGl2Pj88L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHtnYW1lLnRpbWVTdGFtcH1cIiBjbGFzcz1cImdhbWUtc3VtbWFyeSAke2dhbWUubWF0Y2hPdXRjb21lfSBtZC13aGl0ZWZyYW1lLTFkcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21hcEltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLW91dGNvbWUgJHtnYW1lLm1hdGNoT3V0Y29tZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtvdXRjb21lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5LL0Q6IDxzcGFuPiR7bWF0Y2hLRH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1lbW9kZTogPHNwYW4+JHtnYW1lTW9kZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlzcGxheSBnYW1lIFwiJHtnYW1lLnRpbWVTdGFtcH1cIiBcIiR7Z2FtZS5tYXRjaE91dGNvbWV9XCJgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlR2FtZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREZXRhaWxlZEdhbWVzTGlzdGVuZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtc3VtbWFyeScpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGV0YWlsZWRTdGF0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1zdW1tYXJ5JylbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXBsYXllci10YWJsZScpLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JhbmdlLXBsYXllci10YWJsZScpLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtcGxheWVyLXRhYmxlJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtcGxheWVyLXRhYmxlJykuc3R5bGUuaGVpZ2h0ID0gJzIwNXB4JztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JhbmdlLXBsYXllci10YWJsZScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmFuZ2UtcGxheWVyLXRhYmxlJykuc3R5bGUuaGVpZ2h0ID0gJzIwNXB4JztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtcm91bmRzdGF0cycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3JlR2FtZXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZS5pbm5lckhUTUwgPSAnPHA+TW9yZSBnYW1lcyB0byBkaXNwbGF5PC9wPjxwPkRvdWJsZSBjbGljayB0byBkaXNwbGF5IG1vcmU8L3A+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmUuaW5uZXJIVE1MID0gJzxwPk5vIG1vcmUgZ2FtZXMgdG8gZGlzcGxheTwvcD48cD5DaGFuZ2UgbW9udGggZm9yIG1vcmUgZ2FtZXM8L3A+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGdldEdhbWVzKGtleVJhbmdlSURCLCBiZWdpbjogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFByb21pc2UgPCBhbnkgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRhdGFiYXNlLnJlYWRGcm9tSURCUmFuZ2UoJ21hdGNoZXMnLCAndGltZVN0YW1wSW5kZXgnLCBrZXlSYW5nZUlEQi5iZWdpbiwga2V5UmFuZ2VJREIuZW5kLCBiZWdpbiwgZW5kKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGF0ZVNlbGVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZWwudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgbGV0IG91dHNpZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdEaXZzW2ldLmNvbnRhaW5zKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRzaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChvdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdEaXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ0RpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nRGl2ID0gc2V0dGluZ0RpdnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50OiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ0Rpdi5pZCA9PT0gJ3NldFllYXInKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyVGltZS55ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHVzZXJUaW1lLnllYXIudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSBpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nRGl2LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9ucycpLmlubmVySFRNTCArPSBgPHNwYW4gY2xhc3M9XCJjdXN0b20tb3B0aW9uXCIgc2V0dGluZ01vZGU9XCJ5ZWFyXCIgdmFsdWU9JyR7eWVhcn0nPiR7eWVhcn08L3NwYW4+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHllYXIgPT09IDIwMjEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ0Rpdi5pZCA9PT0gJ3NldE1vbnRoJykge1xyXG4gICAgICAgICAgICAgICAgdXNlclRpbWUubW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG1vbnRoTmFtZXNbdXNlclRpbWUubW9udGhdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nRGl2LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS5pbm5lckhUTUwgPSBjdXJyZW50O1xyXG5cclxuICAgICAgICAgICAgdXNlclRpbWUudW5peERhdGUgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKHVzZXJUaW1lLnllYXIgKyBcIi5cIiArIChtb250aE5hbWVzW3VzZXJUaW1lLm1vbnRoXSkpLmdldFRpbWUoKSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJUaW1lLm1vbnRoICE9PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgdXNlclRpbWUudW5peEVuZERhdGUgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKHVzZXJUaW1lLnllYXIgKyBcIi5cIiArIChtb250aE5hbWVzW3VzZXJUaW1lLm1vbnRoICsgMV0pKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVzZXJUaW1lLnVuaXhFbmREYXRlID0gTWF0aC5yb3VuZChuZXcgRGF0ZShbdXNlclRpbWUueWVhciAtIDFdICsgXCIuXCIgKyAobW9udGhOYW1lc1swXSkpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNldHRpbmdEaXZzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ0RpdjIgPSBzZXR0aW5nRGl2c1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdEaXYgIT09IHNldHRpbmdEaXYyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nRGl2Mi5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nRGl2Mi5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdEaXYyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLW9wdGlvblwiKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZTogc3RyaW5nID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2V0dGluZ01vZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnYW1lTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1c2VyVGltZVttb2RlXSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB1c2VyVGltZS51bml4RGF0ZSA9IE1hdGgucm91bmQobmV3IERhdGUodXNlclRpbWUueWVhciArIFwiLlwiICsgKG1vbnRoTmFtZXNbdXNlclRpbWUubW9udGhdKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJUaW1lLm1vbnRoICE9PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJUaW1lLnVuaXhFbmREYXRlID0gTWF0aC5yb3VuZChuZXcgRGF0ZSh1c2VyVGltZS55ZWFyICsgXCIuXCIgKyAobW9udGhOYW1lc1t1c2VyVGltZS5tb250aCArIDFdKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJUaW1lLnVuaXhFbmREYXRlID0gTWF0aC5yb3VuZChuZXcgRGF0ZShbdXNlclRpbWUueWVhciAtIDFdICsgXCIuXCIgKyAobW9udGhOYW1lc1swXSkpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZEdhbWVzLmJlZ2luID0gMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZEdhbWVzLmVuZCA9IDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoYXQucHJpbnRHYW1lTGlzdCh1c2VyVGltZS51bml4RGF0ZSwgdXNlclRpbWUudW5peEVuZERhdGUsIDAsIDEwLCBkaXNwbGF5ZWRHYW1lcy5lbmQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERpc3BsYXlNb3JlR2FtZXMoKSB7XHJcbiAgICAgICAgbG9hZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzaG93TW9yZUdhbWVzID09PSBmYWxzZSB8fCAobG9hZE1vcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb3JlLWFjdGl2ZScpICYmIG1vcmVHYW1lcyA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvYWRNb3JlLmNsYXNzTGlzdC5jb250YWlucygnbW9yZS1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlLmNsYXNzTGlzdC5hZGQoJ21vcmUtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2hvd01vcmVHYW1lcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRHYW1lcy5iZWdpbiA9IGRpc3BsYXllZEdhbWVzLmVuZDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZEdhbWVzLmVuZCA9IGRpc3BsYXllZEdhbWVzLmVuZCArIDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJlZ2luOiBudW1iZXIgPSBkaXNwbGF5ZWRHYW1lcy5iZWdpbiArIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQ6IG51bWJlciA9IGRpc3BsYXllZEdhbWVzLmVuZCArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmludEdhbWVMaXN0KHVzZXJUaW1lLnVuaXhEYXRlLCB1c2VyVGltZS51bml4RW5kRGF0ZSwgYmVnaW4sIGVuZCwgMTApO1xyXG4gICAgICAgICAgICAgICAgbG9hZE1vcmUuY2xhc3NMaXN0LnJlbW92ZSgnbW9yZS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzaG93TW9yZUdhbWVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGV0YWlsZWRHYW1lc0xpc3RlbmVyKCkge1xyXG4gICAgICAgIGxldCBnYW1lU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWUtc3VtbWFyeScpO1xyXG5cclxuICAgICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVTdW1tYXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdhbWVTdW1tYXJ5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24odGhpczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmRpc3BsYXlEZXRhaWxlZFN0YXRzKHRoaXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRpc3BsYXlEZXRhaWxlZFN0YXRzKHRoYXQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGtleUlEQiA9IE51bWJlcih0aGF0LmlkKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LXJvdW5kc3RhdHMnKS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRhdGFiYXNlLnJlYWRGcm9tSURCKCdtYXRjaGVzJywga2V5SURCKVxyXG4gICAgICAgICAgICAudGhlbihtYXRjaCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3dJZCA9IG1hdGNoLnNlbGYuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoZXNTY29yZWJvYXJkSFRNTEJsdWUgPSAnJywgbWF0Y2hlc1Njb3JlYm9hcmRIVE1MT3JhbmdlID0gJycsIG1hdGNoZXNSb3VuZFN0YXRzSFRNTEhlYWRlciA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG1hdGNoLm1hdGNoU3RhdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gubWF0Y2hTdGF0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICgobWF0Y2gubWF0Y2hTdGF0c1trZXldLnVzZXJUZWFtID09PSBtYXRjaC5zZWxmLnVzZXJUZWFtICYmIG1hdGNoLnNlbGYubWF0Y2hPdXRjb21lID09PSAndmljdG9yeScpIHx8IChtYXRjaC5tYXRjaFN0YXRzW2tleV0udXNlclRlYW0gIT09IG1hdGNoLnNlbGYudXNlclRlYW0gJiYgbWF0Y2guc2VsZi5tYXRjaE91dGNvbWUgPT09ICdkZWZlYXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWF0Y2gubWF0Y2hTdGF0c1trZXldLnNjb3JlICsgMjAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50c1Jhbms6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RoLXJhbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHNDb3VudHJ5OiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aC1jb3VudHJ5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gubWF0Y2hTdGF0c1trZXldLnVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci10clwiIGlkPVwiJHtrZXl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1yYW5rSW1nXCI+PGltZyBzcmM9XCIvaW1nL3JhbmtzL3Jhbmske21hdGNoLm1hdGNoU3RhdHNba2V5XS51c2VyLnJhbmt9LnN2Z1wiIGFsdD1cInJhbmtcIj48c3Bhbj4ke21hdGNoLm1hdGNoU3RhdHNba2V5XS51c2VyLm1tcn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1uYW1lXCI+JHttYXRjaC5tYXRjaFN0YXRzW2tleV0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLWNvdW50cnlcIj48aW1nIHNyYz1cImh0dHBzOi8vYXBpLnN0YXRzZGIubmV0L2Fzc2V0cy9mbGFncy8ke21hdGNoLm1hdGNoU3RhdHNba2V5XS51c2VyLmNvdW50cnl9XCIgYWx0PVwiJHttYXRjaC5tYXRjaFN0YXRzW2tleV0udXNlci5jb3VudHJ5fVwiIGNsYXNzPVwiaW1nLWNvdW50cnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLWtpbGxzXCI+JHttYXRjaC5tYXRjaFN0YXRzW2tleV0ua2lsbHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1kZWF0aHNcIj4ke21hdGNoLm1hdGNoU3RhdHNba2V5XS5kZWF0aHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1rZFwiPiR7a2QobWF0Y2gubWF0Y2hTdGF0c1trZXldLmtpbGxzLCBtYXRjaC5tYXRjaFN0YXRzW2tleV0uZGVhdGhzKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLWtwclwiPiR7a2QobWF0Y2gubWF0Y2hTdGF0c1trZXldLmtpbGxzLCBPYmplY3Qua2V5cyhtYXRjaC5yb3VuZFN0YXRzKS5sZW5ndGgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXItc2NvcmVcIj4ke21hdGNoLm1hdGNoU3RhdHNba2V5XS5zY29yZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzUmFuay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1JhbmtbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzQ291bnRyeVtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5ZXItdHJcIiBpZD1cIiR7a2V5fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXItbmFtZVwiPiR7bWF0Y2gubWF0Y2hTdGF0c1trZXldLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1raWxsc1wiPiR7bWF0Y2gubWF0Y2hTdGF0c1trZXldLmtpbGxzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXItZGVhdGhzXCI+JHttYXRjaC5tYXRjaFN0YXRzW2tleV0uZGVhdGhzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXIta2RcIj4ke2tkKG1hdGNoLm1hdGNoU3RhdHNba2V5XS5raWxscywgbWF0Y2gubWF0Y2hTdGF0c1trZXldLmRlYXRocyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1rcHJcIj4ke2tkKG1hdGNoLm1hdGNoU3RhdHNba2V5XS5raWxscywgT2JqZWN0LmtleXMobWF0Y2gucm91bmRTdGF0cykubGVuZ3RoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLXNjb3JlXCI+JHttYXRjaC5tYXRjaFN0YXRzW2tleV0uc2NvcmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzUmFuay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzUmFua1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzQ291bnRyeVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gubWF0Y2hTdGF0c1trZXldLnRlYW0gPT09IFwiT3JhbmdlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXNTY29yZWJvYXJkSFRNTE9yYW5nZSArPSB0ZW1wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1Njb3JlYm9hcmRIVE1MQmx1ZSArPSB0ZW1wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmFuZ2UtcGxheWVyLXRhYmxlJykuaW5uZXJIVE1MID0gbWF0Y2hlc1Njb3JlYm9hcmRIVE1MT3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtcGxheWVyLXRhYmxlJykuaW5uZXJIVE1MID0gbWF0Y2hlc1Njb3JlYm9hcmRIVE1MQmx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guc2VsZi51c2VyVGVhbSA9PT0gJ09yYW5nZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS10YWJsZScpLmJlZm9yZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JhbmdlLXRhYmxlJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JhbmdlLXRhYmxlJykuYmVmb3JlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXRhYmxlJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG1hdGNoLnJvdW5kU3RhdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gucm91bmRTdGF0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaGVzUm91bmRTdGF0c0hUTUxPcmFuZ2UgPSAnJywgbWF0Y2hlc1JvdW5kU3RhdHNIVE1MQmx1ZSA9ICcnLCBraWxsc0FycmF5OiBhbnkgPSBbXSwgYWNlQmFkZ2U6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZSwgc3BlY3RhdGluZyA9IFtdLCBzdXJ2aWRlZCA9IFtdLCBkaWVkID0gW10sIHJvdW5kT3V0Y29tZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWF0Y2gucm91bmRTdGF0c1trZXldLnJvdW5kT3V0Y29tZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRPdXRjb21lID0gbWF0Y2gucm91bmRTdGF0c1trZXldLnJvdW5kT3V0Y29tZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kT3V0Y29tZSA9ICd1bmtub3duJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1JvdW5kU3RhdHNIVE1MSGVhZGVyID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInJvdW5kLSR7a2V5fVwiIGNsYXNzPVwicm91bmRzLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlJvdW5kPHNwYW4+JHtrZXl9PC9zcGFuPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyb3VuZC0ke3JvdW5kT3V0Y29tZX1cIj4ke3JvdW5kT3V0Y29tZS50b1VwcGVyQ2FzZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxheWVyLXJvdW5kLXN0YXRzLSR7a2V5fVwiIGNsYXNzPVwicm91bmQtc3RhdHNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtcm91bmRzdGF0cycpLmlubmVySFRNTCArPSBtYXRjaGVzUm91bmRTdGF0c0hUTUxIZWFkZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBpbiBtYXRjaC5yb3VuZFN0YXRzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5yb3VuZFN0YXRzW2tleV0uaGFzT3duUHJvcGVydHkocGxheWVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgIT09ICdyb3VuZE91dGNvbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3VuZE9wZXJhdG9yID0gbWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0ub3BlcmF0b3IsIG9wZXJhdG9ySW1nOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraWxsc0FycmF5LnB1c2gobWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0ua2lsbHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdW5kT3BlcmF0b3IgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9ySW1nID0gJ2h0dHBzOi8vY2RuMy5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2FjY291bnQtMS82NC9BY2NvdW50LTA2LTUxMi5wbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbWcgPSAnaHR0cHM6Ly9hcGkuc3RhdHNkYi5uZXQvcjYvYXNzZXRzL29wZXJhdG9ycy8nICsgb3BlcmF0b3JzW3JvdW5kT3BlcmF0b3JdLm9wZXJhdG9yX25hbWUudG9Mb3dlckNhc2UoKSArICcvYmFkZ2UnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0ua2lsbHMgPT09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjZUJhZGdlID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0uZGVhdGhzID09PSAwICYmIG1hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLnNjb3JlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjdGF0aW5nLnB1c2gocGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0uZGVhdGhzID09PSAwICYmIG1hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLnNjb3JlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VydmlkZWQucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5kZWF0aHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWVkLnB1c2gocGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJSb3VuZCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbGF5ZXItJHtwbGF5ZXJ9XCIgY2xhc3M9XCJwbGF5ZXItcm91bmQtc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b3BlcmF0b3JJbWd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4+JHttYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5uYW1lfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJiYWRnZS0ke2tleX0tJHtwbGF5ZXJ9XCIgY2xhc3M9XCJiYWRnZS1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5raWxsczogPHNwYW4+JHttYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5raWxsc308L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmRlYXRoczogPHNwYW4+JHttYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5kZWF0aHN9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5rL2Q6IDxzcGFuPiR7a2QobWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0ua2lsbHMsIG1hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLmRlYXRocyl9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5zY29yZTogPHNwYW4+JHttYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5zY29yZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS50ZWFtID09PSAnT3JhbmdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1JvdW5kU3RhdHNIVE1MT3JhbmdlICs9IHBsYXllclJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1JvdW5kU3RhdHNIVE1MQmx1ZSArPSBwbGF5ZXJSb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLnNlbGYudXNlclRlYW0gPT09ICdPcmFuZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXJvdW5kLXN0YXRzLScgKyBrZXkpLmlubmVySFRNTCA9IG1hdGNoZXNSb3VuZFN0YXRzSFRNTE9yYW5nZSArIG1hdGNoZXNSb3VuZFN0YXRzSFRNTEJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXJvdW5kLXN0YXRzLScgKyBrZXkpLmlubmVySFRNTCA9IG1hdGNoZXNSb3VuZFN0YXRzSFRNTEJsdWUgKyBtYXRjaGVzUm91bmRTdGF0c0hUTUxPcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleGVzID0gZ2V0QWxsSW5kZXhlcyhraWxsc0FycmF5LCBraWxsc0FycmF5LnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtyZXR1cm4gTWF0aC5tYXgoYSwgYil9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29waWxvb3Aoc3BlY3RhdGluZywga2V5LCAnc3BlY3RhdGluZycsICdTcGVjdGF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BpbG9vcChzdXJ2aWRlZCwga2V5LCAnc3VydmlkZWQnLCAnU3VydmlkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcGlsb29wKGRpZWQsIGtleSwgJ2RpZWQnLCAnRGllZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjZUJhZGdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYmFkZ2UtJHtrZXl9LSR7YWNlQmFkZ2V9YCkuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2UtYWNlIGJhZGdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFDRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29waWxvb3AoaW5kZXhlcywga2V5LCAna2lsbHMnLCAnSy9EJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUb2dnbGVIb3RrZXlCZWhhdmlvcigpIHtcclxuICAgICAgICBjb25zdCB0b2dnbGVJbkdhbWVXaW5kb3cgPSBhc3luYyBob3RrZXlSZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgcHJlc3NlZCBob3RrZXkgXCIke2hvdGtleVJlc3VsdC5mZWF0dXJlSWR9XCJgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb2RlICE9PSAnZGVza3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluR2FtZVN0YXRlID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ25vcm1hbCcgfHwgaW5HYW1lU3RhdGUud2luZG93X3N0YXRlID09PSAnbWF4aW1pemVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdtaW5pbWl6ZWQnIHx8IGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG93V2luZG93LmNoYW5nZVdpbmRvd0xvY2F0aW9uKCdjZW50ZXItY2VudGVyJywgJ3N0YXRpc3RpY3NfaW5fZ2FtZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPV0hvdGtleXMub25Ib3RrZXlEb3duKGhvdGtleXMudG9nZ2xlLCB0b2dnbGVJbkdhbWVXaW5kb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5vdmVyd29sZi53aW5kb3dzLmdldE9wZW5XaW5kb3dzKGRhdGEgPT4ge1xyXG4gICAgbW9kZSA9IE9iamVjdC5rZXlzKGRhdGEpWzFdO1xyXG5cclxuICAgIGlmIChtb2RlID09PSAnZGVza3RvcCcpIHtcclxuICAgICAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzRGVza3RvcE9ubHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzKTtcclxuICAgIH1cclxuXHJcbiAgICBTdGF0aXN0aWNzLmluc3RhbmNlKCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9