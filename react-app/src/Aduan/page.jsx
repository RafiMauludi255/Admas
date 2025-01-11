// Halaman Utama

import Navbar from "./component/navbar";
import Body from "./component/body";
import "./style/master.css"

export default function Page() {
  return (
    <div className="master">
{/*  Component Navbar  */}
      <Navbar />

{/*  Compoenent Body  */}
      <Body />
    </div>
  )
}
