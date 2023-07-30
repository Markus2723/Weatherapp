const apiKey = '85ce3f41819ea5404515cef0ff58dc9a'; // Replace with your actual API key from a weather API provider
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1122b8c1c9mshf2a6b2a597e8a4fp17e5a8jsn725c869ec8a2',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


function getWeather() {

  // const city = document.getElementById('city').value;
  const city = document.getElementById('city').value;
  // if (city === '') {

  //   // alert('Please enter a city name.');

  //   return;

  // }



  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(response => response.json())

    .then(data => {
console.log(data,'!!');
      const weatherInfo = document.getElementById('weather-info');

      if (data.cod === 200) {

        const temperature = data.main.temp;

        const description = data.weather[0].description;

        const iconCode = data.weather[0].icon;

        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

      const icon = data.weather[0].icon;


        weatherInfo.innerHTML = `

          <p><strong>${city}</strong></p>

          <p>Temperature: ${temperature}°C</p>

          <p>Description: ${description}</p>

          <img src="${iconUrl}" alt="Weather Icon">
          


        `;

      } else {

        weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;

      }

    })

    .catch(error => {

      console.error('Error fetching weather data:', error);

    });


}

getWeather();