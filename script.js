function returnSmall(x, y) {
 return x < y ? x : y;
}

function showBrowser(message) {
    document.write(message);
}

let number = returnSmall(5, 10);
showBrowser(number);