function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesFinalPrice = puzzles * 2.60;
    let dollsFinalPrice = dolls * 3;
    let bearsFinalPrice = bears * 4.10;
    let minionsFinalPrice = minions * 8.20;
    let trucksFinalPrice = trucks * 2;

    let totalPrice = puzzlesFinalPrice + dollsFinalPrice + bearsFinalPrice + minionsFinalPrice + trucksFinalPrice
    let toysCount = puzzles + dolls + bears + minions + trucks;

    if (toysCount >= 50){
        totalPrice *= 0.75;
    }

    let priceAfterRent = totalPrice * 0.90;
 
    if (priceAfterRent >= tripPrice) {
        console.log(`Yes! ${(priceAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - priceAfterRent).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
