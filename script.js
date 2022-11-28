"use strict";

let clickBtn = document.querySelector(".nav-icon");
let closeBtn = document.querySelector(".close-btn");

// TO OPEN SIDE NAVIGATION
clickBtn.addEventListener("click", function () {
  document.querySelector(".side-bar").style.right = "0px";
});

// TO CLOSE SIDE NAVIGATION
closeBtn.addEventListener("click", function () {
  document.querySelector(".side-bar").style.right = "-100%";
});
