const fs = require('fs')
const pug = require('pug')

console.log(pug.renderFile('layout/page-1.pug'))

// fs.writeFileSync('index.html', pug.renderFile('layout/base.pug'))
