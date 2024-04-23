function solve(input) {
    let days = Number(input[0]);
    let place = input[1];
    let score = input[2];
    let discount = 0;
    let stay = 0;
    let totalStay = 0;

    if (place === 'room for one person') {
        stay = 18;
        
    } else if (place === 'apartment') {
        stay = 25;
        if (days < 10) {
            discount = 0.30;
        } else if (days >= 10 && days <= 15) {
            discount = 0.35;
        } else if (days > 15) {
            discount = 0.50;
        }
    } else if (place === 'president apartment') {
        stay = 35;
        if (days < 10) {
            discount = 0.10;
        } else if (days >= 10 && days <= 15) {
            discount = 0.15;
        } else if (days > 15) {
            discount = 0.20;
        }
    }
    totalStay = (days - 1) * stay 
    let finalDiscount = totalStay * discount
    totalStay -= finalDiscount

    if (score === 'positive') {
        let addDiscount = totalStay * 0.25
        totalStay += addDiscount
    } else if (score === 'negative'){
        let addDiscount = totalStay * 0.10
        totalStay += addDiscount
    }

    console.log(totalStay.toFixed(2))
}

solve(["30",
"president apartment",
"negative"])
