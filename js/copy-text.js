function copyToCplipboard(elementId) {
    // Create variable in which you save text to copy
    var text = document.getElementById(elementId).innerText;
    // Create temp variable, needed to save copied text
    var temp = document.createElement("textarea");
    // Add text to temp element
    temp.value = text;
    // Add temp element to document - it is needed to copy tekst
    document.body.appendChild(temp);
    // Select text in temp document
    temp.select();
    // Copy data to storage
    document.execCommand("copy");
    // Delete temp element
    document.body.removeChild(temp);
}
