// Resistance Calculator

/*
 * addInput() creates a new input box when the button is pressed
 */
function addInput() {
  var inputsContainer = document.getElementById("inputsEntries");
  var newInput = document.createElement("inputAdditional");
  newInput.type = "number";
  newInput.id = "input" + inputCount;
  inputsContainer.appendChild(newInput);
  inputCount++;
}

/*

* We need to create a function that will calculate differently when more than 2 input boxes are being used.

* The for loop below is being used to count through the array of new input boxes.
* The calculation process is not working yet.

function calculate(operation) {
  for (var i = 1; i < inputCount; i++) {
    var value = parseFloat(document.getElementById("input" + i).value) || 0;
  }
};

*/

function calculate(operation) {
  var input1 = parseFloat(document.getElementById("input-1").value) || 0;
  var input2 = parseFloat(document.getElementById("input-2").value) || 0;

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
      null;
  }
}
