import "../style/navbar.css";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <span>RSCH</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/pages/about">About</Link>
          <Link to="#">Contact</Link>
          <Link to="/pages/register">Register</Link>
        </li>
      </ul>
        <div className="loginBtn">
          <Link to="/pages/login"><input type="button" value="Login" /></Link>
        </div>
    </nav>
  );
}
