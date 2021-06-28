var nums = [11, 22, 34, 41, 52, 63, 71, 86];

var oddEven = (numbers) => {
  var ganjil = [];
  var genap = [];

  numbers.forEach((number) => {
    if (number % 2 == 1) {
      ganjil.push(number);
    } else {
      genap.push(number);
    }
  });
  return [ganjil, genap];
};

var result = oddEven(nums);
console.log(result);
console.table(result);
