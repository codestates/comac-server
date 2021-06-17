const { user, post, tag, post_tag_map } = require("../../models");
const { isAuthorized } = require("../tokenHandle");

module.exports = async (req, res) => {
const userData = isAuthorized(req);
  if(!userData) {
    return res.status(401).json({
      userData: null,
	    message: 'Authorization dont exist'
    });
  }

  const { content } = req.body;
  let user_id = await user.findOne({
    where: {
      username: userData.username
    }
  })
  if(!user_id){
    return res.sendStatus(403).json({
      data: null,
      message: 'You need sign up'
    });
  }else{
    user_id = user_id.dataValues.id
  }

  const post_id = await post.create({
    content,
    user_id,
    channel_id: 1
  })
  .then(result => result.dataValues.id)
  .catch((err) => {
    console.error(err);
  });


  let tag_id = [];
  // content에 담겨있는 태그 추출
  const tagList = content.split(' ')
  .filter((word) => word[0] === '#');

  // tag 테이블에 추가 후 tag_id 찾기
  for(let i = 0; i < tagList.length; i++) {
    const id = await tag.findOrCreate({
      where: {
        name: tagList[i].slice(1)
      }
    })
    .then(([result]) => result.dataValues.id)
    .catch(err => console.error(err))
    // 하나의 post에는, 태그당 하나씩만 담는다.
    if(!tag_id.includes(id)) {
      tag_id.push(id);
    };
  };

  for(let i = 0; i < tag_id.length; i++) {
    await post_tag_map.create({
      tag_id: tag_id[i],
      post_id
    })
    .catch((err) => {
      console.error(err)
    });
  };

  res.status(201).json({
    data: {
      id: post_id
    },
    message: 'ok'
  });
}