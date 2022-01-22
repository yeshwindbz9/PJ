/**
    You will be given a vector of strings. You must sort it alphabetically (case-sensitive, 
    and based on the ASCII values of the chars) and then return the first value.
    The returned value must be a string, and have "***" between each of its letters.
*/

/**
 * Sorts the strings and returns '***' seperated values of the first one.
 * @param  {String[]} s An array of words
 * @return {String}      First sorted string seperated by '***'
*/
function twoSort(s) {
    let res = Array.from(s.sort()[0]);
    return res.join('***');
}

let res = twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
console.log(res);