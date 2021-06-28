/*
Advance Sort Number
*/

var numbers = [23, 47, 13, 3, 9, 240];

var asc = (a, b) => {
  return a - b;
};

var dsc = (a, b) => {
  return b - a;
};

console.log(numbers.sort());
console.log(numbers.sort(asc));
console.log(numbers.sort(dsc));

/*
Sorting name n age
*/

var nameAge = [
  ["John", 44],
  ["John", 43],
  ["Baby", 21],
  ["Justin", 29],
];

var sortNameAge = (arr) => {
  arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return a[1] - b[1];
    }
  });
  return arr;
};

var result = sortNameAge(nameAge);
console.log(result);

/*
Sort name by function
*/

var things = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

things.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
});

console.log(things);
