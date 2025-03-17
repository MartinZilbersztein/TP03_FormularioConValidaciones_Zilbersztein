const inputContrasena = document.getElementById('contrasena');
const inputContrasena2 = document.getElementById('contrasena2');
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
let contrasena, contrasena2;
let nombreValido = false, emailValido = false, contrasenaValida = false, contrasenasCoinciden = false;

inputNombre.onchange = function()
{
    const feedbackElement = document.getElementById('respuestaNombre');
    if (inputNombre.value.length < 3)
    {
        feedbackElement.textContent = "El nombre debe incluir tres o más caracteres.";
        nombreValido = false;
    }
    else 
    {
        feedbackElement.textContent = ""; 
        nombreValido = true
    }
}
inputEmail.onchange = function()
{
    const feedbackElement = document.getElementById('respuestaEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(inputEmail.value)) {
      feedbackElement.textContent = ""; emailValido = true;
    } else {
      feedbackElement.textContent = "Por favor, ingrese un formato de email válido.";
      emailValido = false;
    }
}


inputContrasena.onchange = function()
{
    const feedbackElement = document.getElementById('respuestaContrasena');
    contrasena = inputContrasena.value;
    if (contrasena.length < 8)
    {
        feedbackElement.textContent = "La contraseña debe contener, al menos, ocho caracteres."
        contrasenaValida = false;
    }
    else 
    {
        feedbackElement.textContent = "";
        contrasenaValida = true;
    }
}

inputContrasena2.onchange = function()
{
    contrasena = inputContrasena.value;
    contrasena2 = inputContrasena2.value;
    const feedbackElement = document.getElementById('respuestaContrasena2');
    if (contrasena != null && contrasena2 != null && contrasena != contrasena2)
    {
        feedbackElement.textContent = "Las contraseñas no coinciden.";
        contrasenasCoinciden = false;
    }
    else 
    {
        feedbackElement.textContent = "";
        contrasenasCoinciden = true;
    }
}

formulario.addEventListener('submit', function(){
    if (!nombreValido || !emailValido || !contrasenaValida || !contrasenasCoinciden)
    {
        event.preventDefault();
    }
})

