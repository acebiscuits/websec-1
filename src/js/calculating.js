document.addEventListener("DOMContentLoaded", function () {
    const numInputs = document.querySelectorAll(".input_val");
    const operatorSelect = document.querySelector(".operator");
    const calculateButton = document.querySelector(".calculate_button");
    const resultDiv = document.querySelector(".result");

    let history = [];

    function calculateResult() {
        let num1 = parseFloat(numInputs[0].value);
        let num2 = parseFloat(numInputs[1].value);
        let operator = operatorSelect.value;
        let result;

        

        if (isNaN(num1)) {
            numInputs[0].textContent = "need both digits";
            numInputs[0].classList.add("error_class");
        }
        else
        {
            numInputs[0].classList.remove("error_class");
        }
        if (isNaN(num2)) {
            num2.textContent = "need both digits";
            numInputs[1].classList.add("error_class");
            return;
        }
        else
        {
            numInputs[1].classList.remove("error_class");
        }

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "need both digits";
            return;
        }

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    resultDiv.textContent = "div by 0";
                    return;
                }
                result = num1 / num2;
                break;
            default:
                resultDiv.textContent = "default";
                return; 
        }

        let newResultDiv = document.createElement("span");
        newResultDiv.textContent = `${num1} ${operator} ${num2} = ${result}`;

        history.push(newResultDiv);

        if (history.length > 3) {
            history.shift();
        }

        resultDiv.innerHTML = "";
        history.forEach((entry, index) => {
            if (index !== history.length - 1) {
                entry.classList.add("result");
                entry.classList.add("result_history");
            } else {
                entry.classList.remove("result_history");
            }
            resultDiv.appendChild(entry);
            resultDiv.appendChild(document.createElement("br"));
        });
    }

    calculateButton.addEventListener("click", calculateResult);
});
