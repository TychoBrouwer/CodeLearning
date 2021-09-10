!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=19)}([function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{d(n.next(e))}catch(e){i(e)}}function a(e){try{d(n.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}restore(){return n(this,void 0,void 0,(function*(){let e=this;return console.log("window: restored"),new Promise(t=>n(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;overwolf.windows.restore(o,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${o}, reason=${e.error}`),t()})})))}))}minimize(){return n(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>n(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.minimize(o,()=>{}),t()})))}))}bringToFront(){return n(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>n(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.bringToFront(o,!0,()=>{}),t()})))}))}maximize(){return n(this,void 0,void 0,(function*(){let e=this;return console.log("window: maximized"),new Promise(t=>n(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.maximize(o,()=>{}),t()})))}))}hide(){return n(this,void 0,void 0,(function*(){let e=this;return console.log("window: hidden"),new Promise(t=>n(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.hide(o,()=>{}),t()})))}))}close(){return n(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>n(this,void 0,void 0,(function*(){yield e.assureObtained();e._id;const o=yield this.getWindowState();return o.success||console.error(o),o.success&&"closed"!==o.window_state&&(yield this.internalClose()),t()})))}))}changeWindowSize(e,t,o){return n(this,void 0,void 0,(function*(){overwolf.windows.changeSize(e,t,o,e=>{e.success||console.error(e)})}))}changeWindowLocation(e,t){return n(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(o=>{o.success||console.error(o);let n=o.window.width,s=o.window.height;overwolf.utils.getMonitorsList(i=>{o.success||console.error(o);let r,a,d=i.displays[0].width,l=i.displays[0].height;"center-center"===e?(r=d/2-n/2,a=l/2-s/2):"center-right"===e?(r=d-n-20,a=l/2-s/2):"center-left"===e&&(r=20,a=l/2-s/2),overwolf.windows.changePosition(t,Math.round(r),Math.round(a),e=>{e.success||console.error(e)})})})}))}dragMove(e){e.onmousedown=e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)}}getWindowState(){return n(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>n(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;overwolf.windows.getWindowState(o,t)})))}))}static getCurrentInfo(){return n(this,void 0,void 0,(function*(){return new Promise(e=>n(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(t=>{e(t.window)})})))}))}obtain(){return new Promise((e,t)=>{const o=o=>{o&&"success"===o.status&&o.window&&o.window.id?(this._id=o.window.id,this._name||(this._name=o.window.name),e(o.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,o):overwolf.windows.getCurrentWindow(o)})}assureObtained(){return n(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>n(this,void 0,void 0,(function*(){return yield e.obtain(),t()})))}))}internalClose(){return n(this,void 0,void 0,(function*(){let e=this;return new Promise((t,o)=>n(this,void 0,void 0,(function*(){yield e.assureObtained();let n=e._id;overwolf.windows.close(n,e=>{e&&e.success?t():o(e)})})))}))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.operators=t.rankOffset=t.seasonColors=t.databaseObject=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={desktop:"desktop",inLobby:"in_lobby",inGame:"in_game",inLobbyDesktopOnly:"in_lobby_desktop_only",inGameDesktopOnly:"in_game_desktop_only",settings:"settings_in_game",settingsDesktopOnly:"settings_desktop",statistics:"statistics_in_game",statisticsDesktopOnly:"statistics_desktop"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.databaseObject={MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}};t.seasonColors={6:"#0050b3",7:"#ca361c",8:"#006543",9:"#ffc113",10:"#949f39",11:"#81a0c1",12:"#aa854f",13:"#d2005a",14:"#304395",15:"#13630c",16:"#069db3",17:"#946a97",18:"#2b7e9a",19:"#6ca511",20:"#d14007"};t.operators={768:{side:"atk",operator_name:"Sledge",ubisoft_id:"4:1"},1024:{side:"atk",operator_name:"Thatcher",ubisoft_id:"5:1"},513:{side:"atk",operator_name:"Ash",ubisoft_id:"3:2"},1025:{side:"atk",operator_name:"Thermite",ubisoft_id:"5:2"},770:{side:"atk",operator_name:"Twitch",ubisoft_id:"4:3"},1026:{side:"atk",operator_name:"Montagne",ubisoft_id:"5:3"},259:{side:"atk",operator_name:"Glaz",ubisoft_id:"2:4"},515:{side:"atk",operator_name:"Fuze",ubisoft_id:"3:4"},260:{side:"atk",operator_name:"Blitz",ubisoft_id:"2:5"},516:{side:"atk",operator_name:"IQ",ubisoft_id:"3:5"},261:{side:"atk",operator_name:"Buck",ubisoft_id:"2:6"},262:{side:"atk",operator_name:"Blackbeard",ubisoft_id:"2:7"},263:{side:"atk",operator_name:"Capitao",ubisoft_id:"2:8"},264:{side:"atk",operator_name:"Hibana",ubisoft_id:"2:9"},265:{side:"atk",operator_name:"Jackal",ubisoft_id:"2:A"},266:{side:"atk",operator_name:"Ying",ubisoft_id:"2:B"},523:{side:"atk",operator_name:"Zofia",ubisoft_id:"3:C"},268:{side:"atk",operator_name:"Dokkaebi",ubisoft_id:"2:D"},525:{side:"atk",operator_name:"Lion",ubisoft_id:"3:E"},781:{side:"atk",operator_name:"Finka",ubisoft_id:"4:E"},271:{side:"atk",operator_name:"Maverick",ubisoft_id:"2:10"},272:{side:"atk",operator_name:"Nomad",ubisoft_id:"2:11"},529:{side:"atk",operator_name:"Gridlock",ubisoft_id:"3:12"},274:{side:"atk",operator_name:"Nokk",ubisoft_id:"2:13"},277:{side:"atk",operator_name:"Amaru",ubisoft_id:"2:16"},278:{side:"atk",operator_name:"Kali",ubisoft_id:"2:17"},280:{side:"atk",operator_name:"Iana",ubisoft_id:"2:19"},790:{side:"atk",operator_name:"Ace",ubisoft_id:"4:17"},26:{side:"atk",operator_name:"Zero",ubisoft_id:"1:1B"},1:{side:"atk",operator_name:"Recruit",ubisoft_id:"recruit"},256:{side:"def",operator_name:"Smoke",ubisoft_id:"2:1"},512:{side:"def",operator_name:"Mute",ubisoft_id:"3:1"},257:{side:"def",operator_name:"Castle",ubisoft_id:"2:2"},769:{side:"def",operator_name:"Pulse",ubisoft_id:"4:2"},258:{side:"def",operator_name:"Doc",ubisoft_id:"2:3"},514:{side:"def",operator_name:"Rook",ubisoft_id:"3:3"},771:{side:"def",operator_name:"Kapkan",ubisoft_id:"4:4"},1027:{side:"def",operator_name:"Tachanka",ubisoft_id:"5:4"},772:{side:"def",operator_name:"Jager",ubisoft_id:"4:5"},1028:{side:"def",operator_name:"Bandit",ubisoft_id:"5:5"},517:{side:"def",operator_name:"Frost",ubisoft_id:"3:6"},518:{side:"def",operator_name:"Valkyrie",ubisoft_id:"3:7"},519:{side:"def",operator_name:"Caveira",ubisoft_id:"3:8"},520:{side:"def",operator_name:"Echo",ubisoft_id:"3:9"},521:{side:"def",operator_name:"Mira",ubisoft_id:"3:A"},522:{side:"def",operator_name:"Lesion",ubisoft_id:"3:B"},267:{side:"def",operator_name:"Ela",ubisoft_id:"2:C"},524:{side:"def",operator_name:"Vigil",ubisoft_id:"3:D"},270:{side:"def",operator_name:"Maestro",ubisoft_id:"2:F"},526:{side:"def",operator_name:"Alibi",ubisoft_id:"3:F"},527:{side:"def",operator_name:"Clash",ubisoft_id:"3:10"},528:{side:"def",operator_name:"Kaid",ubisoft_id:"3:11"},273:{side:"def",operator_name:"Mozzie",ubisoft_id:"2:12"},275:{side:"def",operator_name:"Warden",ubisoft_id:"2:14"},276:{side:"def",operator_name:"Goyo",ubisoft_id:"2:15"},534:{side:"def",operator_name:"Wamai",ubisoft_id:"3:17"},279:{side:"def",operator_name:"Oryx",ubisoft_id:"2:18"},281:{side:"def",operator_name:"Melusi",ubisoft_id:"2:1A"},1046:{side:"def",operator_name:"Aruni",ubisoft_id:"5:17"}};t.rankOffset={0:0,1:2,2:3,3:4,4:5,5:7,6:8,7:9,8:10,9:12,10:13,11:14,12:15,13:50,14:16,15:17,16:18,17:19,18:20,19:21,20:22,21:22,22:22,23:22}},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{d(n.next(e))}catch(e){i(e)}}function a(e){try{d(n.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Controllers=void 0;t.Controllers=class{setShortcutText(e){overwolf.settings.hotkeys.get(t=>{t.success||console.error(t);const o=t.games[10826][0].binding;e.innerHTML="Unassigned"===o?"UNASSIGNED to show/hide the overlay":o+" to show/hide the overlay in game",console.log(`app hotkey "${o}"`)})}getOverwolfStatus(e){fetch("https://game-events-status.overwolf.com/10826_prod.json").then(e=>e.json()).then(t=>{const o=t.state;2===o?(e.style.display="block",e.innerHTML='<h4 class="announcement">Due to a recent game patch, some functions might not work - we’ll fix it shortly</h4>'):3===o?(e.style.display="block",e.innerHTML='<h4 class="announcement">Due to a recent game patch, Overwolf app API has stopped working - we’ll fix it shortly</h4>'):1===o&&(e.style.display="none",e.innerHTML=""),console.log(`overwolf status "${o}"`)})}getInternetStatus(e){const t=navigator.onLine;e.style.display=!1===t?"block":"none",console.log(`internet status "${t}"`)}setTableTab(e){for(let t=0;t<8;t++)for(let o=0;o<document.getElementsByClassName("player-tr").length;o++){const n=document.getElementById("ranked"+t+o),s=document.getElementById("casual"+t+o),i=document.getElementById("seasonal"+t+o);n&&("ranked"===e?(n.classList.add("current"),s.classList.remove("current"),i.classList.remove("current")):"casual"===e?(n.classList.remove("current"),s.classList.add("current"),i.classList.remove("current")):"season"===e&&(n.classList.remove("current"),s.classList.remove("current"),i.classList.add("current")))}console.log(`current table tab "${e}"`)}showDetailedPlayer(e){return e?(document.getElementById("table-body").style.display="block",document.getElementById("detailed-body").style.display="none",e=!1):(document.getElementById("table-body").style.display="none",document.getElementById("detailed-body").style.display="block",e=!0),console.log(`detailed stats "${!e}"`),e}setTheme(){const e=JSON.parse(localStorage.getItem("settings")),t=document.documentElement.style;"0"===e.theme?(t.setProperty("--main-text-color","rgba(255, 255, 255, 0.87)"),t.setProperty("--sec-text-color","#F0F0F0"),t.setProperty("--sec-text-hover-color","#FFFFFF61"),t.setProperty("--main-bg-color","#121212"),t.setProperty("--sec-bg-color","#FFFFFF14"),t.setProperty("--overlay-color","#000"),t.setProperty("--dropdown","#FFFFFF"),t.setProperty("--darker-btn-color","#FFFFFF1E"),t.setProperty("--darker-button-hover-color","#FFFFFF33"),t.setProperty("--dropdown-btn-color","#FFFFFF"),t.setProperty("--backgroundUrl","url('/img/background.webp')"),t.setProperty("--r6DB-logo-large",'url("/img/statsdb-light-logo.svg")')):"1"===e.theme?(t.setProperty("--main-text-color","#000000"),t.setProperty("--sec-text-color","#000000"),t.setProperty("--sec-text-hover-color","#333333"),t.setProperty("--main-bg-color","#f3f3f3"),t.setProperty("--sec-bg-color","#eeeeee"),t.setProperty("--overlay-color","#f3f3f3"),t.setProperty("--backgroundUrl","none"),t.setProperty("--darker-btn-color","#999999"),t.setProperty("--darker-button-hover-color","#000000"),t.setProperty("--dropdown","#000000"),t.setProperty("--dropdown-btn-color","#000000"),t.setProperty("--r6DB-logo-large",'url("/img/statsdb-dark-logo.svg")')):"2"==e.theme&&(t.setProperty("--main-text-color","#000000"),t.setProperty("--sec-text-color","#000000"),t.setProperty("--sec-text-hover-color","#333333"),t.setProperty("--main-bg-color","#b8b8b8"),t.setProperty("--sec-bg-color","#b0b0b0"),t.setProperty("--overlay-color","#b8b8b8"),t.setProperty("--backgroundUrl","none"),t.setProperty("--darker-btn-color","#999999"),t.setProperty("--darker-button-hover-color","#000000"),t.setProperty("--dropdown","#000000"),t.setProperty("--dropdown-btn-color","#000000"),t.setProperty("--r6DB-logo-large",'url("/img/statsdb-dark-logo.svg")'))}fetchConfig(){return n(this,void 0,void 0,(function*(){fetch("https://staging-api.statsdb.net/r6/overlay/config").then(e=>e.json()).then(e=>{if(localStorage.config){if(localStorage.config){JSON.parse(localStorage.getItem("config")).version!=e.payload.rainbow.version&&localStorage.setItem("config",JSON.stringify(e.payload.rainbow))}}else localStorage.setItem("config",JSON.stringify(e.payload.rainbow))})}))}getConfig(){return n(this,void 0,void 0,(function*(){return JSON.parse(localStorage.getItem("config"))}))}}},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{d(n.next(e))}catch(e){i(e)}}function a(e){try{d(n.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const s=o(0);t.AppWindow=class{constructor(e,t,o){this.maximized=!1,this.mainWindow=new s.OWWindow("background"),this.currWindow=new s.OWWindow(e),this.settingsWindow=new s.OWWindow(t),this.statisticsWindow=new s.OWWindow(o);const n=document.getElementById("closeButton"),i=document.getElementById("maximizeButton"),r=document.getElementById("minimizeButton"),a=document.getElementById("settingsButton"),d=document.getElementById("gameHistory"),l=document.getElementById("closeWindowButton"),c=document.getElementById("exitMinimizeModal"),u=document.getElementById("cancel"),m=document.getElementById("exit"),g=document.getElementById("minimize"),h=document.getElementById("header");"desktop"!==e&&"settings_desktop"!==e&&"statistics_desktop"!==e&&'"1"'!==localStorage.desktopOnly||this.setDrag(h),n&&n.addEventListener("click",()=>{c.style.display="block"}),l&&l.addEventListener("click",()=>{this.currWindow.close()}),r&&r.addEventListener("click",()=>{this.currWindow.minimize()}),i&&i.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),a&&a.addEventListener("click",()=>{this.settingsWindow.restore()}),d&&d.addEventListener("click",()=>{this.statisticsWindow.restore()}),u&&u.addEventListener("click",()=>{c.style.display="none"}),m&&m.addEventListener("click",()=>{this.mainWindow.close()}),g&&g.addEventListener("click",()=>{this.currWindow.minimize(),c.style.display="none"})}getWindowState(){return n(this,void 0,void 0,(function*(){return yield this.currWindow.getWindowState()}))}setDrag(e){return n(this,void 0,void 0,(function*(){this.currWindow.dragMove(e)}))}}},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{d(n.next(e))}catch(e){i(e)}}function a(e){try{d(n.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Localstorage=void 0;const s=new(o(2).Controllers);let i,r,a=localStorage.desktopOnly;t.Localstorage=class{constructor(){this.dtable=document.querySelectorAll("#setting-dtable .custom-option"),this.dtheme=document.querySelectorAll("#setting-dtheme .custom-option"),this.dmaximize=document.querySelectorAll("#setting-dmaximize .custom-option"),this.ddisplay=document.querySelectorAll("#setting-ddisplay .custom-option")}initiateLocalStorage(){return new Promise(e=>n(this,void 0,void 0,(function*(){localStorage.settings&&2!==Object.keys(JSON.parse(localStorage.settings)).length||localStorage.setItem("settings",JSON.stringify({table:"0",maximize:"0",theme:"0",circle:"general"})),(!localStorage.valuesTable||Object.keys(JSON.parse(localStorage.valuesTable)).length<9)&&localStorage.setItem("valuesTable",JSON.stringify({0:"Country",1:"LVL",2:"Kills",3:"Deaths",4:"K/D",5:"Wins",6:"Losses",7:"W/L",8:"Hacker %"})),localStorage.desktopOnly||localStorage.setItem("desktopOnly",'"0"'),r=JSON.parse(localStorage.settings),i=JSON.parse(localStorage.valuesTable),e()})))}changeSetting(e){const t=e.getAttribute("value"),o=e.getAttribute("settingid");if("setting-valueTable"===o){const o=e.getAttribute("index");i[o]=t,this.setStorage("valuesTable",i)}"setting-dtheme"===o&&(r.theme=t,this.setStorage("settings",r),s.setTheme()),"setting-dtable"===o&&(r.table=t,this.setStorage("settings",r)),"setting-ddisplay"===o&&this.setStorage("desktopOnly",t),"setting-dmaximize"===o&&(r.maximize=t,this.setStorage("settings",r))}setStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}setSettings(){var e;const t=[this.dtable[r.table],this.dtheme[r.theme],this.dmaximize[r.maximize],this.ddisplay[a.replace(/"/g,"")]];console.log(t);for(let o=0;o<t.length;o++){const n=t[o];null===(e=n.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),n.classList.add("selected"),n.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=n.textContent}this.setDefault()}setDefault(){var e;for(let t=0;t<9;t++){const o=i[t].replace(/[ /]/g,"-")+t,n=document.getElementById(o);null===(e=n.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),n.classList.add("selected"),n.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=n.textContent}}}},,,,,,,,,,,,,,,function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{d(n.next(e))}catch(e){i(e)}}function a(e){try{d(n.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=o(3),i=o(0),r=o(2),a=o(4),d=o(20),l=o(1),c=document.getElementById("gameList"),u=document.getElementById("loadMore"),m=document.querySelectorAll(".settingOptions"),g=["January","February","March","April","May","June","July","August","September","October","November","December"];let h,p,f,y,_={begin:0,end:0},w={year:0,month:0,unixDate:0,unixEndDate:0};const b=new r.Controllers,v=new a.Localstorage,k=new d.Database;v.initiateLocalStorage().then(()=>b.setTheme());function P(e,t){return 0!==t?(e/t).toFixed(2):e.toFixed(2)}function M(e,t){for(var o=[],n=-1;-1!=(n=e.indexOf(t,n+1));)o.push(n);return o}function A(e,t,o,n){for(let s=0;s<e.length;s++)document.getElementById(`badge-${t}-${e[s]}`).innerHTML+=`\n            <div class="badge-${o} badge">\n                ${n}\n            <div>\n        `}addEventListener("storage",()=>{b.setTheme()});class N extends s.AppWindow{constructor(){"desktop"===p?super(l.windowNames.statisticsDesktopOnly,"settings_desktop","statistics_desktop"):(super(l.windowNames.statistics,"settings_in_game","statistics_in_game"),h.restore(),h.changeWindowSize("statistics_desktop",1600,900));const e=Math.round((new Date).getTime()/1e3);_.begin=0,_.end=10,this.printGameList(null,e,0,10,_.end),this.setDateSelector(),this.setDisplayMoreGames()}static instance(){return this._instance||(this._instance=new N),this._instance}printGameList(e,t,o,n,s){const i={begin:e,end:t};this.getGames(i,o,n).then(e=>{f=!1,y=!1;const t=Object.keys(e).reverse();for(let o=0;o<t.length;o++){const n=e[t[o]];if(o<=s-1){const e=n.self,t=P(n.matchStats[e.id].kills,n.matchStats[e.id].deaths);let o,s;"MATCHMAKING_PVP"===n.gameMode?o="casual":"MATCHMAKING_PVP_RANKED"===n.gameMode?o="ranked":"MATCHMAKING_PVP_UNRANKED"===n.gameMode&&(o="unranked"),s=n.matchOutcome?n.matchOutcome:"left game",c.innerHTML+=`\n                        <div id="${n.timeStamp}" class="game-summary ${n.matchOutcome} md-whiteframe-1dp">\n                            <div class="left">\n                                <img class="map-img" src="">\n                            </div>\n                            <div class="right">\n                                <div class="match-outcome ${n.matchOutcome}">\n                                    <p>${s}</p>\n                                </div>\n                                <div class="game-stats">\n                                    <p>K/D: <span>${t}</span></p>\n                                    <p>Gamemode: <span>${o}</span></p>\n                                </div>\n                            </div>\n                        </div>`,console.log(`display game "${n.timeStamp}" "${n.matchOutcome}"`)}else f=!0}}).then(()=>{this.setDetailedGamesListener(),document.querySelectorAll(".game-summary")[0]?(this.displayDetailedStats(document.querySelectorAll(".game-summary")[0]),document.getElementById("blue-player-table").style.height="auto",document.getElementById("orange-player-table").style.height="auto"):(document.getElementById("blue-player-table").innerHTML="",document.getElementById("blue-player-table").style.height="205px",document.getElementById("orange-player-table").innerHTML="",document.getElementById("orange-player-table").style.height="205px",document.getElementById("right-roundstats").innerHTML=""),u.innerHTML=!0===f?"<p>More games to display</p><p>Scroll down to display more</p>":"<p>No more games to display</p><p>Change month for more games</p>"})}getGames(e,t,o){return n(this,void 0,void 0,(function*(){return new Promise(s=>n(this,void 0,void 0,(function*(){k.readFromIDBRange("matches","timeStampIndex",e.begin,e.end,t,o).then(e=>{s(e)})})))}))}setDateSelector(){const e=this;document.addEventListener("click",(function(e){const t=e.target;let o=!0;for(let e=0;e<m.length;e++)m[e].contains(t)&&(o=!1);if(o)for(let e=0;e<m.length;e++)m[e].classList.remove("open")}));for(let e=0;e<m.length;e++){const t=m[e];let o;if("setYear"===t.id){w.year=(new Date).getFullYear(),o=w.year.toString();for(let e=0;e<5;e++){const o=(new Date).getFullYear()-e;if(t.querySelector(".custom-options").innerHTML+=`<span class="custom-option" settingMode="year" value='${o}'>${o}</span>`,2021===o)break}}"setMonth"===t.id&&(w.month=(new Date).getMonth(),o=g[w.month]),t.querySelector(".custom-select__trigger span").innerHTML=o,w.unixDate=Math.round(new Date(w.year+"."+g[w.month]).getTime()/1e3),11!==w.month?w.unixEndDate=Math.round(new Date(w.year+"."+g[w.month+1]).getTime()/1e3):w.unixEndDate=Math.round(new Date([w.year-1]+"."+g[0]).getTime()/1e3),t.addEventListener("click",(function(){for(let e=0;e<m.length;e++){const o=m[e];t!==o?o.querySelector(".custom-select")?o.querySelector(".custom-select").classList.remove("open"):o.classList.remove("open"):t.classList.toggle("open")}}))}for(const t of document.querySelectorAll(".custom-option"))t.addEventListener("click",(function(){var o;const n=t.getAttribute("value"),s=t.getAttribute("settingMode");c.innerHTML="",t.classList.contains("selected")||(null===(o=t.parentNode.querySelector(".custom-option.selected"))||void 0===o||o.classList.remove("selected"),t.classList.add("selected"),t.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=t.textContent),w[s]=Number(n),w.unixDate=Math.round(new Date(w.year+"."+g[w.month]).getTime()/1e3),11!==w.month?w.unixEndDate=Math.round(new Date(w.year+"."+g[w.month+1]).getTime()/1e3):w.unixEndDate=Math.round(new Date([w.year-1]+"."+g[0]).getTime()/1e3),_.begin=0,_.end=10,e.printGameList(w.unixDate,w.unixEndDate,0,10,_.end)}))}setDisplayMoreGames(){document.getElementById("gameListContainer").addEventListener("scroll",()=>{var e=event.target;if(e.scrollHeight-e.scrollTop===e.offsetHeight)if(!1===y||u.classList.contains("more-active")&&!1===f)u.classList.contains("more-active")||u.classList.add("more-active"),y=!0;else{_.begin=_.end,_.end=_.end+10;const e=_.begin+2,t=_.end+1;this.printGameList(w.unixDate,w.unixEndDate,e,t,_.end),u.classList.remove("more-active"),y=!1}})}setDetailedGamesListener(){let e=document.getElementsByClassName("game-summary");const t=this;for(let o=0;o<e.length;o++)e[o].addEventListener("click",(function(){t.displayDetailedStats(this)}))}displayDetailedStats(e){const t=Number(e.id);document.getElementById("right-roundstats").innerHTML="";k.readFromIDB("matches",t).then(e=>{e.self.id;let t="",o="",n="";for(const n in e.matchStats)if(e.matchStats.hasOwnProperty(n)){const s=`\n                            <div class="player-tr" id="${n}">\n                                <div class="stat player-name">${e.matchStats[n].name}</div>\n                                <div class="stat player-kills">${e.matchStats[n].kills}</div>\n                                <div class="stat player-deaths">${e.matchStats[n].deaths}</div>\n                                <div class="stat player-kd">${P(e.matchStats[n].kills,e.matchStats[n].deaths)}</div>\n                                <div class="stat player-kpr">${P(e.matchStats[n].kills,Object.keys(e.roundStats).length)}</div>\n                                <div class="stat player-score">${e.matchStats[n].score}</div>\n                            </div>`;"Orange"===e.matchStats[n].team?o+=s:t+=s}document.getElementById("orange-player-table").innerHTML=o,document.getElementById("blue-player-table").innerHTML=t,"Orange"===e.self.userTeam?document.getElementById("blue-table").before(document.getElementById("orange-table")):document.getElementById("orange-table").before(document.getElementById("blue-table"));for(const t in e.roundStats)if(e.roundStats.hasOwnProperty(t)){let o,i="",r="",a=[],d=!1,c=[],u=[],m=[];console.log(t+"   "+e.roundStats[t].roundOutcome),o=void 0!==e.roundStats[t].roundOutcome?e.roundStats[t].roundOutcome:"unknown",n=`\n                            <div id="round-${t}" class="rounds-stats">\n                                <h1>Round<span>${t}</span></h1>\n                                <p class="round-${o}">${o.toUpperCase()}</p>\n                                <div id="player-round-stats-${t}" class="round-stats"></div>\n                            </div>`,document.getElementById("right-roundstats").innerHTML+=n;for(const o in e.roundStats[t])if(e.roundStats[t].hasOwnProperty(o)&&"roundOutcome"!==o){let n,s=e.roundStats[t][o].operator;a.push(e.roundStats[t][o].kills),n=0===s?"https://cdn3.iconfinder.com/data/icons/account-1/64/Account-06-512.png":"https://api.statsdb.net/r6/assets/operators/"+l.operators[s].operator_name.toLowerCase()+"/badge",5===e.roundStats[t][o].kills&&(d=o),0===e.roundStats[t][o].deaths&&0===e.roundStats[t][o].score&&c.push(o),0===e.roundStats[t][o].deaths&&e.roundStats[t][o].score>0&&u.push(o),e.roundStats[t][o].deaths>0&&m.push(o);const g=`\n                                        <div id="player-${o}" class="player-round-stats">\n                                            <img src="${n}">\n                                            <div class="player-stats">\n                                                <div class="stat-div">\n                                                    <div><span>${e.roundStats[t][o].name}</span></div>\n                                                    <div id="badge-${t}-${o}" class="badge-container">\n\n                                                    </div>\n                                                </div>\n                                                <div class="stat-div">\n                                                    <div>kills: <span>${e.roundStats[t][o].kills}</span></div>\n                                                    <div>deaths: <span>${e.roundStats[t][o].deaths}</span></div>\n                                                    <div>k/d: <span>${P(e.roundStats[t][o].kills,e.roundStats[t][o].deaths)}</span></div>\n                                                    <div>score: <span>${e.roundStats[t][o].score}</span></div>\n                                                </div>\n                                            </div>\n                                        </div>`;"Orange"===e.roundStats[t][o].team?i+=g:r+=g}"Orange"===e.self.userTeam?document.getElementById("player-round-stats-"+t).innerHTML=i+r:document.getElementById("player-round-stats-"+t).innerHTML=r+i;var s=M(a,a.reduce((e,t)=>Math.max(e,t)));A(c,t,"spectating","Spectating"),A(u,t,"survided","Survided"),A(m,t,"died","Died"),d&&(document.getElementById(`badge-${t}-${d}`).innerHTML+='\n                                <div class="badge-ace badge">\n                                    ACE\n                                <div>\n                            '),A(s,t,"kills","K/D")}})}}overwolf.windows.getOpenWindows(e=>{p=Object.keys(e)[1],h="desktop"===p?new i.OWWindow(l.windowNames.statisticsDesktopOnly):new i.OWWindow(l.windowNames.statistics),N.instance()})},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function r(e){try{d(n.next(e))}catch(e){i(e)}}function a(e){try{d(n.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;const s=o(1);t.Database=class{createIDB(e,t,o,s=null){return n(this,void 0,void 0,(function*(){return new Promise(i=>n(this,void 0,void 0,(function*(){const n=indexedDB.open("statsDB",o);n.onerror=function(){console.log(n.error),i(n.error)},n.onupgradeneeded=function(o){const r=n.result;let a;try{a=r.createObjectStore(e,{keyPath:t})}catch(t){const n=o.target.transaction;a=n.objectStore(e)}s&&s.forEach(e=>{try{a.createIndex(e,e)}catch(e){}}),i(a)},i(n)})))}))}storeToIDB(e,t,o){return n(this,void 0,void 0,(function*(){return new Promise(s=>n(this,void 0,void 0,(function*(){const n=indexedDB.open("statsDB");n.onerror=function(){console.log(n.error),s(n.error)},n.onsuccess=function(){const i=n.result.transaction(e,"readwrite").objectStore(e);if(o){if(o){const e=i.add(t);e.onsuccess=()=>{s(e)},e.onerror=function(){s(e.error)}}}else{const e=i.put(t);e.onsuccess=()=>{s(e)},e.onerror=function(){s(e.error)}}}})))}))}readFromIDB(e,t){return n(this,void 0,void 0,(function*(){return new Promise(o=>n(this,void 0,void 0,(function*(){const n=indexedDB.open("statsDB");n.onerror=function(){console.log(n.error),o(n.error)},n.onsuccess=function(){const s=n.result.transaction(e,"readonly").objectStore(e).get(t);s.onerror=function(){console.log(s.error),o(s.error)},s.onsuccess=function(){o(s.result)}}})))}))}readFromIDBRange(e,t,o,s,i,r){return n(this,void 0,void 0,(function*(){return new Promise(a=>n(this,void 0,void 0,(function*(){const n=indexedDB.open("statsDB");let d;o&&s?d=IDBKeyRange.bound(o,s):o&&!s?d=IDBKeyRange.lowerBound(o):!o&&s&&(d=IDBKeyRange.upperBound(s)),n.onerror=function(){console.log(n.error),a(n.error)},n.onsuccess=function(){const o=n.result.transaction(e,"readonly").objectStore(e).index(t).openCursor(d,"prev");let s=0,l=new Object;o.onerror=function(){console.log(o.error),a(o.error)},o.onsuccess=function(){const e=o.result;if(e){if(0!==i&&0===s)try{e.advance(i),s=i}catch(e){a(l)}else e&&s<=r&&s>=i?(l[e.value.timeStamp]=JSON.parse(JSON.stringify(e.value)),s++):e||a(l);try{e.continue()}catch(e){}}else a(l)}}})))}))}initAllIDB(){return n(this,void 0,void 0,(function*(){return new Promise(e=>n(this,void 0,void 0,(function*(){const t=new Date,o=new Date(t.getFullYear(),0,1),n=(t-o)/864e5,i=`${Math.ceil((n+o.getDay()+1)/7)},${t.getFullYear()}`,r=t.getDate()+","+(t.getMonth()+1)+","+t.getFullYear();let a={};for(let e=0;e<7;e++)a[e]=JSON.parse(JSON.stringify(s.databaseObject));a.week=i;let d=JSON.parse(JSON.stringify(s.databaseObject));d.date=r;const l=this.storeToIDB("weeks",a,!0),c=this.storeToIDB("days",d,!0);Promise.all([l,c]).then(t=>e(t))})))}))}displayDailyWeekly(){return n(this,void 0,void 0,(function*(){return new Promise(e=>n(this,void 0,void 0,(function*(){const t=new Date,o=new Date(t.getFullYear(),0,1),n=(t-o)/864e5,s=`${Math.ceil((n+o.getDay()+1)/7)},${t.getFullYear()}`,i=t.getDate()+","+(t.getMonth()+1)+","+t.getFullYear(),r=JSON.parse(localStorage.getItem("settings")),a=this.readFromIDB("weeks",s).then(e=>{let t={general:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},casual:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},ranked:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},unranked:{kills:0,deaths:0,losses:0,wins:0,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"}};for(let o=0;o<7;o++)t.general.kills+=e[o].MATCHMAKING_PVP.kills+e[o].MATCHMAKING_PVP_RANKED.kills+e[o].MATCHMAKING_PVP_UNRANKED.kills,t.general.deaths+=e[o].MATCHMAKING_PVP.deaths+e[o].MATCHMAKING_PVP_RANKED.deaths+e[o].MATCHMAKING_PVP_UNRANKED.deaths,t.general.wins+=e[o].MATCHMAKING_PVP.wins+e[o].MATCHMAKING_PVP_RANKED.wins+e[o].MATCHMAKING_PVP_UNRANKED.wins,t.general.losses+=e[o].MATCHMAKING_PVP.losses+e[o].MATCHMAKING_PVP_RANKED.losses+e[o].MATCHMAKING_PVP_UNRANKED.losses,t.casual.kills+=e[o].MATCHMAKING_PVP.kills,t.casual.deaths+=e[o].MATCHMAKING_PVP.deaths,t.casual.wins+=e[o].MATCHMAKING_PVP.wins,t.casual.losses+=e[o].MATCHMAKING_PVP.losses,t.ranked.kills+=e[o].MATCHMAKING_PVP_RANKED.kills,t.ranked.deaths+=e[o].MATCHMAKING_PVP_RANKED.deaths,t.ranked.wins+=e[o].MATCHMAKING_PVP_RANKED.wins,t.ranked.losses+=e[o].MATCHMAKING_PVP_RANKED.losses,t.unranked.kills+=e[o].MATCHMAKING_PVP_UNRANKED.kills,t.unranked.deaths+=e[o].MATCHMAKING_PVP_UNRANKED.deaths,t.unranked.wins+=e[o].MATCHMAKING_PVP_UNRANKED.wins,t.unranked.losses+=e[o].MATCHMAKING_PVP_UNRANKED.losses;return Object.keys(t).forEach(e=>{let o=t[e];0!=o.deaths?(o.kd=(o.kills/o.deaths).toFixed(2).toString(),o.attributeValueKD=Math.round(o.kills/o.deaths*33)+", 100"):0===o.deaths&&0!=o.kills?(o.kd="INF",o.attributeValueKD="100, 100"):(o.kd="0.00",o.attributeValueKD="0, 100"),o.wins+o.losses!=0?(o.wl=Math.round(o.wins/(o.wins+o.losses)*100).toString(),o.attributeValueWL=o.wl+", 100"):(o.wl="0",o.attributeValueWL="0, 100")}),document.getElementById("kd-circle-weekly").setAttribute("stroke-dasharray",t[r.circle].attributeValueKD),document.getElementById("wl-circle-weekly").setAttribute("stroke-dasharray",t[r.circle].attributeValueWL),document.getElementById("kd-circle-weekly-text").innerHTML=parseFloat(t[r.circle].kd).toFixed(2),document.getElementById("wl-circle-weekly-text").innerHTML=t[r.circle].wl+"%",console.log("WeeklyStats:",t),t}),d=this.readFromIDB("days",i).then(e=>{let t={general:{kills:e.MATCHMAKING_PVP.kills+e.MATCHMAKING_PVP_RANKED.kills+e.MATCHMAKING_PVP_UNRANKED.kills,deaths:e.MATCHMAKING_PVP.deaths+e.MATCHMAKING_PVP_RANKED.deaths+e.MATCHMAKING_PVP_UNRANKED.deaths,losses:e.MATCHMAKING_PVP.losses+e.MATCHMAKING_PVP_RANKED.losses+e.MATCHMAKING_PVP_UNRANKED.losses,wins:e.MATCHMAKING_PVP.wins+e.MATCHMAKING_PVP_RANKED.wins+e.MATCHMAKING_PVP_UNRANKED.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},casual:{kills:e.MATCHMAKING_PVP.kills,deaths:e.MATCHMAKING_PVP.deaths,losses:e.MATCHMAKING_PVP.losses,wins:e.MATCHMAKING_PVP.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},ranked:{kills:e.MATCHMAKING_PVP_RANKED.kills,deaths:e.MATCHMAKING_PVP_RANKED.deaths,losses:e.MATCHMAKING_PVP_RANKED.losses,wins:e.MATCHMAKING_PVP_RANKED.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"},unranked:{kills:e.MATCHMAKING_PVP_UNRANKED.kills,deaths:e.MATCHMAKING_PVP_UNRANKED.deaths,losses:e.MATCHMAKING_PVP_UNRANKED.losses,wins:e.MATCHMAKING_PVP_UNRANKED.wins,kd:"0",wl:"0",attributeValueKD:"0, 100",attributeValueWL:"0, 100"}};return Object.keys(t).forEach(e=>{let o=t[e];0!==o.deaths?(o.kd=(o.kills/o.deaths).toFixed(2).toString(),o.attributeValueKD=Math.round(o.kills/o.deaths*33)+", 100"):0===o.deaths&&0!==o.kills?(o.kd="INF",o.attributeValueKD="100, 100"):(o.kd="0.00",o.attributeValueKD="0, 100"),o.wins+o.losses!==0?(o.wl=Math.round(o.wins/(o.wins+o.losses)*100).toString(),o.attributeValueWL=o.wl+", 100"):(o.wl="0",o.attributeValueWL="0, 100")}),document.getElementById("kd-circle-daily").setAttribute("stroke-dasharray",t[r.circle].attributeValueKD),document.getElementById("wl-circle-daily").setAttribute("stroke-dasharray",t[r.circle].attributeValueWL),document.getElementById("kd-circle-daily-text").innerHTML=parseFloat(t[r.circle].kd).toFixed(2),document.getElementById("wl-circle-daily-text").innerHTML=t[r.circle].wl+"%",console.log("DailyStats:",t),t});Promise.all([a,d]).then(t=>e(t))})))}))}}}]);