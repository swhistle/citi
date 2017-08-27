//валидация формы

var form = document.querySelector(".js-form-request");
var email = document.getElementById("form-request-email");
var userName = document.getElementById("form-request-name");
var selectCountry = document.getElementById("form-request-select-country");
var checkbox = document.getElementById("form-request-checkbox-agree");
var emailField = document.querySelector(".js-field-email");
var nameField = document.querySelector(".js-field-name");
var buttonRemove = document.querySelectorAll(".js-value-remove");
var error = document.getElementsByClassName("error");

var adrPattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
var namePattern = /[a-zа-я- ]/i;

form.addEventListener("submit", validation);

function validation(e) {
  e.preventDefault();
  if(adrPattern.test(email.value) == false) {
    email.classList.add("error");
    emailField.classList.add("error");
  } else {
    email.classList.remove("error");
    emailField.classList.remove("error");
  }

  if(namePattern.test(userName.value) == false) {
    userName.classList.add("error");
    nameField.classList.add("error");
  } else {
    userName.classList.remove("error");
    nameField.classList.remove("error");
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

  if(error.length == 0) {
    window.location = "https://www.google.com";
  }

}

// проверка на количество символов в поле ввода

email.addEventListener("input", function() {
  changePlaceholder(email, emailField);
});

userName.addEventListener("input", function() {
  changePlaceholder(userName, nameField);
});

function changePlaceholder(input, field) {
  if (input.value.length > 0) {
    field.classList.add("active");
  } else {
    field.classList.remove("active");
  }
}

//стереть значение текстового поля при нажатии на X (delete)

buttonRemove.forEach(function(button, i, buttonRemove) {
  button.addEventListener("click", removeValue);
});

function removeValue() {
  this.closest(".input-wrapper").firstElementChild.value = "";
  this.closest(".input-wrapper").classList.remove("active");
}


