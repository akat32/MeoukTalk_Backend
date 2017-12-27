module.exports = (router, Users, io)=>{
  io.on('connection', (socket)=>{
    socket.on('disconnection');
  });
  return router;
};
