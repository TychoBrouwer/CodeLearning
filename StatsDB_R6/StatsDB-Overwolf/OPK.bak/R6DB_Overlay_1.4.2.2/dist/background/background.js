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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL2RhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctZ2FtZS1saXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWdhbWVzLWV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL293LWdhbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctbGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy13aW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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QUM5RCxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQzt3QkFDdkUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQzt3QkFDekUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQzt3QkFDckUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQzt3QkFDekUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQzt3QkFDM0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQzt3QkFDN0UsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQzt3QkFDekUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQztxQkFDaEY7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ25DLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFFaEMsSUFBSSxRQUFRLENBQUMsTUFBTSxJ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ImZpbGUiOiJiYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wdWJsaWMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnRzXCIpO1xuIiwiY29uc3QgcmFpbmJvd0NsYXNzSWQgPSAxMDgyNjtcclxuXHJcbmNvbnN0IGludGVyZXN0aW5nRmVhdHVyZXMxID0gW1xyXG4gICAgJ2dlcF9pbnRlcm5hbCcsXHJcbiAgICAnZ2FtZV9pbmZvJyxcclxuICAgICdtYXRjaCcsXHJcbiAgICAnbWF0Y2hfaW5mbycsXHJcbiAgICAncm9zdGVyJyxcclxuICAgICdraWxsJyxcclxuICAgICdkZWF0aCcsXHJcbiAgICAnbWUnLFxyXG5dO1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczIgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuXTtcclxuXHJcbmNvbnN0IHdpbmRvd05hbWVzID0ge1xyXG4gICAgZGVza3RvcDogJ2Rlc2t0b3AnLFxyXG4gICAgaW5Mb2JieTogJ2luX2xvYmJ5JyxcclxuICAgIGluR2FtZTogJ2luX2dhbWUnLFxyXG4gICAgaW5Mb2JieURlc2t0b3BPbmx5OiAnaW5fbG9iYnlfZGVza3RvcF9vbmx5JyxcclxuICAgIGluR2FtZURlc2t0b3BPbmx5OiAnaW5fZ2FtZV9kZXNrdG9wX29ubHknLFxyXG4gICAgc2V0dGluZ3M6ICdzZXR0aW5nc19pbl9nYW1lJyxcclxuICAgIHNldHRpbmdzRGVza3RvcE9ubHk6ICdzZXR0aW5nc19kZXNrdG9wJyxcclxuICAgIHN0YXRpc3RpY3M6ICdzdGF0aXN0aWNzX2luX2dhbWUnLFxyXG4gICAgc3RhdGlzdGljc0Rlc2t0b3BPbmx5OiAnc3RhdGlzdGljc19kZXNrdG9wJ1xyXG59O1xyXG5cclxuY29uc3QgaG90a2V5cyA9IHtcclxuICAgIHRvZ2dsZTogJ3Nob3doaWRlJyxcclxufTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWRSA9IFtcclxuICAgICdPUEVSQVRJT05TJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfTE9ORVdPTEYnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRScsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFX1BBUlRZJyxcclxuXTtcclxuXHJcbmNvbnN0IGdhbWVNb2Rlc1BWUCA9IFtcclxuICAgICdNQVRDSE1BS0lOR19QVlBfTkVXQ09NRVInLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX0VWRU5UJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9SQU5LRUQnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQJyxcclxuICAgICdDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQnLFxyXG5dO1xyXG5cclxuY29uc3QgZGF0YWJhc2VPYmplY3QgPSB7XHJcbiAgICBNQVRDSE1BS0lOR19QVlBfUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfSwgQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEOiB7XHJcbiAgICAgICAga2lsbHM6IDAsXHJcbiAgICAgICAgZGVhdGhzOiAwLFxyXG4gICAgICAgIHdpbnM6IDAsXHJcbiAgICAgICAgbG9zc2VzOiAwLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZWFzb25Db2xvcnMgPSB7XHJcbiAgICA2OicjMDA1MGIzJyxcclxuICAgIDc6JyNjYTM2MWMnLFxyXG4gICAgODonIzAwNjU0MycsXHJcbiAgICA5OicjZmZjMTEzJyxcclxuICAgIDEwOicjOTQ5ZjM5JyxcclxuICAgIDExOicjODFhMGMxJyxcclxuICAgIDEyOicjYWE4NTRmJyxcclxuICAgIDEzOicjZDIwMDVhJyxcclxuICAgIDE0OicjMzA0Mzk1JyxcclxuICAgIDE1OicjMTM2MzBjJyxcclxuICAgIDE2OicjMDY5ZGIzJyxcclxuICAgIDE3OicjOTQ2YTk3JyxcclxuICAgIDE4OicjMmI3ZTlhJyxcclxuICAgIDE5OicjNmNhNTExJyxcclxuICAgIDIwOicjZDE0MDA3JyxcclxufVxyXG5cclxuY29uc3Qgb3BlcmF0b3JzID0ge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU2xlZGdlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoxXCJcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhhdGNoZXJcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjFcIlxyXG4gICAgfSxcclxuICAgIDUxMzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MlwiXHJcbiAgICB9LFxyXG4gICAgMTAyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRoZXJtaXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToyXCJcclxuICAgIH0sXHJcbiAgICA3NzA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUd2l0Y2hcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjNcIlxyXG4gICAgfSxcclxuICAgIDEwMjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb250YWduZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6M1wiXHJcbiAgICB9LFxyXG4gICAgMjU5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR2xhelwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NFwiXHJcbiAgICB9LFxyXG4gICAgNTE1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnV6ZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NFwiXHJcbiAgICB9LFxyXG4gICAgMjYwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmxpdHpcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjVcIlxyXG4gICAgfSxcclxuICAgIDUxNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklRXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo1XCJcclxuICAgIH0sXHJcbiAgICAyNjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCdWNrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo2XCJcclxuICAgIH0sXHJcbiAgICAyNjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGFja2JlYXJkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo3XCJcclxuICAgIH0sXHJcbiAgICAyNjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXBpdGFvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo4XCJcclxuICAgIH0sXHJcbiAgICAyNjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJIaWJhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjlcIlxyXG4gICAgfSxcclxuICAgIDI2NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphY2thbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QVwiXHJcbiAgICB9LFxyXG4gICAgMjY2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWWluZ1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6QlwiXHJcbiAgICB9LFxyXG4gICAgNTIzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWm9maWFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkNcIlxyXG4gICAgfSxcclxuICAgIDI2ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRva2thZWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpEXCJcclxuICAgIH0sXHJcbiAgICA1MjU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMaW9uXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpFXCJcclxuICAgIH0sXHJcbiAgICA3ODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGaW5rYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6RVwiXHJcbiAgICB9LFxyXG4gICAgMjcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWF2ZXJpY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEwXCJcclxuICAgIH0sXHJcbiAgICAyNzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb21hZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTFcIlxyXG4gICAgfSxcclxuICAgIDUyOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdyaWRsb2NrXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMlwiXHJcbiAgICB9LFxyXG4gICAgMjc0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTm9ra1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTNcIlxyXG4gICAgfSxcclxuICAgIDI3Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFtYXJ1XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNlwiXHJcbiAgICB9LFxyXG4gICAgMjc4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FsaVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTdcIlxyXG4gICAgfSxcclxuICAgIDI4MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIklhbmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE5XCJcclxuICAgIH0sXHJcbiAgICA3OTA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJBY2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjE3XCJcclxuICAgIH0sXHJcbiAgICAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlplcm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIxOjFCXCJcclxuICAgIH0sXHJcbiAgICAxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUmVjcnVpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcInJlY3J1aXRcIlxyXG4gICAgfSxcclxuICAgIDI1Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlNtb2tlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxXCJcclxuICAgIH0sXHJcbiAgICA1MTI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNdXRlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxXCJcclxuICAgIH0sXHJcbiAgICAyNTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXN0bGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjJcIlxyXG4gICAgfSxcclxuICAgIDc2OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlB1bHNlXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDoyXCJcclxuICAgIH0sXHJcbiAgICAyNTg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJEb2NcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjNcIlxyXG4gICAgfSxcclxuICAgIDUxNDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlJvb2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjNcIlxyXG4gICAgfSxcclxuICAgIDc3MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthcGthblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NFwiXHJcbiAgICB9LFxyXG4gICAgMTAyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlRhY2hhbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo0XCJcclxuICAgIH0sXHJcbiAgICA3NzI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJKYWdlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6NVwiXHJcbiAgICB9LFxyXG4gICAgMTAyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJhbmRpdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRnJvc3RcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjZcIlxyXG4gICAgfSxcclxuICAgIDUxODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlZhbGt5cmllXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo3XCJcclxuICAgIH0sXHJcbiAgICA1MTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDYXZlaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo4XCJcclxuICAgIH0sXHJcbiAgICA1MjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJFY2hvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo5XCJcclxuICAgIH0sXHJcbiAgICA1MjE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNaXJhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpBXCJcclxuICAgIH0sXHJcbiAgICA1MjI6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJMZXNpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkJcIlxyXG4gICAgfSxcclxuICAgIDI2Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVsYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6Q1wiXHJcbiAgICB9LFxyXG4gICAgNTI0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmlnaWxcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkRcIlxyXG4gICAgfSxcclxuICAgIDI3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1hZXN0cm9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFsaWJpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzpGXCJcclxuICAgIH0sXHJcbiAgICA1Mjc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJDbGFzaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTBcIlxyXG4gICAgfSxcclxuICAgIDUyODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkthaWRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjExXCJcclxuICAgIH0sXHJcbiAgICAyNzM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNb3p6aWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYXJkZW5cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE0XCJcclxuICAgIH0sXHJcbiAgICAyNzY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHb3lvXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxNVwiXHJcbiAgICB9LFxyXG4gICAgNTM0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiV2FtYWlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjE3XCJcclxuICAgIH0sXHJcbiAgICAyNzk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJPcnl4XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxOFwiXHJcbiAgICB9LFxyXG4gICAgMjgxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWVsdXNpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxQVwiXHJcbiAgICB9LFxyXG4gICAgMTA0Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFydW5pXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNToxN1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByYW5rT2Zmc2V0ID0ge1xyXG4gICAgMDogMCxcclxuICAgIDE6IDIsXHJcbiAgICAyOiAzLFxyXG4gICAgMzogNCxcclxuICAgIDQ6IDUsXHJcbiAgICA1OiA3LFxyXG4gICAgNjogOCxcclxuICAgIDc6IDksXHJcbiAgICA4OiAxMCxcclxuICAgIDk6IDEyLFxyXG4gICAgMTA6IDEzLFxyXG4gICAgMTE6IDE0LFxyXG4gICAgMTI6IDE1LFxyXG4gICAgMTM6IDUwLFxyXG4gICAgMTQ6IDE2LFxyXG4gICAgMTU6IDE3LFxyXG4gICAgMTY6IDE4LFxyXG4gICAgMTc6IDE5LFxyXG4gICAgMTg6IDIwLFxyXG4gICAgMTk6IDIxLFxyXG4gICAgMjA6IDIyLFxyXG4gICAgMjE6IDIyLFxyXG4gICAgMjI6IDIyLFxyXG4gICAgMjM6IDIyLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJhaW5ib3dDbGFzc0lkLFxyXG4gICAgaW50ZXJlc3RpbmdGZWF0dXJlczEsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMixcclxuICAgIHdpbmRvd05hbWVzLFxyXG4gICAgaG90a2V5cyxcclxuICAgIGdhbWVNb2Rlc1BWUCxcclxuICAgIGdhbWVNb2Rlc1BWRSxcclxuICAgIGRhdGFiYXNlT2JqZWN0LFxyXG4gICAgc2Vhc29uQ29sb3JzLFxyXG4gICAgcmFua09mZnNldCxcclxuICAgIG9wZXJhdG9yc1xyXG59XHJcbiIsImltcG9ydCB7IGRhdGFiYXNlT2JqZWN0IH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XHJcbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlSURCKG5hbWVJREI6IHN0cmluZywga2V5UGF0aElEQjogc3RyaW5nLCB2ZXJzaW9uOiBudW1iZXIsIGluZGV4ZXMgPSBudWxsKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInLCB2ZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24oZXZlbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZTogSURCT2JqZWN0U3RvcmU7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKG5hbWVJREIsIHsga2V5UGF0aDoga2V5UGF0aElEQiB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZXZlbnQudGFyZ2V0LnRyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUobmFtZUlEQik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleGVzLmZvckVhY2goaW5kZXggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUuY3JlYXRlSW5kZXgoaW5kZXgsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUob2JqZWN0U3RvcmUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHN0b3JlVG9JREIobmFtZUlEQjogc3RyaW5nLCB2YWx1ZUlEQiwgaW5pdGlhdGVJREI6IGJvb2xlYW4pOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiT2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZHdyaXRlJykub2JqZWN0U3RvcmUobmFtZUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbml0aWF0ZUlEQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRiT2JqZWN0U3RvcmUucHV0KHZhbHVlSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhdGVJREIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYk9iamVjdFN0b3JlLmFkZCh2YWx1ZUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZWFkRnJvbUlEQihuYW1lSURCOiBzdHJpbmcsIGtleUlEQjogbnVtYmVyIHwgc3RyaW5nKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGIgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3REYi5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0RGIuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0RGIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGJPYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkb25seScpLm9iamVjdFN0b3JlKG5hbWVJREIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGRiT2JqZWN0U3RvcmUuZ2V0KGtleUlEQik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZWFkRnJvbUlEQlJhbmdlKG5hbWVJREI6IHN0cmluZywgaW5kZXg6IHN0cmluZywgYmVnaW5SYW5nZTogc3RyaW5nLCBlbmRSYW5nZTogc3RyaW5nLCBiZWdpbjogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERiID0gaW5kZXhlZERCLm9wZW4oJ3N0YXRzREInKTtcclxuICAgICAgICAgICAgbGV0IGtleVJhbmdlVmFsdWU6IElEQktleVJhbmdlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJlZ2luUmFuZ2UgJiYgZW5kUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGtleVJhbmdlVmFsdWUgPSBJREJLZXlSYW5nZS5ib3VuZChiZWdpblJhbmdlLCBlbmRSYW5nZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmVnaW5SYW5nZSAmJiAhZW5kUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGtleVJhbmdlVmFsdWUgPSBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGJlZ2luUmFuZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFiZWdpblJhbmdlICYmIGVuZFJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlSYW5nZVZhbHVlID0gSURCS2V5UmFuZ2UudXBwZXJCb3VuZChlbmRSYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RGIuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdERiLmVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3REYi5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gcmVxdWVzdERiLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUobmFtZUlEQilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5pbmRleChpbmRleCkub3BlbkN1cnNvcihrZXlSYW5nZVZhbHVlLCAncHJldicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpID0gMCwgaiA9IDAsIHJlc3VsdCA9IG5ldyBPYmplY3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gcmVxdWVzdC5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJlZ2luICE9PSAwICYmIGkgPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKGJlZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gYmVnaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3Vyc29yICYmIGkgPD0gZW5kICYmIGkgPj0gYmVnaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtjdXJzb3IudmFsdWUudGltZVN0YW1wXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY3Vyc29yLnZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGluaXRBbGxJREIoKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RheTogYW55ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3REYXlPZlllYXI6IGFueSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXN0RGF5c09mWWVhcjogYW55ID0gKHRvZGF5IC0gZmlyc3REYXlPZlllYXIpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJXZWVrcyA9IGAke01hdGguY2VpbCgocGFzdERheXNPZlllYXIgKyBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDEpIC8gNyl9LCR7dG9kYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJEYXlzID0gdG9kYXkuZ2V0RGF0ZSgpICsgJywnICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKSArICcsJyArIHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVJREJXZWVrczogYW55ID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUlEQldlZWtzW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhYmFzZU9iamVjdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlSURCV2Vla3Mud2VlayA9IGtleUlEQldlZWtzO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbHVlSURCRGF5czogYW55ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhYmFzZU9iamVjdCkpO1xyXG4gICAgICAgICAgICB2YWx1ZUlEQkRheXMuZGF0ZSA9IGtleUlEQkRheXM7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMSA9IHRoaXMuc3RvcmVUb0lEQignd2Vla3MnLCB2YWx1ZUlEQldlZWtzLCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZTIgPSB0aGlzLnN0b3JlVG9JREIoJ2RheXMnLCB2YWx1ZUlEQkRheXMsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3Byb21pc2UxLCBwcm9taXNlMl0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzb2x2ZShyZXN1bHQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkaXNwbGF5RGFpbHlXZWVrbHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RheTogYW55ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3REYXlPZlllYXI6IGFueSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXN0RGF5c09mWWVhcjogYW55ID0gKHRvZGF5IC0gZmlyc3REYXlPZlllYXIpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJXZWVrcyA9IGAke01hdGguY2VpbCgocGFzdERheXNPZlllYXIgKyBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDEpIC8gNyl9LCR7dG9kYXkuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlJREJEYXlzID0gdG9kYXkuZ2V0RGF0ZSgpICsgJywnICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKSArICcsJyArIHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2V0dGluZ3MnKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMSA9IHRoaXMucmVhZEZyb21JREIoJ3dlZWtzJywga2V5SURCV2Vla3MpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHRXZWVrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2Vla2x5U3RhdHM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FzdWFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5raWxscyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5kZWF0aHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAud2lucyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuZ2VuZXJhbC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAubG9zc2VzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmtpbGxzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMuY2FzdWFsLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5sb3NzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnJhbmtlZC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLnVucmFua2VkLndpbnMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdlZWtseVN0YXRzKS5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTW9kZSA9IHdlZWtseVN0YXRzW29ial07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZU1vZGUuZGVhdGhzICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gKChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocykudG9GaXhlZCgyKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSBNYXRoLnJvdW5kKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzICogMzMpICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lTW9kZS5kZWF0aHMgPT09IDAgJiYgZ2FtZU1vZGUua2lsbHMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnSU5GJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMTAwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnMC4wMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAoTWF0aC5yb3VuZChnYW1lTW9kZS53aW5zIC8gKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICogMTAwKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSBnYW1lTW9kZS53bCArICcsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlV0wgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVLRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB3ZWVrbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlV0wpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtd2Vla2x5LXRleHQnKS5pbm5lckhUTUwgPSBwYXJzZUZsb2F0KHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ua2QpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ud2wgKyAnJSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2Vla2x5U3RhdHM6XCIsIHdlZWtseVN0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtseVN0YXRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMiA9IHRoaXMucmVhZEZyb21JREIoJ2RheXMnLCBrZXlJREJEYXlzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0RGF5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhaWx5U3RhdHM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2VuZXJhbFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAua2lsbHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAubG9zc2VzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC53aW5zICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FzdWFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5kZWF0aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlAud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFua2VkXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2luc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELndpbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3bFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhkYWlseVN0YXRzKS5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTW9kZSA9IGRhaWx5U3RhdHNbb2JqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZS5kZWF0aHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gKChnYW1lTW9kZS5raWxscyAvIGdhbWVNb2RlLmRlYXRocykudG9GaXhlZCgyKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSBNYXRoLnJvdW5kKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzICogMzMpICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lTW9kZS5kZWF0aHMgPT09IDAgJiYgZ2FtZU1vZGUua2lsbHMgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJ0lORic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzEwMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmtkID0gJzAuMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGdhbWVNb2RlLndpbnMgKyBnYW1lTW9kZS5sb3NzZXMpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9IChNYXRoLnJvdW5kKGdhbWVNb2RlLndpbnMgLyAoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgKiAxMDApKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9IGdhbWVNb2RlLndsICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLmF0dHJpYnV0ZVZhbHVlS0QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3bC1jaXJjbGUtZGFpbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVXTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gcGFyc2VGbG9hdChkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ua2QpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseS10ZXh0JykuaW5uZXJIVE1MID0gZGFpbHlTdGF0c1tzZXR0aW5ncy5jaXJjbGVdLndsICsgJyUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhaWx5U3RhdHM6XCIsIGRhaWx5U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGFpbHlTdGF0cztcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0c05hdkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhaWx5LXdlZWtseS1uYXYtYnRuJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdHNOYXZCdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHN0YXRzTmF2QnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXR0aW5ncy5jaXJjbGUpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3Byb21pc2UxLCBwcm9taXNlMl0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzb2x2ZShyZXN1bHQpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9XTGlzdGVuZXIsIE9XTGlzdGVuZXJEZWxlZ2F0ZSB9IGZyb20gJy4vb3ctbGlzdGVuZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPV0dhbWVMaXN0ZW5lckRlbGVnYXRlIGV4dGVuZHMgT1dMaXN0ZW5lckRlbGVnYXRlIHtcclxuICAgIG9uR2FtZVN0YXJ0ZWQ/KGluZm86IG92ZXJ3b2xmLmdhbWVzLlJ1bm5pbmdHYW1lSW5mbyk7XHJcbiAgICBvbkdhbWVFbmRlZD8oaW5mbzogb3ZlcndvbGYuZ2FtZXMuUnVubmluZ0dhbWVJbmZvKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9XR2FtZUxpc3RlbmVyIGV4dGVuZHMgT1dMaXN0ZW5lcjxPV0dhbWVMaXN0ZW5lckRlbGVnYXRlPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogT1dHYW1lTGlzdGVuZXJEZWxlZ2F0ZSkge1xyXG4gICAgICAgIHN1cGVyKGRlbGVnYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMub25HYW1lSW5mb1VwZGF0ZWQuYWRkTGlzdGVuZXIodGhpcy5vbkdhbWVJbmZvVXBkYXRlZCk7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZ2V0UnVubmluZ0dhbWVJbmZvKHRoaXMub25SdW5uaW5nR2FtZUluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIG92ZXJ3b2xmLmdhbWVzLm9uR2FtZUluZm9VcGRhdGVkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25HYW1lSW5mb1VwZGF0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HYW1lSW5mb1VwZGF0ZWQgPSAodXBkYXRlOiBvdmVyd29sZi5nYW1lcy5HYW1lSW5mb1VwZGF0ZWRFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghdXBkYXRlIHx8ICF1cGRhdGUuZ2FtZUluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1cGRhdGUucnVubmluZ0NoYW5nZWQgJiYgIXVwZGF0ZS5nYW1lQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXBkYXRlLmdhbWVJbmZvLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVsZWdhdGUub25HYW1lU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsZWdhdGUub25HYW1lU3RhcnRlZCh1cGRhdGUuZ2FtZUluZm8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVsZWdhdGUub25HYW1lRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uR2FtZUVuZGVkKHVwZGF0ZS5nYW1lSW5mbylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUnVubmluZ0dhbWVJbmZvID0gKGluZm86IG92ZXJ3b2xmLmdhbWVzLlJ1bm5pbmdHYW1lSW5mbyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghaW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5mby5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlbGVnYXRlLm9uR2FtZVN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uR2FtZVN0YXJ0ZWQoaW5mbylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lciB9IGZyb20gJy4vdGltZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlIHtcclxuICAgIG9uSW5mb1VwZGF0ZXMoaW5mbzogYW55KTtcclxuICAgIG9uTmV3RXZlbnRzKGU6IGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPV0dhbWVzRXZlbnRzIHtcclxuICAgIHByaXZhdGUgX2RlbGVnYXRlOiBJT1dHYW1lc0V2ZW50c0RlbGVnYXRlO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWlyZWRGZWF0dXJlczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IElPV0dhbWVzRXZlbnRzRGVsZWdhdGUsIHJlcXVpcmVkRmVhdHVyZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcclxuICAgICAgICB0aGlzLl9yZXF1aXJlZEZlYXR1cmVzID0gcmVxdWlyZWRGZWF0dXJlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0SW5mbygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMuZ2V0SW5mbyhyZXNvbHZlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBsZXQgdHJpZXM6bnVtYmVyID0gMSxcclxuICAgICAgICByZXN1bHQ7XHJcblxyXG4gICAgICAgIHdoaWxlICggdHJpZXMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLnNldFJlcXVpcmVkRmVhdHVyZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWRGZWF0dXJlcyxcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKCByZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0UmVxdWlyZWRGZWF0dXJlcygpOiBzdWNjZXNzOiAnKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocmVzdWx0LnN1cHBvcnRlZEZlYXR1cmVzLmxlbmd0aCA+IDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBUaW1lci53YWl0KDMwMDApO1xyXG4gICAgICAgICAgICB0cmllcysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdzZXRSZXF1aXJlZEZlYXR1cmVzKCk6IGZhaWx1cmUgYWZ0ZXIgJysgdHJpZXMgKycgdHJpZXMnKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudHMoKTtcclxuXHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uSW5mb1VwZGF0ZXMyLmFkZExpc3RlbmVyKHRoaXMub25JbmZvVXBkYXRlcyk7XHJcbiAgICAgICAgb3ZlcndvbGYuZ2FtZXMuZXZlbnRzLm9uTmV3RXZlbnRzLmFkZExpc3RlbmVyKHRoaXMub25OZXdFdmVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5SZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25JbmZvVXBkYXRlczIucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkluZm9VcGRhdGVzKTtcclxuICAgICAgICBvdmVyd29sZi5nYW1lcy5ldmVudHMub25OZXdFdmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5vbk5ld0V2ZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkluZm9VcGRhdGVzID0gKGluZm86IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uSW5mb1VwZGF0ZXMoaW5mby5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uTmV3RXZlbnRzID0gKGU6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RlbGVnYXRlLm9uTmV3RXZlbnRzKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW293LWdhbWUtZXZlbnRzXSBTVEFSVGApO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0UmVxdWlyZWRGZWF0dXJlcygpO1xyXG5cclxuICAgICAgICBsZXQgdHJpZXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgcmVzLCBzdGF0dXMgfSA9IGF3YWl0IHRoaXMuZ2V0SW5mbygpO1xyXG5cclxuICAgICAgICBpZiAoIHJlcyAmJiBzdGF0dXMgPT09ICdzdWNjZXNzJyApIHtcclxuICAgICAgICAgICAgdGhpcy5vbkluZm9VcGRhdGVzKHsgaW5mbzogcmVzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgW293LWdhbWUtZXZlbnRzXSBTVE9QYCk7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICB9XHJcbn1cclxuIiwidHlwZSBHZXRHYW1lREJJbmZvUmVzdWx0ID0gb3ZlcndvbGYuZ2FtZXMuR2V0R2FtZURCSW5mb1Jlc3VsdFxyXG50eXBlIFJ1bm5pbmdHYW1lSW5mbyA9IG92ZXJ3b2xmLmdhbWVzLlJ1bm5pbmdHYW1lSW5mb1xyXG5cclxuZXhwb3J0IGNsYXNzIE9XR2FtZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSdW5uaW5nR2FtZUluZm8oKTogUHJvbWlzZTxSdW5uaW5nR2FtZUluZm8+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8UnVubmluZ0dhbWVJbmZvPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBvdmVyd29sZi5nYW1lcy5nZXRSdW5uaW5nR2FtZUluZm8ocmVzb2x2ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGNsYXNzSWRGcm9tR2FtZUlkKGdhbWVJZDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vICAgICBsZXQgY2xhc3NJZCA9IE1hdGguZmxvb3IoZ2FtZUlkIC8gMTApO1xyXG4gICAgLy8gICAgIHJldHVybiBjbGFzc0lkO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0UmVjZW50bHlQbGF5ZWRHYW1lcyhsaW1pdDogbnVtYmVyID0gMyk6XHJcbiAgICAvLyBQcm9taXNlPG51bWJlcltdfG51bGw+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcltdfG51bGw+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmICghb3ZlcndvbGYuZ2FtZXMuZ2V0UmVjZW50bHlQbGF5ZWRHYW1lcykge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgIG92ZXJ3b2xmLmdhbWVzLmdldFJlY2VudGx5UGxheWVkR2FtZXMobGltaXQsIHJlc3VsdCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5nYW1lcyk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBhc3luYyBnZXRHYW1lREJJbmZvKGdhbWVDbGFzc0lkOiBudW1iZXIpOlxyXG4gICAgLy8gUHJvbWlzZTxHZXRHYW1lREJJbmZvUmVzdWx0PiB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZTxHZXRHYW1lREJJbmZvUmVzdWx0PigocmVzb2x2ZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICBvdmVyd29sZi5nYW1lcy5nZXRHYW1lREJJbmZvKGdhbWVDbGFzc0lkLCByZXNvbHZlKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIE9XTGlzdGVuZXJEZWxlZ2F0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPV0xpc3RlbmVyPFQgZXh0ZW5kcyBPV0xpc3RlbmVyRGVsZWdhdGU+IHtcclxuICAgIHByb3RlY3RlZCBfZGVsZWdhdGU6IFQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IFQpIHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBzdG9wKCk6IHZvaWQ7XHJcbn1cclxuIiwidHlwZSBHZXRXaW5kb3dTdGF0ZVJlc3VsdCA9IG92ZXJ3b2xmLndpbmRvd3MuR2V0V2luZG93U3RhdGVSZXN1bHQ7XHJcbnR5cGUgT3dXaW5kb3dJbmZvID0gb3ZlcndvbGYud2luZG93cy5XaW5kb3dJbmZvO1xyXG5leHBvcnQgY2xhc3MgT1dXaW5kb3cge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaXZhdGUgX2lkOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5faWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyByZXN0b3JlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogcmVzdG9yZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MucmVzdG9yZShpZCwgcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW3Jlc3RvcmVdIC0gYW4gZXJyb3Igb2NjdXJyZWQsIHdpbmRvd0lkPSR7aWR9LCByZWFzb249JHtyZXN1bHQuZXJyb3J9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1pbmltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWluaW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5taW5pbWl6ZShpZCwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGJyaW5nVG9Gcm9udCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuYnJpbmdUb0Zyb250KGlkLCB0cnVlLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgbWF4aW1pemUoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtYXhpbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWF4aW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBoaWRlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmhpZGUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmdldFdpbmRvd1N0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgKHJlc3VsdC53aW5kb3dfc3RhdGUgIT09ICdjbG9zZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5pbnRlcm5hbENsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2hhbmdlU2l6ZSh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjaGFuZ2VXaW5kb3dMb2NhdGlvbihtb2RlLCB3aW5kb3dJZCkge1xyXG4gICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdygocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgd2luZG93V2lkdGggPSByZXN1bHQud2luZG93LndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gcmVzdWx0LndpbmRvdy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi51dGlscy5nZXRNb25pdG9yc0xpc3QoKG1vbml0b3JSZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySWQ6IHN0cmluZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldHRpbmdzKS5tb25pdG9ySWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JXaWR0aCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9ySGVpZ2h0ID0gbW9uaXRvclJlcy5kaXNwbGF5c1ttb25pdG9ySWRdLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdjZW50ZXItY2VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBtb25pdG9yV2lkdGggLyAyIC0gKHdpbmRvd1dpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItcmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IChtb25pdG9yV2lkdGggLSB3aW5kb3dXaWR0aCkgLSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2NlbnRlci1sZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAyMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBtb25pdG9ySGVpZ2h0IC8gMiAtICh3aW5kb3dIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVBvc2l0aW9uKHdpbmRvd0lkLCBNYXRoLnJvdW5kKGxlZnQpLCBNYXRoLnJvdW5kKHRvcCksIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNjYWxlV2luZG93KHdpbmRvd0lkLCB3aWR0aCwgaGVpZ2h0LCBzY2FsZSk6IFByb21pc2UgPCB2b2lkID4gIHtcclxuICAgICAgICBjb25zdCB0aGF0OiBhbnkgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgucm91bmQod2lkdGggKiBzY2FsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhhdC5jaGFuZ2VXaW5kb3dTaXplKHdpbmRvd0lkLCBuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dJZCA9PT0gJ2luX2dhbWUnIHx8IHdpbmRvd0lkID09PSAnaW5fZ2FtZV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JSAtIDMycHgpYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvd0lkID09PSAnaW5fbG9iYnknIHx8IHdpbmRvd0lkID09PSAnaW5fbG9iYnlfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlIDw9IDAuNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYWdNb3ZlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbS5vbm1vdXNlZG93biA9IGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZHJhZ01vdmUodGhpcy5fbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRNb25pdG9yc0xpc3QoKTogUHJvbWlzZSA8IGFueSA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBhbnkgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLnV0aWxzLmdldE1vbml0b3JzTGlzdChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2luZG93U3RhdGUoKTogUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgR2V0V2luZG93U3RhdGVSZXN1bHQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldFdpbmRvd1N0YXRlKGlkLCByZXNvbHZlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q3VycmVudEluZm8oKTogUHJvbWlzZSA8IE93V2luZG93SW5mbyA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQud2luZG93KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2J0YWluKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gfCBudWxsID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNiID0gcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICYmIHJlcy53aW5kb3cgJiYgcmVzLndpbmRvdy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gcmVzLndpbmRvdy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSByZXMud2luZG93Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy53aW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm9idGFpbkRlY2xhcmVkV2luZG93KHRoaXMuX25hbWUsIGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBhc3N1cmVPYnRhaW5lZCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5vYnRhaW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW50ZXJuYWxDbG9zZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2UoaWQsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgVGltZXJEZWxlZ2F0ZSB7XHJcbiAgICBvblRpbWVyKGlkPzogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNsYXNzIFRpbWVyIHtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBfdGltZXJJZDogbnVtYmVyfG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9kZWxlZ2F0ZTogVGltZXJEZWxlZ2F0ZTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd2FpdChpbnRlcnZhbEluTVM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBpbnRlcnZhbEluTVMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogVGltZXJEZWxlZ2F0ZSwgaWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RhcnQoaW50ZXJ2YWxJbk1TOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fdGltZXJJZCA9IDxudW1iZXI+c2V0VGltZW91dCh0aGlzLmhhbmRsZVRpbWVyRXZlbnQsIGludGVydmFsSW5NUyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZXJJZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcklkKTtcclxuICAgICAgICB0aGlzLl90aW1lcklkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgaGFuZGxlVGltZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLl90aW1lcklkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kZWxlZ2F0ZS5vblRpbWVyKHRoaXMuX2lkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPV0dhbWVzIH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LWdhbWVzJztcclxuaW1wb3J0IHsgT1dHYW1lTGlzdGVuZXIgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctZ2FtZS1saXN0ZW5lcic7XHJcbmltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcbmltcG9ydCB7IE9XR2FtZXNFdmVudHMgfSBmcm9tICcuLi8uLi9vZGstdHMvb3ctZ2FtZXMtZXZlbnRzJztcclxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuLi8uLi9vZGstdHMvZGF0YWJhc2UnO1xyXG5pbXBvcnQgUnVubmluZ0dhbWVJbmZvID0gb3ZlcndvbGYuZ2FtZXMuUnVubmluZ0dhbWVJbmZvO1xyXG5pbXBvcnQgeyB3aW5kb3dOYW1lcywgcmFpbmJvd0NsYXNzSWQsIGludGVyZXN0aW5nRmVhdHVyZXMyIH0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuXHJcbmxldCBnYW1lTW9kZTogc3RyaW5nLCBnYW1lU3RhdHVzOiBzdHJpbmcsIGN1cnJlbnRXaW5kb3c6IHN0cmluZztcclxuXHJcbmZ1bmN0aW9uIGxvZ0xpbmUodHlwZTogc3RyaW5nLCBsb2c6IHN0cmluZywgZGF0YSkge1xyXG4gICAgY29uc3QgbG9nTGluZSA9ICdcIicgKyBsb2cgKyAnXCI6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpO1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnbG9nJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ0xpbmUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihsb2dMaW5lKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dhcm4nKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGxvZ0xpbmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUaGUgYmFja2dyb3VuZCBjb250cm9sbGVyIGhvbGRzIGFsbCBvZiB0aGUgYXBwJ3MgYmFja2dyb3VuZCBsb2dpYyAtIGhlbmNlIGl0cyBuYW1lLiBpdCBoYXNcclxuLy8gbWFueSBwb3NzaWJsZSB1c2UgY2FzZXMsIGZvciBleGFtcGxlIHNoYXJpbmcgZGF0YSBiZXR3ZWVuIHdpbmRvd3MsIG9yLCBpbiBvdXIgY2FzZSxcclxuLy8gbWFuYWdpbmcgd2hpY2ggd2luZG93IGlzIGN1cnJlbnRseSBwcmVzZW50ZWQgdG8gdGhlIHVzZXIuIFRvIHRoYXQgZW5kLCBpdCBob2xkcyBhIGRpY3Rpb25hcnlcclxuLy8gb2YgdGhlIHdpbmRvd3MgYXZhaWxhYmxlIGluIHRoZSBhcHAuXHJcbi8vIE91ciBiYWNrZ3JvdW5kIGNvbnRyb2xsZXIgaW1wbGVtZW50cyB0aGUgU2luZ2xldG9uIGRlc2lnbiBwYXR0ZXJuLCBzaW5jZSBvbmx5IG9uZVxyXG4vLyBpbnN0YW5jZSBvZiBpdCBzaG91bGQgZXhpc3QuXHJcbmNsYXNzIEJhY2tncm91bmRDb250cm9sbGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQmFja2dyb3VuZENvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF93aW5kb3dzID0ge307XHJcbiAgICBwcml2YXRlIF9yYWluYm93R2FtZUxpc3RlbmVyOiBPV0dhbWVMaXN0ZW5lcjtcclxuICAgIHByaXZhdGUgX3JhaW5ib3dHYW1lRXZlbnRzTGlzdGVuZXI6IE9XR2FtZXNFdmVudHM7XHJcbiAgICBwcml2YXRlIF9ldmVudHNMb2c6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfaW5mb0xvZzogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFBvcHVsYXRpbmcgdGhlIGJhY2tncm91bmQgY29udHJvbGxlcidzIHdpbmRvdyBkaWN0aW9uYXJ5XHJcbiAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5kZXNrdG9wXSA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5kZXNrdG9wKTtcclxuICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0gPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuaW5HYW1lKTtcclxuICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluTG9iYnldID0gbmV3IE9XV2luZG93KHdpbmRvd05hbWVzLmluTG9iYnkpO1xyXG4gICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuc3RhdGlzdGljc10gPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkdhbWVEZXNrdG9wT25seV0gPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuaW5HYW1lRGVza3RvcE9ubHkpO1xyXG4gICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XSA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHkpO1xyXG4gICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuc3RhdGlzdGljc0Rlc2t0b3BPbmx5XSA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzRGVza3RvcE9ubHkpO1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiBhIHJhaW5ib3cgZ2FtZSBpcyBzdGFydGVkIG9yIGlzIGVuZGVkLCB0b2dnbGUgdGhlIGFwcCdzIHdpbmRvd3NcclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUxpc3RlbmVyID0gbmV3IE9XR2FtZUxpc3RlbmVyKHtcclxuICAgICAgICAgICAgb25HYW1lU3RhcnRlZDogdGhpcy50b2dnbGVXaW5kb3dzLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIG9uR2FtZUVuZGVkOiB0aGlzLnRvZ2dsZVdpbmRvd3MuYmluZCh0aGlzKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUV2ZW50c0xpc3RlbmVyID0gbmV3IE9XR2FtZXNFdmVudHMoe1xyXG4gICAgICAgICAgICBvbkluZm9VcGRhdGVzOiB0aGlzLm9uSW5mb1VwZGF0ZXMuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgb25OZXdFdmVudHM6IHRoaXMub25OZXdFdmVudHMuYmluZCh0aGlzKVxyXG4gICAgICAgIH0sIGludGVyZXN0aW5nRmVhdHVyZXMyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlSURCKCd3ZWVrcycsICd3ZWVrJywgMzcpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YWJhc2UuY3JlYXRlSURCKCdkYXlzJywgJ2RhdGUnLCAzOCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YWJhc2UuY3JlYXRlSURCKCdtYXRjaGVzJywgJ3RpbWVTdGFtcCcsIDM5LCBbJ3RpbWVTdGFtcEluZGV4JywgJ21hdGNoSWQnLCAnZ2FtZU1vZGUnXSkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuZGF0YWJhc2UuaW5pdEFsbElEQigpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW1wbGVtZW50aW5nIHRoZSBTaW5nbGV0b24gZGVzaWduIHBhdHRlcm5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogQmFja2dyb3VuZENvbnRyb2xsZXIge1xyXG4gICAgICAgIGlmICghQmFja2dyb3VuZENvbnRyb2xsZXIuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEJhY2tncm91bmRDb250cm9sbGVyLl9pbnN0YW5jZSA9IG5ldyBCYWNrZ3JvdW5kQ29udHJvbGxlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEJhY2tncm91bmRDb250cm9sbGVyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIHJ1bm5pbmcgdGhlIGFwcCwgc3RhcnQgbGlzdGVuaW5nIHRvIGdhbWVzJyBzdGF0dXMgYW5kIGRlY2lkZSB3aGljaCB3aW5kb3cgc2hvdWxkXHJcbiAgICAvLyBiZSBsYXVuY2hlZCBmaXJzdCwgYmFzZWQgb24gd2hldGhlciByYWluYm93IGlzIGN1cnJlbnRseSBydW5uaW5nXHJcbiAgICBwdWJsaWMgYXN5bmMgcnVuKCkge1xyXG4gICAgICAgIHRoaXMuX3JhaW5ib3dHYW1lRXZlbnRzTGlzdGVuZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLl9yYWluYm93R2FtZUxpc3RlbmVyLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJXaW5kb3cgPSBhd2FpdCB0aGlzLmlzUmFpbmJvd1J1bm5pbmcoKSA/IG51bGwgOiB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmRlc2t0b3BdLnJlc3RvcmUoKTtcclxuICAgICAgICBpZiAoY3VycldpbmRvdykge1xyXG4gICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnb3BlbiB3aW5kb3cnLCBjdXJyV2luZG93KTtcclxuICAgICAgICAgICAgY3VycmVudFdpbmRvdyA9IGN1cnJXaW5kb3c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9nZ2xlV2luZG93cyhpbmZvKSB7XHJcbiAgICAgICAgaWYgKCFpbmZvIHx8ICF0aGlzLmlzR2FtZVJhaW5ib3coaW5mbykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZm8uaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuZGVza3RvcF0uY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5kZXNrdG9wKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLnN0YXRpc3RpY3NdLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5HYW1lRGVza3RvcE9ubHldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLnN0YXRpc3RpY3NEZXNrdG9wT25seV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5kZXNrdG9wXS5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnb3BlbiB3aW5kb3cnLCB3aW5kb3dOYW1lcy5kZXNrdG9wKTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRXaW5kb3cgPSAnZGVza3RvcCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaXNSYWluYm93UnVubmluZygpOiBQcm9taXNlIDwgYm9vbGVhbiA+IHtcclxuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgT1dHYW1lcy5nZXRSdW5uaW5nR2FtZUluZm8oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluZm8gJiYgaW5mby5pc1J1bm5pbmcgJiYgdGhpcy5pc0dhbWVSYWluYm93KGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElkZW50aWZ5IHdoZXRoZXIgdGhlIFJ1bm5pbmdHYW1lSW5mbyBvYmplY3Qgd2UgaGF2ZSByZWZlcmVuY2VzIFJhaW5ib3dcclxuICAgIHByaXZhdGUgaXNHYW1lUmFpbmJvdyhpbmZvOiBSdW5uaW5nR2FtZUluZm8pIHtcclxuICAgICAgICByZXR1cm4gaW5mby5jbGFzc0lkID09PSByYWluYm93Q2xhc3NJZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uSW5mb1VwZGF0ZXMoaW5mbykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKCdtYXRjaF9pbmZvJyBpbiBpbmZvICYmICdnYW1lX21vZGUnIGluIGluZm8ubWF0Y2hfaW5mbykgfHxcclxuICAgICAgICAgICAgKCdnYW1lX2luZm8nIGluIGluZm8gJiYgJ3BoYXNlJyBpbiBpbmZvLmdhbWVfaW5mbyAmJiBpbmZvLmdhbWVfaW5mby5waGFzZSA9PT0gJ2xvYmJ5JykgfHxcclxuICAgICAgICAgICAgKCdyb3VuZCcgaW4gaW5mbyAmJiAnbnVtYmVyJyBpbiBpbmZvLnJvdW5kICYmIGluZm8ucm91bmQgPT09IG51bGwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLm1hdGNoX2luZm8pIHtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlID0gaW5mby5tYXRjaF9pbmZvLmdhbWVfbW9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGUgIT09ICdOT05FJyAmJlxyXG4gICAgICAgICAgICAgICAgISgnZ2FtZV9pbmZvJyBpbiBpbmZvICYmICdwaGFzZScgaW4gaW5mby5nYW1lX2luZm8gJiYgaW5mby5nYW1lX2luZm8ucGhhc2UgPT09ICdsb2JieScpICYmXHJcbiAgICAgICAgICAgICAgICAhKCdyb3VuZCcgaW4gaW5mbyAmJiAnbnVtYmVyJyBpbiBpbmZvLnJvdW5kICYmIGluZm8ucm91bmQgPT09IG51bGwpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXR1cyA9ICdzZWFyY2hpbmcnO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMgPSAnbG9iYnknO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHkgPT09ICdcIjBcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieV0ucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnNldHRpbmdzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZSh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5nc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ2Nsb3NlIHdpbmRvdycsIHdpbmRvd05hbWVzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnN0YXRpc3RpY3NEZXNrdG9wT25seSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdvcGVuIHdpbmRvdycsIHdpbmRvd05hbWVzLmluTG9iYnkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5HYW1lXS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XS5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ2Nsb3NlIHdpbmRvdycsIHdpbmRvd05hbWVzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnN0YXRpc3RpY3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ2Nsb3NlIHdpbmRvdycsIHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc3RhdGlzdGljc0Rlc2t0b3BPbmx5LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5nc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ29wZW4gd2luZG93Jywgd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCdyb3VuZCcgaW4gaW5mbyAmJiBpbmZvLnJvdW5kLm51bWJlciAhPSBudWxsICYmIGdhbWVTdGF0dXMgIT09ICdpbl9nYW1lJykge1xyXG4gICAgICAgICAgICBnYW1lU3RhdHVzID0gJ2luX2dhbWUnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSA9PT0gJ1wiMFwiJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5kb3dzW3dpbmRvd05hbWVzLmluR2FtZV0ucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnN0YXRpc3RpY3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5zZXR0aW5nc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jbG9zZSh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzRGVza3RvcE9ubHksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc3RhdGlzdGljc0Rlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdjbG9zZSB3aW5kb3cnLCB3aW5kb3dOYW1lcy5pbkxvYmJ5ICsgJyArICcgKyB3aW5kb3dOYW1lcy5pbkxvYmJ5RGVza3RvcE9ubHkpO1xyXG4gICAgICAgICAgICAgICAgbG9nTGluZSgnbG9nJywgJ29wZW4gd2luZG93Jywgd2luZG93TmFtZXMuaW5HYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dpbmRvd3Nbd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkxvYmJ5XS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93c1t3aW5kb3dOYW1lcy5pbkdhbWVEZXNrdG9wT25seV0ucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2Uod2luZG93TmFtZXMuc2V0dGluZ3MsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNsb3NlKHdpbmRvd05hbWVzLnNldHRpbmdzRGVza3RvcE9ubHksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuc2V0dGluZ3NEZXNrdG9wT25seSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2dMaW5lKCdsb2cnLCAnY2xvc2Ugd2luZG93Jywgd2luZG93TmFtZXMuaW5Mb2JieURlc2t0b3BPbmx5ICsgJyArICcgKyB3aW5kb3dOYW1lcy5pbkxvYmJ5KTtcclxuICAgICAgICAgICAgICAgIGxvZ0xpbmUoJ2xvZycsICdvcGVuIHdpbmRvdycsIHdpbmRvd05hbWVzLmluR2FtZURlc2t0b3BPbmx5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9nTGluZSgnbG9nJywgJ2luZm9FdmVudCcsIGluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25OZXdFdmVudHMoZXZlbnRJbmZvKSB7XHJcbiAgICAgICAgbG9nTGluZSgnbG9nJywgJ2luZm9FdmVudCcsIGV2ZW50SW5mbyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJhY2tncm91bmRDb250cm9sbGVyLmluc3RhbmNlKCkucnVuKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=