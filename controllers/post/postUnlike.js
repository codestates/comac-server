const { user, post, post_like } = require("../../models");
const { isAuthorized } = require("../tokenHandle");

module.exports = async (req, res) => {
  const userData = isAuthorized(req);
  if(!userData) {
    return res.status(401).json({
      data: null,
      message: 'Authorization dont exist'
    });
  };
  const { post_id } = req.params;

  await post.findOne({
    where: {
      id: post_id
    }
  })
  .then((result) => {
    if(!result) {
      return res.status(404).json({
        data: null,
        message: '내용을 찾을 수 없습니다.'
      })
    }
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  });

  const user_id = await user.findOne({
    where: {
      username: userData.username
    }
  })
  .then((result) => {
    if(!result) {
      return res.status(403).json({
        data: null,
        message: 'You need sign up'
      })
    }
    return result.dataValues.id;
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  });

  await post_like.destroy({
    where: {
      user_id,
      post_id
    }
  })
  .then((result) => {
    if(!result) {
      return res.status(409).json({
        data: null,
        message: '이미 좋아요를 취소했습니다'
      });
    };
    res.status(201).json({
      data: null,
      message: 'ok'
    });
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  });
}