const express = require("express");
const cors = require("cors");

require("./models")
const { user, comment, post, oauth } = require("./controllers");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// router
app.post('/api/login', user.logIn);
app.post('/api/signup', user.signUp);
app.post('/api/logout', user.logOut);
app.get('/api/user', user.userInfo);

app.post('/api/comment/:post_id', comment.commentAdd);
app.get('/api/comment/:post_id', comment.commentList);
app.post('/api/comment/:comment_id/like', comment.commentLike);
app.post('/api/comment/:comment_id/unlike', comment.commentUnlike);

app.post('/api/post', post.postAdd);
app.get('/api/post', post.postList);
app.get('/api/post/:post_id', post.postInfo);
app.post('/api/post/:post_id/like', post.postLike);
app.post('/api/post/:post_id/unlike', post.postUnlike);

app.post('/api/login/google', oauth.googleLogin)

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});
module.exports = server;
