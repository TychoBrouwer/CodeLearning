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

// CHANGE SECUNDARY TABS
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
