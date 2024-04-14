const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomSubset = (array, size) => array.slice(0, size);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
grape

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getRandomSubset = (array, size) => array.slice(0, size);
