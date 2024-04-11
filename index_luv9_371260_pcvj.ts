const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
grape

const findLargestNumber = numbers => Math.max(...numbers);
41 - 35,4,21,86,64,83,55,41,50,34,27,95,55,52,54,23,28,47,68,63,61,59,8,20,38,89,49,71,34,8,51,31,1,36,45,93,58,10,71,43,3,22,55,90,81,98,65,79,74,66,98,64,46,33,94,62,58,43,34,42,76,32,24,75,33,67,51,84,78,38,22,88,56,20,15
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
