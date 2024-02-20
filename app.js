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
//add spinner event loader 

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader")
  })
})

//darkmode 

// const colorChange = document.getElementById('input-color-change');

// colorChange.addEventListener('click', checkChange)

// function checkChange () {
//   if (colorChange.checked){
//     darkModeEnabled()
//   } else {
//     darkModeDisabled()
//   }
// }

// function darkModeEnabled () {
//   document.body.classList.add('dark-mode')
// }

// function darkModeDisabled () {
//   document.body.classList.remove('dark-mode')

// }