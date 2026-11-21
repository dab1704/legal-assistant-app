"use strict";
const a = 9;
function square(a) {
    return a * a;
}
const squaree = (a) => {
    return a * a;
}
// const name = "Debangshu";
function greet(name = "friend") {
    return "hello" + name + "!";
}

console.log(square(9));
console.log(greet());
