function cleverLily(input) {
    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let money = 0;
    let totalMoney = 0;
    let toysCount = 0;

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += 10
            totalMoney += money - 1
            
        } else {
            toysCount ++;
        }
    } totalMoney += toysCount * pricePerToy

    if (totalMoney >= laundryPrice) {
        console.log(`Yes! ${(totalMoney - laundryPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(laundryPrice - totalMoney).toFixed(2)}`)
    }
}

cleverLily(["9",
"170.00",
"6"])
