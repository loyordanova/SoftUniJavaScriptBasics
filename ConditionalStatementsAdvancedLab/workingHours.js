function workingTime(input) {
    let time = Number(input[0]);
    let day = input[1];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (time >=10 && time < 18 && days.includes(day)) {
        console.log(`open`)
    } else {
        console.log(`closed`)
    }
}

workingTime(['11', 'Monday'])

workingTime(['19', 'Friday'])