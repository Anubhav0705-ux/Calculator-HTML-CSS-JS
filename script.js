const display = document.getElementById('display');
    let memory = 0;

    function appendToDisplay(value) {
      if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }

    function clearDisplay() {
      display.textContent = '0';
    }

    function calculate() {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    }

    function squareRoot() {
      try {
        display.textContent = Math.sqrt(eval(display.textContent));
      } catch {
        display.textContent = 'Error';
      }
    }

    function reciprocal() {
      try {
        display.textContent = 1 / eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    }

    function toggleSign() {
      try {
        display.textContent = eval(display.textContent) * -1;
      } catch {
        display.textContent = 'Error';
      }
    }

    function memoryAdd() {
      memory += Number(eval(display.textContent));
    }

    function memorySubtract() {
      memory -= Number(eval(display.textContent));
    }

    function memoryRecall() {
      display.textContent = memory;
    }

    function memoryClear() {
      memory = 0;
    }