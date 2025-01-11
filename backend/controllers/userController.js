// const { db } = require("../server");

// Mendapatkan semua user
exports.getAllUsers = (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to retrieve users" });
      }
      res.status(200).json(results);
    });
  };
// Menambahkan user baru
exports.createUser = (req, res) => {
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
};
