const { user, comment } = require("../../models");
const { isAuthorized } = require("../tokenHandle");

module.exports = async (req, res) => {
  const userData = isAuthorized(req);
  const { content } = req.body;
  const { post_id } = req.params;
  if(!userData) {
    return res.status(401).json({
      userData: null,
	    message: 'Authorization dont exist'
    });
  };
  const user_id = await user.findOne({
    where: {
      username: userData.username,
      password: userData.password
    }
  })
  .then((result) => {
    if(!result) {
      return res.sendStatus(403).json({
        data: null,
        message: 'You need sign up'
      });
    }
    return result.dataValues.id;
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  });

  await comment.create({
    content,
    post_id,
    user_id
  })
  .then((result) => {
    res.status(201).json({
      data: {
        id: result.dataValues.id
      },
      message: 'ok'
    })
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  });
}