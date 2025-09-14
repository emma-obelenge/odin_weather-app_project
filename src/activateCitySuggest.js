export default function suggestCity() {
  console.log("Setting up city suggestion feature...");
  document
    .querySelector(".search-bar")
    .addEventListener("keypress", suggestCity);
}
