// const loginForm = document.getElementById("login-form");  
// const loginInput =  loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";  //클래스 이름
const USERNAME_KEY = "username";   //입력된값의 이름
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
   localStorage.setItem( USERNAME_KEY, username); // 로컬 스토리지에 저장하기
  // greeting.innerText = "Hello! "+ username;  // string을 합치는것!! 아래의 방법을 선호한다.
   // greeting.innerText = `Hello! ${username}`; 
   // greeting.classList.remove(HIDDEN_CLASSNAME);
   paintGreetings(username); //함수로 빼서 처리해준다.
} 

//loginButton.addEventListener("click", onLoginBtnClick)

function paintGreetings(username){
   greeting.innerText = `Hello! ${username}`; 
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem( USERNAME_KEY );  //로컬스토리지에 저장된 값 가져오기!!!
console.log(saveUsername)

if (saveUsername === null) { //유저 정보가 로컬 스토리지에 없는경우
   //show the form
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
} else{
   //show the greetings
   // greeting.classList.remove(HIDDEN_CLASSNAME);
   // greeting.innerText = `Hello ${saveUsername}`;
   paintGreetings(saveUsername);;  //위의 두줄이 반복되므로 함수로 빼준다.
}



//a태그 연습한 스크립트
// function handleLinkClick(event){
//    event.preventDefault(); 
//    console.log(event);
//    alert("clicked")  // 기본적으로 자바스크립트의 alert는 기본동작을 잠시 막는 역할을 한다. ok누르면 다시 실행됨!!!
   
// }
// const link = document.querySelector("a");  //링크찾기
// link.addEventListener("click", handleLinkClick);