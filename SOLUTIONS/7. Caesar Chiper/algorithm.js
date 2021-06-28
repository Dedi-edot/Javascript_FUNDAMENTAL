// CAESAR CIPHER

/*
  abc (shift 3) = def

  "Sunday Six" (shift = 2)  ==>  "Uwpfca Ukz"

*/

/*

  Misalnya saja alfabet hanya ada 5 huruf

  length = 5
  a b c d e

  b shift 3 --> e
  1 + 3 = 4 --> e

  b shift 5 --> b
  b shift 10 --> b

  b shift 7 --> d (index 3)
  1 + 7 = 8 % 5 = 3   iiiii iii

  b shift 12 --> d (index 3)
  1 + 12 = 13 % 5 =   iiiii iiiii iii

  next index = (index + shift) % length


*/

/*
  length = 26
  alphabet = [ a b c d e f g h i j k l m n o p q r s t u v w x y z ]

  "Abc Yz" shift 2 -- "Cde Ab"

  =============================

  "Abc Yz"

  // split(" ")
  ["Abc", "Yz"]

  // map()
  result : [ "Cde", "Ab" ]

    "Yz"

    // lowercase
    result : "yz"

    // split
    result : ["y", "z"]

    // map
    result : [ a, b ]

      "z"

      next index = (index + shift) % length
      next index = (25 + 2) % 26
      next index = 27 % 26
      next index = 1

      return alphabet[1]

    // toUpperCase
    result : ["a", "b"]

      [ c d e][0].toUpperCase()

      [ "A", "b"]

    // join
    result : Ab

    // return
    return Ab

  // join(" ")
  result : "Cde Ab"
*/
