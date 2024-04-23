function worldRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let distanceToSwim = distance * time
    let slow = Math.floor(distance / 15) * 12.5
    let totalTime = distanceToSwim + slow

    if (totalTime >= record){
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }

}

worldRecord(["55555.67",
"3017",
"5.03"])

worldRecord(["10464",
"1500",
"20"])
