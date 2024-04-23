function calculateArea(input) {
    let figure = input[0]
    switch (figure) {
        case "square":
            console.log((Number(input[1]) * Number(input[1])).toFixed(3)); break ;
        case 'rectangle':
            console.log((Number(input[1]) * Number(input[2])).toFixed(3)); break;
        case 'circle':
            console.log((Math.PI * Number(input[1]) * Number(input[1])).toFixed(3)); break;
        case 'triangle':
            console.log((((Number(input[1]) * Number(input[2])) / 2)).toFixed(3)); break;
        default:
            console.log('Invalid figure'); break;
    }
}
calculateArea((["square", "5"]))