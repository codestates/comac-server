const express = require("express");
const cors = require("cors");

require("./models")
const { user, comment, post, oauth } = require("./controllers");

const app = express();
const port = 3000;

app.use(express.json());
const corsOption = {
  origin: '*',
  methods: ['GET', 'POST','OPTIONS'],
  credentials: true,
  maxAge: 86400,
  optionsSuccessStatus: 204
}
app.use(cors(corsOption));

// router
app.post('/login', user.logIn);
app.post('/signup', user.signUp);
app.post('/logout', user.logOut);
app.get('/user', user.userInfo);

app.post('/comment/:post_id', comment.commentAdd);
app.get('/comment/:post_id', comment.commentList);
app.post('/comment/:comment_id/like', comment.commentLike);
app.post('/comment/:comment_id/unlike', comment.commentUnlike);

app.post('/post', post.postAdd);
app.get('/post', post.postList);
app.get('/post/:post_id', post.postInfo);
app.post('/post/:post_id/like', post.postLike);
app.post('/post/:post_id/unlike', post.postUnlike);

app.post('/login/google', oauth.googleLogin)

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
