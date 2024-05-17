//VARIAVEIS E SELEÇÃO DE ELEMENTOS
const apiKey = "8312f893cc41f9e22ce28788d1e706cc";
const apiCountryURL = "https://flagsapi.com";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const countryElement = document.querySelector('#country');
const weatherIconElement = document.querySelector('#weather-icon');
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector('#description');

const tempMax = document.querySelector('#temp-max span');
const tempMin = document.querySelector('#temp-min span');
const sensacao = document.querySelector('#sensacao span');
const humidity = document.querySelector('#humidity span');
const windy = document.querySelector('#windy-speed span');

const horaTemperatura = document.querySelector('#time-hour');

const temperaturaHour = document.querySelector('#temp-hour span');
const temperaturaHour2 = document.querySelector('#temp-hour2 span');
const temperaturaHour3 = document.querySelector('#temp-hour3 span');
const temperaturaHour4 = document.querySelector('#temp-hour4 span');
const temperaturaHour5 = document.querySelector('#temp-hour5 span');
const temperaturaHour6 = document.querySelector('#temp-hour6 span');
const temperaturaHour7 = document.querySelector('#temp-hour7 span');

const tempHourHumidity = document.querySelector('#temp-hour-humidity span');
const tempHourHumidity2 = document.querySelector('#temp-hour-humidity2 span');
const tempHourHumidity3 = document.querySelector('#temp-hour-humidity3 span');
const tempHourHumidity4 = document.querySelector('#temp-hour-humidity4 span');
const tempHourHumidity5 = document.querySelector('#temp-hour-humidity5 span');
const tempHourHumidity6 = document.querySelector('#temp-hour-humidity6 span');
const tempHourHumidity7 = document.querySelector('#temp-hour-humidity7 span');

const tempHourIcon = document.querySelector('#temp-hour-icon');
const tempHourIcon2 = document.querySelector('#temp-hour-icon2');
const tempHourIcon3 = document.querySelector('#temp-hour-icon3');
const tempHourIcon4 = document.querySelector('#temp-hour-icon4');
const tempHourIcon5 = document.querySelector('#temp-hour-icon5');
const tempHourIcon6 = document.querySelector('#temp-hour-icon6');
const tempHourIcon7 = document.querySelector('#temp-hour-icon7');

const tempHourDescription = document.querySelector('#temp-hour-description');
const tempHourDescription2 = document.querySelector('#temp-hour-description2');
const tempHourDescription3 = document.querySelector('#temp-hour-description3');
const tempHourDescription4 = document.querySelector('#temp-hour-description4');
const tempHourDescription5 = document.querySelector('#temp-hour-description5');
const tempHourDescription6 = document.querySelector('#temp-hour-description6');
const tempHourDescription7 = document.querySelector('#temp-hour-description7');

const timeHour = document.querySelector('#time-hour');
const timeHour2 = document.querySelector('#time-hour2');
const timeHour3 = document.querySelector('#time-hour3');
const timeHour4 = document.querySelector('#time-hour4');
const timeHour5 = document.querySelector('#time-hour5');
const timeHour6 = document.querySelector('#time-hour6');
const timeHour7 = document.querySelector('#time-hour7');

//FUNÇÕES

//Pesquisando oa dados atuais
const getWeatherData = async (city) => {
   const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

   const res = await fetch(apiWeatherURL);
   const data = await res.json();

   return data;
};

const showWeatherData = async (city) => {
   const data = await getWeatherData(city);

   cityElement.innerText = data.name;
   tempElement.innerText = parseInt(data.main.temp);
   descElement.innerText = data.weather[0].description;
   weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
   countryElement.setAttribute("src", `${apiCountryURL}/${data.sys.country}/flat/64.png`);

   tempMax.innerText = parseInt(data.main.temp_max);
   tempMin.innerText = parseInt(data.main.temp_min);
   sensacao.innerText = parseInt(data.main.feels_like);
   humidity.innerText = `${data.main.humidity} %`;
   windy.innerText = `${parseInt(data.wind.speed)} Km/h`;

   //weatherContainer.classList.remove("hide");
};

//Pesquisando os dados das proximas 3 horas para os proximos 5 dias
const getForecastData = async (city) => {

   const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

   const res = await fetch(apiForecastUrl);
   const data = await res.json();

   return data;
}

const showForecastData = async (city) => {
   const data = await getForecastData(city);


   temperaturaHour.innerText = parseInt(`${data.list[0].main.temp}&deg; C`);
   temperaturaHour2.innerText = parseInt(data.list[1].main.temp);
   temperaturaHour3.innerText = parseInt(data.list[2].main.temp);
   temperaturaHour4.innerText = parseInt(data.list[3].main.temp);
   temperaturaHour5.innerText = parseInt(data.list[4].main.temp);
   temperaturaHour6.innerText = parseInt(data.list[5].main.temp);
   temperaturaHour7.innerText = parseInt(data.list[6].main.temp);

   tempHourHumidity.innerText = `${data.list[0].main.humidity} %`;
   tempHourHumidity2.innerText = `${data.list[1].main.humidity} %`;
   tempHourHumidity3.innerText = `${data.list[2].main.humidity} %`;
   tempHourHumidity4.innerText = `${data.list[3].main.humidity} %`;
   tempHourHumidity5.innerText = `${data.list[4].main.humidity} %`;
   tempHourHumidity6.innerText = `${data.list[5].main.humidity} %`;
   tempHourHumidity7.innerText = `${data.list[6].main.humidity} %`;

   tempHourIcon.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`);
   tempHourIcon2.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);
   tempHourIcon3.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`);
   tempHourIcon4.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`);
   tempHourIcon5.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`);
   tempHourIcon6.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}.png`);
   tempHourIcon7.setAttribute("src", `http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}.png`);

   tempHourDescription.innerText = data.list[0].weather[0].description;
   tempHourDescription2.innerText = data.list[1].weather[0].description;
   tempHourDescription3.innerText = data.list[2].weather[0].description;
   tempHourDescription4.innerText = data.list[3].weather[0].description;
   tempHourDescription5.innerText = data.list[4].weather[0].description;
   tempHourDescription6.innerText = data.list[5].weather[0].description;
   tempHourDescription7.innerText = data.list[6].weather[0].description;

   const horaformatada = data.list[0].dt_txt.slice(11, 16);
   const horaformatada2 = data.list[1].dt_txt.slice(11, 16);
   const horaformatada3 = data.list[2].dt_txt.slice(11, 16);
   const horaformatada4 = data.list[3].dt_txt.slice(11, 16);
   const horaformatada5 = data.list[4].dt_txt.slice(11, 16);
   const horaformatada6 = data.list[5].dt_txt.slice(11, 16);
   const horaformatada7 = data.list[6].dt_txt.slice(11, 16);

   timeHour.innerText = horaformatada;
   timeHour2.innerText = horaformatada2;
   timeHour3.innerText = horaformatada3;
   timeHour4.innerText = horaformatada4;
   timeHour5.innerText = horaformatada5;
   timeHour6.innerText = horaformatada6;
   timeHour7.innerText = horaformatada7;

};

//EVENTOS

searchBtn.addEventListener('click', (e) => {

   e.preventDefault();

   const city = cityInput.value;

   showWeatherData(city);
   showForecastData(city);
});