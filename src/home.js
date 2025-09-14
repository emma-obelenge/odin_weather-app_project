import "./styles/home.css";
import backgroundImage from "./img/weather.jpg";
import activateGetWeather from "./activateGetWeather";
import activateCitySuggest from "./activateCitySuggest";

export default function loadHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const section = document.createElement("section");
  const imageContainer = document.createElement("div");
  const img = document.createElement("img");

  section.className = "home-section";
  imageContainer.className = "image-container";
  img.src = backgroundImage;
  img.alt = "Weather Background";

  imageContainer.appendChild(img);

  section.innerHTML = `
    <h3>Welcome to NooWeather</h3>
    <h3>Your Ultimate Weather Companion</h3>
    
    <div class="search-container">
    <input type="text" class="search-bar" placeholder="Enter city name" />
    <button class="search-btn">Search</button>
    </div>
    <div class="error-message"></div>
    <div class="loading-message"></div>
    <div class="weather-info">
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind-speed"></p>
    </div>
  `;

  content.appendChild(section);
  document.querySelector("body").appendChild(imageContainer);
  activateCitySuggest();
  activateGetWeather();
}
