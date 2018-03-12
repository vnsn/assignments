
function switchCaps(str) {
    var resultStr = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            resultStr += str[i].toLowerCase();
        } else resultStr += str[i].toUpperCase();
    }
    return resultStr;
}

console.log(switchCaps('Hello')); // hELLO  
console.log(switchCaps('racEcar')); // RACeCAR  
console.log(switchCaps('bAnAnA')); // BaNaNa