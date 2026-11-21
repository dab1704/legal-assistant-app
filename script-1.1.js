"use strict";

console.log("Hello, World!");
alert("Hello");
[1, 2].forEach(alert);
//let and var same use let can change value cont cant change value
let x = 5;
x = 7;//changes
console.log(x);
let n = 42;           // number (ints AND decimals: same type)
let d = 3.14;         // also number
let s = "hello";      // string ("", '', or ``)
let b = true;         // boolean
let z;                // undefined → declared, no value yet
let y = null;         // null → "intentionally empty"
let obj = { a: 1 };   // object (covered in Session 3)

console.log(typeof n, typeof s, typeof b, typeof z);
console.log(typeof null);   // try it: a famous JS quirk
// Different from C: no int vs float. Just number.
console.log(0.1 + 0.2); // 0.30000000000000004