const app = require("./app");
const colors = require("colors");
const connectDatabase = require("./db/Database");

//Handling exceptions

// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down due to uncaught exception`);
// });

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//connect database
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`.bgCyan.black
  );
});

//unhandled promise rejections
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to unhandled promise rejection`);
//   server.close(() => {
//     process.exit(1);
//   });
// });
