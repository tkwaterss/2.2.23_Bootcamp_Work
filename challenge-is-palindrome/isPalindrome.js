// Write your code below
//Return true if this word is a palindrome. false if it is not. 
//A palindrome is a word that is spelled the same backwards and forwards.

//solution 1 using methods
const palindrome = (string) => {
    reverse = string.split('').reverse().join('');
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== reverse[i]) {
            return false;
        }
    }
    return true;
}

//solution 4 One liner version of first
const palindrome4 = string => string === string.split('').reverse().join('');

console.log(palindrome4('hellh'))

console.log(palindrome('helleh'));

//solutino 2 using an array to reverse
const palindrome2 = (string) => {
    let reverse = [];
    for(let i = 0; i < string.length; i++) {
        reverse.unshift(string[i]);
    }
    for(let i = 0; i < string.length; i++) {
        if(reverse[i] !== string[i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome2('a'))

//Solution that removes all punctuation and symbols (pulled of internet)
const palindrome3 = (string) => {
    let re = /[\W_]/g;
    let lowRegString = string.toLowerCase().replace(re, '');
    reverse = lowRegString.split('').reverse().join('');
    return lowRegString === reverse;
}
console.log(palindrome3('A man, a plan, a canal. Panama'));

//solution 5 from instructor
const isPalindrome = str => {
    for(let i = 0; i < str.length; i++) {
        let finalIndex = str.length - 1 - i
        
        if (str[i] !== str[finalIndex]) {
            return false;
        }
    }
    return true;
}