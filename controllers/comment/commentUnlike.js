const { user, comment_like } = require("../../models");
const { isAuthorized } = require("../tokenHandle");

module.exports = async (req, res) => {
  const userData = isAuthorized(req);
  if(!userData) {
    return res.status(401).json({
      data: null,
      message: 'Authorization dont exist'
    });
  };
  const { comment_id } = req.params;
  const user_id = await user.findOne({
    where: {
      username: userData.username
    }
  })
  if(!user_id){
    return res.status(403).json({
      data: null,
      message: 'You need sign up'
    })
  }else{
    user_id = user_id.dataValues.id;
  }

  await comment_like.destroy({
    where: {
      user_id,
      comment_id
    }
  })
  .then((result) => {
    if(!result) {
      res.status(409).json({
        data: null,
        message: '이미 좋아요를 취소했습니다'
      });
    }else{
      res.status(201).json({
        data: null,
        message: 'ok'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  });
}