/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
    Note: If the number is a multiple of both 3 and 5, only count it once.
*/

/**
 * Returns the sum of all the multiples of 3 or 5 till the given number.
 * @param  {Number} number An input number.
 * @return {Number} The resultant sum of all multiples of 3 and 5.
*/
function solution(number){
    let sum = 0;
    for(let num=3; num<number; num+=1) if(num%3 ===0 || num%5 === 0) sum += num;
    return sum;
}

let res = solution(10);
console.log(res);