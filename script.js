"use strict";

const toggle = document.querySelector(".toggle");
let toggleCircle = document.querySelector(".switch");



toggle.addEventListener("click", () => {
  toggleCircle.classList.toggle("toggle--active");
  Array.from(toggle.children).forEach((child) => {
    child.classList.toggle("active");
  });
});
