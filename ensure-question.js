/*
    Given a string, write a function that returns the string with a question mark ("?") appends to the end, 
    unless the original string ends with a question mark, in which case, returns the original string.
*/

/**
 * Ensures a question and returns a string.
 * @param  {String} s An input string.
 * @return {String}      The resultant question ensured string.
*/
function ensureQuestion(s) {
    return (s.slice(-1) === '?')?  s: s+'?';
}

let res = ensureQuestion('No');
console.log(res);