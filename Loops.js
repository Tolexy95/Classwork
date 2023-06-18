//Exercise #1: Construct for loops that accomplish the following tasks:

// 1A Print the numbers 0 - 20, one number per line.

for (let i = 0; i < 100; i++) {
    console.log("Repetition is a good thing");
  }
  
  for (let i = 0; i < 21; i++) {
    console.log(i);
  }
  // b. Print only the ODD values from 3 - 29, one number per line.
  
  for (let i = 3; i < 30; i = i + 2) {
    console.log(i);
  }
  // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
  
  let even = [12, 13, 14, 15];
  let results = [];
  
  for (let i = 0; i < even.length; i++) {
    results = even[1] + results;
  }
  console.log(results);
  
  for (let i = 12; i > -15; i -= 2) {
    console.log(i);
  }
  
  //  d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers).
  for (i = 50; i > 20; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
  
  //Exercise #2:
  //Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
  
  //Construct ``for`` loops to accomplish the following tasks:
  // a. Print each element of the array to a new line.
  //2 A
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // b. Print each character of the string - in reverse order - to a new line.
  for (i = str.length - 1; i > -1; i--) {
    console.log(str[i]);
  }
  
  //Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  // a. One array contains the even numbers, and the other holds the odds.
  let parentArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evenArr = [];
  let oddArr = [];
  
  for (i = 0; i < parentArr.length; i++) {
    if (parentArr[i] % 2 === 0) {
      evenArr.push(parentArr[i]);
    } else {
      oddArr.push(parentArr[i]);
    }
  }
  console.log(evenArr);
  console.log(oddArr);
  
  //b. Print the arrays to confirm the results.
  
  let startingFuelLevel = 0;
  let astroOnboard = 0;
  let altitude = 0;
  
  while (
    typeof startingFuelLevel === Number ||
    startingFuelLevel < 5000 ||
    startingFuelLevel > 30000
  ) {
    startingFuelLevel = prompt("Enter fuel level: ");
  }
  
  while (astroOnboard < 1 || astroOnboard > 7) {
    astroOnboard = prompt("Enter Number of Astronauts on board:");
  }
  
  let fuelStatus = () => {
    while (startingFuelLevel - 100 * astroOnboard >= 0) {
      altitude += 50;
      startingFuelLevel -= 100 * astroOnboard;
    }
  };
  
  let output = `The shuttle gained an altitude of ${altitude} km.`;
  
  if (altitude >= 2000) {
    alert(output + " Orbit achieved!");
  } else {
    alert(output + " Failed to reach orbit.");
  }
  