const produk = [
  // ICE CREAM
  { nama: "Ice Cream Cokelat", kategori: "Ice Cream", harga: 10000, foto: "photo-1563805042-7684c019e1cb" },
  { nama: "Ice Cream Stroberi", kategori: "Ice Cream", harga: 10000, foto: "photo-1497034825429-c343d7c6a68f" },
  { nama: "Ice Cream Matcha", kategori: "Ice Cream", harga: 12000, foto: "photo-1563805042-7684c019e1cb" },
  { nama: "Ice Cream Vanilla", kategori: "Ice Cream", harga: 9000, foto: "photo-1497034825429-c343d7c6a68f" },

  // CUPCAKE
  { nama: "Cupcake Stroberi", kategori: "Cupcake", harga: 12000, foto: "photo-1426869884541-df7117556757" },
  { nama: "Cupcake Cokelat", kategori: "Cupcake", harga: 12000, foto: "photo-1486427944299-d1955d23e34d" },
  { nama: "Cupcake Vanilla", kategori: "Cupcake", harga: 10000, foto: "photo-1519869325930-281384150729" },
  { nama: "Cupcake Red Velvet", kategori: "Cupcake", harga: 13000, foto: "photo-1587668178277-295251f900ce" },

  // CAKE & DESSERT
  { nama: "Strawberry Shortcake", kategori: "Cake & Dessert", harga: 18000, foto: "photo-1464349095431-e9a21285b5f3" },
  { nama: "Chocolate Cake", kategori: "Cake & Dessert", harga: 18000, foto: "photo-1578985545062-69928b1d9587" },
  { nama: "Dessert Box", kategori: "Cake & Dessert", harga: 15000, foto: "photo-1571877227200-a0d98ea607e9" },
  { nama: "Cheesecake", kategori: "Cake & Dessert", harga: 17000, foto: "photo-1533134242443-d4fd215305ad" },
  { nama: "Tiramisu", kategori: "Cake & Dessert", harga: 16000, foto: "photo-1571877227200-a0d98ea607e9" },
  { nama: "Red Velvet Cake", kategori: "Cake & Dessert", harga: 20000, foto: "photo-1586788680434-30d324b2d46f" },

  // ROTI & PASTRY
  { nama: "Croissant Butter", kategori: "Roti & Pastry", harga: 12000, foto: "photo-1555507036-ab1f4038808a" },
  { nama: "Chocolate Croissant", kategori: "Roti & Pastry", harga: 14000, foto: "photo-1530610476181-d83430b64dcd" },
  { nama: "Roti Cokelat", kategori: "Roti & Pastry", harga: 9000, foto: "photo-1509440159596-0249088772ff" },
  { nama: "Cinnamon Roll", kategori: "Roti & Pastry", harga: 13000, foto: "photo-1509365465985-25d11c17e812" },

  // COOKIES & CAMILAN
  { nama: "Choco Chip Cookies", kategori: "Cookies & Camilan", harga: 10000, foto: "photo-1499636136210-6f4ee915583e" },
  { nama: "Cookies Red Velvet", kategori: "Cookies & Camilan", harga: 11000, foto: "photo-1499636136210-6f4ee915583e" },
  { nama: "Brownies Bite", kategori: "Cookies & Camilan", harga: 12000, foto: "photo-1606313564200-e75d5e30476c" },
  { nama: "Macaron Mix", kategori: "Cookies & Camilan", harga: 15000, foto: "photo-1558326567-98ae2405596b" },
  { nama: "Churros", kategori: "Cookies & Camilan", harga: 12000, foto: "photo-1624371414361-e670edf4898d" },

  // PIE & TART
  { nama: "Pie Stroberi", kategori: "Pie & Tart", harga: 14000, foto: "photo-1464305795204-6f5bbfc7fb81" },
  { nama: "Lemon Tart", kategori: "Pie & Tart", harga: 15000, foto: "photo-1464305795204-6f5bbfc7fb81" },
  { nama: "Apple Pie", kategori: "Pie & Tart", harga: 16000, foto: "photo-1562007908-17c67e878c88" },

  // MINUMAN DINGIN
  { nama: "Strawberry Milk", kategori: "Minuman Dingin", harga: 15000, foto: "photo-1544145945-f90425340c7e" },
  { nama: "Iced Chocolate", kategori: "Minuman Dingin", harga: 14000, foto: "photo-1517701604599-bb29b565090c" },
  { nama: "Iced Matcha Latte", kategori: "Minuman Dingin", harga: 16000, foto: "photo-1515823064-d6e0c04616a7" },
  { nama: "Iced Coffee Latte", kategori: "Minuman Dingin", harga: 15000, foto: "photo-1461023058943-07fcbe16d735" },
  { nama: "Mango Smoothie", kategori: "Minuman Dingin", harga: 16000, foto: "photo-1505252585461-04db1eb84625" },

  // MINUMAN HANGAT
  { nama: "Cappuccino", kategori: "Minuman Hangat", harga: 15000, foto: "photo-1509042239860-f550ce710b93" },
  { nama: "Hot Matcha Latte", kategori: "Minuman Hangat", harga: 16000, foto: "photo-1515823064-d6e0c04616a7" },
  { nama: "Teh Melati", kategori: "Minuman Hangat", harga: 8000, foto: "photo-1544787219-7f47ccb76574" },
  { nama: "Caramel Latte", kategori: "Minuman Hangat", harga: 17000, foto: "photo-1509042239860-f550ce710b93" },

  // PAKET HAMPERS
  { nama: "Hampers Sweet Pink", kategori: "Paket Hampers", harga: 85000, foto: "photo-1549465220-1a8b9238cd48" },
  { nama: "Hampers Cookies", kategori: "Paket Hampers", harga: 65000, foto: "photo-1499636136210-6f4ee915583e" },
  { nama: "Hampers Dessert", kategori: "Paket Hampers", harga: 95000, foto: "photo-1578985545062-69928b1d9587" }
];

const track = document.getElementById("product-track");
const search = document.getElementById("search");
const emptyMessage = document.getElementById("empty-message");
const cartCount = document.getElementById("cart-count");

let kategoriAktif = "Semua";
let kataKunci = "";
let hanyaFavorit = false;
let semuaProduk = false;
let keranjang = 0;
const favorit = new Set();

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function alamatFoto(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=350&q=80`;
}

function tampilkanProduk() {
  const hasil = produk.filter(item => {
    const cocokKategori =
      kategoriAktif === "Semua" || item.kategori === kategoriAktif;

    const cocokKata =
      item.nama.toLowerCase().includes(kataKunci.toLowerCase()) ||
      item.kategori.toLowerCase().includes(kataKunci.toLowerCase());

    const cocokFavorit = !hanyaFavorit || favorit.has(item.nama);

    return cocokKategori && cocokKata && cocokFavorit;
  });

  const daftar = semuaProduk ? hasil : hasil.slice(0, 16);

  track.innerHTML = "";
  emptyMessage.hidden = daftar.length !== 0;

  daftar.forEach(item => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = alamatFoto(item.foto);
    img.alt = item.nama;
    img.loading = "lazy";

    img.onerror = function () {
      this.onerror = null;
      this.src = "https://placehold.co/400x350/fff0f2/9b315d?text=" +
        encodeURIComponent(item.nama);
    };

    const favoriteButton = document.createElement("button");
    favoriteButton.className = "favorite-product";
    favoriteButton.type = "button";
    favoriteButton.setAttribute("aria-label", "Tambah ke favorit");
    favoriteButton.textContent = favorit.has(item.nama) ? "♥" : "♡";

    if (favorit.has(item.nama)) {
      favoriteButton.classList.add("selected");
    }

    favoriteButton.addEventListener("click", () => {
      if (favorit.has(item.nama)) {
        favorit.delete(item.nama);
      } else {
        favorit.add(item.nama);
      }

      tampilkanProduk();
    });

    imageWrap.append(img, favoriteButton);

    const info = document.createElement("div");
    info.className = "product-info";

    const name = document.createElement("p");
    name.className = "product-name";
    name.textContent = item.nama;
    name.title = item.nama;

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = formatRupiah(item.harga);

    const cartButton = document.createElement("button");
    cartButton.className = "add-cart";
    cartButton.type = "button";
    cartButton.textContent = "🛒";
    cartButton.setAttribute("aria-label", "Tambah " + item.nama + " ke keranjang");

    cartButton.addEventListener("click", () => {
      keranjang++;
      cartCount.textContent = keranjang;
      cartButton.textContent = "✓";

      setTimeout(() => {
        cartButton.textContent = "🛒";
      }, 700);
    });

    bottom.append(price, cartButton);
    info.append(name, bottom);
    card.append(imageWrap, info);
    track.appendChild(card);
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    kategoriAktif = button.dataset.category;

    document.querySelectorAll(".filter").forEach(filter => {
      filter.classList.toggle("active", filter === button);
    });

    document.querySelectorAll(".category").forEach(category => {
      category.classList.toggle(
        "selected",
        category.dataset.category === kategoriAktif
      );
    });

    semuaProduk = false;
    tampilkanProduk();
    track.scrollLeft = 0;
  });
});

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    kategoriAktif = button.dataset.category;
    hanyaFavorit = false;

    document.querySelectorAll(".filter").forEach(filter => {
      filter.classList.toggle(
        "active",
        filter.dataset.category === kategoriAktif
      );
    });

    tampilkanProduk();
  });
});

search.addEventListener("input", () => {
  kataKunci = search.value.trim();
  tampilkanProduk();
});

document.getElementById("show-all").addEventListener("click", () => {
  semuaProduk = !semuaProduk;
  document.getElementById("show-all").textContent =
    semuaProduk ? "Tampilkan Sedikit ↑" : "Lihat Semua　→";
  tampilkanProduk();
});

document.getElementById("scroll-left").addEventListener("click", () => {
  track.scrollBy({ left: -450, behavior: "smooth" });
});

document.getElementById("scroll-right").addEventListener("click", () => {
  track.scrollBy({ left: 450, behavior: "smooth" });
});

document.getElementById("cart-button").addEventListener("click", () => {
  alert("Jumlah produk di keranjang: " + keranjang);
});

document.getElementById("favorite-button").addEventListener("click", () => {
  hanyaFavorit = !hanyaFavorit;
  kategoriAktif = "Semua";
  semuaProduk = true;

  document.querySelectorAll(".filter").forEach(filter => {
    filter.classList.toggle(
      "active",
      filter.dataset.category === "Semua" && !hanyaFavorit
    );
  });

  document.getElementById("favorite-button").textContent =
    hanyaFavorit ? "♥" : "♡";

  tampilkanProduk();
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("form-kontak").addEventListener("submit", event => {
  event.preventDefault();

  const nama = event.target.elements.nama.value.trim();

  document.getElementById("form-status").textContent =
    `Terima kasih, ${nama}! Pesan kamu berhasil disiapkan.`;

  event.target.reset();
});

tampilkanProduk();