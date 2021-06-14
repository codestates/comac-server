const { user } = require("../../models")
const { isAuthorized } = require("../tokenHandle");

module.exports =  async (req, res) => {
  const userData = isAuthorized(req);
  if(!userData) {
    return res.status(401).json({
      userData: null,
	    message: 'Authorization dont exist'
    });
  };
  await user.findOne({
    where: {
      username: userData.username,
      password: userData.password,
      provider: userData.provider
    }
  })
  .then((userInfo) => {
    if(!userInfo) {
      return res.status(400).json({
        data: null,
        message: 'you are currently not logined'
      });
    }
    delete userInfo.dataValues.password
    res.status(200).json({
      data: userInfo.dataValues,
      message: 'ok'
    });
  })
  .catch((err) => {
    return res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  })

}