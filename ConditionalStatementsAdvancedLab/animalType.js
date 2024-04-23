function animalType(input){
    let word = input[0];
    const reptile = ['crocodile', 'tortoise', 'snake']

    if (word === 'dog'){
        console.log(`mammal`)
    } else if (reptile.includes(word)) {
        console.log(`reptile`)
    } else {
        console.log(`unknown`)
    }
}

