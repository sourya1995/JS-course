const dgram = require("dgram");

const server = dgram.createSocket("udp4");
const port = 3500;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });
  
  let clientSocket = 0;

server.on("message", (data, rinfo) => {
    console.log(`Msg from client at port: ${rinfo.port}: ${data}`);
    server.send("Hello from server", rinfo.port, "localhost");
});

server.on("listening", () => {
    console.log("server is listening on port: ", port);
});

server.on("close", (err) => {
    if(err){
        console.log("Client disconnected due to error");
    } else {
        console.log("client disconnected");
    }
    server.close();
});

server.bind(port);