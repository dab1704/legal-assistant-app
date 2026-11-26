"use strict";

// Part A: one object
const situation = { title: "danger", steps: ["one", "two", "three"], urgent: true };
console.log(situation.title);
situation.language = "Kannada";
situation.urgent = false;
console.log(situation);

function describe(s) {
    return `${s.title} has ${s.steps.length} steps`;
}
console.log(describe(situation));

// Part B: array of objects
const situations = [
    { title: "police stop", steps: ["stay calm", "ask for ID", "call a lawyer"], urgent: true },
    { title: "false complaint", steps: ["collect proof", "note names"], urgent: false },
    { title: "rent dispute", steps: ["keep receipts", "get it in writing", "contact a lawyer"], urgent: true },
];
for (const s of situations) {
    console.log(describe(s));
}
for (const s of situations) {
    if (s.urgent) {
        console.log("URGENT:", s.title);
    }
}
const saved = JSON.stringify(situations);
console.log(saved);
const loaded = JSON.parse(saved);
console.log(loaded);
console.log(loaded[0].title);
console.log(typeof saved, typeof loaded);
console.log(saved[0].title);