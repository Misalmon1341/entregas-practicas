document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggle-theme");
    const body = document.body;
  
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "light") {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    }
    button.addEventListener("click", () => {
      if (body.classList.contains("light-theme")) {
        // Cambiar a oscuro
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        // Cambiar a claro
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
      }
    });
  });
/*Promt light-dark mode
Contexto
Estoy desarrollando una página web con HTML, CSS y JavaScript puros. Ya tengo una estructura con clases y estilos definidos, incluyendo estilos en modo oscuro por defecto. Ahora quiero incorporar un sistema de cambio de tema (light/dark) mediante un botón fijo en la esquina superior de la pantalla. El cambio solo debe afectar al color de fondo y del texto, y debe guardar la preferencia del usuario en el navegador (localStorage) para que se mantenga al actualizar o regresar a la página.

Rol
Eres un experto en desarrollo web con más de 20 años de experiencia. Has trabajado como desarrollador líder en múltiples proyectos profesionales donde se implementan prácticas modernas de UI/UX. Tu misión es ofrecer una solución clara, moderna, comentada paso a paso, y basada únicamente en HTML, CSS y JavaScript puro, sin frameworks.

Acción
Añade un botón fijo en la esquina superior derecha para alternar entre modo claro y oscuro.

Crea clases CSS o variables para definir el tema light (colores de fondo y texto).

Aplica JavaScript para alternar entre ambos temas.

Usa localStorage para guardar la preferencia del usuario.

Al cargar la página, verifica si hay una preferencia guardada y aplica el tema correspondiente.

Agrega comentarios en el código para explicar cada sección.

Asegúrate de que el cambio de tema solo afecte fondo y texto (no contenedores, botones ni otros estilos).

El código debe ser fácil de adaptar e integrarse al archivo CSS ya existente.

Formato
El contenido generado debe estar dividido en tres partes:

Fragmento HTML del botón

Código CSS necesario para definir los dos temas

Código JavaScript comentado para aplicar la lógica del cambio de tema y el guardado en localStorage
Todo debe estar comentado paso a paso para facilitar su comprensión.

Público objetivo
Desarrolladores web principiantes o intermedios que ya cuentan con una página funcional y desean añadir una funcionalidad práctica y moderna como el cambio de tema. El contenido estará en español, con código fácilmente integrable y adaptable.
*/
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  });
  
  /*
  Contexto:
Estoy desarrollando una página web moderna que debe incluir un menú de navegación (navbar) adaptable y funcional. El objetivo es crear un patrón de navegación que funcione perfectamente en escritorios y dispositivos móviles, con comportamiento responsive, usando HTML, CSS y JavaScript puro (sin frameworks). Este menú debe ser limpio, fácil de usar, minimalista, accesible, y con un botón hamburguesa que permita mostrar/ocultar los enlaces en pantallas pequeñas. Deseo seguir buenas prácticas de usabilidad y accesibilidad, como roles adecuados, etiquetas aria, y semántica correcta.

Rol:
Eres un experto en arquitectura web, accesibilidad y diseño de patrones UI/UX con más de 20 años de experiencia construyendo interfaces responsive, intuitivas y escalables. Estás especializado en patrones de navegación reutilizables, optimizados para rendimiento, accesibilidad (a11y) y experiencia de usuario. Conoces profundamente HTML semántico, CSS moderno y técnicas de JavaScript limpio, sin dependencias externas.

Acción (instrucciones para el modelo):
Diseña un componente navbar completo, estructurado en HTML, con una lista de navegación principal (<nav>).

Usa solo HTML, CSS y JavaScript puro. No uses frameworks ni librerías externas.

El menú debe ser totalmente responsive, con un botón hamburguesa visible solo en resoluciones menores a 768px.

Asegúrate de que:

El menú sea accesible (aria-label, roles apropiados).

Se utilicen clases claras y reutilizables.

El código esté comentado paso a paso para facilitar su comprensión y personalización.

Añade estilos para modo claro/oscuro si es posible.

Asegura que el diseño sea limpio y funcional, con un enfoque minimalista.

Incluye una explicación corta (comentada en el código o al inicio del documento) sobre cómo integrar el navbar en cualquier proyecto.

Formato:
Código HTML + CSS + JavaScript, organizado en bloques claros y comentado paso por paso, en estilo plano o markdown. El contenido debe ser fácilmente copiable y entendible para desarrolladores de nivel intermedio. 

PASO 1: Agrega el botón de hamburguesa en el <header> justo antes o después del <nav>
PASO 2: Añade el CSS para ocultar el menú en móviles y mostrarlo con JS
PASO 3: Agrega el JavaScript en main.js
*/