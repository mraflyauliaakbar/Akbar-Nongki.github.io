//toggle class active

const navbarNaav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNaav.classList.toggle("active");
};

// Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNaav.contains(e.target)) {
    navbarNaav.classList.remove("active");
  }
});
