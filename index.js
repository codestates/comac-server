const express = require("express");
const cors = require("cors");

require("./models")
const mainController = require("./controllers");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// router
app.post('/login', mainController.login);
app.post('/signup', mainController.signup);
app.post('/logout', mainController.logout);
app.get('/user', mainController.userinfo);

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
