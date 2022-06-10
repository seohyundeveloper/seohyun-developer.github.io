let a = 16;
const b = 2;
let myName = "Nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log( "hello " + myName );



const mon = "mon";
const tue = "tue";
const wed = "wed";
const thr = "thr";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thr + fri + sat + sun;

// console.log(daysOfWeek);

const calculator = {
    add : function (num, items) {
        return num + items
    },
    minus : function (num, items) {
        return num - items;
    },
    divide : function ( num, items){
        return num / items;
    },
    multiply : function (num,  items) {
        return num**items;
    },
}
 const test = calculator.add(10, 5);
 const t1 = calculator.minus(10, 5);
 const t2 = calculator.divide(10, 5);
 const t3 = calculator.multiply(10, 5);
 
 // console.log(test, t1,t2,t3 )

//  const age = parseInt ( prompt( "How old are you ?") ) // prompt는 인자를 두개 받는다
//  //parseInt를 이용해서 string을 걸러낸다
//  console.log(isNaN(age));

//  if(isNaN(age) || age < 0){  //숫자 아니야
//     console.log("please write a real positive number");
//  } else if( age < 18 ){
//      console.log("you are too young");
//  } else if( age >=18 && age <= 50) {
//      console.log("You can drink");
//  } else if( age > 50 && age <= 80 ){
//      console.log("you should exercise.");
//  } else if( age > 80 ){
//      console.log("you can do whatever you want.");
//  }
 //  else{
//      console.log("Thank u for writing your age.")
//  }

// const title = document.getElementById("title");
// title.innerText = "Got you!";
// console.log(title)

const hellos = document.getElementsByClassName("hello");
const title2 = document.getElementsByTagName("h1");
console.log(hellos)  // array가 나온다.

const titles = document.querySelector("div.hello:first-child");

function handleTitleClick(){
    titles.style.color = "maroon";
}
function handleMouseEnter(){
    titles.innerText = "Mouse is here!"
}
function handleMouseLeave(){
    titles.innerText = "Mouse is gone!"
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
  alert("copier");
}
function handleWindowOffline(){
  alert("sos no WIFI");
}
function handleWindowOnline(){
  alert("ALL GOOD");
}

titles.addEventListener('click', handleTitleClick);
titles.addEventListener("mouseenter", handleMouseEnter);
titles.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


//과제
// const adds = document.querySelector("div.boiler:first-child");
// const colors = ["red", "purple", "lime", "maroon"];

// const superEventHandler = {
//   mouseenter: function () {
//     adds.innerText = "The mouse is here!";
//     adds.style.color = colors[0];
//   },
//   mouseleave: function () {
//     adds.innerText = "The mouse is gone!";
//     adds.style.color = colors[1];
//   },
//   resize: function () {
//     adds.innerText = "You are resized!";
//     adds.style.color = colors[2];
//   },
//   rightClick: function () {
//     adds.innerText = "That was a right click!";
//     adds.style.color = colors[3];
//   }
// };

// adds.addEventListener("mouseenter", superEventHandler.mouseenter);
// adds.addEventListener("mouseleave", superEventHandler.mouseleave);
// window.addEventListener("resize", superEventHandler.resize);
// window.addEventListener("contextmenu", superEventHandler.rightClick);