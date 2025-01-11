import imgHeader from "../../assets/eat.png";


export default function Header() {
    return (
      <div className="header">
        <h1>Selamat datang di Cafe Warjo</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          voluptates quaerat possimus. Omnis, nemo dolor?
        </p>
        <button>Cari Menu</button>
        <div className="imgHeader">
          <img src={imgHeader} alt="eat" />
        </div>
      </div>
    );
  }