function examTime(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalminutes = Number(input[3]);

    let state;
    let diff;

    let totalTimeExam = examHour * 60 + examMinutes
    let totalArrivalTime = arrivalHour * 60 + arrivalminutes

    
    if (totalArrivalTime === totalTimeExam ||  (totalTimeExam - totalArrivalTime) > 0 && (totalTimeExam - totalArrivalTime) <= 30) {
        state = 'On time';
        difference = (totalTimeExam - totalArrivalTime)
        diff = difference;

    } else if (totalTimeExam - totalArrivalTime > 30) {
        state = 'Early';
        difference = (totalTimeExam - totalArrivalTime);
        diff = difference;

    } else if (totalArrivalTime > totalTimeExam) {
        state = 'Late';
        difference = (totalArrivalTime - totalTimeExam)
        diff = difference;
    }

    console.log(state)


    if (state === 'Early' || state === 'On time') {
        if (diff >= 60) {
            console.log(`${~~(diff / 60)}:${(diff % 60) < 10 ? '0' : ''}${diff % 60} hours before the start`) 
        } else {
            console.log(`${diff % 60}minutes before the start`)
        }
        
    } else {
        if (diff >= 60) {
            console.log(`${~~(diff / 60)}:${(diff % 60) < 10 ? '0' : ''}${diff % 60} hours after the start`)
        } else {
            console.log(`${diff % 60} minutes after the start`)
        }
        
    }
    
}  

examTime(['9', '00', '10', '30'])