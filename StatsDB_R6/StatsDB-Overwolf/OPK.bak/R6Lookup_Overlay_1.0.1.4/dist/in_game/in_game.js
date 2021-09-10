!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s="./windows/in_game/in_game.ts")}({"./consts.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tableStats=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={inGame:"in_game",desktop:"desktop",inLobby:"in_lobby"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.tableStats=["rankedpvp_kills","rankedpvp_death","rankedpvp_matchwon","rankedpvp_matchlost","casualpvp_kills","casualpvp_death","casualpvp_matchwon","casualpvp_matchlost","kills","deaths","wins","losses"]},"./odk-ts/database.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DatabaseFunctions=void 0;const n=document.getElementById("kd-circle-daily"),o=document.getElementById("wl-circle-daily"),a=document.getElementById("kd-circle-daily-text"),r=document.getElementById("wl-circle-daily-text"),i=document.getElementById("kd-circle-weekly"),l=document.getElementById("wl-circle-weekly"),d=document.getElementById("kd-circle-weekly-text"),c=document.getElementById("wl-circle-weekly-text");t.DatabaseFunctions=class{createDatabase(){const e=this,t=indexedDB.open("days");t.onerror=function(s){e.logLine("error","database",t.error)},t.onupgradeneeded=function(e){t.result.createObjectStore("days",{keyPath:"date"})};const s=indexedDB.open("week");s.onerror=function(t){e.logLine("error","database",s.error)},s.onupgradeneeded=function(e){s.result.createObjectStore("week",{keyPath:"week"})}}initiateIDB(){const e=new Date,t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),s=this,n=indexedDB.open("days");n.onerror=function(e){s.logLine("error","database",n.error)},n.onsuccess=function(e){const o=n.result,a=o.transaction("days","readwrite").objectStore("days").get(t);a.onerror=function(e){s.logLine("error","database",a.error)},a.onsuccess=function(e){a.result||o.transaction("days","readwrite").objectStore("days").add({date:t,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}})}};const o=indexedDB.open("week");o.onerror=function(e){s.logLine("error","database",o.error)},o.onsuccess=function(e){const t=o.result,n=t.transaction("week","readwrite").objectStore("week").get("week");n.onerror=function(e){s.logLine("error","database",n.error)},n.onsuccess=function(e){if(!n.result){let e={};const s=new Date,n=s.getDate()+","+(s.getMonth()+1)+","+s.getFullYear();e[0]={date:n,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}};for(let t=1;t<7;t++){s.setDate(s.getDate()-1);const n=s.getDate()+","+(s.getMonth()+1)+","+s.getFullYear();e[t]={date:n,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}}}e.week="week",t.transaction("week","readwrite").objectStore("week").add({week:"week",value:e})}}}}localStoreMatch(e,t,s){let n=new Date;const o=n.getDate()+","+(n.getMonth()+1)+","+n.getFullYear(),a=this,r=indexedDB.open("days");r.onerror=function(e){a.logLine("error","database",r.error)},r.onsuccess=function(n){const i=r.result,l=i.transaction("days","readwrite").objectStore("days").get(o);l.onerror=function(e){a.logLine("error","database",l.error)},l.onsuccess=function(n){const o=l.result;0!==s.kills&&(o[e].kills+=s.kills),0!==s.deaths&&(o[e].deaths+=s.deaths),"victory"===t?o[e].wins++:"defeat"===t&&o[e].losses++,i.transaction("days","readwrite").objectStore("days").put(o)}};const i=indexedDB.open("week");i.onerror=function(e){a.logLine("error","database",i.error)},i.onsuccess=function(n){const r=i.result,l=r.transaction("week","readwrite").objectStore("week").get("week");l.onerror=function(e){a.logLine("error","database",l.error)},l.onsuccess=function(n){const i=l.result.value,d=Object.values(i);let c,u=null;for(let e=0;e<7;e++)if(d[e].date===o){u=e;break}c=null!==u?d[u]:{date:o,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}},0!==s.kills&&(c[e].kills+=s.kills),0!==s.deaths&&(c[e].deaths+=s.deaths),"victory"===t?c[e].wins++:"defeat"===t&&c[e].losses++,null!==u?d[u]=c:(d.unshift(c),d.pop());const m=Object.assign({},d);a.logLine("log","weekResult",m),r.transaction("week","readwrite").objectStore("week").put({week:"week",value:m})}}}printDailyWeekly(){let e=new Date;const t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),s=this,u=indexedDB.open("days");u.onerror=function(e){s.logLine("error","database",u.error)},u.onsuccess=function(e){const i=u.result.transaction("days","readwrite").objectStore("days").get(t);i.onerror=function(e){s.logLine("error","database",i.error)},i.onsuccess=function(e){const t=i.result,l=t.MATCHMAKING_PVP.kills+t.MATCHMAKING_PVP_RANKED.kills+t.MATCHMAKING_PVP_UNRANKED.kills,d=t.MATCHMAKING_PVP.deaths+t.MATCHMAKING_PVP_RANKED.deaths+t.MATCHMAKING_PVP_UNRANKED.deaths,c=t.MATCHMAKING_PVP.losses+t.MATCHMAKING_PVP_RANKED.losses+t.MATCHMAKING_PVP_UNRANKED.losses,u=t.MATCHMAKING_PVP.wins+t.MATCHMAKING_PVP_RANKED.wins+t.MATCHMAKING_PVP_UNRANKED.wins;let m,w,g,y;0!==d?(g=Math.round(100*(l/d+Number.EPSILON))/100,m=Math.round(l/d*33)+", 100"):0!==d&&0!==l?(g="INF",m="100, 100"):(g="0.00",m="0, 100"),u+c!==0?w=(y=Math.round(u/(u+c)*100))+", 100":(y="0",w="0, 100"),n.setAttribute("stroke-dasharray",m),o.setAttribute("stroke-dasharray",w),a.innerHTML=parseFloat(g).toFixed(2),r.innerHTML=y+"%",s.logLine("log","dailyKD",g),s.logLine("log","dailyWL",y)}};const m=indexedDB.open("week");m.onerror=function(e){s.logLine("error","database",m.error)},m.onsuccess=function(e){const t=m.result.transaction("week","readwrite").objectStore("week").get("week");t.onerror=function(e){s.logLine("error","database",t.error)},t.onsuccess=function(e){const n=t.result.value;let o,a,r,u,m=0,w=0,g=0,y=0;for(let e=0;e<7;e++)m+=n[e].MATCHMAKING_PVP.kills,w+=n[e].MATCHMAKING_PVP.deaths,y+=n[e].MATCHMAKING_PVP.wins,g+=n[e].MATCHMAKING_PVP.losses,m+=n[e].MATCHMAKING_PVP_RANKED.kills,w+=n[e].MATCHMAKING_PVP_RANKED.deaths,y+=n[e].MATCHMAKING_PVP_RANKED.wins,g+=n[e].MATCHMAKING_PVP_RANKED.losses,m+=n[e].MATCHMAKING_PVP_UNRANKED.kills,w+=n[e].MATCHMAKING_PVP_UNRANKED.deaths,y+=n[e].MATCHMAKING_PVP_UNRANKED.wins,g+=n[e].MATCHMAKING_PVP_UNRANKED.losses;0!==w?(r=Math.round(100*(m/w+Number.EPSILON))/100,o=Math.round(m/w*33)+", 100"):0===w&&0!==m?(r="INF",o="100, 100"):(r="0.00",o="0, 100"),y+g!==0?a=(u=Math.round(y/(y+g)*100))+", 100":(u="0",a="0, 100"),i.setAttribute("stroke-dasharray",o),l.setAttribute("stroke-dasharray",a),d.innerHTML=parseFloat(r).toFixed(2),c.innerHTML=u+"%",s.logLine("log","weeklyKD",r),s.logLine("log","weeklyWL",u)}}}logLine(e,t,s){let n='"'+t+'": '+JSON.stringify(s,void 0,2);"log"===e?console.log(n):"error"===e?console.error(n):"warn"===e&&console.warn(n)}}},"./odk-ts/functions.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerFunctions=void 0;const n=s("./consts.ts"),o=document.getElementById("team-blue-lastnode"),a=document.getElementById("team-orange-lastnode"),r=document.getElementById("team-blue-tbody"),i=document.getElementById("team-orange-tbody");t.PlayerFunctions=class{async searchPlayer(e,t){const s=this,n="https://www.r6lookup.com/getStats/getStatsAPI.php?username="+e+"&platform=uplay&appcode=809965",o=500;let a=await fetch(encodeURI(n),{cache:"no-cache"}),r=await a.json();if(r)return r;!function(){const n=t-1;n||s.logLine("error","player search error","error/ timed out"),function(e){return new Promise(t=>setTimeout(t,e))}(o).then(()=>s.searchPlayer(e,n))}()}printPlayer(e,t,s,o,a,r){for(let e=0;e<n.tableStats.length;e++)o[n.tableStats[e]]||(o[n.tableStats[e]]=0);const i='<td class="name"><div class="img-mmr"><img src="'+o.rankInfo.image+'" alt="rank">'+o.mmr+"</div><span>"+t+'</span></td><td class="level">'+o.level+'</td><td class="ranked current" id="ranked0'+e+'">'+o.rankedpvp_kills+'</td><td class="casual" id="casual0'+e+'">'+o.casualpvp_kills+'</td><td class="seasonal" id="seasonal0'+e+'">'+o.kills+'</td><td class="ranked current" id="ranked1'+e+'">'+o.rankedpvp_death+'</td><td class="casual" id="casual1'+e+'">'+o.casualpvp_death+'</td><td class="seasonal" id="seasonal1'+e+'">'+o.deaths+'</td><td class="ranked current" id="ranked2'+e+'">'+o.rankedpvp_kd.toFixed(2)+'</td><td class="casual" id="casual2'+e+'">'+o.casualpvp_kd.toFixed(2)+'</td><td class="seasonal" id="seasonal2'+e+'">'+o.seasonalpvp_kd.toFixed(2)+'</td><td class="ranked current" id="ranked3'+e+'">'+o.rankedpvp_matchwon+'</td><td class="casual" id="casual3'+e+'">'+o.casualpvp_matchwon+'</td><td class="seasonal" id="seasonal3'+e+'">'+o.wins+'</td><td class="ranked current" id="ranked4'+e+'">'+o.rankedpvp_matchlost+'</td><td class="casual" id="casual4'+e+'">'+o.casualpvp_matchlost+'</td><td class="seasonal" id="seasonal4'+e+'">'+o.losses+'</td><td class="ranked current" id="ranked5'+e+'">'+o.rankedpvp_winloss.toFixed(1)+'%</td><td class="casual" id="casual5'+e+'">'+o.casualpvp_winloss.toFixed(1)+'%</td><td class="seasonal" id="seasonal5'+e+'">'+o.seasonalpvp_winloss.toFixed(1)+'%</td><td class="percentage">'+o.hacker_percentage+"%</td>";r[e]&&(r[e].innerHTML=i,r[e].style.display="table-row",r[e].style.borderBottom="1px solid var(--main-text-color)",this.logLine("log","updated","id: "+e+", trId: "+r[e].id+", name: "+t+", team: "+s))}clearPlayer(e,t,s){let n,o;"blue"===t?(n=document.getElementById("team-blue-tbody"),o=document.getElementById("team-blue-lastnode")):"orange"===t&&(n=document.getElementById("team-orange-tbody"),o=document.getElementById("team-orange-lastnode")),s[e]&&(s[e].innerHTML="",s[e].style.display="block",s[e].style.borderBottom="none",n.insertBefore(s[e],o),this.logLine("log","left","id: "+e+", trId: "+s[e].id))}fixTableOrder(){for(let e=0;e<5;e++){const t=document.getElementById("team-blue").querySelector("#team-blue-"+e),s=document.getElementById("team-orange").querySelector("#team-orange-"+e);""===t.innerHTML&&r.insertBefore(t,o),""===s.innerHTML&&i.insertBefore(s,a)}}gamemodeNavBar(e){for(let t=0;t<6;t++)for(let s=0;s<10;s++){const n=document.getElementById("ranked"+t+s),o=document.getElementById("casual"+t+s),a=document.getElementById("seasonal"+t+s);n&&o&&a&&("ranked"===e?(n.classList.add("current"),o.classList.remove("current"),a.classList.remove("current")):"casual"===e?(n.classList.remove("current"),o.classList.add("current"),a.classList.remove("current")):"season"===e&&(n.classList.remove("current"),o.classList.remove("current"),a.classList.add("current")))}}logLine(e,t,s){let n='"'+t+'": '+JSON.stringify(s,void 0,2);"log"===e?console.log(n):"error"===e?console.error(n):"warn"===e&&console.warn(n)}}},"./odk-ts/ow-games-events.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWGamesEvents=void 0;const n=s("./odk-ts/timer.ts");t.OWGamesEvents=class{constructor(e,t){this.onInfoUpdates=(e=>{this._delegate.onInfoUpdates(e.info)}),this.onNewEvents=(e=>{this._delegate.onNewEvents(e)}),this._delegate=e,this._requiredFeatures=t}async getInfo(){return new Promise(e=>{overwolf.games.events.getInfo(e)})}async setRequiredFeatures(){let e,t=1;for(;t>0;){if("success"===(e=await new Promise(e=>{overwolf.games.events.setRequiredFeatures(this._requiredFeatures,e)})).status)return console.log("setRequiredFeatures(): success: "+JSON.stringify(e,null,2)),e.supportedFeatures.length>0;await n.Timer.wait(3e3),t++}return console.warn("setRequiredFeatures(): failure after "+t+" tries"+JSON.stringify(e,null,2)),!1}registerEvents(){this.unRegisterEvents(),overwolf.games.events.onInfoUpdates2.addListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.addListener(this.onNewEvents)}unRegisterEvents(){overwolf.games.events.onInfoUpdates2.removeListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.removeListener(this.onNewEvents)}async start(){console.log("[ow-game-events] START"),this.registerEvents(),await this.setRequiredFeatures();const{res:e,status:t}=await this.getInfo();e&&"success"===t&&this.onInfoUpdates({info:e})}stop(){console.log("[ow-game-events] STOP"),this.unRegisterEvents()}}},"./odk-ts/ow-hotkeys.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWHotkeys=void 0;t.OWHotkeys=class{constructor(){}static getHotkeyText(e){return new Promise((t,s)=>{overwolf.settings.getHotKey(e,e=>{e&&e.success&&e.hotkey||t("UNASSIGNED"),t(e.hotkey)})})}static onHotkeyDown(e,t){overwolf.settings.registerHotKey(e,t)}}},"./odk-ts/ow-window.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}async restore(){let e=this;return new Promise(async t=>{await e.assureObtained();let s=e._id;overwolf.windows.restore(s,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${s}, reason=${e.error}`),t()})})}async minimize(){let e=this;return console.log("window: minimized"),new Promise(async t=>{await e.assureObtained();let s=e._id;return overwolf.windows.minimize(s,()=>{}),t()})}async maximize(){let e=this;return console.log("window: maximized"),new Promise(async t=>{await e.assureObtained();let s=e._id;return overwolf.windows.maximize(s,()=>{}),t()})}async hide(){let e=this;return console.log("window: hidden"),new Promise(async t=>{await e.assureObtained();let s=e._id;return overwolf.windows.hide(s,()=>{}),t()})}async close(){let e=this;return console.log("window: closed"),new Promise(async t=>{await e.assureObtained(),e._id;const s=await this.getWindowState();return s.success&&"closed"!==s.window_state&&await this.internalClose(),t()})}async changeWindowSize(e,t){overwolf.windows.changeSize("in_game",e,t,e=>{e.success||console.error(e)})}async changeWindowLocation(e,t){overwolf.windows.getCurrentWindow(s=>{s.success||console.error(s);let n=s.window.width,o=s.window.height;overwolf.utils.getMonitorsList(a=>{s.success||console.error(s);let r,i,l=a.displays[0].width,d=a.displays[0].height;"center-center"==e?(r=l/2-n/2,i=d/2-o/2):"center-right"==e?(r=l-n-20,i=d/2-o/2):"center-left"==e&&(r=20,i=d/2-o/2),overwolf.windows.changePosition(t,Math.round(r),Math.round(i),e=>{e.success||console.error(e)})})})}dragMove(e){e.onmousedown=(e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)})}async getWindowState(){let e=this;return new Promise(async t=>{await e.assureObtained();let s=e._id;overwolf.windows.getWindowState(s,t)})}static async getCurrentInfo(){return new Promise(async e=>{overwolf.windows.getCurrentWindow(t=>{e(t.window)})})}obtain(){return new Promise((e,t)=>{const s=s=>{s&&"success"===s.status&&s.window&&s.window.id?(this._id=s.window.id,this._name||(this._name=s.window.name),e(s.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,s):overwolf.windows.getCurrentWindow(s)})}async assureObtained(){let e=this;return new Promise(async t=>(await e.obtain(),t()))}async internalClose(){let e=this;return new Promise(async(t,s)=>{await e.assureObtained();let n=e._id;overwolf.windows.close(n,e=>{e&&e.success?t():s(e)})})}}},"./odk-ts/timer.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;t.Timer=class{constructor(e,t){this._timerId=null,this.handleTimerEvent=(()=>{this._timerId=null,this._delegate.onTimer(this._id)}),this._delegate=e,this._id=t}static async wait(e){return new Promise(t=>{setTimeout(t,e)})}start(e){this.stop(),this._timerId=setTimeout(this.handleTimerEvent,e)}stop(){null!=this._timerId&&(clearTimeout(this._timerId),this._timerId=null)}}},"./windows/AppWindow.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const n=s("./odk-ts/ow-window.ts");t.AppWindow=class{constructor(e){this.maximized=!1,this.mainWindow=new n.OWWindow("background"),this.currWindow=new n.OWWindow(e);const t=document.getElementById("closeButton"),s=document.getElementById("maximizeButton"),o=document.getElementById("minimizeButton"),a=document.getElementById("exitMinimizeModal"),r=document.getElementById("cancel"),i=document.getElementById("exit"),l=document.getElementById("minimize"),d=document.getElementById("header");"desktop"===e&&this.setDrag(d),t&&t.addEventListener("click",()=>{a.style.display="block"}),o&&o.addEventListener("click",()=>{this.currWindow.minimize()}),s&&s.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),r&&r.addEventListener("click",()=>{a.style.display="none"}),i&&i.addEventListener("click",()=>{this.mainWindow.close()}),l&&l.addEventListener("click",()=>{this.currWindow.minimize(),a.style.display="none"})}async getWindowState(){return await this.currWindow.getWindowState()}async setDrag(e){this.currWindow.dragMove(e)}}},"./windows/in_game/in_game.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s("./windows/AppWindow.ts"),o=s("./odk-ts/ow-games-events.ts"),a=s("./odk-ts/ow-hotkeys.ts"),r=s("./odk-ts/ow-window.ts"),i=s("./odk-ts/functions.ts"),l=s("./odk-ts/database.ts"),d=s("./consts.ts");let c,u,m,w,g,y=[],h=[],f=[],_=[],p=0,v=[];const k=document.getElementById("team-blue-div"),P=document.getElementById("team-orange-div"),M=(document.getElementById("ranked-btn"),document.getElementById("casual-btn"),document.getElementById("season-btn"),document.getElementsByClassName("nav-btn")),A=["season","ranked","casual"],b=new r.OWWindow(d.windowNames.inGame),I=new i.PlayerFunctions,N=new l.DatabaseFunctions;localStorage.settings||localStorage.setItem("settings",JSON.stringify({table:"0",maximize:"0"}));const E=JSON.parse(localStorage.settings);try{b.minimize().then(e=>b.changeWindowLocation("center-center","in_game")).then(e=>{"1"===E.maximize&&b.maximize()}).then(e=>(function(){p=E.table;for(var e=0;e<M.length;e++)M[e].classList.remove("active"),p==e&&M[e].classList.add("active");w=A[p],I.gamemodeNavBar(w)})()).then(e=>N.createDatabase()).then(e=>N.initiateIDB()).then(e=>N.printDailyWeekly())}catch(e){K("error","window/function",e)}overwolf.settings.hotkeys.get(e=>{e.success||console.error(e);let t=e.games[10826][0].binding,s=document.getElementById("shortcut-text");s.innerHTML="Unassigned"===t?"UNASSIGNED to show/hide the overlay":t+" to show/hide the overlay in game"});for(var T=0;T<M.length;T++)M[T].addEventListener("click",function(){for(T=0;T<M.length;T++)M[T].classList.remove("active");this.classList.add("active"),w=this.innerText.toLowerCase(),I.gamemodeNavBar(w)});function K(e,t,s){let n='"'+t+'": '+JSON.stringify(s,void 0,2);"log"===e?console.log(n):"error"===e?console.error(n):"warn"===e&&console.warn(n)}overwolf.games.inputTracking.onKeyDown.addListener(function(e){if("39"===e.key||"37"===e.key){"39"===e.key?2===p?p=0:p++:"37"===e.key&&(0===p?p=2:p--);for(var t=0;t<M.length;t++)M[t].classList.remove("active"),p===t&&M[t].classList.add("active");w=A[p],I.gamemodeNavBar(w)}});class O extends n.AppWindow{constructor(){super(d.windowNames.inGame),this.setToggleHotkeyBehavior(),this._rainbowGameEventsListener=new o.OWGamesEvents({onInfoUpdates:this.onInfoUpdates.bind(this),onNewEvents:this.onNewEvents.bind(this)},d.interestingFeatures1)}static instance(){return this._instance||(this._instance=new O),this._instance}run(){this._rainbowGameEventsListener.start()}onInfoUpdates(e){if(K("log","infoUpdate",e),"me"in e&&(e.me.account_id&&(c=e.me.account_id),e.me.name&&(u=e.me.name)),("match_info"in e&&"game_mode"in e.match_info||"game_info"in e&&"phase"in e.game_info&&"lobby"===e.game_info.phase)&&e.match_info&&K("log","gameMode",m=e.match_info.game_mode),"round"in e&&null!=e.round.number&&"in_game"!==g&&(k.style.display="none",P.style.display="none",d.gameModesPVP.includes(m)&&(k.style.display="flex",P.style.display="flex",K("log","display","orange + blue"))),"players"in e&&(null!=e.players.roster_0||null!=Object.values(e.players)[0])){for(let t=0;t<Object.keys(e.players).length;t++)if(null!==Object.values(e.players)[t]){const s=Object.values(e.players)[t],n=JSON.parse(JSON.parse(JSON.stringify(s))),o=Object.keys(e.players)[t].substr(7);if(n.name===u&&(K("log","latest stats",v=n),"Blue"===n.team?(k.after(P),d.gameModesPVE.includes(m)&&(k.style.display="flex",P.style.display="none",K("log","display","blue"))):"Orange"===n.team&&(P.after(k),d.gameModesPVE.includes(m)&&(k.style.display="none",P.style.display="flex",K("log","display","orange")))),!f.includes("ID"+o)&&!_.includes("ID"+o)){let e=[],t=[];y.includes(o)||h.includes(o)||("Blue"===n.team?y.push(o):"Orange"===n.team&&h.push(o)),"Blue"===n.team?(f.push("ID"+o),e[o]=y.indexOf(o),t[o]=document.getElementById("team-blue").querySelector("#team-blue-"+e[o]),""!==t[o].innerHTML&&(e[o]=y.indexOf(o),t[o]=document.getElementById("team-blue").querySelector("#team-blue-"+e[o]))):"Orange"===n.team&&(_.push("ID"+o),e[o]=h.indexOf(o),t[o]=document.getElementById("team-orange").querySelector("#team-orange-"+e[o]),""!==t[o].innerHTML&&(e[o]=h.indexOf(o),t[o]=document.getElementById("team-orange").querySelector("#team-orange-"+e[o])));try{I.searchPlayer(n.name,10).then(e=>I.printPlayer(o,n.name,n.team,e,n,t)).then(e=>I.fixTableOrder()).then(e=>I.gamemodeNavBar(w))}catch(e){K("error","search",e)}}}}else if("players"in e)for(let t=0;t<Object.keys(e.players).length;t++){const s=Object.keys(e.players)[t].substr(7);let n,o=[],a=[],r=[];if(y.includes(s)){o[s]=y.indexOf(s),r[s]=document.getElementById("team-blue").querySelector("#team-blue-"+o[s]),n="blue",a[s]=f.indexOf("ID"+s),delete f[a[s]];try{I.clearPlayer(s,n,r)}catch(e){K("error","remove",e)}}else if(h.includes(s)){o[s]=h.indexOf(s),r[s]=document.getElementById("team-orange").querySelector("#team-orange-"+o[s]),n="orange",a[s]=_.indexOf("ID"+s),delete _[a[s]];try{I.clearPlayer(s,n,r)}catch(e){K("error","remove",e)}}}}onNewEvents(e){if(K("log","infoEvent",e),d.gameModesPVP.includes(m)&&"events"in e&&"matchOutcome"===e.events[0].name&&("MATCHMAKING_PVP"===m||"MATCHMAKING_PVP_RANKED"===m||"MATCHMAKING_PVP_UNRANKED"===m))try{b.minimize().then(e=>N.initiateIDB()).then(t=>N.localStoreMatch(m,e.events[0].data,v))}catch(e){K("error","DailyWeekly",e)}}async setToggleHotkeyBehavior(){a.OWHotkeys.onHotkeyDown(d.hotkeys.toggle,async e=>{console.log(`"info": { pressed hotkey for ${e.featureId} }`);const t=await this.getWindowState();b.changeWindowLocation("center-center","in_game"),"normal"===t.window_state||"maximized"===t.window_state?this.currWindow.minimize():"minimized"!==t.window_state&&"closed"!==t.window_state||this.currWindow.restore()})}}O.instance().run()}});
