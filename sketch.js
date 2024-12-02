// Capstone Project
// Ian H
// 11/21/2024

let Title = 'Top Zero';
let gameActive = 0;
let menuScreen;
let tunnelVideo;
let carSelectionText = 'Choose Your Car!'
let carSelectMusic;
let musicStarted = false;
let Falcon;
let Taxi;
let Goose;
let Pirhana;

function preload() {
  soundFormats('mp3', 'ogg')
  carSelectMusic = loadSound("resources/F-Zero - Intro (Super Nintendo) [ ezmp3.cc ].mp3")
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  Falcon = createVideo('resources/Test.gif"');
  Falcon.hide();
  tunnelVideo = createVideo('resources/Tunnel Lights Passage Free Stock Video - Pixabay.mp4');
  tunnelVideo.hide();
  // Taxi = createVideo('Yellow Taxi Car.gif"');
  // Taxi.hide();
  // Goose = createVideo('resources/Wild Goose Green Car.gif"');
  // Goose.hide();
  // Pirhana = createVideo('resources/Pihrana Car.gif"');
  // Pirhana.hide();
  // frameRate(60);

}

function draw() {

  if (gameActive === 0) {
    myBackground();
    myTitle();
    startGame();
  }
  if (gameActive === 1) {
    background(255)
    if (mouseIsPressed && musicStarted === false) {
      Falcon.loop();
      // Goose.loop();
      // Taxi.loop();
      // Pirhana.loop();
      tunnelVideo.loop();
      carSelectMusic.loop();
      musicStarted = true;
    }

    image(tunnelVideo, 0, 0, width, height);
    image(Falcon, width/5, height/1.5);
    // image(Goose, width/4, height/1.5, 100, 100);
    // image(Taxi, width/3, height/1.5, 100, 100);
    // image(Pirhana, width/2, height/1.5, 100, 100);

    carSelectionScreen();
  }
}
function myBackground() {
  let rectHeight = 5
  for (let y = height; y > + 0; y -= rectHeight) {
    let value = map(y, 0, height, 0, 255)
    noStroke();
    fill(value, y / 5, y / 2)
    rect(0, y, width, rectHeight)
  }
}
function myTitle() {
  stroke(255);
  fill(25, 155, 255)
  textAlign(CENTER);
  textSize(75);
  text(Title, width / 2, height / 3)
}
function startGame() {
  stroke(255);
  fill(0);
  textAlign(CENTER);
  textSize(30);
  text('CLICK TO START', width / 2, height / 1.5);
  circle(width / 1.58, height / 1.52, 10)
  circle(width / 2.75, height / 1.52, 10)
  if (mouseIsPressed) {
    gameActive = 1
  }

}
function carSelectionScreen() {
  stroke(0);
  fill(0, 255, 50);
  textAlign(CENTER);
  textSize(30);
  text(carSelectionText, width / 2, height / 5);


}

