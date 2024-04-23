function time(input){
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = minutes + 15
    let totalHours = hour + totalMinutes

    if (totalMinutes >= 60) {
        totalMinutes = totalMinutes % 60
        add_minutes = ~~((minutes + 15) /60 )
        totalHours = hour + add_minutes
    } else {
        totalHours = hour
    }

    if (totalMinutes === 60){
        totalMinutes = 0
    }


    if (totalHours > 24) {
        totalHours = ~~(totalHours / 24)
    }

    if (totalHours === 24){
        totalHours = 0
    }

    if (totalMinutes < 10){
        console.log(`${totalHours}:0${totalMinutes}`)
    } else {
        console.log(`${totalHours}:${totalMinutes}`)
    }
}

time(['1', '46'])