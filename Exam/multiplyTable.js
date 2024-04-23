function multiplicationTable(input) {
    let number = Number(input[0]);

    let firstDigit = Math.floor(number / 100);
    let secondDigit = Math.floor((number / 10) % 10);
    let thirdDigit = number % 10;

    for (let i = 1; i <= thirdDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= firstDigit; k++) {
                let result = k * j * i;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}

multiplicationTable(['324']);
