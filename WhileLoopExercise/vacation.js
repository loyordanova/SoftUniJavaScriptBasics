function vacation(input) {
    let moneyNeededForTrip = Number(input.shift());
    let currentMoney = Number(input.shift());
    let index = 0;
    let spendDays = 0;
    let collectedMoney = currentMoney;
    let daysPassed = 0;

    while (collectedMoney < moneyNeededForTrip) {
         if (spendDays === 5) {
                console.log(`You can't save the money.\n${daysPassed}`)
                return;
            }
        
        let activity = input[index];
        let amount = Number(input[index + 1]);
        index += 2;
        daysPassed ++;

        if (activity === 'spend') {
            collectedMoney -= amount
            spendDays ++;

            if (collectedMoney < 0) {
                collectedMoney = 0;
            }
        } else if (activity === 'save') {
            collectedMoney += amount;
            spendDays = 0;
        }
      
    }
    console.log(`You saved the money for ${daysPassed} days.`)
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
