const productName = document.querySelector("#name");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const weight = document.querySelector("#weight");
const image = document.querySelector("#image");

const errorTiltle = document.querySelector("#error-title");
const errorList = document.querySelector("#errors");

const requiredInputs = [
  productName,
  description,
  price,
  weight
];

productName.focus();

const form = document.querySelector(".formulario");

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

  const productNameEmpty = validateInput(productName, isEmpty, "El Nombre no puede estar vacio");
  const descriptionEmpty = validateInput(description, isEmpty, "La Descripción no puede estar vacia");
  const priceEmpty = validateInput(price, isEmpty, "El Precio no puede estar vacio");
  const weightEmpty = validateInput(weight, isEmpty, "El Peso no puede estar vacio");

  const productNameLength = validateInput(productName, isLength, "El Nombre debe ser mas largo");
  const descriptionLength = validateInput(description, isLength, "La Descripción ser mas larga");
  const inValidImage = validateInput(image, inValidFile, "Archivo de Imagen invalido");

  errors.push(productNameEmpty);

  if (!productNameEmpty) {
    errors.push(productNameLength);
  }

  errors.push(descriptionEmpty);

  if (!descriptionEmpty) {
    errors.push(descriptionLength);
  }

  errors.push(priceEmpty);

  errors.push(weightEmpty);

  errors.push(inValidImage);
  
  console.log(errors);
  return errors.filter((msg) => msg != null);

}

function isEmpty(input) {
  return input.value.trim() == "";
}

function isLength (input) {
  if (input == productName) {
    return input.value.length < 5;
  } 
  if (input == description) {
    return input.value.length < 20;
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