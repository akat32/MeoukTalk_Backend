module.exports = (router, Users)=>{
  router.post('/add', async (req,res)=>{
    let result = Users.findOne({friend_id : req.body.friend_id});
    
  })
  return router;
}
