number = 10;

function add() {
  return (number += 5);
}

function divide() {
  return (number /= 3);
}
function subtract()
{
    return(number-=4);
}
function multiply(){
    return(number*=10);
}
function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
function increment(n){
    return n+1;
}
function decrement(n){
    return n-1;
}
function makeInt(n){
   return parseInt(n,10);
}
function preserveDecimal(n){
    return parseFloat(n);
}
divide(number); //=> 3.3333333333333335

add(number); //=> 8.333333333333334
subtract(number);
multiply(number);




console.log(number);


