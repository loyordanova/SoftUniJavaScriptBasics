function Supplies(input){
    let pens = 5.8;
    let markers = 7.2;
    let detergent = 1.2;
    const myArray = input.map(Number);
    let [penPrice, markerPrice, detergentPrice, discount] = myArray;
    let total = penPrice * pens + markerPrice * markers + detergentPrice * detergent;
    let result = total - (total * (discount / 100));
    console.log(result) 
}

Supplies(["4 ",
"2 ",
"5 ",
"13 "]

)