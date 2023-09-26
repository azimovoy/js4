// let nik = prompt('Введите имя');
// let date = +prompt('Введите год рождения');
// let year = +prompt('Введите сегоднешний год');


// function data(year, date) {
//     let age = year - date
//      return age
// }

// alert('Имя: ' + nik + ', ' + 'Дата рождения: ' + date + ', ' + 'Возраст ' + data(year, date));

let many = +prompt('Введите количество примеров');
let min = +prompt('Введите минимальное число');
let max = +prompt('Введите масимальное число');

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
for(let i = 1; i <= many; i++){
    let action = Math.floor(Math.random() * (4 + 1 - 1) + 1)
    let one = random(min, max)
    let two = random(min, max)
     if(action == 1){
        let primer = prompt(one + ' + ' + two + ' =')
     let word = primer == (one + two) ? 'Верно' : 'Неверно' ;
     alert((one + ' + ' + two) + ' = ' + (one + two)  + ' Ваш ответ ' + primer  + ', ' + word )
     }else if(action == 2){
        let primer = prompt(one + ' - ' + two + ' =')
     let word = primer == (one - two) ? 'Верно' : 'Неверно' ;
     alert((one + ' - ' + two) + ' = ' + (one - two)  + ' Ваш ответ ' + primer  + ', ' + word )
     }else if(action == 3){
        let primer = prompt(one + ' * ' + two + ' =')
     let word = primer == (one * two) ? 'Верно' : 'Неверно' ;
     alert((one + ' * ' + two) + ' = ' + (one * two)  + ' Ваш ответ ' + primer  + ', ' + word )
     }else {
        let primer = prompt(one + ' / ' + two + ' =')
     let word = primer == (one / two) ? 'Верно' : 'Неверно' ;
     alert((one + ' / ' + two) + ' = ' + (one / two)  + ' Ваш ответ ' + primer  + ', ' + word )
     }
}



