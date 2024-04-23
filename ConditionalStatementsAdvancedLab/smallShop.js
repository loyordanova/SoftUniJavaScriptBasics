function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let qty = Number(input[2]);
    let price = 0;

    if (town === 'Sofia') {
        switch (product) {
            case "coffee": price = qty * 0.50; break;
            case "water": price = qty * 0.80; break;
            case "beer": price = qty * 1.20; break;
            case "sweets": price = qty * 1.45; break;
            case "peanuts": price = qty * 1.60; break;
        }
    } else if (town === "Plovdiv") {
        if (product === 'coffee') {
            price = qty * 0.40;
        } else if (product === 'water') {
            price = qty * 0.70;
        } else if (product === 'beer') {
            price = qty * 1.15;
        } else if (product === 'sweets') {
            price = qty * 1.30;
        } else if (product === 'peanuts') {
            price = qty * 1.50;
        }
    } else {
        switch (product) {
            case "coffee": price = qty * 0.45; break;
            case "water": price = qty * 0.70; break;
            case "beer": price = qty * 1.10; break;
            case "sweets": price = qty * 1.35; break;
            case "peanuts": price = qty * 1.55; break;
        }
    }
    console.log(price)
}

smallShop(['coffee','Varna', '2'] )