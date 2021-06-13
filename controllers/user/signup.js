const { user } = require("../../models")

module.exports =  async (req, res) => {
  const { username, password, name, generation, img} = req.body;

  await user.findOrCreate({
    where: {
      username
    },
    defaults: {
      password,
      name,
      generation,
      img
    }
  })
  .then(([result, create]) => {
    if(!create) {
      return res.status(409).json({
        data: null,
        message: "이미 존재하는 닉네임입니다"
      })
    }
    res.status(201).json({
      data: {
        id: result.dataValues.id
      },
      message: "ok"
    })
  })
  .catch((err) => {
    res.status(500).json({
      "data": null,
	    "message": "Server Error"
    })
  })
}