function sequence(input) {
    let number = Number(input[0]);
    let numberToPrint = 1;

    while (numberToPrint <= number) {
        console.log(numberToPrint);
        numberToPrint = numberToPrint * 2 + 1;
    }

}

sequence(['3'])