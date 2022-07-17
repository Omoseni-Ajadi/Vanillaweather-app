
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=80ff361a9abbe8fa49fbda8c10a59397&units=metric";

function displayTemperature(response)
 { let temperature = Math.round(response.data.main.temp);   
     let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML= `${temperature } ℃`
 let cityElement = document.querySelector("#city");
 cityElement.innerHTML=response.data.name
}
    

axios.get(apiUrl).then(displayTemperature);