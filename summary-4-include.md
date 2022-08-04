# Summary 4 (include)
Создадим проект:

    layout/
        includes/
            head.pug
            header.pug
            mixins.pug
        pages/
            layout.pug
    index.html
    main.js
    style.css

Файл `layout.pug`:

    doctype html
    html
        head
            meta(charset="UTF-8")
            link(href="style.css" rel="stylesheet")
            title Заголовок
        body
            p Абзац

## include
Однаковый код метатегов, шапки, подвала и т.п. обычно выносят в `include`.  
В `includes/head.pug` из файла `layout.pug` переносим:

    meta(charset="UTF-8")
    link(href="style.css" rel="stylesheet")

Вместо этого кода в файле `layout.pug` вставляем `include includes/head`.

Отображаем в консоли получившийся результат `node main`:

    const fs = require('fs')
    const pug = require('pug')

    // Выводим в консоли HTML-код, получившийся от layout.pug
    console.log(pug.renderFile('layout/layout.pug'))

    // Или создаём HTML-файл
    fs.writeFileSync('index.html', pug.renderFile('layout/layout.pug'))

### include mixin
Подключим миксины через include.  
Создаём файл `includes/mixins.pug`, запишем туда:

    mixin helloWorld
        p Привет, мир!

Подключим миксин в `layout.pug` и вызовем его:

    include includes/mixins

    doctype html
    html
        head
            include includes/head
            title Заголовок
        body
            include includes/header
            p Абзац
            +helloWorld

### include file
Подключать можно не только pug файлы.  
Подключим `style.css`:

    title Заголовок
    style
      include ../style.css

## Относительный/абсолютный пути
Все пути к файлам расчитываются относительно файла `example/layout/layout.pug` и если мы например перенесём этот файл в `example/pages/layout.pug`, то все пути придется переписывать. Чтобы это не происходило, нужно указать базовую директорию от которого будет отчитываться абсолютный путь.

Файл `main.js`:

    fs.writeFileSync('index.html', pug.renderFile('layout/pages/layout.pug', { basedir: 'layout' }))

Файл `layout.pug`:

    include /includes/mixins

    doctype html
    html
        head
            include /includes/head
            title Заголовок
            style
            include ../../style.css
            // или include /../style.css
        body
            include /includes/header
            p Абзац
            +helloWorld

В объекте `{ basedir: 'layout' }` можно указывать ключевые слова, например `basedir`, а также добавлять свой данные которые можно использоватьв разметке pug `{ basedir: 'layout', a: 3 }`.
