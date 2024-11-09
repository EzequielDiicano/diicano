# Proyecto DïCano

Este proyecto presenta un sitio web simple para una tienda de remeras en construcción, utilizando HTML, CSS y JavaScript. A continuación se explica cada sección de los archivos.

## indexfuturo.html
Este archivo define la estructura del sitio:

- **Header**: Incluye el nombre de la tienda, una barra de búsqueda y un icono de usuario.
  - **Icono de usuario**: Al hacer clic, activa un menú desplegable con opciones (perfil, carrito, cerrar sesión, contacto).
- **Sección principal**: Contiene tres artículos de ejemplo (remeras) con una imagen y una descripción.
- **Footer**: Incluye información de contacto e Instagram, además de una mención a los dueños.

## css/styles_index.css
Este archivo contiene los estilos de la página:

- **Header y barra de búsqueda**: Estilos para el header y la barra de búsqueda en la parte superior.
- **Menú desplegable**: Diseñado para mostrarse al hacer clic en el icono de usuario, con enlaces a perfil, carrito, cerrar sesión y contacto.
- **Sección de artículos**: Estilos para los artículos de ejemplo de remeras, con efecto al pasar el cursor.
- **Footer**: Estilos para la sección de contacto y redes sociales al final de la página.
- **Animación de lluvia**: Se crean elementos con animación que simulan gotas de lluvia en el fondo.

## javascript/interaccion_index.js
Este archivo maneja las interacciones en la página:

- **toggleMenu()**: Función para mostrar y ocultar el menú desplegable al hacer clic en el icono de usuario.
- **Animación de lluvia**: Crea elementos "drop" (gotas) que caen desde la parte superior para generar un fondo animado de lluvia.

## Personalización

- **Colores y fuentes**: Puedes ajustar colores y fuentes en `styles_index.css` en las secciones `background-color`, `color`, y `font-family`.
- **Cantidad de gotas de lluvia**: En `interaccion_index.js`, ajusta el número de gotas de lluvia modificando el valor de `i < 100`.
- **Enlaces y textos del menú**: En `indexfuturo.html`, actualiza los enlaces del menú y el contenido de cada artículo según los productos de tu tienda.

Este proyecto ofrece una base sencilla y personalizable para una tienda en línea en construcción.



project-folder/
│
├── indexfuturo.html
├── css/
│   └── styles_index.css
└── javascript/
    └