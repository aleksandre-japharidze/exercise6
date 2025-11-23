import { add, subtract, multiply, divide, mod, andFunc, orFunc, notFunc, greaterThan, lessEqual, equal } from "./library.js";

const a = 5;
const b = 3;
const c = 7;
const d = 4;
const e = 2;
const f = 10;

const x = true;
const y = false;
const z = true;
const isAdmin = false;

console.log(orFunc(andFunc(greaterThan(add(a, multiply(b, c)), subtract(d, e)), x), y));
console.log(andFunc(andFunc(lessEqual(multiply(subtract(a, b), add(c, d)), e), z), notFunc(x)));
console.log(orFunc(equal(mod(add(add(a, b), c), d), 0), andFunc(greaterThan(f, e), isAdmin)));
console.log(andFunc(notFunc(orFunc(x, y)), greaterThan(multiply(a, a), multiply(b, c))));