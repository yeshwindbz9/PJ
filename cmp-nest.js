/*
    Complete the function/method (depending on the language) to return true/True when its argument is an 
    array that has the same nesting structures and same corresponding length of nested arrays as the first array.

    For example:

    // should return true
    [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
    [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

    // should return false 
    [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
    [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

    // should return true
    [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

    // should return false
    [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );  
*/

/**
 * Compares the nesting structure of an array.
 * @param  {Array} other An input array.
 * @return {Boolean}    Returns true if similar nesting structure false otherwise.
*/
Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
    if (other.length !== this.length || typeof(this)!== typeof(other))return false;
    for(let i=0; i< other.length; i+=1){ 
        if(typeof(other[i])!== "string" && typeof(this[i])!== "string" && other[i].length !== this[i].length) return false;
        else if(typeof(other[i])!== "string" && typeof(this[i])!== "string" && typeof(other[i][0])!==typeof(this[i][0])) return false;
    }
  return true;
};

let res = [[[],[]]].sameStructureAs( [[1,1]] );//[[[],[]]] not same as [[1,1]]
console.log(res);