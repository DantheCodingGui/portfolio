function toggleResponsiveNavBar() {
  var navBar = document.getElementById("nav_container");
  if (navBar.classList.contains("responsive")) {
    navBar.classList.remove("responsive");
  }
  else {
    navBar.className = "responsive";
    document.getElementById("header").style.height = "auto";
  }
}
