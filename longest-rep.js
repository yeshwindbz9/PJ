/*
    For a given string s find the character c (or C) with longest consecutive repetition and return:

    [c, l]
    where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
    For empty string return:
    ["", 0]
*/

/**
 * Returns a character with longest consecutive repetition.
 * @param  {String} s An input string.
 * @return {Array[String, Number]} The resultant character and its number of consecutive repetition.
*/
function longestRepetition(s) {
    if(s==="") return ["", 0];
    let sArr = s.split('');
    let [char, count] = [sArr[0], 0];
    let resArr = [];
    for(let i=0; i<=sArr.length;  i+=1){
        if(char === sArr[i]) count += 1;
        else {
            resArr.push([char, count]);
            char = sArr[i];
            count = 1;
        }
    }
    let res = resArr[0];
    for(let i=0; i<resArr.length; i+=1){
        if(res[1]<resArr[i][1]) res = resArr[i];
    }
    return res;
}

let res = longestRepetition("aaaabb");
console.log(res);