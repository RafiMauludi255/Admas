const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "admas",
});

app.get("/about", (req, res) => {
  res.send("Halaman About");
});

// Get Data Users
app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Post Data Users
app.post("/api/register", (req, res) => {
  const { email, whatsapp, password } = req.body;

  // Query Insert Data
  const sql = "INSERT INTO users (email, whatsapp, password) VALUES (?, ?, ?)";
  db.query(sql, [email, whatsapp, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ id: result.insertId, email, whatsapp, password });
    }
  });
});

// Endpoint login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // // Validasi input
  // if (!email || !password) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Semua field wajib diisi!" });
  // }

  // if (!email.includes("@")) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Format email tidak valid!" });
  // }

  // Validasi database
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Terjadi kesalahan server." });
    }

    if (result.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Email atau Password salah!" });
    }

    return res.status(200).json({ success: true, message: "Login berhasil!" });
  });
});

const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);

app.listen(8001, () => {
  console.log("Running on http://localhost:8001");
});
