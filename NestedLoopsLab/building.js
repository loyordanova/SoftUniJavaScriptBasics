function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let f = floors; f > 0; f --) {
        let buffer = ''
        for (let r = 0; r < rooms; r ++){
            if (f === floors) {
                buffer += `L${f}${r} `
            } else if (f % 2 === 0) {
                buffer += `O${f}${r} `
            } else {
                buffer += `A${f}${r} `
            }
        }
        console.log(buffer)
    }
}

building(['6', '4'])