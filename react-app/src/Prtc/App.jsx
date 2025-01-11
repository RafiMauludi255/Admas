import { useEffect, useState } from "react";
import { API_URL } from "../Kasir/Utils/constants";
import axios from "axios";

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL + "produk")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const card = {
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px rgb(40,40,47)",
    margin: "5px",
  };

  const icon = {
    width: "100px",
    height: "50px",
    borderRadius: "50%"
  };

  

  return (
    <div>
      <ul>
        {result ? (
          filterMakanan.map((item) => (
            <div key={item.id} style={card}>
              <img
                src={`assets/${item.gambar}`}
                alt={item.namaProduk}
                style={icon}
              />
              <p>{item.namaProduk}</p>
              <p>{item.harga}</p>
            </div>
          ))
        ) : (
          <p>gagal ambil data</p>
        )}
      </ul>
    </div>
  );
}

export default App;
