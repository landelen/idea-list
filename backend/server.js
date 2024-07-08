const connectDB = require("./db/connect");
require("dotenv").config();

const express = require("express");
const app = express();

const PORT = 3000;

const apiRoutes = require("./routes/api-route");

app.use(express.json());
app.use("/", apiRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
