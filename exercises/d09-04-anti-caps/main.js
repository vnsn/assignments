function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function switchCaps(str) {
    var resultStr = "";

    for (var i = 0; i < str.length; i++) {
        if (isCaps(str[i])) {
            resultStr += str[i].toLowerCase();
        } else resultStr += str[i].toUpperCase();

    }
    return resultStr;
}

console.log(switchCaps('Hello')); // hELLO  
console.log(switchCaps('racEcar')); // RACeCAR  
console.log(switchCaps('bAnAnA')); // BaNaNa