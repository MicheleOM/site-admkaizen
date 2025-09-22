document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navMenuLinks = document.querySelectorAll(".nav-links a");

  // Função para fechar o menu
  const closeMenu = () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  };

  // Abrir/fechar o menu ao clicar no botão hb
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Fechar o menu ao clicar em um dos links
  navMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
