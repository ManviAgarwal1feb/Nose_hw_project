function preload(){

}

function setup(){
canvas=createCanvas(400,350);
canvas.center();
video=createCapture(VIDEO);
video.size(400,350);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,400,350);
}

function take_snapshot(){
    save("filter_img.png");
}

function modelLoaded(){
 console.log("Model is loaded");

}

function gotPoses(results){
if(results.length>0){
 console.log(results);
 console.log("x axis of nose="+results[0].pose.nose.x);
 console.log("y axis of nose="+results[0].pose.nose.y);
}
}