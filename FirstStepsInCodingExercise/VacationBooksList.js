function VacationBooksList(input) {
    const myArray = input.map(Number);
    let [numPages, pagesPerHour, days] = myArray;
    let neededTime = numPages / pagesPerHour;
    let neededHoursPerDay = neededTime / days;
    console.log(neededHoursPerDay)
}

VacationBooksList(["212 ",
"20 ",
"2 "]
)