const input = document.getElementById("city");
const submitBtn = document.getElementById("submit");

const apiKey = "6c18d54403a8e7e63262556adc33b20c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".invalid").style.display = "block";
    document.querySelector(".result_container").style.display = "none";
    return;
  } else {
    const data = await response.json();
    document.querySelector(".city").innerText = "City: " + data.name;
    document.querySelector(".country").innerText =
      "Country: " + data.sys.country;
    document.querySelector(".temp").innerText =
      "Temperature: " + Math.round(data.main.temp) + "°C";
    document.querySelector(".weather").innerText =
      "Condition: " + data.weather[0].main;
    document.querySelector(".humid").innerText =
      "Humidity: " + data.main.humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed: " + data.wind.speed + " m/s";

    document.querySelector(".result_container").style.display = "flex";
    document.querySelector(".invalid").style.display = "none";
  }
}

submitBtn.addEventListener("click", () => {
  getWeather(input.value);
});
