var color = ["#007A02", "#007402", "#006E02", "#006902", "#006302", "#005E02", "#005802", "#005202", "#004D02", "#004702", "#004202"];

increase(valLootbox, parseInt(valLootbox));

function increase(f, act) {
    for (var i = 0; i <= f; i = i + 0.1) {
        document.getElementById('lootboxprob-player').style.width = (i.toFixed(2) + '%');

        if (i >= 0 && i < 9) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[10];
        } else if (i >= 9 && i < 18) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[9];
        } else if (i >= 18 && i < 27) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[8];
        } else if (i >= 27 && i < 36) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[7];
        } else if (i >= 36 && i < 45) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[6];
        } else if (i >= 45 && i < 54) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[5];
        } else if (i >= 54 && i < 63) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[4];
        } else if (i >= 63 && i < 72) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[3];
        } else if (i >= 72 && i < 81) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[2];
        } else if (i >= 81 && i < 90) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[1];
        } else if (i >= 90) {
            document.getElementById('lootboxprob-player').style.backgroundColor = color[0];
        }
    }

    return f;
}
