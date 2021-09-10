!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}({0:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{d(o.next(e))}catch(e){s(e)}}function l(e){try{d(o.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}restore(){return o(this,void 0,void 0,(function*(){let e=this;return console.log("window: restored"),new Promise(t=>o(this,void 0,void 0,(function*(){yield e.assureObtained();let n=e._id;overwolf.windows.restore(n,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${n}, reason=${e.error}`),t()})})))}))}minimize(){return o(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>o(this,void 0,void 0,(function*(){yield e.assureObtained();let n=e._id;return overwolf.windows.minimize(n,()=>{}),t()})))}))}bringToFront(){return o(this,void 0,void 0,(function*(){let e=this;return console.log("window: minimized"),new Promise(t=>o(this,void 0,void 0,(function*(){yield e.assureObtained();let n=e._id;return overwolf.windows.bringToFront(n,!0,()=>{}),t()})))}))}maximize(){return o(this,void 0,void 0,(function*(){let e=this;return console.log("window: maximized"),new Promise(t=>o(this,void 0,void 0,(function*(){yield e.assureObtained();let n=e._id;return overwolf.windows.maximize(n,()=>{}),t()})))}))}hide(){return o(this,void 0,void 0,(function*(){let e=this;return console.log("window: hidden"),new Promise(t=>o(this,void 0,void 0,(function*(){yield e.assureObtained();let n=e._id;return overwolf.windows.hide(n,()=>{}),t()})))}))}close(){return o(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>o(this,void 0,void 0,(function*(){yield e.assureObtained();e._id;const n=yield this.getWindowState();return n.success||console.error(n),n.success&&"closed"!==n.window_state&&(yield this.internalClose()),t()})))}))}changeWindowSize(e,t,n){return o(this,void 0,void 0,(function*(){overwolf.windows.changeSize(e,t,n,e=>{e.success||console.error(e)})}))}changeWindowLocation(e,t){return o(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(n=>{n.success||console.error(n);let o=n.window.width,i=n.window.height;overwolf.utils.getMonitorsList(s=>{n.success||console.error(n);let r,l,d=s.displays[0].width,c=s.displays[0].height;"center-center"===e?(r=d/2-o/2,l=c/2-i/2):"center-right"===e?(r=d-o-20,l=c/2-i/2):"center-left"===e&&(r=20,l=c/2-i/2),overwolf.windows.changePosition(t,Math.round(r),Math.round(l),e=>{e.success||console.error(e)})})})}))}dragMove(e){e.onmousedown=e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)}}getWindowState(){return o(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>o(this,void 0,void 0,(function*(){yield e.assureObtained();let n=e._id;overwolf.windows.getWindowState(n,t)})))}))}static getCurrentInfo(){return o(this,void 0,void 0,(function*(){return new Promise(e=>o(this,void 0,void 0,(function*(){overwolf.windows.getCurrentWindow(t=>{e(t.window)})})))}))}obtain(){return new Promise((e,t)=>{const n=n=>{n&&"success"===n.status&&n.window&&n.window.id?(this._id=n.window.id,this._name||(this._name=n.window.name),e(n.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,n):overwolf.windows.getCurrentWindow(n)})}assureObtained(){return o(this,void 0,void 0,(function*(){let e=this;return new Promise(t=>o(this,void 0,void 0,(function*(){return yield e.obtain(),t()})))}))}internalClose(){return o(this,void 0,void 0,(function*(){let e=this;return new Promise((t,n)=>o(this,void 0,void 0,(function*(){yield e.assureObtained();let o=e._id;overwolf.windows.close(o,e=>{e&&e.success?t():n(e)})})))}))}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.databaseObject=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={desktop:"desktop",inLobby:"in_lobby",inGame:"in_game",inLobbyDesktopOnly:"in_lobby_desktop_only",inGameDesktopOnly:"in_game_desktop_only",settings:"settings_in_game",settingsDesktopOnly:"settings_desktop"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.databaseObject={MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),i=n(0),s=n(3),r=n(4),l=n(1),d=(document.getElementById("overwolf-status"),document.getElementById("internet-status"),document.querySelectorAll(".settingOptions"));let c,a,u,m,g;overwolf.windows.getCurrentWindow(e=>{m=e.window.name,c="settings_in_game"===m?new i.OWWindow(l.windowNames.settings):new i.OWWindow(l.windowNames.settingsDesktopOnly),a=new s.Controllers,u=new r.Localstorage;u.initiateLocalStorage().then(e=>u.setSettings());"settings_in_game"===m&&(g="center-center");c.changeWindowSize(m,900,600).then(e=>{"settings_in_game"===m&&c.changeWindowLocation(g,m)});"settings_in_game"===m?new o.AppWindow(l.windowNames.settings,"settings_in_game"):new o.AppWindow(l.windowNames.settingsDesktopOnly,"settings_desktop")});for(let e=0;e<d.length;e++){const t=d[e];t.addEventListener("click",(function(){if(t.querySelector(".custom-select"))for(let e=0;e<d.length;e++){const n=d[e];t!==n?n.querySelector(".custom-select")?n.querySelector(".custom-select").classList.remove("open"):n.classList.remove("open"):t.querySelector(".custom-select").classList.toggle("open")}else for(let e=0;e<d.length;e++){const n=d[e];t!==n?n.querySelector(".custom-select")?n.querySelector(".custom-select").classList.remove("open"):n.classList.remove("open"):t.classList.toggle("open")}}))}for(const e of document.querySelectorAll(".custom-option"))e.addEventListener("click",(function(){var t;e.classList.contains("selected")||(null===(t=e.parentNode.querySelector(".custom-option.selected"))||void 0===t||t.classList.remove("selected"),e.classList.add("selected"),e.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=e.textContent),u.changeSetting(e)}))},2:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{d(o.next(e))}catch(e){s(e)}}function l(e){try{d(o.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const i=n(0);t.AppWindow=class{constructor(e,t){this.maximized=!1,this.mainWindow=new i.OWWindow("background"),this.currWindow=new i.OWWindow(e),this.settingsWindow=new i.OWWindow(t);const n=document.getElementById("closeButton"),o=document.getElementById("maximizeButton"),s=document.getElementById("minimizeButton"),r=document.getElementById("settingsButton"),l=document.getElementById("closeWindowButton"),d=document.getElementById("exitMinimizeModal"),c=document.getElementById("cancel"),a=document.getElementById("exit"),u=document.getElementById("minimize"),m=document.getElementById("header");"desktop"!==e&&"settings_desktop"!==e&&'"1"'!==localStorage.desktopOnly||this.setDrag(m),n&&n.addEventListener("click",()=>{d.style.display="block"}),l&&l.addEventListener("click",()=>{this.currWindow.close()}),s&&s.addEventListener("click",()=>{this.currWindow.minimize()}),o&&o.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),r&&r.addEventListener("click",()=>{this.settingsWindow.restore()}),c&&c.addEventListener("click",()=>{d.style.display="none"}),a&&a.addEventListener("click",()=>{this.mainWindow.close()}),u&&u.addEventListener("click",()=>{this.currWindow.minimize(),d.style.display="none"})}getWindowState(){return o(this,void 0,void 0,(function*(){return yield this.currWindow.getWindowState()}))}setDrag(e){return o(this,void 0,void 0,(function*(){this.currWindow.dragMove(e)}))}}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controllers=void 0;t.Controllers=class{setShortcutText(e){overwolf.settings.hotkeys.get(t=>{t.success||console.error(t);const n=t.games[10826][0].binding;e.innerHTML="Unassigned"===n?"UNASSIGNED to show/hide the overlay":n+" to show/hide the overlay in game",console.log(`app hotkey "${n}"`)})}getOverwolfStatus(e){fetch("https://game-events-status.overwolf.com/10826_prod.json").then(e=>e.json()).then(t=>{const n=t.state;2===n?(e.style.display="block",e.innerHTML='<h4 class="announcement">Due to a recent game patch, some functions might not work - we’ll fix it shortly</h4>'):3===n?(e.style.display="block",e.innerHTML='<h4 class="announcement">Due to a recent game patch, Overwolf app API has stopped working - we’ll fix it shortly</h4>'):1===n&&(e.style.display="none",e.innerHTML=""),console.log(`overwolf status "${n}"`)})}getInternetStatus(e){const t=navigator.onLine;e.style.display=!1===t?"block":"none",console.log(`internet status "${t}"`)}setTableTab(e){for(let t=0;t<8;t++)for(let n=0;n<document.getElementsByClassName("player-tr").length;n++){const o=document.getElementById("ranked"+t+n),i=document.getElementById("casual"+t+n),s=document.getElementById("seasonal"+t+n);o&&("ranked"===e?(o.classList.add("current"),i.classList.remove("current"),s.classList.remove("current")):"casual"===e?(o.classList.remove("current"),i.classList.add("current"),s.classList.remove("current")):"season"===e&&(o.classList.remove("current"),i.classList.remove("current"),s.classList.add("current")))}console.log(`current table tab "${e}"`)}showDetailedPlayer(e){return e?(document.getElementById("table-body").style.display="block",document.getElementById("detailed-body").style.display="none",e=!1):(document.getElementById("table-body").style.display="none",document.getElementById("detailed-body").style.display="block",e=!0),console.log(`detailed stats "${!e}"`),e}}},4:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{d(o.next(e))}catch(e){s(e)}}function l(e){try{d(o.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Localstorage=void 0;let i,s,r=localStorage.desktopOnly;t.Localstorage=class{constructor(){this.dtable=document.querySelectorAll("#setting-dtable .custom-option"),this.dmaximize=document.querySelectorAll("#setting-dmaximize .custom-option"),this.ddisplay=document.querySelectorAll("#setting-ddisplay .custom-option")}initiateLocalStorage(){return new Promise(e=>o(this,void 0,void 0,(function*(){localStorage.settings||localStorage.setItem("settings",JSON.stringify({table:"0",maximize:"0"})),(!localStorage.valuesTable||Object.keys(JSON.parse(localStorage.valuesTable)).length<8)&&localStorage.setItem("valuesTable",JSON.stringify({0:"LVL",1:"Kills",2:"Deaths",3:"K/D",4:"Wins",5:"Losses",6:"W/L",7:"Hacker %"})),localStorage.desktopOnly||localStorage.setItem("desktopOnly",'"0"'),s=JSON.parse(localStorage.settings),i=JSON.parse(localStorage.valuesTable),e()})))}changeSetting(e){const t=e.getAttribute("value"),n=e.getAttribute("settingid");if("setting-valueTable"===n){const n=e.getAttribute("index");i[n]=t,this.setStorage("valuesTable",i)}"setting-dtable"===n&&(s.table=t,this.setStorage("settings",s)),"setting-ddisplay"===n&&this.setStorage("desktopOnly",t),"setting-dmaximize"===n&&(s.maximize=t,this.setStorage("settings",s))}setStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}setSettings(){var e;const t=[this.dtable[s.table],this.dmaximize[s.maximize],this.ddisplay[r.replace(/"/g,"")]];for(let n=0;n<t.length;n++){const o=t[n];null===(e=o.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),o.classList.add("selected"),o.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=o.textContent}this.setDefault()}setDefault(){var e;for(let t=0;t<8;t++){const n=i[t].replace(/[ /]/g,"-")+t,o=document.getElementById(n);null===(e=o.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),o.classList.add("selected"),o.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=o.textContent}}}}});