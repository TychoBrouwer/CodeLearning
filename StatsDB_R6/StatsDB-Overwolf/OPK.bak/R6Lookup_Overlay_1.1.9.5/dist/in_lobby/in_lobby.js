!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=17)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}async restore(){let e=this;return console.log("window: restored"),new Promise(async t=>{await e.assureObtained();let s=e._id;overwolf.windows.restore(s,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${s}, reason=${e.error}`),t()})})}async minimize(){let e=this;return console.log("window: minimized"),new Promise(async t=>{await e.assureObtained();let s=e._id;return overwolf.windows.minimize(s,()=>{}),t()})}async bringToFront(){let e=this;return console.log("window: minimized"),new Promise(async t=>{await e.assureObtained();let s=e._id;return overwolf.windows.bringToFront(s,!0,()=>{}),t()})}async maximize(){let e=this;return console.log("window: maximized"),new Promise(async t=>{await e.assureObtained();let s=e._id;return overwolf.windows.maximize(s,()=>{}),t()})}async hide(){let e=this;return console.log("window: hidden"),new Promise(async t=>{await e.assureObtained();let s=e._id;return overwolf.windows.hide(s,()=>{}),t()})}async close(){let e=this;return new Promise(async t=>{await e.assureObtained();e._id;const s=await this.getWindowState();return s.success||console.error(s),s.success&&"closed"!==s.window_state&&await this.internalClose(),t()})}async changeWindowSize(e,t,s){overwolf.windows.changeSize(e,t,s,e=>{e.success||console.error(e)})}async changeWindowLocation(e,t){overwolf.windows.getCurrentWindow(s=>{s.success||console.error(s);let n=s.window.width,o=s.window.height;overwolf.utils.getMonitorsList(i=>{s.success||console.error(s);let r,a,l=i.displays[0].width,d=i.displays[0].height;"center-center"===e?(r=l/2-n/2,a=d/2-o/2):"center-right"===e?(r=l-n-20,a=d/2-o/2):"center-left"===e&&(r=20,a=d/2-o/2),overwolf.windows.changePosition(t,Math.round(r),Math.round(a),e=>{e.success||console.error(e)})})})}dragMove(e){e.onmousedown=e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)}}async getWindowState(){let e=this;return new Promise(async t=>{await e.assureObtained();let s=e._id;overwolf.windows.getWindowState(s,t)})}static async getCurrentInfo(){return new Promise(async e=>{overwolf.windows.getCurrentWindow(t=>{e(t.window)})})}obtain(){return new Promise((e,t)=>{const s=s=>{s&&"success"===s.status&&s.window&&s.window.id?(this._id=s.window.id,this._name||(this._name=s.window.name),e(s.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,s):overwolf.windows.getCurrentWindow(s)})}async assureObtained(){let e=this;return new Promise(async t=>(await e.obtain(),t()))}async internalClose(){let e=this;return new Promise(async(t,s)=>{await e.assureObtained();let n=e._id;overwolf.windows.close(n,e=>{e&&e.success?t():s(e)})})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tableStats=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={desktop:"desktop",inLobby:"in_lobby",inGame:"in_game",inLobbyDesktopOnly:"in_lobby_desktop_only",inGameDesktopOnly:"in_game_desktop_only",settings:"settings_in_game",settingsDesktopOnly:"settings_desktop"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.tableStats=["rankedpvp_kills","rankedpvp_death","rankedpvp_matchwon","rankedpvp_matchlost","casualpvp_kills","casualpvp_death","casualpvp_matchwon","casualpvp_matchlost","kills","deaths","wins","losses"]},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const n=s(0);t.AppWindow=class{constructor(e,t){this.maximized=!1,this.mainWindow=new n.OWWindow("background"),this.currWindow=new n.OWWindow(e),this.settingsWindow=new n.OWWindow(t);const s=document.getElementById("closeButton"),o=document.getElementById("maximizeButton"),i=document.getElementById("minimizeButton"),r=document.getElementById("settingsButton"),a=document.getElementById("closeWindowButton"),l=document.getElementById("exitMinimizeModal"),d=document.getElementById("cancel"),c=document.getElementById("exit"),u=document.getElementById("minimize"),w=document.getElementById("header");"desktop"!==e&&"settings_desktop"!==e&&'"1"'!==localStorage.desktopOnly||this.setDrag(w),s&&s.addEventListener("click",()=>{l.style.display="block"}),a&&a.addEventListener("click",()=>{this.currWindow.close()}),i&&i.addEventListener("click",()=>{this.currWindow.minimize()}),o&&o.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),r&&r.addEventListener("click",()=>{this.settingsWindow.restore()}),d&&d.addEventListener("click",()=>{l.style.display="none"}),c&&c.addEventListener("click",()=>{this.mainWindow.close()}),u&&u.addEventListener("click",()=>{this.currWindow.minimize(),l.style.display="none"})}async getWindowState(){return await this.currWindow.getWindowState()}async setDrag(e){this.currWindow.dragMove(e)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controllers=void 0;t.Controllers=class{setShortcutText(e){overwolf.settings.hotkeys.get(t=>{t.success||console.error(t);const s=t.games[10826][0].binding;e.innerHTML="Unassigned"===s?"UNASSIGNED to show/hide the overlay":s+" to show/hide the overlay in game",this.logLine("log","shortcut",s)})}getOverwolfStatus(e){fetch("https://game-events-status.overwolf.com/10826_prod.json").then(e=>e.json()).then(t=>{const s=t.state;2===s?(e.style.display="block",e.innerHTML="<h4>Due to a recent game patch, some functions might not work - we’ll fix it shortly</h4>"):3===s?(e.style.display="block",e.innerHTML="<h4>Due to a recent game patch, Overwolf app API has stopped working - we’ll fix it shortly</h4>"):1===s&&(e.style.display="none",e.innerHTML=""),this.logLine("log","overwolfStatus",s)})}getInternetStatus(e){const t=navigator.onLine;e.style.display=!1===t?"block":"none",this.logLine("log","internetStatus",t)}logLine(e,t,s){const n='"'+t+'": '+JSON.stringify(s,void 0,2);"log"===e?console.log(n):"error"===e?console.error(n):"warn"===e&&console.warn(n)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Localstorage=void 0;const n=document.querySelectorAll("#setting-dtable .custom-option"),o=document.querySelectorAll("#setting-dmaximize .custom-option"),i=document.querySelectorAll("#setting-ddisplay .custom-option");let r,a,l=localStorage.desktopOnly;t.Localstorage=class{initiateLocalStorage(){return new Promise(async e=>{localStorage.settings||localStorage.setItem("settings",JSON.stringify({table:"0",maximize:"0"})),(!localStorage.valuesTable||Object.keys(JSON.parse(localStorage.valuesTable)).length<8)&&localStorage.setItem("valuesTable",JSON.stringify({0:"LVL",1:"Kills",2:"Deaths",3:"K/D",4:"Wins",5:"Losses",6:"W/L",7:"Hacker %"})),localStorage.desktopOnly||localStorage.setItem("desktopOnly",'"0"'),a=JSON.parse(localStorage.settings),r=JSON.parse(localStorage.valuesTable),e()})}changeSetting(e){const t=e.getAttribute("value"),s=e.getAttribute("settingid");if("setting-valueTable"===s){const s=e.getAttribute("index");r[s]=t,this.setStorage("valuesTable",r)}"setting-dtable"===s&&(a.table=t,this.setStorage("settings",a)),"setting-ddisplay"===s&&this.setStorage("desktopOnly",t),"setting-dmaximize"===s&&(a.maximize=t,this.setStorage("settings",a))}setStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}setSettings(){var e;const t=[n[a.table],o[a.maximize],i[l.replace(/"/g,"")]];for(let s=0;s<t.length;s++){const n=t[s];null===(e=n.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),n.classList.add("selected"),n.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=n.textContent}this.setDefault()}setDefault(){var e;for(let t=0;t<8;t++){const s=r[t].replace(/[ /]/g,"-")+t,n=document.getElementById(s);null===(e=n.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),n.classList.add("selected"),n.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=n.textContent}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWGamesEvents=void 0;const n=s(6);t.OWGamesEvents=class{constructor(e,t){this.onInfoUpdates=e=>{this._delegate.onInfoUpdates(e.info)},this.onNewEvents=e=>{this._delegate.onNewEvents(e)},this._delegate=e,this._requiredFeatures=t}async getInfo(){return new Promise(e=>{overwolf.games.events.getInfo(e)})}async setRequiredFeatures(){let e,t=1;for(;t>0;){if(e=await new Promise(e=>{overwolf.games.events.setRequiredFeatures(this._requiredFeatures,e)}),"success"===e.status)return console.log("setRequiredFeatures(): success: "+JSON.stringify(e,null,2)),e.supportedFeatures.length>0;await n.Timer.wait(3e3),t++}return console.warn("setRequiredFeatures(): failure after "+t+" tries"+JSON.stringify(e,null,2)),!1}registerEvents(){this.unRegisterEvents(),overwolf.games.events.onInfoUpdates2.addListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.addListener(this.onNewEvents)}unRegisterEvents(){overwolf.games.events.onInfoUpdates2.removeListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.removeListener(this.onNewEvents)}async start(){console.log("[ow-game-events] START"),this.registerEvents(),await this.setRequiredFeatures();const{res:e,status:t}=await this.getInfo();e&&"success"===t&&this.onInfoUpdates({info:e})}stop(){console.log("[ow-game-events] STOP"),this.unRegisterEvents()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;t.Timer=class{constructor(e,t){this._timerId=null,this.handleTimerEvent=()=>{this._timerId=null,this._delegate.onTimer(this._id)},this._delegate=e,this._id=t}static async wait(e){return new Promise(t=>{setTimeout(t,e)})}start(e){this.stop(),this._timerId=setTimeout(this.handleTimerEvent,e)}stop(){null!=this._timerId&&(clearTimeout(this._timerId),this._timerId=null)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWHotkeys=void 0;t.OWHotkeys=class{constructor(){}static getHotkeyText(e){return new Promise((t,s)=>{overwolf.settings.getHotKey(e,e=>{e&&e.success&&e.hotkey||t("UNASSIGNED"),t(e.hotkey)})})}static onHotkeyDown(e,t){overwolf.settings.registerHotKey(e,t)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;const n=document.getElementById("kd-circle-daily"),o=document.getElementById("wl-circle-daily"),i=document.getElementById("kd-circle-daily-text"),r=document.getElementById("wl-circle-daily-text"),a=document.getElementById("kd-circle-weekly"),l=document.getElementById("wl-circle-weekly"),d=document.getElementById("kd-circle-weekly-text"),c=document.getElementById("wl-circle-weekly-text");t.Database=class{createDatabase(){const e=this;return new Promise(async t=>{const s=indexedDB.open("days");let n;s.onerror=function(t){e.logLine("error","database",s.error),n=s.error},s.onupgradeneeded=function(e){s.result.createObjectStore("days",{keyPath:"date"})};const o=indexedDB.open("week");o.onerror=function(t){e.logLine("error","database",o.error),n=o.error},o.onupgradeneeded=function(e){o.result.createObjectStore("week",{keyPath:"week"})},t()})}initiateIDB(){const e=new Date,t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),s=this,n=indexedDB.open("days");n.onerror=function(e){s.logLine("error","database",n.error)},n.onsuccess=function(e){const o=n.result,i=o.transaction("days","readwrite").objectStore("days").get(t);i.onerror=function(e){s.logLine("error","database",i.error)},i.onsuccess=function(e){if(!i.result){o.transaction("days","readwrite").objectStore("days").add({date:t,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}})}}};const o=indexedDB.open("week");o.onerror=function(e){s.logLine("error","database",o.error)},o.onsuccess=function(e){const t=o.result,n=t.transaction("week","readwrite").objectStore("week").get("week");n.onerror=function(e){s.logLine("error","database",n.error)},n.onsuccess=function(e){if(!n.result){let e={};const s=new Date,n=s.getDate()+","+(s.getMonth()+1)+","+s.getFullYear();e[0]={date:n,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}};for(let t=1;t<7;t++){s.setDate(s.getDate()-1);const n=s.getDate()+","+(s.getMonth()+1)+","+s.getFullYear();e[t]={date:n,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}}}e.week="week";t.transaction("week","readwrite").objectStore("week").add({week:"week",value:e})}}}}localStoreMatch(e,t,s){let n=new Date;const o=n.getDate()+","+(n.getMonth()+1)+","+n.getFullYear(),i=this,r=indexedDB.open("days");r.onerror=function(e){i.logLine("error","database",r.error)},r.onsuccess=function(n){const a=r.result,l=a.transaction("days","readwrite").objectStore("days").get(o);l.onerror=function(e){i.logLine("error","database",l.error)},l.onsuccess=function(n){const o=l.result;0!==s.kills&&(o[e].kills+=s.kills),0!==s.deaths&&(o[e].deaths+=s.deaths),"victory"===t?o[e].wins++:"defeat"===t&&o[e].losses++;a.transaction("days","readwrite").objectStore("days").put(o)}};const a=indexedDB.open("week");a.onerror=function(e){i.logLine("error","database",a.error)},a.onsuccess=function(n){const r=a.result,l=r.transaction("week","readwrite").objectStore("week").get("week");l.onerror=function(e){i.logLine("error","database",l.error)},l.onsuccess=function(n){const a=l.result.value,d=Object.values(a);let c,u=null;for(let e=0;e<7;e++)if(d[e].date===o){u=e;break}c=null!==u?d[u]:{date:o,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}},0!==s.kills&&(c[e].kills+=s.kills),0!==s.deaths&&(c[e].deaths+=s.deaths),"victory"===t?c[e].wins++:"defeat"===t&&c[e].losses++,null!==u?d[u]=c:(d.unshift(c),d.pop());const w=Object.assign({},d);i.logLine("log","weekResult",w);r.transaction("week","readwrite").objectStore("week").put({week:"week",value:w})}}}printDailyWeekly(){let e=new Date;const t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),s=this,u=indexedDB.open("days");u.onerror=function(e){s.logLine("error","database",u.error)},u.onsuccess=function(e){const a=u.result.transaction("days","readwrite").objectStore("days").get(t);a.onerror=function(e){s.logLine("error","database",a.error)},a.onsuccess=function(e){const t=a.result,l=t.MATCHMAKING_PVP.kills+t.MATCHMAKING_PVP_RANKED.kills+t.MATCHMAKING_PVP_UNRANKED.kills,d=t.MATCHMAKING_PVP.deaths+t.MATCHMAKING_PVP_RANKED.deaths+t.MATCHMAKING_PVP_UNRANKED.deaths,c=t.MATCHMAKING_PVP.losses+t.MATCHMAKING_PVP_RANKED.losses+t.MATCHMAKING_PVP_UNRANKED.losses,u=t.MATCHMAKING_PVP.wins+t.MATCHMAKING_PVP_RANKED.wins+t.MATCHMAKING_PVP_UNRANKED.wins;let w,g,m,h;0!==d?(m=Math.round(100*(l/d+Number.EPSILON))/100,w=Math.round(l/d*33)+", 100"):0!==d&&0!==l?(m="INF",w="100, 100"):(m="0.00",w="0, 100"),u+c!==0?(h=Math.round(u/(u+c)*100),g=h+", 100"):(h="0",g="0, 100"),n.setAttribute("stroke-dasharray",w),o.setAttribute("stroke-dasharray",g),i.innerHTML=parseFloat(m).toFixed(2),r.innerHTML=h+"%",s.logLine("log","dailyKD",m),s.logLine("log","dailyWL",h)}};const w=indexedDB.open("week");w.onerror=function(e){s.logLine("error","database",w.error)},w.onsuccess=function(e){const t=w.result.transaction("week","readwrite").objectStore("week").get("week");t.onerror=function(e){s.logLine("error","database",t.error)},t.onsuccess=function(e){const n=t.result.value;let o,i,r,u,w=0,g=0,m=0,h=0;for(let e=0;e<7;e++)w+=n[e].MATCHMAKING_PVP.kills,g+=n[e].MATCHMAKING_PVP.deaths,h+=n[e].MATCHMAKING_PVP.wins,m+=n[e].MATCHMAKING_PVP.losses,w+=n[e].MATCHMAKING_PVP_RANKED.kills,g+=n[e].MATCHMAKING_PVP_RANKED.deaths,h+=n[e].MATCHMAKING_PVP_RANKED.wins,m+=n[e].MATCHMAKING_PVP_RANKED.losses,w+=n[e].MATCHMAKING_PVP_UNRANKED.kills,g+=n[e].MATCHMAKING_PVP_UNRANKED.deaths,h+=n[e].MATCHMAKING_PVP_UNRANKED.wins,m+=n[e].MATCHMAKING_PVP_UNRANKED.losses;0!==g?(r=Math.round(100*(w/g+Number.EPSILON))/100,o=Math.round(w/g*33)+", 100"):0===g&&0!==w?(r="INF",o="100, 100"):(r="0.00",o="0, 100"),h+m!==0?(u=Math.round(h/(h+m)*100),i=u+", 100"):(u="0",i="0, 100"),a.setAttribute("stroke-dasharray",o),l.setAttribute("stroke-dasharray",i),d.innerHTML=parseFloat(r).toFixed(2),c.innerHTML=u+"%",s.logLine("log","weeklyKD",r),s.logLine("log","weeklyWL",u)}}}logLine(e,t,s){const n='"'+t+'": '+JSON.stringify(s,void 0,2);"log"===e?console.log(n):"error"===e?console.error(n):"warn"===e&&console.warn(n)}}},,,,,,,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(2),o=s(5),i=s(7),r=s(0),a=s(8),l=s(3),d=s(4),c=s(1),u=document.getElementById("searching"),w=document.getElementById("overwolf-status"),g=document.getElementById("internet-status"),m=document.getElementsByClassName("nav-btn"),h=["overview","daily-weekly","settings"];let y,_,f,p,v,k;'"0"'===localStorage.desktopOnly?(k=new r.OWWindow(c.windowNames.inLobby),f="settings_in_game"):(k=new r.OWWindow(c.windowNames.inLobbyDesktopOnly),f="settings_desktop");const M=new a.Database,b=new l.Controllers;(new d.Localstorage).initiateLocalStorage(),'"0"'===localStorage.desktopOnly?(p="in_lobby",v="center-right"):p="in_lobby_desktop_only";k.changeWindowSize(p,420,700).then(e=>{'"0"'===localStorage.desktopOnly&&k.changeWindowLocation(v,p)}).then(e=>k.restore(p));b.getOverwolfStatus(w),b.getInternetStatus(g),b.setShortcutText(document.getElementById("shortcut-text"));window.setInterval(()=>b.getOverwolfStatus(w),6e4),window.setInterval(()=>b.getInternetStatus(g),6e4);overwolf.settings.hotkeys.onChanged.addListener(e=>{b.setShortcutText(document.getElementById("shortcut-text"))});M.createDatabase().then(e=>M.initiateIDB()).then(e=>M.printDailyWeekly());for(let e=0;e<m.length;e++)m[e].addEventListener("click",(function(){for(let e=0;e<m.length;e++)m[e].classList.remove("active"),document.getElementById(h[e]).style.display="none";this.classList.add("active"),document.getElementById(h[e]).style.display="block"}));function A(e,t,s){const n='"'+t+'": '+JSON.stringify(s,void 0,2);"log"===e?console.log(n):"error"===e?console.error(n):"warn"===e&&console.warn(n)}class P extends n.AppWindow{constructor(){'"0"'===localStorage.desktopOnly?super(c.windowNames.inLobby,f):super(c.windowNames.inLobbyDesktopOnly,f),'"1"'===localStorage.desktopOnly&&k.changeWindowSize("in_lobby_desktop_only",420,700),this.setToggleHotkeyBehavior(),this._rainbowGameEventsListener=new o.OWGamesEvents({onInfoUpdates:this.onInfoUpdates.bind(this),onNewEvents:this.onNewEvents.bind(this)},c.interestingFeatures1)}static instance(){return this._instance||(this._instance=new P),this._instance}run(){this._rainbowGameEventsListener.start()}onInfoUpdates(e){if(A("log","infoUpdate",e),"match_info"in e&&"game_mode"in e.match_info||"game_info"in e&&"phase"in e.game_info&&"lobby"===e.game_info.phase)if(e.match_info&&(y=e.match_info.game_mode),"NONE"!==y){let e;_="searching",A("log","gameStatus",_),e=y.split("_")[2]?y.split("_")[1]+" "+y.split("_")[2]:y.split("_")[1],document.getElementById("match-making-text").innerHTML="matchmaking "+e,u.style.display="block"}else _="lobby",A("log","gameStatus",_),u.style.display="none"}onNewEvents(e){A("log","infoEvent",e)}async setToggleHotkeyBehavior(){i.OWHotkeys.onHotkeyDown(c.hotkeys.toggle,async e=>{if(console.log(`'info': { pressed hotkey for ${e.featureId} }`),'"0"'===localStorage.desktopOnly){const e=await this.getWindowState();"normal"===e.window_state||"maximized"===e.window_state?this.currWindow.minimize():"minimized"!==e.window_state&&"closed"!==e.window_state||this.currWindow.restore(),k.changeWindowLocation(v,p)}else k.changeWindowSize("in_lobby_desktop_only",420,700);overwolf.windows.close("settings_in_game",e=>{A("log","close window","settings_in_game")}),overwolf.windows.close("settings_desktop",e=>{A("log","close window","settings_desktop")})})}}P.instance().run()}]);