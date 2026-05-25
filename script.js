const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (button.id === 'clear') {
      expression = '';
      display.value = '';
      return;
    }

    if (button.id === 'equals') {
      if (!expression) return;
      try {
        const result = eval(expression);
        display.value = String(result);
        expression = String(result);
      } catch (error) {
        display.value = 'Error';
        expression = '';
      }
      return;
    }

    expression += value;
    display.value = expression;
  });
});
