// const reverseWords = (word) => {
//   // ["Hai", "aku", "Joan", "Mir"]
//   let words = word.split(" ");

//   // wordFinal = [ "iaH", "uka", "naoJ", "riM" ]
//   let wordsFinal = words.map((val) => {
//     // val = "Hai"

//     // val = ["H", "a", "i"]
//     val = val.split("");

//     // val = ["i", "a", "H"]
//     val.reverse();

//     // "iaH"
//     val = val.join("");

//     return val;
//   });

//   // wordsFinal = iaH uka naoJ riM
//   wordsFinal = wordsFinal.join(" ");

//   console.log(wordsFinal);
// };

// const reverseWords = (word) => {
//   // ["Hai", "aku", "Joan", "Mir"]
//   let words = word.split(" ");

//   // wordFinal = [ "iaH", "uka", "naoJ", "riM" ]
//   let wordsFinal = words.map((val) => {
//     val = val.split("").reverse().join("");

//     return val;
//   });

//   // wordsFinal = iaH uka naoJ riM
//   return wordsFinal.join(" ");
// };

const reverseWords = (word) => {
  // ["Hai", "aku", "Joan", "Mir"]
  return word
    .split(" ")
    .map((val) => {
      val = val.split("").reverse().join("");

      return val;
    })
    .join(" ");
};

console.log(reverseWords("Hai aku Joan Mir"));
