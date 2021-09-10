!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./windows/in_game/in_game.ts")}({"./consts.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tableStats=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.windowNames={inGame:"in_game",desktop:"desktop"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.tableStats=["rankedpvp_kills","rankedpvp_death","rankedpvp_matchwon","rankedpvp_matchlost","casualpvp_kills","casualpvp_death","casualpvp_matchwon","casualpvp_matchlost","kills","deaths","wins","losses"]},"./odk-ts/functions.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseFunctions=void 0;const s=n("./consts.ts"),a=document.getElementById("team-blue-lastnode"),o=document.getElementById("team-orange-lastnode"),i=document.getElementById("team-blue-tbody"),r=document.getElementById("team-orange-tbody"),l=document.getElementById("kd-circle-daily"),d=document.getElementById("wl-circle-daily"),c=document.getElementById("kd-circle-daily-text"),u=document.getElementById("wl-circle-daily-text"),m=document.getElementById("kd-circle-weekly"),g=document.getElementById("wl-circle-weekly"),w=document.getElementById("kd-circle-weekly-text"),y=document.getElementById("wl-circle-weekly-text");t.BaseFunctions=class{async searchPlayer(e,t){const n=this,s="https://www.r6lookup.com/getStats/getStatsAPI.php?username="+e+"&platform=uplay&appcode=809965",a=500;let o=await fetch(encodeURI(s),{cache:"no-cache"}),i=await o.json();if(i)return i;!function(){const s=t-1;s||n.logLine("error","player search error","error/ timed out"),function(e){return new Promise(t=>setTimeout(t,e))}(a).then(()=>n.searchPlayer(e,s))}()}printPlayer(e,t,n,a,o,i){for(let e=0;e<s.tableStats.length;e++)a[s.tableStats[e]]||(a[s.tableStats[e]]=0);const r='<td class="name"><div class="img-mmr"><img src="'+a.rankInfo.image+'" alt="rank">'+a.mmr+"</div><span>"+t+'</span></td><td class="level">'+a.level+'</td><td class="ranked current" id="ranked0'+e+'">'+a.rankedpvp_kills+'</td><td class="casual" id="casual0'+e+'">'+a.casualpvp_kills+'</td><td class="seasonal" id="seasonal0'+e+'">'+a.kills+'</td><td class="ranked current" id="ranked1'+e+'">'+a.rankedpvp_death+'</td><td class="casual" id="casual1'+e+'">'+a.casualpvp_death+'</td><td class="seasonal" id="seasonal1'+e+'">'+a.deaths+'</td><td class="ranked current" id="ranked2'+e+'">'+a.rankedpvp_kd+'</td><td class="casual" id="casual2'+e+'">'+a.casualpvp_kd+'</td><td class="seasonal" id="seasonal2'+e+'">'+a.seasonalpvp_kd+'</td><td class="ranked current" id="ranked3'+e+'">'+a.rankedpvp_matchwon+'</td><td class="casual" id="casual3'+e+'">'+a.casualpvp_matchwon+'</td><td class="seasonal" id="seasonal3'+e+'">'+a.wins+'</td><td class="ranked current" id="ranked4'+e+'">'+a.rankedpvp_matchlost+'</td><td class="casual" id="casual4'+e+'">'+a.casualpvp_matchlost+'</td><td class="seasonal" id="seasonal4'+e+'">'+a.losses+'</td><td class="ranked current" id="ranked5'+e+'">'+a.rankedpvp_winloss+'%</td><td class="casual" id="casual5'+e+'">'+a.casualpvp_winloss+'%</td><td class="seasonal" id="seasonal5'+e+'">'+a.seasonalpvp_winloss+'%</td><td class="percentage">'+a.hacker_percentage+"%</td>";i[e]&&(i[e].innerHTML=r,i[e].style.display="table-row",i[e].style.borderBottom="1px solid var(--main-text-color)",this.logLine("log","updated","id: "+e+", name: "+t+", team: "+n))}clearPlayer(e,t,n){let s,a;"blue"===t?(s=document.getElementById("team-blue-tbody"),a=document.getElementById("team-blue-lastnode")):"orange"===t&&(s=document.getElementById("team-orange-tbody"),a=document.getElementById("team-orange-lastnode")),n[e]&&(n[e].innerHTML="",n[e].style.display="block",n[e].style.borderBottom="none",s.insertBefore(n[e],a),this.logLine("log","left","id: "+e))}fixTableOrder(){for(let e=0;e<5;e++){const t=document.getElementById("team-blue").querySelector("#team-blue-"+e),n=document.getElementById("team-orange").querySelector("#team-orange-"+e);""===t.innerHTML&&i.insertBefore(t,a),""===n.innerHTML&&r.insertBefore(n,o)}}initiateLSArrays(){let e=new Date,t=e.getDate(),n=(e.getDay(),t),s="days,"+(e.getMonth()+1)+","+e.getFullYear();localStorage.getItem(s)||localStorage.setItem(s,"{}"),localStorage.getItem("week")||localStorage.setItem("week","{}");let a={};a=JSON.parse(localStorage.getItem(s));let o={};if(o=JSON.parse(localStorage.getItem("week")),a[n]||(a[n]={},a[n].MATCHMAKING_PVP_RANKED={},a[n].MATCHMAKING_PVP={},a[n].MATCHMAKING_PVP_RANKED.kills=0,a[n].MATCHMAKING_PVP_RANKED.deaths=0,a[n].MATCHMAKING_PVP_RANKED.wins=0,a[n].MATCHMAKING_PVP_RANKED.losses=0,a[n].MATCHMAKING_PVP.kills=0,a[n].MATCHMAKING_PVP.deaths=0,a[n].MATCHMAKING_PVP.wins=0,a[n].MATCHMAKING_PVP.losses=0),!o[0])for(let e=0;e<7;e++)o[e]={},o[e].MATCHMAKING_PVP_RANKED={},o[e].MATCHMAKING_PVP={},o[e].MATCHMAKING_PVP_RANKED.kills=0,o[e].MATCHMAKING_PVP_RANKED.deaths=0,o[e].MATCHMAKING_PVP_RANKED.wins=0,o[e].MATCHMAKING_PVP_RANKED.losses=0,o[e].MATCHMAKING_PVP.kills=0,o[e].MATCHMAKING_PVP.deaths=0,o[e].MATCHMAKING_PVP.wins=0,o[e].MATCHMAKING_PVP.losses=0;localStorage.setItem(s,JSON.stringify(a)),localStorage.setItem("week",JSON.stringify(o))}localStoreMatch(e,t,n){let s,a=new Date,o=a.getDate(),i=a.getDay(),r=o,l="days,"+(a.getMonth()+1)+","+a.getFullYear(),d={};d=JSON.parse(localStorage.getItem(l));let c={};c=JSON.parse(localStorage.getItem("week")),0!==n.kills&&(s=d[r][e].kills,s+=n.kills,d[r][e].kills=s,s=c[i][e].kills,s+=n.kills,c[i][e].kills=s),0!==n.deaths&&(s=d[r][e].deaths,s+=n.deaths,d[r][e].deaths=s,s=c[i][e].deaths,s+=n.deaths,c[i][e].deaths=s),"defeat"===t?(s=d[r][e].losses,s+=1,d[r][e].losses=s,s=c[i][e].losses,s+=1,c[i][e].losses=s):"victory"===t&&(s=d[r][e].wins,s+=1,d[r][e].wins=s,s=c[i][e].wins,s+=1,c[i][e].wins=s),localStorage.setItem(l,JSON.stringify(d)),localStorage.setItem("week",JSON.stringify(c)),this.logLine("log","localStorageDays",d),this.logLine("log","localStorageWeek",c)}printDailyWeekly(){let e=new Date,t=e.getDate(),n=(e.getDay(),t),s="days,"+(e.getMonth()+1)+","+e.getFullYear(),a={};a=JSON.parse(localStorage.getItem(s));let o={};o=JSON.parse(localStorage.getItem("week"));let i,r,h,_,p=a[n].MATCHMAKING_PVP.kills+a[n].MATCHMAKING_PVP_RANKED.kills,f=a[n].MATCHMAKING_PVP.deaths+a[n].MATCHMAKING_PVP_RANKED.deaths,v=a[n].MATCHMAKING_PVP.losses+a[n].MATCHMAKING_PVP_RANKED.losses,M=a[n].MATCHMAKING_PVP.wins+a[n].MATCHMAKING_PVP_RANKED.wins;0!==f?(h=Math.round(100*(p/f+Number.EPSILON))/100,i=Math.round(p/f*33)+", 100"):(h="0.00",i="0, 100"),M+v!==0?r=(_=Math.round(M/(M+v)*100))+", 100":(_="0",r="0, 100"),l.setAttribute("stroke-dasharray",i),d.setAttribute("stroke-dasharray",r),c.innerHTML=parseFloat(h).toFixed(2),u.innerHTML=_+"%",this.logLine("log","dailyKD",h),this.logLine("log","dailyWL",_),p=0,f=0,v=0,M=0;for(let e=0;e<7;e++)p+=o[e].MATCHMAKING_PVP.kills,f+=o[e].MATCHMAKING_PVP.deaths,M+=o[e].MATCHMAKING_PVP.wins,v+=o[e].MATCHMAKING_PVP.losses,p+=o[e].MATCHMAKING_PVP_RANKED.kills,f+=o[e].MATCHMAKING_PVP_RANKED.deaths,M+=o[e].MATCHMAKING_PVP_RANKED.wins,v+=o[e].MATCHMAKING_PVP_RANKED.losses;0!==f?(h=Math.round(100*(p/f+Number.EPSILON))/100,i=Math.round(p/f*33)+", 100"):(h="0.00",i="0, 100"),M+v!==0?r=(_=Math.round(M/(M+v)*100))+", 100":(_="0",r="0, 100"),m.setAttribute("stroke-dasharray",i),g.setAttribute("stroke-dasharray",r),w.innerHTML=parseFloat(h).toFixed(2),y.innerHTML=_+"%",this.logLine("log","weeklyKD",h),this.logLine("log","weeklyWL",_)}gamemodeNavBar(e){for(let t=0;t<6;t++)for(let n=0;n<10;n++){const s=document.getElementById("ranked"+t+n),a=document.getElementById("casual"+t+n),o=document.getElementById("seasonal"+t+n);s&&a&&o&&("ranked"===e?(s.classList.add("current"),a.classList.remove("current"),o.classList.remove("current")):"casual"===e?(s.classList.remove("current"),a.classList.add("current"),o.classList.remove("current")):"season"===e&&(s.classList.remove("current"),a.classList.remove("current"),o.classList.add("current")))}}logLine(e,t,n){let s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}}},"./odk-ts/ow-games-events.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWGamesEvents=void 0;const s=n("./odk-ts/timer.ts");t.OWGamesEvents=class{constructor(e,t){this.onInfoUpdates=(e=>{this._delegate.onInfoUpdates(e.info)}),this.onNewEvents=(e=>{this._delegate.onNewEvents(e)}),this._delegate=e,this._requiredFeatures=t}async getInfo(){return new Promise(e=>{overwolf.games.events.getInfo(e)})}async setRequiredFeatures(){let e,t=1;for(;t>0;){if("success"===(e=await new Promise(e=>{overwolf.games.events.setRequiredFeatures(this._requiredFeatures,e)})).status)return console.log("setRequiredFeatures(): success: "+JSON.stringify(e,null,2)),e.supportedFeatures.length>0;await s.Timer.wait(3e3),t++}return console.warn("setRequiredFeatures(): failure after "+t+" tries"+JSON.stringify(e,null,2)),!1}registerEvents(){this.unRegisterEvents(),overwolf.games.events.onInfoUpdates2.addListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.addListener(this.onNewEvents)}unRegisterEvents(){overwolf.games.events.onInfoUpdates2.removeListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.removeListener(this.onNewEvents)}async start(){console.log("[ow-game-events] START"),this.registerEvents(),await this.setRequiredFeatures();const{res:e,status:t}=await this.getInfo();e&&"success"===t&&this.onInfoUpdates({info:e})}stop(){console.log("[ow-game-events] STOP"),this.unRegisterEvents()}}},"./odk-ts/ow-hotkeys.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWHotkeys=void 0;t.OWHotkeys=class{constructor(){}static getHotkeyText(e){return new Promise((t,n)=>{overwolf.settings.getHotKey(e,e=>{e&&e.success&&e.hotkey||t("UNASSIGNED"),t(e.hotkey)})})}static onHotkeyDown(e,t){overwolf.settings.registerHotKey(e,t)}}},"./odk-ts/ow-window.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}async restore(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;overwolf.windows.restore(n,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${n}, reason=${e.error}`),t()})})}async minimize(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.minimize(n,()=>{}),t()})}async maximize(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.maximize(n,()=>{}),t()})}async hide(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.hide(n,()=>{}),t()})}async close(){let e=this;return new Promise(async t=>{await e.assureObtained(),e._id;const n=await this.getWindowState();return n.success&&"closed"!==n.window_state&&await this.internalClose(),t()})}async changeWindowSize(e,t){overwolf.windows.changeSize("in_game",e,t,e=>{e.success})}async changeWindowLocation(e){overwolf.windows.getCurrentWindow(t=>{if(!t.success)return;let n=t.window.width,s=t.window.height;overwolf.utils.getMonitorsList(a=>{if(!t.success)return;let o,i,r=a.displays[0].width,l=a.displays[0].height;"center-center"==e?(o=r/2-n/2,i=l/2-s/2):"center-right"==e?(o=r-n-20,i=l/2-s/2):"center-left"==e&&(o=20,i=l/2-s/2),overwolf.windows.changePosition("in_game",Math.round(o),Math.round(i),e=>{e.success})})})}dragMove(e){e.onmousedown=(e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)})}async getWindowState(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;overwolf.windows.getWindowState(n,t)})}static async getCurrentInfo(){return new Promise(async e=>{overwolf.windows.getCurrentWindow(t=>{e(t.window)})})}obtain(){return new Promise((e,t)=>{const n=n=>{n&&"success"===n.status&&n.window&&n.window.id?(this._id=n.window.id,this._name||(this._name=n.window.name),e(n.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,n):overwolf.windows.getCurrentWindow(n)})}async assureObtained(){let e=this;return new Promise(async t=>(await e.obtain(),t()))}async internalClose(){let e=this;return new Promise(async(t,n)=>{await e.assureObtained();let s=e._id;overwolf.windows.close(s,e=>{e&&e.success?t():n(e)})})}}},"./odk-ts/timer.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;t.Timer=class{constructor(e,t){this._timerId=null,this.handleTimerEvent=(()=>{this._timerId=null,this._delegate.onTimer(this._id)}),this._delegate=e,this._id=t}static async wait(e){return new Promise(t=>{setTimeout(t,e)})}start(e){this.stop(),this._timerId=setTimeout(this.handleTimerEvent,e)}stop(){null!=this._timerId&&(clearTimeout(this._timerId),this._timerId=null)}}},"./windows/AppWindow.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const s=n("./odk-ts/ow-window.ts");t.AppWindow=class{constructor(e){this.maximized=!1,this.mainWindow=new s.OWWindow("background"),this.currWindow=new s.OWWindow(e);const t=document.getElementById("closeButton"),n=document.getElementById("maximizeButton"),a=document.getElementById("minimizeButton"),o=document.getElementById("exitMinimizeModal"),i=document.getElementById("cancel"),r=document.getElementById("exit"),l=document.getElementById("minimize"),d=document.getElementById("header");"in_game"!=e&&this.setDrag(d),t&&t.addEventListener("click",()=>{o.style.display="block"}),a&&a.addEventListener("click",()=>{this.currWindow.minimize()}),n&&n.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),i&&i.addEventListener("click",()=>{o.style.display="none"}),r&&r.addEventListener("click",()=>{this.mainWindow.close()}),l&&l.addEventListener("click",()=>{this.currWindow.minimize(),o.style.display="none"})}async getWindowState(){return await this.currWindow.getWindowState()}async setDrag(e){this.currWindow.dragMove(e)}}},"./windows/in_game/in_game.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n("./windows/AppWindow.ts"),a=n("./odk-ts/ow-games-events.ts"),o=n("./odk-ts/ow-hotkeys.ts"),i=n("./odk-ts/ow-window.ts"),r=n("./odk-ts/functions.ts"),l=n("./consts.ts");let d,c;localStorage.setItem("owAdsForceAdUnit","Ad_test");let u,m,g,w=[],y=[],h=[],_=[],p=[],f=0;const v=document.getElementById("team-blue-div"),M=document.getElementById("team-orange-div"),I=document.getElementById("in-lobby"),P=document.getElementById("in-match"),k=document.getElementById("searching"),A=document.getElementById("ranked-btn"),E=document.getElementById("casual-btn"),N=document.getElementById("season-btn"),b=document.getElementsByClassName("nav-btn"),S=document.getElementById("overwolf-status"),T=document.getElementById("internet-status"),O=["ranked","casual","season"],L=new i.OWWindow(l.windowNames.inGame),B=new r.BaseFunctions;H(),W();window.setInterval(H,6e4),window.setInterval(W,6e4);try{L.minimize().then(e=>L.changeWindowSize(400,600)).then(e=>B.initiateLSArrays()).then(e=>L.changeWindowLocation("center-right")).then(e=>L.maximize())}catch(e){C("error","window/function",e)}overwolf.settings.hotkeys.get(e=>{if(!e.success)return;let t=e.games[10826][0].binding,n=document.getElementById("shortcut-text");n.innerHTML="Unassigned"===t?"UNASSIGNED to show/hide the overlay":t+" to show/hide the overlay in game"});for(var K=0;K<b.length;K++)b[K].addEventListener("click",function(){for(K=0;K<b.length;K++)b[K].classList.remove("active");this.classList.add("active"),m=this.innerText.toLowerCase(),B.gamemodeNavBar(m)});function H(){fetch("https://game-events-status.overwolf.com/10826_prod.json").then(e=>e.json()).then(e=>{const t=e.state;S.style.display=1!==t?"block":"none",C("log","overwolfStatus",t)})}function W(){const e=navigator.onLine;T.style.display=!1===e?"block":"none",C("log","internetStatus",e)}function C(e,t,n){let s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}overwolf.games.inputTracking.onKeyDown.addListener(function(e){if("39"===e.key||"37"===e.key){"39"===e.key?2===f?f=0:f++:"37"===e.key&&(0===f?f=2:f--);for(var t=0;t<b.length;t++)b[t].classList.remove("active"),f===t&&b[t].classList.add("active");m=O[f],B.gamemodeNavBar(m)}});class G extends s.AppWindow{constructor(){super(l.windowNames.inGame),this.setToggleHotkeyBehavior(),this._rainbowGameEventsListener=new a.OWGamesEvents({onInfoUpdates:this.onInfoUpdates.bind(this),onNewEvents:this.onNewEvents.bind(this)},l.interestingFeatures)}static instance(){return this._instance||(this._instance=new G),this._instance}run(){this._rainbowGameEventsListener.start()}onInfoUpdates(e){if(C("log","infoUpdate",e),"me"in e&&(e.me.account_id&&(d=e.me.account_id),e.me.name&&(c=e.me.name)),"match_info"in e&&"game_mode"in e.match_info||"game_info"in e&&"phase"in e.game_info&&"lobby"===e.game_info.phase)if(e.match_info&&C("log","gameMode",u=e.match_info.game_mode),"NONE"!==u){try{L.changeWindowLocation("center-right")}catch(e){C("error","window",e)}let e;C("log","gameStatus",g="searching"),e=u.split("_")[2]?u.split("_")[1]+" "+u.split("_")[2]:u.split("_")[1],document.getElementById("match-making-text").innerHTML="matchmaking "+e,k.style.display="block"}else{try{L.minimize().then(e=>L.changeWindowSize(400,600)).then(e=>B.fixTableOrder()).then(e=>B.printDailyWeekly()).then(e=>L.changeWindowLocation("center-right")).then(e=>L.maximize())}catch(e){C("error","window/function",e)}C("log","gameStatus",g="lobby"),y=[],w=[],_=[],h=[];for(let e=0;e<5;e++){let t=null;(t=document.getElementById("team-blue").querySelector("#team-blue-"+e)).innerHTML="",(t=document.getElementById("team-orange").querySelector("#team-orange-"+e)).innerHTML=""}I.style.display="block",k.style.display="none",P.style.display="none",A.classList.add("active"),E.classList.remove("active"),N.classList.remove("active")}if("round"in e&&null!=e.round.number){try{L.minimize().then(e=>L.changeWindowSize(1600,900)).then(e=>B.fixTableOrder()).then(e=>B.printDailyWeekly()).then(e=>L.changeWindowLocation("center-center"))}catch(e){C("error","window/function",e)}C("log","gameStatus",g="in_game"),v.style.display="none",M.style.display="none",I.style.display="none",k.style.display="none",P.style.display="block",l.gameModesPVP.includes(u)&&(v.style.display="flex",M.style.display="flex",C("log","display","orange + blue"))}if("players"in e&&(null!=e.players.roster_0||null!=Object.values(e.players)[0])){try{L.changeWindowLocation("center-center")}catch(e){C("error","window",e)}for(let t=0;t<Object.keys(e.players).length;t++)if(null!==Object.values(e.players)[t]){const n=Object.values(e.players)[t],s=JSON.parse(JSON.parse(JSON.stringify(n))),a=Object.keys(e.players)[t].substr(7);if(s.name===c&&(C("log","latest stats",p=s),"Blue"===s.team?(v.after(M),l.gameModesPVE.includes(u)&&(v.style.display="flex",M.style.display="none",C("log","display","blue"))):"Orange"===s.team&&(M.after(v),l.gameModesPVE.includes(u)&&(v.style.display="none",M.style.display="flex",C("log","display","orange")))),!h.includes(a)&&!_.includes(a)){let e=[],t=[];w.includes(a)||y.includes(a)||("Blue"===s.team?w.push(a):"Orange"===s.team&&y.push(a)),"Blue"===s.team?(h.push(a),e[a]=w.indexOf(a),t[a]=document.getElementById("team-blue").querySelector("#team-blue-"+e[a]),""!==t[a].innerHTML&&(e[a]=w.indexOf(a),t[a]=document.getElementById("team-blue").querySelector("#team-blue-"+e[a]))):"Orange"===s.team&&(_.push(a),e[a]=y.indexOf(a),t[a]=document.getElementById("team-orange").querySelector("#team-orange-"+e[a]),""!==t[a].innerHTML&&(e[a]=y.indexOf(a),t[a]=document.getElementById("team-orange").querySelector("#team-orange-"+e[a])));try{B.searchPlayer(s.name,10).then(e=>B.printPlayer(a,s.name,s.team,e,s,t)).then(e=>B.fixTableOrder()).then(e=>B.gamemodeNavBar(m))}catch(e){C("error","search",e)}}}}else if("players"in e)for(let t=0;t<Object.keys(e.players).length;t++){const n=Object.keys(e.players)[t].substr(7);let s,a=[],o=[];if(w.includes(n)){a[n]=w.indexOf(n),o[n]=document.getElementById("team-blue").querySelector("#team-blue-"+a[n]),s="blue",h.splice(a[n],1);try{B.clearPlayer(n,s,o)}catch(e){C("error","remove",e)}}else if(y.includes(n)){a[n]=y.indexOf(n),o[n]=document.getElementById("team-orange").querySelector("#team-orange-"+a[n]),s="orange",_.splice(a[n],1);try{B.clearPlayer(n,s,o)}catch(e){C("error","remove",e)}}}}onNewEvents(e){if(C("log","infoEvent",e),l.gameModesPVP.includes(u)&&"events"in e&&"matchOutcome"===e.events[0].name){C("log","match outcome",e.events[0].data);try{B.initiateLSArrays(),B.localStoreMatch(u,e.events[0].data,p),B.printDailyWeekly()}catch(e){C("error","DailyWeekly",e)}}}async setToggleHotkeyBehavior(){o.OWHotkeys.onHotkeyDown(l.hotkeys.toggle,async e=>{console.log(`"info": { pressed hotkey for ${e.featureId} }`);const t=await this.getWindowState();"normal"===t.window_state||"maximized"===t.window_state?this.currWindow.minimize():"minimized"!==t.window_state&&"closed"!==t.window_state||this.currWindow.restore(),"in_game"===g?L.changeWindowLocation("center-center"):L.changeWindowLocation("center-right")})}}G.instance().run()}});
