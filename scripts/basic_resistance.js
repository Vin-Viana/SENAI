// Resistance Calculator

const zeroValue = (document.getElementById("result").innerHTML = `0 Ω`);

var inputCount = 3;
// addInput() creates a new input box when the button is pressed
function addInput() {
  var inputsContainer = document.getElementById("inputsEntries");
  var newInput = document.createElement("input");
  newInput.type = "number";
  newInput.id = "input-" + inputCount;
  inputsContainer.appendChild(newInput);
  inputCount++;
}

function calculate(operation) {
  // collect the freshier values from the input boxes
  var input1 = parseFloat(document.getElementById("input-1").value) || 0;
  var input2 = parseFloat(document.getElementById("input-2").value) || 0;

  if (document.getElementById("input-3")) {
    // will be used later to get the lastest result without looping it
    let resultArray = [];

    // will start from 3 because there's already 2 inputs (the default ones)
    for (var i = 3; i < inputCount; i++) {
      var value = parseFloat(document.getElementById("input-" + i).value) || 0;

      switch (operation) {
        case "Series":
          // collects all the values from the extras input boxes
          resultArray.push(value);

          // '.reduce' is being used to accumulate each iteration of the array and suming it
          // it keeps accumulating and doing the function until the last number on the array is reached
          // when it's reached, the actualValue collects the last result of the function being done on 'return'
          let resultSum = resultArray.reduce(function (
            numArray,
            actualValue = 0
          ) {
            // the actualValue needed to be defined first as 0, bc '.reduce' dont work with empty arrays
            return numArray + actualValue;
          });
          // now it finally collected the last value from the array after looping all and replaced result id
          document.getElementById("result").innerHTML = `${resultSum} Ω`;
          break;

        case "Parallel":
          //prettier-ignore
          let resultParal = parseFloat(1/((1/input1) + (1/input2) + (1/value)));
          resultArray.push(resultParal);

          // now it finally collected the last value from the array after looping all and replaced result id
          document.getElementById("result").innerHTML = `${
            resultArray[resultArray.length - 1]
          } Ω`;
          break;

        default:
          zeroValue;
          break;
      }
    }
  } else {
    switch (operation) {
      case "Series":
        let resultSum = input1 + input2;
        document.getElementById("result").innerHTML = `${resultSum} Ω`;
        break;

      case "Parallel":
        let resultParal = (input1 * input2) / (input1 + input2);
        document.getElementById("result").innerHTML = `${resultParal} Ω`;
        break;

      default:
        zeroValue;
        break;
    }
  }
}

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * Future ideas  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 1. Put the basic code (2 inputs) inside a modal box on the index page.
 * 2. Insert a button to a 'more complex calculation' inside this modal, and it will switch to the new page containing all this code
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 1. Create a history of already calculated numbers
 * 2. Add these values inside an accordion
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * END.  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
