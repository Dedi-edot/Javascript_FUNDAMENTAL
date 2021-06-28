var row = 5;
var stars = "";

for (let i = 0; i < row; i++) {
  for (let j = 0; j < i + 1; j++) {
    stars += " * ";
  }
  stars += "\n";
}

for (let i = row; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    stars += " * ";
  }
  stars += "\n";
}
console.log(stars);

var baris = 5;
var bintang = "";
var spasi = 1;
/*
s s s s * 
s s s * * * 
s s * * * * * 
s * * * * * * * 
* * * * * * * * *
*/

for (var i = baris; i > 0; i--) {
  for (var j = i - 1; j > 0; j--) {
    bintang += "   ";
  }
  for (var k = 1; k <= (spasi - 1) * 2 + 1; k++) {
    bintang += " * ";
  }
  bintang += "\n";
  spasi++;
}

console.log(bintang);
