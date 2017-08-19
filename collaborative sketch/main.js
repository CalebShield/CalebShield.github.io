// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJcFqv4Ihm63GT6uojSMqgeMRWkWtPBV4",
    authDomain: "collaborative-sketch-ccf32.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-ccf32.firebaseio.com",
    projectId: "collaborative-sketch-ccf32",
    storageBucket: "",
    messagingSenderId: "922433562177"
  };
  
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup() {
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  
  pointsData.on("child_removed", function () {
    points = [];
  });
  
  canvas.mousePressed(drawPoint);
  /*
  canvas.mouseMoved(function () {
    if (mouseIsPressed) {
      drawPoint();
    }
  });
  */
}

function draw() {
  background(255);
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}

function drawPoint() {
  alert("DON'T TOUCH THE MASTERPIECE! NO COLLABORATION!");
  //pointsData.push({x: mouseX, y: mouseY});
  return false;
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
  saveCanvas("Painter Orpheus");
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
  alert("HOW DARE YOU!");
  /*
  pointsData.remove();
  points = [];
  */
}
