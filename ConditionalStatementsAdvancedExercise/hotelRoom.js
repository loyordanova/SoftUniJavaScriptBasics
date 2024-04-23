function hotel(input) {
    let month = input[0];
    let stays = Number(input[1]);
    let apartment ;
    let studio;

    if (month === 'May' || month === 'October') {
        apartment = 65;
        studio = 50;
        if (stays > 7 && stays <= 14) {
            studio -= studio * 0.05;
        } else if (stays > 14){
            studio -= studio * 0.30;
        }

    } else if (month === 'June' || month === 'September') {
        apartment = 68.70;
        studio = 75.20;
        if (stays > 14) {
            studio -= studio * 0.20;
        }

    } else if (month === 'July' || month === 'August') {
        apartment = 77;
        studio = 76;
    }

    if (stays > 14) {
        apartment -= apartment * 0.10;
    }

    console.log(`Apartment: ${(apartment * stays).toFixed(2)} lv.`)
    console.log(`Studio: ${(studio * stays).toFixed(2)} lv.`)
}

hotel(['May', '15'])