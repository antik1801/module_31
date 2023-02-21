const fish = {
    name_: 'King Hilsha',
    address: 'Chandapura',
    color: 'Silver',
    phone: '01869694519',
    price: 4000,
}

const {} = fish;

const {age, name, profession} = {name:'Almas Chowdhuy', age:56, profession: 'Makeup artist'}
console.log(age);


const {address} = fish;
const phone= fish.phone;
const color = fish.color;
const price = fish.price;
const name_ = fish.name_;
console.log(phone);
console.log(color);
console.log(price);
console.log(name);
console.log(address);

//array destructuring
const [a,b] = [44, 99]
console.log(a,b);

const nayoks = ['sakib', 'bappi', 'raji'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['alm', 'halim'];
}
const [baba, chacha] = getNames();
console.log(baba, chacha);

let {x,y,...z} ={x:0, y:1, z:2, a:3, b:2, c:6, d:8, e:9};
console.log(x,y,z);


