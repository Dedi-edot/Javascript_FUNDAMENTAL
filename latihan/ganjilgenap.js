//variable
var angka, result
//input angka
angka = parseInt(prompt("Masukkan angka :"))
// hasil
if (angka % 2 == 0) {
    result = "GENAP"
} else {
    result = "GANJIL"
}

//Menampilkan hasil
console.log(`Angka ${angka} termasuk bilangan ${result}`)
alert(`Angka ${angka} termasuk bilangan ${result}`)
