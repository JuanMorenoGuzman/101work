
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";


// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////
function scene1()  {
    var textX;
    var textY;
    var lox= 0;
// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        textX = 10;
        textY = 0;
        background(10, 90, 219);
        textAlign(CENTER);
        textStyle(BOLDITALIC);
        textSize(36);
        text("SONIC RUSH MUSIC PLAYER\n\n", 300,200);
        textSize(24);
        text("-- Click anywhere to Begin --\n\n", width / 2, height / 2);
    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);


        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

    hell = "bye";

    // important to create object here not in set
   //this.ghosty = createSprite(this.lox, this.loy);
    // var ghosty = createSprite(lox,loy);

  this.setup = function() {
      console.log("We are at setup for scene2");
     ghosty.position.x++;

  }

  this.enter = function()
  {
      console.log("We are at entering scene2");
      textX = 10;
      textY = 0;
        console.log(hell);
    ghosty.position.x = 150;
    ghosty.position.y = 180;
    ghosty.changeAnimation("normal");

    ghosty.onMouseOver = function() {

      console.log("over");
      this.changeAnimation("stand");
      this.position.x = width/2;
      this.position.y = height/2;
    }

    ghosty.onMouseOut = function() {

      console.log("out");
      this.changeAnimation("stand");
      this.position.x++ ;
      this.position.y++;
    }



    }




    this.draw = function()
    {
        background(157, 83, 232);
        drawSprites();
        var r = sin( frameCount * 1.00 );
    }

    this.mousePressed = function()
    {
      //console.log("woot");
      // ghost.changeAnimation("stand");
        this.sceneManager.showNextScene();
    }



}






////////////////////////////// 3 /////////////////

function scene3() {
  var textX;
  var textY;
  var lox= 0;
  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
      textX = 10;
      textY = 0;
      background(255, 177, 10);
      textAlign(CENTER);
      textStyle(BOLDITALIC);
      textSize(24);
      text("-- Press 3 to play Ethnos Circus --\n\n", width / 2, height / 2);
  }

  

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

     if ( !snd1.isPlaying() ) {
        snd1.play();
      }


      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function()
  {
      this.sceneManager.showNextScene();
  }
  }
