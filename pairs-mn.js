/*
    Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

    Example
    m = 2
    n = 4
    result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]
*/

/**
 * Generates a sorted list of pairs (a, b) such that m <= a <= b <= n.
 * @param  {Number} m A starting number m.
 * @param  {Number} n An ending number n.
 * @return {(Number, Number) []} Sorted list of pairs (a, b) such that m <= a <= b <= n.
*/
function generatePairs(m, n) {
    resArr = [];
    for(let i=m; i<=n; i+=1){
        for(let j=i; j<=n; j+=1){
            resArr.push([i, j]);
        }
    }
    return resArr;
}

let res = generatePairs(2, 4);
console.log(res);