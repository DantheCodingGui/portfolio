function toggleResponsiveNavBar() {
  var navBar = document.getElementById("nav_container");
  if (navBar.classList.contains("responsive")) {
    navBar.classList.remove("responsive");
    document.getElementById("responsive_menu").innerHTML = "&#9776;";
  }
  else {
    navBar.className = "responsive";
    document.getElementById("header").style.height = "auto";
    document.getElementById("responsive_menu").innerHTML = "&#x2715";
  }
}
