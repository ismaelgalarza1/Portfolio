// js for link active display for the user.
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});
