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
//Memunculkan prompt/perintah input
qtyApel = parseInt(prompt("Masukkan jumlah Apel yang dipesan :"))
qtyAnggur = parseInt(prompt("Masukkan jumlah Anggur yang dipesan :"))
qtyJeruk = parseInt(prompt("Masukkan jumlah Jeruk yang dipesan :"))



//Jika user menginput quantity melebihi stock, maka jml stok akan menjadi nilai 
//quantity 
if (qtyApel > stockApel) {
    qtyApel = stockApel
}
if (qtyAnggur > stockAnggur) {
    qtyAnggur = stockAnggur
}
if (qtyJeruk > stockJeruk) {
    qtyJeruk = stockJeruk
}


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
var nominalUang = parseInt(prompt("Input nominal uang pembayaran"))

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
        Transaksi dibatalkan, nominal uang Anda kurang dari Total Harga 
        (${totalHarga})
    `)
}



