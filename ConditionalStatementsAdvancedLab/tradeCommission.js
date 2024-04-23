function tradeCommissin(input) {
    let town = input[0];
    let sale = Number(input[1]);
    let result = 0;

    if (town === 'Sofia' && sale >= 0) {
        if (sale >= 0 && sale <= 500){
            result = sale * 0.05;
        } else if (sale > 500 && sale <= 1000) {
            result = sale * 0.07
        } else if (sale > 1000 && sale <= 10000) {
            result = sale * 0.08;
        } else if (sale > 10000) {
            result = sale * 0.12;
        }
    } else if (town === 'Varna' && sale >= 0) {
        if (sale >= 0 && sale <= 500){
            result = sale * 0.045;
        } else if (sale > 500 && sale <= 1000) {
            result = sale * 0.075
        } else if (sale > 1000 && sale <= 10000) {
            result = sale * 0.10;
        } else if (sale > 10000) {
            result = sale * 0.13;
        }
    } else if (town === 'Plovdiv' && sale >= 0) {
        if (sale >= 0 && sale <= 500){
            result = sale * 0.055;
        } else if (sale > 500 && sale <= 1000) {
            result = sale * 0.08
        } else if (sale > 1000 && sale <= 10000) {
            result = sale * 0.12;
        } else if (sale > 10000) {
            result = sale * 0.145;
        }
    } else {
        result = 'error'
    }

    if (result !== 'error') {
        console.log(result.toFixed(2))
    } else {
        console.log('error')
    }
        
}

tradeCommissin(["Plovdiv",
"-20"])
