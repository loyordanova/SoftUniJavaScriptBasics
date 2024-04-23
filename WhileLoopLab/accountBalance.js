function balance(input) {
    let index = 0; // Initialize index to 0
    let sum = input[index]; // Access input array using index
    let total = 0;

    while (sum !== 'NoMoreMoney') {
        let amount = Number(sum);
        if (amount < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        total += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        index++; // Increment index for next iteration
        sum = input[index]; // Update sum for next iteration
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

balance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);