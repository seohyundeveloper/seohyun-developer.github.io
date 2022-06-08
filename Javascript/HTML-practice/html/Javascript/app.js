let a = 16;
const b = 2;
let myName = "Nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log( "hello " + myName );



const mon = "mon";
const tue = "tue";
const wed = "wed";
const thr = "thr";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thr + fri + sat + sun;

console.log(daysOfWeek);

const calculator = {
    add : function (num, items) {
        alert(num + items);
    },
    minus : function (num, items) {
        alert(num - items);
    },
    divide : function ( num, items){
        console.log(num / items);
    },
    multiply : function (num, items) {
        console.log(num**items);
    },
}
 calculator.add(10, 5);
 calculator.minus(10, 5);
 calculator.divide(10, 5);
 calculator.multiply(10, 5);