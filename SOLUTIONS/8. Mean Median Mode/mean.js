// MEAN //

// numbers : [1, 2, 3, 5, 7]

/*
  sum = sum + number
  sum += number

  forEach()

  reduce()

*/

const mean = (numbers) => {
  let sum = 0;

  // numbers : [1, 2, 3, 5, 7]
  numbers.forEach((number) => {
    // number : 2
    // 1 + 2
    // sum : 3
    sum += number
  })

  return sum / numbers.length
}

console.log(mean([1, 2, 3, 5, 7]))
console.log(mean([5, 5, 5, 5, 5]))