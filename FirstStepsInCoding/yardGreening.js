function yardGreening(input) {
    let greening = Number(input[0]) * 7.61
    let discount = greening * 0.18
    let result = greening - discount
    console.log(`The final price is: ${result} lv.`)
    console.log(`The discount is: ${discount} lv.`)
    
}

yardGreening(['550'])