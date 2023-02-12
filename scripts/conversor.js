//Conversor

const zeroValue = (document.getElementById("result").innerHTML = `0`);

function calculate(operation) {
  var input1 = parseFloat(document.getElementById("input-1").value) || 0;
  let resultArray = [];

  switch (operation) {
    case "Binary":
      let deciBin = parseFloat(input1);
      let binDiv = 0;
      let remBinTotal = [];
      let binResul = [];

      while (deciBin >= 2) {
        binDiv = deciBin;
        deciBin /= 2;
        binDiv %= 2;
        binResul.push(Math.trunc(deciBin));
        remBinTotal.push(Math.trunc(binDiv));
      }

      let binInfo = binResul.slice(-1);
      remBinTotal.push(...binInfo);
      remBinTotal.reverse();
      let bDeci = parseInt(remBinTotal.toString().replaceAll(",", ""));
      document.getElementById("result").innerHTML = `${bDeci} Binary`;

      break;

    case "Octa":
      let deci = parseFloat(input1);
      let deciDiv = 0;
      let remTotal = [];
      let deciResul = [];

      while (deci >= 8) {
        deciDiv = deci;
        deci /= 8;
        deciDiv %= 8;
        deciResul.push(Math.trunc(deci));
        remTotal.push(Math.trunc(deciDiv));
      }

      let octInfo = deciResul.slice(-1);
      remTotal.push(...octInfo);
      remTotal.reverse();
      let oDeci = parseInt(remTotal.toString().replaceAll(",", ""));
      document.getElementById("result").innerHTML = `${oDeci} Octal`;

      break;

    case "Decimal":
      function containsNumbers(str) {
        return /[2-9]/.test(str);
      }

      let infoBD = containsNumbers(parseFloat(input1));

      if (infoBD == true) {
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
      } else {
        let binValue = parseFloat(input1);
        let dBin = [...(binValue + "")];
        let resulBin = 0;
        dBin.reverse();

        for (let [ind, value] of dBin.entries()) {
          let calcElevate = value * 2 ** ind;
          resulBin += calcElevate;
          resultArray.push(resulBin);
          document.getElementById("result").innerHTML = `${
            resultArray[resultArray.length - 1]
          } Decimal`;
        }
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
