// example #2.2
// this is a 7x7 array

// var 1darray = [0,1,3,4,5,6];
// var getitem = 1array[0];

// var 2darray = [ [a,x,x,x], [x,x,a,x], [x,x,x,x], [x,x,x,x] ];
// var getitem = 2darray[0][0];
// var 3darray [
//             [ [r,g,b], [x,x,x], [x,x,x] ],
//             [ [x,x,x], [x,x,x], [x,x,x] ],
//             [ [x,x,x], [x,x,x], [x,x,x] ] ];

var gridarr1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var gridarr2 = [
  ["re", "re", "re", "re", "re", "re", "re", "re", "re", "re", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "re", "mi", "mi", "re", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "mi", "mi", "mi", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "mi", "re", "mi", "re"],
  ["re", "re", "mi", "mi", "mi", "re", "mi", "re", "re", "mi", "mi", "mi", "mi", "re", "mi", "re"],
  ["re", "re", "mi", "re", "mi", "re", "mi", "re", "re", "re", "re", "re", "re", "re", "mi", "re"],
  ["re", "re", "mi", "re", "mi", "mi", "mi", "re", "re", "mi", "mi", "mi", "mi", "mi", "mi", "re"],
  ["re", "re", "mi", "re", "re", "re", "re", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "mi", "mi", "mi", "mi", "mi", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "re", "re", "mi", "re", "re", "re", "re", "re", "re"],
  ["re", "re", "re", "re", "re", "re", "mi", "mi", "mi", "mi", "re", "re", "re", "re", "re", "re"]
];
    // This uses the transformation matrix tools to move,
    //rotate and scale things as batch operations
    //var numbers = [90, 30, 30, 45, 12, 78, 56, ];



var numbers = 0;
var letters = "re";
function setup() {

  createCanvas(500, 500);
  background(117, 0, 168);
  fill(100);





  push();
    translate(120, 15);
    rotate(radians(35));
    scale(0.7);
    mg_drawarray1(gridarr1, 255);
  pop();


  push();
    translate(250, 10);
    scale(1.2);
    mg_drawarray1(gridarr1, 100);
  pop();


  push();
    translate(120, 245);
    rotate(radians(35));
    scale(0.7);
    mg_drawarray2(gridarr2, 255, 0);
  pop();


  push();
    translate(250, 270);
    scale(1.2);
    mg_drawarray2(gridarr2, 100,0);
  pop();

}

function mg_drawarray1(arrname, fade, shape) {
  for (var i = 0; i < gridarr1.length; i++) {
    for (var j = 0; j < gridarr1.length; j++) {
      numbers = gridarr1[i][j];
      fill(arrname * 200,fade);
      if (numbers === 1) {

        fill(255, 207, 158);
        ellipse((j * 10) + 10, (i * 10) + 10, 10, 10);
      } else {

        fill(255, 106, 0);
        rect((j * 10) + 10, (i * 10) + 10, 10, 10);
    }
  }
}
}

function mg_drawarray2(arrname, fade, shape) {
  for (var i = 0; i < gridarr2.length; i++) {
    for (var j = 0; j < gridarr2.length; j++) {
      letters = gridarr2[i][j];
      fill(arrname * 200,fade);
      if (letters === "mi") {

        fill(68, 255, 84);
        ellipse((j * 10) + 10, (i * 10) + 10, 10, 10);
      } else {

        fill(0, 100, 0);
        rect((j * 10) + 10, (i * 10) + 10, 10, 10);
      }
    }
  }

}
