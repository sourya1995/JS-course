function checkUpdates(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        //someStuff

        checkUpdates('/updates');  //Recursion 
    };
    xhr.send();
}

checkUpdates('/updates');