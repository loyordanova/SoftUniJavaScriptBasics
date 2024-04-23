function trekkingMania (input) {
    let numberOfGroups = Number(input[0]);
    let peopleInGroup = Number(input[1]);

    let MusalaPeak = 0;
    let MonblanPeak = 0;
    let KilimandgaroPeak = 0;
    let K2Peak = 0;
    let EverestPeak = 0;

    let totalPpl = 0;

    for (i = 1; i < input.length; i++) {
        let currentInput = Number(input[i]);

        if (currentInput <= 5) {
            MusalaPeak += currentInput;
        } else if (currentInput >= 6 && currentInput <= 12) {
            MonblanPeak += currentInput;
        } else if (currentInput >= 13 && currentInput <= 25) {
            KilimandgaroPeak += currentInput;
        } else if (currentInput >= 26 && currentInput <= 40) {
            K2Peak += currentInput;
        } else if (currentInput >= 41) {
            EverestPeak += currentInput;
        }

        totalPpl += currentInput;
    }
    MusalaPeak = ((MusalaPeak / totalPpl * 100).toFixed(2))
    MonblanPeak = ((MonblanPeak / totalPpl * 100).toFixed(2))
    KilimandgaroPeak = ((KilimandgaroPeak / totalPpl * 100).toFixed(2))
    K2Peak = ((K2Peak / totalPpl * 100).toFixed(2))
    EverestPeak = ((EverestPeak / totalPpl * 100).toFixed(2))

    console.log(`${MusalaPeak}%`)
    console.log(`${MonblanPeak}%`)
    console.log(`${KilimandgaroPeak}%`)
    console.log(`${K2Peak}%`)
    console.log(`${EverestPeak}%`)
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
