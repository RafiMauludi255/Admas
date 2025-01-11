import "../style/body.css";
import ListAsk from "./ListAsk";
import Trendy from "../asset/trendy.svg";
import Premium from "../asset/premium.svg";
import Prices from "../asset/prices.svg";
import Fast from "../asset/fast.svg";
import Register from "../pages/register";
import { Link } from "react-router";

// Halaman Utama
export default function Body() {
  return (
    <div className="body">
      <h1 className="heading">Suara Anda, Perubahan Kami</h1>
      <p className="welcome">
      Selamat datang di platform Aduan Masyarakat, tempat Anda dapat menyampaikan keluhan, saran, dan aspirasi dengan mudah. Kami hadir untuk mendengar suara Anda dan memastikan setiap laporan ditindaklanjuti dengan transparansi dan tanggung jawab.
      </p>
{/* Link ke halaman Register */}
      <Link to="/pages/register"><BtnStart props="Buat Aduan" props2="Daftar" /></Link>
 

      <BtnStart props="Buat Aduan" props2="Daftar" />

{/* Card */}

        <ListAsk
          imgCard1={Trendy}
          headCard1="Mudah Digunakan"
          dataCard1="Laporkan masalah hanya dengan beberapa klik melalui aplikasi atau website kami yang sederhana dan ramah pengguna."
          imgCard2={Premium}
          headCard2="100% Transparan"
          dataCard2="Pantau proses laporan Anda secara real-time dan lihat bagaimana keluhan Anda ditindaklanjuti."
          imgCard3={Prices}
          headCard3="Aman dan Terpercaya"
          dataCard3="Identitas Anda dilindungi sepenuhnya. Privasi Anda adalah prioritas kami."
          imgCard4={Fast}
          headCard4="Cepat dan Efisien"
          dataCard4="Aduan Anda akan langsung diteruskan ke pihak berwenang terkait untuk tindakan yang lebih cepat."
        />
    </div>
  );
}

function BtnStart({ props, props2 }) {
  return (
    <div>
      <button className="btnStart">{props}</button>
      <button className="btnLearn">{props2}</button>
    </div>
  );
}


