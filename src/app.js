
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=80ff361a9abbe8fa49fbda8c10a59397&units=metric";

function formatDate(timestamp) {let date= new Date(timestamp);
let hours = date.getHours();
let minutes = date.getMinutes ();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days [date.getDay()];
return `${day} ${hours}:${minutes}`

}
function displayTemperature(response)
 { let temperature = Math.round(response.data.main.temp);   
     let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML= `${temperature } ℃`
 let cityElement = document.querySelector("#city");
 cityElement.innerHTML=response.data.name
 let dateElement = document.querySelector("#date");
 dateElement.innerHTML= formatDate(response.data.dt * 1000)
}
    

axios.get(apiUrl).then(displayTemperature);