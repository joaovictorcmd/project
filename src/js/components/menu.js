const menuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full"); // Mostra o menu
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full"); // Oculta o menu
});
