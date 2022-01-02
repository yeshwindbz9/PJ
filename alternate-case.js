/*
    Define String.prototype.toAlternatingCase
    such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
*/

/**
 * Alternates uppercase and lowercase and returns a string.
 * @param  {String} s An input string.
 * @return {String}      The resultant alternate-case string.
*/
String.prototype.toAlternatingCase = function () {
    let resArr = [];
    for(let i = 0; i< this.length; i++){
        if(this[i] === this[i].toLowerCase()) resArr.push(this[i].toUpperCase());
        else resArr.push(this[i].toLowerCase());
    }
    return resArr.join('');
}

let res = "HelloWorld!".toAlternatingCase();
console.log(res);