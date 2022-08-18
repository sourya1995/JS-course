var blob = "some big file";
const BYTES_PER_CHUNK = 1024 * 1024;
const SIZE = blob.size;

var start = 0;
var end = BYTES_PER_CHUNK;

while(start < SIZE){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload');
    xhr.onload = function(){
        //do something
    }

    xhr.setRequestHeader('Content-Range', start+'-'+end+'/'+SIZE);
    xhr.send(blob.slice(start, end));

    start = end;
    end = start + BYTES_PER_CHUNK; //move to next chunk of 1 MB
}