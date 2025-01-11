import axios from "axios";
import "../Style/list.css";
import { API_URL_PESANAN } from "../Utils/constants";
import { API_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ListItem2() {
  const [result, setResult] = useState([]);
  const [hargaa, setHarga] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + "produk")
      .then((response) => {
        setHarga(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(API_URL_PESANAN + "pesanan")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log("Error ambil data : ", error);
      });
  }, []);

  function notifBayar() {
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Terimakasih",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  return (
    <div>
      {result.length > 0 ? (
        result.map((item) => (
          <div className="list" key={item.id}>
            <h2>Daftar belanjaan : </h2>
            <p>Nama : {item.pembeli}</p>
            <li>
              {item.namaProduk} | {item.totalPesanan}
              <p>Tambahan : {item.tambahan}</p>
            </li>
            <p>Rp.{item.harga}</p>
            <button onClick={notifBayar}>Bayar</button>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
