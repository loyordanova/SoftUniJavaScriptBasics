function FishTank(input){
    const myArray = input.map(Number);
    let [lenght, width, height, percent] = myArray;
    let volume = lenght * width * height
    let inLt = volume / 1000
    let result = inLt * (1 - percent / 100)
    console.log(result)

}

FishTank(["85 ",
"75 ",
"47 ",
"17 "]
)