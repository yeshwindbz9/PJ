
const ak47 = {
    "type": "assault-rifle",
    "origin": "Russia",
    "ammo": 7.62,
    "alias": "kalashnikov",
    "active": "yes",
    
    get activeStatus(){
        return this.active;
    },

    set activeStatusChange(status){
        this.active = status;
    }
};

function gun(type, origin, ammo, alias, active) {
    this.type = type,
    this.origin = origin,
    this.ammo = ammo,
    this.alias = alias,
    this.active = active
}

console.log(ak47);
gun_ak47 = new gun("assault-rifle", "Russia", 7.62, "kalashnikov", "yes");
console.log(gun_ak47);
console.log("ak47 status: "+ak47.active);
ak47.activeStatusChange = "no";
console.log("ak47 status: "+ak47.active);
let str = 'banana'.split('');
console.log(str);
for(let i in str){
    console.log(i);
}
let a1 = 'hello';
let b1 = ['hello', 'friend'];
console.log(!b1.includes(a1));
let num = 1244;
console.log(typeof(parseInt(num.toString().slice(0,-1))));
console.log("01000000X000X011X0X".split('X'));
console.log(Math.min(1,2));

console.log('abc'.indexOf('c'));
console.log([...Array(10+1).keys()].slice(3));
console.log(2%3);
console.log("------------------------------");
arr = [2, 1, 3, 4];
sum = 1;
for (i = 0; i< arr.length; i+= 2){
    sum *= (arr[i]*arr[i])+(arr[i+1]*arr[i+1]);
    console.log(arr[i], sum);
}
console.log(sum);
console.log("------------------------------");

str = "http://zombie-bites.com";
console.log(str.indexOf("www."));
a = str.indexOf("www.");
b = str.indexOf(".com");
console.log(str.indexOf(".com"));
console.log(str.slice(7, b));
console.log(str.indexOf("http"));
Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
  if (other.length !== this.length) return false;
  for(let i=0; i< other.length; i+=1) if(other[i].length !== this[i].length) return false;
  return true;
};
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ) );
console.log(typeof('[',']'));