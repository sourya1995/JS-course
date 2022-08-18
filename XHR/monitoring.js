var xhr = new XMLHttpRequest();
xhr.open('GET', '/resource');
xhr.timeout = 5000;

xhr.addEventListener('load', function(){/*doWhileLoading*/});
xhr.addEventListener('error', function(){/*handleError*/});

var onProgressHandler = function(event) {
    if(event.lengthComputable) {
        var progress = (event.loaded / event.total) * 100;
        //other stuff
    }
}

xhr.upload.addEventListener('progress', onProgressHandler); //for upload
xhr.addEventListener('progress', onProgressHandler); //for download
xhr.send();
