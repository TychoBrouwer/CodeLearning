console.log(valCustCol, valCustMes, valCustBack, valCustURL, valCustNameURL);
if (valCustBack) {
    document.body.style.backgroundImage = "url('" + valCustBack + "')";
}

if (valCustCol) {
    document.getElementById('username-set-color').style.color = valCustCol;
}
