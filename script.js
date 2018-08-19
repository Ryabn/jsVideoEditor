var canvas;
var video1;
var video2;
var video3;
var ctx;


function load(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    video1 = videoCreator('assets/sw1.mp4'); 
    // video2 = videoCreator('assets/sw1.mp4'); 
    // video3 = videoCreator('assets/sw2.mp4'); 
    // video3.muted = false;

    setInterval(drawVideo, 1000/60);
}

function drawVideo(){
    ctx.drawImage(video1, 200, 200, video1.videoWidth/2, video1.videoHeight/2, 0, 0, 890, 400);
    // ctx.drawImage(video2, 0, 800);
    // ctx.drawImage(video3, 0, 1616);
}
function videoCreator(fileName){
    let video = document.createElement('video');
    video.src = fileName;
    video.play();
    video.muted = true;
    video.addEventListener( "loadedmetadata", function (e) {
        canvas.height = this.videoHeight;
        canvas.width = this.videoWidth;
    }, false );
    return video;
}