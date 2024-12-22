
    const display = document.querySelector('.display');

    // Function to append value to the display
    function appendValue(value) {
      display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
      display.value = '';
    }

    // Function to delete the last character
    function deleteLast() {
      display.value = display.value.slice(0, -1);
    }

    // Function to calculate the result
    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }
