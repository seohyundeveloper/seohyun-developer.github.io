const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello")
}

//setInterval(sayHello, 5000); // 5초마다 실행
//setTimeout(sayHello, 5000);  //5초후에 한번 실행
function getClock(){
    const date = new Date();  //새로운 날짜를 반환한다.
   // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
   const hours = String(date.getHours()).padStart(2, "0") ;  //padStart는 string만 쓸수 있어서 number를 string으로 바꿔준다. 
   const minutes = String(date.getMinutes()).padStart(2, "0");
   const seconds = String(date.getSeconds()).padStart(2, "0");

   //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //바로 실행해서 보여주기
setInterval(getClock, 1000); //1초마다 바뀌면서 보여주기
