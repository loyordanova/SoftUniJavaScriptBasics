function newHome(input){
    let flower = input[0];
    let number = Number(input[1]);
    let budget = Number(input[2]);
    let finalPrice = 0;

    if (flower === 'Roses') {
        finalPrice = number * 5;
        if(number > 80) {
            finalPrice -= finalPrice * 0.1
        }
    } else if (flower === 'Dahlias') {
        finalPrice = number * 3.80;
        if (number >90) {
            finalPrice -= finalPrice * 0.15
        }
    } else if (flower === 'Tulips') {
        finalPrice = number * 2.80;
        if (number > 80) {
            finalPrice -= finalPrice * 0.15
        }
    } else if (flower === 'Narcissus') {
        finalPrice = number * 3;
        if (number < 120) {
            finalPrice += finalPrice * 0.15
        }
    } else if (flower === 'Gladiolus') {
        finalPrice = number * 2.50;
        if (number < 80) {
            finalPrice += finalPrice * 0.20
        }
    }

    if (budget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${number} ${flower} and ${(budget - finalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${Math.abs(budget - finalPrice).toFixed(2)} leva more.`)
    }
}

newHome(["Tulips",
"88",
"260"])
