function greaterNumber(input) {
    const myArray = input.map(Number);
    let [num1, num2] = myArray;
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

greaterNumber(['5','3'])