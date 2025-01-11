import "../style/register.css";
import Navbar from "../component/navbar";

export default function Login() {
  return (
    <div className="bodyRegister">
      <Navbar />
      <div className="box">
        <h2>Login</h2>
        <div className="inputRegister">
          <p>Email</p>
          <input type="email" placeholder="your email active" required />
          <p>Password</p>
          <input type="password" placeholder="create new password" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
