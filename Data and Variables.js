//Declare and assign variables

var Name_of_the_space ="Determination";
let ShuttleSpeed=17500;
var Dist_to_Mars=225000000;
let Dist_to_Moon=384400;
var MilesPerKilo=0.621;

//Print out the type of each variable

console.log(typeof Name_of_the_space);
console.log(typeof ShuttleSpeed);
console.log(typeof Dist_to_Mars);
console.log(typeof Dist_to_Moon);
console.log(typeof MilesPerKilo);

//Calculate a space mission
var miles_to_Mars= Dist_to_Mars * MilesPerKilo;
console.log(miles_to_Mars);

let Hrs_to_Mars= miles_to_Mars/ShuttleSpeed;
console.log(Hrs_to_Mars);

let Days_to_Mars= Hrs_to_Mars/24;
console.log(Days_to_Mars);

//Print out the results of your calculations

console.log(Name_of_the_space + " will take" + " " + Days_to_Mars + " days to reach Mars.");

//Calculate a trip to Dist_to_Moon

let miles_to_moon=Dist_to_Moon * MilesPerKilo;
console.log(miles_to_moon);

var Hrs_to_Moon= miles_to_moon / ShuttleSpeed;
console.log(Hrs_to_Moon);

let Days_to_Moon=Hrs_to_Moon/24;
console.log(Days_to_Moon);

console.log(Name_of_the_space + " will take" + " " + Days_to_Moon + " days to reach the Moon.");


