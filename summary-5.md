# Summary 5
Проект система Patriot:

    layout.pug
    main.js
    style.css

Файл `layout.pug`:

    doctype html
    html
        head
            meta(charset="UTF-8")
            title Patriot
            link(href="style.css", rel="stylesheet")
        body
            p Информационная система Patriot
            p Loading data

Файл `main.js`:

    const fs = require('fs')
    const pug = require('pug')

    fs.writeFileSync('index.html', pug.renderFile('layout.pug'))
