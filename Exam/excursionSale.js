function solve(input){
    let seaTrips = Number(input.shift());
    let mountainTrips = Number(input.shift());
    let profit = 0;
    let index = 0;
    let count = 0;
    while (true) {
        let command = input.shift();
        if (command === 'Stop' || (seaTrips === 0 && mountainTrips === 0)){
            break;
        }
        if (command === 'sea' && seaTrips > 0){
            profit += 680;
            seaTrips--;
        } else if (command === 'mountain' && mountainTrips > 0){
            profit += 499;
            mountainTrips--;
        }
    }
    if (seaTrips === 0 && mountainTrips === 0) {
        console.log(`Good job! Everything is sold.`)
    } 
    console.log(`Profit: ${profit} leva.`)
}

solve(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])
