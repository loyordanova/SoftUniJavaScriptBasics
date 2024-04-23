function movieTicket(input) {
    let day = input[0];

    const twelve = ['Monday', 'Tuesday', 'Friday']
    const fourteen = ['Wednesday', 'Thursday']
    const sixteen = ['Saturday', 'Sunday']

    let price = 0;

    if (twelve.includes(day)) {
        price = 12;
    } else if (fourteen.includes(day)) {
        price = 14;
    } else if (sixteen.includes(day)) {
        price = 16;
    }
    
    console.log(price)
}

movieTicket(['Monday'])