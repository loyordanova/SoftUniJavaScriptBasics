function walking(stepsArray) {
    const goal = 10000;
    let totalSteps = 0;
    let index = 0;
    let row = stepsArray[index];

    while (row !== 'Going home') {
        let steps = Number(row);
        totalSteps += steps;

        if (totalSteps >= goal) {
            console.log(`Goal reached! Good job!\n${totalSteps - goal} steps over the goal!`);
            return;
        }

        index++;
        row = stepsArray[index];
    }

    let stepToHome = Number(stepsArray[index + 1]);
    totalSteps += stepToHome;

    if (totalSteps >= goal) {
        console.log(`Goal reached! Good job!\n${totalSteps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - totalSteps} more steps to reach goal.`);
    }
}

walking(["1000",
"1500",
"2000",
"6500"])

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
