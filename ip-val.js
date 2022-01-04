/*
    Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
    IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

    Valid inputs examples:
    Examples of valid inputs:
    1.2.3.4
    123.45.67.89
    Invalid input examples:
    1.2.3
    1.2.3.4.5
    123.456.78.90
    123.045.067.089
    Notes:
    Leading zeros (e.g. 01.02.03.04) are considered invalid
    Inputs are guaranteed to be a single string
*/

/**
 * Returns if a given string can be a valid IP or not.
 * @param  {String} str An input string.
 * @return {Boolean}  Returns tru if the input string is a valid IP, false otherwise.
*/
function isValidIP(str) {
  let strArr = str.split('.');
    for(let num of strArr)
      if (num[0]==='0' && num.length > 1) return false;
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str))
      return true;
    return false;
}

let res = isValidIP('01.02.03.04');
console.log(res);