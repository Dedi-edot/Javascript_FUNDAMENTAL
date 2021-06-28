////////////
/* MEDIAN */
////////////

/* Nilai tengah */

/*
  G A N J I L

  length = 7
  numbers = [2 3 4 7 5 6 7]

  // sort : ascending (a - b)
  numbers = [2 3 4 5 6 7 7]

  index = Math.floor(length / 2)
  index = Math.floor(7 / 2)
  index = 3

  median = numbers[index]
  median = numbers[3]
  median = 5

  ==================================

  numbers = [2 2 3 4 4 5 6 7 7]

  index = Math.floor(length / 2)
  index = Math.floor(9 / 2)
  index = 4

  median = numbers[index]
  median = numbers[4]
  median = 4

*/

/*
  G E N A P

  length : 8
  numbers = [2 3 4 6 7 5 6 7]

  // sort ascending (a - b)
  numbers = [2 3 4 5 6 6 7 7]

  index = Math.floor(length / 2)
  index = Math.floor(8 / 2)
  index = 4

  median = (numbers[index] + numbers[index - 1]) / 2
  median = (numbers[4] + numbers[4 - 1]) / 2
  median = (6 + 5 ) / 2
  median = 5.5

*/

const median = (numbers) => {
  const len = numbers.length
  const index = Math.floor(len / 2)

  numbers.sort((a, b) => { return a - b})

  if(len % 2 == 1){
    return numbers[index]
  } else {
    return (numbers[index] + numbers[index - 1]) / 2
  }

}

console.log('========= GANJIL ========')
console.log(median([2, 3, 4, 7, 5, 6, 7]))
console.log(median([2, 2, 3, 4, 4, 5, 6, 7, 7]))

console.log('========= GENAP ========')
console.log(median([2, 3, 4, 6, 7, 5, 6, 7]))