// Pequeno comportamiento para simular el envio del formulario.
const contactForm = document.querySelector(".contact-card");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Gracias por contactarnos. Pronto responderemos tu mensaje.");
    contactForm.reset();
});
