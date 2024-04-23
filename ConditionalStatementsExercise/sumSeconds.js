function sumSeconds(input){
    let pl1 = Number(input[0]);
    let pl2 = Number(input[1]);
    let pl3 = Number(input[2]);

    let totalTime = pl1 + pl2 + pl3
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}