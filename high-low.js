/*
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Example:
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

/**
 * Returns highest and lowest numbers from a string.
 * @param  {String} numbers An input string of numbers.
 * @return {String} The resultant max and min numbers in a string.
*/
function highAndLow(numbers){
    numArr = numbers.split(' ').map((ele)=>Number(ele));
    return Math.max(...numArr) + ' ' + Math.min(...numArr);
}

let res = highAndLow("1 2 -3 4 5");;
console.log(res);