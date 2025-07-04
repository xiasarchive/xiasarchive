const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    }

}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
slideIndex = slides.length - 1;
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");

    if (slideIndex == 0) {
        document.getElementById("label").innerHTML = "untitled"
    }
    else if (slideIndex == 1) {
        document.getElementById("label").innerHTML = "lets go to sleep!"
    }     
    else if (slideIndex == 2) {
        document.getElementById("label").innerHTML = "Robloxian"
    } 
    else if (slideIndex == 3) {
        document.getElementById("label").innerHTML = "crude"
    } 
    else if (slideIndex == 4) {
        document.getElementById("label").innerHTML = "game over!"
    } 
    else if (slideIndex == 5) {
        document.getElementById("label").innerHTML = "lost"
    } 
    else if (slideIndex == 6) {
        document.getElementById("label").innerHTML = "diokophobia"
    } 
    else if (slideIndex == 7) {
        document.getElementById("label").innerHTML = "Anomalocaris"
    } 
    else if (slideIndex == 8) {
        document.getElementById("label").innerHTML = "anything for a smile"
    } 
    else if (slideIndex == 9) {
        document.getElementById("label").innerHTML = "rabbithole"
    } 

}



function nextSlide(){
    slideIndex = Math.floor(Math.random() * 10);
    showSlide(slideIndex);

}


