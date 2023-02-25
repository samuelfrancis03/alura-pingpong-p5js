//var of ball
let xBall = 100;
let yBall = 200;
let diametro = 25;
let raio = diametro / 2;
let xBallSpeed = 5;
let yBallSpeed = 5;

//var of racket
let xRacket = 5;
let yRacket = 150;
let widthRacket = 10;
let heigthRacket = 100;

//var racket oponent
let xRacketOponent = 585;
let yRacketOponent = 150;
let speedYRacketOponent;

//Colision
let colision = false;

//var points
let myPoints = 0;
let oponentPoints = 0;

//game sounds
let racketSound;
let pointSound;
let soundtrack;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showBall();
  movimentBall();
  bordlineGameMap();
  showRacket(xRacket, yRacket);
  showRacket(xRacketOponent, yRacketOponent);
  movimentRacket();
  libraryVerifyColision(xRacket, yRacket);
  libraryVerifyColision(xRacketOponent, yRacketOponent);
  moveOponentRacket();
  showScorebord();
  score();
}

function showBall(){
   circle(xBall, yBall, diametro)
}

function movimentBall(){
    xBall += xBallSpeed;
    yBall += yBallSpeed;
}

function bordlineGameMap(){
  
    if(xBall + raio> width || 
     xBall - raio < 0){
    xBallSpeed *= -1;    
  }
  if(yBall + raio > height || 
     yBall - raio < 0){
    yBallSpeed *= -1;
    
  }
}

function showRacket(x,y){
    rect(x, y, widthRacket, heigthRacket)
}

function movimentRacket(){
  if (keyIsDown(UP_ARROW)){
    yRacket -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yRacket += 10;
  }
}

function verifyColision(){
  if (xBall - raio < xRacket + widthRacket && yBall - raio < yRacket + heigthRacket && yBall + raio > yRacket){
    xBallSpeed *= -1;
  }
}  

function libraryVerifyColision(x, y){
  colision = collideRectCircle(x, y, widthRacket, heigthRacket, xBall, yBall, raio);
  if (colision){
    xBallSpeed *= -1;
  }
}

function moveOponentRacket(){
  speedYRacketOponent =  yBall - yRacketOponent - heigthRacket /2- 30;
  yRacketOponent += speedYRacketOponent;
}

function showScorebord (){
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(myPoints, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(oponentPoints, 470, 26);
}

function score(){
  if(xBall > 590){
    myPoints += 1;
  }
  if(xBall < 11){
    oponentPoints += 1;
  }
}

