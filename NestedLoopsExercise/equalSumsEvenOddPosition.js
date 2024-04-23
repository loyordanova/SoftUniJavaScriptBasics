function solve(input) {
    let first = input[0];
    let second = input[1];
    let numbers = [];

   
    for (i = Number(first); i <= Number(second); i++) {
        let even = 0;
        let odd = 0;
        let numAsString = i.toString();

        for(j = 0; j < numAsString.length; j++) {
            if (j % 2 === 0) {
                even += Number(numAsString[j]);
            } else {
                odd += Number(numAsString[j]);
            }
        }
        if (even === odd) {
            numbers.push(i)
        }
    }
    console.log(...numbers)
}

solve(["100000",
"100050"])
