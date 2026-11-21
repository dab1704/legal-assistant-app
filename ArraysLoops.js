"use strict";
const languages = ["ಕನ್ನಡ", "हिंदी", "english"];   // separate example
for (const f of languages) { console.log(f); }
// fruits.length;   // 3
function listlanguages(languages) {

    return languages.join(",");

}
console.log(listlanguages(languages));
const text = "hills"
function shout(text) {
    return text.toUpperCase() + "!";
}
console.log(shout("jai ho"))