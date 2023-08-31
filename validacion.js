//Haz tú validación en javascript acá
export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar en blanco o vacío",
    patternMismatch: "El campo nombre debe contener máximo 50 caracteres.",
  },
  email: {
    valueMissing: "El campo email no puede estar en blanco o vacío",
    typeMismatch: "El correo no es válido",
  },

  asunto: {
    valueMissing: "El campo asunto no puede estar en blanco o vacío",
    typeMismatch: "El campo asunto debe contener máximo 50 caracteres",
  },

  mensaje: {
    valueMissing: "El campo mensaje no puede estar en blanco o vacío",
    typeMismatch: "El campo mensaje debe contener máximo 300 caracteres",
  },
  
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function es_vacio(){
  var campo1 = document.getElementById("nombre").value;
  var campo2 = document.getElementById("email").value;
  var campo3 = document.getElementById("asunto").value;
  var campo4 = document.getElementById("mensaje").value;
  if(campo1 != "" && campo2 != "" && campo3 != "" && campo4 != ""){
    document.getElementById("enviar").removeAttribute('disabled');
  }
  else{
    document.getElementById("enviar").setAttribute('disabled', 'disabled');
  }
}