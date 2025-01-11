import "../Style/produk.css";
import { useState, Component } from "react";
import { API_URL } from "../Utils/constants";
import axios from "axios";
import ListItem from "./ListItem";
import Swal from "sweetalert2";

export default class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      result: [],
      selectedItems: [],
    };
    this.CariProduk = this.CariProduk.bind(this);
    this.HandleItemClick = this.HandleItemClick.bind(this);
    
  }

  componentDidMount() {
    axios
      .get(API_URL + "produk")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus, result: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  CariProduk() {
    const { menus } = this.state;

    const cariproduk = document.getElementById("pilihMenu").value;
    if (cariproduk === "makanan") {
      this.setState({
        result: menus.filter((item) => item.kategori === "makanan"),
      });
    } else if (cariproduk === "minuman") {
      this.setState({
        result: menus.filter((item) => item.kategori === "minuman"),
      });
    } else {
      this.setState({ result: menus });
    }
  }

  HandleItemClick(item) {
    this.setState((prevState) => ({
      selectedItems: [...prevState.selectedItems, item],
    }));
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  // setInterval(() => {
  //     window.location.reload();
  // }, 1500);
  }

  render() {
    const { result, selectedItems } = this.state;
    return (
      <div className="menu">
        <h2>Menu : </h2>
        <p>
          Filter Menu :
          <select
            id="pilihMenu"
            className="filterMenu"
            onChange={this.CariProduk}
          >
            <option value="">Semua Menu</option>
            <option value="makanan">Makanan</option>
            <option value="minuman">Minuman</option>
          </select>
        </p>

        <div className="flex">
          {result.length > 0 ? (
            result.map((item) => (
              <div className="box" key={item.id} onClick={() => this.HandleItemClick(item)}>
                <img src={`assets/${item.gambar}`} alt={item.namaProduk} />
                <div className="desc">
                  <h3>{item.namaProduk}</h3> <p>Rp.{item.harga}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Menu tidak ada</p>
          )}
        </div>
        <ListItem selectedItems={selectedItems}/>
      </div>
    );
  }
}
