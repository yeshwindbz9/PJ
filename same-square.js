/*
    Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
    with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

    Examples
    Valid arrays
    a = [121, 144, 19, 161, 19, 144, 19, 11]  
    b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
    comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 
    121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. 
    It gets obvious if we write b's elements in terms of squares:

    a = [121, 144, 19, 161, 19, 144, 19, 11] 
    b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
*/

/**
 * Return a boolean weather array b contains all squares of elements of a.
 * @param  {Number[]} array1 An input number array a.
 * @param  {Number[]} array2 An input number array b that may contain squares of a.
 * @return {Boolean}  Returns true if b contains all squares of a, false otherwise.
*/
function comp(array1, array2){
    if(array1 === null || array2 === null) return false;
    return array1.map(n=> n*n).sort().toString() === array2.sort().toString();
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
let res = comp(a1, a2);
console.log(res);