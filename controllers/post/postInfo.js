const { user, post, comment, post_like } = require("../../models");

module.exports = async (req, res) => {
  const { post_id } = req.params
  const postInfo = await post.findOne({
    where: {
      id: post_id
    },
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
      return null;
    };
    return {
      ...result.dataValues,
      comments: result.dataValues.comments.length,
      post_likes: result.dataValues.post_likes.length,
      ...result.dataValues.user.dataValues
    }
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    });
  });
  
  delete postInfo.user;

  if(!postInfo){
    res.status(404).json({
      data: null,
      message: '내용을 찾을 수 없습니다'
    });
  }else{
    res.status(200).json({
      data: postInfo,
      message: 'ok'
    });
  }
}