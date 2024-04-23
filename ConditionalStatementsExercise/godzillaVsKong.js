function goszillaVsKong(input){
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let costumePrice = Number(input[2]);

    let movieDecor = budget * 0.10;
    let totalCostumePrice = statist * costumePrice;

    if(statist > 150) {
        totalCostumePrice = totalCostumePrice * 0.90;
    }

    let totalExpenses = movieDecor + totalCostumePrice;
    let leftMoney = budget - totalExpenses

    

    if (leftMoney >= 0) {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${Math.abs(leftMoney).toFixed(2)} leva more.`)
    }

}

goszillaVsKong(["9587.88",
"222",
"55.68"])
