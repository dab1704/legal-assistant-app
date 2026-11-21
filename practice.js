"use strict";

const btnKn = document.getElementById("btn-kn");
const btnHi = document.getElementById("btn-hi");
const btnEn = document.getElementById("btn-en");
const result = document.getElementById("result");
function showLanguage(lang) {
    result.textContent = "you chose: " + lang;
}
btnKn.addEventListener("click", function () { showLanguage("kannada") }
);
btnHi.addEventListener("click", function () {
    showLanguage("hindi")
});
btnEn.addEventListener("click", function () {
    showLanguage("english")
});
// console.log(result);