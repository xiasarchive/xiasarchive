let pictures = []
let pic = 1;
let galsize = 400;
let bl, br, bg;
let title;
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;

function preload() {

    
bl = loadImage('Assets/bl.png');
br = loadImage('Assets/br.png');
bg = loadImage('Assets/bg.png');


img1 = loadImage("Assets/1.jpg");
img2 = loadImage("Assets/2.jpg");
img3 = loadImage("Assets/3.jpg");
img4 = loadImage("Assets/4.jpg");
img5 = loadImage("Assets/5.jpg");
img6 = loadImage("Assets/6.jpg");
img7 = loadImage("Assets/7.jpg");
img8 = loadImage("Assets/8.jpg");
img9 = loadImage("Assets/9.jpg");
img10 = loadImage("Assets/10.jpg");
}

function setup() {
createCanvas(windowWidth, windowHeight);
imageMode(CENTER);


}

function draw() {
    
    image(bg, width/2+2, 355, 474, 475)
    if (pic > 10) {
        pic = 1;
    }
    if (pic < 1) {
        pic = 10;
    }

    
    if ((((mouseX > 1070 && mouseX < 1130) && (mouseY > 320 && mouseY < 380)) || ((mouseX > 400 && mouseX < 460) && (mouseY > 320 && mouseY < 380))) || ((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441))) {
        cursor('pointer')
    } else {
        cursor('default')
    }


    
if (pic == 1) {
    image(img1, width/2, height/2-10, galsize, galsize)
    title = "i lost my keys!!"
}
 if (pic == 2) {
    image(img2, width/2, height/2-10, galsize, galsize)
    title = "i think im lost"
}
if (pic == 3) {
   image(img3, width/2, height/2-10, galsize, galsize)
    title = "chill jill!"
}
if (pic == 4) {
   image(img4, width/2, height/2-10, galsize, galsize)
    title = "Billie Shillings Awesome Party"
}
if (pic == 5) {
   image(img5, width/2, height/2-10, galsize, galsize)
    title = "sleep"
}
if (pic == 6) {
   image(img6, width/2, height/2-10, galsize, galsize)
    title = "Rob List"
}
if (pic == 7) {
   image(img7, width/2, height/2-10, galsize, galsize)
    title = "turnitoff"
}
if (pic == 8) {
   image(img8, width/2, height/2-10, galsize, galsize)
    title = "purple"
}
if (pic == 9) {
   image(img9, width/2, height/2-10, galsize, galsize)
    title = "meatlocker"
}
if (pic == 10) {
   image(img10, width/2, height/2-10, galsize, galsize)
    title = "payday"
}

textSize(20)
textFont("timesnewroman")
text(title, 570, 570)
image(bl, 430, height/2, 100, 100)
image(br, 1100, height/2, 100, 100)





}

function mouseClicked() {
    if ((mouseX > 1070 && mouseX < 1130) && (mouseY > 320 && mouseY < 380)) {
        pic = pic + 1;
    }

    if ((mouseX > 400 && mouseX < 460) && (mouseY > 320 && mouseY < 380)) {
        pic = pic - 1;
    }


    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==1)) {
        window.location.href = "works/ilostmykeys.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==2)) {
        window.location.href = "works/ithinkimlost.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==3)) {
        window.location.href = "works/chilljill.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==4)) {
        window.location.href = "works/billieshillings.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==5)) {
        window.location.href = "works/sleep.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==6)) {
        window.location.href = "works/roblist.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==7)) {
        window.location.href = "works/turnitoff.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==8)) {
        window.location.href = "works/purple.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==9)) {
        window.location.href = "works/meatlocker.html"
    }
    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==10)) {
        window.location.href = "works/payday.html"
    }

    
}