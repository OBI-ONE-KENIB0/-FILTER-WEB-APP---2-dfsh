noseX=0;
noseY=0;

function preload(){
nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
canvas=createCanvas(350,350);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('the thing works');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x-40;
noseY=results[0].pose.nose.y;
console.log("nose x=" + results[0].pose.nose.x);
console.log("nose y=" + results[0].pose.nose.y);
}
}

function draw(){
image(video,0,0,350,350);
image(nose,noseX,noseY,80,35);
}

function take_snapshot(){
save("thomas=god.png");
}