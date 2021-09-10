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

//							SET CURSOR POSITION END
function setCaretPosition(ctrl, pos) {
    // Modern browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);

        // IE8 and below
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
// give text input id="cursor-end"
var input = document.getElementById('cursor-end');
setCaretPosition(input, input.value.length);

var color = ["#FFFF00", "#f9e203", "#f4c806", "#eeaf09", "#e9980d", "#e4820f", "#de6e12", "#d95b15", "#d34917", "#ce3919", "#c92a1c"];

increase(valHacker, parseInt(valHacker));

function increase(f, act) {
    for (var i = 0; i <= f; i = i + 0.1) {
        document.getElementById('hackerprob').style.width = (i.toFixed(2) + '%');

        if (i >= 0 && i < 9) {
            document.getElementById('hackerprob').style.backgroundColor = color[0];
        } else if (i >= 9 && i < 18) {
            document.getElementById('hackerprob').style.backgroundColor = color[1];
        } else if (i >= 18 && i < 27) {
            document.getElementById('hackerprob').style.backgroundColor = color[2];
        } else if (i >= 27 && i < 36) {
            document.getElementById('hackerprob').style.backgroundColor = color[3];
        } else if (i >= 36 && i < 45) {
            document.getElementById('hackerprob').style.backgroundColor = color[4];
        } else if (i >= 45 && i < 54) {
            document.getElementById('hackerprob').style.backgroundColor = color[5];
        } else if (i >= 54 && i < 63) {
            document.getElementById('hackerprob').style.backgroundColor = color[6];
        } else if (i >= 63 && i < 72) {
            document.getElementById('hackerprob').style.backgroundColor = color[7];
        } else if (i >= 72 && i < 81) {
            document.getElementById('hackerprob').style.backgroundColor = color[8];
        } else if (i >= 81 && i < 90) {
            document.getElementById('hackerprob').style.backgroundColor = color[9];
        } else if (i >= 90) {
            document.getElementById('hackerprob').style.backgroundColor = color[10];
        }
    }

    return f;
}
