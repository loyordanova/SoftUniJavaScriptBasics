function findValidChanges(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let numberOfChanges = 0;
    let flag = false;
  
    for (let num1 = K; num1 <= 8; num1++) {
      for (let num2 = 9; num2 >= L; num2--) {
        for (let num3 = M; num3 <= 8; num3++) {
          for (let num4 = 9; num4 >= N; num4--) {
            if (num1 % 2 === 0 && num3 % 2 === 0 && num2 % 2 !== 0 && num4 % 2 !== 0) {
              const first = `${num1}${num2}`;
              const second = `${num3}${num4}`;
  
              if (first === second) {
                console.log('Cannot change the same player.');
              } else {
                numberOfChanges++;
                console.log(`${first} - ${second}`);
                if (numberOfChanges >= 6) {
                  flag = true;
                }
              }
            }
            if (flag) {
              break;
            }
          }
          if (flag) {
            break;
          }
        }
        if (flag) {
          break;
        }
      }
      if (flag) {
        break;
      }
    }
}

findValidChanges(["6",
"7",
"5",
"6"])


