function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let numbers = [];
    for (let i = start; i < end; i ++) {
        if (i % 9 === 0) {
            sum += i
            numbers.push(i)
        }
    }console.log(`The sum: ${sum}`)
    numbers.forEach(num => console.log(num))
}
solve(['100', '200'])