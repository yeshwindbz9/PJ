/*
    A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. 
    The 1st character of a code is a capital letter which defines the book category.
    In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) 
    which indicates the quantity of books of this code in stock.

    For example an extract of a stocklist could be:
    L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
    You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :
    M = ["A", "B", "C", "W"]
    and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

    For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):
    (A : 20) - (B : 114) - (C : 50) - (W : 0)
    where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 
    50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.
    If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).
*/

/**
 * Calculates and returns a stocklist in Haskell/Racket list of pairs.
 * @param  {String[]} listOfArt A stocklist in a form of String array.
 * @param  {String[]} listOfCat A category-list in a form of String array.
 * @return {String} The resultant stocklist in Haskell/Racket list of pairs.
*/
function stockList(listOfArt, listOfCat){
    if(listOfArt.length == 0 ||listOfCat.length == 0) return "";
    let res = [];
    listOfArt = listOfArt.map(ele=>ele.split(' '));
    for(let cat of listOfCat){
        let count = 0;
        for(let i=0; i<listOfArt.length; i+=1) 
            if(cat===listOfArt[i][0][0]) count += Number(listOfArt[i][1]);
        res.push(`(${cat} : ${count})`);
    }
    return res.join(' - '); 
}

let b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
let c = ["A", "B", "C", "W"]
let res = stockList(b, c);
console.log(res);