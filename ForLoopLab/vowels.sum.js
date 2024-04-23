function solve(input) {
    let text = input[0];
    var dict = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}
    let sum = 0;
    for (let i = 0; i <= text.length; i ++) {
        if (text[i] in dict) {
            sum += dict[text[i]];
        }
    }
    console.log(sum);
}

solve(['hello'])