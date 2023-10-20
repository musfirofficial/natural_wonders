"use strict";

const slide = document.querySelectorAll("#slide");
const nextBtn = document.querySelector(".next");
const replayBtn = document.querySelector(".replay");
const text = document.querySelectorAll(".text");

//variables
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let imagecount = 0;

nextBtn.addEventListener("click", function () {
  if (imagecount <= 5) {
    text[imagecount].classList.toggle("hidden");
    text[imagecount + 1].classList.toggle("hidden");
    //slide 1
    slide[1].src = images[imagecount];
    slide[1].classList.toggle("rotateplus");
    slide[1].classList.toggle("rotateminus");
    //slide2
    slide[2].src = images[imagecount];
    slide[2].classList.toggle("rotateplus");
    slide[2].classList.toggle("rotateminus");
    //slide3
    slide[0].src = images[imagecount];
    slide[0].classList.toggle("fader");
    document.querySelector(".big").classList.toggle("fader");

    imagecount++;
  } else if (imagecount > 5) {
    nextBtn.classList.toggle("hidden");
    replayBtn.classList.toggle("hidden");
  }
});
