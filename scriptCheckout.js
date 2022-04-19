"use strict";

const paymentMethod = document.querySelectorAll("[name='payment']");
const wallet = document.querySelector(".wallet");
const cc = document.querySelector(".cc");
console.log(paymentMethod);

const showMethod = function (x) {
  wallet.classList.add("hidden");
  cc.classList.add("hidden");
  if (x == 0) {
    wallet.classList.toggle("hidden");
  } else if (x == 1) {
    cc.classList.toggle("hidden");
  }
};
