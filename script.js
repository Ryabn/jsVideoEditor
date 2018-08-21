var canvas;
var video1;
var video2;
var video3;
var ctx;
var capturer;


function load(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    video1 = videoCreator('assets/sw1.mp4'); 
    // video2 = videoCreator('assets/sw1.mp4'); 
    // video3 = videoCreator('assets/sw2.mp4'); 
    // video3.muted = false;
    capturer = new CCapture({
        format: 'webm'
    });
}
function record(){
    video1.play();
    setInterval(drawVideo, 1000/120);
    capturer.start();
}

function stop(){
    capturer.stop();
    capturer.save(function(blob){
        console.log(blob);
    });
}
function drawVideo(){
    ctx.drawImage(video1, 0, 0, video1.videoWidth, video1.videoHeight, 0, 0, 990, 408);
    capturer.capture(canvas);
}
function videoCreator(fileName){
    let video = document.createElement('video');
    video.src = fileName;
    // video.crossOrigin = "Anonymous";
    // video.play();
    video.muted = true;
    video.addEventListener( "loadedmetadata", function (e) {
        canvas.height = this.videoHeight;
        canvas.width = this.videoWidth;
    }, false );
    return video;
}