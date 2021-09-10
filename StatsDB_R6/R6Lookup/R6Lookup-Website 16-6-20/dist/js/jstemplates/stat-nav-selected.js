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
