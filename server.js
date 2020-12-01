//Shane Patterson
//2020

const httpServer = require("http").createServer();
const io = require("socket.io")(http);
var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *:' + port);
});

io.on("connection", (socket) => {
   io.emit("hello", "world");
});

io.on('connection', function(socket){
  socket.on('value', function(msg){
      io.emit('value', msg);
      console.log(msg);
  });
});


/*clients will recieve msg variable passed to them add this to your client side script:

socket.on('value', function(msg){
           
         //  WHATEVER MAX NEEDS
           
        });

        */