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

// const hour1Element = document.querySelector('#hour1');
// const hour2Element = document.querySelector('#hour2');
// const hour3Element = document.querySelector('#hour3');
// const hour4Element = document.querySelector('#hour4');

// const hourTemp1Element = document.querySelector('#day-temp1');
// const hourTemp2Element = document.querySelector('#day-temp2');
// const hourTemp3Element = document.querySelector('#day-temp3');
// const hourTemp4Element = document.querySelector('#day-temp4');

// const hourDescription1 = document.querySelector('#description1');
// const hourDescription2 = document.querySelector('#description2');
// const hourDescription3 = document.querySelector('#description3');
// const hourDescription4 = document.querySelector('#description4');

// const hourIcon1Element = document.querySelector('#weather-icon1');
// const hourIcon2Element = document.querySelector('#weather-icon2');
// const hourIcon3Element = document.querySelector('#weather-icon3');
// const hourIcon4Element = document.querySelector('#weather-icon4');

// const hourHumidity1 = document.querySelector('#humidity1 span');
// const hourHumidity2 = document.querySelector('#humidity2 span');
// const hourHumidity3 = document.querySelector('#humidity3 span');
// const hourHumidity4 = document.querySelector('#humidity4 span');

// const hourWindy1 = document.querySelector('#wind1 span');
// const hourWindy2 = document.querySelector('#wind2 span');
// const hourWindy3 = document.querySelector('#wind3 span');
// const hourwindy4 = document.querySelector('#wind4 span');

// const weatherContainer = document.querySelector("#weather-data");

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

   weatherContainer.classList.remove("hide");
};

//Pesquisando os dados das proximas 3 horas para os proximos 5 dias
const getForecastData = async (city) => {

   const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

   const res = await fetch(apiForecastUrl);
   const data = await res.json();

   console.log(data);

   return data;
}

const showForecastData = async (city) => {
   const data = await getForecastData(city);

   //cityElement.innerText = data.list.name;

   // hour1Element.innerText = data.list[0].dt_txt;
   // hour2Element.innerText = data.list[1].dt_txt;
   // hour3Element.innerText = data.list[2].dt_txt;
   // hour4Element.innerText = data.list[3].dt_txt;

   // hourTemp1Element.innerText = parseInt(data.list[1].main.temp);
   // hourTemp2Element.innerText = parseInt(data.list[2].main.temp);
   // hourTemp3Element.innerText = parseInt(data.list[3].main.temp);
   // hourTemp4Element.innerText = parseInt(data.list[4].main.temp);

   // hourDescription1.innerText = data.list[1].weather[0].description;
   // hourDescription2.innerText = data.list[2].weather[0].description;
   // hourDescription3.innerText = data.list[3].weather[0].description;
   // hourDescription4.innerText = data.list[4].weather[0].description;

   // hourIcon1Element.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`);
   // hourIcon2Element.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`);
   // hourIcon3Element.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`);
   // hourIcon4Element.setAttribute('src', `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`);

   // hourHumidity1.innerText = `${data.list[1].main.humidity}%`;
   // hourHumidity2.innerText = `${data.list[2].main.humidity}%`;
   // hourHumidity3.innerText = `${data.list[3].main.humidity}%`;
   // hourHumidity4.innerText = `${data.list[4].main.humidity}%`;
   
   // hourWindy1.innerText = `${data.list[1].wind.speed}km/h`;
   // hourWindy2.innerText = `${data.list[2].wind.speed}km/h`;
   // hourWindy3.innerText = `${data.list[3].wind.speed}km/h`;
   // hourwindy4.innerText = `${data.list[4].wind.speed}km/h`;

   // weatherContainer.classList.remove("hide");
};

//EVENTOS

searchBtn.addEventListener('click', (e) => {

   e.preventDefault();

   const city = cityInput.value;

   showWeatherData(city);
   showForecastData(city);
});