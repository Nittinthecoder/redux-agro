const mongoose = require("mongoose");
const colors = require("colors");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongoDB connected with server: ${data.connection.host}`.bgGreen.black);
    });
};

module.exports = connectDatabase;