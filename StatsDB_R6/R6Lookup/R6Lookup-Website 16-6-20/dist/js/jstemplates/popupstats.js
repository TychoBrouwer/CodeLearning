var operatorPopups = document.querySelectorAll("[data-operator]");
function operatorPopupDiv(operatorCount) {
    if (operatorPopups[operatorCount].style.display !== "table-cell") {
        operatorPopups[operatorCount].style.display = "table-cell";
    } else {
        operatorPopups[operatorCount].style.display = "none";
    }
}
