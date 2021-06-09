const express = require("express");

const app = express();
const port = 80;

app.use(express.json())
app.get('/', (req, res) => {
  res.json('Hello World');
})
const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
