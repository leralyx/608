let name = 'Alex'
let account = 7777
let money = 10000
let question = prompt('Как вас зовут?')

if (question === name) {
    let a = +prompt('номер счета')
    if (a === account) {
        let b = +prompt('сколько обналичить?')
        if (b <= money) {
            let c = alert(money - b + ' - осталось. У вас достаточно средств')
        } else {
            let d = alert('не достаточно средств')
        }
    } else {
        alert('пользователь не найден досвидули')
    }
} else {
    alert('пользователь не найден досвидули')
}
// //////////////////////////////////////////////////////////////////////////////////////////////// 1 задание
let neme = prompt('Введите свое имя.')
let a = neme.slice(0, 1)
let people = 8



if (a === 'A' || a === 'a') {
    let age = +prompt('Ваш возраст.')
    if (age > 20 && age < 40) {
        let money = +prompt('Введите свой счет.')
        if (money >= 100) {
            let e = +prompt('Сколько вас человек?')
            if (people + e <= 10) {
                console.log('Welcome!');
            } else {
                console.log(' много людей');
            }

        } else {
            console.log('Недостаточно средств');
        }
    } else {
        console.log('Вы не подходите по возрасту...');
    }
} else {
    console.log('buy');
}

// //////////////////////////////////////////////////////////////////////////////////////////////// 2 задание






