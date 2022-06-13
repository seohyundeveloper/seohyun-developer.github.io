// const loginForm = document.getElementById("login-form");  
// const loginInput =  loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";  //클래스 이름

// function onLoginBtnClick(){
//    // console.dir(loginInput);
//   // console.log(loginInput.value);    //input에 입력되는 value 값을 가져올수 있다.
//    const username = loginInput.value; 
//   console.log(username);
//    //유효성 검사
//    // if(username === '') { 
//    //    alert("Please write your name!!");
//    // } else if(username.length > 15) {
//    //    alert("Your name is too long.");
//    // }
// }

function onLoginSubmit(event){
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);  //hidden 이라는 클래스를 줘서 submit이 되고나면 화면이 사라지게 하기위해 클래스를 줘서 실행해준다.
  
   const username = loginInput.value; 
   
  // greeting.innerText = "Hello! "+ username;  // string을 합치는것!! 아래의 방법을 선호한다.
   greeting.innerText = `Hello! ${username}`; 
   greeting.classList.remove(HIDDEN_CLASSNAME);
} 

//loginButton.addEventListener("click", onLoginBtnClick)

loginForm.addEventListener("submit", onLoginSubmit);



//a태그 연습한 스크립트
// function handleLinkClick(event){
//    event.preventDefault(); 
//    console.log(event);
//    alert("clicked")  // 기본적으로 자바스크립트의 alert는 기본동작을 잠시 막는 역할을 한다. ok누르면 다시 실행됨!!!
   
// }
// const link = document.querySelector("a");  //링크찾기
// link.addEventListener("click", handleLinkClick);