const dns = require('node:dns');
dns.setServers(['1.1.1.1', '1.0.0.1']); // Forces Cloudflare DNS


const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db")
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const payRoutes = require("./routes/payRoutes");

const app = express();

// Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Plant Disease Detection Backend Running"
  });
});
connectDb();

app.use("/api/auth",authRoutes);
app.use("/api/pay",payRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});