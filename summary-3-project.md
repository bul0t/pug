# Summary 3 (создание проекта социальная сеть)

    example/users/
    example/layout.pug
    example/main.js
    example/style.css

### users

Создаём папку `example/users` в ней размещаем файлы с данными пользователей.

    ivan.json
    petr.json
    sidor.json

В каждом файле размещаем следующие данные:

    {
        "name":     "Иван Иванов",
        "birth":    "2001-01-01",
        "slogan":   "Слоган Ивана Иванова",
        "bio":      "Биография Ивана Иванова"
    }

### layout.pug

В файле `example/layout.pug` пишем:

    doctype html
    html
        head
            meta(charset="UTF-8")
            title Иван Иванов
            link(href="style.css", rel="stylesheet")
        body
            .wrapper
                h2 Иван Иванов #[span.age 22]
                blockquote Слоган:
                p Биография:

### main.js

В файле `example/main.js` пишем:

    const fs = require('fs')
    const pug = require('pug')

    // Переводим pug-код в html-код
    let html = pug.renderFile('layout.pug')
    fs.writeFileSync('index.html', html)

    // console.log(html)

Набираем `node main`, должен появится файл `example/index.html`.

### style.css

В файле `example/style.css` пишем:

    body {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        /* justify-content: center; */
        font-family: 'Courier New', Courier, monospace;
        font-size: 120%;
    }

## compileFile()
Для отпимизации производительности (файлов json может быть сотни и тысячи) используем функцию compileFile().

    const fs = require('fs')
    const pug = require('pug')

    // Оптимизируем код, и преобразуем его в HTML
    let compileFunc = pug.compileFile('layout.pug')
    // let html = compileFunc()
    // console.log(html)

    // Получаем все файлы из папки users, в виде массива и проходим по нему циклом
    fs.readdirSync('users').forEach((filename) => {
        // в каждом filename хранится имя файла
        // в каждом userData хранится JSON-объект
        let userData = JSON.parse(fs.readFileSync('users/' + filename, 'utf-8'))
        console.log(userData)
    })

Создадим папку `example/out` куда будут складываться HTML-файлы с данными пользователей.