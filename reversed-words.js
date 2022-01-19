/*
    Complete the solution so that it reverses all of the words within the string passed in.
    Example: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

/**
 * Returns a string of reversed words.
 * @param  {String} str An input string.
 * @return {String}      The resultant reversed word string.
*/
function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
}

let res = reverseWords("hello world!");
console.log(res);