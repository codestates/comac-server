const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json('Hello World');
})
const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
