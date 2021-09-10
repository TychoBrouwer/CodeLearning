!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./windows/in_lobby/in_lobby.ts")}({"./consts.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tableStats=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={inGame:"in_game",desktop:"desktop",inLobby:"in_lobby"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.tableStats=["rankedpvp_kills","rankedpvp_death","rankedpvp_matchwon","rankedpvp_matchlost","casualpvp_kills","casualpvp_death","casualpvp_matchwon","casualpvp_matchlost","kills","deaths","wins","losses"]},"./odk-ts/database-functions.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DatabaseFunctions=void 0;const s=document.getElementById("kd-circle-daily"),o=document.getElementById("wl-circle-daily"),i=document.getElementById("kd-circle-daily-text"),r=document.getElementById("wl-circle-daily-text"),a=document.getElementById("kd-circle-weekly"),l=document.getElementById("wl-circle-weekly"),d=document.getElementById("kd-circle-weekly-text"),c=document.getElementById("wl-circle-weekly-text");t.DatabaseFunctions=class{createDatabase(){const e=this,t=indexedDB.open("days");t.onerror=function(n){e.logLine("error","database",t.error)},t.onupgradeneeded=function(e){t.result.createObjectStore("days",{keyPath:"date"})};const n=indexedDB.open("week");n.onerror=function(t){e.logLine("error","database",n.error)},n.onupgradeneeded=function(e){n.result.createObjectStore("week",{keyPath:"week"})}}initiateIDB(){const e=new Date,t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),n=this,s=indexedDB.open("days");s.onerror=function(e){n.logLine("error","database",s.error)},s.onsuccess=function(e){const o=s.result,i=o.transaction("days","readwrite").objectStore("days").get(t);i.onerror=function(e){n.logLine("error","database",i.error)},i.onsuccess=function(e){i.result||o.transaction("days","readwrite").objectStore("days").add({date:t,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}})}};const o=indexedDB.open("week");o.onerror=function(e){n.logLine("error","database",o.error)},o.onsuccess=function(e){const t=o.result,s=t.transaction("week","readwrite").objectStore("week").get("week");s.onerror=function(e){n.logLine("error","database",s.error)},s.onsuccess=function(e){if(!s.result){let e={};const n=new Date,s=n.getDate()+","+(n.getMonth()+1)+","+n.getFullYear();e[0]={date:s,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}};for(let t=1;t<7;t++){n.setDate(n.getDate()-1);const s=n.getDate()+","+(n.getMonth()+1)+","+n.getFullYear();e[t]={date:s,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}}}e.week="week",t.transaction("week","readwrite").objectStore("week").add({week:"week",value:e})}}}}localStoreMatch(e,t,n){let s=new Date;const o=s.getDate()+","+(s.getMonth()+1)+","+s.getFullYear(),i=this,r=indexedDB.open("days");r.onerror=function(e){i.logLine("error","database",r.error)},r.onsuccess=function(s){const a=r.result,l=a.transaction("days","readwrite").objectStore("days").get(o);l.onerror=function(e){i.logLine("error","database",l.error)},l.onsuccess=function(s){const o=l.result;0!==n.kills&&(o[e].kills+=n.kills),0!==n.deaths&&(o[e].deaths+=n.deaths),"victory"===t?o[e].wins++:"defeat"===t&&o[e].losses++,a.transaction("days","readwrite").objectStore("days").put(o)}};const a=indexedDB.open("week");a.onerror=function(e){i.logLine("error","database",a.error)},a.onsuccess=function(s){const r=a.result,l=r.transaction("week","readwrite").objectStore("week").get("week");l.onerror=function(e){i.logLine("error","database",l.error)},l.onsuccess=function(s){const a=l.result.value,d=Object.values(a);let c,u=null;for(let e=0;e<7;e++)if(d[e].date===o){u=e;break}c=null!==u?d[u]:{date:o,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}},0!==n.kills&&(c[e].kills+=n.kills),0!==n.deaths&&(c[e].deaths+=n.deaths),"victory"===t?c[e].wins++:"defeat"===t&&c[e].losses++,null!==u?d[u]=c:(d.unshift(c),d.pop());const w=Object.assign({},d);i.logLine("log","weekResult",w),r.transaction("week","readwrite").objectStore("week").put({week:"week",value:w})}}}printDailyWeekly(){let e=new Date;const t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),n=this,u=indexedDB.open("days");u.onerror=function(e){n.logLine("error","database",u.error)},u.onsuccess=function(e){const a=u.result.transaction("days","readwrite").objectStore("days").get(t);a.onerror=function(e){n.logLine("error","database",a.error)},a.onsuccess=function(e){const t=a.result,l=t.MATCHMAKING_PVP.kills+t.MATCHMAKING_PVP_RANKED.kills+t.MATCHMAKING_PVP_UNRANKED.kills,d=t.MATCHMAKING_PVP.deaths+t.MATCHMAKING_PVP_RANKED.deaths+t.MATCHMAKING_PVP_UNRANKED.deaths,c=t.MATCHMAKING_PVP.losses+t.MATCHMAKING_PVP_RANKED.losses+t.MATCHMAKING_PVP_UNRANKED.losses,u=t.MATCHMAKING_PVP.wins+t.MATCHMAKING_PVP_RANKED.wins+t.MATCHMAKING_PVP_UNRANKED.wins;let w,g,m,h;0!==d?(m=Math.round(100*(l/d+Number.EPSILON))/100,w=Math.round(l/d*33)+", 100"):0!==d&&0!==l?(m="INF",w="100, 100"):(m="0.00",w="0, 100"),u+c!==0?g=(h=Math.round(u/(u+c)*100))+", 100":(h="0",g="0, 100"),s.setAttribute("stroke-dasharray",w),o.setAttribute("stroke-dasharray",g),i.innerHTML=parseFloat(m).toFixed(2),r.innerHTML=h+"%",n.logLine("log","dailyKD",m),n.logLine("log","dailyWL",h)}};const w=indexedDB.open("week");w.onerror=function(e){n.logLine("error","database",w.error)},w.onsuccess=function(e){const t=w.result.transaction("week","readwrite").objectStore("week").get("week");t.onerror=function(e){n.logLine("error","database",t.error)},t.onsuccess=function(e){const s=t.result.value;let o,i,r,u,w=0,g=0,m=0,h=0;for(let e=0;e<7;e++)w+=s[e].MATCHMAKING_PVP.kills,g+=s[e].MATCHMAKING_PVP.deaths,h+=s[e].MATCHMAKING_PVP.wins,m+=s[e].MATCHMAKING_PVP.losses,w+=s[e].MATCHMAKING_PVP_RANKED.kills,g+=s[e].MATCHMAKING_PVP_RANKED.deaths,h+=s[e].MATCHMAKING_PVP_RANKED.wins,m+=s[e].MATCHMAKING_PVP_RANKED.losses,w+=s[e].MATCHMAKING_PVP_UNRANKED.kills,g+=s[e].MATCHMAKING_PVP_UNRANKED.deaths,h+=s[e].MATCHMAKING_PVP_UNRANKED.wins,m+=s[e].MATCHMAKING_PVP_UNRANKED.losses;0!==g?(r=Math.round(100*(w/g+Number.EPSILON))/100,o=Math.round(w/g*33)+", 100"):0===g&&0!==w?(r="INF",o="100, 100"):(r="0.00",o="0, 100"),h+m!==0?i=(u=Math.round(h/(h+m)*100))+", 100":(u="0",i="0, 100"),a.setAttribute("stroke-dasharray",o),l.setAttribute("stroke-dasharray",i),d.innerHTML=parseFloat(r).toFixed(2),c.innerHTML=u+"%",n.logLine("log","weeklyKD",r),n.logLine("log","weeklyWL",u)}}}logLine(e,t,n){const s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}}},"./odk-ts/ow-games-events.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWGamesEvents=void 0;const s=n("./odk-ts/timer.ts");t.OWGamesEvents=class{constructor(e,t){this.onInfoUpdates=(e=>{this._delegate.onInfoUpdates(e.info)}),this.onNewEvents=(e=>{this._delegate.onNewEvents(e)}),this._delegate=e,this._requiredFeatures=t}async getInfo(){return new Promise(e=>{overwolf.games.events.getInfo(e)})}async setRequiredFeatures(){let e,t=1;for(;t>0;){if("success"===(e=await new Promise(e=>{overwolf.games.events.setRequiredFeatures(this._requiredFeatures,e)})).status)return console.log("setRequiredFeatures(): success: "+JSON.stringify(e,null,2)),e.supportedFeatures.length>0;await s.Timer.wait(3e3),t++}return console.warn("setRequiredFeatures(): failure after "+t+" tries"+JSON.stringify(e,null,2)),!1}registerEvents(){this.unRegisterEvents(),overwolf.games.events.onInfoUpdates2.addListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.addListener(this.onNewEvents)}unRegisterEvents(){overwolf.games.events.onInfoUpdates2.removeListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.removeListener(this.onNewEvents)}async start(){console.log("[ow-game-events] START"),this.registerEvents(),await this.setRequiredFeatures();const{res:e,status:t}=await this.getInfo();e&&"success"===t&&this.onInfoUpdates({info:e})}stop(){console.log("[ow-game-events] STOP"),this.unRegisterEvents()}}},"./odk-ts/ow-hotkeys.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWHotkeys=void 0;t.OWHotkeys=class{constructor(){}static getHotkeyText(e){return new Promise((t,n)=>{overwolf.settings.getHotKey(e,e=>{e&&e.success&&e.hotkey||t("UNASSIGNED"),t(e.hotkey)})})}static onHotkeyDown(e,t){overwolf.settings.registerHotKey(e,t)}}},"./odk-ts/ow-window.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}async restore(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;overwolf.windows.restore(n,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${n}, reason=${e.error}`),t()})})}async minimize(){let e=this;return console.log("window: minimized"),new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.minimize(n,()=>{}),t()})}async maximize(){let e=this;return console.log("window: maximized"),new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.maximize(n,()=>{}),t()})}async hide(){let e=this;return console.log("window: hidden"),new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.hide(n,()=>{}),t()})}async close(){let e=this;return console.log("window: closed"),new Promise(async t=>{await e.assureObtained(),e._id;const n=await this.getWindowState();return n.success&&"closed"!==n.window_state&&await this.internalClose(),t()})}async changeWindowSize(e,t){overwolf.windows.changeSize("in_game",e,t,e=>{e.success||console.error(e)})}async changeWindowLocation(e,t){overwolf.windows.getCurrentWindow(n=>{n.success||console.error(n);let s=n.window.width,o=n.window.height;overwolf.utils.getMonitorsList(i=>{n.success||console.error(n);let r,a,l=i.displays[0].width,d=i.displays[0].height;"center-center"==e?(r=l/2-s/2,a=d/2-o/2):"center-right"==e?(r=l-s-20,a=d/2-o/2):"center-left"==e&&(r=20,a=d/2-o/2),overwolf.windows.changePosition(t,Math.round(r),Math.round(a),e=>{e.success||console.error(e)})})})}dragMove(e){e.onmousedown=(e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)})}async getWindowState(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;overwolf.windows.getWindowState(n,t)})}static async getCurrentInfo(){return new Promise(async e=>{overwolf.windows.getCurrentWindow(t=>{e(t.window)})})}obtain(){return new Promise((e,t)=>{const n=n=>{n&&"success"===n.status&&n.window&&n.window.id?(this._id=n.window.id,this._name||(this._name=n.window.name),e(n.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,n):overwolf.windows.getCurrentWindow(n)})}async assureObtained(){let e=this;return new Promise(async t=>(await e.obtain(),t()))}async internalClose(){let e=this;return new Promise(async(t,n)=>{await e.assureObtained();let s=e._id;overwolf.windows.close(s,e=>{e&&e.success?t():n(e)})})}}},"./odk-ts/timer.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;t.Timer=class{constructor(e,t){this._timerId=null,this.handleTimerEvent=(()=>{this._timerId=null,this._delegate.onTimer(this._id)}),this._delegate=e,this._id=t}static async wait(e){return new Promise(t=>{setTimeout(t,e)})}start(e){this.stop(),this._timerId=setTimeout(this.handleTimerEvent,e)}stop(){null!=this._timerId&&(clearTimeout(this._timerId),this._timerId=null)}}},"./windows/AppWindow.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const s=n("./odk-ts/ow-window.ts");t.AppWindow=class{constructor(e){this.maximized=!1,this.mainWindow=new s.OWWindow("background"),this.currWindow=new s.OWWindow(e);const t=document.getElementById("closeButton"),n=document.getElementById("maximizeButton"),o=document.getElementById("minimizeButton"),i=document.getElementById("exitMinimizeModal"),r=document.getElementById("cancel"),a=document.getElementById("exit"),l=document.getElementById("minimize"),d=document.getElementById("header");"desktop"===e&&this.setDrag(d),t&&t.addEventListener("click",()=>{i.style.display="block"}),o&&o.addEventListener("click",()=>{this.currWindow.minimize()}),n&&n.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),r&&r.addEventListener("click",()=>{i.style.display="none"}),a&&a.addEventListener("click",()=>{this.mainWindow.close()}),l&&l.addEventListener("click",()=>{this.currWindow.minimize(),i.style.display="none"})}async getWindowState(){return await this.currWindow.getWindowState()}async setDrag(e){this.currWindow.dragMove(e)}}},"./windows/in_lobby/in_lobby.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n("./windows/AppWindow.ts"),o=n("./odk-ts/ow-games-events.ts"),i=n("./odk-ts/ow-hotkeys.ts"),r=n("./odk-ts/ow-window.ts"),a=n("./odk-ts/database-functions.ts"),l=n("./consts.ts"),d=document.getElementById("searching"),c=document.getElementById("overwolf-status"),u=document.getElementById("internet-status"),w=document.getElementsByClassName("nav-btn"),g=["overview","daily-weekly","settings"],m=new r.OWWindow(l.windowNames.inLobby),h=new a.DatabaseFunctions;let y,_;localStorage.settings||localStorage.setItem("settings",JSON.stringify({table:"0",maximize:"0"})),localStorage.valuesTable||localStorage.setItem("valuesTable",JSON.stringify({0:"Kills",1:"Deaths",2:"K/D",3:"Wins",4:"Losses",5:"W/L"}));const f=JSON.parse(localStorage.settings),v=JSON.parse(localStorage.valuesTable),A=document.querySelectorAll("#setting-dtable option"),M=document.querySelectorAll("#setting-dmaximize option");try{m.changeWindowLocation("center-right","in_lobby").then(e=>h.createDatabase()).then(e=>h.initiateIDB()).then(e=>b()).then(e=>P()).then(e=>N()).then(e=>I()).then(e=>h.printDailyWeekly())}catch(e){E("error","window/function",e)}overwolf.settings.hotkeys.get(e=>{e.success||console.error(e);const t=e.games[10826][0].binding,n=document.getElementById("shortcut-text");n.innerHTML="Unassigned"===t?"UNASSIGNED to show/hide the overlay":t+" to show/hide the overlay in game"});window.setInterval(b,6e4),window.setInterval(P,6e4);document.getElementById("setting-dtable").onchange=k,document.getElementById("setting-dmaximize").onchange=k,document.getElementById("setting-valueTable1").onchange=k,document.getElementById("setting-valueTable2").onchange=k,document.getElementById("setting-valueTable3").onchange=k,document.getElementById("setting-valueTable4").onchange=k,document.getElementById("setting-valueTable5").onchange=k,document.getElementById("setting-valueTable6").onchange=k;for(let e=0;e<w.length;e++)w[e].addEventListener("click",function(){for(let e=0;e<w.length;e++)w[e].classList.remove("active"),document.getElementById(g[e]).style.display="none";this.classList.add("active"),document.getElementById(g[e]).style.display="block"});function b(){fetch("https://game-events-status.overwolf.com/10826_prod.json").then(e=>e.json()).then(e=>{const t=e.state;2===t?(c.style.display="block",c.innerHTML="<h4>Due to a recent game patch, some functions might not work - we’ll fix it shortly</h4>"):3===t?(c.style.display="block",c.innerHTML="<h4>Due to a recent game patch, Overwolf app API has stopped working - we’ll fix it shortly</h4>"):1===t&&(c.style.display="none",c.innerHTML=""),E("log","overwolfStatus",t)})}function P(){const e=navigator.onLine;u.style.display=!1===e?"block":"none",E("log","internetStatus",e)}function k(){"selectorValues"===this.className&&(v[parseInt(this.getAttribute("nrUno"))]=this.value,p("valuesTable",v),I()),"setting-dtable"===this.id&&(f.table=this.value,p("settings",f)),"setting-dmaximize"===this.id&&(f.maximize=this.value,p("settings",f))}function p(e,t){localStorage.setItem(e,JSON.stringify(t)),N()}function N(){A[f.table].setAttribute("selected","selected"),M[f.maximize].setAttribute("selected","selected")}function I(){for(let t=0;t<6;t++){var e=v[t].replace(/[ \/]/g,"-")+t;document.getElementById(e).setAttribute("selected","selected")}}function E(e,t,n){const s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}class T extends s.AppWindow{constructor(){super(l.windowNames.inLobby),this.setToggleHotkeyBehavior(),this._rainbowGameEventsListener=new o.OWGamesEvents({onInfoUpdates:this.onInfoUpdates.bind(this),onNewEvents:this.onNewEvents.bind(this)},l.interestingFeatures1)}static instance(){return this._instance||(this._instance=new T),this._instance}run(){this._rainbowGameEventsListener.start()}onInfoUpdates(e){if(E("log","infoUpdate",e),"match_info"in e&&"game_mode"in e.match_info||"game_info"in e&&"phase"in e.game_info&&"lobby"===e.game_info.phase)if(e.match_info&&(y=e.match_info.game_mode),"NONE"!==y){let e;E("log","gameStatus",_="searching"),e=y.split("_")[2]?y.split("_")[1]+" "+y.split("_")[2]:y.split("_")[1],document.getElementById("match-making-text").innerHTML="matchmaking "+e,d.style.display="block"}else E("log","gameStatus",_="lobby"),d.style.display="none"}onNewEvents(e){E("log","infoEvent",e)}async setToggleHotkeyBehavior(){i.OWHotkeys.onHotkeyDown(l.hotkeys.toggle,async e=>{console.log(`"info": { pressed hotkey for ${e.featureId} }`);const t=await this.getWindowState();m.changeWindowLocation("center-right","in_lobby"),"normal"===t.window_state||"maximized"===t.window_state?this.currWindow.minimize():"minimized"!==t.window_state&&"closed"!==t.window_state||this.currWindow.restore()})}}T.instance().run()}});
