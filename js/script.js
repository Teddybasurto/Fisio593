//se habilita el menu responsive 
const navbar = document.querySelector("#navbar");
const hamburger = document.querySelector("#hamburguer");

hamburger.addEventListener("click", () => {
    // Verifica si la clase "responsive" ya está aplicada
    if (navbar.classList.contains("responsive")) {
        // Si está aplicada, la elimina
        navbar.classList.remove("responsive");
    } else {
        // Si no está aplicada, la agrega
        navbar.classList.add("responsive");
    }
});