// Practice using string methods on made up strings with made up functions. 
// No error checking. Just goofing around.

// uses .toLowerCase, .toUpperCase, .concat()
// convert the first string to lower case, convert the second to upper,
// and then concatenate them
function concatStr(str1, str2) {
    var newStr = str1.toLowerCase();
    console.log(newStr.concat(str2.toUpperCase()));
}

concatStr("I AM A GOOFY FUNCTION. ", "do you love me?");

// uses .indexOf(), .split(), .lastIndexOf(), .split()
// display the first and last start position of the "findStr"
// display the next 3 characters after the first instance of findStr
// display how many words in the string
function strInfo(str, findStr) {
    console.log(`The first instance of '${findStr}' starts at position ${str.indexOf(findStr)}.`);
    console.log(`The next 3 characters are '${str.substr((str.indexOf(findStr) + findStr.length), 3)}'`);
    console.log(`The last instance of '${findStr}' starts at position ${str.lastIndexOf(findStr)}.`);
    var newStrArr = str.split(" ");
    console.log(`Your string had ${newStrArr.length} words.`);
}

strInfo("I am a goofy function and I love you. Do you love me?", "you");

// uses .match()
function findSubStr(str, findMyStr) {
    var myRegex = new RegExp(findMyStr, "ig");
    var matchesArr = str.match(myRegex);
    console.log(`Your string '${findMyStr}' was found ${matchesArr.length} time(s).`);
}

findSubStr("I am a goofy function and I love you. Do you love me?", "love");


// uses .replace()
// replace the word "hate" with the word "love"
// case INsensitive
function hateToLove(str) {
    var newStr = str.replace(/hate/ig, "love");
    console.log(`Old string: ${str} ==> New string: ${newStr}`);
}

hateToLove("I am a goofy function and I hate you. Do you HATE me?");

// uses .slice()
function onlyOneSentence(str) {
    console.log(`You are only allowed one sentence. Here's the extra stuff you entered: ' ${str.slice(str.indexOf(".") + 1)}'`);
}

onlyOneSentence("I am a verbose string. I like to talk just to hear myself talk. Do you like to talk?");
