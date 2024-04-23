function tennis(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let totalPoints = initialPoints;
    let winning = 0;

    for (i = 2; i < input.length; i ++) {
        let current = input[i];

        if (current === 'W') {
            totalPoints += 2000;
            winning ++;
        } else if (current === 'F') {
            totalPoints += 1200;
        } else if (current === 'SF') {
            totalPoints += 720;
        }
    } 
    let avaeragePoints = Math.floor((totalPoints - initialPoints) / tournamentsCount )
    let wonGamesPercentage = winning / tournamentsCount * 100

    console.log(`Final points: ${totalPoints}\nAverage points: ${avaeragePoints}\n${wonGamesPercentage.toFixed(2)}%`)

}

tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
