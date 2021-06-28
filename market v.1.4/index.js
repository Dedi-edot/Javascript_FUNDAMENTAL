var fruits = [
    ["Apple", 10000, 5],
    ["Grape", 15000, 7],
    ["Jeruk", 20000, 8]
]
var cart = []

while (true) {
    var menu = parseInt(
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
        var fruitList = `Daftar buah \n\n`
        for (var i = 0; i < fruits.length; i++) {
            fruitList += `${i}. ${fruits[i][0]} || Harga Rp.${fruits[i][1]} || Stok ${fruits[i][2]} buah \n`
        }
        alert(fruitList)
    } else if (menu == 2) {
        var newName = prompt(`2. Menu menambah buah\n\nMasukkan nama buah :`)
        var newPrice = parseInt(prompt(`Masukkan harga buah :`))
        var newStock = parseInt(prompt(`Masukkan jumlah stok buah :`))

        //Menambah buah pada array
        var newFruits = [newName, newPrice, newStock]
        fruits.push(newFruits)
        //Menampilkan buah
        for (var i = 0; i < fruits.length; i++) {
            fruitList += `${i}. ${fruits[i][0]} || Harga Rp.${fruits[i][1]} || Stok ${fruits[i][2]} buah \n`
        }
        alert(fruitList)
    } else if (menu == 3) {
        var fruitList = `Pilih buah yang akan dihapus : \n\n`
        for (var i = 0; i < fruits.length; i++) {
            fruitList += `${i}. ${fruits[i][0]} || Harga Rp.${fruits[i][1]} || Stok ${fruits[i][2]} buah \n`
        }

        //hapus buah
        var selIndex = parseInt(prompt(fruitList))
        fruits.splice(selIndex, 1)
        //menampilkan hasil
        var fruitList = `Daftar buah : \n\n`
        for (var i = 0; i < fruits.length; i++) {
            fruitList += `${i}. ${fruits[i][0]} || Harga Rp.${fruits[i][1]} || Stok ${fruits[i][2]} buah \n`
        }
        alert(fruitList)
    } else if (menu == 4) {
        //Loop membeli buah
        while (true) {
            var fruitList = `Pilih buah yang akan dibeli : \n\n`
            for (var i = 0; i < fruits.length; i++) {
                fruitList += `${i}. ${fruits[i][0]} || Harga Rp.${fruits[i][1]} || Stok ${fruits[i][2]} buah \n`
            }
            //Index buah yang dipilih
            var selIndex = parseInt(prompt(fruitList))
        
            var selName = fruits[selIndex][0]
            var selPrice = fruits[selIndex][1]
            var selStock = fruits[selIndex][2]

            // tentukan qty yg dibeli
            // loop input jumlah buah
            while (true) {
                var selQty = parseInt(prompt(`Masukkan quantity untuk buah ${selName}, jumlah stok : ${selStock}`))
                if (selQty > selStock) {
                    alert(`Quantity yang diminta ${selQty}, melebihi stock ${selStock}`)
                    continue;
                } else {
                //Masukkan ke keranjang (cart)
                cart.push([selName, selPrice, selQty])
    
                //Kurangi stok buah yang dipesan
                fruits[selIndex][2] -= selQty
                }
                break;
            }
            //Tampilkan isi keranjang
            var cartList = `Keranjang belanja \n\n`
            for (var i = 0; i < cart.length; i++) {
                cartList += `${i}. ${cart[i][0]} || Harga Rp.${cart[i][1]} || Quantity ${cart[i][2]} buah \n`
            }

            //Apakah akan menambah belanjaan?
            var again = prompt(`${cartList} \n\nIngin belanja lagi ? (ya / tidak)`)
            
            //Keluar dari looping membeli buah
            if (again == "tidak") {
                //Hitung harga belanjaan
                var finalPrice = 0;

                for (var i = 0; i < cart.length; i++) {
                    cart[i][3] = cart[i][1] * cart[i][2] //Hitung harga total per buah

                    finalPrice += cart[i][3] //Hitung harga total (finalPrice)
                }
        
                // Menampilkan Struk belanja dan proses pembayaran
                var finalReport = "";
                    for (var i = 0; i < cart.length; i++) {
                        finalReport += `${cart[i][0]} : ${cart[i][1]} x ${cart[i][2]} = ${cart[i][3]}\n`
                    }
                //Menampilkan Report belanjaan
                while (true) {
                    //proses pembayaran
                    var money = parseInt(prompt(`Daftar belajaan : \n${finalReport}\n\n Total harga = ${finalPrice}\n\nMasukan uang jumlah uang pembayaran:`))
            
                    var margin = Math.abs(money - finalPrice)
            
                    if (money < finalPrice) {
                        alert(`Uang yang Anda masukkan masih kurang ${margin}, total harga = ${finalPrice}`)
                    } else {
                        if (money > finalPrice) {
                            alert(`Terima kasih, uang kembali = ${margin}`)
                        } else {
                            alert(`Terima kasih`)
                        }
                        // selesai pembayaran keranjang dikosongkan
                        cart = []
                        break;
                    } 
                }
            }
            break;
        }    
    } else {
        break;
    }     
}
