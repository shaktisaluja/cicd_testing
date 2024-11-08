const express = require("express");
const app = express();

app.use("/api/test", (req, res) => {
  res.send({ message: "server is running" });
});

app.use("/test", (req, res) => {
  res.send({ message: "server is running with test" });
});


const server = app.listen(8000, () => {
  console.log(`Server is running on ${8000}`);
});