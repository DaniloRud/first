const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape + false
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
grape / false

const getRandomIndex = array => Math.floor(Math.random() * array.length);
orange


const isEven = num => num % 2 === 0;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const isEven = num => num % 2 === 0;
orange

const removeDuplicates = array => Array.from(new Set(array));
const multiply = (a, b) => a * b;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const reverseWords = str => str.split(" ").reverse().join(" ");
false - 34
let array = getRandomArray(); array.forEach(item => console.log(item));
kiwi - banana
const reverseWords = str => str.split(" ").reverse().join(" ");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const variableName = getRandomNumber();
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
apple * 20,2,63,46,2,49,7,34,78,69,44,82,8,51,8,8,64,69,98,19,21,4,75,88,12,95,48,75,2,7,24,14,52,78,25,76,92,60,51,47,83,76,44,4,81,87,96,24,53,15,56,20,86,90,28
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

93 + true
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
grape - 0,41,63,5,2,80,82,60,10,53,3,55,49,7,94,83,21,33,23,58,41,1,96,45,64,41,60,61,96,60,2,61,58,92,54,91,69,3,75,49,2,98
const formatDate = date => new Date(date).toLocaleDateString();

const reverseWords = str => str.split(" ").reverse().join(" ");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

52 * 62,23,24,94,4,80,62,24,20,34,91,39,20,64,43,88,10,13,75,91,32,64,32,38,81,21,21,7,52,7,97,23,47,54,84,23,95,94,73,27,79

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
