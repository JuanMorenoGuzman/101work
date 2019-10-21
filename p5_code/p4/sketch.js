

var blob;
var blob2;

//var url = "http://the json url string you use to fetch data";

function preload() {   // using this as its good for local or remote data fetching
    loadJSON('cosmeticsLW.json','json',dloaded,dfail);
    loadJSON('cosmeticsAT.json','json',dloaded2,dfail);
   //loadJSON(url,'json',dloaded,dfail);
}



function dloaded(thedata) {

 blob = thedata;  // pass the json object to global var blob
 console.log("start -- ");
 console.log(blob);

}

function dloaded2(thedata2) {

 blob2 = thedata2;  // pass the json object to global var blob
 console.log("start -- ");
 console.log(blob);
 console.log(blob2);

}



function dfail(thedata) {
console.log("ERROR with Data-");
console.log(thedata);
}

function dfail(thedata2) {
console.log("ERROR with Data-");
console.log(thedata2);
}


function setup() {
 createCanvas(1080,1000);
 background(50);
 fill(255);
 noStroke();
 colorMode(RGB, 255);

//  console.log(blob);


 push();
 translate(90,150);
 //scale(1.5);
 cosmeticsLW(blob.items);
 pop();

 push();
 translate(90,350);
 cosmeticsAT(blob2.items2);
 pop();


}

function draw() {
//ellipse(width/2, height/2, 50, 50);
textAlign(CENTER);
textStyle(BOLDITALIC);
fill(255);
textSize(24);
text("Most Popular from Week of 4/5/19 to 4/12/19 by Cost\n\n", 320,30);
textSize(24);
text("All time Popular by Cost\n\n", 160,500);


}


function cosmeticsLW(theobj) {
   //colorMode(HSB, 100);
   var sc = 0.5;
   console.log(theobj);

   for (var i = 0; i < theobj.length; i++) {

     console.log(theobj[i]);

   //   // fill(255);
   //   // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);
   //
    //var tempC = map(theobj[i].cost,-10,115,80,0)
   //
   //   //push()
   // //  scale(1.2 * (i*.50));
   //
   // fill(tempC,150,150);
   //    rect(i*170,10 ,10,-theobj[i].cost);

// Magma
fill(255, 225, 0);
rect(0,-10 ,10, 70);


// Nightwitch
fill(255, 199, 0);
rect(170,-90 ,10, 150);


// Shaman
fill(255, 199, 0);
rect(510,-90 ,10, 150);

//Dark V
fill(255, 157, 0);
rect(680,-140 ,10, 200);

//Spinner
   fill(255, 199, 0);
   rect(850,-20 ,10, 80);






   //   //rect(i*20,0+(i*20) ,10,-arr[i]);
   //
    fill(255);
    text(theobj[i].name,(i*170)-10 ,80);
    text(theobj[i].cost,(i*170)-10 ,100);
    text(theobj[i].avgStars,(i*170)-10 ,120);
    text(theobj[i].description,(i*170)-10 ,140);

    loadImage('https://fortnite-public-files.theapinetwork.com/wrap/f51a8a5e49011483a87c55680db3548b.png', img => {
      image(img, 70, 300,100,100);} );

      loadImage('https://fortnite-public-files.theapinetwork.com/outfit/4d81831501af614e84f9c273bf05469d.png', img => {
        image(img, 250, 300,100,100);} );

        loadImage('https://fortnite-public-files.theapinetwork.com/outfit/afaa8546c80d88a3fb6e6a20656ed001.png', img => {
          image(img, 430, 300,100,100);} );

          loadImage('https://fortnite-public-files.theapinetwork.com/outfit/ddebb7024f8182b0cc863e11a50b25e9.png', img => {
            image(img, 610, 300,100,100);} );

            loadImage('https://fortnite-public-files.theapinetwork.com/outfit/a6b5ef2c3f7831274fa5fc02f08c54a4.png', img => {
              image(img, 770, 300,100,100);} );

              loadImage('https://fortnite-public-files.theapinetwork.com/emote/5050c928ead709fd94b98132cace0f2a.png', img => {
                image(img, 920, 300,100,100);} );


     //  text(arrtext[i],(i*20)-20 ,20+(i*20));

   //  pop();

   }


}


function cosmeticsAT(theobj2) {

   //colorMode(HSB, 100);
   var sc = 1.5;
   console.log(theobj2);

   for (var i = 0; i < theobj2.length; i++) {

     console.log(theobj2[i]);

   //   // fill(255);
   //   // ellipse(i*60,200 - (arr[i]/2),arr[i],arr[i]);
   //
    //var tempC = map(theobj2[i].cost,-10,115,80,10)
   //
   //   //push()
   // /  scale(1.2 * (i*.50));
   //

  //fill(tempC,150,150);
//Marshmello
  fill(255, 199, 0);
  rect(170,230 ,10, 150);
//ARK
  fill(255, 157, 0);
  rect(340,180 ,10, 200);
//RR
  fill(255, 199, 0);
  rect(510,260 ,10, 120);
//Malcore
  fill(255, 199, 0);
  rect(850,230 ,10, 150);


   //   //rect(i*20,0+(i*20) ,10,-arr[i]);
   //
    fill(255);
    text(theobj2[i].name,(i*170)-10 ,400);
    text(theobj2[i].cost,(i*170)-10 ,420);
    text(theobj2[i].avgStars,(i*170)-10 ,440);
    text(theobj2[i].description,(i*170)-10 ,460);
    //loadImage(theobj2[i].transparent,(i*170)-10 ,480);

    //ALL TIME OUTFITS PICTURES

    loadImage('https://fortnite-public-files.theapinetwork.com/outfit/f3d0ee3316df5a64ae286aeb4e0abc69.png', img => {
      image(img, 70, 850,100,100);} );

      loadImage('https://fortnite-public-files.theapinetwork.com/outfit/ee7ed4fb103c3f89fc41cba189bae7d1.png', img => {
        image(img, 250, 850,100,100);} );

        loadImage('https://fortnite-public-files.theapinetwork.com/outfit/f2104578468f47ad53c497d745b6c131.png', img => {
          image(img, 430, 850,100,100);} );

          loadImage('https://fortnite-public-files.theapinetwork.com/outfit/0be09dd605f0b6e12fccaa4814fce690.png', img => {
            image(img, 610, 850,100,100);} );

            loadImage('https://fortnite-public-files.theapinetwork.com/outfit/b2598e4912ecd7116b0f4680aecc0dff.png', img => {
              image(img, 770, 850,100,100);} );

              loadImage('https://fortnite-public-files.theapinetwork.com/outfit/98a5fee5b66ac9356308105af28acb11.png', img => {
                image(img, 950, 850,100,100);} );


     //  text(arrtext[i],(i*20)-20 ,20+(i*20));

   //  pop();

   }


}

//////////////// END
