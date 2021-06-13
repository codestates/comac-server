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

  await comment_like.findOrCreate({
    where: {
      user_id,
      comment_id
    }
  })
  .then(([result, create]) => {
    if(!create) {
      return res.status(409).json({
        data: null,
        message: '이미 좋아요를 눌렀습니다'
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