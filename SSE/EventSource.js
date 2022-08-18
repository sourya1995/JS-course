var source = new EventSource("/path/to/stream");
source.onopen = function() {
    /* do something */
}

source.onerror = function() {
    /* handle error */
}

source.addEventListener("foo", function(event){
    processFoo(event.data)
});

source.onmessage = function(event) {
    log_message(event.id, event.data);

    if(event.id == "CLOSE"){
        source.close();
    }
}