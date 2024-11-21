document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-box').classList.add('active'); // Muestra el formulario de inicio de sesión al cargar
});

function toggleForms() {
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');

    if (loginBox.classList.contains('active')) {
        loginBox.classList.remove('active');
        registerBox.classList.add('active');
    } else {
        registerBox.classList.remove('active');
        loginBox.classList.add('active');
    }
}

// Guardar datos de registro en localStorage
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const user = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        gender: document.getElementById('gender').value
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Usuario registrado exitosamente!');
    document.getElementById('registration-form').reset();
});
