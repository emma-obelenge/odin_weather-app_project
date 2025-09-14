import "./styles/about.css";

export default function loadAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.className = "about-section";
  section.innerHTML = `
    <h2>Our Story</h2>
    <p>
      Welcome to NooWeather, where we believe that staying informed about the weather should be simple, intuitive, and beautiful. Our journey began with a simple idea: to create a weather app that cuts through the noise and delivers accurate, essential information in a way that's easy to understand at a glance.
    </p>
    <p>
      We were tired of cluttered interfaces and confusing data. We wanted to build something different—a tool that empowers you to plan your day, your trip, or your life with confidence, no matter what the sky has in store.
    </p>

    <br />
    <h2>Our Mission</h2>
    <p>
      Our mission is to provide you with the most reliable and user-friendly weather forecasts available. We are committed to:
    </p>
    <ul>
      <li>Accuracy: Leveraging the latest technology and data sources to ensure you get the most precise weather information.</li>
      <li>Simplicity: Designing an interface that is clean, intuitive, and easy to navigate.</li>
      <li>Accessibility: Making our app available to everyone, everywhere, on any device.</li>
      <li>Innovation: Continuously improving and adding features that enhance your experience.</li>
    </ul>

    <br />
    <h2>What We Offer</h2>
    <p>
      NooWeather  provides more than just the daily temperature. We offer:

      <ul>
        <li>Real-time weather updates</li>
        <li>Hourly and weekly forecasts</li>
        <li>Detailed information</li>
        <li> Beautiful user experience</li>
      </ul>
    </p>
    <br />
    <p>
      We're constantly working to improve our site and add new features to make your life a little easier. Thank you for choosing NooWeather. We're excited to have you on this journey with us.
    </p>
  `;

  content.appendChild(section);
}
