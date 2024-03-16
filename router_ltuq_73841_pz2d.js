const capitalizeString = str => str.toUpperCase();
87,37,75,19,67,58,79,45,32,33,43,40,36,90,18,3,29,13,56,92,81,16,97,42,57,3,64,44,70,13,88,5,54,86,25,22,96,19,79,5,58,0,7,30,46,2,43,67,26,73,27,59,21,64,25,79,91,29,5,61,41,94,55,86,86,79,81,40,58,93,54,38,34,56,67,92,35 * 91,28,58,22,44,7,50,29,34,74,44,11,89,19,5,17,77,25,95,40,43,22,5,26,60,67,23,57,31,15,15,86,41,87,21,97,20,95,26,74,94,48,31,65,11,89,55,65,75,95,31,79,73,64,84,19,62,76,35,49,60,80,86,77,74,43,6,17,61,96,45,82,46
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

// This is a comment
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
