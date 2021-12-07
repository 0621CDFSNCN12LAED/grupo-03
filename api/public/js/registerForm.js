const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const image = document.querySelector("#image");

const errorTiltle = document.querySelector("#error-title");
const errorList = document.querySelector("#errors");

const inputs = [
  firstName,
  lastName,
  email,
  password,
  image
];

firstName.focus();

const form = document.querySelector(".register-form");

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

  const firstNameEmpty = validateInput(firstName, isEmpty, "El Nombre no puede estar vacio");
  const lastNameEmpty = validateInput(lastName, isEmpty, "El Apellido no puede estar vacia");
  const emailEmpty = validateInput(email, isEmpty, "El Email no puede estar vacio");
  const passwordEmpty = validateInput(password, isEmpty, "La Contraseña no puede estar vacia");

  const firstNameLength = validateInput(firstName, isLength, "El Nombre debe ser mas largo");
  const lastNameLength = validateInput(lastName, isLength, "El Apellido ser mas largo");
  const inValidEmail = validateInput(email, notMail, "Email invalido");
  const inValidPassword = validateInput(password, weakPassword, "Tu Contraseña es debil");
  const inValidImage = validateInput(image, inValidFile, "Archivo de imagen invalido");

  errors.push(firstNameEmpty);

  if (!firstNameEmpty) {
    errors.push(firstNameLength);
  }

  errors.push(lastNameEmpty);

  if (!lastNameEmpty) {
    errors.push(lastNameLength);
  }

  errors.push(emailEmpty);
  
  if (!emailEmpty) {
    errors.push(inValidEmail);
  }

  errors.push(passwordEmpty);

  if (!passwordEmpty) {
    errors.push(inValidPassword);
  }

  errors.push(inValidImage);
  
  console.log(errors);
  return errors.filter((msg) => msg != null);

}

function isEmpty(input) {
  return input.value.trim() == "";
}

function isLength (input) {
  return input.value.length < 2;
}

function notMail (input) {

  let isCharMail = /\S+@\S+\.\S+/;

  if (! isCharMail.test(input.value) ) {
    return true;
  }
  
}

function weakPassword (input) {
  let inputValue = input.value;

  let containsDigits = /[0-9]/;
  let containsUpper = /[A-Z]/;
  let containsLower = /[a-z]/;
  let containsSpecialCharacter = /\W/;

  let passwordLength = inputValue.length >= 8;
  let passwordDigits = containsDigits.test(inputValue);
  let passwordUpper = containsUpper.test(inputValue);
  let passwordLower = containsLower.test(inputValue);
  let passwordSpecialCharacter = containsSpecialCharacter.test(inputValue);

  if(!passwordLength || !passwordDigits || !passwordUpper || !passwordLower || !passwordSpecialCharacter) {
    return true;
  }

}

function inValidFile (input) {
  
  let extensions = /(.jpg|.jpeg|.png|.gif)$/i;

  if (input.value == "") {
    return false;
  }

  if (!extensions.exec(input.value) ) {
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