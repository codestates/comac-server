const { user } = require("../../models")
const { isAuthorized } = require("../tokenHandle");

module.exports =  async (req, res) => {
  const token = isAuthorized(req);
  if(!token) {
    return res.status(400).json({
      data: null,
	    message: "you're currently not logined"
    });
  };
  if(token === 'err') {
    return res.status(500).json({
      data: null,
      message: "Server Error"
    });
  };
  res.status(205).json({
    data: null,
  	message: "successfully signed out!"
  });

}