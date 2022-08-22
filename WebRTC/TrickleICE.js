//once the shared signaling channel is established
var ice = {"iceServers": [
    {"url": "stun:stun.l.google.com:19302"},
    {"url": "turn.turnserver.com", "username": "user", "credential": "pass"}

]};

var signalingChannel = new SignalingChannel();
var pc = new RTCPeerConnection(ice);

navigator.getUserMedia({"audio" : true}, gotStream, logError);

function gotStream(stream){
    pc.addStream(stream);

    pc.createOffer(function(offer)
    {
        pc.setLocalDescription(offer);
        signalingChannel.send(offer.sdp);
        
    });
}

pc.onicecandidate = function(evt) {
    if(evt.candidate) {
        signalingChannel.send(evt.candidate);
    }
}

signalingChannel.onmessage = function(msg) {
    if(msg.candidate){
        pc.addIceCandidate(msg.candidate);
    }
}

function logError(){ console.log("something to handle error")}

