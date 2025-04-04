
const inputContrasena = document.getElementById('contrasena');
const inputContrasena2 = document.getElementById('contrasena2');
const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
let contrasena, contrasena2;
let nombreValido = false, emailValido = false, contrasenaValida = false, contrasenasCoinciden = false;
var objetos;
const verUsuarios = () =>{
    const listaUsuarios = document.getElementById('listaUsuarios');
    objetos = JSON.parse(localStorage.getItem("usuarios"));
    if (objetos != null)
    {
        objetos.forEach(element => {
                let usuarioDiv = document.createElement("div");
                usuarioDiv.classList.add("usuario");
            
                let nombreP = document.createElement("p");
                nombreP.innerText = `Nombre: ${element.Nombre}`;
            
                let emailP = document.createElement("p");
                emailP.innerText = `Email: ${element.Email}`;
            
                let contrasenaP = document.createElement("p");
                contrasenaP.innerText = `Contraseña: ${element.Contrasena}`;
            
                usuarioDiv.appendChild(nombreP);
                usuarioDiv.appendChild(emailP);
                usuarioDiv.appendChild(contrasenaP);
            
                listaUsuarios.appendChild(usuarioDiv);
        });
    }
    else
    {
        listaUsuarios.textContent = "";
    }
}
const borrarDatos = () =>{
    localStorage.clear();
    verUsuarios();
}
verUsuarios();

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
    if (contrasena.length < 8 || !contieneNumero(contrasena) || !contieneLetra(contrasena) || (contrasena.length == 0 && contrasena2.length == 0))
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
    document.getElementById('verContrasena').classList.add("verContrasenaAcomodado");
}

const verificarContrasena2 = () =>
{
    contrasena = inputContrasena.value;
    contrasena2 = inputContrasena2.value;
    const feedbackElement = document.getElementById('respuestaContrasena2');
    if ((contrasena != null && contrasena2 != null) && contrasena != contrasena2 || (contrasena.length == 0 && contrasena2.length == 0))
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
    document.getElementById('verContrasena2').classList.add("verContrasenaAcomodado");
}
    


if (window.location.pathname.endsWith('index.html'))
{
    formulario.addEventListener('submit', function(event){
    const alerta = document.getElementById('alerta');
    alerta.classList.remove("hidden")
    verificarNombre(); verificarEmail(); verificarContrasena(); verificarContrasena2();
    event.preventDefault();
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
        if (objetos == null) 
        {
            objetos = [];
        }
        let usuario = {
            Nombre:inputNombre.value,
            Email:inputEmail.value,
            Contrasena:inputContrasena.value
        }
        objetos.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(objetos));
        verUsuarios();
    }
    
})

}

const cambiarModo = () =>{
    const body = document.getElementById('body');
    const titulo = document.getElementById('titulo');
    const icon = document.getElementById('icon');
    const submit = document.getElementById('submit');
    const verUsuarios = document.getElementById('verUsuarios');
    const columna = document.getElementById('columna');
    titulo.classList.toggle('label-oscuro');
    submit.classList.toggle('submit-oscuro');
    icon.classList.toggle('bi-brightness-high-fill');
    icon.classList.toggle('bi-moon-fill');
    icon.classList.toggle('color-blanco');
    body.classList.toggle('body-oscuro');
    columna.classList.toggle("columna-oscuro");
    verUsuarios.classList.toggle('color-blanco');
    let items = document.getElementsByClassName("label");
    for (let i=0; i < items.length; i++) {
        items[i].classList.toggle("label-oscuro");
    }
    document.querySelectorAll("aviso").forEach(elemento => {
        elemento.classList.toggle("aviso-oscuro");
    });

}


const verContrasena = (id, numeroIcono) =>{
    id = document.getElementById(id);
    numeroIcono = document.getElementById(numeroIcono);
    console.log(numeroIcono);
    if (id.type === "password")
    {
        id.type ="text";
        numeroIcono.classList.add("bi-eye-slash");
        numeroIcono.classList.remove("bi-eye");
    }
    else
    {
        id.type= "password";
        numeroIcono.classList.remove("bi-eye-slash");
        numeroIcono.classList.add("bi-eye");
    }
}