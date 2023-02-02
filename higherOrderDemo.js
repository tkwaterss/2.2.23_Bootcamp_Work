//Higher Order Functions Code Along

let names = ['biLly', 'boB Billy', 'bobby bill', 'biLl Bob', 'billybob JuniOr', 'billYBobby', 'bIllbob'];
let numbers = [5,2,3,6,4,2,5,7,8,6,4,2,1,4,6,7,8];

const copyChangeArray = (array, callback) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        //for each iteration it returns the arrays value passed through the callback function
        let newValue = callback(array[i]);
        //adds said new values to the new array
        newArr.push(newValue);
    }
    return newArr;
}

const stringToCamelCase = (string) => {
    //first split string by spaces to get individual words
   let splitStr = string.split(' ');
   // loop though each array of words
   for (let i = 0; i < splitStr.length; i++) {
        //make lower case
        splitStr[i] = splitStr[i].toLowerCase();
        //if not first word, change first char to upper case and slice back on the rest of the word
        if (i !== 0) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
        }
   }
   //join back together without space to make cammelCase
   return splitStr.join('')
}

const addFive = num => {
    return num += 5;
}

// console.log(copyChangeArray(names, stringToCamelCase));
// console.log(copyChangeArray(numbers, addFive));

const logNames = function(element,index){}
//same same as function going into forEach

//logs the name and location of each element in the names array
//used for executing code for each element
names.forEach(function(element, index){
    console.log(`${element} is at the index of ${index}`);
})

//using .map to call the camelCase function
let mappedArray = names.map(stringToCamelCase)
console.log(mappedArray)

let sortedArray = numbers.filter(num => {
    return num % 2 === 0;
})
console.log(sortedArray);

let sum = numbers.reduce((total, curr) => {
    return total + curr;
})
console.log(sum)

class Users {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastNames = lastName;
    }
    greeting() {
        console.log(`Hello, my name is ${this.firstName}`);
    }
}
let nameObj = [];

names.forEach((name) => {
    let nameSplit = name.split(' ');
    let newUser = new Users(nameSplit[0], nameSplit[1]);
    nameObj.push(newUser);
})
console.log(nameObj);

let firstNameArr = nameObj.map(user => {
    return user.firstName
})

console.log(firstNameArr);

let greet = (user) => user.greeting();

nameObj.forEach(greet);

//you can pass in the array you are working with to check against(duplicate application?)
numbers.forEach((element, index, array) => {

})


names.forEach((element, index, arr) => {
    console.log(`The element at index ${index} in the array ${arr} is ${element}`);
})

let upscaledArr = numbers.map((element, index, arr) => {
    return element * index
})
console.log(upscaledArr);

let filteredArr = upscaledArr.filter((element,index) => element % index === 0);

console.log(filteredArr);

let reduceArr = filteredArr.reduce((acc, curr) => {
    console.log(`The added value is ${acc}`)
    console.log(`The current value in the loop is ${curr}`)
    return acc + curr
},0)