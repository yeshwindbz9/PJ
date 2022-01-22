/*
    The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
    Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
    Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
    Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
    Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

    Examples:
    tickets([25, 25, 50]) // => YES 
    tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
    tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

/**
 * Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
 * @param  {Number[]} peopleInLine An input array of 25, 50 and 100 bills that peopleInLine have.
 * @return {String}  Yes/No if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment.
*/
function tickets(peopleInLine){
    let pocket = {25:0, 50:0, 100:0};
    if(peopleInLine[0]!==25) return "NO";
    for(change of peopleInLine){
        if(change === 25) pocket[25] += 1;
        else if(change === 50){
            if(pocket[25]>0) pocket[25] -= 1; else return "NO";
            pocket[50] += 1;
        }
        else if(change === 100){
            if(pocket[50]>0 && pocket[25]>0){
                pocket[50] -= 1;
                pocket[25] -= 1;
                pocket[100] += 1;
            } else if(pocket[25]>2){
                pocket[25] -= 3;
                pocket[100] += 1;
            } else return "NO";
        }
    };
    return "YES"
}

let res = tickets([25,25,25,100,25,25,50,100,25,25,25,100]);
console.log(res);