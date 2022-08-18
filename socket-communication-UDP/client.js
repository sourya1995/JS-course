const dgram = require("dgram");
const readline = require("readline");

const client = dgram.createSocket("udp4");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "",
  });

message = Buffer.from("hello from client");
client.send("Hello from client", 3500, "localhost", (err) => {
    console.log("message sent to server");

});

client.on("message", (data) => {
    console.log("message from server: ", data.toString());
});

client.on("end", () => {
    console.log("disconnected from server");
})

rl.prompt();
rl.on("line", function(line){
    client.send(line, 3500, "localhost");
    rl.prompt();
});