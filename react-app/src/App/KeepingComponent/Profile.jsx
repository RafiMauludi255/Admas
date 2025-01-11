import { useState } from "react";

const Data = [
  {
    id: 0,
    nama: "Muhammad Rafi Mauludi",
    prodi: "SI",
  },
  {
    id: 1,
    nama: "Audia Putri",
    prodi: "SI",
  },
  {
    id: 2,
    nama: "Nadya Shihab",
    prodi: "TI",
  },
  {
    id: 3,
    nama: "Anwar Sayuti",
    prodi: "TI",
  },
];

export default function Profile() {
  const [result, setResult] = useState([]);

  const filterSI = Data.filter((siswa) => siswa.prodi === "SI");

  const filterTI = Data.filter((siswa) => siswa.prodi === "TI");

  function CariSiswa() {
    const siswa = document.getElementById("cariSiswa").value;
    if (siswa === "SI") {
      setResult(filterSI);
    } else if (siswa === "TI") {
      setResult(filterTI);
    } else {
      setResult([]);
    }
  }

  const box = {
    border: "2px solid #242424",
    margin: "5px",
    padding: "5px",
    width: "300px",
  };

  return (
    <div>
      <p>Pilih jurusan :</p>
      <select name="" id="cariSiswa">
        <option value="SI">Sistem Informasi</option>
        <option value="TI">Teknik Informatika</option>
      </select>
      <button onClick={CariSiswa}>Cari</button>

      {result.map((siswa) => (
        <div key={siswa.id} style={box}>
          <p>Nama : {siswa.nama}</p>
          <p>Prodi : {siswa.prodi}</p>
        </div>
      ))}
    </div>
  );
}
