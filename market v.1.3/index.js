//variabel
var qtyApel, qtyAnggur, qtyJeruk, stockApel, stockAnggur, stockJeruk

//Tentukan stock buah
stockApel = 10
stockAnggur = 10
stockJeruk = 10

//tentukan harga buah
var hrgApel = 10000
var hrgAnggur = 15000
var hrgJeruk = 20000

//Memunculkan prompt/perintah input qty Apel
do {
    qtyApel = parseInt(prompt(`Apel yang tersedia : ${stockApel}
Masukkan jumlah Apel yang dipesan :`))
    if (qtyApel > stockApel) {
        alert(`Permintaan melebihi stock. Stock = ${stockApel}`)
    }
} while (qtyApel > stockApel);

//Memunculkan prompt/perintah input qty Anggur
do {
    qtyAnggur = parseInt(prompt(`Anggur yang tersedia : ${stockAnggur}
Masukkan jumlah Anggur yang dipesan :`))
    if (qtyAnggur > stockAnggur) {
    alert(`Permintaan melebihi stock. Stock = ${stockAnggur}`)
}
} while (qtyAnggur > stockAnggur);

//Memunculkan prompt/perintah input qty Jeruk
do {
    qtyJeruk = parseInt(prompt(`Jeruk yang tersedia : ${stockJeruk}
Masukkan jumlah Jeruk yang dipesan :`))
if (qtyJeruk > stockJeruk) {
    alert(`Permintaan melebihi stock. Stock = ${stockJeruk}`)
}
} while (qtyJeruk > stockJeruk);


//Menghitung total harga
var totalHrgApel = qtyApel * hrgApel
var totalHrgAnggur = qtyAnggur * hrgAnggur
var totalHrgJeruk = qtyJeruk * hrgJeruk
var totalHarga = totalHrgApel + totalHrgAnggur + totalHrgJeruk

//Menampilkan hasil perhitungan total harga dgn alert
alert(`
    Detail Belanja
    
    Apel ${qtyApel} x ${hrgApel} = ${totalHrgApel}
    Anggur ${qtyAnggur} x ${hrgAnggur} = ${totalHrgAnggur}
    Jeruk ${qtyJeruk} x ${hrgJeruk} = ${totalHrgJeruk}
    Total harga = ${totalHarga}

    Lanjutkan ke pembayaran
`)

//Pembayaran
do {
    var nominalUang = parseInt(prompt("Input nominal uang pembayaran yang cukup"))
} while (nominalUang < totalHarga);


if (nominalUang > totalHarga) {
    alert(`
        Terima kasih, transaksi berhasil. Uang kembali = Rp.${nominalUang - totalHarga}
    `)
} else if (nominalUang == totalHarga) {
    alert(`
        Terima kasih, transaksi berhasil.
    `)
} else {
    alert(`
        Transaksi dibatalkan. 
    `)
}



