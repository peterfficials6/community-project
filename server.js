const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/posts");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/posts", postRoutes);

app.get("/", 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});