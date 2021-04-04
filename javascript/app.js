"use strict";

let usersearch = prompt("What's type of your search", "Clothes, Car, Phone");

console.log(usersearch);

let userord = prompt(" Select type of your order ");
console.log(userord);
 
let userloc = prompt(" your location ");

console.log(userloc);

let userphone = prompt(" Type you phone to contact with you ");

console.log(userphone);

alert(
  "your type of search is " +
    usersearch +
    ", your type of Order is " +
    userord +
    ", your Location is " +
    userloc +
    " And your Phone is " +
    userphone + " We will contact with you soon, Thank you!"
);
