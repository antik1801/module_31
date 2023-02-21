function add(a,b){
    console.log(a+b); //NaN
}
// add(12);
function Add(a=2,b=10){
    console.log(a);
    console.log(b);
}
// Add(); 
function ADD(a, b=0){
    console.log(a+b);
}
// ADD(2);
function read(a,b){
let c= a + b;
return c;
}

// const c = read(10, 20);
// console.log(c);

// Destructure 

const obj = {
    mashroom: 'vanilata',
    banana: 'sagor',
    peeper: 'naga'
}
const {mashroom,banana,peeper} = obj;

const fruits = ['banana', 'mango', 'jackfruit', 'guava'];
const circle = {
    name: 'Hasan',
    id: '1-672-1',
    section: 'a',
    class: 'alpha-11',
}
const replica = [...fruits];
const cloneObject = {...circle};
// console.log(replica);
// console.log(cloneObject);

const numbers = [28,69,78,28,68,47];
const concate = [...fruits, ...numbers];
const adding = {...obj, ...circle}
console.log(concate);
console.log(adding);
console.log(Math.max(...numbers));

// print a value excluding that value in object

const person = {...adding};
const {name, ...rest} = person;
console.log(name);
console.log(rest);