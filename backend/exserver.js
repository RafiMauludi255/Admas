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
  database: "apotek",
});

// Get Data Users
app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM data_dokter";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Post Data Users
app.post("/api/register", (req, res) => {
  const { nama, usia, status, ttl, wa, email } = req.body;

  // Query Insert Data
  const sql = "INSERT INTO data_dokter (nama, usia, status, ttl, wa, email) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql,[nama, usia, status, ttl, wa, email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res
        .status(200)
        .json({ id: result.insertId, nama, usia, status, ttl, wa, email });
    }
  });
});

app.listen(8001, () => {
  console.log("Running on http://localhost:8001");
});
