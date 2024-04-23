function printPyramid(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            if (num <= n) {
                row += num + " ";
                num++;
            }
        }
        console.log(row);
    }
}

printPyramid(['6'])