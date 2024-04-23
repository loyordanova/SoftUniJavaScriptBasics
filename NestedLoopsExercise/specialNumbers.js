function generateSpecialNumbers(N) {
    let array = []
    for (let i = 1111; i <= 9999; i++) {
        let digits = i.toString().split('').map(Number);
        let isSpecial = true;
        
        for (let digit of digits) {
            if (digit === 0 || N % digit !== 0) {
                isSpecial = false;
                break;
            }
        }
        
        if (isSpecial) {
            array.push(i)
        }
    }
    console.log(...array)
}

generateSpecialNumbers(['16'])