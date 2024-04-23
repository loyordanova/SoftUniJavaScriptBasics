function hotel(input) {
    let stay = Number(input[0]) - 1;
    let type = input[1];
    let score = input[2];

    let stayPrice;
    
    if (stay < 10) {
        if (type === 'apartment') {
            price = stay * 25;
            stayPrice = price - price * 0.30;
        } else if (type === 'president apartment') {
            price = stay * 35;
            stayPrice = price - price * 0.35;
        } else {
            stayPrice = stay * 18;
        }

    } else if (stay >= 10 && stay <= 15) {
        if (type === 'apartment') {
            price = stay * 25;
            stayPrice = price - (price * 0.35);
        } else if (type === 'president apartment') {
            price = stay * 35;
            stayPrice = price - price * 0.15;
        } else {
            stayPrice = stay * 18;
        }

    } else if (stay > 15) {
        if (type === 'apartment') {
            price = stay * 25;
            stayPrice = price - price * 0.50;
        } else if (type === 'president apartment') {
            price = stay * 35;
            stayPrice = price - price * 0.20;
        } else {
            stayPrice = stay * 18;
        }

    }

    if (score === 'positive') {
        stayPrice = stayPrice + stayPrice * 0.25
    } else {
        stayPrice = stayPrice - stayPrice * 0.10
    }
    console.log(stayPrice.toFixed(2))
}


hotel(["30",
"president apartment",
"negative"])
