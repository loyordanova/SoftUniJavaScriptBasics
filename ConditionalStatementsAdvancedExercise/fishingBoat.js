function fishing(input) {
    let budget = input[0];
    let season = input[1];
    let fishers = Number(input[2]);
    let price = 0;

    if (season === 'Summer' || season === 'Autumn') {
        price = 4200;
    } else if (season === 'Spring') {
        price = 3000;
    } else if (season === 'Winter') {
        price = 2600;
    }
    
    if (fishers <= 6) {
        price -= price * 0.1
    } else if (fishers <= 11) {
        price -= price * 0.15
    } else if (fishers >= 12) {
        price -= price * 0.25
    }

    if (fishers % 2 == 0 && season !== 'Autumn') {
        price -= price * 0.05
    }

    if (budget >= price) {
         console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget - price).toFixed(2)} leva.`)
    }
   
}

fishing(["3000",
"Summer",
"11"])
