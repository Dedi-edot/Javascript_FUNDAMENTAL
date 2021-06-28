////////////////////////
/* MARKET VERSION 1.6 */
////////////////////////

class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class FastFood extends Product {
  constructor(name, price, stock, expired) {
    super(name, price, stock);
    this.category = 1;
    this.expired = expired;
  }
}

class Cloth extends Product {
  constructor(name, price, stock, size) {
    super(name, price, stock);
    this.category = 2;
    this.size = size;
  }
}

class Electronic extends Product {
  constructor(name, price, stock, warranty) {
    super(name, price, stock);
    this.category = 3;
    this.warranty = warranty;
  }
}

class Fruits extends Product {
  constructor(name, price, stock, sugar) {
    super(name, price, stock);
    this.category = 4;
    this.sugar = sugar;
  }
}

const product = [
  { category: 1, name: "Noodle", price: 20000, stock: 8, expired: 2020 },
  { category: 2, name: "Hoodie", price: 15000, stock: 7, size: "L" },
  { category: 3, name: "Headphone", price: 20000, stock: 8, warranty: "Yes" },
  { category: 4, name: "Apple", price: 10000, stock: 5, sugar: "High" },
];

const createList = (arr, header, kind = 1) => {
  let list = `${header}\n\n`;

  //function untuk list buah
  if (kind) {
    arr.forEach((val, i) => {
      const { name, price, stock, category, expired, size, warranty, sugar } =
        val;
      let newList = `${i}. NAME : ${name} || STOCK : ${stock} || PRICE : ${price} `;

      switch (category) {
        case 1:
          newList += `|| EXPIRED : ${expired}\n`;
          break;

        case 2:
          newList += `|| SIZE : ${size}\n`;
          break;

        case 3:
          newList += `|| WARRANTY : ${warranty}\n`;
          break;

        default:
          newList += `|| SUGAR : ${sugar}\n`;
          break;
      }
      list += newList;
    });
  } else {
    //function untuk list cart
    arr.forEach((val, i) => {
      const { name, price, qty } = val;
      list += `${i}. ${name} || Price : ${price} || Quantity ${qty} buah \n`;
    });
  }
  return list;
};

while (true) {
  const menu = parseInt(
    prompt(`
        Apa yang ingin anda lakukan :
        1. Menampilkan daftar buah
        2. Menambah buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit
        `)
  );
  if (menu == 1) {
    alert(createList(product, "Daftar Produk"));
  } else if (menu == 2) {
    //memilih kategori produk yang akan ditambahkan
    const catOpt = parseInt(
      prompt(
        "Kategori produk yang akan ditambahkan :\n\n" +
          "1. Cepat Saji\n" +
          "2. Pakaian\n" +
          "3. Elektronik\n" +
          "4. Buah\n\n"
      )
    );

    const name = prompt(`2. Menu menambah produk\n\nMasukkan nama produk :`);
    const price = parseInt(prompt(`Masukkan harga produk :`));
    const stock = parseInt(prompt(`Masukkan jumlah stok produk :`));

    let newProduct;
    switch (catOpt) {
      case 1:
        const expired = prompt("Masukkan waktu expired : ");
        newProduct = new FastFood(name, price, stock, expired);
        break;

      case 2:
        const size = prompt("Masukkan size produk : ");
        newProduct = new Cloth(name, price, stock, size);
        break;

      case 3:
        const warranty = prompt("Masukkan status garansi : ");
        newProduct = new Electronic(name, price, stock, warranty);
        break;

      default:
        const sugar = prompt("Masukkan tingkat kadar gula : ");
        newProduct = new Fruits(name, price, stock, sugar);
        break;
    }

    //Menambah buah pada array
    product.push(newProduct);

    //Menampilkan buah
    alert(createList(product, "Daftar produk"));
  } else if (menu == 3) {
    //hapus buah
    var selIndex = parseInt(
      prompt(createList(product, "Pilih produk yang akan dihapus"))
    );
    product.splice(selIndex, 1);
    //menampilkan hasil
    alert(createList(product, "Daftar buah"));
  } else if (menu == 4) {
    const carts = []; //variabel keranjang
    //Loop membeli buah
    while (true) {
      //Index buah yang dipilih
      const selIndex = parseInt(
        prompt(createList(product, "Pilih produk yang akan dibeli"))
      );

      //init selIndex ke var
      const { name, price, stock } = product[selIndex];

      while (true) {
        // tentukan qty yg dibeli
        // loop input jumlah buah
        const qty = parseInt(
          prompt(`Masukkan quantity produk ${name}, jumlah stok : ${stock}`)
        );
        if (qty > stock) {
          alert(`Quantity yang diminta ${qty}, melebihi stock ${stock}`);
        } else {
          //Masukkan ke keranjang (cart)
          carts.push({ name, price, qty });

          //Kurangi stok buah yang dipesan
          product[selIndex].stock -= qty;
          break; //Keluar dari loop quantity
        }
      }

      //Tampilkan isi keranjang
      var cartList = createList(carts, "Keranjang", 0);

      //Apakah akan menambah belanjaan?
      var again = prompt(`${cartList} \n\nIngin belanja lagi ? (ya / tidak)`);

      //Keluar dari looping membeli buah
      if (again.toLowerCase() == "tidak") {
        //Hitung harga belanjaan
        break;
      }
    }
    let finalPrice = 0;

    carts.forEach((cart) => {
      cart.total = cart.price * cart.qty; //Hitung harga total per buah
      finalPrice += cart.total; //Hitung harga total (finalPrice)
    });

    // Menampilkan Struk belanja dan proses pembayaran
    var finalReport = "";
    carts.forEach((cart) => {
      const { name, price, qty, total } = cart;
      finalReport += `${name} : ${price} x ${qty} = ${total}\n`;
    });

    //Menampilkan Report belanjaan
    while (true) {
      //proses pembayaran
      const money = parseInt(
        prompt(
          `Daftar belajaan : \n${finalReport}\n\n Total harga = ${finalPrice}\n\nMasukan uang jumlah uang pembayaran:`
        )
      );

      const margin = Math.abs(money - finalPrice);

      if (money < finalPrice) {
        alert(
          `Uang yang Anda masukkan masih kurang ${margin}, total harga = ${finalPrice}`
        );
      } else {
        if (money > finalPrice) {
          alert(`Terima kasih, uang kembali = ${margin}`);
        } else {
          alert(`Terima kasih`);
        }
        // selesai pembayaran keranjang dikosongkan
        carts = [];
      }
      break;
    }
  } else {
    break;
  }
}
