//var[] namechoice = {"Rambo","Bill","Martin","Arnorld","Amelia"};

var count = 35;
var posX = new Array(count);
var posY = new Array(count);
var speedX = new Array(count);
var speedY = new Array(count);
var createCanvasW = new Array(count);
var createCanvasH = new Array(count);
var colorsR = new Array(count);
var colorsB = new Array(count);
var colorsG = new Array(count);
var alpha = new Array(count);
var connection = new Array(count);


//var[] names = new var[count];
function preload(){
img = loadImage('images/astro.jpg');
img2 = loadImage('images/gren.jpg');

}

function setup() {
  //frameRate(5);




  createCanvas(800, 800);
  background(0);
  noStroke();




  colorMode(HSB, 255);
  let c = color(255, 255, 255);
  fill(c);
  //rect(15, 20, 35, 60);
  let value = brightness(c); // Sets 'value' to 255
  fill(value);
  //rect(50, 20, 35, 60);




  img = loadImage('images/astro.jpg');
  img2 = loadImage('images/gren.jpg');

  //noStroke();
  for (var i=0; i < posX.length; i++) {
    posX[i] = width/2;
    posY[i] = height/2;
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    createCanvasW[i] = random(20, 150);
    createCanvasH[i] = random(255, 100);
    colorsR[i] = random(100, 255);
    colorsG[i] = random(100, 255);
    colorsB[i] = random(100, 255);
    alpha[i] = random(50, 255);
    connection[i] = random(50, 100);
    console.log("hello");
    //names[i] = namechoice[  (round(random(4)))   ];
  }
}


function draw() {
  //saveFrame("frames/ex1-#####.png");
  //background(155);



  fill(255,20);
  rect(0,0,width, height);

  fill(255);
  image(img, 0,300,450,500);
  image(img2, 0,0,800,300);
  filter(INVERT);

  strokeWeight(0);
   textSize(24);
   textStyle(BOLDITALIC);
   text('SPACE IS VAST', 550, 750);




  //rect(40, 40, width-80, height-80);
  for (var i = 0; i < posX.length; i++) {


    if (posX[i] < 40+createCanvasW[i]/2 || posX[i] > (width-40)-createCanvasW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (posY[i] < 40+createCanvasW[i]/2 || posY[i] > (height-40)-createCanvasW[i]/2) {
      speedY[i] = -speedY[i];
    }

     //update all positions
    posX[i] += speedX[i];
    posY[i] += speedY[i];
    //draw all balls
    fill(colorsR[i],colorsG[i],colorsB[i], alpha[i]);
    ellipse(posX[i], posY[i], createCanvasW[i], createCanvasW[i]);


    fill(connection[i]);
    line(posX[i], posY[i], createCanvasW[i], createCanvasW[i]);
    //check boundaries for all balls

    fill(random(140));
    //text(names[i],posX[i], posY[i]);


  }

}
