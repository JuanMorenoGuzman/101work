
var blob;
let bg;
let y = 0;

       /*
        // sample example
    var sampletoon = {
       "name":"Boris",
       "r":200,
       "g":160,
       "b":200,
       "head": 60,
       "torso": 33,
       "posX":50,
       "posY":90,
       "moveX":[5,-3,4,-6,-3,3,4,-2],
       "moveY":[2,4,4,6,-3,3,4,-2]
        }
        */

 var blob;
 var sx = 0;
 var sy = 0;


function preload() {
  blob = loadJSON("blob.json");
}

function setup() {
  bg = loadImage('images/galaxy.jpg');
   createCanvas(700,700);
   background(0);
    rectMode(CENTER);

     // this shows the whole blob json data package
   console.log(blob);
   noStroke();


}



function draw() {
  background(bg);

  //blob.toons[0].name

  updateToon(blob.toons[0]);  // Natasha
  updateToon(blob.toons[1]);  // Boris
  updateToon(blob.toons[2]);

}



function updateToon(obj) {

      //push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];


      // console.log(obj.posX);

       if (obj.posX > width) {
         obj.posX = 0;
       }

       if (obj.posX < 0) {
         obj.posX = width;
       }

       if (obj.posY > height) {
         obj.posY = 0;
       }

       if (obj.posY < 0) {
         obj.posY = height;
       }

       drawToon(obj);

      //pop();


}



function drawToon( obj) {

    //  console.log(obj.posX[s]);

  push();
        translate(obj.posX , obj.posY);
         // head
        fill(obj.r,obj.g,obj.b);
        ellipse(0,20,obj.head,obj.head);
        // eyes
        fill(0);
        ellipse(-10,10,5,5);
        ellipse(10,10,5,5);
        //head


        fill(0,0,0);
        rect(-80,-30, obj.satelite,obj.satelite);

        fill(107, 112, 119);
        ellipse(-40,20,obj.moon,obj.moon);

        fill(obj.r,obj.g,obj.b);
        ellipse(-10,110,obj.moon2,obj.moon2);

        fill(142, 74, 45);
        ellipse(90,80,obj.moon3,obj.moon3);

        fill(obj.r,obj.g,obj.b);
        ellipse(-50,100,obj.moon4,obj.moon4);

        //torso
        fill(255);
        textSize(20);
        text(obj.name,0,-20);
        //text(obj.surfaceArea,0,10);

        if (obj.surfaceArea == "23.71 billion mi²" ) {

             fill(78, 82, 89);
             ellipse(20,40,20,20);
             ellipse(44,-60,40,40);
             ellipse(80,40,35,35);
             ellipse(70,100,50,50);
             ellipse(140,20,15,15);
             ellipse(10,80,5,5);
            

          }

          if (obj.surfaceArea == "2.941 billion mi²" ) {
             fill(98, 128, 175);
             ellipse(10,40,15,15);
             ellipse(30,20,30,30);
             ellipse(-30,-20,20,20);

          }

          if (obj.surfaceArea == "196.9 million mi²" ) {

            fill(120);
            triangle(30, 75, 58, 20, 86, 75);


          }




    pop();

}
