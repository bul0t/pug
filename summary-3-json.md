# Summary 3 (JSON)
На основе одного файла pug, создаём несколько однотипных файлов с разными данными из JSON.

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

## example/out
Создадим папку `example/out` куда будут складываться HTML-файлы с данными пользователей.

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

Изменим файл `main.js` введем команду `node main` создастся 3 файла в `out/`. Все файлы будут одинаковы по содержанию, изменим файл `layout.pug` таким образом чтобы он брал данные из каждого JSON-файла при каждой итерации цикла:

    doctype html
    html
        head
            meta(charset="UTF-8")
            title= name
            link(href="style.css", rel="stylesheet")
        body
            .wrapper
            h2 #{name} #[span.age= birth]
            blockquote= slogan
            p= bio

## age.js
Помимо данных передаём в разметку еще и функцию.  
Берём день рождение `"birth": "2001-01-01",` и переводим его в возраст. Создадим файл `example/age.js` и запишем туда:

    module.exports = (birthStr) => {
        let now = new Date();
        let birthDate = new Date(birthStr);

        let age =   now.getFullYear() - birthDate.getFullYear();

        let mDiff = now.getMonth() - birthDate.getMonth();
        let dDiff = now.getDate() - birthDate.getDate();

        if (mDiff < 0 || (mDiff === 0 && dDiff < 0))
            age--;

        return age;
    }

В файле `main.js` импортируем модуль `age.js`.

    // Импортируем модуль age.js который преобразует дату в JSON-файле в возраст
    const age = require('./age')

В файле `main.js` в цикле добавим модуль `age.js` как параметр:

    // Получаем все файлы из папки users, в виде массива и проходим по нему циклом
    fs.readdirSync('users').forEach((filename) => {
        // В каждом filename хранится имя файла
        // В каждом userData хранится JSON-объект
        let userData = JSON.parse(fs.readFileSync('users/' + filename, 'utf-8'))

        // Объединяем данные пользователя и наш модуль age
        let data = {
            ...{ calcAge: age },
            ...userData
        }
        // Проверяем что храится в data
        console.log(data)

        // Преобразуем pug-файл в HTML-код, параметровм вставляем JSON-данные
        let html = compileFunc(data)
        // Создаём HTML-файлы
        fs.writeFileSync('out/' + filename.replace('.json', '.html'), html)
    })

В файле `layout.pug` меняем строку: `h2 #{name} #[span.age= calcAge(birth)]`
