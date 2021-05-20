var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload(){
 bg=loadImage("bg.jpg");
 sound=loadSound("pubg ok.mp3")
}


function setup(){
  canvas = createCanvas(windowWidth-40,windowHeight-30);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bg);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
