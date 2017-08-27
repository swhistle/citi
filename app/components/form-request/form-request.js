//валидация формы

var form = document.querySelector(".js-form-request");
var email = document.getElementById("form-request-email");
var userName = document.getElementById("form-request-name");
var selectCountry = document.getElementById("form-request-select-country");
var checkbox = document.getElementById("form-request-checkbox-agree");
var error = document.getElementsByClassName("error");

var adrPattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
var namePattern = /[a-zа-я- ]/i;

form.addEventListener("submit", validation);

function validation(e) {
  e.preventDefault();
  if(adrPattern.test(email.value) == false) {
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if(namePattern.test(userName.value) == false) {
    userName.classList.add("error");
  } else {
    userName.classList.remove("error");
  }

  if (selectCountry.value == "default") {
    selectCountry.classList.add("error");
  } else {
    selectCountry.classList.remove("error");
  }

  if (!checkbox.checked) {
    checkbox.classList.add("error");
  } else {
    checkbox.classList.remove("error");
  }

  if(error.length > 0) {
    alert(error.length + " fail");
  } else {
    window.location = "https://www.google.com";
  }

}