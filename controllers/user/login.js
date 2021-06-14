const { user } = require("../../models");
const { generateAccessToken } = require("../tokenHandle");

module.exports = async (req, res) => {
  const { username, password } = req.body;
  await user.findOne({
    where: {
      username,
      password,
      provider: 'local'
    }
  })
  .then((userInfo) => {
    if(!userInfo) {
      return res.status(401).json({
        data: null,
        message: 'Invalid user or Wrong password'
      })
    }
    res.status(200).json({
      data: {
        accessToken: generateAccessToken(req.body)
      },
      message: 'ok'
    })
  })
  .catch((err) => {
    return res.status(500).json({
      data: null,
      message: 'Server Error'
    })
  })
}