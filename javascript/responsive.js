function toggleResponsiveNavBar() {
  var navBar = document.getElementById("nav_container");
  if (navBar.className == "navigation_container") {
    navBar.className += " responsive";
  }
  else {
    navBar.className = "navigation_container";
  }
}
