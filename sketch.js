
let twice;
let selectedChar;
var screen = 0;
let glassesTab = false;
let glasses;
let hovering = false;
let hatTab = false;
let hat;
let extraTab = false;
let extra;
let plushieTab = false;
let plushie;
let miscTab = false;
let misc;
let filterTab = false;
let filter;
let finish = false;
let home = false;


function preload(){
twice = loadImage ('Images/Twice.jpeg');

arrow = loadImage('Images/arrow.png');

buttons = loadImage('Images/miscbuttons.png');

filterButtons = loadImage('Images/filterbuttons.png');

nayhover = loadSound('Audios/nayhover.mp3');
jeonghover = loadSound('Audios/jeonghover.mp3');
momohover = loadSound('Audios/momohover.mp3');
sanahover = loadSound('Audios/sanahover.mp3');
jihhover = loadSound('Audios/jihhover.mp3');
minahover = loadSound('Audios/minahover.mp3');
dahhover = loadSound('Audios/dahhover.mp3');
chaehover = loadSound('Audios/chaehover.mp3');
tzuhover = loadSound('Audios/tzuhover.mp3');
naysound = loadSound('Audios/nay.mp3');
jeongsound = loadSound('Audios/jeong.mp3');
momosound = loadSound('Audios/momo.mp3');
sanasound = loadSound('Audios/sana.mp3');
jihsound = loadSound('Audios/jih.mp3');
minasound = loadSound('Audios/mina.mp3');
dahsound = loadSound('Audios/dah.mp3');
chaesound = loadSound('Audios/chae.mp3');
tzusound = loadSound('Audios/tzu.mp3');

menuSong = loadSound('Audios/menusong.mp3');
characterSong = loadSound('Audios/TT.mp3');
dressSong = loadSound('Audios/luvme.mp3');


cheer = loadSound('Audios/icarlycheers.mp3');

nay = loadImage ('Images/nay.jpeg');
jeong = loadImage ('Images/jeong.jpeg');
momo = loadImage ('Images/momo.jpeg');
sana = loadImage ('Images/sana.jpeg');
jih = loadImage ('Images/jih.jpeg');
mina = loadImage ('Images/mina.jpeg');
dah = loadImage ('Images/dah.jpeg');
chae = loadImage ('Images/chae.jpeg');
tzu = loadImage ('Images/tzu.jpeg');

nay2 = loadImage ('Images/nay2.png');
jeong2 = loadImage ('Images/jeong2.png');
momo2 = loadImage ('Images/momo2.png');
sana2 = loadImage ('Images/sana2.png');
jih2 = loadImage ('Images/jih2.png');
mina2 = loadImage ('Images/mina2.png');
dah2 = loadImage ('Images/dah2.png');
chae2 = loadImage ('Images/chae2.png');
tzu2 = loadImage ('Images/tzu2.png');

nayid = loadImage ('Images/nayid.jpeg');
jeongid = loadImage ('Images/jeongid.jpeg');
momoid = loadImage ('Images/momoid.jpeg');
sanaid = loadImage ('Images/sanaid.jpeg');
jihid = loadImage ('Images/jihid.jpeg');
minaid = loadImage ('Images/minaid.jpeg');
dahid = loadImage ('Images/dahid.jpeg');
chaeid = loadImage ('Images/chaeid.jpeg');
tzuid = loadImage ('Images/tzuid.jpeg');

glassesblack = loadImage ('Images/glassesblack.png');
glasseskitty = loadImage ('Images/glasseskitty.png');
glassesred = loadImage ('Images/glassesred.png');
glassesswirl = loadImage ('Images/glassesswirl.png');
glassesplaid = loadImage ('Images/glassesplaid.png');

hatcream = loadImage ('Images/cream.png');
hatcream2 = loadImage ('Images/cream2.png');
hatcream3 = loadImage ('Images/cream3.png');
hatcream4 = loadImage ('Images/cream4.png');
hatpudding = loadImage ('Images/pudding1.png');
hatsando = loadImage ('Images/sando.png');
hatscoop = loadImage ('Images/scoop.png');
hatears = loadImage ('Images/ears.png');
hatburger = loadImage ('Images/burger.png');
hatroblox = loadImage ('Images/hat.png');

extraapple = loadImage ('Images/apple.png');
extrabow = loadImage ('Images/bow.png');
extrachoco = loadImage ('Images/choco.png');
extraclover = loadImage ('Images/clover.png');
extrastrawb = loadImage ('Images/strawb.png');
extrateeth = loadImage ('Images/teeth.png');

plushiemonkey = loadImage ('Images/monkey.png');
plushieangel = loadImage ('Images/angel.png');
plushiecat = loadImage ('Images/cat.png');
plushieapple = loadImage ('Images/appo.png');
plushiething = loadImage ('Images/thing.png');
plushiebunny = loadImage ('Images/bunny.png');

misc1 = loadImage ('Images/speech.png');
misc2 = loadImage ('Images/appls.png');
misc3 = loadImage ('Images/circle.png');
misc4 = loadImage ('Images/smile.png');
misc5nay = loadImage ('Images/sfnay.png');
misc5jeong = loadImage ('Images/sfjeong.png');
misc5momo = loadImage ('Images/sfmomo.png');
misc5sana = loadImage ('Images/sfsana.png');
misc5jih = loadImage ('Images/sfjih.png');
misc5mina = loadImage ('Images/sfmina.png');
misc5dah = loadImage ('Images/sfdah.png');
misc5chae = loadImage ('Images/sfchae.png');
misc5tzu = loadImage ('Images/sftzu.png');

filtera = loadImage('Images/filtera.png');
filterb = loadImage('Images/filterb.png');
filterc = loadImage('Images/filterc.png');
filterd = loadImage('Images/filterd.png');
filtere = loadImage('Images/filtere.png');
filterf = loadImage('Images/filterf.png');
filterg = loadImage('Images/filterg.png');
filterh = loadImage('Images/filterh.png');
}

function setup() {
  createCanvas(600, 500);
  
}

function draw() {
  background(220);
  if(screen == 0){
    startScreen();
    if(!menuSong.isPlaying()){
      menuSong.loop();
      menuSong.setVolume(0.3)
      characterSong.stop();
      dressSong.stop();
    }
  } else if (screen == 1){
    characterScreen();
    if(!characterSong.isPlaying()){
      characterSong.loop();
      characterSong.setVolume(0.3)
      menuSong.stop();
      dressSong.stop();
    }
  } else if (screen == 2){
    dressScreen();
    if(!dressSong.isPlaying()){
      dressSong.loop();
      dressSong.setVolume(0.3)
      menuSong.stop();
      characterSong.stop();
    }
  }
}

function startScreen(){
  screen = 0;
  image(twice, 0, 0, 620, 500);
  
  // start button
  fill("#FDE7EE");
  stroke("#FABCCF");
  strokeWeight(3);
  rect(250,315,100,50,100);
  textSize(35);
  strokeWeight(1);
  fill("#FABCCF");
  text("start", 265, 350);
  strokeWeight(3);

  if(mouseX >= 250 && mouseX <= 350 && mouseY >= 315 && mouseY <= 365){
    cursor(HAND);
  } else{
    cursor(ARROW);
  }
}

function characterScreen(){
  screen = 1;
  
  background('white');
  image(nay, 25, 0, 150, 150);
  image(jeong, 225, 0, 150, 150);
  image(momo, 425, 0, 150, 150);
  image(sana, 25, 175, 150, 150);
  image(jih, 225, 175, 150, 150);
  image(mina, 425, 175, 150, 150);
  image(dah, 25, 350, 150, 150);
  image(chae, 225, 350, 150, 150);
  image(tzu, 425, 350, 150, 150)

// changes character image when you hover
  if(mouseX >= 40 && mouseX <= 155 && mouseY >= 10 && mouseY <= 140){
    image(nay2, 20,-5,160,160);
    cursor(HAND);
    if(!nayhover.isPlaying()){
      nayhover.play();
      nayhover.setVolume(0.3);
    }
  } else if(mouseX >= 240 && mouseX <= 355 && mouseY >= 10 && mouseY <= 140){
    image(jeong2, 220,-5,160,160);
    cursor(HAND);
    if(!jeonghover.isPlaying()){
      jeonghover.play();
      jeonghover.setVolume(0.3);
    }
  } else if(mouseX >= 440 && mouseX <= 555 && mouseY >= 10 && mouseY <= 140){
    image(momo2, 420, -5, 160,160);
    cursor(HAND);
    if(!momohover.isPlaying()){
      momohover.play();
      momohover.setVolume(0.3);
    }
  } else if(mouseX >= 40 && mouseX <= 155 && mouseY >= 185 && mouseY <= 315){
    image(sana2,20,170,160,160);
    cursor(HAND);
    if(!sanahover.isPlaying()){
      sanahover.play();
      sanahover.setVolume(0.3);
    }
  } else if (mouseX >= 240 && mouseX <= 355 && mouseY >= 185 && mouseY <= 315){
    image(jih2,220,170,160,160);
    cursor(HAND);
    if(!jihhover.isPlaying()){
      jihhover.play();
      jihhover.setVolume(0.3);
    }
  } else if (mouseX >= 440 && mouseX <= 555 && mouseY >= 185 && mouseY <= 315){
    image(mina2,420,170,160,160);
    cursor(HAND);
    if(!minahover.isPlaying()){
      minahover.play();
      minahover.setVolume(0.3);
    }
  } else if(mouseX >= 40 && mouseX <= 155 && mouseY >= 365 && mouseY <= 515){
    image(dah2, 20,345,160,160);
    cursor(HAND);
    if(!dahhover.isPlaying()){
      dahhover.play();
      dahhover.setVolume(0.3);
    }
  } else if(mouseX >= 240 && mouseX <= 355 && mouseY >= 365 && mouseY <= 515){
    image(chae2,220,345,160,160);
    cursor(HAND);
    if(!chaehover.isPlaying()){
      chaehover.play()
      chaehover.setVolume(0.3);
    }
  } else if(mouseX >= 440 && mouseX <= 555 && mouseY >= 365 && mouseY <= 515){
    image(tzu2,420,345,160,160);
    cursor(HAND);
    if(!tzuhover.isPlaying()){
      tzuhover.play();
      tzuhover.setVolume(0.3);
    }
  } else{
    cursor(ARROW);
  }
    
}

function dressScreen(){
  screen = 2;
  background("white");

  hovering = false;


  if(screen == 2 && mouseX >= 425 && mouseX <= 545 && mouseY >= 130 && mouseY <= 150 && glassesTab){ // Black glasses hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 425 && mouseX <= 540 && mouseY >= 170 && mouseY <= 200 && glassesTab){ // Kitty glasses hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 425 && mouseX <= 540 && mouseY >= 220 && mouseY <= 280 && glassesTab){ //Swirl glasses hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 425 && mouseX <= 540 && mouseY >= 305 && mouseY <= 325 && glassesTab){ //Red glasses hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 425 && mouseX <= 540 && mouseY >= 345 && mouseY <= 365 && glassesTab){ //Plaid glasses hover
    hovering = true;
  }
  
  if(screen == 2 && mouseX >= 425 && mouseX <= 480 && mouseY >= 110 && mouseY <= 170 && hatTab){ //Cream1 hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 505 && mouseX <= 550 && mouseY >= 100 && mouseY <= 170 && hatTab){ //Cream2 hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 185 && mouseY <= 230 && hatTab){ //Cream3 hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 498 && mouseX <= 550 && mouseY >= 180 && mouseY <= 230 && hatTab){ //Cream4 hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 475 && mouseY >= 240 && mouseY <= 285 && hatTab){ //Pudding hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 500 && mouseX <= 550 && mouseY >= 240 && mouseY <= 280 && hatTab){ //Sando hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 475 && mouseY >= 295 && mouseY <= 343 && hatTab){ //Scoop hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 490 && mouseX <= 557 && mouseY >= 300 && mouseY <= 320 && hatTab){ //Ears hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 485 && mouseY >= 350 && mouseY <= 380 && hatTab){ //Burger hat hover
    hovering = true;
  }else if(screen == 2 && mouseX >= 493 && mouseX <= 555 && mouseY >= 350 && mouseY <= 392 && hatTab){ //Roblox hat hover
    hovering = true;
  }
  
  if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 120 && mouseY <= 163 && extraTab){ //Apple extra hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 452 && mouseX <= 515 && mouseY >= 173 && mouseY <= 193 && extraTab){ //Bow extra hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 210 && mouseY <= 247 && extraTab){ //Choco extra hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 505 && mouseY >= 255 && mouseY <= 299 && extraTab){ //Clover extra hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 503 && mouseY >= 307 && mouseY <= 347 && extraTab){ //Strawb extra hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 465 && mouseX <= 495 && mouseY >= 360 && mouseY <= 377 && extraTab){ //Teeth extra hover
    hovering = true;
  }

  if(screen == 2 && mouseX >= 412 && mouseX <= 482 && mouseY >= 140 && mouseY <= 190 && plushieTab){ //Monkey plushie extra hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 548 && mouseY >= 140 && mouseY <= 190 && plushieTab){ //Angel plushie extra hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 418 && mouseX <= 470 && mouseY >= 215 && mouseY <= 270 && plushieTab){ //Cat plushie extra hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 497 && mouseX <= 548 && mouseY >= 215 && mouseY <= 276 && plushieTab){ //Apple plushie extra hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 425 && mouseX <= 470 && mouseY >= 303 && mouseY <= 355 && plushieTab){ //Thing plushie extra hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 500 && mouseX <= 551 && mouseY >= 300 && mouseY <= 357 && plushieTab){ //Bunny plushie extra hover
    hovering = true;
  }

  if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 117 && mouseY <= 156 && miscTab){ //Misc button 1 hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 168 && mouseY <= 210 && miscTab){ //Misc button 2 hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 228 && mouseY <= 270 && miscTab){ //Misc button 3 hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 285 && mouseY <= 325 && miscTab){ //Misc button 4 hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 335 && mouseY <= 385 && miscTab){ //Misc button 5 hover
    hovering = true;
  }

  if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 145 && mouseY <= 187 && filterTab){ //Filter button 1 hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 145 && mouseY <= 187 && filterTab){ //Filter button 2 hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 203 && mouseY <= 243 && filterTab){ //Filter button 3 hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 203 && mouseY <= 247 && filterTab){ //Filter button 4 hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 262 && mouseY <= 306 && filterTab){ //Filter button 5 hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 262 && mouseY <= 306 && filterTab){ //Filter button 6 hover
    hovering = true;
  } else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 325 && mouseY <= 368 && filterTab){ //Filter button 7 hover
    hovering = true;
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 325 && mouseY <= 368 && filterTab){ //Filter button 8 hover
    hovering = true;
  }

//back arrow hover
image(arrow,5,0,52,52);
if (screen == 2 && mouseX >= 5 && mouseX <= 57 && mouseY >= 0 && mouseY <= 52){
  hovering = true;
}
// Glasses button hover
if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 110 && mouseY <= 150){
  hovering = true;
}
// Delete button hover
if(screen == 2 && mouseX >= 405 && mouseX <= 432 && mouseY >= 105 && mouseY <= 138){
  hovering = true;
}
//Finish button hover
if(screen == 2 && mouseX >= 380 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450){
  hovering = true;
}
//Home button hover
if(screen == 2 && mouseX >= 425 && mouseX <= 455 && mouseY >= 435 && mouseY <= 465){
  hovering = true;
}
//Hat button hover
if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 160 && mouseY <= 200){
  hovering = true;
}
//Extra button hover
if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 210 && mouseY <= 250){
  hovering = true;
}
//Plushie button hover
if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 260 && mouseY <= 300){
  hovering = true;
}
//Misc button hover
if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 310 && mouseY <= 350){
  hovering = true;
}
//Filter button hover
if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 360 && mouseY <= 395){
  hovering = true;
}


  if(hovering){
    cursor(HAND);
  }else {
    cursor(ARROW);
  }

    // character selection loads id of user's choice
    if(selectedChar === "nayeon"){
      image(nayid,149,100,233,300);
    } else if(selectedChar === "jeongyeon"){
      image(jeongid,146,100,233,300);
    }else if(selectedChar === "momo"){
      image(momoid,145,100,233,300);
    }else if(selectedChar === "sana"){
      image(sanaid,148,105,233,300);
    }else if(selectedChar === "jihyo"){
      image(jihid,145,108,233,300);
    }else if(selectedChar === "mina"){
      image(minaid,146,100,233,300);
    }else if(selectedChar === "dahyun"){
      image(dahid,145,100,233,300);
    }else if(selectedChar === "chaeyoung"){
      image(chaeid,144,100,233,300);
    }else if(selectedChar === "tzuyu"){
      image(tzuid,142,100,233,300);
    }

  // Shows glasses tab
  if (glassesTab){
    rect(400,100, 170,300,10);
    strokeWeight(2);
    circle(420,125,20); // delete button
    textSize(20); 
    fill("#FABCCF");
    strokeWeight();
    text("×",414,130.5);
    image(glassesblack, 425,100,120,120);
    image(glasseskitty, 425,140,120,120);
    image(glassesswirl, 425,200,120,120);
    image(glassesred, 425,250,120,120);
    image(glassesplaid,428,290,118,118);
  } else if (hatTab){
    rect(400,100, 170,300,10);
    strokeWeight(2);
    circle(420,125,20); // delete button
    textSize(20); 
    fill("#FABCCF");
    strokeWeight();
    text("×",414,130.5);
    image(hatcream, 405,105,100,75);
    image(hatcream2, 475,98,110,73);
    image(hatcream3, 420,175,65,70);
    image(hatcream4,490,165,70,70);
    image(hatpudding, 407,218,90,90);
    image(hatsando,495,230,65,65);
    image(hatscoop,390,253,125,125);
    image(hatears,485,290,75,50);
    image(hatburger,420,345,65,45);
    image(hatroblox,480,310,100,100);
  } else if (extraTab){
    rect(400,100, 170,300,10);
    strokeWeight(2);
    circle(420,125,20); // delete button
    textSize(20); 
    fill("#FABCCF");
    strokeWeight();
    text("×",414,130.5);
    image(extraapple, 443,100,85,90);
    image(extrabow, 430,128,110,110);
    image(extrachoco, 460,200,50,50);
    image(extraclover, 460,250,50,50);
    image(extrastrawb,460,300,50,50);
    image(extrateeth,418,260,130,130);
  }else if (plushieTab){
    rect(400,100, 170,300,10);
    strokeWeight(2);
    circle(420,125,20); // delete button
    textSize(20); 
    fill("#FABCCF");
    strokeWeight();
    text("×",414,130.5);
    image(plushiemonkey, 405,120,90,90);
    image(plushieangel, 490,128,70,70);
    image(plushiecat, 410,210,75,75);
    image(plushieapple, 485,210,80,80);
    image(plushiething,415,295,65,65);
    image(plushiebunny,485,287,80,80);
  }else if (miscTab){
    rect(400,100, 170,300,10);
    strokeWeight(2);
    circle(420,125,20); // delete button
    textSize(20); 
    fill("#FABCCF");
    strokeWeight();
    text("×",414,130.5);
    image(buttons,345,110,280,280);
  }else if (filterTab){
    rect(400,100, 170,300,10);
    strokeWeight(2);
    circle(420,125,20); // delete button
    textSize(20); 
    fill("#FABCCF");
    strokeWeight();
    text("×",414,130.5);
    image(filterButtons,345,115,275,270);
  }
  
  // Puts on glasses
  if (glasses === "blackglasses"){
    image(glassesblack, 201,175,123,123);
  } else if (glasses === "kittyglasses"){
    image(glasseskitty,190,168,140,120);
  } else if (glasses === "swirlglasses"){
    image(glassesswirl,198,163,130,130);
  } else if (glasses === "redglasses"){
    image(glassesred, 203,170,120,120);
  } else if (glasses === "plaidglasses"){
    image(glassesplaid, 210,167,110,110);
  }

  // Sylvanian family misc adjustment
  if (misc === "5" && selectedChar === "nayeon"){
    image(misc5nay, 149,100,233,295);
  } else if(misc === "5" && selectedChar === "jeongyeon"){
    image(misc5jeong, 146,100,233,295);
  } else if(misc === "5" && selectedChar === "momo"){
    image(misc5momo, 145,100,233,295);
  } else if(misc === "5" && selectedChar === "sana"){
    image(misc5sana, 148,105,233,295);
  } else if(misc === "5" && selectedChar === "jihyo"){
    image(misc5jih, 145,108,233,295);
  } else if(misc === "5" && selectedChar === "mina"){
    image(misc5mina, 146,100,233,295);
  } else if(misc === "5" && selectedChar === "dahyun"){
    image(misc5dah, 145,100,233,295);
  } else if(misc === "5" && selectedChar === "chaeyoung"){
    image(misc5chae, 144,100,233,295);
  } else if(misc === "5" && selectedChar === "tzuyu"){
    image(misc5tzu, 142,100,233,295);
  }

  // Puts on hats
  if (hat === "cream1"){
    image(hatcream, 150,70,235,120);
  } else if (hat === "cream2"){
    image(hatcream2, 113,30,315,140);
  } else if (hat === "cream3"){
    image(hatcream3, 186,78,153,130);
  } else if (hat === "cream4"){
    image(hatcream4, 193,70,151,115);
  } else if (hat === "pudding"){
    image(hatpudding, 171,75,190,115);
  } else if (hat === "sando"){
    image(hatsando, 193,85,145,100);
  } else if (hat === "scoop"){
    image(hatscoop, 107,40,320,200)
  } else if (hat === "ears"){
    image(hatears, 192,120,140,90);
  } else if (hat === "burger"){
    image(hatburger, 194,100,130,70);
  } else if (hat === "roblox"){
    image(hatroblox, 130,50,270,180);
  }
   // Puts on extra accessory
  if (extra === "apple"){
    image(extraapple, 290,160,60,70);
  } else if (extra === "bow"){
    image(extrabow, 195,155,60,70);
  } else if (extra === "choco"){
    image(extrachoco,220,240,20,20)
  } else if (extra === "clover"){
    image(extraclover, 293,169,30,30);
  } else if (extra === "strawb"){
    image(extrastrawb, 293,169,30,30);
  } 
  //Teeth alignment
  if (extra === "teeth" && selectedChar === "jeongyeon"){
    image(extrateeth, 215,186,100,110);
  } else if(extra === "teeth" && selectedChar === "momo"){
    image(extrateeth, 214,199,100,100);
  }else if(extra === "teeth" && selectedChar === "sana"){
    image(extrateeth, 213,206,100,100);
  }else if(extra === "teeth" && selectedChar === "jihyo"){
    image(extrateeth, 211,190,105,110);
  }else if (extra === "teeth" && selectedChar === "mina"){
    image(extrateeth, 214,200,100,100);
  }else if (extra === "teeth" && selectedChar === "dahyun"){
    image(extrateeth, 214,187,100,110);
  }else if (extra === "teeth" && selectedChar === "chaeyoung"){
    image(extrateeth, 215,192,100,100);
  }else if (extra === "teeth" && selectedChar === "tzuyu"){
    image(extrateeth, 213,195,100,100);
  }else if (extra === "teeth"){
    image(extrateeth, 212,200,100,100);
  }

   // Puts on plushie accessory
   if (plushie === "monkey"){
    image(plushiemonkey, 303,289,70,70);
  } else if (plushie === "angel"){
    image(plushieangel, 306,283,70,70);
  } else if (plushie === "cat"){
    image(plushiecat, 306,283,70,70);
  } else if (plushie === "apple"){
    image(plushieapple, 306,286,70,70);
  } else if (plushie === "thing"){
    image(plushiething, 308,286,65,65);
  } else if (plushie === "bunny"){
    image(plushiebunny, 306,286,70,70);
  }

  if (misc === "1"){
    image(misc1, 303,180,80,90);
  } else if (misc === "2"){
    image(misc2, 155,100,235,330);
  } else if (misc === "3"){
    image(misc3, 137,20,335,355);
  } else if (misc === "4"){
    image(misc4,155,109,223,40);
  }

  if (filter === "a"){
    image(filtera, 150,95,230,310);
  } else if (filter === "b"){
    image(filterb, 150,95,230,310);
  } else if (filter === "c"){
    image(filterc, 150,95,230,310);
  } else if (filter === "d"){
    image(filterd, 150,95,230,310);
  } else if (filter === "e"){
    image(filtere, 150,95,230,310);
  } else if (filter === "f"){
    image(filterf, 150,95,230,310);
  } else if (filter === "g"){
    image(filterg, 150,95,230,310);
  } else if (filter === "h"){
    image(filterh, 150,95,230,310);
  }

  // accessory buttons
  fill("#FDE7EE");
  stroke("#FABCCF");
  strokeWeight(3);
  circle(80,130,30); 
  circle(80,180,30);
  circle(80,230,30);
  circle(80,280,30);
  circle(80,330,30);    
  circle(80,380,30);
  textSize(20); 
  fill("#FABCCF");
  strokeWeight();
  text("⚯",69,135);
  text("𐚁",69,187);
  text("❤︎⁠",71,238);
  textSize(18);
  text("𐂯⁠",67,287);
  textSize(20); 
  text("☆",70,338);
  textSize(28);
  text("⟡",70,389);

  // Finish button
  fill("#FDE7EE");
  stroke("#FABCCF");
  strokeWeight(3);
  circle(400,430,40); 
  circle(440,450,30);
  fill("#FABCCF");
  strokeWeight();
  textSize(36);
  text("✓",385,443);
  // Home button
  textSize(35);
  text("⌂",429.5,460);
  strokeWeight(2.5);
  line(433,450,445,450);
  
  fill("#FDE7EE");
  stroke("#FABCCF");
  strokeWeight(3);
}

function mousePressed(){
  if(mouseX >= 250 && mouseX <= 350 && mouseY >= 315 && mouseY <= 360){ // start button -> character selection
    screen = 1;
  }

  if(screen == 2 && mouseX >= 5 && mouseX <= 52 && mouseY >= 0 && mouseY <= 52){ //back arrow
    screen = 1;
    return;
  }
  if(screen == 2 && mouseX >= 425 && mouseX <= 455 && mouseY >= 435 && mouseY <= 465){ //Return to home screen
    screen = 0;
  }

  if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 110 && mouseY <= 150){ //glasses button
    glassesTab = true;
    hatTab = false;
    extraTab = false;
    plushieTab = false;
    miscTab = false;
    filterTab = false;
  } 
  
  if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 160 && mouseY <= 200){ //hat button
    hatTab = true;
    glassesTab = false;
    extraTab = false;
    plushieTab = false;
    miscTab = false;
    filterTab = false;
  }

  if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 210 && mouseY <= 250){ //extra button
    extraTab = true;
    hatTab = false;
    glassesTab = false;
    plushieTab = false;
    miscTab = false;
    filterTab = false;
  }

  if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 260 && mouseY <= 300){ //plushie button
    plushieTab = true;
    extraTab = false;
    hatTab = false;
    glassesTab = false;
    miscTab = false;
    filterTab = false;
  }

  if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 310 && mouseY <= 350){ //misc button
    miscTab = true;
    plushieTab = false;
    extraTab = false;
    hatTab = false;
    glassesTab = false;
    filterTab = false;
  }

  if(screen == 2 && mouseX >= 60 && mouseX <= 95 && mouseY >= 360 && mouseY <= 395){ //filter button
    filterTab = true;
    miscTab = false;
    plushieTab = false;
    extraTab = false;
    hatTab = false;
    glassesTab = false;
  }

  // Delete button
  if(screen == 2 && mouseX >= 400 && mouseX <= 440 && mouseY >= 105 && mouseY <= 145 && glassesTab){ 
    glasses = "";
  } else if(screen == 2 && mouseX >= 400 && mouseX <= 440 && mouseY >= 105 && mouseY <= 145 && hatTab){ 
    hat = "";
  } else if(screen == 2 && mouseX >= 400 && mouseX <= 440 && mouseY >= 105 && mouseY <= 145 && extraTab){ 
    extra = "";
  }else if(screen == 2 && mouseX >= 400 && mouseX <= 440 && mouseY >= 105 && mouseY <= 145 && plushieTab){ 
    plushie = "";
  }else if(screen == 2 && mouseX >= 400 && mouseX <= 440 && mouseY >= 105 && mouseY <= 145 && miscTab){ 
    misc = "";
  }else if(screen == 2 && mouseX >= 400 && mouseX <= 440 && mouseY >= 105 && mouseY <= 145 && filterTab){ 
    filter = "";
  }

  if(screen == 2 && mouseX >= 380 && mouseX <= 420 && mouseY >= 410 && mouseY <= 450){ //Finish button
    filterTab = false;
    miscTab = false;
    plushieTab = false;
    extraTab = false;
    hatTab = false;
    glassesTab = false;
    finish = true;
    cheer.play();
  }
  
  // Glasses click area 
  if(screen == 2 && glassesTab && mouseX >= 425 && mouseX <= 545 && mouseY >= 100 && mouseY <= 150){
    glasses = "blackglasses";
  } else if (screen == 2 && glassesTab && mouseX >= 425 && mouseX <= 540 && mouseY >= 170 && mouseY <= 200){
    glasses = "kittyglasses";
  } else if(screen == 2 && glassesTab && mouseX >= 425 && mouseX <= 540 && mouseY >= 220 && mouseY <= 280){
    glasses = "swirlglasses";
  } else if(screen == 2 && glassesTab && mouseX >= 425 && mouseX <= 540 && mouseY >= 305 && mouseY <= 325){
    glasses = "redglasses";
  } else if(screen == 2 && glassesTab && mouseX >= 425 && mouseX <= 540 && mouseY >= 345 && mouseY <= 365){
    glasses = "plaidglasses";
  } else if(screen == 2 && mouseX >= 425 && mouseX <= 480 && mouseY >= 110 && mouseY <= 170 && hatTab){  //Hat click area
    hat = "cream1";
  }else if(screen == 2 && mouseX >= 505 && mouseX <= 550 && mouseY >= 100 && mouseY <= 170 && hatTab){ 
    hat = "cream2";
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 185 && mouseY <= 230 && hatTab){ 
    hat = "cream3";
  }else if(screen == 2 && mouseX >= 498 && mouseX <= 550 && mouseY >= 180 && mouseY <= 230 && hatTab){ 
    hat = "cream4";
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 475 && mouseY >= 240 && mouseY <= 285 && hatTab){ 
    hat = "pudding";
  }else if(screen == 2 && mouseX >= 500 && mouseX <= 550 && mouseY >= 240 && mouseY <= 280 && hatTab){ 
    hat = "sando";
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 475 && mouseY >= 295 && mouseY <= 343 && hatTab){ 
    hat = "scoop";
  }else if(screen == 2 && mouseX >= 490 && mouseX <= 557 && mouseY >= 300 && mouseY <= 320 && hatTab){ 
    hat = "ears";
  }else if(screen == 2 && mouseX >= 420 && mouseX <= 485 && mouseY >= 350 && mouseY <= 380 && hatTab){
    hat = "burger";
  }else if(screen == 2 && mouseX >= 493 && mouseX <= 555 && mouseY >= 350 && mouseY <= 392 && hatTab){ 
    hat = "roblox";
  }else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 120 && mouseY <= 163 && extraTab){ //Extra click area
    extra = "apple";
  } else if(screen == 2 && mouseX >= 452 && mouseX <= 515 && mouseY >= 173 && mouseY <= 193 && extraTab){ 
    extra = "bow";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 210 && mouseY <= 247 && extraTab){
    extra = "choco";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 505 && mouseY >= 255 && mouseY <= 299 && extraTab){
    extra = "clover";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 503 && mouseY >= 307 && mouseY <= 347 && extraTab){ 
    extra = "strawb";
  } else if(screen == 2 && mouseX >= 465 && mouseX <= 495 && mouseY >= 360 && mouseY <= 377 && extraTab){
    extra = "teeth";
  } else if (screen == 2 && mouseX >= 412 && mouseX <= 482 && mouseY >= 140 && mouseY <= 190 && plushieTab){ //Plushie click area
    plushie = "monkey";
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 548 && mouseY >= 140 && mouseY <= 190 && plushieTab){ 
    plushie = "angel";
  } else if (screen == 2 && mouseX >= 418 && mouseX <= 470 && mouseY >= 215 && mouseY <= 270 && plushieTab){ 
    plushie = "cat";
  } else if (screen == 2 && mouseX >= 497 && mouseX <= 548 && mouseY >= 215 && mouseY <= 276 && plushieTab){ 
    plushie = "apple";
  } else if (screen == 2 && mouseX >= 425 && mouseX <= 470 && mouseY >= 303 && mouseY <= 355 && plushieTab){ 
    plushie = "thing";
  } else if (screen == 2 && mouseX >= 500 && mouseX <= 551 && mouseY >= 300 && mouseY <= 357 && plushieTab){ 
    plushie = "bunny";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 117 && mouseY <= 156 && miscTab){ // Misc Button click area
    misc = "1";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 168 && mouseY <= 210 && miscTab){ 
    misc = "2";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 228 && mouseY <= 270 && miscTab){ 
    misc = "3";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 285 && mouseY <= 325 && miscTab){ 
    misc = "4";
  } else if(screen == 2 && mouseX >= 460 && mouseX <= 507 && mouseY >= 335 && mouseY <= 385 && miscTab){ 
    misc = "5";
  } else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 145 && mouseY <= 187 && filterTab){ //Filter button click area
    filter = "a";
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 145 && mouseY <= 187 && filterTab){ 
    filter = "b";
  } else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 203 && mouseY <= 243 && filterTab){
    filter = "c";
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 203 && mouseY <= 247 && filterTab){ 
    filter = "d";
  } else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 262 && mouseY <= 306 && filterTab){ 
    filter = "e";
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 262 && mouseY <= 306 && filterTab){ 
    filter = "f";
  } else if(screen == 2 && mouseX >= 420 && mouseX <= 480 && mouseY >= 325 && mouseY <= 368 && filterTab){ 
    filter = "g";
  } else if (screen == 2 && mouseX >= 495 && mouseX <= 555 && mouseY >= 325 && mouseY <= 368 && filterTab){ 
    filter = "h";
  }


    // character selection
  if(screen == 1 && mouseX >= 25 && mouseX <= 175 && mouseY >= 0 && mouseY <= 150){
   selectedChar = "nayeon";
   screen = 2;
   if(naysound.isPlaying()){
    naysound.stop();
   }else{
    naysound.play();
   }
  } else if(screen == 1 && mouseX >= 240 && mouseX <= 355 && mouseY >= 10 && mouseY <= 140){
    selectedChar = "jeongyeon";
    screen = 2;
    if(jeongsound.isPlaying()){
      jeongsound.stop();
     }else{
      jeongsound.play();
     }
  } else if(screen == 1 && mouseX >= 440 && mouseX <= 555 && mouseY >= 10 && mouseY <= 140){
    selectedChar = "momo";
    screen = 2;
    if(momosound.isPlaying()){
      momosound.stop();
     }else{
      momosound.play();
     }
  } else if(screen == 1 && mouseX >= 40 && mouseX <= 155 && mouseY >= 185 && mouseY <= 315){
    selectedChar = "sana";
    screen = 2;
    if(sanasound.isPlaying()){
      sanasound.stop();
     }else{
      sanasound.play();
     }
  } else if(screen == 1 && mouseX >= 240 && mouseX <= 355 && mouseY >= 185 && mouseY <= 315){
    selectedChar = "jihyo";
    screen = 2;
    if(jihsound.isPlaying()){
      jihsound.stop();
     }else{
      jihsound.play();
     }
  } else if(screen == 1 && mouseX >= 440 && mouseX <= 555 && mouseY >= 185 && mouseY <= 315){
    selectedChar = "mina";
    screen = 2;
    if(minasound.isPlaying()){
      minasound.stop();
     }else{
      minasound.play();
     }
  } else if(screen == 1 && mouseX >= 40 && mouseX <= 155 && mouseY >= 365 && mouseY <= 515){
    selectedChar = "dahyun";
    screen = 2;
    if(dahsound.isPlaying()){
      dahsound.stop();
     }else{
      dahsound.play();
     }
  } else if(screen == 1 && mouseX >= 240 && mouseX <= 355 && mouseY >= 365 && mouseY <= 515){
    selectedChar = "chaeyoung";
    screen = 2;
    if(chaesound.isPlaying()){
      chaesound.stop();
     }else{
      chaesound.play();
     }
  } else if (screen == 1 && mouseX >= 440 && mouseX <= 555 && mouseY >= 365 && mouseY <= 515){
    selectedChar = "tzuyu";
    screen = 2;
    if(tzusound.isPlaying()){
      tzusound.stop();
     }else{
      tzusound.play();
     }
  }

}
