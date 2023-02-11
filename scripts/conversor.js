//Conversor: Octal to Decimal

const zeroValue = (document.getElementById("result").innerHTML = `0`);

function calculate(operation) {
  var input1 = parseFloat(document.getElementById("input-1").value) || 0;
  let resultArray = [];

  switch (operation) {
    case "Binary":
      //Still in progress
      break;

    case "Octa":
      //Still in progress
      break;

    case "Decimal":
      let octal = parseFloat(input1);
      let dOctal = [...(octal + "")];
      let results2 = 0;
      dOctal.reverse();

      for (let [ind, value] of dOctal.entries()) {
        let calcElevate = value * 8 ** ind;
        results2 += calcElevate;
        resultArray.push(results2);
        document.getElementById("result").innerHTML = `${
          resultArray[resultArray.length - 1]
        } Decimal`;
      }
      break;

    case "Hexadecimal":
      //Still in progress
      break;

    default:
      zeroValue;
      break;
  }
}
