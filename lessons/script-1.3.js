const name = "";
if (name) {
    console.log("Hello " + name);
} else {
    console.log("Please enter your name");   // ← runs, because "" is falsy
}

const count = 0;
if (count) console.log("has items");
// doesn't run: 0 is falsy, IF IT WOULD BE 5 IN CASE THEN IT WOULD RUN CAUSE IT HAS ITEMS UNLIKE C IT CAN RUN LIKE THIS 
"use strict";
// =====================================================
// JS FUNDAMENTALS: CHUNK 3
// if/else, ternary, logical operators, ??
// =====================================================

// -----------------------------------------------------
// 1. IF / ELSE: same as C
// -----------------------------------------------------
const marks = 72;
if (marks >= 75) {
    console.log("distinction");
} else if (marks >= 60) {
    console.log("first class");   // ← runs (first match wins, rest skipped)
} else {
    console.log("pass");
}
// Always use { } even for one line.

// Condition doesn't need to be boolean → truthy/falsy rules apply
// const name = "";
if (name) console.log("hello " + name);
else console.log("enter your name");   // runs: "" is falsy
// Common: if (user) {...}  if (items.length) {...}

// -----------------------------------------------------
// 2. TERNARY: condition ? ifTrue : ifFalse → produces a VALUE
// -----------------------------------------------------
const result = marks >= 40 ? "PASS" : "FAIL";
console.log(result);

// Chaining (use sparingly)
const hour = 15;
const greeting =
    hour < 12 ? "Good morning" :
        hour < 18 ? "Good afternoon" :
            "Good evening";
console.log(greeting);
// RULE: ternary for simple either/or values; if/else for actions or many branches.

// -----------------------------------------------------
// 3. LOGICAL OPERATORS: && || !
// -----------------------------------------------------
// With booleans: same as C
console.log(true && false);   // false (AND: both must be true)
console.log(true || false);   // true  (OR: at least one true)
console.log(!true);           // false (NOT)
// Order: ! first, then &&, then ||. Use brackets when mixing.

// SHORT-CIRCUIT: stops as soon as the answer is known
false && console.log("never runs");
true || console.log("never runs");

// THEY RETURN ACTUAL VALUES (not just true/false)
// a || b → FIRST TRUTHY value (or the last value if none truthy)
console.log("Ravi" || "Guest");   // "Ravi"
console.log("" || "Guest");       // "Guest" ("" falsy → move on)
console.log(0 || null || "x");    // "x"

// a && b → FIRST FALSY value (or the last value if all truthy)
console.log(1 && 0 && 5);         // 0
console.log("a" && "b" && "c");   // "c"

// Real uses:
const chosenLang = "";
const lang = chosenLang || "English";        // default value
console.log(lang);                           // "English"

const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");  // run only if truthy (React uses this a lot)

// !! converts anything to a real boolean
console.log(!!"hello", !!0);      // true false

// -----------------------------------------------------
// 4. NULLISH COALESCING ??
// a ?? b → b ONLY if a is null or undefined
// -----------------------------------------------------
const volume = 0;                 // user muted (0 is a real value!)
console.log(volume || 50);        // 50 ❌ || treats 0 as "missing"
console.log(volume ?? 50);        // 0  ✅ ?? keeps 0

console.log(null ?? "default");   // "default"
console.log("" ?? "default");     // ""
console.log(false ?? "default");  // false

// RULE: ?? when 0 / "" / false are VALID values.
//       || when ANY falsy value means "nothing given".