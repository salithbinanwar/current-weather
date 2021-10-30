const apiKey = '83cf9e6b4a6420fc7e952e404871b7b4'
const cityName = 'tangail'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
// https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=83cf9e6b4a6420fc7e952e404871b7b4
.then(res => res.json())
.then(data => {
    
    document.getElementById('showTemp').innerText = data.main.temp
    document.getElementById('cityName').innerText = data.name
    document.getElementById('feeling').innerText = data.main.feels_like
    document.getElementById('country').innerText = data.sys.country
    // for cloud 
    if (data.weather[0].main === 'Clear') {
        document.getElementById('sun').style.color = '#FBFF00';
    }else{
        document.getElementById('sun').className = 'fas fa-cloud fa-2x'
    }
    // for temparature
    if (data.main.temp > 26) {
        document.getElementById('thermo').style.color = '#49FF00';
    } else{
        document.getElementById('thermo').style.color = '#28FFBF';
    }
    // for wind speed
    if(data.wind.speed < 15){
        document.getElementById('wind').style.color = '#49FF00'
    }else{
        document.getElementById('wind').style.color =  '#FF0000'
    }
})