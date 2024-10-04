
const display = document.querySelector('input[type="text"]');


const buttons = document.querySelectorAll('input[type="button"]');


let currentInput = '';
let resultDisplayed = false;


buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.value;


        if (value === 'C') {
            currentInput = '';

            display.value = '';
            resultDisplayed = false;
        }

        else if (value === '=') {
            try {
                currentInput = eval(currentInput); 
                display.value = currentInput;
                resultDisplayed = true;
            } catch (error) {
                display.value = 'Error';  
                currentInput = '';
            }
        }

        else {

            if (resultDisplayed) {
                currentInput = '';
                resultDisplayed = false;
            }


            currentInput += value;
            display.value = currentInput;
        }
    });
});
