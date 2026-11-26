"use strict";
const situations = [
    { title: "police stop", steps: ["stay calm", "ask for ID", "call a lawyer"], urgent: true },
    { title: "false complaint", steps: ["collect proof", "note names"], urgent: false },
    { title: "rent dispute", steps: ["keep receipts", "get it in writing", "contact a lawyer"], urgent: true },
];
const situationList = document.getElementById("situation-list");
const situationTitle = document.getElementById("situation-title");
const stepsList = document.getElementById("steps-list");
const btnBack = document.getElementById("btn-back");
function showScreen(n) {
    screen1.hidden = true;
    screen2.hidden = true;
    screen3.hidden = true;
    if (n === 1) {
        screen1.hidden = false;
    }
    if (n === 2) {
        screen2.hidden = false;
    }
    if (n === 3) {
        screen3.hidden = false;
    }
};
function showSteps(s) {
    situationTitle.textContent = s.title;
    // stepsList.innerHTML = "";
    for (const step of s.steps) {
        const li = document.createElement("li");
        li.textContent = step;
        stepsList.appendChild(li);
    }
    showScreen(3);
};
function renderSituations() {
    for (const s of situations) {
        const li = document.createElement("li");
        li.textContent = s.title;          // which property is the title?
        situationList.appendChild(li);  // what do you append?
        li.addEventListener("click", function () {
            showSteps(s);
        }
        )
    }
};

const btnKn = document.getElementById("btn-kn");
const btnHi = document.getElementById("btn-hi");
const btnEn = document.getElementById("btn-en");
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");
const screen3 = document.getElementById("screen-3");

showScreen(1);
// console.log(result);
// const result = document.getElementById("result");
// function showLanguage(lang) {
//     result.textContent = "you chose: " + lang;
// }
btnKn.addEventListener("click", function () { showScreen(2) }
);
btnHi.addEventListener("click", function () {
    showScreen(2)
});
btnEn.addEventListener("click", function () {
    showScreen(2)
});
btnBack.addEventListener("click", function () {
    showScreen(2);
})
renderSituations()