/*
    Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

    For example:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

/**
 * Returns an array of unique elements from the input string.
 * @param  {String/Number[]} s An input string.
 * @return {String}      The resultant array of unique elements.
*/
var uniqueInOrder=function(iterable){
    let res = [];
    for(let i=0; i< iterable.length; i+=1) if(iterable[i] != iterable[i+1]) res.push(iterable[i]);
    return res;
}

let res = uniqueInOrder("AAAABBBCCDAABBB");
console.log(res);