/*! sortable.js 0.8.0 */
(function(){var a,b,c,d,e,f,g;a="table[data-sortable]",d=/^-?[£$¤]?[\d,.]+%?$/,g=/^\s+|\s+$/g,c=["click"],f="ontouchstart"in document.documentElement,f&&c.push("touchstart"),b=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},e={init:function(b){var c,d,f,g,h;for(null==b&&(b={}),null==b.selector&&(b.selector=a),d=document.querySelectorAll(b.selector),h=[],f=0,g=d.length;g>f;f++)c=d[f],h.push(e.initTable(c));return h},initTable:function(a){var b,c,d,f,g,h;if(1===(null!=(h=a.tHead)?h.rows.length:void 0)&&"true"!==a.getAttribute("data-sortable-initialized")){for(a.setAttribute("data-sortable-initialized","true"),d=a.querySelectorAll("th"),b=f=0,g=d.length;g>f;b=++f)c=d[b],"false"!==c.getAttribute("data-sortable")&&e.setupClickableTH(a,c,b);return a}},setupClickableTH:function(a,d,f){var g,h,i,j,k,l;for(i=e.getColumnType(a,f),h=function(b){var c,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;if(b.handled===!0)return!1;for(b.handled=!0,m="true"===this.getAttribute("data-sorted"),n=this.getAttribute("data-sorted-direction"),h=m?"ascending"===n?"descending":"ascending":i.defaultSortDirection,p=this.parentNode.querySelectorAll("th"),s=0,w=p.length;w>s;s++)d=p[s],d.setAttribute("data-sorted","false"),d.removeAttribute("data-sorted-direction");if(this.setAttribute("data-sorted","true"),this.setAttribute("data-sorted-direction",h),o=a.tBodies[0],l=[],m){for(D=o.rows,v=0,z=D.length;z>v;v++)g=D[v],l.push(g);for(l.reverse(),B=0,A=l.length;A>B;B++)k=l[B],o.appendChild(k)}else{for(r=null!=i.compare?i.compare:function(a,b){return b-a},c=function(a,b){return a[0]===b[0]?a[2]-b[2]:i.reverse?r(b[0],a[0]):r(a[0],b[0])},C=o.rows,j=t=0,x=C.length;x>t;j=++t)k=C[j],q=e.getNodeValue(k.cells[f]),null!=i.comparator&&(q=i.comparator(q)),l.push([q,k,j]);for(l.sort(c),u=0,y=l.length;y>u;u++)k=l[u],o.appendChild(k[1])}return"function"==typeof window.CustomEvent&&"function"==typeof a.dispatchEvent?a.dispatchEvent(new CustomEvent("Sortable.sorted",{bubbles:!0})):void 0},l=[],j=0,k=c.length;k>j;j++)g=c[j],l.push(b(d,g,h));return l},getColumnType:function(a,b){var c,d,f,g,h,i,j,k,l,m,n;if(d=null!=(l=a.querySelectorAll("th")[b])?l.getAttribute("data-sortable-type"):void 0,null!=d)return e.typesObject[d];for(m=a.tBodies[0].rows,h=0,j=m.length;j>h;h++)for(c=m[h],f=e.getNodeValue(c.cells[b]),n=e.types,i=0,k=n.length;k>i;i++)if(g=n[i],g.match(f))return g;return e.typesObject.alpha},getNodeValue:function(a){var b;return a?(b=a.getAttribute("data-value"),null!==b?b:"undefined"!=typeof a.innerText?a.innerText.replace(g,""):a.textContent.replace(g,"")):""},setupTypes:function(a){var b,c,d,f;for(e.types=a,e.typesObject={},f=[],c=0,d=a.length;d>c;c++)b=a[c],f.push(e.typesObject[b.name]=b);return f}},e.setupTypes([{name:"numeric",defaultSortDirection:"descending",match:function(a){return a.match(d)},comparator:function(a){return parseFloat(a.replace(/[^0-9.-]/g,""),10)||0}},{name:"date",defaultSortDirection:"ascending",reverse:!0,match:function(a){return!isNaN(Date.parse(a))},comparator:function(a){return Date.parse(a)||0}},{name:"alpha",defaultSortDirection:"ascending",match:function(){return!0},compare:function(a,b){return a.localeCompare(b)}}]),setTimeout(e.init,0),"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof exports?module.exports=e:window.Sortable=e}).call(this);

//							OPEN AND CLOSE SEARCHBAR
const search = document.querySelector('.search');
const searchBar = document.querySelector('.search-bar');
const searchClose = document.querySelector('.close-search-bar');
search.addEventListener('click', () => {
    searchBar.classList.toggle('hide-search-bar');
    search.classList.toggle('hide-search-bar');
    searchClose.classList.toggle('hide-search-bar')
});
searchClose.addEventListener('click', () => {
    searchBar.classList.toggle('hide-search-bar');
    search.classList.toggle('hide-search-bar');
    searchClose.classList.toggle('hide-search-bar');
});

var lootboxColor = ["#32CD32", "#2BC42B", "#24BC25", "#1EB41F", "#19AB1A", "#13A315", "#0F9B10", "#0A920C", "#068A08", "#038205", "#007A02"];
increase(valLootbox, parseInt(valLootbox), lootboxColor, "lootboxprob-player");

var hackerColor = ["#FFFF00", "#f9e203", "#f4c806", "#eeaf09", "#e9980d", "#e4820f", "#de6e12", "#d95b15", "#d34917", "#ce3919", "#c92a1c"];
increase(valHacker, parseInt(valHacker), hackerColor, "hackerprob");

function increase(f, act, color, mode) {
    for (var i = 0; i <= f; i = i + 0.1) {
        document.getElementById(mode).style.width = (i.toFixed(2) + '%');

        if (i >= 0 && i < 9) {
            document.getElementById(mode).style.backgroundColor = color[0];
        } else if (i >= 9 && i < 18) {
            document.getElementById(mode).style.backgroundColor = color[1];
        } else if (i >= 18 && i < 27) {
            document.getElementById(mode).style.backgroundColor = color[2];
        } else if (i >= 27 && i < 36) {
            document.getElementById(mode).style.backgroundColor = color[3];
        } else if (i >= 36 && i < 45) {
            document.getElementById(mode).style.backgroundColor = color[4];
        } else if (i >= 45 && i < 54) {
            document.getElementById(mode).style.backgroundColor = color[5];
        } else if (i >= 54 && i < 63) {
            document.getElementById(mode).style.backgroundColor = color[6];
        } else if (i >= 63 && i < 72) {
            document.getElementById(mode).style.backgroundColor = color[7];
        } else if (i >= 72 && i < 81) {
            document.getElementById(mode).style.backgroundColor = color[8];
        } else if (i >= 81 && i < 90) {
            document.getElementById(mode).style.backgroundColor = color[9];
        } else if (i >= 90) {
            document.getElementById(mode).style.backgroundColor = color[10];
        }
    }

    return f;
}

document.getElementById('copyBtn-js').addEventListener('click', copy);
function copy() {
    var cutId = document.getElementById("cutId-js");
    var textArea = document.createElement("textarea");
    textArea.value = cutId.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

if (valCustBack) {
    document.body.style.backgroundImage = "url('" + valCustBack + "')";
    document.body.style.backgroundSize = "cover";
}
if (valCustCol) {
    document.getElementById('username-set-color').style.color = valCustCol;
}

// CHANGE MAIN TABS
var mainNavTabs = document.getElementsByClassName("main-nav-tab");
for (var i = 0; i < mainNavTabs.length; i++) {
    mainNavTabs[i].onclick = function() {

        var el = mainNavTabs[0];
        while (el) {
            if (el.tagName === "DIV") {
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }

        this.classList.add("active");
    };
}

function loadPlayerStats() {
    document.getElementById("overview-stats").style.display = "block";
    document.getElementById("season-stats").style.display = "none";
    document.getElementById("operator-stats").style.display = "none";
    document.getElementById("weapon-stats").style.display = "none";
}
function loadSeasons() {
    document.getElementById("overview-stats").style.display = "none";
    document.getElementById("season-stats").style.display = "block";
    document.getElementById("operator-stats").style.display = "none";
    document.getElementById("weapon-stats").style.display = "none";
}
function loadOperators() {
    document.getElementById("overview-stats").style.display = "none";
    document.getElementById("season-stats").style.display = "none";
    document.getElementById("operator-stats").style.display = "block";
    document.getElementById("weapon-stats").style.display = "none";
}
function loadWeapons() {
    document.getElementById("overview-stats").style.display = "none";
    document.getElementById("season-stats").style.display = "none";
    document.getElementById("operator-stats").style.display = "none";
    document.getElementById("weapon-stats").style.display = "block";
}

// CHANGE SECUNDARY TABS OVERVIEW
var secNavTabs = document.getElementsByClassName("sec-nav-tab");
for (var i = 0; i < secNavTabs.length; i++) {
    secNavTabs[i].onclick = function() {
        var el = secNavTabs[0];
        while (el) {
            if (el.tagName === "DIV") {
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }

        this.classList.add("active");
    };
}
function loadOverview() {
    document.getElementById("overview-stats-tab").style.display = "block";
    document.getElementById("pvp-stats").style.display = "none";
    document.getElementById("pve-stats").style.display = "none";
}
function loadPvp() {
    document.getElementById("overview-stats-tab").style.display = "none";
    document.getElementById("pvp-stats").style.display = "block";
    document.getElementById("pve-stats").style.display = "none";
}
function loadPve() {
    document.getElementById("overview-stats-tab").style.display = "none";
    document.getElementById("pvp-stats").style.display = "none";
    document.getElementById("pve-stats").style.display = "block";
}

// CHANGE SECUNDARY TABS OPERATORS
var secNavOpTabs = document.getElementsByClassName("sec-nav-op-tab");
for (var i = 0; i < secNavOpTabs.length; i++) {
    secNavOpTabs[i].onclick = function() {
        var el = secNavOpTabs[0];
        while (el) {
            if (el.tagName === "DIV") {
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }

        this.classList.add("active");
    };
}

// CHANGE ATTACKERS DEFENDERS
var allOperators = document.querySelectorAll(".operator-tr");

function loadOp(mode) {
    if (mode === "allOperators") {
        clickedOp = document.querySelectorAll(".operator-tr");
    } else if (mode === "defenders") {
        clickedOp = document.querySelectorAll(".def-tr");
    } else {
        clickedOp = document.querySelectorAll(".atk-tr");
    }
    for (var i = 0; i < allOperators.length; i++) {
        allOperators[i].style.display = "none";
    }
    for (var i = 0; i < clickedOp.length; i++) {
        clickedOp[i].style.display = "flex";
    }
}

if (window.history.replaceState) {
    window.history.replaceState( null, null, window.location.href );
}

var operatorPopups = document.querySelectorAll("[data-operator]");
function operatorPopupDiv(operatorCount) {
    if (operatorPopups[operatorCount].style.display !== "table-cell") {
        operatorPopups[operatorCount].style.display = "table-cell";
    } else {
        operatorPopups[operatorCount].style.display = "none";
    }
}

var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
};
// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right'];
// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;
// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});
function activateCheats() {
    var url = window.location.href + "&displaydata=true";
    window.location.replace(url);
}

(function()
{
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    if (!cookieAlert) {
        return;
    }

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    // Show the alert if we cant find the "acceptCookies" cookie
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    // When clicking on the agree button, create a 1 year
    // cookie to remember user's choice and close the banner
    acceptCookies.addEventListener("click", function() {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");
    });

    // Cookie functions from w3schools
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();

// CHANGE WEAPONTYPES
var allWeapons = document.querySelectorAll(".weapon-tr");
function loadWeapon(mode) {
    if (mode === "all_guns") {
        clickedWeapon = document.querySelectorAll(".weapon-tr");
    } else if (mode === "assault_rifle") {
        clickedWeapon = document.querySelectorAll(".assault_rifle-tr");
    } else if (mode === "submachine_gun"){
        clickedWeapon = document.querySelectorAll(".submachine_gun-tr");
    } else if (mode === "light_machine_gun") {
        clickedWeapon = document.querySelectorAll(".light_machine_gun-tr");
    } else if (mode === "marksman_rifle"){
        clickedWeapon = document.querySelectorAll(".marksman_rifle-tr");
    } else if (mode === "handgun") {
        clickedWeapon = document.querySelectorAll(".handgun-tr");
    } else if (mode === "shotgun"){
        clickedWeapon = document.querySelectorAll(".shotgun-tr");
    } else if (mode === "machine_pistol") {
        clickedWeapon = document.querySelectorAll(".machine_pistol-tr");
    } else if (mode === "launcher"){
        clickedWeapon = document.querySelectorAll(".launcher-tr");
    }
    for (var i = 0; i < allWeapons.length; i++) {
        allWeapons[i].style.display = "none";
    }
    for (var i = 0; i < clickedWeapon.length; i++) {
        clickedWeapon[i].style.display = "flex";
    }
}

function searchW() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("weapon-info-search-id");
  filter = input.value.toUpperCase();
  table = document.getElementById("weapon-table-id");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchO() {
  $(".op-remove").removeClass("active");
  $(".op-add").addClass("active");
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("operator-info-search-id");
  filter = input.value.toUpperCase();
  table = document.getElementById("operator-table-id");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Get selected season from button
$("span.compare-arrow").hide();
$("button").click(function() {
    $(".compare-hide").hide();
    $(".season-max-rank-text").css("margin-left", "0px");
    if ($(this).hasClass("compare")) {
        var selected = $(this).val();
        var selected2 = $.parseJSON($(this).attr('season'));
        $(".compare-show-"+selected2).show();

        var kd = value[selected]['kills']/value[selected]['deaths'];
        var win = value[selected]['wins']/(value[selected]['wins']+value[selected]['losses'])*100;
        var kd2 = value[selected2]['kills']/value[selected2]['deaths'];
        var win2 = value[selected2]['wins']/(value[selected2]['wins']+value[selected2]['losses'])*100;

        if (isNaN(kd)) {
            var kd = 0.00;
        }
        if (isNaN(win)) {
            var win = 0.00;
        }
        if (isNaN(kd2)) {
            var kd2 = 0.00;
        }
        if (isNaN(win2)) {
            var win2 = 0.00;
        }
        if (value[selected]['max_mmr'] === 0) {
            var max_mmr = value[selected]['mmr'];
        } else {
            var max_mmr = value[selected]['max_mmr'];
        }
        if (value[selected2]['max_mmr'] === 0) {
            var max_mmr2 = value[selected2]['mmr'];
        } else {
            var max_mmr2 = value[selected2]['max_mmr'];
        }
        document.getElementById(selected2 + "-kd").textContent = kd.toFixed(2);
        document.getElementById(selected2 + "-win%").textContent = win.toFixed(2);
        document.getElementById(selected2 + "-max_mmr").textContent = max_mmr.toFixed(0);
        document.getElementById(selected2 + "-kills").textContent = value[selected]['kills'];
        document.getElementById(selected2 + "-wins").textContent = value[selected]['wins'];
        document.getElementById(selected2 + "-deaths").textContent = value[selected]['deaths'];
        document.getElementById(selected2 + "-losses").textContent = value[selected]['losses'];
        $("#" + selected2 + "-max_rank_img").attr("src", value[selected]["maxRankInfo"]["image"]);
        $("#" + selected2 + "-max_rank_img").show();
        $("#" + selected2 + "-max_rank_text").css("margin-left", "25px");

        // K/D
        if (kd > kd2) {
            $("span#"+ selected2 +"-kd-img-up").show();
        } else if (kd == kd2) {
            $("span#"+ selected2 +"-kd-img-equal").show();
        } else {
            $("span#"+ selected2 +"-kd-img-down").show();
        }
        // Win%
        if (win > win2) {
            $("span#"+ selected2 +"-win-img-up").show();
        } else if (win == win2) {
            $("span#"+ selected2 +"-win-img-equal").show();
        } else {
            $("span#"+ selected2 +"-win-img-down").show();
        }
        // Max mmr
        if (max_mmr > max_mmr2) {
            $("span#"+ selected2 +"-max_mmr-img-up").show();
        } else if (max_mmr == max_mmr2) {
            $("span#"+ selected2 +"-max_mmr-img-equal").show();
        } else {
            $("span#"+ selected2 +"-max_mmr-img-down").show();
        }
        // Kills
        if (value[selected]['kills'] > value[selected2]['kills']) {
            $("span#"+ selected2 +"-kills-img-up").show();
        } else if (value[selected]['kills'] == value[selected2]['kills']) {
            $("span#"+ selected2 +"-kills-img-equal").show();
        } else {
            $("span#"+ selected2 +"-kills-img-down").show();
        }
        // Wins
        if (value[selected]['wins'] > value[selected2]['wins']) {
            $("span#"+ selected2 +"-wins-img-up").show();
        } else if (value[selected]['wins'] == value[selected2]['wins']) {
            $("span#"+ selected2 +"-wins-img-equal").show();
        } else {
            $("span#"+ selected2 +"-wins-img-down").show();
        }
        // Deaths
        if (value[selected]['deaths'] > value[selected2]['deaths']) {
            $("span#"+ selected2 +"-deaths-img-up").show();
        } else if (value[selected]['deaths'] == value[selected2]['deaths']) {
            $("span#"+ selected2 +"-deaths-img-equal").show();
        } else {
            $("span#"+ selected2 +"-deaths-img-down").show();
        }
        // Losses
        if (value[selected]['losses'] > value[selected2]['losses']) {
            $("span#"+ selected2 +"-losses-img-up").show();
        } else if (value[selected]['losses'] == value[selected2]['losses']) {
            $("span#"+ selected2 +"-losses-img-equal").show();
        } else {
            $("span#"+ selected2 +"-losses-img-down").show();
        }
        // Max mmr
        if (value[selected]['max_rank'] > value[selected2]['max_rank']) {
            $("span#"+ selected2 +"-max_rank-img-up").show();
        } else if (value[selected]['max_rank'] == value[selected2]['max_rank']) {
            $("span#"+ selected2 +"-max_rank-img-equal").show();
        } else {
            $("span#"+ selected2 +"-max_rank-img-down").show();
        }
        console.log(value[selected]['max_rank'], value[selected2]['max_rank'])
    }
});
