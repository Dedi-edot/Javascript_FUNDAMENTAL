/*
SORT DESCENDING
*/

var things = ["Alex", "Elena", "Chaplin", "Bernard", "Dani"];

console.log(things.sort());
console.log(things.reverse());

/*
REVERSE ARRAY IN PLACE
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr);

// console.log(arr.reverse());

var stop = Math.floor(arr.length / 2);

for (var i = 0; i < stop; i++) {
  var tmp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = tmp;
}

console.log(arr);
