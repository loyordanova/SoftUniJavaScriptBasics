function shopping(input){
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let GPUprice = GPU * 250;
    let CPUprice = GPUprice * 0.35
    let CPUpriceTotal = CPUprice * CPU
    let RAMprice = GPUprice * 0.10
    let RAMpriceTotal = RAMprice * RAM

    
    let result = GPUprice + CPUpriceTotal + RAMpriceTotal

    if (GPU > CPU) {
        result = result - result * 0.15
    }

    if (budget >= result){
        console.log(`You have ${(budget - result).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(result - budget).toFixed(2)} leva more!`)
    }
}

shopping(["920.45",
"3",
"1",
"1"])

