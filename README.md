# Pug
Pug в себя включает:

- шаблоны (layouts, templates)
- include (включения)
- block (блоки)
- переменные
- циклы и мн.др.

Структура проекта:

    src/
        img/
            bmw.jpg
            bmw.png
        js/
            scripts.js
        pug/
            templates/
                main.pug
            pages/

## Templates
Создаём файл `src/pug/templates/main.pug` - это будет основным шаблоном. Помещаем в него следующий код:

    doctype html
    html(lang='ru')
    head
        meta(charset='UTF-8')
        meta(name='viewport' content='width=device-width, initial-scale=1.0')
        title PUG Название страниц
        link(href=require('../../styles.scss') rel='stylesheet')
    body
        .wrapper
            .header
                h1 Заголовок
            .content
                img(src=require('../../img/bmw.jpg'))
            .footer
                img(src=require('../../img/bmw.png'))
        script(src=require('../../js/scripts.js'))


В файл `src/index.pug` добавляем: extends `extends pug/templates/main`

## Основные моменты работы

- вложенность тегов, через табуляцию
- атрибуты помещать в скобки: `()`
    - img(src='../../img/bmw.jpg' alt='Автомобиль BMW')
- текст без скобок: `h1 Заголовок`

## Классы и id

Примеры с `.wrapper`:
- .wrapper - `<div class="wrapper">`
- #header - `<div id="wrapper">`
- header.header - `<header class="header">`
- header#header - `<header id="header">`
- header#header.header - `<header class="header" id="header">`
- header.header.header-2#header - `<header class="header header-2" id="header"></header>`

## lorem

    p lorem `enter`

Тоже самое но в две строки (в конечном файле перевода не будет):

    p
        | lorem `enter`

С переводом строк и тегом `a` внутри (в конечном файле переводы будут):

    p
        | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        | Modi perferendis voluptate porro quisquam #[a(href="#") vitae]
        | officia ullam ratione ut reprehenderit debitis, quam qui!
        | Eaque nulla possimus culpa autem, ipsum ratione laudantium.
