import Navbar from "./component/navbar";
import Body from "./component/body";
import "./style/master.css"

export default function Page() {
  return (
    <div className="master">
      <Navbar />
      <Body />
    </div>
  )
}