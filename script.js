// Mensaje en consola al cargar la página
console.log("Bienvenido a mi portafolio!");

// Evento para el formulario de contacto (solo muestra una alerta por ahora)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Gracias por tu mensaje. Me pondré en contacto contigo pronto.");
});
