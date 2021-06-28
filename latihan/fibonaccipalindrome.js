/////////////
// FIBONACCI
///////////

const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
console.table(numbers);

const fibonacci = (p) => {
  if (p < 3) {
    return 1;
  } else {
    return fibonacci(p - 1) + fibonacci(p - 2);
  }
};

var result = fibonacci(4);
console.log(result);

////////////
//PALINDROME
////////////

const palindrome = (word) => {
  //1. perkecil huruf
  const lower = word.toLowerCase();
  //2. hapus selain huruf
  const clean = lower.replace(/[^a-z]/g, "");
  //3. split sebelum di reverse
  const split = clean.split("");
  //4. reverse
  const reverse = split.reverse();
  //5. Join setelah reverse
  const join = reverse.join("");
  if (clean == join) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
};

palindrome("ASA");
palindrome("Kasur Rusak");
