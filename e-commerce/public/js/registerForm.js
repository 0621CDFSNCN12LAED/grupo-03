const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lasttName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const campos = {
	firstName: false,
	lastName: false,
	email: false,
	password: false,
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

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "firstName":
			validarCampo(isEmpty, e.target, 'firstName');
			validarCampo(isLength, e.target, 'firstName');
		break;
		case "lastName":
			validarCampo(isEmpty, e.target, 'lastName');
			validarCampo(isLength, e.target, 'lastName');
		break;
		case "email":
			validarCampo(notMail, e.target, 'email');
		break;
		case "password":
			validarCampo(weakPassword, e.target, 'password');
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
	if(!campos.firstName && !campos.lastName && !campos.password && !campos.email ){
		e.preventDefault();
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});