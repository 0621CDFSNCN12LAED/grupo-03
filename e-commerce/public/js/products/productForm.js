const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const name = document.getElementById("name");
const description = document.getElementById("description");
const weight = document.getElementById("weight");
const price = document.getElementById("price");

const campos = {
	name: false,
	description: false,
	weight: false,
	price: false,
}
  
function notName (input) {
	return input.value.trim() == "" && input.value.length < 20;
}

function notDescription (input) {
  return input.value.trim() == "" && input.value.length < 20;
}

function notNumber (input) {
	let inputValue = input.value;

	let containsDigits = /[0-9]/;

	let priceDigits = containsDigits.test(inputValue);
	
	if(!priceDigits) {
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

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(notName, e.target, 'name')
		break;
		case "description":
			validarCampo(notDescription, e.target, 'description');
		break;
		case "weight":
			validarCampo(notNumber, e.target, 'weight');
		break;
		case "price":
			validarCampo(notNumber, e.target, 'price');
		break;
	}
}

const validarCampo = (validateFunction, input, campo) => {
	if(!validateFunction(input)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	if(!campos.name && !campos.description && !campos.price && !campos.weight ){
		e.preventDefault();
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});