const express = require("express");
const router = express.Router();
const db = require("../db");

// Health check
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// GET all users
router.get("/users", (req, res) => {
  res.json(db.getUsers());
});

// GET user by ID
router.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = db.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

module.exports = { router };
