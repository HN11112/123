"use strict";

// let obj = {
//     a:200,
//     b:100
// };

// let func = function(c){
//     return this.a + this.b + c;
// };

// let result = func.call(obj,300);

// console.log(result);

// ----------------------------------------

// let obj = {
//     a:200,
//     b:300,

// }

// let func = function(c, d){
//     return this.a + this.b + c + d;
// }

// let result = func.apply(obj, [300,400]);

// console.log(result);

// ----------------------------------------


let obj = {
    a:200,
    b:100,

}

let func = function(){
    return this.a == this.b;
}

let newFunc = func.bind(obj);

console.log(newFunc());

// -----------------map/set-------------------

// let map = new Map([
//     ["age", 25],
// ]);

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true,"bool1");
// map.set(1,"num2");

// let Ashot = {
//     name: "Ashot",
//     age: 25
// };
// map.set(Ashot, 5000);
// map.set("Ashot", Ashot)
// map.delete("Ashot");
// // map.clear();

// for(let key of map){
//     console.log(key);
// };

// console.log(map.get("Ashot"));
// console.log(map);
// console.log(typeof map);

// ----------------------------------------------

// let set = new Set();

// let arman = {
//     name: "Arman",
// };
// let ashot = {
//     name: "Ashot",
// };

// let armen = {
//     name: "Armen",
// };

// set.add(arman);
// set.add(ashot);
// set.add(armen);


// for(let user of set){
//     console.log(user.name);
// }

// console.log(["artal", "artak", "artak"]);


