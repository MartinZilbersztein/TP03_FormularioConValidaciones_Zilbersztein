const inputContrasena = document.getElementById('contrasena');
const inputContrasena2 = document.getElementById('contrasena2');
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
let contrasena, contrasena2;

inputNombre.onchange = function()
{
    const feedbackElement = document.getElementById('respuestaNombre');
    if (inputNombre.value.length < 3)
    {
        feedbackElement.textContent = "El nombre debe incluir tres o más caracteres";
    }
    else feedbackElement.textContent = "";
}
inputEmail.onchange = function()
{
    const feedbackElement = document.getElementById('respuestaEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(inputEmail.value)) {
      feedbackElement.textContent = "";
    } else {
      feedbackElement.textContent = "Por favor, ingrese un formato de email válido";
    }
}


inputContrasena.onchange = function()
{
    contrasena = inputContrasena.value;
    if (contrasena.length < 8)
    {}
}

inputContrasena2.onchange = function()
{
    contrasena = inputContrasena.value;
    contrasena2 = inputContrasena2.value;
    const feedbackElement = document.getElementById('respuestaContrasena');
    if (contrasena != null && contrasena2 != null && contrasena != contrasena2)
    feedbackElement.textContent = "Las contraseñas no coinciden";
    else feedbackElement.textContent = "";
}

formulario.addEventListener('submit', function(){

})

