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

logStatus("ICE gathering state: " + pc.iceGatheringState);


pc.onicecandidate = function(evt) {

    if(evt.candidate) {
        signalingChannel.send(evt.candidate);
    }
    logStatus("ICE gathering state change: " + evt.target.iceGatheringState);
}

logStatus("ICE connection state:" + pc.iceConnectionState);

pc.oniceconnectionstatechange = function(evt) {
    logStatus("ICE connection state change:" + evt.target.iceConnectionState);
}

signalingChannel.onmessage = function(msg) {
    if(msg.candidate){
        pc.addIceCandidate(msg.candidate);
    }
}

function logError(){ console.log("something to handle error")}

