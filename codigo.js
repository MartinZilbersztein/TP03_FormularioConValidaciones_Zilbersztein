const inputContrasena = document.getElementById('contrasena');
const inputContrasena2 = document.getElementById('contrasena2');
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');

inputNombre.onchange = function()
{
    if (inputNombre.value.length < 3)
    console.log("mal");
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
inputContraseña2.onchange = function()
{
    const contrasena = inputContrasena.value;
    const contrasena2 = inputContrasena2.value;
    const feedbackElement = document.getElementById('respuestaContraseñna');
    if (contrasena1 != contrasena2)
    feedbackElement.textContent = "Las contraseñas no coinciden";
}

