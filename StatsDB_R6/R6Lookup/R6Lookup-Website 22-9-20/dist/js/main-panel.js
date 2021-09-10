/*! sortable.js 0.8.0 */
(function(){var a,b,c,d,e,f,g;a="table[data-sortable]",d=/^-?[£$¤]?[\d,.]+%?$/,g=/^\s+|\s+$/g,c=["click"],f="ontouchstart"in document.documentElement,f&&c.push("touchstart"),b=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},e={init:function(b){var c,d,f,g,h;for(null==b&&(b={}),null==b.selector&&(b.selector=a),d=document.querySelectorAll(b.selector),h=[],f=0,g=d.length;g>f;f++)c=d[f],h.push(e.initTable(c));return h},initTable:function(a){var b,c,d,f,g,h;if(1===(null!=(h=a.tHead)?h.rows.length:void 0)&&"true"!==a.getAttribute("data-sortable-initialized")){for(a.setAttribute("data-sortable-initialized","true"),d=a.querySelectorAll("th"),b=f=0,g=d.length;g>f;b=++f)c=d[b],"false"!==c.getAttribute("data-sortable")&&e.setupClickableTH(a,c,b);return a}},setupClickableTH:function(a,d,f){var g,h,i,j,k,l;for(i=e.getColumnType(a,f),h=function(b){var c,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;if(b.handled===!0)return!1;for(b.handled=!0,m="true"===this.getAttribute("data-sorted"),n=this.getAttribute("data-sorted-direction"),h=m?"ascending"===n?"descending":"ascending":i.defaultSortDirection,p=this.parentNode.querySelectorAll("th"),s=0,w=p.length;w>s;s++)d=p[s],d.setAttribute("data-sorted","false"),d.removeAttribute("data-sorted-direction");if(this.setAttribute("data-sorted","true"),this.setAttribute("data-sorted-direction",h),o=a.tBodies[0],l=[],m){for(D=o.rows,v=0,z=D.length;z>v;v++)g=D[v],l.push(g);for(l.reverse(),B=0,A=l.length;A>B;B++)k=l[B],o.appendChild(k)}else{for(r=null!=i.compare?i.compare:function(a,b){return b-a},c=function(a,b){return a[0]===b[0]?a[2]-b[2]:i.reverse?r(b[0],a[0]):r(a[0],b[0])},C=o.rows,j=t=0,x=C.length;x>t;j=++t)k=C[j],q=e.getNodeValue(k.cells[f]),null!=i.comparator&&(q=i.comparator(q)),l.push([q,k,j]);for(l.sort(c),u=0,y=l.length;y>u;u++)k=l[u],o.appendChild(k[1])}return"function"==typeof window.CustomEvent&&"function"==typeof a.dispatchEvent?a.dispatchEvent(new CustomEvent("Sortable.sorted",{bubbles:!0})):void 0},l=[],j=0,k=c.length;k>j;j++)g=c[j],l.push(b(d,g,h));return l},getColumnType:function(a,b){var c,d,f,g,h,i,j,k,l,m,n;if(d=null!=(l=a.querySelectorAll("th")[b])?l.getAttribute("data-sortable-type"):void 0,null!=d)return e.typesObject[d];for(m=a.tBodies[0].rows,h=0,j=m.length;j>h;h++)for(c=m[h],f=e.getNodeValue(c.cells[b]),n=e.types,i=0,k=n.length;k>i;i++)if(g=n[i],g.match(f))return g;return e.typesObject.alpha},getNodeValue:function(a){var b;return a?(b=a.getAttribute("data-value"),null!==b?b:"undefined"!=typeof a.innerText?a.innerText.replace(g,""):a.textContent.replace(g,"")):""},setupTypes:function(a){var b,c,d,f;for(e.types=a,e.typesObject={},f=[],c=0,d=a.length;d>c;c++)b=a[c],f.push(e.typesObject[b.name]=b);return f}},e.setupTypes([{name:"numeric",defaultSortDirection:"descending",match:function(a){return a.match(d)},comparator:function(a){return parseFloat(a.replace(/[^0-9.-]/g,""),10)||0}},{name:"date",defaultSortDirection:"ascending",reverse:!0,match:function(a){return!isNaN(Date.parse(a))},comparator:function(a){return Date.parse(a)||0}},{name:"alpha",defaultSortDirection:"ascending",match:function(){return!0},compare:function(a,b){return a.localeCompare(b)}}]),setTimeout(e.init,0),"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof exports?module.exports=e:window.Sortable=e}).call(this);

$(".nav-tab").click(function() {
    // Get text inside span
    var valueRaw = $(this).text().toLowerCase();
    var value = valueRaw.replace(/\s/g, '');
    // var value = $.trim(valueRaw);
    // Remove all active on spans
    $(".main-panel-page").find(".active").removeClass("active");
    // add class active on clicked button
    $(this).addClass("active");
    // Removes active on sec-nav-bar
    $(".sec-nav-bar").find(".active").removeClass("active");
    // Add class active to sec-nav-bar
    $(".sec-nav-bar").find("."+value).addClass("active");
    // Add active to first div in row-(value)-items
    $("div.row-"+value+"-items .sec-nav-tab:first").addClass("active");
    // Add content for first div
    var valueLoadRaw = $(".sec-nav-bar .sec-nav-tab.active").text().toLowerCase();
    var valueLoad = valueLoadRaw.replace(/\s/g, '');
    // var valueLoad = $.trim(valueLoadRaw);
    $("." + valueLoad).addClass("active");
    var urlString = window.location.href;
    var url = urlString.split("/");
    if (value == 'customize' || value == 'requests') {
        newUrl = url[0] + '//' + url[2] + '/' + url[3] + '/' + value;
    } else {
        newUrl = url[0] + '//' + url[2] + '/' + url[3] + '/' + value + '/' + valueLoad;
    }
    window.history.pushState('', '', newUrl);
});

$(".sec-nav-tab").click(function() {
    var valueRaw = $(this).text().toLowerCase();
    var value = valueRaw.replace(/\s/g, '');
    $("div .row-content").removeClass("active");
    $(".row-items").find(".active").removeClass("active");
    $(this).addClass("active");
    // var value = $.trim(valueRaw);
    $("." + value).addClass("active");
    var urlString = window.location.href;
    var url = urlString.split("/");
    var newUrl = url[0] + '//' + url[2] + '/' + url[3] + '/' + url[4] + '/' + value;
    window.history.pushState('', '', newUrl);
});

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

function submit() {
     document.getElementById("regionForm").submit();
}

if (window.history.replaceState) {
    window.history.replaceState( null, null, window.location.href );
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

function savedStats(valuethis) {
    var array = document.querySelectorAll(".more-stats");
    if (array[valuethis].style.display == 'flex') {
        for (var i = 0; i < array.length; i++) {
            array[i].style.display = 'none';
        }
    } else {
        for (var i = 0; i < array.length; i++) {
            array[i].style.display = 'none';
        }
        array[valuethis].style.display = 'flex';
    }
}
function edit() {
    var array = document.querySelectorAll(".remove");

    if (array[0].style.display == 'block') {
        for (var i = 0; i < array.length; i++) {
            array[i].style.display = 'none';
        }
    } else {
        for (var i = 0; i < array.length; i++) {
            array[i].style.display = 'block';
        }
    }
}
