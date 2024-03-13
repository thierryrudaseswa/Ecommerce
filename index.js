const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRoute = require("./routes/route");
const authRoute = require("./routes/auth");
const cors = require("cors");
const productRoute = require("./routes/Product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/Order");

const stripeRoute = require("./routes/stripe");

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce")
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch(err => console.log("Error while connecting to MongoDB:", err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(5000, () => {
  console.log("The server is working on port 5000");
});
