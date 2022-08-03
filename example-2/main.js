const fs = require('fs')
const pug = require('pug')

// Оптимизируем код, и преобразуем его в HTML
let compileFunc = pug.compileFile('layout.pug')
// let html = compileFunc()
// console.log(html)

// Получаем все файлы из папки users, в виде массива и проходим по нему циклом
fs.readdirSync('users').forEach((filename) => {
    // В каждом filename хранится имя файла
    // В каждом userData хранится JSON-объект
    let userData = JSON.parse(fs.readFileSync('users/' + filename, 'utf-8'))

    // Преобразуем pug-файл в HTML-код, параметровм вставляем JSON-данные
    let html = compileFunc(userData)
    // Создаём HTML-файлы
    fs.writeFileSync('out/' + filename.replace('.json', '.html'), html)
})

// Переводим pug-код в html-код
// let html = pug.renderFile('layout.pug')
// fs.writeFileSync('index.html', html)
// console.log(html)
