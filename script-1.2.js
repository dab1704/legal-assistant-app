'use strict';
"use strict";
// =====================================================
// JS FUNDAMENTALS: CHUNK 2
// Type conversions, operators, comparisons
// =====================================================

// -----------------------------------------------------
// 1. TYPE CONVERSION
// JS converts types automatically. Most "weird JS" comes from this.
// -----------------------------------------------------

// --- To STRING: everything becomes its text form ---
console.log(String(123));     // "123"
console.log(String(true));    // "true"
console.log(String(null));    // "null"

// --- To NUMBER: memorise these rules ---
console.log(Number("123"));   // 123
console.log(Number(" 12 "));  // 12   → spaces at the ends are ignored
console.log(Number(""));      // 0    → empty string becomes 0 (surprise!)
console.log(Number("12abc")); // NaN  → any non-number char = Not a Number
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number(undefined)); // NaN
console.log(+"5");            // 5    → unary + is a shortcut for Number()
console.log(NaN + 5);         // NaN  → anything with NaN stays NaN

// --- To BOOLEAN: only 6 FALSY values ---
// false, 0, "", null, undefined, NaN → false
console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN));

// EVERYTHING else is TRUTHY, even these:
console.log(Boolean("0"));    // true → non-empty string
console.log(Boolean(" "));    // true → a space is still a character
console.log(Boolean("false"));// true → it's just a word
console.log(Boolean([]));     // true → empty array is truthy
console.log(Boolean({}));     // true → empty object is truthy

// -----------------------------------------------------
// 2. OPERATORS
// -----------------------------------------------------

// Same as C: + - * / % ++ -- +=
console.log(7 % 3);           // 1 → remainder
console.log(2 ** 3);          // 8 → power (new in JS)
console.log(7 / 2);           // 3.5 → NO integer division like C
console.log(Math.floor(7 / 2)); // 3 → use this for integer division

// Floating point: binary can't store 0.1 exactly (like 1/3 in decimal)
console.log(0.1 + 0.2);                              // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);                      // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true → compare like this
// Money: store paise as whole numbers (₹10.50 → 1050), never decimals

// --- THE + RULE ---
// If EITHER side is a string → + JOINS as text
// - * / % → always convert to NUMBERS
console.log("3" + 1);         // "31" → join
console.log("3" - 1);         // 2    → convert, then subtract
console.log("3" * "4");       // 12
console.log("hi" - 1);        // NaN

// Evaluated LEFT to RIGHT, one pair at a time.
// Once the result is a string, every later + keeps joining.
console.log(2 + 2 + "2");     // "42"  → 2+2=4, then 4+"2"="42"
console.log("2" + 2 + 2);     // "222" → "2"+2="22", then "22"+2="222"

// -----------------------------------------------------
// 3. COMPARISONS
// -----------------------------------------------------

// Numbers: normal
console.log(5 > 3);           // true

// Strings: dictionary order, letter by letter
console.log("apple" < "banana"); // true → 'a' before 'b'
console.log("Z" < "a");       // true  → uppercase comes before lowercase
console.log("10" < "9");      // true  → compared as TEXT: '1' before '9'
console.log(10 < 9);          // false → compared as numbers

// --- = vs == vs === ---
// =   → ASSIGN a value          let x = 5
// ==  → compare AFTER converting types (loose)
// === → compare value AND type, no conversion (strict)
console.log(5 == "5");        // true  → "5" converted to 5
console.log(5 === "5");       // false → number vs string
console.log(0 == false);      // true
console.log(0 === false);     // false
console.log("" == 0);         // true  → weird! This is why we avoid ==
console.log(null == undefined);  // true  → special rule
console.log(null === undefined); // false

// RULE: ALWAYS use === and !== . NEVER use == .