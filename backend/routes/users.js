const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../controllers/userController");

// Endpoint untuk mendapatkan semua user
router.get("/", getAllUsers);

// Endpoint untuk membuat user baru
router.post("/", createUser);

module.exports = router;
