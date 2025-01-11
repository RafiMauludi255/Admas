import { useState } from "react";

const gudang = [
  {
    id: 0,
    nama: "Monitor 14inch",
    harga: 100000,
    kategori: "monitor",
  },
  {
    id: 1,
    nama: "Keyboard Mechanichal FanTech",
    harga: 250000,
    kategori: "keyboard",
  },
  {
    id: 3,
    nama: "RAM 8GB DDR4",
    harga: 150000,
    kategori: "ram",
  },
  {
    id: 4,
    nama: "SSD Samsung 1TB",
    harga: 12000000,
    kategori: "ssd",
  },
  {
    id: 5,
    nama: "Keyboard Mechanichal Zyrex",
    harga: 150000,
    kategori: "keyboard",
  },
];

export default function Toko() {
  const [result, setResult] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const filterKeyboard = gudang.filter(
    (gudang) => gudang.kategori === "keyboard"
  );

  const filterMonitor = gudang.filter(
    (gudang) => gudang.kategori === "monitor"
  );

  const filterRam = gudang.filter((gudang) => gudang.kategori === "ram");

  const filterSsd = gudang.filter((gudang) => gudang.kategori === "ssd");

  function CariBarang() {
    const cariBarang = document.getElementById("cariBarang").value;

    setIsSearched(true)

    if (cariBarang == "keyboard") {
      setResult(filterKeyboard);
    } else if (cariBarang == "monitor") {
      setResult(filterMonitor);
    } else if (cariBarang == "ram") {
      setResult(filterRam);
    } else if (cariBarang == "ssd") {
      setResult(filterSsd);
    } else {
      setResult([]);
    }
  }

  return (
    <div key={gudang.id}>
      <h1>Item di Gudang : </h1>
      {gudang.map((item) => (
        <div key={item.id}>
          <h2>{item.nama}</h2>
          <li>Harga : Rp.{item.harga}</li>
        </div>
      ))}
      <br />
      <input type="text" placeholder="cari barang" id="cariBarang" />
      <button onClick={CariBarang}>Cari</button>
      <div>
        {isSearched && result.length > 0 ? (
          result.map((item) => (
            <div key={item.id}>
              <h2>{item.nama}</h2>
              <li>Harga : Rp.{item.harga}</li>
            </div>
          ))
        ) : isSearched && result.length === 0 ? (
          <p>Tidak ada hasil yang cocok!</p>
        ) : null}
      </div>
    </div>
  );
}
