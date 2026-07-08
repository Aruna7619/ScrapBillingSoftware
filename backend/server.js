const pool = require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("Scrap Billing Backend is Running 🚀");
});


app.get("/items", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ScrapItems ORDER BY ItemID");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Start Server
const PORT = 5000;
pool.connect()
  .then(() => {
    console.log("✅ PostgreSQL Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err.message);
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});