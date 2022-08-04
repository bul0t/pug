# Summary 6 (extends, block)
Наследование (extends) позволяет создать общий шаблон для всех страниц, а изменять только контент (block).

Структура файлов:

    layout/
        base.pug (шаблон)
        page-1.pug (страница, наследует код от шаблона)
    main.js
    style.css

Файл `layout/base.pug`:

    doctype html
    html
        head
            meta(charset="UTF-8")
            title Заголовок
            link(href="style.css", rel="stylesheet")
        body
            block content

Файл `layout/page-1.pug`:

    extends base

    block content
        h1 Страница 1
        p Абзац 1

        ul
            li Пункт 1.1
            li Пункт 1.2

В файле `page-1.pug` нельзя писать никого HTML-кода на верхнем уровне, можно только внутри блоков (block), которые заданы в шаблоне.

Файл `main.js`:

    const fs = require('fs')
    const pug = require('pug')

    console.log(pug.renderFile('layout/page-1.pug'))

Через pug прогоняем страницу, а не шаблон.

## append, prepend
Если в шаблоне задан `block` с разметкой, можно туда добавить свою:

    doctype html
    html
        head
            meta(charset="UTF-8")
            title Заголовок

            block style
                link(href="style-1.css", rel="stylesheet")
                link(href="style-2.css", rel="stylesheet")

        body
            block content

Добавим в страницу `pug-1.pug` в `block style` свою разметку:

    extends base

    append style
        link(href="style-3.css", rel="stylesheet")

    block content
        h1 Страница 1
        p Абзац 1

        ul
            li Пункт 1.1
            li Пункт 1.2

На выходе в HTML-файле получим три тега `link`. **prepend** добавляет код перед.

## Цепочка наследований
Шаблоны могут наследовать друг друга, например можно создать шаблон `sub-base.pug` который будет наследовать от `base.pug`, переопределять его блоки, а страницы создавать либо от `base.pug`, либо от `sub-base.pug`.

Создадим шаблон `layout/sub-base.pug` который будет наследоваться от `layout/base.pug`, добавлять в `block style` новый тег link, переопределять `block content` и добавлять в него новый блок:

    extends base

    apend style
        link(href="style-sub-base.css", rel="stylesheet")

    block content
        p Абзац подшаблона
        block afterP

Наследуемся в `page-1.pug` от `sub-base.pug`:

    extends sub-base

    block afterP
        div После абзаца
    
и смотрим на результат.

- в подшаблонах нельзя выводить разметку на первом уровне, там должны быть только блоки и миксины, разметка должна быть внутри них.
- не рекомендуется делать глубокие наследования, чтобы не усложнять разработку.
