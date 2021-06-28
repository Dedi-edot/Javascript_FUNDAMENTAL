//memiliki 3 buah variabel buah
var apel, anggur, jeruk
//tentukan harga buah
var hrgApel = 10000
var hrgAnggur = 15000
var hrgJeruk = 20000
//Memunculkan prompt/perintah input
var apel = parseInt(prompt("Masukkan jumlah Apel yang dipesan :"))
var anggur = parseInt(prompt("Masukkan jumlah Anggur yang dipesan :"))
var jeruk = parseInt(prompt("Masukkan jumlah Jeruk yang dipesan :"))
//Menghitung total harga
var totalApel = apel * hrgApel
var totalAnggur = anggur * hrgAnggur
var totalJeruk = jeruk * hrgJeruk
var totalHarga = totalApel + totalAnggur + totalJeruk
//Menampilkan hasil perhitungan total harga dgn alert
alert(`
    Detail Belanja
    
    Apel ${apel} x ${hrgApel} = ${totalApel}
    Anggur ${anggur} x ${hrgAnggur} = ${totalAnggur}
    Jeruk ${jeruk} x ${hrgJeruk} = ${totalJeruk}
    Total harga = ${totalHarga}
`)


