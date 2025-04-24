let pictures = []
let pic = 10;
let galsize = 400;
let bl, bg;
let title;
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;

function preload() {

    
bl = loadImage('other/randombutton.png');
bg = loadImage('other/bg.png');


img1 = loadImage("other/1.jpg");
img2 = loadImage("other/2.jpg");
img3 = loadImage("other/3.jpg");
img4 = loadImage("other/4.jpg");
img5 = loadImage("other/5.jpg");
img6 = loadImage("other/6.jpg");
img7 = loadImage("other/7.jpg");
img8 = loadImage("other/8.jpg");
img9 = loadImage("other/9.jpg");
img10 = loadImage("other/10.jpg");
}

function setup() {
createCanvas(windowWidth, windowHeight);
imageMode(CENTER);


}

function draw() {
    image(bg, width/2+2, 355, 474, 475)


    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 541) && (pic==2 || pic==10)) || ((mouseX > 723 && mouseX < 814) && (mouseY > 605 && mouseY < 630))) {
      cursor('pointer');  
    } else {
        cursor('default')
    }

  


    
if (pic == 1) {
    image(img1, width/2, height/2-10, galsize, galsize)
    title = "untitled | 2025 | acrylic on wood panel"
}
 if (pic == 2) {
    image(img2, width/2, height/2-10, galsize, galsize)
    title = "let's go to sleep! | 2024 | Processing"
}
if (pic == 3) {
   image(img3, width/2, height/2-10, galsize, galsize)
    title = "ROBLOXIAN | 2024 | 9 x 12in. screenprint"
}
if (pic == 4) {
   image(img4, width/2, height/2-10, galsize, galsize)
    title = "crude | 2024 | 5 x 8in. screenprint"
}
if (pic == 5) {
   image(img5, width/2, height/2-10, galsize, galsize)
    title = "game over | 2023 | 9 x 12in. woodblock print"
}
if (pic == 6) {
   image(img6, width/2, height/2-10, galsize, galsize)
    title = "lost | 2023 | digital drawing"
}
if (pic == 7) {
   image(img7, width/2, height/2-10, galsize, galsize)
    title = "diokophobia | 2023 | 4 x 6in. woodblock print"
}
if (pic == 8) {
   image(img8, width/2, height/2-10, galsize, galsize)
    title = "anomalocaris | 2024 | Maya 3D environment"
}
if (pic == 9) {
   image(img9, width/2, height/2-10, galsize, galsize)
    title = "anything for a smile | 2023 | mixed media"
}
if (pic == 10) {
   image(img10, width/2, height/2-10, galsize, galsize)
    title = "rabbithole | 2024 | 2:22 video animation"
}

textSize(20)
textFont("timesnewroman")
text(title, 570, 570)
image(bl, width/2, 620, 100, 100)


}


function mouseClicked() {
    if ((mouseX > 723 && mouseX < 814) && (mouseY > 605 && mouseY < 630)) {
        pic = int(random(1,10))
    }

    if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==2)) {
        window.location.href = "https://www.instagram.com/p/DBO1fbPvEQe/"
    } if (((mouseX > 569 && mouseX < 969) && (mouseY > 141 && mouseY < 441)) && (pic==10)) {
        window.location.href = "https://youtu.be/dxFAu-YdA_k"
    }
}