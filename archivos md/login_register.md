# Login y Register - Interfaz con Efecto de Fondo Interactivo

Este proyecto consiste en una página web de login y registro con un diseño moderno. La página incluye un efecto de fondo interactivo que responde al movimiento del puntero y permite al usuario cambiar entre los formularios de login y registro.

## Archivos

- `login_register.html`: Contiene la estructura HTML principal de la página.
- `css/styles_login_register.css`: Contiene todos los estilos de la página, como el diseño del formulario y el fondo interactivo.
- `javascript/interacciones_login_register.js`: Define el comportamiento interactivo del fondo y la función que permite alternar entre los formularios de login y registro.

## Explicación del Código

### `login_register.html`
Este archivo define la estructura de la página:

- **Título**: Encima del formulario hay un título "DïCano".
- **Contenedor principal (`main-container`)**: Contiene el título y el formulario de login/register.
- **Formulario (`container`)**: Contiene dos formularios (`login-form` y `register-form`) para iniciar sesión o registrarse. Solo uno es visible a la vez.
- **JavaScript**: El archivo `interacciones_login_register.js` se incluye al final para manejar la animación del fondo y el cambio de formularios.

### `css/styles_login_register.css`

- **body, html**: Configura la página para ocupar toda la pantalla y centra el contenido.
- **`.background`**: Aplica un fondo interactivo usando un gradiente radial que se mueve según el puntero.
- **`.main-container`**: Agrupa el título y el contenedor del formulario para centrar todo.
- **`.container`**: Define el área donde están los formularios. Usa un fondo blanco translúcido con desenfoque.
- **`.switch`**: Controla el texto que permite alternar entre los formularios de login y registro.

### `javascript/interacciones_login_register.js`

- **Fondo interactivo**: Agrega un efecto de movimiento al fondo en función de la posición del puntero.
- **Función `toggleForms`**: Alterna entre los formularios de login y registro. Cambia el contenido y el estado del botón "switch".

## Personalización

1. **Color de Fondo**: Cambia el valor en `background-color` de `body, html` en `styles_login_register.css`.
2. **Tamaño del Formulario**: Ajusta `width` y `padding` en `.container` en `styles_login_register.css`.
3. **Velocidad del Fondo**: Modifica `20` y `10` en `interacciones_login_register.js` para ajustar la sensibilidad del fondo al movimiento del puntero.

## Requisitos Previos
No se necesitan librerías externas. Puedes abrir `login_register.html` directamente en un navegador para visualizar la página.