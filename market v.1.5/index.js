const fruits = [
  { name: "Apple", price: 10000, stock: 5 },
  { name: "Grape", price: 15000, stock: 7 },
  { name: "Jeruk", price: 20000, stock: 8 },
];

const listFruits = (arr, header, kind = 1) => {
  let fruitList = `${header}\n\n`;

  //function untuk list buah
  if (kind) {
    arr.forEach((val, i) => {
      const { name, price, stock } = val;
      fruitList += `${i}. ${name} || Harga Rp.${price} || Stok ${stock} buah \n`;
    });
  } else {
    //function untuk list cart
    arr.forEach((val, i) => {
      const { name, price, qty } = val;
      fruitList += `${i}. ${name} || Harga Rp.${price} || Quantity ${qty} buah \n`;
    });
  }

  return fruitList;
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
    const list = listFruits(fruits, "Daftar Buah");
    alert(list);
  } else if (menu == 2) {
    const name = prompt(`2. Menu menambah buah\n\nMasukkan nama buah :`);
    const price = parseInt(prompt(`Masukkan harga buah :`));
    const stock = parseInt(prompt(`Masukkan jumlah stok buah :`));

    //Menambah buah pada array
    fruits.push({ name, price, stock });

    //Menampilkan buah
    alert(listFruits(fruits, "Daftar buah"));
  } else if (menu == 3) {
    //hapus buah
    var selIndex = parseInt(
      prompt(listFruits(fruits, "Pilih buah yang akan dihapus"))
    );
    fruits.splice(selIndex, 1);
    //menampilkan hasil
    alert(listFruits(fruits, "Daftar buah"));
  } else if (menu == 4) {
    const carts = []; //variabel keranjang
    //Loop membeli buah
    while (true) {
      //Index buah yang dipilih
      const selIndex = parseInt(
        prompt(listFruits(fruits, "Pilih buah yang akan dibeli"))
      );

      //init selIndex ke var
      const { name, price, stock } = fruits[selIndex];

      while (true) {
        // tentukan qty yg dibeli
        // loop input jumlah buah
        const qty = parseInt(
          prompt(`Masukkan quantity untuk buah ${name}, jumlah stok : ${stock}`)
        );
        if (qty > stock) {
          alert(`Quantity yang diminta ${qty}, melebihi stock ${stock}`);
        } else {
          //Masukkan ke keranjang (cart)
          carts.push({ name, price, qty });

          //Kurangi stok buah yang dipesan
          fruits[selIndex].stock -= qty;
          break; //Keluar dari loop quantity
        }
      }

      //Tampilkan isi keranjang
      var cartList = listFruits(carts, "Keranjang", 0);

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
