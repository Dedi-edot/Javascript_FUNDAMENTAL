const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);

/*
  Abc Yz
  Sunday Six
  purwAdhika

*/

const caesarChiper = (word, shift) => {
  // word : "Abc Yz"
  // shift : 2

  // words : ["Abc", "Yz"]
  const words = word.split(" ");

  // wordsResult = ["Cde", "Ab"]
  const wordsResult = words.map((word) => {
    // word : "Abc"
    // wordSplitted : ["a", "b", "c"]
    const wordSplitted = word.split("");

    // wordShifted = [ "c", "d", "e" ]
    const wordShifted = wordSplitted.map((word) => {
      // word : "a"

      // next index = (index + shift) % length
      const nextIndex = (alphabet.indexOf(word) + shift) % alphabet.length;

      // nextIndex = 2
      return alphabet[nextIndex];
    });

    // retur "Cde"
    return wordShifted.join("");
  });

  // wordsResult = "Cde Ab"
  return wordsResult.join(" ");
};

console.log(caesarChiper("Abc Yz", 2));
console.log(caesarChiper("Sunday Six", 2));
