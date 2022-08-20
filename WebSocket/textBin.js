const { Socket } = require("dgram")

var ws = new WebSocket("wss://example.com/socket")

ws.onopen = function() {
    socket.send("Hello Server!");
    socket.send(JSON.stringify({'msg' : 'payload'}));

    var buffer = new ArrayBuffer(128);
    socket.send(buffer);

    var intview = new Uint32Array(buffer);
    socket.send(intview);

    var blob = new Blob([buffer]);
    socket.send(blob);
}