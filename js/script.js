document.addEventListener("DOMContentLoaded", function () {
    const menuBurger = document.querySelector(".menu-burger");
    const navContainer = document.querySelector(".nav-container");
  
    menuBurger.addEventListener("click", function () {
      navContainer.classList.toggle("active");
    });
});
  