function basketballEquipment(input){
    let shoes = Number(input) - (Number(input) * 0.4);
    let jersey = shoes - (shoes * 0.2);
    let ball = jersey / 4
    let acc = ball / 5
    
    console.log(Number(input) + shoes + jersey + ball + acc)
    
}

basketballEquipment(["365 "])