"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.mod = mod;
exports.andFunc = andFunc;
exports.orFunc = orFunc;
exports.notFunc = notFunc;
exports.greaterThan = greaterThan;
exports.lessEqual = lessEqual;
exports.equal = equal;
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }
function mod(x, y) { return x % y; }
function andFunc(x, y) { return x && y; }
function orFunc(x, y) { return x || y; }
function notFunc(x) { return !x; }
function greaterThan(x, y) { return x > y; }
function lessEqual(x, y) { return x <= y; }
function equal(x, y) { return x === y; }
