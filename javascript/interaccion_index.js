// Función para mostrar/ocultar el menú desplegable
function toggleMenu() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('active');
}

// Crear gotas de lluvia
const rainContainer = document.querySelector('.rain');
for (let i = 0; i < 100; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    drop.style.opacity = Math.random();
    rainContainer.appendChild(drop);
}

// Añadir scroll al footer cuando se hace clic en "Contáctanos"
document.querySelector('#dropdownMenu a[href="mailto:contacto@dicano.com"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});


document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Añadido a favoritos');
    });
});

document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Añadido al carrito');
    });
});