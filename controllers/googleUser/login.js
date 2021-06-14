const { user } = require("../../models");
const { generateAccessToken } = require("../tokenHandle");
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

module.exports = async (req, res) => {
    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const { sub, picture } = ticket.getPayload();  
    //sub => 21자리의 Google 회원 id 번호  
    await user.findOrCreate({
      where: {
        username: sub,
        provider: 'google'
      },
      defaults: {
        img: picture,
      }
    }).then(([result, create]) => {
      if(!create){
        // 존재하는 유저
        res.status(200).json({
          data: {
            accessToken: generateAccessToken({
              username: sub,
              provider: 'google'
            })
          },
          message: 'ok'
        })
      }
      res.status(201).json({
        data: {
          id: result.dataValues.id,
          accessToken: generateAccessToken({
            username: sub,
            provider: 'google'
          })
        },
        message: 'ok'
      })
    })
    .catch((err) => {
      res.status(500).json({
        data: null,
        message: 'Server Error'
      })
    })
}