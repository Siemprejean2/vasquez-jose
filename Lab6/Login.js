// Datos de usuario simulados
const userData = {
    username: "usuario",
    password: "1234",
    name: "Usuario Ejemplo",
    description: "¡Hola! Soy un usuario de ejemplo.",
    profileImage: "gaby.jpg" // URL de la imagen de perfil
};

// Función para verificar el inicio de sesión
function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === userData.username && password === userData.password) {
        // Inicio de sesión exitoso
        localStorage.setItem("loggedIn", true);
        window.location.href = "Prof.html";
    } else {
        // Credenciales incorrectas
        document.getElementById("errorMsg").innerText = "Nombre de usuario o contraseña incorrectos.";
    }
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "Login.html";
}

// Función para verificar si el usuario ya ha iniciado sesión
function checkLoggedIn() {
    if (localStorage.getItem("loggedIn")) {
        // Usuario ya ha iniciado sesión, redirigir a la vista de perfil
        window.location.href = "Prof.html";
    }
}

// Verificar si el usuario ya ha iniciado sesión al cargar la página de inicio de sesión
checkLoggedIn();

// Agregar evento al formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", login);
