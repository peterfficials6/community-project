const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({ message: "🚀 Social Media API is running!" });
});

// SAMPLE POST ROUTE (we'll expand later)
app.post("/posts", (req, res) => {
  res.json({
    message: "Post received",
    data: req.body
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});