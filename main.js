song1 = "";
song2 = "";

function preload(){
    song1 = loadSound('songA.mp3');
    song2 = loadSound('songB.mp3');
}

function setup(){
    canvas = createCanvas(350, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 350, 300);
}