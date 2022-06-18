 
const API_KEY = "961c5d78be4b0cd29e7f968a17e149db"   //api키
 
 function onGeoOk(position){  //성공시
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position)
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
      console.log(data.name, data.weather[0].main); 
      const weatherContainer = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      
    });   
    
    
    //url을 얻기위해서 fetch를 써준다.
    // fetch : promise이다. 당장 일어나지 않고 시간이 좀 걸린뒤에 일어난다.

    console.log(url);
   }
 function onGeoError(){   //실패시
    alert("Can't find you. No weather for you.");
 }
 
 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
 //getCurrentPosition()함수는 인자가 2개의 함수가 필요하다.
 //getCurrentPosition()함수는 https이거나 localhost의 경우는 가능하다
 // 일반 http의 경우는 사용할수 없다. 이경우는 SSL Certificate 를 받아야 한다.
// https://openweathermap.org 에 계정만들기