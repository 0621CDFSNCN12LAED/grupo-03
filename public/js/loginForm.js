const email = document.querySelector("#email");
const password = document.querySelector("#password");

const errorTiltle = document.querySelector("#error-title");
const errorList = document.querySelector("#errors");

const inputs = [
  email,
  password
];

email.focus();

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {

  const errors = formIsInvalid();

  if (errors.length > 0) {

    console.log("Formulario es invalido!");

    event.preventDefault();

    errorTiltle.classList.remove("hidden");
    errorTiltle.innerHTML = "ERROR";

    errorList.classList.remove("hidden");
    errorList.innerHTML = "";

    for (const error of errors) {
      errorList.innerHTML += `<li>${error}</li>`;
    }

  } else {

    errorTiltle.classList.add("hidden");

    errorList.classList.add("hidden");
    errorList.innerHTML = "";

  }

});

function formIsInvalid() {
  
  let errors = [];

  const emailEmpty = validateInput(email, isEmpty, "El Email no puede estar vacio");
  const passwordEmpty = validateInput(password, isEmpty, "La Contraseña no puede estar vacia");

  const inValidEmail = validateInput(email, notMail, "Email invalido");
  const emailNonExistent = validateInput(email, mailNotFound, "Credencial Invalida");

  errors.push(emailEmpty);
  
  if (!emailEmpty) {
    errors.push(inValidEmail);
  }
  
  if (!emailEmpty && !inValidEmail) {
    errors.push(emailNonExistent);
  }

  errors.push(passwordEmpty);
  
  console.log(errors);
  return errors.filter((msg) => msg != null);

}

function isEmpty(input) {
  return input.value.trim() == "";
}

function notMail (input) {

  let isCharMail = /\S+@\S+\.\S+/;

  if(! isCharMail.test(input.value)){
    return true;
  }
  
}

const mailNotFound = async (input) => {
  const usersService = require("../../src/services/users-service");
  const user = await usersService.getByEmail(input);
  if (!user) {
    return true;
  }
}

function validateInput(input, validationFunction, message) {
  
  if (validationFunction(input)) {
    
    input.classList.add("is-invalid");
    return message;
    
  } else {
    
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return null;

  }

}