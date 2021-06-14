module.exports = {
  user: {
    logIn: require("./user/logIn"),
    logOut: require("./user/logOut"),
    signUp: require("./user/signUp"),
    userInfo: require("./user/userInfo")
  },
  comment: {
    commentAdd: require("./comment/commentAdd"),
    commentList: require("./comment/commentList"),
    commentLike: require("./comment/commentLike"),
    commentUnlike: require("./comment/commentUnlike")
  },
  post: {
    postAdd: require("./post/postAdd"),
    postList: require("./post/postList"),
    postInfo: require("./post/postInfo"),
    postLike: require("./post/postLike"),
    postUnlike: require("./post/postUnlike")
  },
  oauth: {
    googleLogin: require("./googleUser/login")
  }
};