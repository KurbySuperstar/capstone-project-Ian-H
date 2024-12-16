// Capstone Project
// Ian H
// 11/21/2024

let Title = 'Top Zero';
let gameActive = 0;
let menuScreen;
let tunnelVideo;
let mapVideo;
let carSelectionText = 'Choose Your Car!'
let carSelectMusic;
let mapSelectionText = 'Choose Your Map!'
let musicStarted = false;
let mapMusicStarted = false;
let Falcon;
let Taxi;
let Goose;
let Pirhana;
let carSelect;
let bigBlue;
let muteCity;
let mapSelect;
let muteCityMap;
let panX = -1200;
let panY = 0;
let playerC;
let bigBlueMusic;
let muteCityMusic;
let go = true;
let playerSpeed = 30;
let bigBlueMap;


function preload() {
  soundFormats('mp3', 'ogg')
  carSelectMusic = loadSound("resources/F-Zero - Intro (Super Nintendo) [ ezmp3.cc ].mp3")
  Falcon = loadImage('resources/falcon1.gif');
  Taxi = loadImage('resources/taxi.gif');
  Pirhana = loadImage('resources/Pcar.gif');
  Goose = loadImage('resources/goose.gif');
  bigBlue = loadImage('resources/BigBlue.png');
  bigBlueMap = loadImage("resources/bigBlueMap.png")
  muteCity = loadImage('resources/MuteCity.png');
  muteCityMap = loadImage('resources/MuteCityMap.png');
  playerC = loadImage('resources/FZeroCar.png');
  bigBlueMusic = loadSound("resources/F-Zero - Big Blue (Super Nintendo).mp3")
  muteCityMusic = loadSound("resources/F-Zero - Mute City (Super Nintendo).mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  tunnelVideo = createVideo('resources/Tunnel Lights Passage Free Stock Video - Pixabay.mp4');
  tunnelVideo.hide();
  mapVideo = createVideo("resources/Tunnel Beautiful Wallpaper Passage Free Stock Video - Pixabay.mp4");
  mapVideo.hide();

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

      tunnelVideo.loop();
      carSelectMusic.loop();

      musicStarted = true;
    }

    image(tunnelVideo, 0, 0, width, height);
    image(Falcon, width/4, height/1.75,400,400);
    image(Taxi,width/1.7,height/1.75,400,400)
    image(Pirhana,width/1.7,height/5.5,400,400)
    image(Goose,width/4,height/5.5,400,400)
    carSelectionScreen();
  }
  if (gameActive === 2){
    background(255);
    if (mouseIsPressed && mapMusicStarted === false) {

      mapVideo.loop();

      mapMusicStarted = true;
    }
    image(mapVideo, 0, 0, width, height);

    mapSelectionScreen();
    image(muteCity, width/4, height/2.4,400,400);
    image(bigBlue,width/1.7,height/2.4,400,400)

    
  }
  if (gameActive === 3){
    carSelectMusic.stop();
    background(255);
    if (mapSelect === 1){
      if (go === true){
        bigBlueMusic.loop();
        go = false
      }
      image(bigBlueMap,0 + panX,0 + panY);
      playerCar();
    }
    if (mapSelect === 2){
      if (go === true){
        muteCityMusic.loop();
        go = false
      }
      image(muteCityMap,0 + panX,0 + panY);
      playerCar();
    }
    
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
function mapSelectionScreen(){
  stroke(0);
  fill(0, 255, 50);
  textAlign(CENTER);
  textSize(30);
  text(mapSelectionText, width / 2, height / 5);

}
function mousePressed(){
  if((mouseX > width/4 && mouseX < width/4+375 ) && (mouseY > height/1.75 && mouseY < height/1.75+400 )&& (gameActive === 1)){
    //falcon
    carSelect = 1;
    gameActive = 2;
    return;

  }
  if((mouseX > width/1.7 && mouseX < width/1.7+375 ) && (mouseY > height/1.75 && mouseY < height/1.75+400 )&& (gameActive === 1)){
    //taxi
    carSelect = 2;
    gameActive = 2;
    return;

  }
  if((mouseX > width/4 && mouseX < width/4+375 ) && (mouseY > height/5.5 && mouseY < height/5.5+400 )&& (gameActive === 1)){
    //pirhana
    carSelect = 3;
    gameActive = 2;
    return;

  }
  if((mouseX > width/1.7 && mouseX < width/1.7+375 ) && (mouseY > height/5.5 && mouseY < height/5.5+400 )&& (gameActive === 1)){
    //goose
    carSelect = 4;
    gameActive = 2;
    return;

  }
  if((mouseX > width/1.7 && mouseX < width/1.7+375 ) && (mouseY > height/2.4 && mouseY < height/2.4+400 )&& (gameActive === 2)){
    //BigBlue

      mapSelect = 1;
      gameActive = 3;
      return;
    

  }
  if((mouseX > width/4 && mouseX < width/2.4+375 ) && (mouseY > height/2.4 && mouseY < height/2.4+400 )&& (gameActive === 2)){
    //mutCIty
      mapSelect = 2;
      gameActive = 3;
      return;

    

  }
}
function playerCar(){
  
  image(playerC,width/2,height/2,50,50)
  upAngles();
  downAngles();
}
function upAngles(){
  if(keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)){
    if (panX < 565){
      if (panY < 180){
      panX += playerSpeed/2.25
      panY += playerSpeed
      return;
      }
    }
  }
  else if(keyIsDown(DOWN_ARROW)){
    if (panY > -2660){
      panY -= playerSpeed
      return;
    }
  }


  if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
    if (panX < -180){
      if (panY < 180){
      panX -= playerSpeed/2.25
      panY += playerSpeed
      return;
      }
    }
  }
  else if(keyIsDown(UP_ARROW)){
    if (panY < 180){
      panY += playerSpeed
      return;
    }
  }

}
function downAngles(){
  if(keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)){
    if (panX > -5670){
      if (panY > - 2660){
      panX -= playerSpeed/1.25
      panY -= playerSpeed/2
      return;
      }
    }

  }
  else if(keyIsDown(RIGHT_ARROW)){
    if (panX > -5670){
      panX -= playerSpeed
      return;
    }

  }

  if(keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)){
    if (panX < -180){
      if (panY > - 2660){
      panX += playerSpeed/1.25
      panY -= playerSpeed/2
      return;
      }
    }
  }
  
  else if( keyIsDown(LEFT_ARROW)){
    if (panX < 565){
      panX += playerSpeed
      return;
    }
  }

}
