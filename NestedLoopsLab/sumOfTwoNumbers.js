function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let comb1 = 0;

    for (i = start; i <= end; i ++) {
        for (x = start; x <= end; x ++) {
            combinations ++;

            if (i + x === magicNumber) {
                comb1 ++;
                let n1 = i;
                let n2 = x;
                if (comb1 === 1) {
                    console.log(`Combination N:${combinations} (${n1} + ${n2} = ${magicNumber})`)
                    break;
                }
            }
        }
    }
    if (comb1 === 0) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }
}

sumOfTwoNumbers(["1",
"10",
"5"])
