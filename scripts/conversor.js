//Conversor: Octal to Decimal

let octal = [37246];
//To separate the numbers
let dOctal = [...(octal + "")];
let results2 = 0;
dOctal.reverse();

for (let [ind, value] of dOctal.entries()) {
  let calcElevate = value * 8 ** ind;
  results2 += calcElevate;
  console.log(calcElevate);
}

console.log(results2);
