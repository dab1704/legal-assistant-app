"use strict";
const btnKn = document.getElementById("btn-kn");
const btnHi = document.getElementById("btn-hi");
const btnEn = document.getElementById("btn-en");
const result = document.getElementById("result");
btnKn.addEventListener("click", function () {
    result.textContent = "You chose kannada"
});
btnHi.addEventListener("click", function () {
    result.textContent = "You chose hindi"
});
btnEn.addEventListener("click", function () {
    result.textContent = "You chose english"
});
// console.log(result);