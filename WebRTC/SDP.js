//once the shared signaling channel is established
var ice = {"iceServers": [
    {"url": "stun:stun.l.google.com:19302"},
    {"url": "turn.turnserver.com", "username": "user", "credential": "pass"}

]};

var signalingChannel = new SignalingChannel();
var pc = new RTCPeerConnection({});

navigator.getUserMedia({"audio" : true}, gotStream, logError);

function gotStream(stream){
    pc.addStream(stream);

    pc.createOffer(function(offer)
    {
        pc.setLocalDescription(offer);
        
    });
}

pc.onicecandidate = function(evt) {
    if(evt.target.iceGatheringState == 'complete') {
        local.createOffer(function(offer){
            console.log("offer with ICE candidates:" + offer.sdp);
            signalingChannel.send(offer.sdp);
        })
    }
}

function logError(){ console.log("something to handle error")}

