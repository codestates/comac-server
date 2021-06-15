const { comment, user, comment_like } = require("../../models");

module.exports = async (req, res) => {
  const { post_id } = req.params
  await comment.findAll({
    attributes: ['id', 'content', 'createdAt', 'updatedAt'],
    where: {
      post_id
    },
    include: [{
      model: user,
      attributes: ['username', 'generation', 'img']
    }, 
    {
      model: comment_like
    }]
  })
  .then((result) => {
    if(!result[0]) {
      res.status(404).json({
        data: null,
        message: '내용을 찾을 수 없습니다'
      });
    }else{
      res.status(200).json({
        data: result.map((data) => {
          const { id, content, createdAt, updatedAt, user, comment_likes} = data.dataValues;
          return { id, content, createdAt, updatedAt, ...user.dataValues, comment_like: comment_likes.length }
        }),
        message: 'ok'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    });
  });
}