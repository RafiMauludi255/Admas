import "../Style/listItem.css";
import Swal from "sweetalert2";

export default function ListItem({ selectedItems }) {
  const totalHarga = selectedItems.reduce(
    (total, item) => total + item.harga,
    0
  );

  function AlertBayar() {
    Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    setInterval(() => {
        window.location.reload();
    }, 1500);

  }

  return (
    <div className="list-item">
      <h2>Daftar Item :</h2>
      <ul>
        {selectedItems.map((item) => (
          <div>
            <li key={item.id}>
              {item.namaProduk} - <span>Rp.{item.harga}</span>
            </li>
          </div>
        ))}
      </ul>

      <footer>Total : Rp.{totalHarga}</footer>
      <button onClick={AlertBayar}>Bayar</button>
    </div>
  );
}
