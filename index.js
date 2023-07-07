const express = require("express");
const cors = require("cors");
const app = express();

// Configure dotenv files.
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

// Cors help in connection (by skipping origin policy).
app.use(cors());

// Accept and read json from requests.
app.use(express.json());

// Listen on localhost:5000.
app.listen(5000, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});
