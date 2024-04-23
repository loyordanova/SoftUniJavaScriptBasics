function solve(input) {
    let target = Number(input.shift())
    let index = 0;
    let total = 0;
    let command = input[index];

    while (command !== 'closed' && total < target) {
        let type = input[index + 1];

        if (command === 'haircut') {
            if (type === 'mens') {
                total += 15;
            } else if (type === 'ladies') {
                total += 20;
            } else if (type === 'kids') {
                total += 10;
            }
        } else if (command === 'color') {
            if (type === 'touch up') {
                total += 20;
            } else if (type === 'full color') {
                total += 30;
            }
        }
        index ++;
        command = input[index];
    }
    if (total >= target) {
        console.log('You have reached your target for the day!')
    } else {
        console.log(`Target not reached! You need ${target - total}lv. more.`)
    }

    console.log(`Earned money: ${total}lv.`)
}

solve(["50",
"color",
"full color",
"haircut",
"ladies"])

