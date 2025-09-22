document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    // Adiciona/remove a classe 'active' para mostrar/esconder o menu
    navLinks.classList.toggle("active");
    // Adiciona/remove a classe 'active' para animar o ícone do hambúrguer para 'X'
    menuToggle.classList.toggle("active");
  });
});
