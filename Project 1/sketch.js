
let start = {
 color: "pink",
 x:250,
 y:380,
 startWidth: 100,
 startHeight: 50,
  display: function(){
    fill(this.color);
    rect(this.x,this.y,this.startWidth,this.startHeight,100);
    fill('black');
    textSize(30);
    text('start', this.x+20,this.y+35);
  }
};

let twice;

function preload(){
twice = loadImage ('Images/Twice.jpeg')
}

function setup() {
  createCanvas(600, 500);
  // start.mouseHover("red");
}

function draw() {
  background(220);
  image(twice, 0, 0, 620, 500);
  start.display();
}


