const numberToGuess = Math.floor(Math.random() * 1000);
console.log('Я загадал', numberToGuess );

while (true){

    const numberFromUser = prompt("Введите число от 0 до 999");
    console.log('Вы ввели', +numberFromUser);

    if (numberFromUser === 'q'){
        alert('До свидания!');
    }else
    if (    isNaN(numberFromUser) 
        || +numberFromUser < 0 
        || +numberFromUser > 999 ){
        alert('Вы угадали!')
    }else
    if (+numberFromUser === numberToGuess){
        alert('Вы угадали!')
    }else
    if (+numberFromUser > numberToGuess){
        alert('Меньше')
    }else
    if (+numberFromUser < numberToGuess){
        alert('Больше')
    }
}