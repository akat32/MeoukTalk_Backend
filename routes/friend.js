module.exports = (router, Users)=>{
  router.post('/add', async (req,res)=>{
    let result = Users.findOne({friend_id : req.body.friend_id});
    var Tlqkf = {name : result.name}
    Users.update({token: req.body.token}, {$push: {friend_list:  Tlqkf}});

  })
  return router;
}
