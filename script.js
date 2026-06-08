// Buscamos los elementos de la página usando sus ids.
const textoCambiante = document.getElementById("texto-cambiante");
const botonCambiarTexto = document.getElementById("boton-cambiar-texto");

// Cuando el usuario hace clic, cambiamos el contenido del texto.
botonCambiarTexto.addEventListener("click", function () {
  textoCambiante.textContent = "Estoy aprendiendo a dirigir Codex como un profesional.";
});
