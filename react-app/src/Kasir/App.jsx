import "./Style/app.css";
import { Component } from "react";
import Navbar from "../Kasir/Components/Navbar";
import Produk from "./Components/Product2";

export default class App extends Component {
  

  render() {
    return (
      <div className="body">
        <Navbar />
        <Produk />
        
      </div>
    );
  }
}
