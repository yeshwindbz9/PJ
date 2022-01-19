/*
    Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
    Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.

    Examples
    1      => null
    25     => null
    36     => 36
    1244   => 12
    952406 => 9
*/

/**
 * Returns the multiple of 3 from a number by removing the last digit.
 * @param  {String} n An input number.
 * @return {String} The resultant multiple of 3 obtained by removing a digit.
*/
const prevMultOfThree = n => {
    while(n){
        if (n%3 === 0) return n;
        else n = parseInt(n.toString().slice(0,-1));
    }
    return null;
}

let res = prevMultOfThree(952406);
console.log(res);