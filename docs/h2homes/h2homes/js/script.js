/* =========================================================
   [NOMBRE DEL NEGOCIO] — script.js
   JavaScript mínimo: solo interacciones visuales necesarias
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Menú hamburguesa (móvil/tablet) --- */
  var menuToggle = document.getElementById('menuToggle');
  var navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Cierra el menú al pulsar un enlace (mejora la navegación en móvil) */
    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Cierra el menú si se hace clic fuera de él */
    document.addEventListener('click', function (event) {
      var clickDentro = navMenu.contains(event.target) || menuToggle.contains(event.target);
      if (!clickDentro) {
        navMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Año actual en el footer --- */
  var anioSpan = document.getElementById('anio');
  if (anioSpan) {
    anioSpan.textContent = new Date().getFullYear();
  }

});
