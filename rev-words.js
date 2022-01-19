/*
    Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

    Examples
    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"
*/

/**
 * Returns a sentence with reversed words.
 * @param  {String} s An input string.
 * @return {String} The resultant reversed worded string.
*/
function reverseWords(str) {
    return str.split(' ').map(ele=>ele.split('').reverse().join('')).join(' ');
}

let res = reverseWords('The quick brown fox jumps over the lazy dog.');
console.log(res);