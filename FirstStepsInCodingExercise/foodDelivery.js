function FoodDelivery(input){
    const myArray = input.map(Number);
    let [chicken, fish, veggie] = myArray;
    let menu = ((chicken * 10.35) + (fish * 12.4) + (veggie * 8.15))
    let dessert = (menu * 0.2)
    let result = menu + dessert + 2.5
    console.log(result)
}

FoodDelivery(["2 ",
"4 ",
"3 "]
)