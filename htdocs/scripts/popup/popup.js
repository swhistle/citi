"use strict";

var link = document.querySelectorAll(".js-show-popup"); //массив ссылок, открывающих popup
var close = document.querySelectorAll(".js-close-popup"); //массив кнопок, закрывающих popup
var popup = document.querySelector(".js-popup");
var body = document.querySelector("body");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", showPopup);
}

for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", closePopup);
}

function showPopup(e) {
  popup.classList.add("active");
  body.style.overflow = "hidden";
}

function closePopup(e) {
  popup.classList.remove("active");
  body.style.overflow = "auto";
}