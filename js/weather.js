class WeatherApp {
  constructor() {
    this.API_KEY = "9a1db326f9d9453d146ac84958153766";
  }

  onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
      });
  }
  onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  getCurrentWeather() {
    navigator.geolocation.getCurrentPosition(
      this.onGeoSuccess.bind(this),
      this.onGeoError.bind(this)
    );
  }
}

const weatherApp = new WeatherApp();
weatherApp.getCurrentWeather();
