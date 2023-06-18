let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
};

let ChimpanzeeTwo ={
    name: "Brad",
    species:"Chimpanzee",
    mass:11,
    age:6,
};

let BeagleOne ={
    name: "Leroy",
    species:"Beagle",
    mass:14,
    age:5,
};

let TardigradeOne ={
    name: "Almina",
    species:"Tardigrade",
    mass:0.0000000001,
    age:1,
};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne.astronautID = Math.round(Math.random()*10);
salamander.astronautID = Math.round(Math.random()*10);
ChimpanzeeTwo.astronautID = Math.round(Math.random()*10);
BeagleOne.astronautID = Math.round(Math.random()*10);
TardigradeOne.astronautID = Math.round(Math.random()*10);

//Add a method
superChimpOne.move = function() {
  let steps = Math.floor(Math.random()*11);
  return steps;
}
salamander.move = function() {
  let steps = Math.floor(Math.random()*11);
  return steps;
}
ChimpanzeeTwo.move = function() {
  let steps = Math.floor(Math.random()*11);
  return steps;
}
BeagleOne.move = function() {
  let steps = Math.floor(Math.random()*11);
  return steps;
}
TardigradeOne.move = function() {
  let steps = Math.floor(Math.random()*11);
  return steps;
}

// Create an array to hold the animal objects.
let nonHumanAnimals = [superChimpOne, salamander, ChimpanzeeTwo, BeagleOne, TardigradeOne];

// Print out the relevant information about each animal.
function crewReports(animal) {
  return `${animal.name} is a ${animal.species} . They are ${animal.age}  years old and ${animal.mass}  kilograms. Their ID is ${animal.astronautID} .`
}
console.log(crewReports(nonHumanAnimals[3]));

// Start an animal race!

function fitnessTest(arr) {
  let numSteps = [];
  
  for(let i = 0; i < arr.length; i++){
    let steps = 0;
    let result = "";
    let moves = 0;
    
    while(steps < 20){
      steps = steps + arr[i].move();
      moves = moves + 1;
      result = `${arr[i].name} took ${moves} turns to take 20 steps.`
    }
    
    numSteps.push(result);
  }
  return numSteps;
}

console.log(fitnessTest(nonHumanAnimals));
