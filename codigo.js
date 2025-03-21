const inputContrasena = document.getElementById('contrasena');
const inputContrasena2 = document.getElementById('contrasena2');
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
let contrasena, contrasena2;
let nombreValido = false, emailValido = false, contrasenaValida = false, contrasenasCoinciden = false;
const usuarios = localStorage.getItem("usuarios");

const contieneNumero = (contrasena) => {
    return /\d/.test(contrasena);
}

const contieneLetra = (contrasena) => {
    let regExp = /[a-zA-Z]/g, funciono = false;
    if ((regExp.test(contrasena))) funciono = true;
    return funciono;
}


const verificarNombre = () =>
{
    const feedbackElement = document.getElementById('respuestaNombre');
    if (inputNombre.value.length < 3)
    {
        feedbackElement.textContent = "El nombre debe incluir tres o más caracteres.";
        nombreValido = false;
        inputNombre.classList.add("inputInvalido");
        inputNombre.classList.remove("inputValido");
    }
    else 
    {
        feedbackElement.textContent = ""; 
        nombreValido = true
        inputNombre.classList.add("inputValido");
        inputNombre.classList.remove("inputInvalido");
    }
}
const verificarEmail = () =>
{
    const feedbackElement = document.getElementById('respuestaEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(inputEmail.value)) 
    {
      feedbackElement.textContent = ""; 
      emailValido = true;
      inputEmail.classList.add("inputValido");
      inputEmail.classList.remove("inputInvalido");
    } 
    else 
    {
      feedbackElement.textContent = "Por favor, ingrese un formato de email válido.";
      emailValido = false;
      inputEmail.classList.add("inputInvalido");
      inputEmail.classList.remove("inputValido");
    }
}


const verificarContrasena = () =>
{
    const feedbackElement = document.getElementById('respuestaContrasena');
    contrasena = inputContrasena.value;
    if (contrasena.length < 8 || !contieneNumero(contrasena) || !contieneLetra(contrasena))
    {
        feedbackElement.textContent = "La contraseña debe contener, al menos, ocho caracteres, un número y una letra."
        contrasenaValida = false;
        inputContrasena.classList.add("inputInvalido");
        inputContrasena.classList.remove("inputValido");
    }
    else 
    {
        feedbackElement.textContent = "";
        contrasenaValida = true;
        inputContrasena.classList.add("inputValido");
        inputContrasena.classList.remove("inputInvalido");
        if (inputContrasena2.value != "")
        {
            verificarContrasena2();
        }
    }
}

const verificarContrasena2 = () =>
{
    contrasena = inputContrasena.value;
    contrasena2 = inputContrasena2.value;
    const feedbackElement = document.getElementById('respuestaContrasena2');
    if ((contrasena != null && contrasena2 != null) && contrasena != contrasena2)
    {
        feedbackElement.textContent = "Las contraseñas no coinciden.";
        contrasenasCoinciden = false;
        inputContrasena2.classList.add("inputInvalido");
        inputContrasena2.classList.remove("inputValido");
    }
    else 
    {
        feedbackElement.textContent = "";
        contrasenasCoinciden = true;
        inputContrasena2.classList.add("inputValido");
        inputContrasena2.classList.remove("inputInvalido");
    }
}
    


if (window.location.pathname.endsWith('index.html'))
{
    formulario.addEventListener('submit', function(){
    const alerta = document.getElementById('alerta');
    alerta.classList.remove("hidden")
    event.preventDefault();
    verificarNombre(); verificarEmail(); verificarContrasena(); verificarContrasena2();
    if (!nombreValido || !emailValido || !contrasenaValida || !contrasenasCoinciden)
    {
        alerta.classList.add("alert-danger");
        alerta.classList.remove("alert-success");
        alerta.innerHTML = "¡Ha habido un error!";
    }
    else
    {
        alerta.classList.add("alert-success");
        alerta.classList.remove("alert-danger");
        alerta.innerHTML = "¡Te has registrado correctamente!";
        if (localStorage.getItem("usuarios") == null)
        {
            var usuarios = [];
        }
        let usuario = {
            Nombre:inputNombre.value,
            Email:inputEmail.value,
            Contrasena:inputContrasena.value
        }
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
    }
    
})
}

const cambiarModo = () =>{
    const body = document.getElementById('body');
    const titulo = document.getElementById('titulo');
    const icon = document.getElementById('icon');
    const submit = document.getElementById('submit');
    const columna = document.getElementById('columna');
    const verUsuarios = document.getElementById('verUsuarios');
    titulo.classList.toggle('label-oscuro');
    submit.classList.toggle('submit-oscuro');
    icon.classList.toggle('bi-brightness-high-fill');
    icon.classList.toggle('bi-moon-fill');
    icon.classList.toggle('color-blanco');
    body.classList.toggle('body-oscuro');
    columna.classList.toggle('columna-oscuro');
    verUsuarios.classList.toggle('color-blanco')
    document.querySelectorAll("label").forEach(elemento => {
        elemento.classList.toggle("label-oscuro");
    });
    document.querySelectorAll("aviso").forEach(elemento => {
        elemento.classList.toggle("aviso-oscuro");
    });

}


if (window.location.pathname.endsWith('verUsuarios.html'))
{
    const lista = localStorage.getItem("usuarios");
    lista.forEach(element=>{
        console.log(element.Nombre);
    }
    )
}