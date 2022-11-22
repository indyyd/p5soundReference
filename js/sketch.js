var mySong, amplitude, play;

function preload () {
    mySong = loadSound('assets/massiveAttackAngel.mp3');
}

function setup() { //runs once
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    mySong.play();
    background(0);

    amplitude = new p5.Amplitude();
    background(220)
    rectMode(CENTER);
    play = false;
    var button = createButton("Play");
    button.center();
    button.addClass('btn');
}

//document object model
//window object model - where you can find current width + height
//FLASH WARNING

function draw() {
    var level = amplitude.getLevel();
    var vol = map(level, 0, 1, 0, 1000);
    var col = map(level, 0, 1, 0, 255);

    fill(col, 255, 255);
    ellipse(width/2, height/2, vol);

    fill(col, 255, 255);
    ellipse(width/2, height/2, vol/2);
}