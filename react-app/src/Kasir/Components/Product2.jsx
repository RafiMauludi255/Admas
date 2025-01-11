import { useEffect, useState } from "react";
import "../Style/produk.css";
import { API_URL } from "../Utils/constants";
import axios from "axios";
import ListItem from "./ListItem2";
import Modal from "./Modal";

export default function Produk2() {
  // useState untuk menampilkan produk
  const [product, setProduct] = useState([]);
  // useState untuk filter
  const [filtered, setFilter] = useState("all");

  // API ke database produk
  useEffect(() => {
    axios
      .get(API_URL + "produk")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // handle filter
  const handleFilterChange = (kategori) => {
    setFilter(kategori);
  };

  const filteredProduct = product.filter((item) => {
    // mengembalikan semua produk
    if (filtered === "all") {
      return true;
    } else {
      return item.kategori === filtered;
    }
  });

  // modal untuk produk
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (products) => {
    setSelectedProduct(products);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="menu">
      <div className="listMenu">
        {/* filter button */}
        <button onClick={() => handleFilterChange("all")}>Semua</button> <br />
        <button onClick={() => handleFilterChange("makanan")}>Makanan</button>
        <br />
        <button onClick={() => handleFilterChange("minuman")}>Minuman</button>
      </div>
      {/* mapping all produk */}
      <div className="flex">
        {filteredProduct ? (
          filteredProduct.map((item) => (
            <div className="box" key={item.id} onClick={() => openModal(item)}>
              <img src={`assets/${item.gambar}`} alt={item.namaProduk} />
              <div className="desc">
                <h3>{item.namaProduk}</h3> <p>Rp.{item.harga}</p>
              </div>
              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedProduct={selectedProduct}
              ></Modal>
            </div>
          ))
        ) : (
          <p>tidak ada</p>
        )}
      </div>
      {/* list belanjaan */}
      <ListItem />
    </div>
  );
}
