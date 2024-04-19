const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getUniqueValues = array => [...new Set(array)];
const getUniqueValues = array => [...new Set(array)];

false - 7,0,75

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sum = (a, b) => a + b;

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const fetchData = async url => { const response = await fetch(url); return response.json(); }

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

apple

function addNumbers(a, b) { return a + b; }

const findLargestNumber = numbers => Math.max(...numbers);
grape

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const findSmallestNumber = numbers => Math.min(...numbers);
grape

const removeDuplicates = array => Array.from(new Set(array));
false / false

const randomNumber = getRandomNumber();

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const sum = (a, b) => a + b;
kiwi

class MyClass { constructor() { this.property = getRandomString(); } }
34 / 23

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getUniqueValues = array => [...new Set(array)];
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

