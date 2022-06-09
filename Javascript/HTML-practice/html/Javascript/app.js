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

 const age = parseInt ( prompt( "How old are you ?") ) // prompt는 인자를 두개 받는다
 //parseInt를 이용해서 string을 걸러낸다
 console.log(isNaN(age));

 if(isNaN(age) || age < 0){  //숫자 아니야
    console.log("please write a real positive number");
 } else if( age < 18 ){
     console.log("you are too young");
 } else if( age >=18 && age <= 50) {
     console.log("You can drink");
 } else if( age > 50 && age <= 80 ){
     console.log("you should exercise.");
 } else if( age > 80 ){
     console.log("you can do whatever you want.");
 }
 
 
 
//  else{
//      console.log("Thank u for writing your age.")
//  }