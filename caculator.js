document.addEventListener('DOMContentLoaded', function () {
  // Select input fields
  const number1Input = document.getElementById('number1');
  const number2Input = document.getElementById('number2');

  // Select buttons
  const addButton = document.getElementById('add');
  const subtractButton = document.getElementById('subtract');
  const multiplyButton = document.getElementById('multiply');
  const divideButton = document.getElementById('divide');

  // Select result display
  const resultSpan = document.getElementById('calculation-result');

  function add(number1, number2) {
    return number1 + number2;
  }

  function subtract(number1, number2) {
    return number1 - number2;
  }

  function multiply(number1, number2) {
    return number1 * number2;
  }

  function divide(number1, number2) {
    if (number2 === 0) {
      return 'Cannot divide by 0';
    }
    return number1 / number2;
  }

  // Event listeners
  addButton.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });

  subtractButton.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });

  multiplyButton.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });

  divideButton.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  });
});
