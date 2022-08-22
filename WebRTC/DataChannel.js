function handleChannel(chan) {
    chan.onerror = function(error) {"eerror"}
    chan.onclose = function(){"close"}

    chan.onopen = function(evt){
        chan.send("DC established. Hello, peer!")
    }

    chan.onmessage = function(msg){
        if(msg.data instanceof Blob){
            processBlob(msg.data);
        } else {
            processText(msg.data);
        }
    }
}

var signallingChannel = new SignalingChannel();
var pc = new RTCPeerConnection();
//offer/answer code
var dc = pc.createDataChannel("namedChannel", {reliable: false}); //setup unreliable delivery
handleChannel(dc);
pc.ondatachannel = handleChannel;

var mediaContraints = {
    mandatory: {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: false
    }
};

pc.createOffer(function(offer){"stuff"}, null, mediaContraints);