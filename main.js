function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 350);
    canvas.position(560,100);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#89CFF0');
}
function modelLoaded() {
    console.log('poseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
