function calculate() {
  const input = document.getElementById('numbers').value;
  const operation = document.getElementById('operation').value;
  const resultSpan = document.getElementById('result');

  // Parse input numbers
  const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

  if (numbers.length === 0) {
    resultSpan.textContent = 'Please enter valid numbers.';
    return;
  }

  let result;
  switch (operation) {
    case 'add':
      result = numbers.reduce((acc, curr) => acc + curr, 0);
      break;
    case 'subtract':
      result = numbers.reduce((acc, curr) => acc - curr);
      break;
    case 'multiply':
      result = numbers.reduce((acc, curr) => acc * curr, 1);
      break;
    case 'divide':
      result = numbers.reduce((acc, curr) => {
        if (curr === 0) {
          alert('Division by zero is not allowed.');
          throw new Error('Division by zero');
        }
        return acc / curr;
      });
      break;
    default:
      resultSpan.textContent = 'Invalid operation.';
      return;
  }

  resultSpan.textContent = result;
}