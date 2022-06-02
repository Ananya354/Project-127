var levitating_song="";
var Cheap_thrills_song="";

function setup(){
    canvas = createCanvas(700,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    levitating_song = loadSound("Dua Lipa - Levitating.mp3");
    Cheap_thrills_song = loadSound("Sia - Cheap Thrills.mp3");
}

function draw(){
    image(video,0,0,650,530);
}