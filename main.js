let userAge = prompt('Введите свой возраст в цифрах:');
if (userAge < 18) {
    console.log('Вы еще молоды');
}else if (userAge < 50) {
    console.log('Вам нужно работать');
}else if (userAge < 59) {
    console.log('Вам скоро на пенсию');
}else if (userAge < 150) { 
    console.log('Вы пенсионер');
}else {
    alert('Что-то пошло не так');
}
