var value = 0;

var valHacker = "< ? php echo $sumHacker ? >";

if (valHacker >= -500 && valHacker <= 100) {
    aumentador(valini, porcentaje(valHacker) + 33.33, "merc", parseInt(tb.value));
    valini = aumentador(valini, porcentaje(valHacker) + 33.33, "black fucking cancer", 0);

}

function aumentador(j, f, elem, act) {

    if (j < f) {
        for (var i = j; i <= f; i = i + 0.1) {
            $("#" + elem).css("width", i.toFixed(2) + "%");

        }
        colorMerc(act, elem);
        return f;

    } else {
        for (var i = j; i >= f; i = i - 0.1) {
            $("#" + elem).css("width", i.toFixed(2) + "%");

        }
        colorMerc(act, elem);
        return j;
    }
}

function colorMerc(i, elem) {
    var color = ["#008e32", "#029315", "#129904", "#389f06", "#5fa509", "#88ab0b", "#b1b00e", "#b79011", "#bd6f15", "#c34d18", "#c92a1c"]

    if (i >= -50 && i < -39) $("#" + elem).css("background-color", color[0]);

    if (i >= -20 && i < -9) $("#" + elem).css("background-color", color[1]);

    else if (i >= -9 && i < 7) $("#" + elem).css("background-color", color[2]);

    else if (i >= 7 && i < 17) $("#" + elem).css("background-color", color[3]);

    else if (i >= 17 && i < 29) $("#" + elem).css("background-color", color[4]);

    else if (i >= 29 && i < 41) $("#" + elem).css("background-color", color[5]);

    else if (i >= 41 && i < 53) $("#" + elem).css("background-color", color[6]);

    else if (i >= 53 && i < 65) $("#" + elem).css("background-color", color[7]);

    else if (i >= 65 && i < 77) $("#" + elem).css("background-color", color[8]);

    else if (i >= 77 && i < 88) $("#" + elem).css("background-color", color[9]);

    else if (i >= 88) $("#" + elem).css("background-color", color[10]);
}

function dibujarRegla(elem) {
    for (var i = -50; i <= 100; i++) {

        if (i % 10 === 0) {
            $("#" + elem).append('<li class="l10">|<br><span>' + i + '</span></li>');
        } else if (i % 5 === 0) {
            $("#" + elem).append('<li class="l5">|</li>');
        } else {
            $("#" + elem).append('<li>|</li>');
        }
    }

}


function porcentaje(val) {
    return parseFloat2P((100 * val) / 150)
}

function parseFloat2P(val) {
    return parseFloat(val.toFixed(2))
}