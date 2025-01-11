import "../Style/modal.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { API_URL_PESANAN } from "../Utils/constants";

const Modal = ({ isOpen, onClose, selectedProduct }) => {
  if (!isOpen) return null;

  const [pembeli, setPembeli] = useState("");
  const [totalPesanan, setTotalPesanan] = useState("");
  const [tambahan, setTambahan] = useState("");
  // const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      const result = await axios.post(API_URL_PESANAN + "pesanan", {
        pembeli: pembeli,
        namaProduk: selectedProduct.namaProduk,
        totalPesanan: totalPesanan,
        tambahan: tambahan,
        harga: selectedProduct.harga,
      });

      // setResponse(result.data);
      // console.log(result.data);
    } catch (error) {
      console.log("error posting data : ", error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {selectedProduct && (
          <form onSubmit={handleSubmit}>
            <div key={selectedProduct.id}>
              <h2>Detail Produk : </h2>
              <h3>Nama Produk : {selectedProduct.namaProduk}</h3>
              <p>
                Nama Pembeli :{" "}
                <input
                  className="inputPembeli"
                  type="text"
                  value={pembeli}
                  onChange={(e) => setPembeli(e.target.value)}
                />
              </p>
              <p>
                Pesan berapa banyak :{" "}
                <input
                  type="number"
                  required
                  value={totalPesanan}
                  onChange={(e) => setTotalPesanan(e.target.value)}
                />
              </p>
              <textarea
                placeholder="tambah keterangan"
                value={tambahan}
                onChange={(e) => setTambahan(e.target.value)}
              ></textarea>
              <br />

              <NotifSimpan />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

function NotifSimpan() {
  function notif() {
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Detail pesanan sudah disimpan",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  return (
    <button className="simpanModal" onClick={notif}>
      Simpan
    </button>
  );
}

export default Modal;
