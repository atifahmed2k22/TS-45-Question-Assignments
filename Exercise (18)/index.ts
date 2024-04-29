// Question 18: Seeing the world

let countriesArray: string[] = [
  "Pakistan",
  "France",
  "Turkey",
  "Switzerland",
  "America",
];

console.log(countriesArray);

console.log(countriesArray.sort()); // comment this line to run line no. 136-152

console.log(countriesArray);

console.log(countriesArray.reverse()); // comment this line to run line no. 142-152

console.log(countriesArray);

let reversedArray = countriesArray.reverse();
console.log(reversedArray);

let originalArray = reversedArray.reverse();
console.log(originalArray);

let sortedArray = originalArray.sort();
console.log(sortedArray);

let reverseSortedArray = sortedArray.reverse();
console.log(reverseSortedArray);
