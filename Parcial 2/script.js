// Función para calcular el hash SHA-256 de una cadena
async function sha256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentloaded");
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario
            handleLoginFormSubmit();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío del formulario
            handleRegisterFormSubmit();
        });
    }

    if (!loginForm && !registerForm) {
        window.location.href = 'login.html';
    }
});

async function handleLoginFormSubmit() {
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('pass').value;
    // Obtener la información del usuario de localStorage
    const storedUser = JSON.parse(localStorage.getItem(username));
    // Verificar si el usuario existe y la contraseña coincide
    if (storedUser && await verifyPassword(password, storedUser.passwordHash)) {
        currentUser = { username: username, name: storedUser.name };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = 'perfil.html';
    } else {
        alert('Credenciales incorrectas');
    }
}

async function handleRegisterFormSubmit() {
    const username = document.getElementById('usuario').value;
    const name = document.getElementById('nombre').value;
    const password = document.getElementById('pass').value;
    console.log(username)
    // Calcular el hash de la contraseña
    const passwordHash = await sha256(password);
    console.log(passwordHash)
    // Guardar la información del usuario en localStorage
    const newUser = { username: username, name: name, passwordHash: passwordHash };
    localStorage.setItem(username, JSON.stringify(newUser));
    window.location.href = 'login.html';
}

// Función para verificar la contraseña
async function verifyPassword(password, storedHash) {
    const inputHash = await sha256(password);
    return inputHash === storedHash;
}

// Verificar si el elemento 'logout' existe antes de agregar el event listener
const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
}

function displayProfile() {
    const usuarioElement = document.getElementById('usuario');
    const nombreElement = document.getElementById('nombre');

    if (usuarioElement && nombreElement) {
        usuarioElement.textContent = currentUser.username;
        nombreElement.textContent = currentUser.name;
    }
}
