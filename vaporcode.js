/*
    Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts 
    all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

    "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
    "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

/**
 * Returns a string in vaporwave format.
 * @param  {String} string An input string.
 * @return {String}  The resultant vaporcoded string.
*/
function vaporcode(string) {
    return string.toUpperCase().split(' ').join('').split('').join('  ');
  }

let res = vaporcode("Let's go to the movies");
console.log(res);