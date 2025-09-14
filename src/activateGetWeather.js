export default function activateGetWeather() {
  document.querySelector(".search-btn").addEventListener("click", getWeather);

  function getWeather() {
    const city = document.querySelector(".search-bar").value;
    const apiKey = "AX9GASMGXMAKCXCR8MCK7Y65D";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;
    const errorMessage = document.querySelector(".error-message");
    const loadingMessage = document.querySelector(".loading-message");
    const temperature = document.querySelector(".temperature");
    const description = document.querySelector(".description");
    const humidity = document.querySelector(".humidity");
    const windSpeed = document.querySelector(".wind-speed");

    if (!city) {
      document.querySelector(".error-message").textContent =
        "Please enter a city name.";
      return;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.currentConditions);
        errorMessage.textContent = "";
        loadingMessage.textContent = "";
        temperature.textContent = `Temperature: ${parseInt(
          (data.currentConditions.temp - 32) * (5 / 9)
        )}°C`;
        description.textContent = `Description: ${data.currentConditions.conditions}`;
        humidity.textContent = `Humidity: ${data.currentConditions.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.currentConditions.windspeed} km/h`;
      })
      .catch((error) => {
        errorMessage.textContent = "City not found. Please try again.";
        loadingMessage.textContent = "";
        temperature.textContent = "";
        description.textContent = "";
        humidity.textContent = "";
        windSpeed.textContent = "";
      });
    loadingMessage.textContent = "Loading...";
    errorMessage.textContent = "";
    temperature.textContent = "";
    description.textContent = "";
    humidity.textContent = "";
    windSpeed.textContent = "";
  }
}
