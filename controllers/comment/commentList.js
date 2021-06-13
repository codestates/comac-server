const { comment } = require("../../models");

module.exports = async (req, res) => {
  const { post_id } = req.params
  await comment.findAll({
    where: {
      post_id
    }
  })
  .then((result) => {
    if(!result[0]) {
      return res.status(404).json({
        data: null,
        message: '내용을 찾을 수 없습니다'
      });
    };
    res.status(200).json({
      data: result.map((data) => data.dataValues),
      message: 'ok'
    });
  })
  .catch((err) => {
    res.status(500).json({
      data: null,
      message: 'Server Error'
    });
  });
}