!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}([function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{d(i.next(e))}catch(e){s(e)}}function r(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}restore(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: restored"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;overwolf.windows.restore(o,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${o}, reason=${e.error}`),t()})})))}))}minimize(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.minimize(o,()=>{}),t()})))}))}bringToFront(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.bringToFront(o,!0,()=>{}),t()})))}))}maximize(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: maximized"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.maximize(o,()=>{}),t()})))}))}hide(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: hidden"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.hide(o,()=>{}),t()})))}))}close(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();e._id;const o=yield this.getWindowState();return o.success||console.error(o),o.success&&"closed"!==o.window_state&&(yield this.internalClose()),t()})))}))}changeWindowSize(e,t,o){return i(this,void 0,void 0,(function*(){overwolf.windows.changeSize(e,t,o,e=>{e.success||console.error(e)})}))}changeWindowLocation(e,t){return i(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(o=>{o.success||console.error(o);let i=o.window.width,n=o.window.height;overwolf.utils.getMonitorsList(s=>{o.success||console.error(o);let a,r,d=s.displays[0].width,l=s.displays[0].height;"center-center"===e?(a=d/2-i/2,r=l/2-n/2):"center-right"===e?(a=d-i-20,r=l/2-n/2):"center-left"===e&&(a=20,r=l/2-n/2),overwolf.windows.changePosition(t,Math.round(a),Math.round(r),e=>{e.success||console.error(e)})})})}))}dragMove(e){e.onmousedown=e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)}}getWindowState(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;overwolf.windows.getWindowState(o,t)})))}))}static getCurrentInfo(){return i(this,void 0,void 0,(function*(){return new Promise(e=>i(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(t=>{e(t.window)})})))}))}obtain(){return new Promise((e,t)=>{const o=o=>{o&&"success"===o.status&&o.window&&o.window.id?(this._id=o.window.id,this._name||(this._name=o.window.name),e(o.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,o):overwolf.windows.getCurrentWindow(o)})}assureObtained(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>i(this,void 0,void 0,(function*(){return yield e.obtain(),t()})))}))}internalClose(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise((t,o)=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let i=e._id;overwolf.windows.close(i,e=>{e&&e.success?t():o(e)})})))}))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.operators=t.rankOffset=t.seasonColors=t.databaseObject=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={desktop:"desktop",inLobby:"in_lobby",inGame:"in_game",inLobbyDesktopOnly:"in_lobby_desktop_only",inGameDesktopOnly:"in_game_desktop_only",settings:"settings_in_game",settingsDesktopOnly:"settings_desktop",statistics:"statistics_in_game",statisticsDesktopOnly:"statistics_desktop"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.databaseObject={MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}};t.seasonColors={6:"#0050b3",7:"#ca361c",8:"#006543",9:"#ffc113",10:"#949f39",11:"#81a0c1",12:"#aa854f",13:"#d2005a",14:"#304395",15:"#13630c",16:"#069db3",17:"#946a97",18:"#2b7e9a",19:"#6ca511",20:"#d14007"};t.operators={768:{side:"atk",operator_name:"Sledge",ubisoft_id:"4:1"},1024:{side:"atk",operator_name:"Thatcher",ubisoft_id:"5:1"},513:{side:"atk",operator_name:"Ash",ubisoft_id:"3:2"},1025:{side:"atk",operator_name:"Thermite",ubisoft_id:"5:2"},770:{side:"atk",operator_name:"Twitch",ubisoft_id:"4:3"},1026:{side:"atk",operator_name:"Montagne",ubisoft_id:"5:3"},259:{side:"atk",operator_name:"Glaz",ubisoft_id:"2:4"},515:{side:"atk",operator_name:"Fuze",ubisoft_id:"3:4"},260:{side:"atk",operator_name:"Blitz",ubisoft_id:"2:5"},516:{side:"atk",operator_name:"IQ",ubisoft_id:"3:5"},261:{side:"atk",operator_name:"Buck",ubisoft_id:"2:6"},262:{side:"atk",operator_name:"Blackbeard",ubisoft_id:"2:7"},263:{side:"atk",operator_name:"Capitao",ubisoft_id:"2:8"},264:{side:"atk",operator_name:"Hibana",ubisoft_id:"2:9"},265:{side:"atk",operator_name:"Jackal",ubisoft_id:"2:A"},266:{side:"atk",operator_name:"Ying",ubisoft_id:"2:B"},523:{side:"atk",operator_name:"Zofia",ubisoft_id:"3:C"},268:{side:"atk",operator_name:"Dokkaebi",ubisoft_id:"2:D"},525:{side:"atk",operator_name:"Lion",ubisoft_id:"3:E"},781:{side:"atk",operator_name:"Finka",ubisoft_id:"4:E"},271:{side:"atk",operator_name:"Maverick",ubisoft_id:"2:10"},272:{side:"atk",operator_name:"Nomad",ubisoft_id:"2:11"},529:{side:"atk",operator_name:"Gridlock",ubisoft_id:"3:12"},274:{side:"atk",operator_name:"Nokk",ubisoft_id:"2:13"},277:{side:"atk",operator_name:"Amaru",ubisoft_id:"2:16"},278:{side:"atk",operator_name:"Kali",ubisoft_id:"2:17"},280:{side:"atk",operator_name:"Iana",ubisoft_id:"2:19"},790:{side:"atk",operator_name:"Ace",ubisoft_id:"4:17"},26:{side:"atk",operator_name:"Zero",ubisoft_id:"1:1B"},1:{side:"atk",operator_name:"Recruit",ubisoft_id:"recruit"},256:{side:"def",operator_name:"Smoke",ubisoft_id:"2:1"},512:{side:"def",operator_name:"Mute",ubisoft_id:"3:1"},257:{side:"def",operator_name:"Castle",ubisoft_id:"2:2"},769:{side:"def",operator_name:"Pulse",ubisoft_id:"4:2"},258:{side:"def",operator_name:"Doc",ubisoft_id:"2:3"},514:{side:"def",operator_name:"Rook",ubisoft_id:"3:3"},771:{side:"def",operator_name:"Kapkan",ubisoft_id:"4:4"},1027:{side:"def",operator_name:"Tachanka",ubisoft_id:"5:4"},772:{side:"def",operator_name:"Jager",ubisoft_id:"4:5"},1028:{side:"def",operator_name:"Bandit",ubisoft_id:"5:5"},517:{side:"def",operator_name:"Frost",ubisoft_id:"3:6"},518:{side:"def",operator_name:"Valkyrie",ubisoft_id:"3:7"},519:{side:"def",operator_name:"Caveira",ubisoft_id:"3:8"},520:{side:"def",operator_name:"Echo",ubisoft_id:"3:9"},521:{side:"def",operator_name:"Mira",ubisoft_id:"3:A"},522:{side:"def",operator_name:"Lesion",ubisoft_id:"3:B"},267:{side:"def",operator_name:"Ela",ubisoft_id:"2:C"},524:{side:"def",operator_name:"Vigil",ubisoft_id:"3:D"},270:{side:"def",operator_name:"Maestro",ubisoft_id:"2:F"},526:{side:"def",operator_name:"Alibi",ubisoft_id:"3:F"},527:{side:"def",operator_name:"Clash",ubisoft_id:"3:10"},528:{side:"def",operator_name:"Kaid",ubisoft_id:"3:11"},273:{side:"def",operator_name:"Mozzie",ubisoft_id:"2:12"},275:{side:"def",operator_name:"Warden",ubisoft_id:"2:14"},276:{side:"def",operator_name:"Goyo",ubisoft_id:"2:15"},534:{side:"def",operator_name:"Wamai",ubisoft_id:"3:17"},279:{side:"def",operator_name:"Oryx",ubisoft_id:"2:18"},281:{side:"def",operator_name:"Melusi",ubisoft_id:"2:1A"},1046:{side:"def",operator_name:"Aruni",ubisoft_id:"5:17"}};t.rankOffset={0:0,1:2,2:3,3:4,4:5,5:7,6:8,7:9,8:10,9:12,10:13,11:14,12:15,13:50,14:16,15:17,16:18,17:19,18:20,19:21,20:22,21:22,22:22,23:22}},,,,function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{d(i.next(e))}catch(e){s(e)}}function r(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;const n=o(1);t.Database=class{createIDB(e,t,o,n=null){return i(this,void 0,void 0,(function*(){return new Promise(s=>i(this,void 0,void 0,(function*(){const i=indexedDB.open("statsDB",o);i.onerror=function(){console.log(i.error),s(i.error)},i.onupgradeneeded=function(o){const a=i.result;let r;try{r=a.createObjectStore(e,{keyPath:t})}catch(t){const i=o.target.transaction;r=i.objectStore(e)}n&&n.forEach(e=>{try{r.createIndex(e,e)}catch(e){}}),s(r)},s(i)})))}))}storeToIDB(e,t,o){return i(this,void 0,void 0,(function*(){return new Promise(n=>i(this,void 0,void 0,(function*(){const i=indexedDB.open("statsDB");i.onerror=function(){console.log(i.error),n(i.error)},i.onsuccess=function(){const s=i.result.transaction(e,"readwrite").objectStore(e);if(o){if(o){const e=s.add(t);e.onsuccess=()=>{n(e)},e.onerror=function(){n(e.error)}}}else{const e=s.put(t);e.onsuccess=()=>{n(e)},e.onerror=function(){n(e.error)}}}})))}))}readFromIDB(e,t){return i(this,void 0,void 0,(function*(){return new Promise(o=>i(this,void 0,void 0,(function*(){const i=indexedDB.open("statsDB");i.onerror=function(){console.log(i.error),o(i.error)},i.onsuccess=function(){const n=i.result.transaction(e,"readonly").objectStore(e).get(t);n.onerror=function(){console.log(n.error),o(n.error)},n.onsuccess=function(){o(n.result)}}})))}))}readFromIDBRange(e,t,o,n,s,a){return i(this,void 0,void 0,(function*(){return new Promise(r=>i(this,void 0,void 0,(function*(){const i=indexedDB.open("statsDB");let d;o&&n?d=IDBKeyRange.bound(o,n):o&&!n?d=IDBKeyRange.lowerBound(o):!o&&n&&(d=IDBKeyRange.upperBound(n)),i.onerror=function(){console.log(i.error),r(i.error)},i.onsuccess=function(){const o=i.result.transaction(e,"readonly").objectStore(e).index(t).openCursor(d,"prev");let n=0,l=new Object;o.onerror=function(){console.log(o.error),r(o.error)},o.onsuccess=function(){const e=o.result;if(e){if(0!==s&&0===n)try{e.advance(s),n=s}catch(e){r(l)}else e&&n<=a&&n>=s?(l[e.value.timeStamp]=JSON.parse(JSON.stringify(e.value)),n++):e||r(l);try{e.continue()}catch(e){}}else r(l)}}})))}))}initAllIDB(){return i(this,void 0,void 0,(function*(){return new Promise(e=>i(this,void 0,void 0,(function*(){const t=new Date,o=new Date(t.getFullYear(),0,1),i=(t-o)/864e5,s=`${Math.ceil((i+o.getDay()+1)/7)},${t.getFullYear()}`,a=t.getDate()+","+(t.getMonth()+1)+","+t.getFullYear();let r={};for(let e=0;e<7;e++)r[e]=JSON.parse(JSON.stringify(n.databaseObject));r.week=s;let d=JSON.parse(JSON.stringify(n.databaseObject));d.date=a;const l=this.storeToIDB("weeks",r,!0),u=this.storeToIDB("days",d,!0);Promise.all([l,u]).then(t=>e(t))})))}))}displayDailyWeekly(){return i(this,void 0,void 0,(function*(){return new Promise(e=>i(this,void 0,void 0,(function*(){const t=new Date,o=new Date(t.getFullYear(),0,1),i=(t-o)/864e5,n=`${Math.ceil((i+o.getDay()+1)/7)},${t.getFullYear()}`,s=t.getDate()+","+(t.getMonth()+1)+","+t.getFullYear(),a=JSON.parse(localStorage.getItem("settings")),r=this.readFromIDB("weeks",n).then(e=>{let t={general:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},casual:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},ranked:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},unranked:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"}};for(let o=0;o<7;o++)t.general.kills+=e[o].MATCHMAKING_PVP.kills+e[o].MATCHMAKING_PVP_RANKED.kills+e[o].MATCHMAKING_PVP_UNRANKED.kills,t.general.deaths+=e[o].MATCHMAKING_PVP.deaths+e[o].MATCHMAKING_PVP_RANKED.deaths+e[o].MATCHMAKING_PVP_UNRANKED.deaths,t.general.wins+=e[o].MATCHMAKING_PVP.wins+e[o].MATCHMAKING_PVP_RANKED.wins+e[o].MATCHMAKING_PVP_UNRANKED.wins,t.general.losses+=e[o].MATCHMAKING_PVP.losses+e[o].MATCHMAKING_PVP_RANKED.losses+e[o].MATCHMAKING_PVP_UNRANKED.losses,t.casual.kills+=e[o].MATCHMAKING_PVP.kills,t.casual.deaths+=e[o].MATCHMAKING_PVP.deaths,t.casual.wins+=e[o].MATCHMAKING_PVP.wins,t.casual.losses+=e[o].MATCHMAKING_PVP.losses,t.ranked.kills+=e[o].MATCHMAKING_PVP_RANKED.kills,t.ranked.deaths+=e[o].MATCHMAKING_PVP_RANKED.deaths,t.ranked.wins+=e[o].MATCHMAKING_PVP_RANKED.wins,t.ranked.losses+=e[o].MATCHMAKING_PVP_RANKED.losses,t.unranked.kills+=e[o].MATCHMAKING_PVP_UNRANKED.kills,t.unranked.deaths+=e[o].MATCHMAKING_PVP_UNRANKED.deaths,t.unranked.wins+=e[o].MATCHMAKING_PVP_UNRANKED.wins,t.unranked.losses+=e[o].MATCHMAKING_PVP_UNRANKED.losses;return Object.keys(t).forEach(e=>{let o=t[e];0!=o.deaths?(o.kd=(o.kills/o.deaths).toFixed(2).toString(),o.attributeValueKD=Math.round(o.kills/o.deaths*33)+", 100"):0===o.deaths&&0!=o.kills?(o.kd="INF",o.attributeValueKD="100, 100"):(o.kd="0.00",o.attributeValueKD="0, 100"),o.wins+o.losses!=0?(o.wl=Math.round(o.wins/(o.wins+o.losses)*100).toString(),o.attributeValueWL=o.wl+", 100"):(o.wl="0",o.attributeValueWL="0, 100")}),document.getElementById("kd-circle-weekly").setAttribute("stroke-dasharray",t[a.circle].attributeValueKD),document.getElementById("wl-circle-weekly").setAttribute("stroke-dasharray",t[a.circle].attributeValueWL),document.getElementById("kd-circle-weekly-text").innerHTML=parseFloat(t[a.circle].kd).toFixed(2),document.getElementById("wl-circle-weekly-text").innerHTML=t[a.circle].wl+"%",console.log("WeeklyStats:",t),t}),d=this.readFromIDB("days",s).then(e=>{let t={general:{kills:e.MATCHMAKING_PVP.kills+e.MATCHMAKING_PVP_RANKED.kills+e.MATCHMAKING_PVP_UNRANKED.kills,deaths:e.MATCHMAKING_PVP.deaths+e.MATCHMAKING_PVP_RANKED.deaths+e.MATCHMAKING_PVP_UNRANKED.deaths,losses:e.MATCHMAKING_PVP.losses+e.MATCHMAKING_PVP_RANKED.losses+e.MATCHMAKING_PVP_UNRANKED.losses,wins:e.MATCHMAKING_PVP.wins+e.MATCHMAKING_PVP_RANKED.wins+e.MATCHMAKING_PVP_UNRANKED.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},casual:{kills:e.MATCHMAKING_PVP.kills,deaths:e.MATCHMAKING_PVP.deaths,losses:e.MATCHMAKING_PVP.losses,wins:e.MATCHMAKING_PVP.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},ranked:{kills:e.MATCHMAKING_PVP_RANKED.kills,deaths:e.MATCHMAKING_PVP_RANKED.deaths,losses:e.MATCHMAKING_PVP_RANKED.losses,wins:e.MATCHMAKING_PVP_RANKED.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},unranked:{kills:e.MATCHMAKING_PVP_UNRANKED.kills,deaths:e.MATCHMAKING_PVP_UNRANKED.deaths,losses:e.MATCHMAKING_PVP_UNRANKED.losses,wins:e.MATCHMAKING_PVP_UNRANKED.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"}};return Object.keys(t).forEach(e=>{let o=t[e];0!==o.deaths?(o.kd=(o.kills/o.deaths).toFixed(2).toString(),o.attributeValueKD=Math.round(o.kills/o.deaths*33)+", 100"):0===o.deaths&&0!==o.kills?(o.kd="INF",o.attributeValueKD="100, 100"):(o.kd="0.00",o.attributeValueKD="0, 100"),o.wins+o.losses!==0?(o.wl=Math.round(o.wins/(o.wins+o.losses)*100).toString(),o.attributeValueWL=o.wl+", 100"):(o.wl="0",o.attributeValueWL="0, 100")}),document.getElementById("kd-circle-daily").setAttribute("stroke-dasharray",t[a.circle].attributeValueKD),document.getElementById("wl-circle-daily").setAttribute("stroke-dasharray",t[a.circle].attributeValueWL),document.getElementById("kd-circle-daily-text").innerHTML=parseFloat(t[a.circle].kd).toFixed(2),document.getElementById("wl-circle-daily-text").innerHTML=t[a.circle].wl+"%",console.log("DailyStats:",t),t});Promise.all([r,d]).then(t=>e(t))})))}))}}},function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{d(i.next(e))}catch(e){s(e)}}function r(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.OWGamesEvents=void 0;const n=o(7);t.OWGamesEvents=class{constructor(e,t){this.onInfoUpdates=e=>{this._delegate.onInfoUpdates(e.info)},this.onNewEvents=e=>{this._delegate.onNewEvents(e)},this._delegate=e,this._requiredFeatures=t}getInfo(){return i(this,void 0,void 0,(function*(){return new Promise(e=>{overwolf.games.events.getInfo(e)})}))}setRequiredFeatures(){return i(this,void 0,void 0,(function*(){let e,t=1;for(;t>0;){if(e=yield new Promise(e=>{overwolf.games.events.setRequiredFeatures(this._requiredFeatures,e)}),"success"===e.status)return console.log("setRequiredFeatures(): success: "+JSON.stringify(e,null,2)),e.supportedFeatures.length>0;yield n.Timer.wait(3e3),t++}return console.warn("setRequiredFeatures(): failure after "+t+" tries"+JSON.stringify(e,null,2)),!1}))}registerEvents(){this.unRegisterEvents(),overwolf.games.events.onInfoUpdates2.addListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.addListener(this.onNewEvents)}unRegisterEvents(){overwolf.games.events.onInfoUpdates2.removeListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.removeListener(this.onNewEvents)}start(){return i(this,void 0,void 0,(function*(){console.log("[ow-game-events] START"),this.registerEvents(),yield this.setRequiredFeatures();const{res:e,status:t}=yield this.getInfo();e&&"success"===t&&this.onInfoUpdates({info:e})}))}stop(){console.log("[ow-game-events] STOP"),this.unRegisterEvents()}}},function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{d(i.next(e))}catch(e){s(e)}}function r(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;t.Timer=class{constructor(e,t){this._timerId=null,this.handleTimerEvent=()=>{this._timerId=null,this._delegate.onTimer(this._id)},this._delegate=e,this._id=t}static wait(e){return i(this,void 0,void 0,(function*(){return new Promise(t=>{setTimeout(t,e)})}))}start(e){this.stop(),this._timerId=setTimeout(this.handleTimerEvent,e)}stop(){null!=this._timerId&&(clearTimeout(this._timerId),this._timerId=null)}}},,function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{d(i.next(e))}catch(e){s(e)}}function r(e){try{d(i.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=o(10),s=o(11),a=o(0),r=o(6),d=o(5),l=o(1);let u,w,c;function _(e,t,o){const i='"'+t+'": '+JSON.stringify(o,void 0,2);"log"===e?console.log(i):"error"===e?console.error(i):"warn"===e&&console.warn(i)}class m{constructor(){this._windows={},this._windows[l.windowNames.desktop]=new a.OWWindow(l.windowNames.desktop),this._windows[l.windowNames.inGame]=new a.OWWindow(l.windowNames.inGame),this._windows[l.windowNames.inLobby]=new a.OWWindow(l.windowNames.inLobby),this._windows[l.windowNames.inGameDesktopOnly]=new a.OWWindow(l.windowNames.inGameDesktopOnly),this._windows[l.windowNames.inLobbyDesktopOnly]=new a.OWWindow(l.windowNames.inLobbyDesktopOnly),this.database=new d.Database,this._rainbowGameListener=new s.OWGameListener({onGameStarted:this.toggleWindows.bind(this),onGameEnded:this.toggleWindows.bind(this)}),this._rainbowGameEventsListener=new r.OWGamesEvents({onInfoUpdates:this.onInfoUpdates.bind(this),onNewEvents:this.onNewEvents.bind(this)},l.interestingFeatures2);this.database.createIDB("weeks","week",37).then(()=>this.database.createIDB("days","date",38)).then(()=>this.database.createIDB("matches","timeStamp",39,["timeStampIndex","matchId","gameMode"])).then(()=>this.database.initAllIDB())}static instance(){return m._instance||(m._instance=new m),m._instance}run(){return i(this,void 0,void 0,(function*(){this._rainbowGameEventsListener.start(),this._rainbowGameListener.start();const e=(yield this.isRainbowRunning())?null:this._windows[l.windowNames.desktop].restore();e&&(_("log","open window",e),c=e)}))}toggleWindows(e){e&&this.isGameRainbow(e)&&(e.isRunning?(this._windows[l.windowNames.desktop].close(),_("log","close window",l.windowNames.desktop)):(this._windows[l.windowNames.inGame].close(),this._windows[l.windowNames.inLobby].close(),this._windows[l.windowNames.inGameDesktopOnly].close(),this._windows[l.windowNames.inLobbyDesktopOnly].close(),this._windows[l.windowNames.desktop].restore(),_("log","close window",l.windowNames.inGame+" + "+l.windowNames.inLobby+" + "+l.windowNames.inGameDesktopOnly+" + "+l.windowNames.inLobbyDesktopOnly),_("log","open window",l.windowNames.desktop),c="desktop"))}isRainbowRunning(){return i(this,void 0,void 0,(function*(){const e=yield n.OWGames.getRunningGameInfo();return e&&e.isRunning&&this.isGameRainbow(e)}))}isGameRainbow(e){return e.classId===l.rainbowClassId}onInfoUpdates(e){("match_info"in e&&"game_mode"in e.match_info||"game_info"in e&&"phase"in e.game_info&&"lobby"===e.game_info.phase||"round"in e&&"number"in e.round&&null===e.round)&&(e.match_info&&(u=e.match_info.game_mode),"NONE"===u||"game_info"in e&&"phase"in e.game_info&&"lobby"===e.game_info.phase||"round"in e&&"number"in e.round&&null===e.round?(w="lobby",'"0"'===localStorage.desktopOnly?(this._windows[l.windowNames.inGame].close(),this._windows[l.windowNames.inGameDesktopOnly].close(),this._windows[l.windowNames.inLobby].restore(),overwolf.windows.close(l.windowNames.settings,()=>{_("log","close window",l.windowNames.settings)}),overwolf.windows.close(l.windowNames.settingsDesktopOnly,()=>{_("log","close window",l.windowNames.settingsDesktopOnly)}),_("log","close window",l.windowNames.inGame+" + "+l.windowNames.inGameDesktopOnly),_("log","open window",l.windowNames.inLobby)):(this._windows[l.windowNames.inGameDesktopOnly].close(),this._windows[l.windowNames.inGame].close(),this._windows[l.windowNames.inLobbyDesktopOnly].restore(),overwolf.windows.close(l.windowNames.settings,()=>{_("log","close window",l.windowNames.settings)}),overwolf.windows.close(l.windowNames.settingsDesktopOnly,()=>{_("log","close window",l.windowNames.settingsDesktopOnly)}),_("log","close window",l.windowNames.inGameDesktopOnly+" + "+l.windowNames.inGame),_("log","open window",l.windowNames.inLobbyDesktopOnly))):w="searching"),"round"in e&&null!=e.round.number&&"in_game"!==w&&(w="in_game",'"0"'===localStorage.desktopOnly?(this._windows[l.windowNames.inLobby].close(),this._windows[l.windowNames.inLobbyDesktopOnly].close(),this._windows[l.windowNames.inGame].restore(),overwolf.windows.close(l.windowNames.settings,()=>{_("log","close window",l.windowNames.settings)}),overwolf.windows.close(l.windowNames.settingsDesktopOnly,()=>{_("log","close window",l.windowNames.settingsDesktopOnly)}),_("log","close window",l.windowNames.inLobby+" + "+l.windowNames.inLobbyDesktopOnly),_("log","open window",l.windowNames.inGame)):(this._windows[l.windowNames.inLobbyDesktopOnly].close(),this._windows[l.windowNames.inLobby].close(),this._windows[l.windowNames.inGameDesktopOnly].restore(),overwolf.windows.close(l.windowNames.settings,()=>{_("log","close window",l.windowNames.settings)}),overwolf.windows.close(l.windowNames.settingsDesktopOnly,()=>{_("log","close window",l.windowNames.settingsDesktopOnly)}),_("log","close window",l.windowNames.inLobbyDesktopOnly+" + "+l.windowNames.inLobby),_("log","open window",l.windowNames.inGameDesktopOnly))),_("log","infoEvent",e)}onNewEvents(e){_("log","infoEvent",e)}}m.instance().run()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWGames=void 0;t.OWGames=class{static getRunningGameInfo(){return new Promise(e=>{overwolf.games.getRunningGameInfo(e)})}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWGameListener=void 0;const i=o(12);class n extends i.OWListener{constructor(e){super(e),this.onGameInfoUpdated=e=>{e&&e.gameInfo&&(e.runningChanged||e.gameChanged)&&(e.gameInfo.isRunning?this._delegate.onGameStarted&&this._delegate.onGameStarted(e.gameInfo):this._delegate.onGameEnded&&this._delegate.onGameEnded(e.gameInfo))},this.onRunningGameInfo=e=>{e&&e.isRunning&&this._delegate.onGameStarted&&this._delegate.onGameStarted(e)}}start(){super.start(),overwolf.games.onGameInfoUpdated.addListener(this.onGameInfoUpdated),overwolf.games.getRunningGameInfo(this.onRunningGameInfo)}stop(){overwolf.games.onGameInfoUpdated.removeListener(this.onGameInfoUpdated)}}t.OWGameListener=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWListener=void 0;t.OWListener=class{constructor(e){this._delegate=e}start(){this.stop()}}}]);