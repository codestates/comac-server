const express = require("express");
const cors = require("cors");

require("./models")
const mainController = require("./controllers");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// router
app.post('/login', mainController.logIn);
app.post('/signup', mainController.signUp);
app.post('/logout', mainController.logOut);
app.get('/user', mainController.userInfo);

app.post('/comment/:post_id', mainController.commentAdd);
app.get('/comment/:post_id', mainController.commentList);
app.post('/comment/:comment_id/like', mainController.commentLike);
app.post('/comment/:comment_id/unlike', mainController.commentUnlike);

app.post('/login/google', mainController.googleLogin)

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
