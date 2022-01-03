/*
    Given a string and an array, check if all rotations of the string are present in the array. 

    Example
    contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
    contain_all_rots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
*/

/**
 * Checks and returns if arr contains all rotations of strng.
 * @param  {String} strng An input string to check rotations.
 * @param  {String[]} arr An input array of strings containing rotations of strng.
 * @return {Boolean}      Output if the arr contains all rotations of strng.
*/
function containAllRots(strng, arr) {
    let len = strng.length;
    let [count, i] = [0, 0];
    let strRep = strng.repeat(len);
    while(count<len){
        if(!arr.includes(strRep.slice(i, i+len))) return false;
        count += 1;
        i += 1;
    }
    return true;
}

let res = containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]);
console.log(res);