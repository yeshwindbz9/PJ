/*
    Given a string of words, you need to find the highest scoring word.
    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
    You need to return the highest scoring word as a string.
    If two words score the same, return the word that appears earliest in the original string.
    All letters will be lowercase and all inputs will be valid.

    Example: high('man i need a taxi up to ubud') => 'taxi'
*/

/**
 * Finds and returns the highest scoring word.
 * @param  {String} x An input string.
 * @return {String} The resultant highest scoring word.
*/
function high(x){
    let key = 'abcdefghijklmnopqrstuvwxyz';
    x = x.toLowerCase().split(' ');
    let [maxWord, maxScore] = ["", 0];
    for(let word of x){
        count = 0;
        for(let i=0; i<word.length; i+=1)
            count += (key.indexOf(word[i]) + 1);
        if(count>maxScore) [maxWord, maxScore] = [word, count];
    }
    return maxWord;
}

let res = high('what time are we climbing up the volcano');
console.log(res);