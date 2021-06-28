// latihan soal no. 1
var x = 4
var y = 3
var z = 2

var pembilang = x + y * z
var penyebut = x * y
var pembagian = pembilang / penyebut
var w = Math.pow(pembagian, z) 

console.log(w);

//Solusi
// var x = 4, y = 3, z = 2
// var firstStep =  (x + y * z) / (x * y)
// var w = Math.pow(firstStep, z) 
// atau
// var w = Math.pow((x + y * z) / (x * y), z) 


//Latihan soal no. 3
var akar3 = Math.cbrt(8)

console.log(akar3);


//Latihan soal no. 4
//diketahui 1 tahun = 360 hari dan 1 bulan = 30 hari
var totalHari = 485 
var jmlTahun = Math.floor(totalHari / 360)
var jmlBulan = Math.floor((totalHari % 360) / 30)
var jmlMinggu = Math.floor(((totalHari % 360) % 30) / 7)
var jmlHari = (totalHari % 360) % 30

// alt + z 
console.log(`Total hari = ${totalHari}, Maka dapat diketahui bahwa\n${totalHari} Hari = ${jmlTahun} Tahun, ${jmlBulan} Bulan, ${jmlMinggu} Minggu dan ${jmlHari} Hari`);

//Latihan soal no. 5
//Diketahui saat ini jml usia Andi dan Budi = 49 th,
//dgn rasio usia Andi dan Budi = 0,4.
//Berapa Usia Andi dan Budi 2 tahun lagi?
//diketahui rasio 0,4 = 4/10 atau 2/5
// var usiaAndiBudi = 49
// var usiaAndi = Math.round((usiaAndiBudi / 10) * 2)
// var usiaBudi = Math.round((usiaAndiBudi / 10) * 5)

// console.log(`Usia Andi dan Budi = ${usiaAndiBudi} tahun, Andi= ${usiaAndi} tahun dan usia Budi = ${usiaBudi} tahun`);

// //setelah 2 tahun maka
// usiaAndi += 2
// usiaBudi += 2
// usiaAndiBudi += 4

// console.log(`Usia Andi dan Budi 2 tahun kemudian = ${usiaAndiBudi} tahun, Andi= ${usiaAndi} tahun dan usia Budi = ${usiaBudi} tahun`);

// Andi + Budi = 49
// rasio Andi dan Budi = 0,4 = 4/10 = 2/5
// Andi = 2, Budi = 5
// total rasio 2 + 5 = 7
// andi = total umur * (rasio andi / total rasio)
// budi = total umur * (rasio budi / total rasio)

//umur andi dan budi saat ini
var totalAge = 49, ratioAndi = 2, ratioBudi = 5, ratioTotal = 7
var andi = totalAge * (ratioAndi / ratioTotal)
var budi = totalAge * (ratioBudi / ratioTotal)
console.log(`Umur Andi saat ini adalah = ${andi} tahun`);
console.log(`Umur Budi saat ini adalah = ${budi} tahun`);
console.log(`Umur Andi dan Budi saat ini = ${totalAge} tahun`);

//umur andi dan budi 2 tahun berikutnya
andi += 2
budi += 2
totalAge += 4

console.log(`Umur Andi dua tahun kemudian adalah = ${andi} tahun`);
console.log(`Umur Budi dua tahun kemudian adalah = ${budi} tahun`);
console.log(`Umur Andi dan Budi dua tahun kemudian = ${totalAge} tahun`);

//Latihan soal no. 6

//theory
//dua kendaraan yg akan bertemu, dapat hitung wakunya dengan menjumlahkan kecepatan dari kedua kendaraan 
//kemudian cari tahu dgn total kecepatan yg dimiliki, berapa waktu yang dibutuhkan utk menempuh jarak tertentu 

//60+40=100 km/h
//dgn kecepatan 100 km/h. berapa waktu yang dibutuhkan utk menempuh jarak 120 km?
//120/100 = 1,2 jam
//1,2 * 60 = 72 menit atau 60 menit + 12 menit
// 9.00 ==> 10.12

//waktu bertemu (jam) = 9 + Math.floor(72/60) hasil 10
//waktu bertemu (menit) = 0 + (72%60) hasil 12

//jarak 120
var distance = 120
//kecepatan A
var velocityA = 60
//kecepatan B
var velocityB = 40
//waktu mulai kendaraan berjalan
var startTimeHour = 9
var startTimeMinute = 0

//total kecepatan
var totalVelocity = velocityA + velocityB
//waktu yg dibtuhkan utk bertemu
var needTimeHour = distance / totalVelocity
//waktu yg dibtuhkan utk bertemu (menit)
var needTimeMinute = needTimeHour * 60

//waktu bertemu (jam)
var meetTimeHour = startTimeHour + Math.floor(needTimeMinute / 60)
//waktu bertemu (menit)
var meetTimeMinute = startTimeMinute + (needTimeMinute % 60)

console.log(`Akan bertemu pada pukul ${meetTimeHour} : ${meetTimeMinute}`);



