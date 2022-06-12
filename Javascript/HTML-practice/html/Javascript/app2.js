// const loginForm = document.getElementById("login-form");  
// const loginInput =  loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
   // console.dir(loginInput);
  // console.log(loginInput.value);    //input에 입력되는 value 값을 가져올수 있다.
   const username = loginInput.value; 

   //유효성 검사
   // if(username === '') { 
   //    alert("Please write your name!!");
   // } else if(username.length > 15) {
   //    alert("Your name is too long.");
   // }
}

loginButton.addEventListener("click", onLoginBtnClick)