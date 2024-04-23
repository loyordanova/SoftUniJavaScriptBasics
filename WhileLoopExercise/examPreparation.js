function exam(input) {
    let badGradesPossible = Number(input.shift());
    let index = 0;
    let badGrades = 0;
    let solvedProblems = 0;
    let totalGrades = 0;

    while (badGrades < badGradesPossible) {
        let problem = input[index];
        if (problem === 'Enough') {

            console.log(`Average score: ${(totalGrades / solvedProblems).toFixed(2)}\nNumber of problems: ${solvedProblems}\nLast problem: ${input[index - 2]}`);
            return;
        }
        let grade = Number(input[index + 1]);
        if (grade <= 4) {
            badGrades++;
        }
        solvedProblems++;
        totalGrades += grade;
        
        index += 2; // Increment index by 2 to move to the next problem and grade
    }
    console.log(`You need a break, ${badGradesPossible} poor grades.`);
}

exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
