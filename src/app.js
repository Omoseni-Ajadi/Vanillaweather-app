
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

 let descriptionElement = document.querySelector("#description")
descriptionElement.innerHTML=response.data.weather[0].description
 
let iconElement=document.querySelector("#icon");
iconElement.setAttribute("src",
`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

let humidityElement= document.querySelector("#humidity");
humidityElement.innerHTML=response.data.main.humidity;

let windElement = document.querySelector("#wind");
windElement.innerHTML= Math.round(response.data.wind.speed);
}

function getForecast(coordinates) {
    let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={part}&appid=80ff361a9abbe8fa49fbda8c10a59397&units=metric`  
}
getForecast(response.data.coord);

function displayForecast(params) {
     let forecastElement = document.querySelector("#forecast");
let forecastHTML=`<div class="row">`;
let days =[ "Thu","Fri","Sat","Sun","Mon","Tue"]
days.forEach(function name(day) {forecastHTML=forecastHTML +`
<div class="col-2">
${day}
<br>
12
<img src="https://openweathermap.org/img/wn/04n@2x.png" alt="clear" srcset="" id="icon" width="36">
</div>
`

})

    forecastHTML= forecastHTML + `</div>`
forecastElement.innerHTML=forecastHTML
}

function search (city) {let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80ff361a9abbe8fa49fbda8c10a59397&units=metric`;

axios.get(apiUrl).then(displayTemperature);}
         
function handle(event) {
    event.preventDefault();
 let cityInputElement = document.querySelector("#input-city");
 search (cityInputElement.value);
 
}

displayForecast();

let form = document.querySelector("#search-form");
form.addEventListener ("submit",handle);

