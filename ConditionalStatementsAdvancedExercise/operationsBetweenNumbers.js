function operations(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator  = input[2];
    let result;
    if (operator === '+' || operator === '-' || operator === '*') {
        
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        }

        let resultType = result % 2 === 0 ? 'even' : 'odd';
        console.log(`${num1} ${operator} ${num2} = ${result} - ${resultType}`);

    } else if (operator === '/') {
        if (num2 !== 0){
            result = num1 / num2
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
        } else {
            console.log(`Cannot divide ${num1} by zero`)
        }

    } else if (operator === '%') {
        if (num2 !== 0){
            result = num1 % num2
            console.log(`${num1} % ${num2} = ${result}`)
        } else {
            console.log(`Cannot divide ${num1} by zero`)
        }
    }
}

operations(["10",
"0",
"%"])
