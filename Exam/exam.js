function solve(input){
    let stutentsCount = Number(input[0]);
    let lower = 0;
    let middle = 0;
    let good = 0;
    let excelent = 0;
    let average = 0;

    for (let i = 1; i <= stutentsCount; i++){
        grade = Number(input[i]);
        if (grade >= 2 && grade <= 2.99){
            lower ++;
            average += grade;
        } else if (grade >= 3 && grade <= 3.99) {
            middle++;
            average += grade;
        } else if (grade >= 4 && grade <= 4.99) {
            good ++;
            average += grade;
        } else if (grade >= 5) {
            excelent ++;
            average += grade;
        }
    }
    let totalGrades = lower + middle + good + excelent
    let totalAverage = average / totalGrades

    console.log(`Top students: ${((excelent / stutentsCount) * 100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${((good / stutentsCount) * 100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${((middle / stutentsCount) * 100).toFixed(2)}%`)
    console.log(`Fail: ${((lower / stutentsCount) * 100).toFixed(2)}%`)
    console.log(`Average: ${totalAverage.toFixed(2)}`)
}

solve(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])

solve(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])
