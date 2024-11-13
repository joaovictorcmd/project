document.addEventListener("DOMContentLoaded", async () => {
  try {
    const headerResponse = await fetch("/src/components/header.html");
    const headerData = await headerResponse.text();
    document.querySelector(".header").innerHTML = headerData;
    initMenu();

    const footerResponse = await fetch("/src/components/footer.html");
    const footerData = await footerResponse.text();
    document.querySelector(".footer").innerHTML = footerData;

  } catch (error) {
    console.error("Error:", error);
  }
});

function initMenu() {
  const menuButton = document.querySelector("#menuButton");
  const mobileMenu = document.querySelector("#mobileMenu");
  const closeMenuButton = document.querySelector("#closeMenuButton");

  if (menuButton && mobileMenu && closeMenuButton) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
    });
    closeMenuButton.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  }
}


