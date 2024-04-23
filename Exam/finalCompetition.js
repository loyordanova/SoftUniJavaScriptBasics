function solve(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let price;

    if (place === 'Bulgaria') {
        price = points * dancers;
        if (season === 'summer'){
            price -= price * 0.05;
        } else if (season === 'winter'){
            price -= price * 0.08;
        }
    } else if (place === 'Abroad') {
        let result = points * dancers;
        price = result + (result * 0.5);
        if (season === 'summer'){
            price -= price * 0.10;
        } else if (season === 'winter') {
            price -= price * 0.15;
        }
    }

    let charity = price * 0.75;
    price -= charity
    let pricePerDancer = price / dancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${pricePerDancer.toFixed(2)}`);
}

solve(["25",
"98",
"winter",
"Bulgaria"])
