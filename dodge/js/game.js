// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJcFqv4Ihm63GT6uojSMqgeMRWkWtPBV4",
    authDomain: "collaborative-sketch-ccf32.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-ccf32.firebaseio.com",
    projectId: "collaborative-sketch-ccf32",
    storageBucket: "",
    messagingSenderId: "922433562177"
  };
  


var pointsData = firebase.database().ref();
var points = [];

var player;
var playerImage;
var isGameOver;
var enemy; 
var enemyImage;
var backgroundImage;

function preload() {
    playerImage = loadImage("https://i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://i.imgur.com/aKQOg3G.png");
}

function setup() {
    isGameOver = false;
    createCanvas(256, 256);
    background(255);
    fill(0);
    
    pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
}
    
    
    
    
    
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
}


function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }

    
    

     background(backgroundImage);
     enemy.position.y = enemy.position.y + 3;
     if (enemy.position.y > height) {
  enemy.position.y = 0;
  enemy.position.x = random(5, width-5);
     }
     drawSprites();
    }
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.width/2))) {
     player.position.x = player.position.x + 1;
   }
   
   if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
    player.position.x = player.position.x - 1;
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) { 
     isGameOver = false;
     player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
}
}