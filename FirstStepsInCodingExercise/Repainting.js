function repaint(input){
    const myArray = input.map(Number);
    let [nylon, paint, thinner, hours] = myArray;
    let calculate = ((nylon + 2) * 1.5) + ((paint + (paint * 0.1)) * 14.50) + (thinner * 5) + 0.4
    let final = ((calculate * 0.3) * hours)
    console.log(final + calculate)
    
}

repaint(["10 ",
"11 ",
"4 ",
"8 "]
)