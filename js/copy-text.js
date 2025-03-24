function copyToCplipboard(elementToCopy) {
    var elementWithCopiedText = document.getElementById(elementToCopy).innerText;
    var elementToSaveCopiedText = document.createElement("textarea");

    elementToSaveCopiedText.value = elementWithCopiedText;
    document.body.appendChild(elementToSaveCopiedText); // it is needed to copy tekst
    elementToSaveCopiedText.select();
    document.execCommand("copy"); // copy data to storage

    document.body.removeChild(elementToSaveCopiedText);
}
