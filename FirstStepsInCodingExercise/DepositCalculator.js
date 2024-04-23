function DepositCalculator(input) {
    const myArray = input.map(Number);;
    let [depositSum, depositPeriod, yearlyInterest] = myArray;
    let result = depositSum + depositPeriod * ((depositSum * (yearlyInterest / 100)) / 12);
    console.log(result);
}

DepositCalculator(["200 ",
"3 ",
"5.7 "]);
