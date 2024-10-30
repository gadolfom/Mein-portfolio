// Mostrar mensaje de bienvenida en la consola
console.log("Bienvenido a mi portafolio!");

// Añadir clase "show" para las secciones al hacer scroll
const sections = document.querySelectorAll("section");

function showSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showSections);
showSections();  // Para mostrar secciones que están en pantalla al cargar

// Interacción con el formulario de contacto
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Gracias por tu mensaje. Me pondré en contacto contigo pronto.");
});
