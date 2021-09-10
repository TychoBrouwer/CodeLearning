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
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
let owWindow, mode, mode2, displayedGames = { begin: 0, end: 0 }, moreGames, showMoreGames, userTime = { year: 0, month: 0, unixDate: 0, unixEndDate: 0 }, gameList, loadMore, showAll, settingDivs;
const controllers = new controllers_1.Controllers();
const localstorage = new localstorage_1.Localstorage();
const database = new Database_1.Database();
const promise1 = localstorage.initiateLocalStorage()
    .then(() => controllers.setTheme());
addEventListener('storage', () => {
    controllers.setTheme();
});
const closeWindowButton = document.getElementById('closeWindowButton');
closeWindowButton.addEventListener('click', () => {
    console.log('test');
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
    constructor(windowId) {
        if (mode === 'desktop') {
            if (mode2 === 'website') {
                super(consts_1.windowNames.websiteDesktopOnly, 'desktop');
                owWindow.scaleWindow('website_desktop', 1600, 900, JSON.parse(localStorage.scaleSlider));
            }
            else {
                super(consts_1.windowNames.statisticsDesktopOnly, 'desktop');
                owWindow.scaleWindow('statistics_desktop', 1600, 900, JSON.parse(localStorage.scaleSlider));
            }
        }
        else {
            if (mode2 === 'website') {
                super(consts_1.windowNames.website, 'ingame');
                const promise = owWindow.scaleWindow('website_in_game', 1600, 900, JSON.parse(localStorage.scaleSlider))
                    .then(() => owWindow.changeWindowLocation('center-center', 'website_in_game'));
            }
            else {
                super(consts_1.windowNames.website, 'ingame');
                const promise = owWindow.scaleWindow('statistics_in_game', 1600, 900, JSON.parse(localStorage.scaleSlider))
                    .then(() => owWindow.changeWindowLocation('center-center', 'statistics_in_game'));
            }
        }
        owWindow.restore();
        this.setToggleHotkeyBehavior();
        if (windowId === 'statistics') {
            this.printStatistics();
        }
        else if (windowId === 'website') {
            this.printWebsite();
        }
    }
    static instance(windowId) {
        if (!this._instance) {
            this._instance = new Statistics(windowId);
        }
        return this._instance;
    }
    printStatistics() {
        const promise = this.printStatisticsHTML()
            .then(() => {
            gameList = document.getElementById('gameList');
            loadMore = document.getElementById('loadMore');
            showAll = document.getElementById('showAll');
            settingDivs = document.querySelectorAll('.settingOptions');
            this.setShowAllBtn();
            const endDate = Math.round(new Date().getTime() / 1000);
            displayedGames.begin = 0;
            displayedGames.end = 10;
            this.printGameList(null, endDate, 0, 10, displayedGames.end);
            this.setDateSelector();
            this.setDisplayMoreGames();
        });
    }
    printWebsite() {
        const iframe = `<iframe src="https://r6db.net" width="1600" height="868"></iframe>`;
        document.getElementById('main').innerHTML = iframe;
    }
    printStatisticsHTML() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                document.getElementById('main').innerHTML = `<div class="left-body" id="gameListContainer"> <div id="dateSelector"> <div id="dropdownContainer"> <div class="custom-select settingOptions" id="setMonth"> <div class="custom-select__trigger"> <span>January</span> <div class="arrow"></div></div><div class="custom-options"> <span class="custom-option" settingMode="month" value='0'>January</span> <span class="custom-option" settingMode="month" value='1'>February</span> <span class="custom-option" settingMode="month" value='2'>March</span> <span class="custom-option" settingMode="month" value='3'>April</span> <span class="custom-option" settingMode="month" value='4'>May</span> <span class="custom-option" settingMode="month" value='5'>June</span> <span class="custom-option" settingMode="month" value='6'>July</span> <span class="custom-option" settingMode="month" value='7'>August</span> <span class="custom-option" settingMode="month" value='8'>September</span> <span class="custom-option" settingMode="month" value='9'>October</span> <span class="custom-option" settingMode="month" value='10'>November</span> <span class="custom-option" settingMode="month" value='11'>December</span> </div></div><div class="custom-select settingOptions" id="setYear"> <div class="custom-select__trigger"> <span>2021</span> <div class="arrow"></div></div><div class="custom-options"> </div></div></div><div id="showAll" class="active"> <p>Show all</p></div></div><div id="gameList"> </div><div id="loadMore" class="md-whiteframe-1dp"> </div></div><div id="gameHistory-right" class="right-body"> <div class="detailed-left-body"> <div id="scoreboard"> <div id="blue-table" class="table md-whiteframe-1dp"> <div id="blue-header" class="header"> <div class="th-rank"></div><div class="th-username">Username</div><div class="th-country">Country</div><div class="th-kills">Kills</div><div class="th-deaths">Deaths</div><div class="th-kd">K/D</div><div class="th-kpr">KPR</div><div class="th-score">Score</div></div><div id="blue-player-table" class="player-table"></div></div><div id="orange-table" class="table md-whiteframe-1dp"> <div id="orange-header" class="header"> <div class="th-rank"></div><div class="th-username">Username</div><div class="th-country">Country</div><div class="th-kills">Kills</div><div class="th-deaths">Deaths</div><div class="th-kd">K/D</div><div class="th-kpr">KPR</div><div class="th-score">Score</div></div><div id="orange-player-table" class="player-table"></div></div></div><div id="bottom-row" class="md-whiteframe-1dp"> <div id="coming-soon"> <h1>COMING SOON</h1> <p>personal detailed stats of the match</p></div><div id="ad-400x300" class="ad-400x300 ad-lobby"></div></div></div><div id="right-roundstats" class="detailed-right-body md-whiteframe-1dp"> </div></div>`;
                document.getElementById('body').innerHTML += `<script src="https://content.overwolf.com/libs/ads/latest/owads.min.js" async onload="onOwAdReady()"></script> <script>function onOwAdReady(){setTimeout(()=>{if (!owAd){console.error("Couldn't load owads.min.js!");}overwolf.windows.onStateChanged.removeListener(onWindowStateChanged); overwolf.windows.onStateChanged.addListener(onWindowStateChanged);}, 500); const owAd=new OwAd(document.getElementById("ad-400x300"),{size:{width: 400, height: 300}}); function onWindowStateChanged(state){if (state && owAd){if (state.window_state==="minimized"){owAd.removeAd();}else if ( state.window_previous_state==="minimized" && state.window_state==="normal" ){owAd.refreshAd();}}}}</script>`;
                resolve();
            }));
        });
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
                showAll.classList.remove('active');
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
    setShowAllBtn() {
        showAll.addEventListener('click', () => {
            if (!showAll.classList.contains('active')) {
                gameList.innerHTML = '';
                const endDate = Math.round(new Date().getTime() / 1000);
                displayedGames.begin = 0;
                displayedGames.end = 10;
                this.printGameList(null, endDate, 0, 10, displayedGames.end);
                showAll.classList.add('active');
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
    const windows = Object.keys(data);
    if (windows.includes('website_desktop') || windows.includes('website_in_game')) {
        mode2 = 'website';
    }
    else {
        mode2 = 'statistics';
    }
    if (windows.includes('in_lobby_desktop_only') || windows.includes('in_game_desktop_only') || windows.includes('desktop')) {
        mode = 'desktop';
        if (mode2 === 'website') {
            owWindow = new ow_window_1.OWWindow(consts_1.windowNames.websiteDesktopOnly);
        }
        else {
            owWindow = new ow_window_1.OWWindow(consts_1.windowNames.statisticsDesktopOnly);
        }
    }
    else {
        if (mode2 === 'website') {
            owWindow = new ow_window_1.OWWindow(consts_1.windowNames.website);
        }
        else {
            owWindow = new ow_window_1.OWWindow(consts_1.windowNames.statistics);
        }
    }
    if (mode2 === 'website') {
        Statistics.instance('website');
    }
    else {
        Statistics.instance('statistics');
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2RrLXRzL0RhdGFiYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvY29udHJvbGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29kay10cy9vdy1ob3RrZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9vZGstdHMvb3ctd2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvQXBwV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsTUFB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QUM7d0JBQzlELFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO3dCQUNsRSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO3dCQUN2RSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO3dCQUN6RSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDO3dCQUNyRSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO3dCQUN6RSxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO3dCQUMzRSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO3dCQUM3RSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO3dCQUN6RSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDO3FCQUNoRjtvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDbkMsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUVoQyxJQUFJLFFBQVEsQ0FBQyxN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QixDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQzVFLEtBQUssR0FBRyxTQUFTLENBQUM7S0FDckI7U0FBTTtRQUNILEtBQUssR0FBRyxZQUFZLENBQUM7S0FDeEI7SUFFRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUN0SCxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBRWpCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNyQixRQUFRLEdBQUcsSUFBSSxvQkFBUSxDQUFDLG9CQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0gsUUFBUSxHQUFHLElBQUksb0JBQVEsQ0FBQyxvQkFBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDOUQ7S0FDSjtTQUFNO1FBQ0gsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3JCLFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsb0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0gsUUFBUSxHQUFHLElBQUksb0JBQVEsQ0FBQyxvQkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25EO0tBQ0o7SUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDckIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNsQztTQUFNO1FBQ0gsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNyQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InN0YXRpc3RpY3Mvc3RhdGlzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3B1YmxpYy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MudHNcIik7XG4iLCJjb25zdCByYWluYm93Q2xhc3NJZCA9IDEwODI2O1xyXG5cclxuY29uc3QgaW50ZXJlc3RpbmdGZWF0dXJlczEgPSBbXHJcbiAgICAnZ2VwX2ludGVybmFsJyxcclxuICAgICdnYW1lX2luZm8nLFxyXG4gICAgJ21hdGNoJyxcclxuICAgICdtYXRjaF9pbmZvJyxcclxuICAgICdyb3N0ZXInLFxyXG4gICAgJ2tpbGwnLFxyXG4gICAgJ2RlYXRoJyxcclxuICAgICdtZScsXHJcbl07XHJcblxyXG5jb25zdCBpbnRlcmVzdGluZ0ZlYXR1cmVzMiA9IFtcclxuICAgICdnZXBfaW50ZXJuYWwnLFxyXG4gICAgJ2dhbWVfaW5mbycsXHJcbiAgICAnbWF0Y2gnLFxyXG4gICAgJ21hdGNoX2luZm8nLFxyXG5dO1xyXG5cclxuY29uc3Qgd2luZG93TmFtZXMgPSB7XHJcbiAgICBkZXNrdG9wOiAnZGVza3RvcCcsXHJcbiAgICBpbkxvYmJ5OiAnaW5fbG9iYnknLFxyXG4gICAgaW5HYW1lOiAnaW5fZ2FtZScsXHJcbiAgICBpbkxvYmJ5RGVza3RvcE9ubHk6ICdpbl9sb2JieV9kZXNrdG9wX29ubHknLFxyXG4gICAgaW5HYW1lRGVza3RvcE9ubHk6ICdpbl9nYW1lX2Rlc2t0b3Bfb25seScsXHJcbiAgICBzZXR0aW5nczogJ3NldHRpbmdzX2luX2dhbWUnLFxyXG4gICAgc2V0dGluZ3NEZXNrdG9wT25seTogJ3NldHRpbmdzX2Rlc2t0b3AnLFxyXG4gICAgc3RhdGlzdGljczogJ3N0YXRpc3RpY3NfaW5fZ2FtZScsXHJcbiAgICBzdGF0aXN0aWNzRGVza3RvcE9ubHk6ICdzdGF0aXN0aWNzX2Rlc2t0b3AnLFxyXG4gICAgd2Vic2l0ZTogJ3dlYnNpdGVfaW5fZ2FtZScsXHJcbiAgICB3ZWJzaXRlRGVza3RvcE9ubHk6ICd3ZWJzaXRlX2Rlc2t0b3AnXHJcbn07XHJcblxyXG5jb25zdCBob3RrZXlzID0ge1xyXG4gICAgdG9nZ2xlOiAnc2hvd2hpZGUnLFxyXG59O1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZFID0gW1xyXG4gICAgJ09QRVJBVElPTlMnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWRV9MT05FV09MRicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZFJyxcclxuICAgICdNQVRDSE1BS0lOR19QVkVfUEFSVFknLFxyXG5dO1xyXG5cclxuY29uc3QgZ2FtZU1vZGVzUFZQID0gW1xyXG4gICAgJ01BVENITUFLSU5HX1BWUF9ORVdDT01FUicsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQJyxcclxuICAgICdNQVRDSE1BS0lOR19QVlBfRVZFTlQnLFxyXG4gICAgJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcsXHJcbiAgICAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcsXHJcbiAgICAnQ1VTVE9NR0FNRV9QVlAnLFxyXG4gICAgJ0NVU1RPTUdBTUVfUFZQX0RFRElDQVRFRCcsXHJcbl07XHJcblxyXG5jb25zdCBkYXRhYmFzZU9iamVjdCA9IHtcclxuICAgIE1BVENITUFLSU5HX1BWUF9SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlA6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBNQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9LCBDVVNUT01HQU1FX1BWUF9ERURJQ0FURUQ6IHtcclxuICAgICAgICBraWxsczogMCxcclxuICAgICAgICBkZWF0aHM6IDAsXHJcbiAgICAgICAgd2luczogMCxcclxuICAgICAgICBsb3NzZXM6IDAsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNlYXNvbkNvbG9ycyA9IHtcclxuICAgIDY6JyMwMDUwYjMnLFxyXG4gICAgNzonI2NhMzYxYycsXHJcbiAgICA4OicjMDA2NTQzJyxcclxuICAgIDk6JyNmZmMxMTMnLFxyXG4gICAgMTA6JyM5NDlmMzknLFxyXG4gICAgMTE6JyM4MWEwYzEnLFxyXG4gICAgMTI6JyNhYTg1NGYnLFxyXG4gICAgMTM6JyNkMjAwNWEnLFxyXG4gICAgMTQ6JyMzMDQzOTUnLFxyXG4gICAgMTU6JyMxMzYzMGMnLFxyXG4gICAgMTY6JyMwNjlkYjMnLFxyXG4gICAgMTc6JyM5NDZhOTcnLFxyXG4gICAgMTg6JyMyYjdlOWEnLFxyXG4gICAgMTk6JyM2Y2E1MTEnLFxyXG4gICAgMjA6JyNkMTQwMDcnLFxyXG59XHJcblxyXG5jb25zdCBvcGVyYXRvcnMgPSB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJTbGVkZ2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjFcIlxyXG4gICAgfSxcclxuICAgIDEwMjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJUaGF0Y2hlclwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjU6MVwiXHJcbiAgICB9LFxyXG4gICAgNTEzOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoyXCJcclxuICAgIH0sXHJcbiAgICAxMDI1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGhlcm1pdGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjJcIlxyXG4gICAgfSxcclxuICAgIDc3MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIlR3aXRjaFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6M1wiXHJcbiAgICB9LFxyXG4gICAgMTAyNjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1vbnRhZ25lXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTozXCJcclxuICAgIH0sXHJcbiAgICAyNTk6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJHbGF6XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjo0XCJcclxuICAgIH0sXHJcbiAgICA1MTU6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGdXplXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzo0XCJcclxuICAgIH0sXHJcbiAgICAyNjA6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJCbGl0elwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6NVwiXHJcbiAgICB9LFxyXG4gICAgNTE2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSVFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjVcIlxyXG4gICAgfSxcclxuICAgIDI2MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJ1Y2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjZcIlxyXG4gICAgfSxcclxuICAgIDI2Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkJsYWNrYmVhcmRcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjdcIlxyXG4gICAgfSxcclxuICAgIDI2Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhcGl0YW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjhcIlxyXG4gICAgfSxcclxuICAgIDI2NDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkhpYmFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6OVwiXHJcbiAgICB9LFxyXG4gICAgMjY1OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSmFja2FsXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpBXCJcclxuICAgIH0sXHJcbiAgICAyNjY6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJZaW5nXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpCXCJcclxuICAgIH0sXHJcbiAgICA1MjM6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJab2ZpYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6Q1wiXHJcbiAgICB9LFxyXG4gICAgMjY4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRG9ra2FlYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOkRcIlxyXG4gICAgfSxcclxuICAgIDUyNToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxpb25cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkVcIlxyXG4gICAgfSxcclxuICAgIDc4MToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkZpbmthXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDpFXCJcclxuICAgIH0sXHJcbiAgICAyNzE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNYXZlcmlja1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTBcIlxyXG4gICAgfSxcclxuICAgIDI3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk5vbWFkXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxMVwiXHJcbiAgICB9LFxyXG4gICAgNTI5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiR3JpZGxvY2tcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjEyXCJcclxuICAgIH0sXHJcbiAgICAyNzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJOb2trXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxM1wiXHJcbiAgICB9LFxyXG4gICAgMjc3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQW1hcnVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE2XCJcclxuICAgIH0sXHJcbiAgICAyNzg6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJLYWxpXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjoxN1wiXHJcbiAgICB9LFxyXG4gICAgMjgwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiSWFuYVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTlcIlxyXG4gICAgfSxcclxuICAgIDc5MDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImF0a1wiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkFjZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjQ6MTdcIlxyXG4gICAgfSxcclxuICAgIDI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiYXRrXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiWmVyb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjE6MUJcIlxyXG4gICAgfSxcclxuICAgIDE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJhdGtcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJSZWNydWl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwicmVjcnVpdFwiXHJcbiAgICB9LFxyXG4gICAgMjU2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiU21va2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFcIlxyXG4gICAgfSxcclxuICAgIDUxMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk11dGVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjFcIlxyXG4gICAgfSxcclxuICAgIDI1Nzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhc3RsZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MlwiXHJcbiAgICB9LFxyXG4gICAgNzY5OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUHVsc2VcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI0OjJcIlxyXG4gICAgfSxcclxuICAgIDI1ODoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkRvY1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6M1wiXHJcbiAgICB9LFxyXG4gICAgNTE0OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiUm9va1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6M1wiXHJcbiAgICB9LFxyXG4gICAgNzcxOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2Fwa2FuXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo0XCJcclxuICAgIH0sXHJcbiAgICAxMDI3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVGFjaGFua2FcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjRcIlxyXG4gICAgfSxcclxuICAgIDc3Mjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkphZ2VyXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNDo1XCJcclxuICAgIH0sXHJcbiAgICAxMDI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQmFuZGl0XCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiNTo1XCJcclxuICAgIH0sXHJcbiAgICA1MTc6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJGcm9zdFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6NlwiXHJcbiAgICB9LFxyXG4gICAgNTE4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiVmFsa3lyaWVcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjdcIlxyXG4gICAgfSxcclxuICAgIDUxOToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNhdmVpcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjhcIlxyXG4gICAgfSxcclxuICAgIDUyMDoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkVjaG9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOjlcIlxyXG4gICAgfSxcclxuICAgIDUyMToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1pcmFcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkFcIlxyXG4gICAgfSxcclxuICAgIDUyMjoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkxlc2lvblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6QlwiXHJcbiAgICB9LFxyXG4gICAgMjY3OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiRWxhXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMjpDXCJcclxuICAgIH0sXHJcbiAgICA1MjQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJWaWdpbFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6RFwiXHJcbiAgICB9LFxyXG4gICAgMjcwOiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiTWFlc3Ryb1wiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6RlwiXHJcbiAgICB9LFxyXG4gICAgNTI2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQWxpYmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIzOkZcIlxyXG4gICAgfSxcclxuICAgIDUyNzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkNsYXNoXCIsXHJcbiAgICAgICAgXCJ1Ymlzb2Z0X2lkXCI6IFwiMzoxMFwiXHJcbiAgICB9LFxyXG4gICAgNTI4OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiS2FpZFwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTFcIlxyXG4gICAgfSxcclxuICAgIDI3Mzoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk1venppZVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTJcIlxyXG4gICAgfSxcclxuICAgIDI3NToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIldhcmRlblwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjI6MTRcIlxyXG4gICAgfSxcclxuICAgIDI3Njoge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIkdveW9cIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE1XCJcclxuICAgIH0sXHJcbiAgICA1MzQ6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJXYW1haVwiLFxyXG4gICAgICAgIFwidWJpc29mdF9pZFwiOiBcIjM6MTdcIlxyXG4gICAgfSxcclxuICAgIDI3OToge1xyXG4gICAgICAgIFwic2lkZVwiOiBcImRlZlwiLFxyXG4gICAgICAgIFwib3BlcmF0b3JfbmFtZVwiOiBcIk9yeXhcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjE4XCJcclxuICAgIH0sXHJcbiAgICAyODE6IHtcclxuICAgICAgICBcInNpZGVcIjogXCJkZWZcIixcclxuICAgICAgICBcIm9wZXJhdG9yX25hbWVcIjogXCJNZWx1c2lcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCIyOjFBXCJcclxuICAgIH0sXHJcbiAgICAxMDQ2OiB7XHJcbiAgICAgICAgXCJzaWRlXCI6IFwiZGVmXCIsXHJcbiAgICAgICAgXCJvcGVyYXRvcl9uYW1lXCI6IFwiQXJ1bmlcIixcclxuICAgICAgICBcInViaXNvZnRfaWRcIjogXCI1OjE3XCJcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJhbmtPZmZzZXQgPSB7XHJcbiAgICAwOiAwLFxyXG4gICAgMTogMixcclxuICAgIDI6IDMsXHJcbiAgICAzOiA0LFxyXG4gICAgNDogNSxcclxuICAgIDU6IDcsXHJcbiAgICA2OiA4LFxyXG4gICAgNzogOSxcclxuICAgIDg6IDEwLFxyXG4gICAgOTogMTIsXHJcbiAgICAxMDogMTMsXHJcbiAgICAxMTogMTQsXHJcbiAgICAxMjogMTUsXHJcbiAgICAxMzogNTAsXHJcbiAgICAxNDogMTYsXHJcbiAgICAxNTogMTcsXHJcbiAgICAxNjogMTgsXHJcbiAgICAxNzogMTksXHJcbiAgICAxODogMjAsXHJcbiAgICAxOTogMjEsXHJcbiAgICAyMDogMjIsXHJcbiAgICAyMTogMjIsXHJcbiAgICAyMjogMjIsXHJcbiAgICAyMzogMjIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgcmFpbmJvd0NsYXNzSWQsXHJcbiAgICBpbnRlcmVzdGluZ0ZlYXR1cmVzMSxcclxuICAgIGludGVyZXN0aW5nRmVhdHVyZXMyLFxyXG4gICAgd2luZG93TmFtZXMsXHJcbiAgICBob3RrZXlzLFxyXG4gICAgZ2FtZU1vZGVzUFZQLFxyXG4gICAgZ2FtZU1vZGVzUFZFLFxyXG4gICAgZGF0YWJhc2VPYmplY3QsXHJcbiAgICBzZWFzb25Db2xvcnMsXHJcbiAgICByYW5rT2Zmc2V0LFxyXG4gICAgb3BlcmF0b3JzXHJcbn1cclxuIiwiaW1wb3J0IHsgZGF0YWJhc2VPYmplY3QgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcclxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVJREIobmFtZUlEQjogc3RyaW5nLCBrZXlQYXRoSURCOiBzdHJpbmcsIHZlcnNpb246IG51bWJlciwgaW5kZXhlcyA9IG51bGwpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicsIHZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlOiBJREJPYmplY3RTdG9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUobmFtZUlEQiwgeyBrZXlQYXRoOiBrZXlQYXRoSURCIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBldmVudC50YXJnZXQudHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleChpbmRleCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShvYmplY3RTdG9yZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RvcmVUb0lEQihuYW1lSURCOiBzdHJpbmcsIHZhbHVlSURCLCBpbml0aWF0ZUlEQjogYm9vbGVhbik6IFByb21pc2UgPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8YW55PiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGJPYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKG5hbWVJREIsICdyZWFkd3JpdGUnKS5vYmplY3RTdG9yZShuYW1lSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWluaXRpYXRlSURCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGJPYmplY3RTdG9yZS5wdXQodmFsdWVJREIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWF0ZUlEQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRiT2JqZWN0U3RvcmUuYWRkKHZhbHVlSURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlYWRGcm9tSURCKG5hbWVJREI6IHN0cmluZywga2V5SURCOiBudW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYiA9IGluZGV4ZWREQi5vcGVuKCdzdGF0c0RCJyk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERiLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3REYi5lcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0RGIub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYiA9IHJlcXVlc3REYi5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYk9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24obmFtZUlEQiwgJ3JlYWRvbmx5Jykub2JqZWN0U3RvcmUobmFtZUlEQik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gZGJPYmplY3RTdG9yZS5nZXQoa2V5SURCKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJlYWRGcm9tSURCUmFuZ2UobmFtZUlEQjogc3RyaW5nLCBpbmRleDogc3RyaW5nLCBiZWdpblJhbmdlOiBzdHJpbmcsIGVuZFJhbmdlOiBzdHJpbmcsIGJlZ2luOiBudW1iZXIsIGVuZDogbnVtYmVyKTogUHJvbWlzZSA8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGIgPSBpbmRleGVkREIub3Blbignc3RhdHNEQicpO1xyXG4gICAgICAgICAgICBsZXQga2V5UmFuZ2VWYWx1ZTogSURCS2V5UmFuZ2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmVnaW5SYW5nZSAmJiBlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLmJvdW5kKGJlZ2luUmFuZ2UsIGVuZFJhbmdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiZWdpblJhbmdlICYmICFlbmRSYW5nZSkge1xyXG4gICAgICAgICAgICAgICAga2V5UmFuZ2VWYWx1ZSA9IElEQktleVJhbmdlLmxvd2VyQm91bmQoYmVnaW5SYW5nZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWJlZ2luUmFuZ2UgJiYgZW5kUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGtleVJhbmdlVmFsdWUgPSBJREJLZXlSYW5nZS51cHBlckJvdW5kKGVuZFJhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3REYi5lcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0RGIuZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdERiLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGIgPSByZXF1ZXN0RGIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihuYW1lSURCLCAncmVhZG9ubHknKS5vYmplY3RTdG9yZShuYW1lSURCKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmluZGV4KGluZGV4KS5vcGVuQ3Vyc29yKGtleVJhbmdlVmFsdWUsICdwcmV2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwLCBqID0gMCwgcmVzdWx0ID0gbmV3IE9iamVjdDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJzb3IgPSByZXF1ZXN0LnJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmVnaW4gIT09IDAgJiYgaSA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmFkdmFuY2UoYmVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBiZWdpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJzb3IgJiYgaSA8PSBlbmQgJiYgaSA+PSBiZWdpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2N1cnNvci52YWx1ZS50aW1lU3RhbXBdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjdXJzb3IudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge31cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaW5pdEFsbElEQigpOiBQcm9taXNlIDxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdERheU9mWWVhcjogYW55ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3REYXlzT2ZZZWFyOiBhbnkgPSAodG9kYXkgLSBmaXJzdERheU9mWWVhcikgLyA4NjQwMDAwMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQldlZWtzID0gYCR7TWF0aC5jZWlsKChwYXN0RGF5c09mWWVhciArIGZpcnN0RGF5T2ZZZWFyLmdldERheSgpICsgMSkgLyA3KX0sJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQkRheXMgPSB0b2RheS5nZXREYXRlKCkgKyAnLCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJywnICsgdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUlEQldlZWtzOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlSURCV2Vla3NbaV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGFiYXNlT2JqZWN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsdWVJREJXZWVrcy53ZWVrID0ga2V5SURCV2Vla3M7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWVJREJEYXlzOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGFiYXNlT2JqZWN0KSk7XHJcbiAgICAgICAgICAgIHZhbHVlSURCRGF5cy5kYXRlID0ga2V5SURCRGF5cztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UxID0gdGhpcy5zdG9yZVRvSURCKCd3ZWVrcycsIHZhbHVlSURCV2Vla3MsIHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlMiA9IHRoaXMuc3RvcmVUb0lEQignZGF5cycsIHZhbHVlSURCRGF5cywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGRpc3BsYXlEYWlseVdlZWtseSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPGFueT4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdERheU9mWWVhcjogYW55ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3REYXlzT2ZZZWFyOiBhbnkgPSAodG9kYXkgLSBmaXJzdERheU9mWWVhcikgLyA4NjQwMDAwMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQldlZWtzID0gYCR7TWF0aC5jZWlsKChwYXN0RGF5c09mWWVhciArIGZpcnN0RGF5T2ZZZWFyLmdldERheSgpICsgMSkgLyA3KX0sJHt0b2RheS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUlEQkRheXMgPSB0b2RheS5nZXREYXRlKCkgKyAnLCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpICsgJywnICsgdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXR0aW5ncycpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UxID0gdGhpcy5yZWFkRnJvbUlEQignd2Vla3MnLCBrZXlJREJXZWVrcylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdFdlZWsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3ZWVrbHlTdGF0czogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdlbmVyYWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXN1YWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZFwiIDogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVXTFwiIDogJzAsIDEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb3NzZXNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZUtEXCIgOiBcIjAsIDEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmtpbGxzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyArIHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5kZWF0aHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmdlbmVyYWwud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC53aW5zICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELndpbnMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5nZW5lcmFsLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC5sb3NzZXMgKyByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzICsgcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwua2lsbHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAua2lsbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtseVN0YXRzLmNhc3VhbC5kZWF0aHMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlAuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5jYXN1YWwubG9zc2VzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQLmxvc3NlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmtpbGxzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmRlYXRocyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy5yYW5rZWQud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQud2lucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMucmFua2VkLmxvc3NlcyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5raWxscyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQuZGVhdGhzICs9IHJlc3VsdFdlZWtbaV0uTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2x5U3RhdHMudW5yYW5rZWQud2lucyArPSByZXN1bHRXZWVrW2ldLk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrbHlTdGF0cy51bnJhbmtlZC5sb3NzZXMgKz0gcmVzdWx0V2Vla1tpXS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQubG9zc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMod2Vla2x5U3RhdHMpLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNb2RlID0gd2Vla2x5U3RhdHNbb2JqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lTW9kZS5kZWF0aHMgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAoKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzKS50b0ZpeGVkKDIpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9IE1hdGgucm91bmQoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMgKiAzMykgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVNb2RlLmRlYXRocyA9PT0gMCAmJiBnYW1lTW9kZS5raWxscyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICdJTkYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9ICcxMDAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5rZCA9ICcwLjAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMCwgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS53bCA9IChNYXRoLnJvdW5kKGdhbWVNb2RlLndpbnMgLyAoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgKiAxMDApKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9IGdhbWVNb2RlLndsICsgJywgMTAwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVXTCA9ICcwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtd2Vla2x5Jykuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5Jywgd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZUtEKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLXdlZWtseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHdlZWtseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVXTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tkLWNpcmNsZS13ZWVrbHktdGV4dCcpLmlubmVySFRNTCA9IHBhcnNlRmxvYXQod2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5rZCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLXdlZWtseS10ZXh0JykuaW5uZXJIVE1MID0gd2Vla2x5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS53bCArICclJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWVrbHlTdGF0czpcIiwgd2Vla2x5U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2Vla2x5U3RhdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UyID0gdGhpcy5yZWFkRnJvbUlEQignZGF5cycsIGtleUlEQkRheXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHREYXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFpbHlTdGF0czogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraWxsc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5raWxscyArIHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfUkFOS0VELmtpbGxzICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5kZWF0aHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5kZWF0aHMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5sb3NzZXMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6ICByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLndpbnMgKyByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zICsgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9VTlJBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXN1YWxcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmtpbGxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVhdGhzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQLmRlYXRocyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvc3Nlc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiAgcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYW5rZWRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbGxzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5raWxscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlYXRoc1wiIDogcmVzdWx0RGF5Lk1BVENITUFLSU5HX1BWUF9SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC5sb3NzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aW5zXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1JBTktFRC53aW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2RcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2xcIiA6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlVmFsdWVLRFwiIDogXCIwLCAxMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlV0xcIiA6ICcwLCAxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bnJhbmtlZFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2lsbHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQua2lsbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWF0aHNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQuZGVhdGhzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9zc2VzXCIgOiByZXN1bHREYXkuTUFUQ0hNQUtJTkdfUFZQX1VOUkFOS0VELmxvc3NlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpbnNcIiA6IHJlc3VsdERheS5NQVRDSE1BS0lOR19QVlBfVU5SQU5LRUQud2lucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndsXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZVZhbHVlS0RcIiA6IFwiMCwgMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVWYWx1ZVdMXCIgOiAnMCwgMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhaWx5U3RhdHMpLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNb2RlID0gZGFpbHlTdGF0c1tvYmpdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVNb2RlLmRlYXRocyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAoKGdhbWVNb2RlLmtpbGxzIC8gZ2FtZU1vZGUuZGVhdGhzKS50b0ZpeGVkKDIpKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUuYXR0cmlidXRlVmFsdWVLRCA9IE1hdGgucm91bmQoZ2FtZU1vZGUua2lsbHMgLyBnYW1lTW9kZS5kZWF0aHMgKiAzMykgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVNb2RlLmRlYXRocyA9PT0gMCAmJiBnYW1lTW9kZS5raWxscyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnSU5GJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLmF0dHJpYnV0ZVZhbHVlS0QgPSAnMTAwLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUua2QgPSAnMC4wMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZUtEID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZU1vZGUud2lucyArIGdhbWVNb2RlLmxvc3NlcykgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlLndsID0gKE1hdGgucm91bmQoZ2FtZU1vZGUud2lucyAvIChnYW1lTW9kZS53aW5zICsgZ2FtZU1vZGUubG9zc2VzKSAqIDEwMCkpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gZ2FtZU1vZGUud2wgKyAnLCAxMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUud2wgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZS5hdHRyaWJ1dGVWYWx1ZVdMID0gJzAsIDEwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZC1jaXJjbGUtZGFpbHknKS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0uYXR0cmlidXRlVmFsdWVLRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dsLWNpcmNsZS1kYWlseScpLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5hdHRyaWJ1dGVWYWx1ZVdMKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2QtY2lyY2xlLWRhaWx5LXRleHQnKS5pbm5lckhUTUwgPSBwYXJzZUZsb2F0KGRhaWx5U3RhdHNbc2V0dGluZ3MuY2lyY2xlXS5rZCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2wtY2lyY2xlLWRhaWx5LXRleHQnKS5pbm5lckhUTUwgPSBkYWlseVN0YXRzW3NldHRpbmdzLmNpcmNsZV0ud2wgKyAnJSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGFpbHlTdGF0czpcIiwgZGFpbHlTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYWlseVN0YXRzO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzTmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFpbHktd2Vla2x5LW5hdi1idG4nKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0c05hdkJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3RhdHNOYXZCdG5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzLmNpcmNsZSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbcHJvbWlzZTEsIHByb21pc2UyXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXNvbHZlKHJlc3VsdCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJzIHtcclxuICAgIHB1YmxpYyBzZXRTaG9ydGN1dFRleHQoc2hvcnRjdXRDb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuaG90a2V5cy5nZXQocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdGtleSA9IHJlc3VsdC5nYW1lc1snMTA4MjYnXVswXS5iaW5kaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhvdGtleSA9PT0gJ1VuYXNzaWduZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGN1dENvbnRhaW5lci5pbm5lckhUTUwgPSAnVU5BU1NJR05FRCB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRjdXRDb250YWluZXIuaW5uZXJIVE1MID0gaG90a2V5ICsgJyB0byBzaG93L2hpZGUgdGhlIG92ZXJsYXkgaW4gZ2FtZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhcHAgaG90a2V5IFwiJHtob3RrZXl9XCJgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T3ZlcndvbGZTdGF0dXMob3ZlcndvbGZTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZ2FtZS1ldmVudHMtc3RhdHVzLm92ZXJ3b2xmLmNvbS8xMDgyNl9wcm9kLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcndvbGZTdGF0dXMgPSBkYXRhLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgc29tZSBmdW5jdGlvbnMgbWlnaHQgbm90IHdvcmsgLSB3ZeKAmWxsIGZpeCBpdCBzaG9ydGx5PC9oND4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvdmVyd29sZlN0YXR1cyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICc8aDQgY2xhc3M9XCJhbm5vdW5jZW1lbnRcIj5EdWUgdG8gYSByZWNlbnQgZ2FtZSBwYXRjaCwgT3ZlcndvbGYgYXBwIEFQSSBoYXMgc3RvcHBlZCB3b3JraW5nIC0gd2XigJlsbCBmaXggaXQgc2hvcnRseTwvaDQ+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3ZlcndvbGZTdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyd29sZlN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3b2xmU3RhdHVzRGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvdmVyd29sZiBzdGF0dXMgXCIke292ZXJ3b2xmU3RhdHVzfVwiYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbnRlcm5ldFN0YXR1cyhpbmV0ZXJuZXRTdGF0dXNEaXY6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJuZXRTdGF0dXMgPSBuYXZpZ2F0b3Iub25MaW5lO1xyXG5cclxuICAgICAgICBpZiAoaW50ZXJuZXRTdGF0dXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGluZXRlcm5ldFN0YXR1c0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmV0ZXJuZXRTdGF0dXNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBpbnRlcm5ldCBzdGF0dXMgXCIke2ludGVybmV0U3RhdHVzfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRhYmxlVGFiKHRhYjogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllci10clwiKS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFua2VkU3RhdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFua2VkJyArIGkgKyBqKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc3VhbFN0YXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhc3VhbCcgKyBpICsgaik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFzb25TdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFzb25hbCcgKyBpICsgaik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmtlZFN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYiA9PT0gJ3JhbmtlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2Nhc3VhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhYiA9PT0gJ3NlYXNvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2VkU3RhdHMuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc3VhbFN0YXRzLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFzb25TdGF0cy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IHRhYmxlIHRhYiBcIiR7dGFifVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dEZXRhaWxlZFBsYXllcihkZXRhaWxlZHN0YXR1czogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChkZXRhaWxlZHN0YXR1cykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGUtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRldGFpbGVkc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlLWJvZHknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsZWQtYm9keScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkZXRhaWxlZHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgZGV0YWlsZWQgc3RhdHMgXCIkeyFkZXRhaWxlZHN0YXR1c31cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV0YWlsZWRzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRoZW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNldHRpbmdzXCIpKTtcclxuICAgICAgICBjb25zdCBzdHlsZVZhcmlhYmxlcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiI0YwRjBGMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjYxXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi1iZy1jb2xvclwiLCBcIiMxMjEyMTJcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtYmctY29sb3JcIiwgXCIjRkZGRkZGMTRcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiIzAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idG4tY29sb3JcIiwgXCIjRkZGRkZGMUVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiI0ZGRkZGRjMzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJ1cmwoJy9pbWcvYmFja2dyb3VuZC53ZWJwJylcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1saWdodC1sb2dvLnN2Z1wiKScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpLnNldEF0dHJpYnV0ZSgneGxpbms6aHJlZicsICcvaW1nL3NvY2lhbG1lZGlhX2ljb25zLnN2ZyNyNmRiJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkLnRoZW1lID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tbWFpbi10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy10ZXh0LWhvdmVyLWNvbG9yXCIsIFwiIzMzMzMzM1wiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tYmctY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tc2VjLWJnLWNvbG9yXCIsIFwiI2VlZWVlZVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW92ZXJsYXktY29sb3JcIiwgXCIjZjNmM2YzXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZFVybFwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnRuLWNvbG9yXCIsIFwiIzk5OTk5OVwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRhcmtlci1idXR0b24taG92ZXItY29sb3JcIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd25cIiwgXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZHJvcGRvd24tYnRuLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXI2REItbG9nby1sYXJnZVwiLCAndXJsKFwiL2ltZy9zdGF0c2RiLWRhcmstbG9nby5zdmdcIiknKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyNmRiLWxvZ28tc21hbGwnKS5zZXRBdHRyaWJ1dGUoJ3hsaW5rOmhyZWYnLCAnL2ltZy9zb2NpYWxtZWRpYV9pY29ucy5zdmcjcjZkYmRhcmsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQudGhlbWUgPT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLW1haW4tdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1zZWMtdGV4dC1ob3Zlci1jb2xvclwiLCBcIiMzMzMzMzNcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1tYWluLWJnLWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLXNlYy1iZy1jb2xvclwiLCBcIiNiMGIwYjBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1vdmVybGF5LWNvbG9yXCIsIFwiI2I4YjhiOFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmRVcmxcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICBzdHlsZVZhcmlhYmxlcy5zZXRQcm9wZXJ0eShcIi0tZGFya2VyLWJ0bi1jb2xvclwiLCBcIiM5OTk5OTlcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1kYXJrZXItYnV0dG9uLWhvdmVyLWNvbG9yXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duXCIsIFwiIzAwMDAwMFwiKTtcclxuICAgICAgICAgICAgc3R5bGVWYXJpYWJsZXMuc2V0UHJvcGVydHkoXCItLWRyb3Bkb3duLWJ0bi1jb2xvclwiLCBcIiMwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHN0eWxlVmFyaWFibGVzLnNldFByb3BlcnR5KFwiLS1yNkRCLWxvZ28tbGFyZ2VcIiwgJ3VybChcIi9pbWcvc3RhdHNkYi1kYXJrLWxvZ28uc3ZnXCIpJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3I2ZGItbG9nby1zbWFsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncjZkYi1sb2dvLXNtYWxsJykuc2V0QXR0cmlidXRlKCd4bGluazpocmVmJywgJy9pbWcvc29jaWFsbWVkaWFfaWNvbnMuc3ZnI3I2ZGJkYXJrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGZldGNoQ29uZmlnKCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3N0YWdpbmctYXBpLnN0YXRzZGIubmV0L3I2L292ZXJsYXkvY29uZmlnJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeShkYXRhLnBheWxvYWQucmFpbmJvdykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbFN0b3JhZ2UuY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy52ZXJzaW9uICE9IGRhdGEucGF5bG9hZC5yYWluYm93LnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbmZpZycsIEpTT04uc3RyaW5naWZ5KGRhdGEucGF5bG9hZC5yYWluYm93KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlcnMgfSBmcm9tICcuL2NvbnRyb2xsZXJzJztcclxuaW1wb3J0IHsgT1dXaW5kb3cgfSBmcm9tICcuL293LXdpbmRvdyc7XHJcblxyXG5jb25zdCBjb250cm9sbGVycyA9IG5ldyBDb250cm9sbGVycywgb3dXaW5kb3c6IE9XV2luZG93ID0gbmV3IE9XV2luZG93O1xyXG5cclxubGV0IGxvY2FsRGVza3RvcE9ubHkgPSBsb2NhbFN0b3JhZ2UuZGVza3RvcE9ubHksIHZhbHVlc0N1c3RvbSwgbG9jYWw7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxzdG9yYWdlIHtcclxuICAgIHByaXZhdGUgZHRhYmxlOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBkdGhlbWU6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtYXhpbWl6ZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGRpc3BsYXk6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGRtb25pdG9yczogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZGNpcmNsZTogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmR0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWR0YWJsZSAuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIHRoaXMuZHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZHRoZW1lIC5jdXN0b20tb3B0aW9uJykgO1xyXG4gICAgICAgIHRoaXMuZG1heGltaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NldHRpbmctZG1heGltaXplIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRkaXNwbGF5IC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5kbW9uaXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kbW9uaXRvcnMgLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICB0aGlzLmRjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2V0dGluZy1kY2lyY2xlIC5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYXRlTG9jYWxTdG9yYWdlKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MgfHwgT2JqZWN0LmtleXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpKS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmxlJzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdtYXhpbWl6ZSc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICBcInRoZW1lXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlXCI6IFwiZ2VuZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibW9uaXRvcklkXCIgOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY2FsZVNsaWRlcicsICdcIjFcIicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSB8fCBPYmplY3Qua2V5cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSkpLmxlbmd0aCA8IDkpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2YWx1ZXNUYWJsZScsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAwIDogJ0NvdW50cnknLFxyXG4gICAgICAgICAgICAgICAgICAgIDEgOiAnTFZMJyxcclxuICAgICAgICAgICAgICAgICAgICAyIDogJ0tpbGxzJyxcclxuICAgICAgICAgICAgICAgICAgICAzIDogJ0RlYXRocycsXHJcbiAgICAgICAgICAgICAgICAgICAgNCA6ICdLL0QnLFxyXG4gICAgICAgICAgICAgICAgICAgIDUgOiAnV2lucycsXHJcbiAgICAgICAgICAgICAgICAgICAgNiA6ICdMb3NzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIDcgOiAnVy9MJyxcclxuICAgICAgICAgICAgICAgICAgICA4IDogJ0hhY2tlciAlJ1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5kZXNrdG9wT25seSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rlc2t0b3BPbmx5JywgJ1wiMFwiJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b20gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS52YWx1ZXNUYWJsZSk7XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU2V0dGluZyhzZWxlY3RlZE9wdGlvbjogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ0lkID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKCdzZXR0aW5naWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctdmFsdWVUYWJsZScpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXNDdXN0b21baW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZSgndmFsdWVzVGFibGUnLCB2YWx1ZXNDdXN0b20pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHRoZW1lJykge1xyXG4gICAgICAgICAgICBsb2NhbC50aGVtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcnMuc2V0VGhlbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWR0YWJsZScpIHtcclxuICAgICAgICAgICAgbG9jYWwudGFibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRkaXNwbGF5Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ2Rlc2t0b3BPbmx5JywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1heGltaXplJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tYXhpbWl6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZG1vbml0b3JzJykge1xyXG4gICAgICAgICAgICBsb2NhbC5tb25pdG9ySWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzZXR0aW5ncycsIGxvY2FsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5nSWQgPT09ICdzZXR0aW5nLWRjaXJjbGUnKSB7XHJcbiAgICAgICAgICAgIGxvY2FsLmNpcmNsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3JhZ2UoJ3NldHRpbmdzJywgbG9jYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdJZCA9PT0gJ3NldHRpbmctZHNsaWRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKCdzY2FsZVNsaWRlcicsIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2V0dGluZ3MoKSB7XHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHtcclxuICAgICAgICAgICAgXCJnZW5lcmFsXCIgOiAwLFxyXG4gICAgICAgICAgICBcInJhbmtlZFwiIDogMSxcclxuICAgICAgICAgICAgXCJjYXN1YWxcIiA6IDIsXHJcbiAgICAgICAgICAgIFwidW5yYW5rZWRcIiA6IDNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzQXJyID0gW1xyXG4gICAgICAgICAgICB0aGlzLmR0YWJsZVtsb2NhbC50YWJsZV0sXHJcbiAgICAgICAgICAgIHRoaXMuZHRoZW1lW2xvY2FsLnRoZW1lXSxcclxuICAgICAgICAgICAgdGhpcy5kbWF4aW1pemVbbG9jYWwubWF4aW1pemVdLFxyXG4gICAgICAgICAgICB0aGlzLmRkaXNwbGF5W2xvY2FsRGVza3RvcE9ubHkucmVwbGFjZSgvXCIvZywgJycpXSxcclxuICAgICAgICAgICAgdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSxcclxuICAgICAgICAgICAgdGhpcy5kY2lyY2xlW2NpcmNsZXNbbG9jYWwuY2lyY2xlXV0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHNldHRpbmdzQXJyW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNldHRpbmcgIT09IHRoaXMuZG1vbml0b3JzW2xvY2FsLm1vbml0b3JJZF0pIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZy5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IHNldHRpbmcudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZyA9PT0gdGhpcy5kbW9uaXRvcnNbbG9jYWwubW9uaXRvcklkXSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzZXR0aW5nLWRtb25pdG9ycyAuY3VzdG9tLW9wdGlvbicpW2xvY2FsLm1vbml0b3JJZF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG93V2luZG93LmdldE1vbml0b3JzTGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obW9uaXRvckxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gbW9uaXRvckxpc3QuZGlzcGxheXNbbG9jYWwubW9uaXRvcklkXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93U2l6ZS1zbGlkZXInKSBhcyBhbnkpLnZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3dTaXplLXNsaWRlci12YWx1ZScpLmlubmVySFRNTCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNjYWxlU2xpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzQ3VzdG9tW2ldLnJlcGxhY2UoL1sgL10vZywgJy0nKSArIGk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmN1c3RvbS1vcHRpb24uc2VsZWN0ZWQnKT8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBzZXR0aW5nLmNsb3Nlc3QoJy5jdXN0b20tc2VsZWN0JykucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3RfX3RyaWdnZXIgc3BhbicpLnRleHRDb250ZW50ID0gc2V0dGluZy50ZXh0Q29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE9XSG90a2V5cyB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgZ2V0SG90a2V5VGV4dChob3RrZXlJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vICAgICAgICAgb3ZlcndvbGYuc2V0dGluZ3MuZ2V0SG90S2V5KGhvdGtleUlkLCByZXN1bHQgPT4ge1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuc3VjY2VzcyB8fCAhcmVzdWx0LmhvdGtleSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJlc29sdmUoJ1VOQVNTSUdORUQnKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5ob3RrZXkpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG9uSG90a2V5RG93bihob3RrZXlJZDogc3RyaW5nLCBhY3Rpb246IChob3RrZXlSZXN1bHQ6IG92ZXJ3b2xmLnNldHRpbmdzLkhvdEtleVJlc3VsdCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIG92ZXJ3b2xmLnNldHRpbmdzLnJlZ2lzdGVySG90S2V5KGhvdGtleUlkLCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsInR5cGUgR2V0V2luZG93U3RhdGVSZXN1bHQgPSBvdmVyd29sZi53aW5kb3dzLkdldFdpbmRvd1N0YXRlUmVzdWx0O1xyXG50eXBlIE93V2luZG93SW5mbyA9IG92ZXJ3b2xmLndpbmRvd3MuV2luZG93SW5mbztcclxuZXhwb3J0IGNsYXNzIE9XV2luZG93IHtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9pZDogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2lkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVzdG9yZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IHJlc3RvcmVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLnJlc3RvcmUoaWQsIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtyZXN0b3JlXSAtIGFuIGVycm9yIG9jY3VycmVkLCB3aW5kb3dJZD0ke2lkfSwgcmVhc29uPSR7cmVzdWx0LmVycm9yfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBtaW5pbWl6ZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IG1pbmltaXplZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MubWluaW1pemUoaWQsICgpID0+IHt9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBicmluZ1RvRnJvbnQoKTogUHJvbWlzZSA8IHZvaWQgPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnd2luZG93OiBtaW5pbWl6ZWQnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5hc3N1cmVPYnRhaW5lZCgpO1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IDwgc3RyaW5nID4gdGhhdC5faWQ7XHJcblxyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmJyaW5nVG9Gcm9udChpZCwgdHJ1ZSwgKCkgPT4ge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1heGltaXplKCk6IFByb21pc2UgPCB2b2lkID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdzogbWF4aW1pemVkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm1heGltaXplKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgaGlkZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3c6IGhpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5oaWRlKGlkLCAoKSA9PiB7fSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2xvc2UoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRXaW5kb3dTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzICYmIChyZXN1bHQud2luZG93X3N0YXRlICE9PSAnY2xvc2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaW50ZXJuYWxDbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGNoYW5nZVdpbmRvd1NpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmNoYW5nZVNpemUod2luZG93SWQsIHdpZHRoLCBoZWlnaHQsIChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgY2hhbmdlV2luZG93TG9jYXRpb24obW9kZSwgd2luZG93SWQpIHtcclxuICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldEN1cnJlbnRXaW5kb3coKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gcmVzdWx0LndpbmRvdy53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHJlc3VsdC53aW5kb3cuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgb3ZlcndvbGYudXRpbHMuZ2V0TW9uaXRvcnNMaXN0KChtb25pdG9yUmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvcklkOiBzdHJpbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zZXR0aW5ncykubW9uaXRvcklkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yV2lkdGggPSBtb25pdG9yUmVzLmRpc3BsYXlzW21vbml0b3JJZF0ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9uaXRvckhlaWdodCA9IG1vbml0b3JSZXMuZGlzcGxheXNbbW9uaXRvcklkXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVmdDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnY2VudGVyLWNlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbW9uaXRvcldpZHRoIC8gMiAtICh3aW5kb3dXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG1vbml0b3JIZWlnaHQgLyAyIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnY2VudGVyLXJpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSAobW9uaXRvcldpZHRoIC0gd2luZG93V2lkdGgpIC0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjZW50ZXItbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gbW9uaXRvckhlaWdodCAvIDIgLSAod2luZG93SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3ZlcndvbGYud2luZG93cy5jaGFuZ2VQb3NpdGlvbih3aW5kb3dJZCwgTWF0aC5yb3VuZChsZWZ0KSwgTWF0aC5yb3VuZCh0b3ApLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzY2FsZVdpbmRvdyh3aW5kb3dJZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpOiBQcm9taXNlIDwgdm9pZCA+ICB7XHJcbiAgICAgICAgY29uc3QgdGhhdDogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuY2hhbmdlV2luZG93U2l6ZSh3aW5kb3dJZCwgbmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7c2NhbGV9KWA7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93SWQgPT09ICdpbl9nYW1lJyB8fCB3aW5kb3dJZCA9PT0gJ2luX2dhbWVfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgY2FsYygke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSUgLSAzMnB4KWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93SWQgPT09ICdpbl9sb2JieScgfHwgd2luZG93SWQgPT09ICdpbl9sb2JieV9kZXNrdG9wX29ubHknKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLndpZHRoID0gYCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmhlaWdodCA9IGBjYWxjKCR7TWF0aC5jZWlsKDEwMCAvIHNjYWxlICogMTApIC8gMTB9JSAtIDMycHgpYDtcclxuICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW4tbG9iYnkgLmFkLWxvYmJ5JykgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJvdHRvbSA9IGAke01hdGguY2VpbChNYXRoLnBvdyhzY2FsZSwgLTQpICogNyAqIDEwMCkgLyAxMDB9cHhgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS53aWR0aCA9IGAke01hdGguY2VpbCgxMDAgLyBzY2FsZSAqIDEwKSAvIDEwfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5oZWlnaHQgPSBgJHtNYXRoLmNlaWwoMTAwIC8gc2NhbGUgKiAxMCkgLyAxMH0lYDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHdpbmRvd0lkID09PSAnaW5fbG9iYnknIHx8IHdpbmRvd0lkID09PSAnaW5fbG9iYnlfZGVza3RvcF9vbmx5Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlIDw9IDAuNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9ydGN1dC10ZXh0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3J0Y3V0LXRleHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYWdNb3ZlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbS5vbm1vdXNlZG93biA9IGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZHJhZ01vdmUodGhpcy5fbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRNb25pdG9yc0xpc3QoKTogUHJvbWlzZSA8IGFueSA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBhbnkgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLnV0aWxzLmdldE1vbml0b3JzTGlzdChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0V2luZG93U3RhdGUoKTogUHJvbWlzZSA8IEdldFdpbmRvd1N0YXRlUmVzdWx0ID4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgR2V0V2luZG93U3RhdGVSZXN1bHQgPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYXNzdXJlT2J0YWluZWQoKTtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSA8IHN0cmluZyA+IHRoYXQuX2lkO1xyXG4gICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLmdldFdpbmRvd1N0YXRlKGlkLCByZXNvbHZlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Q3VycmVudEluZm8oKTogUHJvbWlzZSA8IE93V2luZG93SW5mbyA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCBPd1dpbmRvd0luZm8gPiAoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQud2luZG93KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2J0YWluKCk6IFByb21pc2UgPCBPd1dpbmRvd0luZm8gfCBudWxsID4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNiID0gcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICYmIHJlcy53aW5kb3cgJiYgcmVzLndpbmRvdy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lkID0gcmVzLndpbmRvdy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSByZXMud2luZG93Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy53aW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuZ2V0Q3VycmVudFdpbmRvdyhjYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdmVyd29sZi53aW5kb3dzLm9idGFpbkRlY2xhcmVkV2luZG93KHRoaXMuX25hbWUsIGNiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBhc3N1cmVPYnRhaW5lZCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDwgdm9pZCA+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5vYnRhaW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW50ZXJuYWxDbG9zZSgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSA8IHZvaWQgPiAoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmFzc3VyZU9idGFpbmVkKCk7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gPCBzdHJpbmcgPiB0aGF0Ll9pZDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJ3b2xmLndpbmRvd3MuY2xvc2UoaWQsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9XV2luZG93IH0gZnJvbSAnLi4vb2RrLXRzL293LXdpbmRvdyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwV2luZG93IHtcclxuICAgIHByb3RlY3RlZCBjdXJyV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBtYWluV2luZG93OiBPV1dpbmRvdztcclxuICAgIHByb3RlY3RlZCBzZXR0aW5nc1dpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGlzdGljc1dpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgd2Vic2l0ZVdpbmRvdzogT1dXaW5kb3c7XHJcbiAgICBwcm90ZWN0ZWQgbWF4aW1pemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2luZG93TmFtZTogc3RyaW5nLCBtb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1haW5XaW5kb3cgPSBuZXcgT1dXaW5kb3coJ2JhY2tncm91bmQnKTtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChtb2RlID09PSAnZGVza3RvcCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc2V0dGluZ3NfZGVza3RvcCcpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3N0YXRpc3RpY3NfZGVza3RvcCcpO1xyXG4gICAgICAgICAgICB0aGlzLndlYnNpdGVXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3dlYnNpdGVfZGVza3RvcCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2luZ2FtZScpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdyA9IG5ldyBPV1dpbmRvdygnc2V0dGluZ3NfaW5fZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3N0YXRpc3RpY3NfaW5fZ2FtZScpO1xyXG4gICAgICAgICAgICB0aGlzLndlYnNpdGVXaW5kb3cgPSBuZXcgT1dXaW5kb3coJ3dlYnNpdGVfaW5fZ2FtZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBtYXhpbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhpbWl6ZUJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltaXplQnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NCdXR0b24nKTtcclxuICAgICAgICBjb25zdCBnYW1lSGlzdG9yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lSGlzdG9yeScpO1xyXG4gICAgICAgIGNvbnN0IHdlYnNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vic2l0ZScpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlV2luZG93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlV2luZG93QnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhpdE1pbmltaXplTW9kYWwnKTtcclxuICAgICAgICBjb25zdCBtb2RhbENhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcclxuICAgICAgICBjb25zdCBtb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQnKTtcclxuICAgICAgICBjb25zdCBtb2RhbE1pbmltaXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbmltaXplJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd05hbWUgPT09ICdkZXNrdG9wJyB8fCB3aW5kb3dOYW1lID09PSAnc2V0dGluZ3NfZGVza3RvcCcgfHwgd2luZG93TmFtZSA9PT0gJ3N0YXRpc3RpY3NfZGVza3RvcCcgfHwgd2luZG93TmFtZSA9PT0gJ3dlYnNpdGVfZGVza3RvcCcgfHwgbG9jYWxTdG9yYWdlLmRlc2t0b3BPbmx5ID09PSAnXCIxXCInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHJhZyhoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlV2luZG93QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsb3NlV2luZG93QnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlV2luZG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWluaW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWF4aW1pemVCdXR0b24pIHtcclxuICAgICAgICAgICAgbWF4aW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWF4aW1pemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1heGltaXplKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycldpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhpbWl6ZWQgPSAhdGhpcy5tYXhpbWl6ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1dpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVIaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIGdhbWVIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2Vic2l0ZSkge1xyXG4gICAgICAgICAgICB3ZWJzaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJzaXRlV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxDYW5jZWxCdXR0b24pIHtcclxuICAgICAgICAgICAgbW9kYWxDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RhbENsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5XaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kYWxNaW5pbWl6ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBtb2RhbE1pbmltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93Lm1pbmltaXplKCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldFdpbmRvd1N0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmN1cnJXaW5kb3cuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldERyYWcoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJXaW5kb3cuZHJhZ01vdmUoZWxlbSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwV2luZG93IH0gZnJvbSAnLi4vQXBwV2luZG93JztcclxuaW1wb3J0IHsgT1dIb3RrZXlzIH0gZnJvbSAnLi4vLi4vb2RrLXRzL293LWhvdGtleXMnO1xyXG5pbXBvcnQgeyBPV1dpbmRvdyB9IGZyb20gJy4uLy4uL29kay10cy9vdy13aW5kb3cnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVycyB9IGZyb20gJy4uLy4uL29kay10cy9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IExvY2Fsc3RvcmFnZSB9IGZyb20gJy4uLy4uL29kay10cy9sb2NhbHN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4uLy4uL29kay10cy9EYXRhYmFzZSc7XHJcbmltcG9ydCB7IHdpbmRvd05hbWVzLCBvcGVyYXRvcnMsIGhvdGtleXMgfSBmcm9tICcuLi8uLi9jb25zdHMnO1xyXG5cclxuY29uc3QgbW9udGhOYW1lcyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXHJcbiAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xyXG5dO1xyXG5cclxubGV0IG93V2luZG93OiBPV1dpbmRvdywgbW9kZTogc3RyaW5nLCBtb2RlMjogc3RyaW5nLCBkaXNwbGF5ZWRHYW1lcyA9IHsgYmVnaW46IDAsIGVuZDogMCB9LCBtb3JlR2FtZXM6IGJvb2xlYW4sIHNob3dNb3JlR2FtZXM6IGJvb2xlYW4sIHVzZXJUaW1lID0geyB5ZWFyOiAwLCBtb250aDogMCwgdW5peERhdGU6IDAsIHVuaXhFbmREYXRlOiAwIH0sIGdhbWVMaXN0OiBIVE1MRWxlbWVudCwgbG9hZE1vcmU6IEhUTUxFbGVtZW50LCBzaG93QWxsOiBIVE1MRWxlbWVudCwgc2V0dGluZ0RpdnM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcblxyXG5jb25zdCBjb250cm9sbGVycyA9IG5ldyBDb250cm9sbGVycygpO1xyXG5jb25zdCBsb2NhbHN0b3JhZ2UgPSBuZXcgTG9jYWxzdG9yYWdlKCk7XHJcbmNvbnN0IGRhdGFiYXNlID0gbmV3IERhdGFiYXNlKCk7XHJcblxyXG5jb25zdCBwcm9taXNlMSA9IGxvY2Fsc3RvcmFnZS5pbml0aWF0ZUxvY2FsU3RvcmFnZSgpXHJcbiAgICAudGhlbigoKSA9PiBjb250cm9sbGVycy5zZXRUaGVtZSgpKTtcclxuXHJcbmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCAoKSA9PiB7XHJcbiAgICBjb250cm9sbGVycy5zZXRUaGVtZSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNsb3NlV2luZG93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlV2luZG93QnV0dG9uJyk7XHJcblxyXG5cclxuY2xvc2VXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBrZChhLGIpIHtcclxuICAgIGlmIChiICE9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChhIC8gYikudG9GaXhlZCgyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGEudG9GaXhlZCgyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWxsSW5kZXhlcyhhcnIsIHZhbCkge1xyXG4gICAgdmFyIGluZGV4ZXMgPSBbXSwgaSA9IC0xO1xyXG4gICAgd2hpbGUgKChpID0gYXJyLmluZGV4T2YodmFsLCBpKzEpKSAhPSAtMSl7XHJcbiAgICAgICAgaW5kZXhlcy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BpbG9vcChhcnJheSwga2V5LCBjbGFzc05hbWUsIGRpc3BsYXlOYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJhZGdlLSR7a2V5fS0ke2FycmF5W2ldfWApLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZS0ke2NsYXNzTmFtZX0gYmFkZ2VcIj5cclxuICAgICAgICAgICAgICAgICR7ZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RhdGlzdGljcyBleHRlbmRzIEFwcFdpbmRvdyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFN0YXRpc3RpY3M7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHdpbmRvd0lkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ2Rlc2t0b3AnKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RlMiA9PT0gJ3dlYnNpdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcih3aW5kb3dOYW1lcy53ZWJzaXRlRGVza3RvcE9ubHksICdkZXNrdG9wJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3dXaW5kb3cuc2NhbGVXaW5kb3coJ3dlYnNpdGVfZGVza3RvcCcsIDE2MDAsIDkwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKHdpbmRvd05hbWVzLnN0YXRpc3RpY3NEZXNrdG9wT25seSwgJ2Rlc2t0b3AnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvd1dpbmRvdy5zY2FsZVdpbmRvdygnc3RhdGlzdGljc19kZXNrdG9wJywgMTYwMCwgOTAwLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5zY2FsZVNsaWRlcikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG1vZGUyID09PSAnd2Vic2l0ZScpIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKHdpbmRvd05hbWVzLndlYnNpdGUsICdpbmdhbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuc2NhbGVXaW5kb3coJ3dlYnNpdGVfaW5fZ2FtZScsIDE2MDAsIDkwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IG93V2luZG93LmNoYW5nZVdpbmRvd0xvY2F0aW9uKCdjZW50ZXItY2VudGVyJywgJ3dlYnNpdGVfaW5fZ2FtZScpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKHdpbmRvd05hbWVzLndlYnNpdGUsICdpbmdhbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gb3dXaW5kb3cuc2NhbGVXaW5kb3coJ3N0YXRpc3RpY3NfaW5fZ2FtZScsIDE2MDAsIDkwMCwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uuc2NhbGVTbGlkZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IG93V2luZG93LmNoYW5nZVdpbmRvd0xvY2F0aW9uKCdjZW50ZXItY2VudGVyJywgJ3N0YXRpc3RpY3NfaW5fZ2FtZScpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvd1dpbmRvdy5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlSG90a2V5QmVoYXZpb3IoKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd0lkID09PSAnc3RhdGlzdGljcycpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmludFN0YXRpc3RpY3MoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvd0lkID09PSAnd2Vic2l0ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmludFdlYnNpdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSh3aW5kb3dJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTdGF0aXN0aWNzKHdpbmRvd0lkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50U3RhdGlzdGljcygpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5wcmludFN0YXRpc3RpY3NIVE1MKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUxpc3QnKTtcclxuICAgICAgICAgICAgICAgIGxvYWRNb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRNb3JlJyk7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dBbGwnKTtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdPcHRpb25zJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaG93QWxsQnRuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRHYW1lcy5iZWdpbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRHYW1lcy5lbmQgPSAxMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50R2FtZUxpc3QobnVsbCwgZW5kRGF0ZSwgMCwgMTAsIGRpc3BsYXllZEdhbWVzLmVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGVTZWxlY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaXNwbGF5TW9yZUdhbWVzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRXZWJzaXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vcjZkYi5uZXRcIiB3aWR0aD1cIjE2MDBcIiBoZWlnaHQ9XCI4NjhcIj48L2lmcmFtZT5gO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuaW5uZXJIVE1MID0gaWZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcHJpbnRTdGF0aXN0aWNzSFRNTCgpOiBQcm9taXNlIDwgdm9pZCA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgPCB2b2lkID4gKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsZWZ0LWJvZHlcIiBpZD1cImdhbWVMaXN0Q29udGFpbmVyXCI+IDxkaXYgaWQ9XCJkYXRlU2VsZWN0b3JcIj4gPGRpdiBpZD1cImRyb3Bkb3duQ29udGFpbmVyXCI+IDxkaXYgY2xhc3M9XCJjdXN0b20tc2VsZWN0IHNldHRpbmdPcHRpb25zXCIgaWQ9XCJzZXRNb250aFwiPiA8ZGl2IGNsYXNzPVwiY3VzdG9tLXNlbGVjdF9fdHJpZ2dlclwiPiA8c3Bhbj5KYW51YXJ5PC9zcGFuPiA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY3VzdG9tLW9wdGlvbnNcIj4gPHNwYW4gY2xhc3M9XCJjdXN0b20tb3B0aW9uXCIgc2V0dGluZ01vZGU9XCJtb250aFwiIHZhbHVlPScwJz5KYW51YXJ5PC9zcGFuPiA8c3BhbiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiBzZXR0aW5nTW9kZT1cIm1vbnRoXCIgdmFsdWU9JzEnPkZlYnJ1YXJ5PC9zcGFuPiA8c3BhbiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiBzZXR0aW5nTW9kZT1cIm1vbnRoXCIgdmFsdWU9JzInPk1hcmNoPC9zcGFuPiA8c3BhbiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiBzZXR0aW5nTW9kZT1cIm1vbnRoXCIgdmFsdWU9JzMnPkFwcmlsPC9zcGFuPiA8c3BhbiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiBzZXR0aW5nTW9kZT1cIm1vbnRoXCIgdmFsdWU9JzQnPk1heTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJjdXN0b20tb3B0aW9uXCIgc2V0dGluZ01vZGU9XCJtb250aFwiIHZhbHVlPSc1Jz5KdW5lPC9zcGFuPiA8c3BhbiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiBzZXR0aW5nTW9kZT1cIm1vbnRoXCIgdmFsdWU9JzYnPkp1bHk8L3NwYW4+IDxzcGFuIGNsYXNzPVwiY3VzdG9tLW9wdGlvblwiIHNldHRpbmdNb2RlPVwibW9udGhcIiB2YWx1ZT0nNyc+QXVndXN0PC9zcGFuPiA8c3BhbiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiBzZXR0aW5nTW9kZT1cIm1vbnRoXCIgdmFsdWU9JzgnPlNlcHRlbWJlcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJjdXN0b20tb3B0aW9uXCIgc2V0dGluZ01vZGU9XCJtb250aFwiIHZhbHVlPSc5Jz5PY3RvYmVyPC9zcGFuPiA8c3BhbiBjbGFzcz1cImN1c3RvbS1vcHRpb25cIiBzZXR0aW5nTW9kZT1cIm1vbnRoXCIgdmFsdWU9JzEwJz5Ob3ZlbWJlcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJjdXN0b20tb3B0aW9uXCIgc2V0dGluZ01vZGU9XCJtb250aFwiIHZhbHVlPScxMSc+RGVjZW1iZXI8L3NwYW4+IDwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjdXN0b20tc2VsZWN0IHNldHRpbmdPcHRpb25zXCIgaWQ9XCJzZXRZZWFyXCI+IDxkaXYgY2xhc3M9XCJjdXN0b20tc2VsZWN0X190cmlnZ2VyXCI+IDxzcGFuPjIwMjE8L3NwYW4+IDxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjdXN0b20tb3B0aW9uc1wiPiA8L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGlkPVwic2hvd0FsbFwiIGNsYXNzPVwiYWN0aXZlXCI+IDxwPlNob3cgYWxsPC9wPjwvZGl2PjwvZGl2PjxkaXYgaWQ9XCJnYW1lTGlzdFwiPiA8L2Rpdj48ZGl2IGlkPVwibG9hZE1vcmVcIiBjbGFzcz1cIm1kLXdoaXRlZnJhbWUtMWRwXCI+IDwvZGl2PjwvZGl2PjxkaXYgaWQ9XCJnYW1lSGlzdG9yeS1yaWdodFwiIGNsYXNzPVwicmlnaHQtYm9keVwiPiA8ZGl2IGNsYXNzPVwiZGV0YWlsZWQtbGVmdC1ib2R5XCI+IDxkaXYgaWQ9XCJzY29yZWJvYXJkXCI+IDxkaXYgaWQ9XCJibHVlLXRhYmxlXCIgY2xhc3M9XCJ0YWJsZSBtZC13aGl0ZWZyYW1lLTFkcFwiPiA8ZGl2IGlkPVwiYmx1ZS1oZWFkZXJcIiBjbGFzcz1cImhlYWRlclwiPiA8ZGl2IGNsYXNzPVwidGgtcmFua1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0aC11c2VybmFtZVwiPlVzZXJuYW1lPC9kaXY+PGRpdiBjbGFzcz1cInRoLWNvdW50cnlcIj5Db3VudHJ5PC9kaXY+PGRpdiBjbGFzcz1cInRoLWtpbGxzXCI+S2lsbHM8L2Rpdj48ZGl2IGNsYXNzPVwidGgtZGVhdGhzXCI+RGVhdGhzPC9kaXY+PGRpdiBjbGFzcz1cInRoLWtkXCI+Sy9EPC9kaXY+PGRpdiBjbGFzcz1cInRoLWtwclwiPktQUjwvZGl2PjxkaXYgY2xhc3M9XCJ0aC1zY29yZVwiPlNjb3JlPC9kaXY+PC9kaXY+PGRpdiBpZD1cImJsdWUtcGxheWVyLXRhYmxlXCIgY2xhc3M9XCJwbGF5ZXItdGFibGVcIj48L2Rpdj48L2Rpdj48ZGl2IGlkPVwib3JhbmdlLXRhYmxlXCIgY2xhc3M9XCJ0YWJsZSBtZC13aGl0ZWZyYW1lLTFkcFwiPiA8ZGl2IGlkPVwib3JhbmdlLWhlYWRlclwiIGNsYXNzPVwiaGVhZGVyXCI+IDxkaXYgY2xhc3M9XCJ0aC1yYW5rXCI+PC9kaXY+PGRpdiBjbGFzcz1cInRoLXVzZXJuYW1lXCI+VXNlcm5hbWU8L2Rpdj48ZGl2IGNsYXNzPVwidGgtY291bnRyeVwiPkNvdW50cnk8L2Rpdj48ZGl2IGNsYXNzPVwidGgta2lsbHNcIj5LaWxsczwvZGl2PjxkaXYgY2xhc3M9XCJ0aC1kZWF0aHNcIj5EZWF0aHM8L2Rpdj48ZGl2IGNsYXNzPVwidGgta2RcIj5LL0Q8L2Rpdj48ZGl2IGNsYXNzPVwidGgta3ByXCI+S1BSPC9kaXY+PGRpdiBjbGFzcz1cInRoLXNjb3JlXCI+U2NvcmU8L2Rpdj48L2Rpdj48ZGl2IGlkPVwib3JhbmdlLXBsYXllci10YWJsZVwiIGNsYXNzPVwicGxheWVyLXRhYmxlXCI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBpZD1cImJvdHRvbS1yb3dcIiBjbGFzcz1cIm1kLXdoaXRlZnJhbWUtMWRwXCI+IDxkaXYgaWQ9XCJjb21pbmctc29vblwiPiA8aDE+Q09NSU5HIFNPT048L2gxPiA8cD5wZXJzb25hbCBkZXRhaWxlZCBzdGF0cyBvZiB0aGUgbWF0Y2g8L3A+PC9kaXY+PGRpdiBpZD1cImFkLTQwMHgzMDBcIiBjbGFzcz1cImFkLTQwMHgzMDAgYWQtbG9iYnlcIj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGlkPVwicmlnaHQtcm91bmRzdGF0c1wiIGNsYXNzPVwiZGV0YWlsZWQtcmlnaHQtYm9keSBtZC13aGl0ZWZyYW1lLTFkcFwiPiA8L2Rpdj48L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKS5pbm5lckhUTUwgKz0gYDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb250ZW50Lm92ZXJ3b2xmLmNvbS9saWJzL2Fkcy9sYXRlc3Qvb3dhZHMubWluLmpzXCIgYXN5bmMgb25sb2FkPVwib25Pd0FkUmVhZHkoKVwiPjwvc2NyaXB0PiA8c2NyaXB0PmZ1bmN0aW9uIG9uT3dBZFJlYWR5KCl7c2V0VGltZW91dCgoKT0+e2lmICghb3dBZCl7Y29uc29sZS5lcnJvcihcIkNvdWxkbid0IGxvYWQgb3dhZHMubWluLmpzIVwiKTt9b3ZlcndvbGYud2luZG93cy5vblN0YXRlQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihvbldpbmRvd1N0YXRlQ2hhbmdlZCk7IG92ZXJ3b2xmLndpbmRvd3Mub25TdGF0ZUNoYW5nZWQuYWRkTGlzdGVuZXIob25XaW5kb3dTdGF0ZUNoYW5nZWQpO30sIDUwMCk7IGNvbnN0IG93QWQ9bmV3IE93QWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZC00MDB4MzAwXCIpLHtzaXplOnt3aWR0aDogNDAwLCBoZWlnaHQ6IDMwMH19KTsgZnVuY3Rpb24gb25XaW5kb3dTdGF0ZUNoYW5nZWQoc3RhdGUpe2lmIChzdGF0ZSAmJiBvd0FkKXtpZiAoc3RhdGUud2luZG93X3N0YXRlPT09XCJtaW5pbWl6ZWRcIil7b3dBZC5yZW1vdmVBZCgpO31lbHNlIGlmICggc3RhdGUud2luZG93X3ByZXZpb3VzX3N0YXRlPT09XCJtaW5pbWl6ZWRcIiAmJiBzdGF0ZS53aW5kb3dfc3RhdGU9PT1cIm5vcm1hbFwiICl7b3dBZC5yZWZyZXNoQWQoKTt9fX19PC9zY3JpcHQ+YDtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludEdhbWVMaXN0KGJlZ2luRGF0ZTogbnVtYmVyLCBlbmREYXRlOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIGVuZDogbnVtYmVyLCBkaXNwbGF5ZWRHYW1lc0VuZDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qga2V5UmFuZ2VJREIgPSB7XHJcbiAgICAgICAgICAgIGJlZ2luOiBiZWdpbkRhdGUsXHJcbiAgICAgICAgICAgIGVuZDogZW5kRGF0ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmdldEdhbWVzKGtleVJhbmdlSURCLCBiZWdpbiwgZW5kKVxyXG4gICAgICAgICAgICAudGhlbihnYW1lcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb3JlR2FtZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNob3dNb3JlR2FtZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGdhbWVzKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWU6IGFueSA9IE9iamVjdC52YWx1ZXMoZ2FtZXMpLnJldmVyc2UoKVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gKGRpc3BsYXllZEdhbWVzRW5kIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IGdhbWUuc2VsZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hLRCA9IGtkKGdhbWUubWF0Y2hTdGF0c1tzZWxmLmlkXS5raWxscywgZ2FtZS5tYXRjaFN0YXRzW3NlbGYuaWRdLmRlYXRocyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZU1vZGU6IHN0cmluZywgb3V0Y29tZTogc3RyaW5nLCBtYXBJbWc6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmdhbWVNb2RlID09PSAnTUFUQ0hNQUtJTkdfUFZQJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUgPSAnY2FzdWFsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVNb2RlID09PSAnTUFUQ0hNQUtJTkdfUFZQX1JBTktFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlID0gJ3JhbmtlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lTW9kZSA9PT0gJ01BVENITUFLSU5HX1BWUF9VTlJBTktFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVNb2RlID0gJ3VucmFua2VkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lLmdhbWVNb2RlID09PSAnQ1VTVE9NR0FNRV9QVlBfREVESUNBVEVEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGUgPSAnY3VzdG9tJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUubWF0Y2hPdXRjb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lID0gZ2FtZS5tYXRjaE91dGNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRjb21lID0gJ2xlZnQgZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLm1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwSW1nID0gJzxpbWcgY2xhc3M9XCJtYXAtaW1nXCIgc3JjPVwiL2ltZy9tYXBzLycgKyBnYW1lLm1hcC50b0xvd2VyQ2FzZSgpICsgJy53ZWJwXCI+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEltZyA9ICc8ZGl2Pj88L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lTGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHtnYW1lLnRpbWVTdGFtcH1cIiBjbGFzcz1cImdhbWUtc3VtbWFyeSAke2dhbWUubWF0Y2hPdXRjb21lfSBtZC13aGl0ZWZyYW1lLTFkcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21hcEltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGNoLW91dGNvbWUgJHtnYW1lLm1hdGNoT3V0Y29tZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtvdXRjb21lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5LL0Q6IDxzcGFuPiR7bWF0Y2hLRH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HYW1lbW9kZTogPHNwYW4+JHtnYW1lTW9kZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGlzcGxheSBnYW1lIFwiJHtnYW1lLnRpbWVTdGFtcH1cIiBcIiR7Z2FtZS5tYXRjaE91dGNvbWV9XCJgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlR2FtZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREZXRhaWxlZEdhbWVzTGlzdGVuZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtc3VtbWFyeScpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGV0YWlsZWRTdGF0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1zdW1tYXJ5JylbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXBsYXllci10YWJsZScpLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JhbmdlLXBsYXllci10YWJsZScpLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtcGxheWVyLXRhYmxlJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtcGxheWVyLXRhYmxlJykuc3R5bGUuaGVpZ2h0ID0gJzIwNXB4JztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JhbmdlLXBsYXllci10YWJsZScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmFuZ2UtcGxheWVyLXRhYmxlJykuc3R5bGUuaGVpZ2h0ID0gJzIwNXB4JztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtcm91bmRzdGF0cycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3JlR2FtZXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZS5pbm5lckhUTUwgPSAnPHA+TW9yZSBnYW1lcyB0byBkaXNwbGF5PC9wPjxwPkRvdWJsZSBjbGljayB0byBkaXNwbGF5IG1vcmU8L3A+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmUuaW5uZXJIVE1MID0gJzxwPk5vIG1vcmUgZ2FtZXMgdG8gZGlzcGxheTwvcD48cD5DaGFuZ2UgbW9udGggZm9yIG1vcmUgZ2FtZXM8L3A+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGdldEdhbWVzKGtleVJhbmdlSURCLCBiZWdpbjogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFByb21pc2UgPCBhbnkgPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIDxhbnk+IChhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRhdGFiYXNlLnJlYWRGcm9tSURCUmFuZ2UoJ21hdGNoZXMnLCAndGltZVN0YW1wSW5kZXgnLCBrZXlSYW5nZUlEQi5iZWdpbiwga2V5UmFuZ2VJREIuZW5kLCBiZWdpbiwgZW5kKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGF0ZVNlbGVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZWwudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgbGV0IG91dHNpZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdEaXZzW2ldLmNvbnRhaW5zKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRzaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChvdXRzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdEaXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ0RpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5nRGl2cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nRGl2ID0gc2V0dGluZ0RpdnNbaV07XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50OiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ0Rpdi5pZCA9PT0gJ3NldFllYXInKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyVGltZS55ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHVzZXJUaW1lLnllYXIudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSBpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nRGl2LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tb3B0aW9ucycpLmlubmVySFRNTCArPSBgPHNwYW4gY2xhc3M9XCJjdXN0b20tb3B0aW9uXCIgc2V0dGluZ01vZGU9XCJ5ZWFyXCIgdmFsdWU9JyR7eWVhcn0nPiR7eWVhcn08L3NwYW4+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHllYXIgPT09IDIwMjEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ0Rpdi5pZCA9PT0gJ3NldE1vbnRoJykge1xyXG4gICAgICAgICAgICAgICAgdXNlclRpbWUubW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG1vbnRoTmFtZXNbdXNlclRpbWUubW9udGhdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nRGl2LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS5pbm5lckhUTUwgPSBjdXJyZW50O1xyXG5cclxuICAgICAgICAgICAgdXNlclRpbWUudW5peERhdGUgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKHVzZXJUaW1lLnllYXIgKyBcIi5cIiArIChtb250aE5hbWVzW3VzZXJUaW1lLm1vbnRoXSkpLmdldFRpbWUoKSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJUaW1lLm1vbnRoICE9PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgdXNlclRpbWUudW5peEVuZERhdGUgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKHVzZXJUaW1lLnllYXIgKyBcIi5cIiArIChtb250aE5hbWVzW3VzZXJUaW1lLm1vbnRoICsgMV0pKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVzZXJUaW1lLnVuaXhFbmREYXRlID0gTWF0aC5yb3VuZChuZXcgRGF0ZShbdXNlclRpbWUueWVhciAtIDFdICsgXCIuXCIgKyAobW9udGhOYW1lc1swXSkpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXR0aW5nRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNldHRpbmdEaXZzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ0RpdjIgPSBzZXR0aW5nRGl2c1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdEaXYgIT09IHNldHRpbmdEaXYyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nRGl2Mi5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nRGl2Mi5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdEaXYyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VzdG9tLW9wdGlvblwiKSkge1xyXG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZTogc3RyaW5nID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2V0dGluZ01vZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnYW1lTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW9wdGlvbi5zZWxlY3RlZCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jbG9zZXN0KCcuY3VzdG9tLXNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0X190cmlnZ2VyIHNwYW4nKS50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1c2VyVGltZVttb2RlXSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB1c2VyVGltZS51bml4RGF0ZSA9IE1hdGgucm91bmQobmV3IERhdGUodXNlclRpbWUueWVhciArIFwiLlwiICsgKG1vbnRoTmFtZXNbdXNlclRpbWUubW9udGhdKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJUaW1lLm1vbnRoICE9PSAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJUaW1lLnVuaXhFbmREYXRlID0gTWF0aC5yb3VuZChuZXcgRGF0ZSh1c2VyVGltZS55ZWFyICsgXCIuXCIgKyAobW9udGhOYW1lc1t1c2VyVGltZS5tb250aCArIDFdKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJUaW1lLnVuaXhFbmREYXRlID0gTWF0aC5yb3VuZChuZXcgRGF0ZShbdXNlclRpbWUueWVhciAtIDFdICsgXCIuXCIgKyAobW9udGhOYW1lc1swXSkpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZEdhbWVzLmJlZ2luID0gMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZEdhbWVzLmVuZCA9IDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoYXQucHJpbnRHYW1lTGlzdCh1c2VyVGltZS51bml4RGF0ZSwgdXNlclRpbWUudW5peEVuZERhdGUsIDAsIDEwLCBkaXNwbGF5ZWRHYW1lcy5lbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNob3dBbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGlzcGxheU1vcmVHYW1lcygpIHtcclxuICAgICAgICBsb2FkTW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNob3dNb3JlR2FtZXMgPT09IGZhbHNlIHx8IChsb2FkTW9yZS5jbGFzc0xpc3QuY29udGFpbnMoJ21vcmUtYWN0aXZlJykgJiYgbW9yZUdhbWVzID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9hZE1vcmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb3JlLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmUuY2xhc3NMaXN0LmFkZCgnbW9yZS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzaG93TW9yZUdhbWVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZEdhbWVzLmJlZ2luID0gZGlzcGxheWVkR2FtZXMuZW5kO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkR2FtZXMuZW5kID0gZGlzcGxheWVkR2FtZXMuZW5kICsgMTA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmVnaW46IG51bWJlciA9IGRpc3BsYXllZEdhbWVzLmJlZ2luICsgMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZDogbnVtYmVyID0gZGlzcGxheWVkR2FtZXMuZW5kICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50R2FtZUxpc3QodXNlclRpbWUudW5peERhdGUsIHVzZXJUaW1lLnVuaXhFbmREYXRlLCBiZWdpbiwgZW5kLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBsb2FkTW9yZS5jbGFzc0xpc3QucmVtb3ZlKCdtb3JlLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNob3dNb3JlR2FtZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZXRhaWxlZEdhbWVzTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbGV0IGdhbWVTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZS1zdW1tYXJ5Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoYXQ6IGFueSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZVN1bW1hcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZ2FtZVN1bW1hcnlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbih0aGlzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuZGlzcGxheURldGFpbGVkU3RhdHModGhpcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzcGxheURldGFpbGVkU3RhdHModGhhdDogYW55KSB7XHJcbiAgICAgICAgY29uc3Qga2V5SURCID0gTnVtYmVyKHRoYXQuaWQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtcm91bmRzdGF0cycpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZGF0YWJhc2UucmVhZEZyb21JREIoJ21hdGNoZXMnLCBrZXlJREIpXHJcbiAgICAgICAgICAgIC50aGVuKG1hdGNoID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvd0lkID0gbWF0Y2guc2VsZi5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlc1Njb3JlYm9hcmRIVE1MQmx1ZSA9ICcnLCBtYXRjaGVzU2NvcmVib2FyZEhUTUxPcmFuZ2UgPSAnJywgbWF0Y2hlc1JvdW5kU3RhdHNIVE1MSGVhZGVyID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbWF0Y2gubWF0Y2hTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5tYXRjaFN0YXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKChtYXRjaC5tYXRjaFN0YXRzW2tleV0udXNlclRlYW0gPT09IG1hdGNoLnNlbGYudXNlclRlYW0gJiYgbWF0Y2guc2VsZi5tYXRjaE91dGNvbWUgPT09ICd2aWN0b3J5JykgfHwgKG1hdGNoLm1hdGNoU3RhdHNba2V5XS51c2VyVGVhbSAhPT0gbWF0Y2guc2VsZi51c2VyVGVhbSAmJiBtYXRjaC5zZWxmLm1hdGNoT3V0Y29tZSA9PT0gJ2RlZmVhdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXRjaC5tYXRjaFN0YXRzW2tleV0uc2NvcmUgKyAyMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzUmFuazogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGgtcmFuaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50c0NvdW50cnk6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RoLWNvdW50cnknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5tYXRjaFN0YXRzW2tleV0udXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXRyXCIgaWQ9XCIke2tleX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLXJhbmtJbWdcIj48aW1nIHNyYz1cIi9pbWcvcmFua3MvcmFuayR7bWF0Y2gubWF0Y2hTdGF0c1trZXldLnVzZXIucmFua30uc3ZnXCIgYWx0PVwicmFua1wiPjxzcGFuPiR7bWF0Y2gubWF0Y2hTdGF0c1trZXldLnVzZXIubW1yfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLW5hbWVcIj4ke21hdGNoLm1hdGNoU3RhdHNba2V5XS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXItY291bnRyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkuc3RhdHNkYi5uZXQvYXNzZXRzL2ZsYWdzLyR7bWF0Y2gubWF0Y2hTdGF0c1trZXldLnVzZXIuY291bnRyeX1cIiBhbHQ9XCIke21hdGNoLm1hdGNoU3RhdHNba2V5XS51c2VyLmNvdW50cnl9XCIgY2xhc3M9XCJpbWctY291bnRyeVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXIta2lsbHNcIj4ke21hdGNoLm1hdGNoU3RhdHNba2V5XS5raWxsc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLWRlYXRoc1wiPiR7bWF0Y2gubWF0Y2hTdGF0c1trZXldLmRlYXRoc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLWtkXCI+JHtrZChtYXRjaC5tYXRjaFN0YXRzW2tleV0ua2lsbHMsIG1hdGNoLm1hdGNoU3RhdHNba2V5XS5kZWF0aHMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXIta3ByXCI+JHtrZChtYXRjaC5tYXRjaFN0YXRzW2tleV0ua2lsbHMsIE9iamVjdC5rZXlzKG1hdGNoLnJvdW5kU3RhdHMpLmxlbmd0aCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1zY29yZVwiPiR7bWF0Y2gubWF0Y2hTdGF0c1trZXldLnNjb3JlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNSYW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzUmFua1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNDb3VudHJ5W2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci10clwiIGlkPVwiJHtrZXl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1uYW1lXCI+JHttYXRjaC5tYXRjaFN0YXRzW2tleV0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLWtpbGxzXCI+JHttYXRjaC5tYXRjaFN0YXRzW2tleV0ua2lsbHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1kZWF0aHNcIj4ke21hdGNoLm1hdGNoU3RhdHNba2V5XS5kZWF0aHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0IHBsYXllci1rZFwiPiR7a2QobWF0Y2gubWF0Y2hTdGF0c1trZXldLmtpbGxzLCBtYXRjaC5tYXRjaFN0YXRzW2tleV0uZGVhdGhzKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQgcGxheWVyLWtwclwiPiR7a2QobWF0Y2gubWF0Y2hTdGF0c1trZXldLmtpbGxzLCBPYmplY3Qua2V5cyhtYXRjaC5yb3VuZFN0YXRzKS5sZW5ndGgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdCBwbGF5ZXItc2NvcmVcIj4ke21hdGNoLm1hdGNoU3RhdHNba2V5XS5zY29yZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNSYW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNSYW5rW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNDb3VudHJ5W2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5tYXRjaFN0YXRzW2tleV0udGVhbSA9PT0gXCJPcmFuZ2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1Njb3JlYm9hcmRIVE1MT3JhbmdlICs9IHRlbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzU2NvcmVib2FyZEhUTUxCbHVlICs9IHRlbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yYW5nZS1wbGF5ZXItdGFibGUnKS5pbm5lckhUTUwgPSBtYXRjaGVzU2NvcmVib2FyZEhUTUxPcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS1wbGF5ZXItdGFibGUnKS5pbm5lckhUTUwgPSBtYXRjaGVzU2NvcmVib2FyZEhUTUxCbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5zZWxmLnVzZXJUZWFtID09PSAnT3JhbmdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXRhYmxlJykuYmVmb3JlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmFuZ2UtdGFibGUnKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmFuZ2UtdGFibGUnKS5iZWZvcmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtdGFibGUnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbWF0Y2gucm91bmRTdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5yb3VuZFN0YXRzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoZXNSb3VuZFN0YXRzSFRNTE9yYW5nZSA9ICcnLCBtYXRjaGVzUm91bmRTdGF0c0hUTUxCbHVlID0gJycsIGtpbGxzQXJyYXk6IGFueSA9IFtdLCBhY2VCYWRnZTogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlLCBzcGVjdGF0aW5nID0gW10sIHN1cnZpZGVkID0gW10sIGRpZWQgPSBbXSwgcm91bmRPdXRjb21lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaC5yb3VuZFN0YXRzW2tleV0ucm91bmRPdXRjb21lICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZE91dGNvbWUgPSBtYXRjaC5yb3VuZFN0YXRzW2tleV0ucm91bmRPdXRjb21lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRPdXRjb21lID0gJ3Vua25vd24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzUm91bmRTdGF0c0hUTUxIZWFkZXIgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicm91bmQtJHtrZXl9XCIgY2xhc3M9XCJyb3VuZHMtc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Um91bmQ8c3Bhbj4ke2tleX08L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJvdW5kLSR7cm91bmRPdXRjb21lfVwiPiR7cm91bmRPdXRjb21lLnRvVXBwZXJDYXNlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbGF5ZXItcm91bmQtc3RhdHMtJHtrZXl9XCIgY2xhc3M9XCJyb3VuZC1zdGF0c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1yb3VuZHN0YXRzJykuaW5uZXJIVE1MICs9IG1hdGNoZXNSb3VuZFN0YXRzSFRNTEhlYWRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGxheWVyIGluIG1hdGNoLnJvdW5kU3RhdHNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLnJvdW5kU3RhdHNba2V5XS5oYXNPd25Qcm9wZXJ0eShwbGF5ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllciAhPT0gJ3JvdW5kT3V0Y29tZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdW5kT3BlcmF0b3IgPSBtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5vcGVyYXRvciwgb3BlcmF0b3JJbWc6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbGxzQXJyYXkucHVzaChtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5raWxscyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91bmRPcGVyYXRvciA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbWcgPSAnaHR0cHM6Ly9jZG4zLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvYWNjb3VudC0xLzY0L0FjY291bnQtMDYtNTEyLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvckltZyA9ICdodHRwczovL2FwaS5zdGF0c2RiLm5ldC9yNi9hc3NldHMvb3BlcmF0b3JzLycgKyBvcGVyYXRvcnNbcm91bmRPcGVyYXRvcl0ub3BlcmF0b3JfbmFtZS50b0xvd2VyQ2FzZSgpICsgJy9iYWRnZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5raWxscyA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNlQmFkZ2UgPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5kZWF0aHMgPT09IDAgJiYgbWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0uc2NvcmUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWN0YXRpbmcucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5kZWF0aHMgPT09IDAgJiYgbWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0uc2NvcmUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2aWRlZC5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLmRlYXRocyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZWQucHVzaChwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllclJvdW5kID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBsYXllci0ke3BsYXllcn1cIiBjbGFzcz1cInBsYXllci1yb3VuZC1zdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvcGVyYXRvckltZ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3Bhbj4ke21hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLm5hbWV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJhZGdlLSR7a2V5fS0ke3BsYXllcn1cIiBjbGFzcz1cImJhZGdlLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmtpbGxzOiA8c3Bhbj4ke21hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLmtpbGxzfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+ZGVhdGhzOiA8c3Bhbj4ke21hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLmRlYXRoc308L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmsvZDogPHNwYW4+JHtrZChtYXRjaC5yb3VuZFN0YXRzW2tleV1bcGxheWVyXS5raWxscywgbWF0Y2gucm91bmRTdGF0c1trZXldW3BsYXllcl0uZGVhdGhzKX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnNjb3JlOiA8c3Bhbj4ke21hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLnNjb3JlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoLnJvdW5kU3RhdHNba2V5XVtwbGF5ZXJdLnRlYW0gPT09ICdPcmFuZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzUm91bmRTdGF0c0hUTUxPcmFuZ2UgKz0gcGxheWVyUm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzUm91bmRTdGF0c0hUTUxCbHVlICs9IHBsYXllclJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2guc2VsZi51c2VyVGVhbSA9PT0gJ09yYW5nZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItcm91bmQtc3RhdHMtJyArIGtleSkuaW5uZXJIVE1MID0gbWF0Y2hlc1JvdW5kU3RhdHNIVE1MT3JhbmdlICsgbWF0Y2hlc1JvdW5kU3RhdHNIVE1MQmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItcm91bmQtc3RhdHMtJyArIGtleSkuaW5uZXJIVE1MID0gbWF0Y2hlc1JvdW5kU3RhdHNIVE1MQmx1ZSArIG1hdGNoZXNSb3VuZFN0YXRzSFRNTE9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ZXMgPSBnZXRBbGxJbmRleGVzKGtpbGxzQXJyYXksIGtpbGxzQXJyYXkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge3JldHVybiBNYXRoLm1heChhLCBiKX0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BpbG9vcChzcGVjdGF0aW5nLCBrZXksICdzcGVjdGF0aW5nJywgJ1NwZWN0YXRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcGlsb29wKHN1cnZpZGVkLCBrZXksICdzdXJ2aWRlZCcsICdTdXJ2aWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29waWxvb3AoZGllZCwga2V5LCAnZGllZCcsICdEaWVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNlQmFkZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBiYWRnZS0ke2tleX0tJHthY2VCYWRnZX1gKS5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZS1hY2UgYmFkZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUNFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BpbG9vcChpbmRleGVzLCBrZXksICdraWxscycsICdLL0QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNob3dBbGxCdG4oKSB7XHJcbiAgICAgICAgc2hvd0FsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzaG93QWxsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgPSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkR2FtZXMuYmVnaW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkR2FtZXMuZW5kID0gMTA7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmludEdhbWVMaXN0KG51bGwsIGVuZERhdGUsIDAsIDEwLCBkaXNwbGF5ZWRHYW1lcy5lbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNob3dBbGwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG9nZ2xlSG90a2V5QmVoYXZpb3IoKSB7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlSW5HYW1lV2luZG93ID0gYXN5bmMgaG90a2V5UmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHByZXNzZWQgaG90a2V5IFwiJHtob3RrZXlSZXN1bHQuZmVhdHVyZUlkfVwiYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gJ2Rlc2t0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbkdhbWVTdGF0ZSA9IGF3YWl0IHRoaXMuZ2V0V2luZG93U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdub3JtYWwnIHx8IGluR2FtZVN0YXRlLndpbmRvd19zdGF0ZSA9PT0gJ21heGltaXplZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJXaW5kb3cubWluaW1pemUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5HYW1lU3RhdGUud2luZG93X3N0YXRlID09PSAnbWluaW1pemVkJyB8fCBpbkdhbWVTdGF0ZS53aW5kb3dfc3RhdGUgPT09ICdjbG9zZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyV2luZG93LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvd1dpbmRvdy5jaGFuZ2VXaW5kb3dMb2NhdGlvbignY2VudGVyLWNlbnRlcicsICdzdGF0aXN0aWNzX2luX2dhbWUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT1dIb3RrZXlzLm9uSG90a2V5RG93bihob3RrZXlzLnRvZ2dsZSwgdG9nZ2xlSW5HYW1lV2luZG93KTtcclxuICAgIH1cclxufVxyXG5cclxub3ZlcndvbGYud2luZG93cy5nZXRPcGVuV2luZG93cyhkYXRhID0+IHtcclxuICAgIGNvbnN0IHdpbmRvd3MgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuXHJcbiAgICBpZiAod2luZG93cy5pbmNsdWRlcygnd2Vic2l0ZV9kZXNrdG9wJykgfHwgd2luZG93cy5pbmNsdWRlcygnd2Vic2l0ZV9pbl9nYW1lJykpIHtcclxuICAgICAgICBtb2RlMiA9ICd3ZWJzaXRlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZTIgPSAnc3RhdGlzdGljcyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvd3MuaW5jbHVkZXMoJ2luX2xvYmJ5X2Rlc2t0b3Bfb25seScpIHx8IHdpbmRvd3MuaW5jbHVkZXMoJ2luX2dhbWVfZGVza3RvcF9vbmx5JykgfHwgd2luZG93cy5pbmNsdWRlcygnZGVza3RvcCcpKSB7XHJcbiAgICAgICAgbW9kZSA9ICdkZXNrdG9wJztcclxuXHJcbiAgICAgICAgaWYgKG1vZGUyID09PSAnd2Vic2l0ZScpIHtcclxuICAgICAgICAgICAgb3dXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMud2Vic2l0ZURlc2t0b3BPbmx5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvd1dpbmRvdyA9IG5ldyBPV1dpbmRvdyh3aW5kb3dOYW1lcy5zdGF0aXN0aWNzRGVza3RvcE9ubHkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1vZGUyID09PSAnd2Vic2l0ZScpIHtcclxuICAgICAgICAgICAgb3dXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMud2Vic2l0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3dXaW5kb3cgPSBuZXcgT1dXaW5kb3cod2luZG93TmFtZXMuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtb2RlMiA9PT0gJ3dlYnNpdGUnKSB7XHJcbiAgICAgICAgU3RhdGlzdGljcy5pbnN0YW5jZSgnd2Vic2l0ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBTdGF0aXN0aWNzLmluc3RhbmNlKCdzdGF0aXN0aWNzJyk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9