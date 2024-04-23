function graduation(input) {
    let name = input.shift();
    let gradeCounter = 0;
    let totalGrades = 0;
    let index = 0;

    while (gradeCounter < 12) {
        let grade = Number(input[index]);
        index++;

        if (grade >= 4) {
            gradeCounter++;
            totalGrades += grade;
            if (gradeCounter === 12) {
                console.log(`${name} graduated. Average grade: ${(totalGrades / 12).toFixed(2)}`);
                return;
            }
        } else {
            console.log(`${name} has been excluded at ${gradeCounter + 1} grade`);
            return;
        }
    }

    console.log(`${name} graduated. Average grade: ${(totalGrades / gradeCounter).toFixed(2)}`);
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

