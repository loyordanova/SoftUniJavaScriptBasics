function solve(input) {
    let index = 0;
    let command = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== 'stop') {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;

            if (num === 0 || num === 1) {
                isPrime = false;
            } else {
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime) {
                primeSum += num;
            } else {
                nonPrimeSum += num;
            }
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

solve(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
