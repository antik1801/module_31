/*
1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.

2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.

3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.

Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return

Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.

Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.

2. What are the different ways to get an element from DOM?
3. What’s the difference between an Event Handler and an Event Listener?
4. What does “event bubbling” mean in JavaScript?
5. Can you explain the different types of events available in JavaScript?
6. What’s the difference between event.preventDefault() and event.stopPropagation() ?

1. What is ES6? Have you ever used anything from ES6?
2. Explain the difference between var, let and const.
3. What is the arrow function, and how to create it?
4. Give an example of an Arrow function in ES6? List down its advantages.
5. Discuss spread operator in ES6 with an example.
6. What do you understand about default parameters?
7. What are template literals in ES6?
8. Tell us the difference between arrow and regular function.

To get more interview questions search “Common JavaScript

ES6 Interview Questions” on Google
*/

// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

// const multiply = (a,b,c) => a*b*c;
// console.log(multiply(12,13,14));

// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
// const text = `I am a web developer
// I love to code
// I love to eat biriyani
// `
// console.log(text);

/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.

const testPerpous = (a,b=0) => console.log(a,b);
testPerpous(40);
*/

/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return

// #f222ffff
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
const friends = numbers => {
    for(const items of numbers){
        if((items.length)%2 === 0){
            const newName = makeid(4);
            numbers.push(newName);
            return numbers;
        }
        else{
            console.log('Else')
        }
    }
     
};

console.log(friends(['Rafi','sami','atik','abid']))
*/

/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.


const arrowFunc = numbers => {
    const newArr = [];
    const length = numbers.length;
    let sum = 0;
    for(const items of numbers){
        newArr.push(Math.pow(items, 2));
        const item = Math.pow(items, 2);
        sum += item;    
    }
    console.log(sum);
    console.log((sum/length).toFixed(2));
    return newArr;
}
console.log(arrowFunc([25, 30, 25, 36, 5, 85, 12]));
*/
/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
*/
/*
const arrowFat = (array1, array2) =>{
    const newArr = arr1.concat(arr2);
    return newArr;
}

const arr1=[21,32,25,85,36,41];
const arr2=[32,45,69,85,14,1000];
const newArr = arrowFat(arr1, arr2); 
console.log(newArr);
const maxNum = Math.max(...newArr);
console.log(maxNum);
*/
const nayikas = ['sabnur','sabana', 'popy', 'rina khan']
const nayika2 = [...nayikas]
const numbers = [10, 20, 30, 0, 50, 60, 70];
console.log(Math.max(...numbers));
