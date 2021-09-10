document.getElementById('copyBtn-js').addEventListener('click', copy);
function copy() {
    var cutId = document.getElementById("cutId-js");
    var textArea = document.createElement("textarea");
    textArea.value = cutId.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}
