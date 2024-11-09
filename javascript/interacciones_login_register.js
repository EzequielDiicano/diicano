// Interacción con el puntero para el fondo
document.body.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    const x = (e.clientX / window.innerWidth) * 20 - 10;
    const y = (e.clientY / window.innerHeight) * 20 - 10;
    background.style.transform = `translate(${x}px, ${y}px)`;
});

// Cambiar entre login y registro
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");
    const switchText = document.querySelector(".switch");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        formTitle.textContent = "Login";
        switchText.textContent = "¿No tienes una cuenta? Regístrate";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.textContent = "Register";
        switchText.textContent = "¿Ya tienes una cuenta? Inicia sesión";
    }
}

// Validación de credenciales y redirección
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    // Obtener valores del formulario
    const emailInput = event.target.querySelector('input[type="email"]').value;
    const passwordInput = event.target.querySelector('input[type="password"]').value;
    
    // Validar credenciales
    if (emailInput === "pruebajaja123@gmail.com" && passwordInput === "Prueba123") {
        window.location.href = "index.html"; // Redirigir a index.html
    } else {
        alert("Correo o contraseña incorrectos");
    }
});