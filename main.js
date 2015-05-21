/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(first, second){
    "use strict";
    if(first > second) {
      return first;
    } else {
      return second;
    }
}

console.assert( max(2, 3) === 3 , "max");
console.assert( max(3, 2) === 3 , "max");
console.assert( max(4, 4) === 4 , "max");

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(first, second, third){
    "use strict";
    var max= Math.max( first, second, third);
    return max;

}
console.assert( maxOfThree(2,3,4) === 4,"maxOfThree");
console.assert( maxOfThree(3,2,4) === 4,"maxOfThree");
console.assert( maxOfThree(5,9,2) === 9, "maxOfThree");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(char === "a" || "e" || "i" || "o" || "u"){
      return true;
    }else{
      return false;
    }
}

console.assert (isVowel("a") === true,"isVowel");
console.assert (isVowel("k") === false, "isVowel");
// // ---------------------
// // Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// // ---------------------
//
// function rovarspraket(phrase){
//     "use strict";
//     var consonants
//
//
// }
// console.assert(rovarspraket(theironyard))
// // // ---------------------
// // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// // ---------------------
function sum(array){
    "use strict";
    var sumAnswer= 0;
    for( var i = 0; i < array.length; i++){
      sumAnswer = sumAnswer + array[i];
    }
    console.log(sumAnswer);
    return sumAnswer;

}


function multiply(array){
    "use strict";
    var multiplyAnswer = 1;
    for( var i = 0; i < array.length; i++){
      multiplyAnswer = multiplyAnswer * array[i];
      console.log(multiplyAnswer);
    }

    console.log(multiplyAnswer);
    return multiplyAnswer;

}

console.assert( sum ([1,2,3,4]) === 10, "sum");
console.assert( multiply ([1,2,3,4]) === 24, "multiply");
// // ---------------------
// // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// // ---------------------
//
// function reverse(){
//     "use strict";
//     //...
// }
//

// console.assert( reverse ("theironyard") === "draynorieht", "reverse" );
// // ---------------------
// // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// // ---------------------
//
function findLongestWord(words){
    "use strict";
    var longestWord = "";
    // arr.forEach(callback[, thisArg])
    words.forEach(function(element,index,array){
      if( element.length > longestWord.length) {
        longestWord = element;
      }

    });

    console.log(longestWord.length);
    return longestWord.length;
}


console.assert( findLongestWord(["dog", "goat", "rhino"]) === 5, "you failed once again");
// // ---------------------
// // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// // ---------------------
//
// function filterLongWords(words, i){
//     "use strict";
//     //...
// }
//
// // ---------------------
// // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// // ---------------------
//
// function charFreq(string){
//     "use strict";
//     //...
// }
