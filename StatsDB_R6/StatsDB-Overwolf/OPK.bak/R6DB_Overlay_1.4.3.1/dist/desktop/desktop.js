!function(e){var t={};function o(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=13)}([function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(s,n){function r(e){try{d(i.next(e))}catch(e){n(e)}}function a(e){try{d(i.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}restore(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: restored"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;overwolf.windows.restore(o,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${o}, reason=${e.error}`),t()})})))}))}minimize(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.minimize(o,()=>{}),t()})))}))}bringToFront(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.bringToFront(o,!0,()=>{}),t()})))}))}maximize(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: maximized"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.maximize(o,()=>{}),t()})))}))}hide(){return i(this,void 0,void 0,(function*(){let e=this;return console.log("window: hidden"),new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;return overwolf.windows.hide(o,()=>{}),t()})))}))}close(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();e._id;const o=yield this.getWindowState();return o.success||console.error(o),o.success&&"closed"!==o.window_state&&(yield this.internalClose()),t()})))}))}changeWindowSize(e,t,o){return i(this,void 0,void 0,(function*(){overwolf.windows.changeSize(e,t,o,e=>{e.success||console.error(e)})}))}changeWindowLocation(e,t){return i(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(o=>{o.success||console.error(o);let i=o.window.width,s=o.window.height;overwolf.utils.getMonitorsList(n=>{o.success||console.error(o);let r,a,d=JSON.parse(localStorage.settings).monitorId,l=n.displays[d].width,c=n.displays[d].height;"center-center"===e?(r=l/2-i/2,a=c/2-s/2):"center-right"===e?(r=l-i-20,a=c/2-s/2):"center-left"===e&&(r=20,a=c/2-s/2),overwolf.windows.changePosition(t,Math.round(r),Math.round(a),e=>{e.success||console.error(e)})})})}))}scaleWindow(e,t,o,s){return i(this,void 0,void 0,(function*(){const n=this;return new Promise(r=>i(this,void 0,void 0,(function*(){const i=Math.round(t*s),a=Math.round(o*s);n.changeWindowSize(e,i,a),document.getElementsByTagName("main")[0].style.transform=`scale(${s})`,"in_game"===e||"in_game_desktop_only"===e?(document.getElementsByTagName("main")[0].style.width=Math.ceil(100/s*10)/10+"%",document.getElementsByTagName("main")[0].style.height=`calc(${Math.ceil(100/s*10)/10}% - 32px)`):"in_lobby"===e||"in_lobby_desktop_only"===e?(document.getElementsByTagName("main")[0].style.width=Math.ceil(100/s*10)/10+"%",document.getElementsByTagName("main")[0].style.height=`calc(${Math.ceil(100/s*10)/10}% - 32px)`,document.querySelector("#in-lobby .ad-lobby").style.bottom=Math.ceil(7*Math.pow(s,-4)*100)/100+"px"):(document.getElementsByTagName("main")[0].style.width=Math.ceil(100/s*10)/10+"%",document.getElementsByTagName("main")[0].style.height=Math.ceil(100/s*10)/10+"%"),"in_lobby"!==e&&"in_lobby_desktop_only"!==e||(document.getElementById("shortcut-text").style.display=s<=.6?"none":"block"),r()})))}))}dragMove(e){e.onmousedown=e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)}}getMonitorsList(){return i(this,void 0,void 0,(function*(){return new Promise(e=>i(this,void 0,void 0,(function*(){overwolf.utils.getMonitorsList(t=>{e(t)})})))}))}getWindowState(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;overwolf.windows.getWindowState(o,t)})))}))}static getCurrentInfo(){return i(this,void 0,void 0,(function*(){return new Promise(e=>i(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(t=>{e(t.window)})})))}))}obtain(){return new Promise((e,t)=>{const o=o=>{o&&"success"===o.status&&o.window&&o.window.id?(this._id=o.window.id,this._name||(this._name=o.window.name),e(o.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,o):overwolf.windows.getCurrentWindow(o)})}assureObtained(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>i(this,void 0,void 0,(function*(){return yield e.obtain(),t()})))}))}internalClose(){return i(this,void 0,void 0,(function*(){let e=this;return new Promise((t,o)=>i(this,void 0,void 0,(function*(){yield e.assureObtained();let i=e._id;overwolf.windows.close(i,e=>{e&&e.success?t():o(e)})})))}))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.operators=t.rankOffset=t.seasonColors=t.databaseObject=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={desktop:"desktop",inLobby:"in_lobby",inGame:"in_game",inLobbyDesktopOnly:"in_lobby_desktop_only",inGameDesktopOnly:"in_game_desktop_only",settings:"settings_in_game",settingsDesktopOnly:"settings_desktop",statistics:"statistics_in_game",statisticsDesktopOnly:"statistics_desktop",website:"website_in_game",websiteDesktopOnly:"website_desktop"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.databaseObject={MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0},CUSTOMGAME_PVP_DEDICATED:{kills:0,deaths:0,wins:0,losses:0}};t.seasonColors={6:"#0050b3",7:"#ca361c",8:"#006543",9:"#ffc113",10:"#949f39",11:"#81a0c1",12:"#aa854f",13:"#d2005a",14:"#304395",15:"#13630c",16:"#069db3",17:"#946a97",18:"#2b7e9a",19:"#6ca511",20:"#d14007"};t.operators={768:{side:"atk",operator_name:"Sledge",ubisoft_id:"4:1"},1024:{side:"atk",operator_name:"Thatcher",ubisoft_id:"5:1"},513:{side:"atk",operator_name:"Ash",ubisoft_id:"3:2"},1025:{side:"atk",operator_name:"Thermite",ubisoft_id:"5:2"},770:{side:"atk",operator_name:"Twitch",ubisoft_id:"4:3"},1026:{side:"atk",operator_name:"Montagne",ubisoft_id:"5:3"},259:{side:"atk",operator_name:"Glaz",ubisoft_id:"2:4"},515:{side:"atk",operator_name:"Fuze",ubisoft_id:"3:4"},260:{side:"atk",operator_name:"Blitz",ubisoft_id:"2:5"},516:{side:"atk",operator_name:"IQ",ubisoft_id:"3:5"},261:{side:"atk",operator_name:"Buck",ubisoft_id:"2:6"},262:{side:"atk",operator_name:"Blackbeard",ubisoft_id:"2:7"},263:{side:"atk",operator_name:"Capitao",ubisoft_id:"2:8"},264:{side:"atk",operator_name:"Hibana",ubisoft_id:"2:9"},265:{side:"atk",operator_name:"Jackal",ubisoft_id:"2:A"},266:{side:"atk",operator_name:"Ying",ubisoft_id:"2:B"},523:{side:"atk",operator_name:"Zofia",ubisoft_id:"3:C"},268:{side:"atk",operator_name:"Dokkaebi",ubisoft_id:"2:D"},525:{side:"atk",operator_name:"Lion",ubisoft_id:"3:E"},781:{side:"atk",operator_name:"Finka",ubisoft_id:"4:E"},271:{side:"atk",operator_name:"Maverick",ubisoft_id:"2:10"},272:{side:"atk",operator_name:"Nomad",ubisoft_id:"2:11"},529:{side:"atk",operator_name:"Gridlock",ubisoft_id:"3:12"},274:{side:"atk",operator_name:"Nokk",ubisoft_id:"2:13"},277:{side:"atk",operator_name:"Amaru",ubisoft_id:"2:16"},278:{side:"atk",operator_name:"Kali",ubisoft_id:"2:17"},280:{side:"atk",operator_name:"Iana",ubisoft_id:"2:19"},790:{side:"atk",operator_name:"Ace",ubisoft_id:"4:17"},26:{side:"atk",operator_name:"Zero",ubisoft_id:"1:1B"},1:{side:"atk",operator_name:"Recruit",ubisoft_id:"recruit"},256:{side:"def",operator_name:"Smoke",ubisoft_id:"2:1"},512:{side:"def",operator_name:"Mute",ubisoft_id:"3:1"},257:{side:"def",operator_name:"Castle",ubisoft_id:"2:2"},769:{side:"def",operator_name:"Pulse",ubisoft_id:"4:2"},258:{side:"def",operator_name:"Doc",ubisoft_id:"2:3"},514:{side:"def",operator_name:"Rook",ubisoft_id:"3:3"},771:{side:"def",operator_name:"Kapkan",ubisoft_id:"4:4"},1027:{side:"def",operator_name:"Tachanka",ubisoft_id:"5:4"},772:{side:"def",operator_name:"Jager",ubisoft_id:"4:5"},1028:{side:"def",operator_name:"Bandit",ubisoft_id:"5:5"},517:{side:"def",operator_name:"Frost",ubisoft_id:"3:6"},518:{side:"def",operator_name:"Valkyrie",ubisoft_id:"3:7"},519:{side:"def",operator_name:"Caveira",ubisoft_id:"3:8"},520:{side:"def",operator_name:"Echo",ubisoft_id:"3:9"},521:{side:"def",operator_name:"Mira",ubisoft_id:"3:A"},522:{side:"def",operator_name:"Lesion",ubisoft_id:"3:B"},267:{side:"def",operator_name:"Ela",ubisoft_id:"2:C"},524:{side:"def",operator_name:"Vigil",ubisoft_id:"3:D"},270:{side:"def",operator_name:"Maestro",ubisoft_id:"2:F"},526:{side:"def",operator_name:"Alibi",ubisoft_id:"3:F"},527:{side:"def",operator_name:"Clash",ubisoft_id:"3:10"},528:{side:"def",operator_name:"Kaid",ubisoft_id:"3:11"},273:{side:"def",operator_name:"Mozzie",ubisoft_id:"2:12"},275:{side:"def",operator_name:"Warden",ubisoft_id:"2:14"},276:{side:"def",operator_name:"Goyo",ubisoft_id:"2:15"},534:{side:"def",operator_name:"Wamai",ubisoft_id:"3:17"},279:{side:"def",operator_name:"Oryx",ubisoft_id:"2:18"},281:{side:"def",operator_name:"Melusi",ubisoft_id:"2:1A"},1046:{side:"def",operator_name:"Aruni",ubisoft_id:"5:17"}};t.rankOffset={0:0,1:2,2:3,3:4,4:5,5:7,6:8,7:9,8:10,9:12,10:13,11:14,12:15,13:50,14:16,15:17,16:18,17:19,18:20,19:21,20:22,21:22,22:22,23:22}},function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(s,n){function r(e){try{d(i.next(e))}catch(e){n(e)}}function a(e){try{d(i.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Controllers=void 0;t.Controllers=class{setShortcutText(e){overwolf.settings.hotkeys.get(t=>{t.success||console.error(t);const o=t.games[10826][0].binding;e.innerHTML="Unassigned"===o?"UNASSIGNED to show/hide the overlay":o+" to show/hide the overlay in game",console.log(`app hotkey "${o}"`)})}getOverwolfStatus(e){fetch("https://game-events-status.overwolf.com/10826_prod.json").then(e=>e.json()).then(t=>{const o=t.state;2===o?(e.style.display="block",e.innerHTML='<h4 class="announcement">Due to a recent game patch, some functions might not work - we’ll fix it shortly</h4>'):3===o?(e.style.display="block",e.innerHTML='<h4 class="announcement">Due to a recent game patch, Overwolf app API has stopped working - we’ll fix it shortly</h4>'):1===o&&(e.style.display="none",e.innerHTML=""),console.log(`overwolf status "${o}"`)})}getInternetStatus(e){const t=navigator.onLine;e.style.display=!1===t?"block":"none",console.log(`internet status "${t}"`)}setTableTab(e){for(let t=0;t<Object.keys(JSON.parse(localStorage.valuesTable)).length;t++)for(let o=0;o<document.getElementsByClassName("player-tr").length;o++){const i=document.getElementById("ranked"+t+o),s=document.getElementById("casual"+t+o),n=document.getElementById("seasonal"+t+o);i&&("ranked"===e?(i.classList.add("current"),s.classList.remove("current"),n.classList.remove("current")):"casual"===e?(i.classList.remove("current"),s.classList.add("current"),n.classList.remove("current")):"season"===e&&(i.classList.remove("current"),s.classList.remove("current"),n.classList.add("current")))}console.log(`current table tab "${e}"`)}showDetailedPlayer(e){return e?(document.getElementById("table-body").style.display="block",document.getElementById("detailed-body").style.display="none",e=!1):(document.getElementById("table-body").style.display="none",document.getElementById("detailed-body").style.display="block",e=!0),console.log(`detailed stats "${!e}"`),e}setTheme(){const e=JSON.parse(localStorage.getItem("settings")),t=document.documentElement.style;"0"===e.theme?(t.setProperty("--main-text-color","rgba(255, 255, 255, 0.87)"),t.setProperty("--sec-text-color","#F0F0F0"),t.setProperty("--sec-text-hover-color","#FFFFFF61"),t.setProperty("--main-bg-color","#121212"),t.setProperty("--sec-bg-color","#FFFFFF14"),t.setProperty("--overlay-color","#000"),t.setProperty("--dropdown","#FFFFFF"),t.setProperty("--darker-btn-color","#FFFFFF1E"),t.setProperty("--darker-button-hover-color","#FFFFFF33"),t.setProperty("--dropdown-btn-color","#FFFFFF"),t.setProperty("--backgroundUrl","url('/img/background.webp')"),t.setProperty("--r6DB-logo-large",'url("/img/statsdb-light-logo.svg")'),document.getElementById("r6db-logo-small")&&document.getElementById("r6db-logo-small").setAttribute("xlink:href","/img/socialmedia_icons.svg#r6db")):"1"===e.theme?(t.setProperty("--main-text-color","#000000"),t.setProperty("--sec-text-color","#000000"),t.setProperty("--sec-text-hover-color","#333333"),t.setProperty("--main-bg-color","#f3f3f3"),t.setProperty("--sec-bg-color","#eeeeee"),t.setProperty("--overlay-color","#f3f3f3"),t.setProperty("--backgroundUrl","none"),t.setProperty("--darker-btn-color","#999999"),t.setProperty("--darker-button-hover-color","#000000"),t.setProperty("--dropdown","#000000"),t.setProperty("--dropdown-btn-color","#000000"),t.setProperty("--r6DB-logo-large",'url("/img/statsdb-dark-logo.svg")'),document.getElementById("r6db-logo-small")&&document.getElementById("r6db-logo-small").setAttribute("xlink:href","/img/socialmedia_icons.svg#r6dbdark")):"2"==e.theme&&(t.setProperty("--main-text-color","#000000"),t.setProperty("--sec-text-color","#000000"),t.setProperty("--sec-text-hover-color","#333333"),t.setProperty("--main-bg-color","#b8b8b8"),t.setProperty("--sec-bg-color","#b0b0b0"),t.setProperty("--overlay-color","#b8b8b8"),t.setProperty("--backgroundUrl","none"),t.setProperty("--darker-btn-color","#999999"),t.setProperty("--darker-button-hover-color","#000000"),t.setProperty("--dropdown","#000000"),t.setProperty("--dropdown-btn-color","#000000"),t.setProperty("--r6DB-logo-large",'url("/img/statsdb-dark-logo.svg")'),document.getElementById("r6db-logo-small")&&document.getElementById("r6db-logo-small").setAttribute("xlink:href","/img/socialmedia_icons.svg#r6dbdark"))}fetchConfig(){return i(this,void 0,void 0,(function*(){fetch("https://staging-api.statsdb.net/r6/overlay/config").then(e=>e.json()).then(e=>{if(localStorage.config){if(localStorage.config){JSON.parse(localStorage.getItem("config")).version!=e.payload.rainbow.version&&localStorage.setItem("config",JSON.stringify(e.payload.rainbow))}}else localStorage.setItem("config",JSON.stringify(e.payload.rainbow))})}))}getConfig(){return i(this,void 0,void 0,(function*(){return JSON.parse(localStorage.getItem("config"))}))}}},function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(s,n){function r(e){try{d(i.next(e))}catch(e){n(e)}}function a(e){try{d(i.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const s=o(0);t.AppWindow=class{constructor(e,t){let o,i,n;this.maximized=!1,this.mainWindow=new s.OWWindow("background"),this.currWindow=new s.OWWindow(e),"desktop"===t?(o="settings_desktop",i="statistics_desktop",n="website_desktop"):(o="settings_in_game",i="statistics_in_game",n="website_in_game"),this.settingsWindow=new s.OWWindow(o),this.statisticsWindow=new s.OWWindow(i),this.websiteWindow=new s.OWWindow(n);const r=document.getElementById("closeButton"),a=document.getElementById("maximizeButton"),d=document.getElementById("minimizeButton"),l=document.getElementById("settingsButton"),c=document.getElementById("gameHistory"),u=document.getElementById("website"),m=document.getElementById("closeWindowButton"),g=document.getElementById("exitMinimizeModal"),f=document.getElementById("cancel"),h=document.getElementById("exit"),p=document.getElementById("minimize"),_=document.getElementById("header");"desktop"!==e&&"settings_desktop"!==e&&"statistics_desktop"!==e&&"website_desktop"!==e&&'"1"'!==localStorage.desktopOnly||this.setDrag(_),r&&r.addEventListener("click",()=>{g.style.display="block"}),m&&m.addEventListener("click",()=>{this.currWindow.close()}),d&&d.addEventListener("click",()=>{this.currWindow.minimize()}),a&&a.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),l&&l.addEventListener("click",()=>{this.settingsWindow.restore()}),c&&c.addEventListener("click",()=>{this.statisticsWindow.restore()}),u&&u.addEventListener("click",()=>{this.websiteWindow.restore()}),f&&f.addEventListener("click",()=>{g.style.display="none"}),h&&h.addEventListener("click",()=>{this.mainWindow.close()}),p&&p.addEventListener("click",()=>{this.currWindow.minimize(),g.style.display="none"})}getWindowState(){return i(this,void 0,void 0,(function*(){return yield this.currWindow.getWindowState()}))}setDrag(e){return i(this,void 0,void 0,(function*(){this.currWindow.dragMove(e)}))}}},function(e,t,o){"use strict";var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(s,n){function r(e){try{d(i.next(e))}catch(e){n(e)}}function a(e){try{d(i.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Localstorage=void 0;const s=o(2),n=o(0),r=new s.Controllers;new n.OWWindow;let a,d,l=localStorage.desktopOnly;t.Localstorage=class{constructor(){this.dtable=document.querySelectorAll("#setting-dtable .custom-option"),this.dtheme=document.querySelectorAll("#setting-dtheme .custom-option"),this.dmaximize=document.querySelectorAll("#setting-dmaximize .custom-option"),this.ddisplay=document.querySelectorAll("#setting-ddisplay .custom-option"),this.dmonitors=document.querySelectorAll("#setting-dmonitors .custom-option"),this.dcircle=document.querySelectorAll("#setting-dcircle .custom-option")}initiateLocalStorage(){return new Promise(e=>i(this,void 0,void 0,(function*(){(!localStorage.settings||Object.keys(JSON.parse(localStorage.settings)).length<5)&&localStorage.setItem("settings",JSON.stringify({table:"0",maximize:"0",theme:"0",circle:"general",monitorId:"0"})),localStorage.scaleSlider||localStorage.setItem("scaleSlider",'"1"'),(!localStorage.valuesTable||Object.keys(JSON.parse(localStorage.valuesTable)).length<9)&&localStorage.setItem("valuesTable",JSON.stringify({0:"Country",1:"LVL",2:"Kills",3:"Deaths",4:"K/D",5:"Wins",6:"Losses",7:"W/L",8:"Hacker %"})),localStorage.desktopOnly||localStorage.setItem("desktopOnly",'"0"'),d=JSON.parse(localStorage.settings),a=JSON.parse(localStorage.valuesTable),e()})))}changeSetting(e){const t=e.getAttribute("value"),o=e.getAttribute("settingid");if("setting-valueTable"===o){const o=e.getAttribute("index");a[o]=t,this.setStorage("valuesTable",a)}"setting-dtheme"===o&&(d.theme=t,this.setStorage("settings",d),r.setTheme()),"setting-dtable"===o&&(d.table=t,this.setStorage("settings",d)),"setting-ddisplay"===o&&this.setStorage("desktopOnly",t),"setting-dmaximize"===o&&(d.maximize=t,this.setStorage("settings",d)),"setting-dmonitors"===o&&(d.monitorId=t,this.setStorage("settings",d)),"setting-dcircle"===o&&(d.circle=t,this.setStorage("settings",d)),"setting-dslider"===o&&this.setStorage("scaleSlider",e.value)}setStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}setSettings(){var e,t;const o=[this.dtable[d.table],this.dtheme[d.theme],this.dmaximize[d.maximize],this.ddisplay[l.replace(/"/g,"")],this.dmonitors[d.monitorId],this.dcircle[{general:0,ranked:1,casual:2,unranked:3}[d.circle]]];for(let i=0;i<o.length;i++){let s=o[i];s!==this.dmonitors[d.monitorId]?(null===(e=s.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),s.classList.add("selected"),s.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=s.textContent):s===this.dmonitors[d.monitorId]&&(s=document.querySelectorAll("#setting-dmonitors .custom-option")[d.monitorId],null===(t=s.parentNode.querySelector(".custom-option.selected"))||void 0===t||t.classList.remove("selected"),s.classList.add("selected"),s.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=s.textContent)}document.getElementById("windowSize-slider").value=JSON.parse(localStorage.scaleSlider),document.getElementById("windowSize-slider-value").innerHTML=JSON.parse(localStorage.scaleSlider),this.setDefault()}setDefault(){var e;for(let t=0;t<9;t++){const o=a[t].replace(/[ /]/g,"-")+t,i=document.getElementById(o);null===(e=i.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),i.classList.add("selected"),i.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=i.textContent}}}},,,,,,,,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=o(3),s=o(0),n=o(2),r=o(4),a=o(1),d=document.getElementById("overwolf-status"),l=document.getElementById("internet-status"),c=new s.OWWindow(a.windowNames.desktop),u=new n.Controllers,m=new r.Localstorage;c.changeWindowLocation("center-center","desktop");m.initiateLocalStorage().then(()=>{u.setTheme(),c.scaleWindow("desktop",800,500,JSON.parse(localStorage.scaleSlider))});u.getOverwolfStatus(d),u.getInternetStatus(l),u.setShortcutText(document.getElementById("shortcut-text"));window.setInterval(()=>u.getOverwolfStatus(d),6e4),window.setInterval(()=>u.getInternetStatus(l),6e4);overwolf.settings.hotkeys.onChanged.addListener(()=>{u.setShortcutText(document.getElementById("shortcut-text"))}),addEventListener("storage",()=>{u.setTheme(),c.scaleWindow("desktop",800,500,JSON.parse(localStorage.scaleSlider))}),new i.AppWindow(a.windowNames.desktop,"desktop")}]);