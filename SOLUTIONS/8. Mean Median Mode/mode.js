//////////
/* MODE */
//////////

/* Angka yang sering muncul */

/*
  numbers = [3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]

  counts[3] == und ?
    true  : counts[number] = 0 + 1
    false : counts[number] + 1

  counts = [und,  1, und,  4,   2 ,  4]
  label =    0    1    2   3    4    5

  counts[5] > maxCount ?
    true  : maxCount = counts[number]
    false : do nothing

  maxCount = 4

  mode = ambil semua nomor index yang menyimpan nilai sebesar maxCount

  counts.forEach()

  mode = [3, 5]


*/

const median = (numbers) => {
  const counts = []
  const mode = []
  let maxCount = 0

  // numbers = [3, 4, 5, 5,]
  // counts = [und, und, und, 1, 1, 2]

  // number = 5
  numbers.forEach((number) => {
    // counts[5] = (counts[5] || 0) + 1
    // counts[5] = ( 1 || 0) + 1
    // counts[5] = 1 + 1
    // counts[5] = 2

    // (counts[number] || 0)
    // jika counts[number] bernilai false, maka akan menggunakan 0
    // namun jika true akan menggunakan nilai yang tersimpan di counts[number]
    counts[number] = (counts[number] || 0) + 1

    if(counts[number] > maxCount){
      maxCount = counts[number]
    }

  })

  // counts = [und,  1, und,  4,   2 ,  4]
  // mode = [3, 5]
  counts.forEach((count, index) => {
    // count = 4
    // index = 5
    // maxCount = 4

    if(count == maxCount){
      mode.push(index)
    }
  })

  return mode
}

console.log(median(numbers = [3, 4, 5, 5, 1, 4, 3, 3, 5, 3, 5]))