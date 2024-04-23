function weekdayOrWorkday(input) {
    const workday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const weekday = ['Saturday', 'Sunday'];
    let word = input[0];

    if (workday.includes(word)) {
        console.log(`Working day`)
    } else if (weekday.includes(word)){
        console.log(`Weekend`)
    }else {
        console.log(`Error`)
    }

}

weekdayOrWorkday(['Monday'])