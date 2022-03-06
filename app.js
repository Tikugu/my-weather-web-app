const currentTemperatureDescription=document.querySelector('.temperature-description')
const currentTemperatureDegree=document.querySelector('.temp-deg')
const locationTimezone=document.querySelector('.location-timezone')
const tomorrowRainVal=document.querySelector('.tomorrow-precipitation')
const tomorrowWindSpeedVal=document.querySelector('.tomorrow-wind-speed')
const tomorrowHumidityVal=document.querySelector('.tomorrow-humidity')
const tomorrowMaxTempVal=document.querySelector('.tomorrow-max-temp')
const currentUviVal=document.querySelector('.current-uvi')
const currentWindSpeedVal=document.querySelector('.current-wind-speed')
const currentHumidityVal=document.querySelector('.current-humidity')
const currentMaxTempVal=document.querySelector('.current-feels_like')
let icon=document.querySelector('.icon')
window.addEventListener('load',()=>{
    let long;
    let lat;
    
let APIkey=`848b2d65fbf161f50f29856c8e268605`;
    if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position=>{
    long=position.coords.longitude
    lat=position.coords.latitude

    const api=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude={part}&appid=${APIkey}`
    
    fetch(api)
.then(data=>{
    return data.json()
})
.then(data=>{
    
    console.log(data)
    //today data
    locationTimezone.textContent=data.timezone
    currentHumidityVal.textContent=data.current.humidity
    currentUviVal.textContent=data.current.uvi
    currentTemperatureDegree.textContent=data.current.temp
    currentWindSpeedVal.textContent=data.current.wind_speed
    currentTemperatureDescription.textContent=data.current.weather[0].description
    currentMaxTempVal.textContent=data.current.feels_like
icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt="icon">`
    //tomorrow data
     tomorrowRainVal.textContent=data.daily[0].rain
    tomorrowHumidityVal.textContent=data.daily[0].humidity
     tomorrowWindSpeedVal.textContent=data.daily[0].wind_speed
     tomorrowMaxTempVal.textContent=data.daily[0].temp.max
})
})

    }else{

    temperatureDescription.innerText="PLEASE ENABLE GEOLOCATION"
    temperatureDescription.classList.add('bounce')
    setTimeout(()=>{
        temperatureDescription.classList.remove('bounce')
    },2001)
    }
})