/*
Filter name n age
*/

var arra = [
  ["john", 43, "Jakarta"],
  ["Baby", 21, "Jakarta"],
  ["Toni", 34, "Surabaya"],
  ["Justin", 29, "Banjarmasin"],
];

var ageAddress = (arr) => {
  return arr.filter((val) => {
    return val[1] > 30 || val == "Jakarta";
  });
};

console.log(ageAddress(arra));

/*
Filter salary
nilai gaji lebih dari 9 juta setelah dikurangi 5% dari total gaji
*/

const salary = [9100000, 9800000, 9500000, 10300000, 9300000];

const filterSalary = salary.filter((val) => {
  return val - val * 0.05 > 9000000;
});

console.log(filterSalary);
