const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", function(client) {
  const {
    handleRegister,
    handleJoin,
    handleLeave,
    handleMessage,
    handleGetChatrooms,
    handleGetAvailableUsers,
    handleDisconnect
  } = makeHandlers(client, clientManager, chatroomManager);

  client.on("register", handleRegister);

  client.on("join", handleJoin);

  client.on("leave", handleLeave);

  client.on("message", handleMessage);

  client.on("chatrooms", handleGetChatrooms);

  client.on("avaialableUsers", handleGetAvailableUsers);

  client.on("disconnect", function() {
    console.log("client disconnect...", client.id);
    handleDisconnect();
  });

  client.on("error", function() {
    console.log("received error from client:", client.id);
    console.log(err);
  });
});

server.listen(3000, function(err) {
  if (err) throw err;
  console.log(`listening on port 3000`);
});

module.exports = {
  io
};
