const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const useRouter = require("./routes/route");
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch(err => console.log("Error while connecting to MongoDB:", err));

  app.use("/api/users",useRouter);
app.listen(5000, () => {
  console.log("The server is working on port 5000");
});
