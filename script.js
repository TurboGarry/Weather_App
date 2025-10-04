const cityInput =  document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');

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
    console.log(weatherData);
}