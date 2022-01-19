/*
    ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but 
    infected people have spread before the warning. ⚠️
    🗺️ You would be given a map of the world in a type of string:

    string s = "01000000X000X011X0X"
    Where,
    '0' : uninfected
    '1' : infected
    'X' : ocean

    ⚫ The virus can't spread in the other side of the ocean.
    ⚫ If one person is infected every person in this continent gets infected too.
    ⚫ Your task is to find the percentage of human population that got infected in the end.

    ☑️ Return the percentage % of the total population that got infected.
    ❗❗ The first and the last continent are not connected!

    💡 Example:
    start: map1 = "01000000X000X011X0X"
    end:   map1 = "11111111X000X111X0X"
    total = 15
    infected = 11
    percentage = 100*11/15 = 73.33333333333333
*/

/**
 * Returns the percentage of human population infected from the given string.
 * @param  {String} s An input world map as a string.
 * @return {Number} The resultant percentage of infected population.
*/
function infected(s) {
    sArr = s.split('X');
    total = sArr.join('').length;
    infects = 0;
    for(i in sArr) if(sArr[i].includes('1')) infects += sArr[i].length;
    return infects===0? 0: (infects/total)*100;
}

let res = infected("01000000X000X011X0X");
console.log(res);