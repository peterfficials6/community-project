const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/posts");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/posts", postRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "🚀 Social backend running" });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});