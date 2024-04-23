function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let qty = Number(input[2]);
    let result = 0;

    const workday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekday = ['Saturday', 'Sunday'];

    let workdayDict = {'banana': 2.50, 'apple': 1.20, 'orange': 0.85, 'grapefruit': 1.45, 'kiwi': 2.70, 'pineapple': 5.50, 'grapes': 3.85}
    let weekdayDict = {'banana': 2.70, 'apple': 1.25, 'orange': 0.90, 'grapefruit': 1.60, 'kiwi': 3.00, 'pineapple': 5.60, 'grapes': 4.20}

    if (workday.includes(day)) {
        result = (workdayDict[product] * qty).toFixed(2);
    } else if (weekday.includes(day)) {
        result = (weekdayDict[product] * qty).toFixed(2);
    } else {
        result = 'error'
    }

    if (!weekdayDict.hasOwnProperty(product)) {
        result = 'error'
    } else if (!workdayDict.hasOwnProperty(product)) {
        result = 'error'
    }

    console.log(result)
}

fruitShop(['appl', 'Tuesday', '2'])