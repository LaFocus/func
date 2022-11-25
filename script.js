var num1 = +prompt('Введите минимальное число', 1)
var num2 = +prompt('Введите максимальное число', 10)

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

for (let i = 0; i < 10; i++) {
    let a = random(num1, num2)
    let b = random(num1, num2)
    let c = +prompt(a + ' + ' + b + ' = ' + ' ?')
    let answer = c == (a + b) ? ' Молодец' : ' Ошибка'
    alert(a + ' + ' + b + ' = ' + (a + b) + '.' + ' Ваш ответ: ' + c + '.' + answer)
}