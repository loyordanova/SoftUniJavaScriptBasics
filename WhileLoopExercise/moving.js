function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let index = 0;
    let apartmentSize = width * length * height
    let totalBoxes = 0;

    while(true) {
        let box = input[index];

        if (box === 'Done') {
            console.log(`${apartmentSize - totalBoxes} Cubic meters left.`)
            break;
        }

        let currentBox = Number(box);
        totalBoxes += currentBox;

        if (totalBoxes >= apartmentSize) {
            totalBoxes -= apartmentSize;
            console.log(`No more free space! You need ${totalBoxes} Cubic meters more.`)
            break;
        }

        index ++;
    }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
