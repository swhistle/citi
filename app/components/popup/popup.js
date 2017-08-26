var link = document.querySelectorAll(".js-show-popup"); //массив ссылок, открывающих popup
var close = document.querySelectorAll(".js-close-popup"); //массив кнопок, закрывающих popup
var popup = document.querySelector(".js-popup");
var body = document.querySelector("body");

link.forEach(function(linkItem, i, link) {
  linkItem.addEventListener("click", showPopup);
});

close.forEach(function(closeItem, i, link) {
  closeItem.addEventListener("click", closePopup);
});

function showPopup(e) {
  popup.classList.add("active");
  body.style.overflow = "hidden";
}

function closePopup(e) {
  popup.classList.remove("active");
  body.style.overflow = "auto";
}