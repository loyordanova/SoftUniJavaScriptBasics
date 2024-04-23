function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfJury = Number(input[2]);

    let totalPoints = academyPoints;

    for (i = 3; i <= 3 + 2 * numberOfJury - 1; i += 2) {
        let juryName = input[i];
        let juryPoints = Number(input[i + 1]);

        let currentPoints = juryName.length * juryPoints / 2;
        totalPoints += currentPoints;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = (1250.5 - totalPoints).toFixed(1);
    console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
