/////////
// Exercise date object
/////////

const time = new Date();
const year = time.getFullYear();
const month = time.getMonth();
const date = time.getDate();
const day = time.getDay();
const hours = time.getHours();
const minutes = time.getMinutes();

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const days = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

console.log(
  `Hari ${days[day]}, Tanggal ${date}, ${months[month]}, ${year}, Jam ${hours}:${minutes}`
);

const timeFunction = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const days = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  return {
    hari: days[day],
    tanggal: date,
    bulan: months[month],
    tahun: year,
    jam: hours,
    menit: minutes,
    detik: seconds,
  };
};

const timeNow = timeFunction();
let { hari, tanggal, bulan, tahun, jam, menit, detik } = timeNow;

//menit
if (menit < 10) {
  menit = `0${menit}`;
}

//detik
if (detik < 10) {
  detik = `0${detik}`;
}

console.log(`Hari ini ${hari}, ${tanggal} ${bulan} ${tahun}`);
console.log(`Jam ${jam}:${menit}:${detik}`);
