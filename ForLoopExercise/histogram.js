function histogram(input) {
    let number = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (i = 1; i <= number; i ++) {
        let currnetNumber = Number(input[i])

        if (currnetNumber < 200) {
            p1 ++;
        } else if (currnetNumber >= 200 && currnetNumber <= 399) {
            p2 ++;
        } else if (currnetNumber >= 400 && currnetNumber <= 599) {
            p3 ++;
        } else if (currnetNumber >= 600 && currnetNumber <= 799) {
            p4 ++;
        } else {
            p5 ++;
        }
    }


p1 = (p1 / number * 100).toFixed(2);
p2 = (p2 / number * 100).toFixed(2);
p3 = (p3 / number * 100).toFixed(2);
p4 = (p4 / number * 100).toFixed(2);
p5 = (p5 / number * 100).toFixed(2);

console.log(`${p1}%\n${p2}%\n${p3}%\n${p4}%\n${p5}%`);
}

histogram(["3",
"1",
"2",
"999"])
