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
        document.getElementById("label").innerHTML = "i lost my keys!"
    }
    else if (slideIndex == 1) {
        document.getElementById("label").innerHTML = "i think im lost"
    }     
    else if (slideIndex == 2) {
        document.getElementById("label").innerHTML = "Chill Jill"
    } 
    else if (slideIndex == 3) {
        document.getElementById("label").innerHTML = "billie shillings awesome party"
    } 
    else if (slideIndex == 4) {
        document.getElementById("label").innerHTML = "sleep"
    } 
    else if (slideIndex == 5) {
        document.getElementById("label").innerHTML = "Rob List"
    } 
    else if (slideIndex == 6) {
        document.getElementById("label").innerHTML = "turn it off"
    } 
    else if (slideIndex == 7) {
        document.getElementById("label").innerHTML = "purple"
    } 
    else if (slideIndex == 8) {
        document.getElementById("label").innerHTML = "meatlocker"
    } 
    else if (slideIndex == 9) {
        document.getElementById("label").innerHTML = "payday"
    } 

}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}


