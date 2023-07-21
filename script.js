const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '75029d5c2amsh624f5883b4639a0p146697jsnf4a6a1ac3591',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{
	cityname.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) =>{
		
		 console.log(response)
		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		wind_speed.innerHTML=response.wind_speed
		humidity.innerHTML=response.humidity
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getweather(hero.value)
})
getweather("chandigarh");