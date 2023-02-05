// Resistance Calculator

/*

Parallel and Series calculator

*/

var inputCount = 1;

function addInput() {
  var inputsContainer = document.getElementById("inputsContainer");
  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "input" + inputCount;
  inputsContainer.appendChild(newInput);
  inputCount++;
}

/*

function calculate(operation) {
  var result = parseFloat(document.getElementById("input1").value) || 0;
  for (var i = 1; i < inputCount; i++) {
    var value = parseFloat(document.getElementById("input" + i).value) || 0;
    if (operation) {
      if ("Series") result += value;
    } else {
      result * value;
    }
  }
  document.getElementById("result").innerHTML = result;
}
*/

function calculate(operation) {
  var input1 = parseFloat(document.getElementById("input-1").value) || 0;
  var input2 = parseFloat(document.getElementById("input-2").value) || 0;

  switch (operation) {
    case "Series":
      let resultSum = input1 + input2;
      document.getElementById("result").innerHTML = `${resultSum} Ohms`;
      break;

    case "Parallel":
      let resultParal = (input1 * input2) / (input1 + input2);
      document.getElementById("result").innerHTML = `${resultParal} Ohms`;
      break;

    default:
      null;
  }
}
