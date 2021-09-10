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