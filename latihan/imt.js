//menghitung IMT
//variabel
var massa, tinggiCm, tinggiM, imt, status

//input massa dan tinggi badan
massa = parseInt(prompt("Masukkan berat badan :"))
tinggiCm = parseInt(prompt("Masukkan tinggi badan :"))

//hitung IMT
tinggiM = tinggiCm / 100
imt = parseFloat(massa / (Math.pow(tinggiM, 2)))
console.log(imt);

//menampilkan hasil hitung IMT
if (imt < 18.5) {
    status = "Berat badan kurang"
} else if (imt >= 18.5 && imt <= 24.9) {
    status = "Berat badan ideal"
} else if (imt >= 25.0 && imt <= 29.9) {
    status = "Berat badan berlebih"
} else if (imt >= 30.0 && imt <= 39.9) {
    status = "Berat badan sangat berlebih"
} else {
    status = "Berat badan obesitas"
}

console.log(`
Berat badan = ${massa} KG, Tinggi badan = ${tinggiM} M
IMT = ${imt}
Status = ${status}
`);
alert(`
Berat badan = ${massa} KG, Tinggi badan = ${tinggiM} M
IMT = ${imt}
Status = ${status}
`)