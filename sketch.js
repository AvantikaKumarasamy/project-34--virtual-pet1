//Create variables here
var database;
var happyDog, dogImg, dog;
var foodS, foodStock, readStock, writeStock;

function preload(){
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(300,300,15,15);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  

  drawSprites();
  //add styles here
  textSize(15);
  fill("blue");
  stroke("black");
  strokeWeight(4);
  text("Note : Press UP_ARROW key to feed dog milk", 100,60);
}

function readStock(data){
   foodS = data.val();
}

function writeStock(x){
    database.ref('/').update({
      Food : x
    })
}