var ws = new WebSocket('wss://example.com/socket')
ws.onerror = function(error) { "Something" }
ws.onclose = function() { "something"}

ws.onopen = function() {
    ws.send("Connection established");
}

ws.onmessage = function(msg) {
    if(msg.data instanceof Blob){
        processBlob(msg.data);
    } else {
        processText(msg.data);
    }

}