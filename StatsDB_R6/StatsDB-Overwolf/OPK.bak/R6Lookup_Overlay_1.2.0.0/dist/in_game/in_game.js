!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWWindow=void 0;t.OWWindow=class{constructor(e=null){this._name=e,this._id=null}async restore(){let e=this;return console.log("window: restored"),new Promise(async t=>{await e.assureObtained();let n=e._id;overwolf.windows.restore(n,e=>{e.success||console.error(`[restore] - an error occurred, windowId=${n}, reason=${e.error}`),t()})})}async minimize(){let e=this;return console.log("window: minimized"),new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.minimize(n,()=>{}),t()})}async bringToFront(){let e=this;return console.log("window: minimized"),new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.bringToFront(n,!0,()=>{}),t()})}async maximize(){let e=this;return console.log("window: maximized"),new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.maximize(n,()=>{}),t()})}async hide(){let e=this;return console.log("window: hidden"),new Promise(async t=>{await e.assureObtained();let n=e._id;return overwolf.windows.hide(n,()=>{}),t()})}async close(){let e=this;return new Promise(async t=>{await e.assureObtained();e._id;const n=await this.getWindowState();return n.success||console.error(n),n.success&&"closed"!==n.window_state&&await this.internalClose(),t()})}async changeWindowSize(e,t,n){overwolf.windows.changeSize(e,t,n,e=>{e.success||console.error(e)})}async changeWindowLocation(e,t){overwolf.windows.getCurrentWindow(n=>{n.success||console.error(n);let s=n.window.width,a=n.window.height;overwolf.utils.getMonitorsList(o=>{n.success||console.error(n);let l,r,i=o.displays[0].width,d=o.displays[0].height;"center-center"===e?(l=i/2-s/2,r=d/2-a/2):"center-right"===e?(l=i-s-20,r=d/2-a/2):"center-left"===e&&(l=20,r=d/2-a/2),overwolf.windows.changePosition(t,Math.round(l),Math.round(r),e=>{e.success||console.error(e)})})})}dragMove(e){e.onmousedown=e=>{e.preventDefault(),overwolf.windows.dragMove(this._name)}}async getWindowState(){let e=this;return new Promise(async t=>{await e.assureObtained();let n=e._id;overwolf.windows.getWindowState(n,t)})}static async getCurrentInfo(){return new Promise(async e=>{overwolf.windows.getCurrentWindow(t=>{e(t.window)})})}obtain(){return new Promise((e,t)=>{const n=n=>{n&&"success"===n.status&&n.window&&n.window.id?(this._id=n.window.id,this._name||(this._name=n.window.name),e(n.window)):(this._id=null,t())};this._name?overwolf.windows.obtainDeclaredWindow(this._name,n):overwolf.windows.getCurrentWindow(n)})}async assureObtained(){let e=this;return new Promise(async t=>(await e.obtain(),t()))}async internalClose(){let e=this;return new Promise(async(t,n)=>{await e.assureObtained();let s=e._id;overwolf.windows.close(s,e=>{e&&e.success?t():n(e)})})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tableStats=t.gameModesPVE=t.gameModesPVP=t.hotkeys=t.windowNames=t.interestingFeatures2=t.interestingFeatures1=t.rainbowClassId=void 0;t.rainbowClassId=10826;t.interestingFeatures1=["gep_internal","game_info","match","match_info","roster","kill","death","me"];t.interestingFeatures2=["gep_internal","game_info","match","match_info"];t.windowNames={desktop:"desktop",inLobby:"in_lobby",inGame:"in_game",inLobbyDesktopOnly:"in_lobby_desktop_only",inGameDesktopOnly:"in_game_desktop_only",settings:"settings_in_game",settingsDesktopOnly:"settings_desktop"};t.hotkeys={toggle:"showhide"};t.gameModesPVE=["OPERATIONS","MATCHMAKING_PVE_LONEWOLF","MATCHMAKING_PVE","MATCHMAKING_PVE_PARTY"];t.gameModesPVP=["MATCHMAKING_PVP_NEWCOMER","MATCHMAKING_PVP","MATCHMAKING_PVP_EVENT","MATCHMAKING_PVP_UNRANKED","MATCHMAKING_PVP_RANKED","CUSTOMGAME_PVP","CUSTOMGAME_PVP_DEDICATED"];t.tableStats=["rankedpvp_kills","rankedpvp_death","rankedpvp_matchwon","rankedpvp_matchlost","casualpvp_kills","casualpvp_death","casualpvp_matchwon","casualpvp_matchlost","kills","deaths","wins","losses"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppWindow=void 0;const s=n(0);t.AppWindow=class{constructor(e,t){this.maximized=!1,this.mainWindow=new s.OWWindow("background"),this.currWindow=new s.OWWindow(e),this.settingsWindow=new s.OWWindow(t);const n=document.getElementById("closeButton"),a=document.getElementById("maximizeButton"),o=document.getElementById("minimizeButton"),l=document.getElementById("settingsButton"),r=document.getElementById("closeWindowButton"),i=document.getElementById("exitMinimizeModal"),d=document.getElementById("cancel"),c=document.getElementById("exit"),m=document.getElementById("minimize"),u=document.getElementById("header");"desktop"!==e&&"settings_desktop"!==e&&'"1"'!==localStorage.desktopOnly||this.setDrag(u),n&&n.addEventListener("click",()=>{i.style.display="block"}),r&&r.addEventListener("click",()=>{this.currWindow.close()}),o&&o.addEventListener("click",()=>{this.currWindow.minimize()}),a&&a.addEventListener("click",()=>{this.maximized?this.currWindow.restore():this.currWindow.maximize(),this.maximized=!this.maximized}),l&&l.addEventListener("click",()=>{this.settingsWindow.restore()}),d&&d.addEventListener("click",()=>{i.style.display="none"}),c&&c.addEventListener("click",()=>{this.mainWindow.close()}),m&&m.addEventListener("click",()=>{this.currWindow.minimize(),i.style.display="none"})}async getWindowState(){return await this.currWindow.getWindowState()}async setDrag(e){this.currWindow.dragMove(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controllers=void 0;t.Controllers=class{setShortcutText(e){overwolf.settings.hotkeys.get(t=>{t.success||console.error(t);const n=t.games[10826][0].binding;e.innerHTML="Unassigned"===n?"UNASSIGNED to show/hide the overlay":n+" to show/hide the overlay in game",this.logLine("log","shortcut",n)})}getOverwolfStatus(e){fetch("https://game-events-status.overwolf.com/10826_prod.json").then(e=>e.json()).then(t=>{const n=t.state;2===n?(e.style.display="block",e.innerHTML="<h4>Due to a recent game patch, some functions might not work - we’ll fix it shortly</h4>"):3===n?(e.style.display="block",e.innerHTML="<h4>Due to a recent game patch, Overwolf app API has stopped working - we’ll fix it shortly</h4>"):1===n&&(e.style.display="none",e.innerHTML=""),this.logLine("log","overwolfStatus",n)})}getInternetStatus(e){const t=navigator.onLine;e.style.display=!1===t?"block":"none",this.logLine("log","internetStatus",t)}logLine(e,t,n){const s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Localstorage=void 0;const s=document.querySelectorAll("#setting-dtable .custom-option"),a=document.querySelectorAll("#setting-dmaximize .custom-option"),o=document.querySelectorAll("#setting-ddisplay .custom-option");let l,r,i=localStorage.desktopOnly;t.Localstorage=class{initiateLocalStorage(){return new Promise(async e=>{localStorage.settings||localStorage.setItem("settings",JSON.stringify({table:"0",maximize:"0"})),(!localStorage.valuesTable||Object.keys(JSON.parse(localStorage.valuesTable)).length<8)&&localStorage.setItem("valuesTable",JSON.stringify({0:"LVL",1:"Kills",2:"Deaths",3:"K/D",4:"Wins",5:"Losses",6:"W/L",7:"Hacker %"})),localStorage.desktopOnly||localStorage.setItem("desktopOnly",'"0"'),r=JSON.parse(localStorage.settings),l=JSON.parse(localStorage.valuesTable),e()})}changeSetting(e){const t=e.getAttribute("value"),n=e.getAttribute("settingid");if("setting-valueTable"===n){const n=e.getAttribute("index");l[n]=t,this.setStorage("valuesTable",l)}"setting-dtable"===n&&(r.table=t,this.setStorage("settings",r)),"setting-ddisplay"===n&&this.setStorage("desktopOnly",t),"setting-dmaximize"===n&&(r.maximize=t,this.setStorage("settings",r))}setStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}setSettings(){var e;const t=[s[r.table],a[r.maximize],o[i.replace(/"/g,"")]];for(let n=0;n<t.length;n++){const s=t[n];null===(e=s.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),s.classList.add("selected"),s.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=s.textContent}this.setDefault()}setDefault(){var e;for(let t=0;t<8;t++){const n=l[t].replace(/[ /]/g,"-")+t,s=document.getElementById(n);null===(e=s.parentNode.querySelector(".custom-option.selected"))||void 0===e||e.classList.remove("selected"),s.classList.add("selected"),s.closest(".custom-select").querySelector(".custom-select__trigger span").textContent=s.textContent}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWGamesEvents=void 0;const s=n(6);t.OWGamesEvents=class{constructor(e,t){this.onInfoUpdates=e=>{this._delegate.onInfoUpdates(e.info)},this.onNewEvents=e=>{this._delegate.onNewEvents(e)},this._delegate=e,this._requiredFeatures=t}async getInfo(){return new Promise(e=>{overwolf.games.events.getInfo(e)})}async setRequiredFeatures(){let e,t=1;for(;t>0;){if(e=await new Promise(e=>{overwolf.games.events.setRequiredFeatures(this._requiredFeatures,e)}),"success"===e.status)return console.log("setRequiredFeatures(): success: "+JSON.stringify(e,null,2)),e.supportedFeatures.length>0;await s.Timer.wait(3e3),t++}return console.warn("setRequiredFeatures(): failure after "+t+" tries"+JSON.stringify(e,null,2)),!1}registerEvents(){this.unRegisterEvents(),overwolf.games.events.onInfoUpdates2.addListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.addListener(this.onNewEvents)}unRegisterEvents(){overwolf.games.events.onInfoUpdates2.removeListener(this.onInfoUpdates),overwolf.games.events.onNewEvents.removeListener(this.onNewEvents)}async start(){console.log("[ow-game-events] START"),this.registerEvents(),await this.setRequiredFeatures();const{res:e,status:t}=await this.getInfo();e&&"success"===t&&this.onInfoUpdates({info:e})}stop(){console.log("[ow-game-events] STOP"),this.unRegisterEvents()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;t.Timer=class{constructor(e,t){this._timerId=null,this.handleTimerEvent=()=>{this._timerId=null,this._delegate.onTimer(this._id)},this._delegate=e,this._id=t}static async wait(e){return new Promise(t=>{setTimeout(t,e)})}start(e){this.stop(),this._timerId=setTimeout(this.handleTimerEvent,e)}stop(){null!=this._timerId&&(clearTimeout(this._timerId),this._timerId=null)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OWHotkeys=void 0;t.OWHotkeys=class{constructor(){}static getHotkeyText(e){return new Promise((t,n)=>{overwolf.settings.getHotKey(e,e=>{e&&e.success&&e.hotkey||t("UNASSIGNED"),t(e.hotkey)})})}static onHotkeyDown(e,t){overwolf.settings.registerHotKey(e,t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;const s=document.getElementById("kd-circle-daily"),a=document.getElementById("wl-circle-daily"),o=document.getElementById("kd-circle-daily-text"),l=document.getElementById("wl-circle-daily-text"),r=document.getElementById("kd-circle-weekly"),i=document.getElementById("wl-circle-weekly"),d=document.getElementById("kd-circle-weekly-text"),c=document.getElementById("wl-circle-weekly-text");t.Database=class{createDatabase(){const e=this;return new Promise(async t=>{const n=indexedDB.open("days");let s;n.onerror=function(t){e.logLine("error","database",n.error),s=n.error},n.onupgradeneeded=function(e){n.result.createObjectStore("days",{keyPath:"date"})};const a=indexedDB.open("week");a.onerror=function(t){e.logLine("error","database",a.error),s=a.error},a.onupgradeneeded=function(e){a.result.createObjectStore("week",{keyPath:"week"})},t()})}initiateIDB(){const e=new Date,t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),n=this,s=indexedDB.open("days");s.onerror=function(e){n.logLine("error","database",s.error)},s.onsuccess=function(e){const a=s.result,o=a.transaction("days","readwrite").objectStore("days").get(t);o.onerror=function(e){n.logLine("error","database",o.error)},o.onsuccess=function(e){if(!o.result){a.transaction("days","readwrite").objectStore("days").add({date:t,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}})}}};const a=indexedDB.open("week");a.onerror=function(e){n.logLine("error","database",a.error)},a.onsuccess=function(e){const t=a.result,s=t.transaction("week","readwrite").objectStore("week").get("week");s.onerror=function(e){n.logLine("error","database",s.error)},s.onsuccess=function(e){if(!s.result){let e={};const n=new Date,s=n.getDate()+","+(n.getMonth()+1)+","+n.getFullYear();e[0]={date:s,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}};for(let t=1;t<7;t++){n.setDate(n.getDate()-1);const s=n.getDate()+","+(n.getMonth()+1)+","+n.getFullYear();e[t]={date:s,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}}}e.week="week";t.transaction("week","readwrite").objectStore("week").add({week:"week",value:e})}}}}localStoreMatch(e,t,n){let s=new Date;const a=s.getDate()+","+(s.getMonth()+1)+","+s.getFullYear(),o=this,l=indexedDB.open("days");l.onerror=function(e){o.logLine("error","database",l.error)},l.onsuccess=function(s){const r=l.result,i=r.transaction("days","readwrite").objectStore("days").get(a);i.onerror=function(e){o.logLine("error","database",i.error)},i.onsuccess=function(s){const a=i.result;0!==n.kills&&(a[e].kills+=n.kills),0!==n.deaths&&(a[e].deaths+=n.deaths),"victory"===t?a[e].wins++:"defeat"===t&&a[e].losses++;r.transaction("days","readwrite").objectStore("days").put(a)}};const r=indexedDB.open("week");r.onerror=function(e){o.logLine("error","database",r.error)},r.onsuccess=function(s){const l=r.result,i=l.transaction("week","readwrite").objectStore("week").get("week");i.onerror=function(e){o.logLine("error","database",i.error)},i.onsuccess=function(s){const r=i.result.value,d=Object.values(r);let c,m=null;for(let e=0;e<7;e++)if(d[e].date===a){m=e;break}c=null!==m?d[m]:{date:a,MATCHMAKING_PVP_RANKED:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP:{kills:0,deaths:0,wins:0,losses:0},MATCHMAKING_PVP_UNRANKED:{kills:0,deaths:0,wins:0,losses:0}},0!==n.kills&&(c[e].kills+=n.kills),0!==n.deaths&&(c[e].deaths+=n.deaths),"victory"===t?c[e].wins++:"defeat"===t&&c[e].losses++,null!==m?d[m]=c:(d.unshift(c),d.pop());const u=Object.assign({},d);o.logLine("log","weekResult",u);l.transaction("week","readwrite").objectStore("week").put({week:"week",value:u})}}}printDailyWeekly(){let e=new Date;const t=e.getDate()+","+(e.getMonth()+1)+","+e.getFullYear(),n=this,m=indexedDB.open("days");m.onerror=function(e){n.logLine("error","database",m.error)},m.onsuccess=function(e){const r=m.result.transaction("days","readwrite").objectStore("days").get(t);r.onerror=function(e){n.logLine("error","database",r.error)},r.onsuccess=function(e){const t=r.result,i=t.MATCHMAKING_PVP.kills+t.MATCHMAKING_PVP_RANKED.kills+t.MATCHMAKING_PVP_UNRANKED.kills,d=t.MATCHMAKING_PVP.deaths+t.MATCHMAKING_PVP_RANKED.deaths+t.MATCHMAKING_PVP_UNRANKED.deaths,c=t.MATCHMAKING_PVP.losses+t.MATCHMAKING_PVP_RANKED.losses+t.MATCHMAKING_PVP_UNRANKED.losses,m=t.MATCHMAKING_PVP.wins+t.MATCHMAKING_PVP_RANKED.wins+t.MATCHMAKING_PVP_UNRANKED.wins;let u,g,y,p;0!==d?(y=Math.round(100*(i/d+Number.EPSILON))/100,u=Math.round(i/d*33)+", 100"):0!==d&&0!==i?(y="INF",u="100, 100"):(y="0.00",u="0, 100"),m+c!==0?(p=Math.round(m/(m+c)*100),g=p+", 100"):(p="0",g="0, 100"),s.setAttribute("stroke-dasharray",u),a.setAttribute("stroke-dasharray",g),o.innerHTML=parseFloat(y).toFixed(2),l.innerHTML=p+"%",n.logLine("log","dailyKD",y),n.logLine("log","dailyWL",p)}};const u=indexedDB.open("week");u.onerror=function(e){n.logLine("error","database",u.error)},u.onsuccess=function(e){const t=u.result.transaction("week","readwrite").objectStore("week").get("week");t.onerror=function(e){n.logLine("error","database",t.error)},t.onsuccess=function(e){const s=t.result.value;let a,o,l,m,u=0,g=0,y=0,p=0;for(let e=0;e<7;e++)u+=s[e].MATCHMAKING_PVP.kills,g+=s[e].MATCHMAKING_PVP.deaths,p+=s[e].MATCHMAKING_PVP.wins,y+=s[e].MATCHMAKING_PVP.losses,u+=s[e].MATCHMAKING_PVP_RANKED.kills,g+=s[e].MATCHMAKING_PVP_RANKED.deaths,p+=s[e].MATCHMAKING_PVP_RANKED.wins,y+=s[e].MATCHMAKING_PVP_RANKED.losses,u+=s[e].MATCHMAKING_PVP_UNRANKED.kills,g+=s[e].MATCHMAKING_PVP_UNRANKED.deaths,p+=s[e].MATCHMAKING_PVP_UNRANKED.wins,y+=s[e].MATCHMAKING_PVP_UNRANKED.losses;0!==g?(l=Math.round(100*(u/g+Number.EPSILON))/100,a=Math.round(u/g*33)+", 100"):0===g&&0!==u?(l="INF",a="100, 100"):(l="0.00",a="0, 100"),p+y!==0?(m=Math.round(p/(p+y)*100),o=m+", 100"):(m="0",o="0, 100"),r.setAttribute("stroke-dasharray",a),i.setAttribute("stroke-dasharray",o),d.innerHTML=parseFloat(l).toFixed(2),c.innerHTML=m+"%",n.logLine("log","weeklyKD",l),n.logLine("log","weeklyWL",m)}}}logLine(e,t,n){const s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.allPlayerStats=t.PlayerTable=void 0;const s=n(16),a=n(1),o=document.getElementById("team-blue-lastnode"),l=document.getElementById("team-orange-lastnode"),r=document.getElementById("team-blue-tbody"),i=document.getElementById("team-orange-tbody");let d,c={};t.allPlayerStats=c;const m=new s.PlayerCompare;t.PlayerTable=class{async searchPlayer(e,t){const n=this;return fetch(encodeURI("https://www.r6lookup.com/getStats/getStatsAPI.php?username="+e+"&platform=uplay&appcode=809965"),{cache:"no-cache"}).then(e=>e.json()).then(s=>{if(s.profileId)return s;if(t>0)return n.searchPlayer(e,t-1);throw new Error(s)}).catch(console.error)}printPlayer(e,t,n,s,o,l,r){d=r;for(let e=0;e<a.tableStats.length;e++)s[a.tableStats[e]]||(s[a.tableStats[e]]=0);const i={LVL:{0:s.level,1:s.level,2:s.level},"Hacker %":{0:s.hacker_percentage+"%",1:s.hacker_percentage+"%",2:s.hacker_percentage+"%"},Kills:{0:s.kills,1:s.rankedpvp_kills,2:s.casualpvp_kills},Deaths:{0:s.deaths,1:s.rankedpvp_death,2:s.casualpvp_death},"K/D":{0:s.seasonalpvp_kd.toFixed(2),1:s.rankedpvp_kd.toFixed(2),2:s.casualpvp_kd.toFixed(2)},Wins:{0:s.wins,1:s.rankedpvp_matchwon,2:s.casualpvp_matchwon},Losses:{0:s.losses,1:s.rankedpvp_matchlost,2:s.casualpvp_matchlost},"W/L":{0:s.seasonalpvp_winloss.toFixed(1)+"%",1:s.rankedpvp_winloss.toFixed(1)+"%",2:s.casualpvp_winloss.toFixed(1)+"%"},"Max MMR":{0:Math.trunc(s.max_mmr),1:Math.trunc(s.max_mmr),2:Math.trunc(s.max_mmr)},"HS/K":{0:s.generalpvp_headshotratio.toFixed(2),1:s.generalpvp_headshotratio.toFixed(2),2:s.generalpvp_headshotratio.toFixed(2)},"PEN/K":{0:s.generalpvp_penetrationratio.toFixed(2),1:s.generalpvp_penetrationratio.toFixed(2),2:s.generalpvp_penetrationratio.toFixed(2)},"Games played":{0:s.wins+s.losses,1:s.rankedpvp_matchwon+s.rankedpvp_matchlost,2:s.casualpvp_matchwon+s.casualpvp_matchlost},"MMR change":{0:s.last_match_mmr_change,1:s.last_match_mmr_change,2:s.last_match_mmr_change},"Alpha %":{0:Math.trunc(s.lootbox_probability/100)+"%",1:Math.trunc(s.lootbox_probability/100)+"%",2:Math.trunc(s.lootbox_probability/100)+"%"}};c[n]||(c[n]={}),c[n][e]=s,m.teamsCompare(c,d);let u=JSON.parse(localStorage.valuesTable);const g='<td class="name"><div class="img-mmr"><img src="'+s.rankInfo.image+'" alt="rank">'+s.mmr+"</div><span>"+t+'</span></td><td class="ranked current" id="ranked0'+e+'">'+i[u[0]][1]+'</td><td class="casual" id="casual0'+e+'">'+i[u[0]][2]+'</td><td class="seasonal" id="seasonal0'+e+'">'+i[u[0]][0]+'</td><td class="ranked current" id="ranked1'+e+'">'+i[u[1]][1]+'</td><td class="casual" id="casual1'+e+'">'+i[u[1]][2]+'</td><td class="seasonal" id="seasonal1'+e+'">'+i[u[1]][0]+'</td><td class="ranked current" id="ranked2'+e+'">'+i[u[2]][1]+'</td><td class="casual" id="casual2'+e+'">'+i[u[2]][2]+'</td><td class="seasonal" id="seasonal2'+e+'">'+i[u[2]][0]+'</td><td class="ranked current" id="ranked3'+e+'">'+i[u[3]][1]+'</td><td class="casual" id="casual3'+e+'">'+i[u[3]][2]+'</td><td class="seasonal" id="seasonal3'+e+'">'+i[u[3]][0]+'</td><td class="ranked current" id="ranked4'+e+'">'+i[u[4]][1]+'</td><td class="casual" id="casual4'+e+'">'+i[u[4]][2]+'</td><td class="seasonal" id="seasonal4'+e+'">'+i[u[4]][0]+'</td><td class="ranked current" id="ranked5'+e+'">'+i[u[5]][1]+'</td><td class="casual" id="casual5'+e+'">'+i[u[5]][2]+'</td><td class="seasonal" id="seasonal5'+e+'">'+i[u[5]][0]+'</td><td class="ranked current" id="ranked6'+e+'">'+i[u[6]][1]+'</td><td class="casual" id="casual6'+e+'">'+i[u[6]][2]+'</td><td class="seasonal" id="seasonal6'+e+'">'+i[u[6]][0]+'</td><td class="ranked current" id="ranked7'+e+'">'+i[u[7]][1]+'</td><td class="casual" id="casual7'+e+'">'+i[u[7]][2]+'</td><td class="seasonal" id="seasonal7'+e+'">'+i[u[7]][0]+"</td>";l[e]&&(l[e].innerHTML=g,l[e].style.display="table-row",l[e].style.borderBottom="1px solid var(--main-text-color)",this.logLine("log","updated","id: "+e+", trId: "+l[e].id+", name: "+t+", team: "+n))}clearPlayer(e,t,n){let s,a;"blue"===t?(s=document.getElementById("team-blue-tbody"),a=document.getElementById("team-blue-lastnode"),delete c.Blue[e]):"orange"===t&&(s=document.getElementById("team-orange-tbody"),a=document.getElementById("team-orange-lastnode"),delete c.Orange[e]),m.teamsCompare(c,d),n[e]&&(n[e].innerHTML="",n[e].style.display="table-row",n[e].style.borderBottom="none",s.insertBefore(n[e],a),this.logLine("log","left","id: "+e+", trId: "+n[e].id))}fixTableOrder(){for(let e=0;e<5;e++){const t=document.getElementById("team-blue").querySelector("#team-blue-"+e),n=document.getElementById("team-orange").querySelector("#team-orange-"+e);""===t.innerHTML.trim()&&r.insertBefore(t,o),""===n.innerHTML.trim()&&i.insertBefore(n,l)}}gamemodeNavBar(e){for(let t=0;t<8;t++)for(let n=0;n<10;n++){const s=document.getElementById("ranked"+t+n),a=document.getElementById("casual"+t+n),o=document.getElementById("seasonal"+t+n);s&&a&&o&&("ranked"===e?(s.classList.add("current"),a.classList.remove("current"),o.classList.remove("current")):"casual"===e?(s.classList.remove("current"),a.classList.add("current"),o.classList.remove("current")):"season"===e&&(s.classList.remove("current"),a.classList.remove("current"),o.classList.add("current")))}}logLine(e,t,n){const s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}}},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(2),a=n(5),o=n(7),l=n(0),r=n(9),i=n(8),d=n(3),c=n(4),m=n(1),u=n(9),g=document.getElementById("team-blue-div"),y=document.getElementById("team-orange-div"),p=document.getElementById("team-compare-div"),h=(document.getElementById("ranked-btn"),document.getElementById("casual-btn"),document.getElementById("season-btn"),document.getElementsByClassName("nav-btn")),w=["season","ranked","casual"],_=document.getElementsByClassName("player-tr");let v,k,f,M,I,b,E,S,P=[],L=[],B=[],T=[],A=0,N=[];S='"0"'===localStorage.desktopOnly?new l.OWWindow(m.windowNames.inGame):new l.OWWindow(m.windowNames.inGameDesktopOnly);const H=new r.PlayerTable,O=new i.Database,x=new d.Controllers;(new c.Localstorage).initiateLocalStorage(),'"0"'===localStorage.desktopOnly?(b="in_game",E="center-center"):b="in_game_desktop_only";const D=JSON.parse(localStorage.valuesTable),K=JSON.parse(localStorage.settings);S.minimize().then(e=>S.changeWindowSize(b,1600,900)).then(e=>{'"0"'===localStorage.desktopOnly&&(S.changeWindowLocation(E,b),"1"===K.maximize&&S.restore(b))});x.setShortcutText(document.getElementById("shortcut-text")),overwolf.settings.hotkeys.onChanged.addListener(e=>{x.setShortcutText(document.getElementById("shortcut-text"))}),function(){A=K.table;for(var e=0;e<h.length;e++)h[e].classList.remove("active"),A==e&&h[e].classList.add("active");I=w[A],H.gamemodeNavBar(I)}();O.createDatabase().then(e=>O.initiateIDB()).then(e=>O.printDailyWeekly());overwolf.games.events.getInfo((function(e){v=e.res.me.account_id,k=e.res.me.name}));for(let e=0;e<Object.keys(D).length;e++){const t=document.querySelectorAll(".value-"+e);for(let n=0;n<t.length;n++)t[n].innerHTML=D[e]}for(var C=0;C<h.length;C++)h[C].addEventListener("click",(function(){for(I=this.innerText.toLowerCase(),C=0;C<h.length;C++)h[C].classList.remove("active");this.classList.add("active"),H.gamemodeNavBar(I)}));overwolf.games.inputTracking.onKeyDown.addListener(e=>{if("39"===e.key||"37"===e.key){"39"===e.key?2===A?A=0:A++:"37"===e.key&&(0===A?A=2:A--),I=w[A];for(var t=0;t<h.length;t++)h[t].classList.remove("active"),A===t&&h[t].classList.add("active");H.gamemodeNavBar(I)}});const W=document.getElementsByClassName("player-tr");function G(e){e?(document.getElementById("table-body").style.display="block",document.getElementById("detailed-body").style.display="none"):(document.getElementById("table-body").style.display="none",document.getElementById("detailed-body").style.display="block")}document.getElementById("detailed-back-btn").addEventListener("click",(function(){G(!0)}));let V=-1,F=!1;overwolf.games.inputTracking.onKeyDown.addListener(e=>{if("40"===e.key||"38"===e.key||"13"===e.key){document.getElementsByClassName("name").length;for(C=0;C<_.length;C++)_[C].classList.remove("selected");if("13"===e.key)!1===F?(F=!0,j(_[V])):!0===F&&(F=!1,G(!0));else if("40"===e.key){do{9===V?V=0:V++}while(0==_[V].getElementsByClassName("name").length);!0===F&&j(_[V])}else if("38"===e.key){do{0===V?V=9:V--}while(0==_[V].getElementsByClassName("name").length);!0===F&&j(_[V])}_[V].classList.add("selected")}});for(let e=0;e<W.length;e++)W[e].addEventListener("click",(function(){j(this)}));function j(e){const t=e.id,n=e.childNodes[1].id;let s=t.split("-")[1];s="blue"===s?"Blue":"Orange";const a=parseInt(n.match(".0(.*)")[1][0]),o=u.allPlayerStats[s][a];console.log(o);let l=parseInt(o.generalpvp_timeplayed+o.generalpve_timeplayed,10),r=Math.floor(l/3600),i=Math.floor(l/60)%60;document.getElementById("detailedStats-profileImg").src="https://ubisoft-avatars.akamaized.net/"+o.profileId+"/default_146_146.png",document.getElementById("detailedStats-name").innerHTML=o.nameOnPlatform,document.getElementById("detailedStats-level").innerHTML=o.level,document.getElementById("detailedStats-timePlayed").innerHTML=r+"h "+i+"m",document.getElementById("detailedStats-hsKills").innerHTML=o.generalpvp_headshot,document.getElementById("detailedStats-hs").innerHTML=o.generalpvp_headshotratio.toFixed(2),document.getElementById("detailedStats-penKills").innerHTML=o.generalpvp_penetrationkills,document.getElementById("detailedStats-pen").innerHTML=o.generalpvp_penetrationratio.toFixed(2),document.getElementById("season-previous-img").src=o.rankInfo.image,0!==o.max_mmr?document.getElementById("season-max-mmr").innerHTML=o.max_mmr+"<span> Max Mmr</span>":document.getElementById("season-max-mmr").innerHTML=o.mmr+"<span> Max Mmr</span>",o.next_rank_mmr<o.mmr&&0!==o.next_rank_mmr?document.getElementById("season-rank-bar").style.width="100%":document.getElementById("season-rank-bar").style.width=(o.mmr-o.previous_rank_mmr)/(o.next_rank_mmr-o.previous_rank_mmr)*100+"%",0!==o.rank&&o.next_rank_mmr>o.mmr?document.getElementById("season-rank-bar-text").innerHTML=o.mmr+" / "+o.next_rank_mmr:document.getElementById("season-rank-bar-text").innerHTML=o.mmr,document.getElementById("season-next-img").src=o.nextRankInfo.image,document.getElementById("season-max-img").src=o.maxRankInfo.image,document.getElementById("detailedStats-kills").innerHTML=o.kills,document.getElementById("detailedStats-deaths").innerHTML=o.deaths,document.getElementById("detailedStats-kd").innerHTML=o.seasonalpvp_kd.toFixed(2),document.getElementById("detailedStats-wins").innerHTML=o.wins,document.getElementById("detailedStats-losses").innerHTML=o.losses,document.getElementById("detailedStats-wl").innerHTML=o.seasonalpvp_winloss.toFixed(2),document.getElementById("detailedStats-hacker-perc").innerHTML=o.hacker_percentage+"%",l=parseInt(o.rankedpvp_timeplayed,10),r=Math.floor(l/3600),i=Math.floor(l/60)%60,document.getElementById("detailedStats-timePlayed-ranked").innerHTML=r+"h "+i+"m",document.getElementById("detailedStats-kills-ranked").innerHTML=o.rankedpvp_kills,document.getElementById("detailedStats-deaths-ranked").innerHTML=o.rankedpvp_death,document.getElementById("detailedStats-kd-ranked").innerHTML=o.rankedpvp_kd.toFixed(2),document.getElementById("detailedStats-matchplayed-ranked").innerHTML=o.rankedpvp_matchplayed,document.getElementById("detailedStats-wins-ranked").innerHTML=o.rankedpvp_matchwon,document.getElementById("detailedStats-losses-ranked").innerHTML=o.rankedpvp_matchlost,document.getElementById("detailedStats-wl-ranked").innerHTML=o.rankedpvp_winloss.toFixed(2),l=parseInt(o.casualpvp_timeplayed,10),r=Math.floor(l/3600),i=Math.floor(l/60)%60,document.getElementById("detailedStats-timePlayed-casual").innerHTML=r+"h "+i+"m",document.getElementById("detailedStats-kills-casual").innerHTML=o.casualpvp_kills,document.getElementById("detailedStats-deaths-casual").innerHTML=o.casualpvp_death,document.getElementById("detailedStats-kd-casual").innerHTML=o.casualpvp_kd.toFixed(2),document.getElementById("detailedStats-matchplayed-casual").innerHTML=o.casualpvp_matchplayed,document.getElementById("detailedStats-wins-casual").innerHTML=o.casualpvp_matchwon,document.getElementById("detailedStats-losses-casual").innerHTML=o.casualpvp_matchlost,document.getElementById("detailedStats-wl-casual").innerHTML=o.casualpvp_winloss.toFixed(2),document.getElementById("detailedStats-distancetravelled").innerHTML=Math.floor(o.generalpvp_distancetravelled/1e3)+"km",document.getElementById("detailedStats-barricades-deployed").innerHTML=o.generalpvp_barricadedeployed,document.getElementById("detailedStats-reinforcements-deployed").innerHTML=o.generalpvp_reinforcementdeploy,document.getElementById("detailedStats-suicides").innerHTML=o.generalpvp_suicide,document.getElementById("detailedStats-revives").innerHTML=o.generalpvp_revive,document.getElementById("detailedStats-dbno").innerHTML=o.generalpvp_dbno,document.getElementById("detailedStats-dbno-assists").innerHTML=o.generalpvp_dbnoassists,document.getElementById("detailedStats-gadgets-destroyed").innerHTML=o.generalpvp_gadgetdestroy,document.getElementById("detailedStats-kd-general").innerHTML=o.generalpvp_kd,document.getElementById("detailedStats-kills-general").innerHTML=o.generalpvp_kills,document.getElementById("detailedStats-deaths-general").innerHTML=o.generalpvp_death,document.getElementById("detailedStats-wl-general").innerHTML=o.generalpvp_wl,document.getElementById("detailedStats-wins-general").innerHTML=o.generalpvp_matchwon,document.getElementById("detailedStats-losses-general").innerHTML=o.generalpvp_winloss,document.getElementById("detailedStats-matches-played-general").innerHTML=o.generalpvp_matchplayed,document.getElementById("detailedStats-assists-general").innerHTML=o.generalpvp_killassists,document.getElementById("detailedStats-melee-kills-general").innerHTML=o.generalpvp_meleekills,document.getElementById("detailedStats-blind-kills-general").innerHTML=o.generalpvp_blindkills,G(!1)}function R(e,t,n){const s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}class z extends s.AppWindow{constructor(){'"0"'===localStorage.desktopOnly?super(m.windowNames.inGame,"settings_in_game"):super(m.windowNames.inGameDesktopOnly,"settings_desktop"),'"1"'===localStorage.desktopOnly&&(S.restore(b),S.changeWindowSize("in_game_desktop_only",1600,900)),this.setToggleHotkeyBehavior(),this._rainbowGameEventsListener=new a.OWGamesEvents({onInfoUpdates:this.onInfoUpdates.bind(this),onNewEvents:this.onNewEvents.bind(this)},m.interestingFeatures1)}static instance(){return this._instance||(this._instance=new z),this._instance}run(){this._rainbowGameEventsListener.start()}onInfoUpdates(e){if(R("log","infoUpdate",e),"match_info"in e&&"game_mode"in e.match_info&&(f=e.match_info.game_mode,R("log","gameMode",f)),"round"in e&&null!=e.round.number&&(g.style.display="none",y.style.display="none",m.gameModesPVP.includes(f)&&(g.style.display="flex",y.style.display="flex",R("log","display","orange + blue"))),!("players"in e)||null==e.players.roster_0&&null==Object.values(e.players)[0]){if("players"in e)for(let t=0;t<Object.keys(e.players).length;t++){const n=Object.keys(e.players)[t].substr(7);let s,a=[],o=[],l=[];if(P.includes(n)){a[n]=P.indexOf(n),l[n]=document.getElementById("team-blue").querySelector("#team-blue-"+a[n]),s="blue",o[n]=B.indexOf("ID"+n),delete B[o[n]];try{H.clearPlayer(n,s,l)}catch(e){R("error","remove",e)}}else if(L.includes(n)){a[n]=L.indexOf(n),l[n]=document.getElementById("team-orange").querySelector("#team-orange-"+a[n]),s="orange",o[n]=T.indexOf("ID"+n),delete T[o[n]];try{H.clearPlayer(n,s,l)}catch(e){R("error","remove",e)}}}}else for(let t=0;t<Object.keys(e.players).length;t++)if(null!==Object.values(e.players)[t]){const n=Object.values(e.players)[t],s=JSON.parse(JSON.parse(JSON.stringify(n))),a=Object.keys(e.players)[t].substr(7);if(s.name===k&&(N=s,R("log","latest stats",N),"Blue"===s.team?(p.before(g),p.after(y),m.gameModesPVE.includes(f)&&(g.style.display="flex",y.style.display="none",R("log","display","blue"))):"Orange"===s.team&&(p.before(y),p.after(g),m.gameModesPVE.includes(f)&&(g.style.display="none",y.style.display="flex",R("log","display","orange"))),M=s.team),!B.includes("ID"+a)&&!T.includes("ID"+a)){let e=[],t=[];P.includes(a)||L.includes(a)||("Blue"===s.team?P.push(a):"Orange"===s.team&&L.push(a)),"Blue"===s.team?(B.push("ID"+a),e[a]=P.indexOf(a),t[a]=document.getElementById("team-blue").querySelector("#team-blue-"+e[a]),(!t[a]||t[a]&&""!==t[a].innerHTML)&&(t[a]=document.getElementById("team-blue").querySelector("#team-blue-"+e[a]))):"Orange"===s.team&&(T.push("ID"+a),e[a]=L.indexOf(a),t[a]=document.getElementById("team-orange").querySelector("#team-orange-"+e[a]),(!t[a]||t[a]&&""!==t[a].innerHTML)&&(t[a]=document.getElementById("team-orange").querySelector("#team-orange-"+e[a])));H.searchPlayer(s.name,10).then(e=>H.printPlayer(a,s.name,s.team,e,s,t,M)).then(e=>H.fixTableOrder()).then(e=>H.gamemodeNavBar(I))}}}onNewEvents(e){if(R("log","infoEvent",e),m.gameModesPVP.includes(f)&&"events"in e&&"matchOutcome"===e.events[0].name&&("MATCHMAKING_PVP"===f||"MATCHMAKING_PVP_RANKED"===f||"MATCHMAKING_PVP_UNRANKED"===f)){S.minimize().then(e=>O.initiateIDB()).then(t=>O.localStoreMatch(f,e.events[0].data,N))}}async setToggleHotkeyBehavior(){o.OWHotkeys.onHotkeyDown(m.hotkeys.toggle,async e=>{if(console.log(`'info': { pressed hotkey for ${e.featureId} }`),'"0"'===localStorage.desktopOnly){const e=await this.getWindowState();for("normal"===e.window_state||"maximized"===e.window_state?this.currWindow.minimize():"minimized"!==e.window_state&&"closed"!==e.window_state||this.currWindow.restore(),F=!1,G(!0),C=0;C<_.length;C++)_[C].classList.remove("selected");V=-1,S.changeWindowLocation(E,b)}else S.changeWindowSize("in_game_desktop_only",1600,900)})}}z.instance().run()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerCompare=void 0;const s=document.querySelectorAll(".blueStat"),a=document.querySelectorAll(".orangeStat"),o=document.querySelectorAll(".teamVSText.aggro");t.PlayerCompare=class{async teamsCompare(e,t){const n=Object.keys(e).length;let l={};for(let r=0;r<n;r++){const n=Object.values(e)[r],i=Object.keys(e)[r];l[i]={},l[i].mmr=[],l[i].kd=[],l[i].wl=[],l[i].gamesPlayed=[],Object.keys(n).forEach(e=>{const t=n[e];l[i].mmr.push(t.mmr),l[i].kd.push(t.seasonalpvp_kd),l[i].wl.push(t.seasonalpvp_winloss),l[i].gamesPlayed.push(t.wins+t.losses)});const d=this.calculateAvgStat(l[i].mmr,"trunc",null),c=this.calculateAvgStat(l[i].kd,"tofixed",2),m=this.calculateAvgStat(l[i].wl,"tofixed",1),u=this.calculateAvgStat(l[i].gamesPlayed,"trunc",null);this.oddsWinning(e,l,i);if(document.getElementById("team"+i+"Mmr").innerHTML=d,document.getElementById("team"+i+"Kd").innerHTML=c,document.getElementById("team"+i+"Wl").innerHTML=m+"%",document.getElementById("team"+i+"GamesPlayed").innerHTML=u,t)for(let e=0;e<s.length;e++)"Blue"===t?(o[e].before(s[e]),o[e].after(a[e])):"Orange"===t&&(o[e].before(a[e]),o[e].after(s[e]))}}calculateAvgStat(e,t,n){let s=0;if("object"==typeof e)for(let t=0;t<e.length;t++)s+=e[t];return s/=e.length,"trunc"===t?s=Math.trunc(s).toString():"tofixed"===t&&(s=s.toFixed(n)),s}async oddsWinning(e,t,n){let s,a,o,l,r,i,d={Blue:0,Orange:0},c=0,m=0;Object.keys(e).forEach(n=>{Object.keys(e[n]).forEach(s=>{const a=e[n][s];let o=1,l=1,r=1;a.rank>0&&a.wins+a.losses>40&&(a.seasonalpvp_kd>1.4?l=a.gamesPlayed>150?2.5:2.2:a.seasonalpvp_kd>1.2?l=1.7:a.seasonalpvp_kd>1?l=1.5:a.seasonalpvp_kd<1&&(l=1.2),a.generalpvp_kills>100&&(a.generalpvp_headshotratio>.55?r=1.3:a.generalpvp_headshotratio>.5?r=1.2:a.generalpvp_headshotratio>.47&&(r=1.1)),a.wins+a.losses>100&&(a.seasonalpvp_winloss>75?o=1.3:a.seasonalpvp_winloss>63?o=1.2:a.seasonalpvp_winloss>50&&(o=1.1))),d[n]+=l*(a.rank/3),d[n]+=r*(a.rank/3),d[n]+=o*(a.rank/5),t.Blue?(c+=parseFloat(t.Blue.mmr)/1e3,c+=2*parseFloat(t.Blue.kd),d[n]+=c):t.Orange&&(m+=parseFloat(t.Orange.mmr)/1e3,m+=2*parseFloat(t.Orange.kd),d[n]+=m)})}),d.Blue>d.Orange?(s=(d.Blue-d.Orange)/(d.Blue+d.Orange)*100,l=!1):(s=(d.Orange-d.Blue)/(d.Orange+d.Blue)*100,l=!0),o=50+s/2,a=50-s/2,!0===l?(r=a,i=o):!1===l&&(r=o,i=a),document.getElementById("oddsBlue").innerHTML=r.toFixed(1)+"%",document.getElementById("oddsOrange").innerHTML=i.toFixed(1)+"%"}logLine(e,t,n){const s='"'+t+'": '+JSON.stringify(n,void 0,2);"log"===e?console.log(s):"error"===e?console.error(s):"warn"===e&&console.warn(s)}}}]);