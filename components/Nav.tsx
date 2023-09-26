window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("bg-gray-900", window.scrollY > 0);
  });
  
  document.getElementById("mobile-menu-button").addEventListener("click", function () {
    document.getElementById("desktop-menu").classList.toggle("hidden");
  });
  