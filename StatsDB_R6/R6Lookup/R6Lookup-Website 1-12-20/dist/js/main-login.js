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

const toLoginButton = document.getElementById('to-login-btn');
const backLoginButton = document.getElementById('back-login-btn');
const toSignupButton = document.getElementById('to-signup-btn');
const toPassforgotButton = document.getElementById('to-passforgot-btn');
const loginContainer = document.getElementById('main-login-page');
const signupContainer = document.getElementById('main-signup-page');
const passforgotContainer = document.getElementById('main-newpass-page');

toLoginButton.addEventListener('click', () => {
    loginContainer.style.display = 'flex';
    signupContainer.style.display = 'none';
    passforgotContainer.style.display = 'none';
});
backLoginButton.addEventListener('click', () => {
    loginContainer.style.display = 'flex';
    signupContainer.style.display = 'none';
    passforgotContainer.style.display = 'none';
});
toSignupButton.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'flex';
    passforgotContainer.style.display = 'none';
});
toPassforgotButton.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'none';
    passforgotContainer.style.display = 'flex';
});

function closeConformation() {
    document.getElementById('conformation-div').style.display = "none";
}

function inputLenght() {
    var username = document.getElementById('username').InnerHTML;
    if (username.length > 15) {
        document.getElementById('errorUsername').style.display = 'none';
    }
}
