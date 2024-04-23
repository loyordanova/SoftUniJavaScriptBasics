function train(input) {
    let juri = Number(input.shift());
    let index = 0;
    let finalGrades = 0;
    let countGrades = 0;
    

    while (true) {
        let command = input[index];
        if (command === 'Finish'){
            console.log(`Student's final assessment is ${(finalGrades / countGrades).toFixed(2)}.`)
            break;
        }
        let currentGrade = 0;
        for (let i = 1; i <= juri; i++) {
           let num = Number(input[++index]); 
           currentGrade += num;
           countGrades ++;
           finalGrades += num
        }
        console.log(`${command} - ${(currentGrade / juri).toFixed(2)}.`)
        index ++;
    }
}

train(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
