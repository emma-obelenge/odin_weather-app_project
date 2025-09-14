import "./styles/home.css";

import loadHome from "./home";
import loadAbout from "./about";
import loadContact from "./contact";

// loadHome();

function init() {
  document.querySelector(".logo").addEventListener("click", loadHome);
  document.querySelector(".home-btn").addEventListener("click", loadHome);
  document.querySelector(".about-btn").addEventListener("click", loadAbout);
  document.querySelector(".contact-btn").addEventListener("click", loadContact);

  loadHome(); // Load home page by default
}

window.addEventListener("DOMContentLoaded", init);
