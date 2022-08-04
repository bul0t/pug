const fs = require('fs')
const pug = require('pug')

// Импортируем модуль age.js который преобразует дату в JSON-файле в возраст
const age = require('./age')

// Данные о пользователях
let users = []

// Получаем все файлы из папки users, в виде массива и проходим по нему циклом
fs.readdirSync('users').forEach((filename) => {

    // Получаем название файла без расширения, идентификатор пользователя
    let id = filename.replace('.json', '')
    // Получаем данные пользователя из JSON-файла
    let userData = JSON.parse(fs.readFileSync('users/' + filename, 'utf-8'))

    // id и данные пользователя упаковываем в массив users
    users.push({
        ...{ id: id },
        ...userData
    })

})

// Проверяем что хранит в себе массив users
console.log(users)

// Создаём страницу test.html на основе шаблона base.pug и передаём него данные, например объект { }
fs.writeFileSync('out/test.html', pug.renderFile('layout/base.pug', { base: { title: 'Тестовая станица', pageClass: 'test' } }))
