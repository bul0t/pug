const fs = require('fs')
const pug = require('pug')

// Выводим в консоли HTML-код, получившийся от layout.pug
// console.log(pug.renderFile('layout/layout.pug'))

// Или создаём HTML-файл
fs.writeFileSync('index.html', pug.renderFile('layout/pages/layout.pug', { basedir: 'layout'}))
