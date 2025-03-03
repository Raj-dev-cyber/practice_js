/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

// function namepicker(x) {
//     if (x === 1) {
//         return a;
//     }
// }

let a = "Crazy";
let b = "Amazing";
let c = "Fire";

let d = "Engine";
let e = "Foods";
let f = "Garments";

let g = "Bros";
let h = "Limited";
let i = "Hub";

let randomNumber = Math.floor(Math.random() * 3) + 1;
let randomNumber2 = Math.floor(Math.random() * 3) + 1;
let randomNumber3 = Math.floor(Math.random() * 3) + 1;

let pick1, pick2, pick3;

if (randomNumber === 1) {
    pick1 = a;
} else if (randomNumber === 2) {
    pick1 = b;
} else {
    pick1 = c;
}

if (randomNumber2 === 1) {
    pick2 = d;
} else if (randomNumber2 === 2) {
    pick2 = e;
} else {    
    pick2 = f;
}

if (randomNumber3 === 1) {
    pick3 = g;
} else if (randomNumber3 === 2) {
    pick3 = h;
} else {
    pick3 = i;
}

let businessName = pick1 + " " + pick2 + " " + pick3;
console.log(businessName);
