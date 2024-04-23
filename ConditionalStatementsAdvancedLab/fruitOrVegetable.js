function fruitOrVegetable(input) {
    const fruit = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    const vegetable = ['tomato', 'cucumber', 'pepper', 'carrot'];
    let word = input[0];
    result = ''

    if (fruit.includes(word)) {
        result = 'fruit';
    } else if (vegetable.includes(word)) {
        result = 'vegetable'
    } else {
        result = 'unknown'
    }
    console.log(result)
}

fruitOrVegetable(['banan'])