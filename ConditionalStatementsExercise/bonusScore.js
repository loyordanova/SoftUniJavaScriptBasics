function bonusScore(input) {
    let initialScore = Number(input[0]);

    if (initialScore <= 100) {
        bonus = 5;
    } else if (initialScore < 1000) {
        bonus = initialScore * 0.20;
    } else {
        bonus = initialScore * 0.10;
    }

    if (initialScore % 2 == 0) {
        bonus += 1;
    } else if (initialScore % 10 == 5){
        bonus += 2;
    }

    console.log(bonus)
    console.log(bonus + initialScore)
}

bonusScore(['2703'])