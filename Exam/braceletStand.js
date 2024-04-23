function solve(input) {
    let change = Number(input[0]);
    let profitPerDay = Number(input[1]);
    let totalExpenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let totalSavings = change * 5;
    let Profit = 5 * profitPerDay;
    let totalProfit = totalSavings + Profit;
    let expencess = totalProfit - totalExpenses;



    if (expencess >= giftPrice) {
        console.log(`Profit: ${expencess.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log(`Insufficient money: ${(giftPrice - expencess).toFixed(2)} BGN.`)
    }
}

solve(["5.12",
"32.05",
"15",
"150"])

solve(["2.10",
"17.50",
"20.20",
"148.50"])
