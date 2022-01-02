/*
    All of the animals are having a feast! Each animal is bringing one dish. 
    There is just one rule: the dish must start and end with the same letters as the animal's name. 
    For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

    Write a function feast that takes the animal's name and dish as arguments and returns true or 
    false to indicate whether the beast is allowed to bring the dish to the feast.

    Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
    beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. 
    They will not contain numerals.
*/

/**
 * Returns true if the dish starts and ends with the same letters as the animal's name .
 * @param  {String} beast Name of the beast.
 * @param  {String} dish Name of the Dish.
 * @return {Boolean}      Indication if the food is allowed.
*/
function feast(beast, dish) {
    return beast[0] + beast.slice(-1) === dish[0] + dish.slice(-1);
}

let res = feast("great blue heron", "garlic naan");
console.log(res);