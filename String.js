let num = 123.45;

let stringNum = String(num);
console.log(stringNum)
console.log(stringNum.length)
console.log(stringNum.replace('.','' ).length)

if (stringNum.includes(".")) {
  console.log(stringNum.replace(".", "").length);
} else {
  console.log(stringNum.length);
}

if (stringNum.indexOf(".") != -1) {
  console.log(stringNum.replace(".", "").length);
} else {
  console.log(stringNum.length);
}



let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    "

console.log(dna.trim());
console.log(dna.toUpperCase());
dna = dna.trim().toUpperCase();
console.log(dna)


console.log(dna.replace('GCT', 'AGG'));

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (dna.indexOf('CAT') != 1 ) {
  console.log('CAT found')
} else {
  console.log('CAT NOT found')
}

let dnaArray = dna.split('-')[4]
console.log(dnaArray)

console.log(`the DNA strand is ${dna.length} characters long`)

let str = 'JavaScript'

console.log(str.slice(0, 1) + str.slice(4,5));

let camelCasing = 'title case'

console.log(camelCasing.replace('t', 'T').replace('c', 'C'))

