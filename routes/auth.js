module.exports = (router,Users,rndstring)=>{
  router.post('/signin', async (req,res)=>{
    const result = await Users.findOne(req.body);
    if(!result) return res.status(404).json({message : "Users Not found"});
    else{
      let token = result.token;
      var Uresult = await Users.update({token : token}, {$set:{isLogined : true}});
      if(Uresult.ok) return res.status(200).json({message : "Login success!"})
      else return res.status(500).json({message : "Login failed"});
    }
  })
  .post('/signup', async (req,res)=>{
    var new_user = new Users(req.body);
    new_user.token = rndstring.generate(33);
    var result = await new_user.save();
    res.status(200).json({message : "signup success!"});
  })
  .get('/signout/:token', async (req,res)=>{
    const token = req.params.token;
    var result = await Users.update({token : token}, {$set:{isLogined : false}});
    if(result.ok) return res.status(200).json({message : "Logout success!"});
    else return res.stauts(500).json({message : "Logout failed"});
  })
  .get('/auto/:token', async (req,res)=>{
    const token = req.params.token;
    const result = await Users.findOne({token : token});
    if(result.isLogined == 1) return res.status(200).json(result);
    else if(!result) return res.status(404).json({message : "Users Not found"});
    else return res.status(401).json({message : "User is not logined"});
  });
  return router;
};
