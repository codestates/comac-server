const { user, post, comment, post_like } = require("../../models");

module.exports = async (req, res) => {

  const postList = await post.findAll({
    attributes: ['id', 'content', 'createdAt', 'updatedAt'],
    include: [{
      model: user,
      attributes: ['username', 'generation', 'img']
    },
    {
      model: comment
    },
    {
      model: post_like
    }]
  })
  .then((result) => {
    if(!result) {
      return res.status(404).json({
        data: null,
        message: '내용을 찾을 수 없습니다'
      });
    };
    return result.map((data) => {
      return {
        ...data.dataValues,
        comments: data.dataValues.comments.length,
        post_likes: data.dataValues.post_likes.length,
        ...data.dataValues.user.dataValues
      }
    })
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    });
  });

  res.status(200).json({
    data: postList.map((data) => {
      delete data.user
      return data
    }),
    message: 'ok'
  });
}