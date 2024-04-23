function cake(input) {
    let cakeWidth = Number(input.shift());
    let cakeLength = Number(input.shift());
    let pieces = cakeWidth * cakeLength;
    let takenPieces = 0;
    let index = 0;
    let command = input[index];

    while (command !== 'STOP') {
        if (takenPieces >= pieces) {
            break;
        }

        let currentPieces = Number(command);
        takenPieces += currentPieces
        index ++;
        command = input[index];
    }

    if (takenPieces <= pieces) {
        console.log(`${pieces - takenPieces} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${takenPieces - pieces} pieces more.`)
    }
    
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

