var nomor = [1, 2, 3, 4];

var mapFunction = (numbers) => {
  return (resultMap = numbers.map((number) => {
    if (number % 2 == 1) {
      return [number, "Ganjil"];
    } else {
      return [number, "Genap"];
    }
  }));
};

console.log(mapFunction(nomor));
console.table(mapFunction(nomor));
