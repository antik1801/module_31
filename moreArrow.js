const add = (first,second) => first + second;
const getFullName =(first, last)=> `${first} ${last}`
const multiply = (a,b) => a * b;
const result = multiply(7,8);
const addAll = (a,b,c,d,e,f,g) => a+b+c+d+e+f+g;
const getPie = () => 3.1416;
const doubleIt =(a)=> a*2;
const fiveTimes = num => num*5;
// Multiline Arrow functions
const doMath = (x,y,z) => {
    const firstSum = x+y;
    const secondSum = y-z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
} 
let myFunc = {  
    showArgs : (...arguments) => { 
    console.log(arguments); 
   } 
  }; 

  myFunc.showArgs(1, 2, 3, 4, 5, 6, 7, 9);

let func = {
    myFunc(){
        console.log(arguments);
    }
}
func.myFunc(25,7,69,90,100);

let me = {
    name: 'Zohora arshee',
    thisInArrow :()=> console.log(`My name is ${this}`),
    thisInRegular(){console.log(`My name is ${this.name}`);}
}
me.thisInArrow();
me.thisInRegular();