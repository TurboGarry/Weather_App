const cityInput =  document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');

const notFoundSection = document.querySelector('.not-found');
const secarchCitySection = document.querySelector('.search-city');
const weatherInfosection = document.querySelector('.weather-info');

const apiKey = 'Your_api_key_here';

searchBtn.addEventListener('click', () => {
    if(cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
})
cityInput.addEventListener('keydown', (event) => {
    if (event.key =='Enter' && cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
})

async function getFetchData(endPoint, city){
    // api_url + api_key + city_name

    const response = await fetch(api_url);

    return response.json(); 
}

async function updateWeatherInfo(city){
    const weatherData = await getFetchData('weather', city);

    if(weatherData.cod != 200){
        showDisplaySection(notFoundSection);
        return
    }
    console.log(weatherData);
}

function showDisplaySection(section){
    [weatherInfosection, secarchCitySection, notFoundSection]
        .forEach(section => section.style.display = 'none');

    section.style.display = 'flex';
}