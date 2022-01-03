/*
    Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

    Example
    domainName("http://github.com/carbonfive/raygun") == "github" 
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"
*/

/**
 * Parses out just the domain name and returns it as a string.
 * @param  {String} url An input string url.
 * @return {String}  The resultant domain name as string.
*/
function domainName(url){
    let start = 0;
    if(url.includes("www")) start = url.indexOf("www")+4;
    else if(url.includes("//")) start = url.indexOf("//")+2;
    shortUrl = url.slice(start);
    return shortUrl.slice(0, shortUrl.indexOf('.'));
}

let res = domainName("http://www.zombie-bites.com");
console.log(res);