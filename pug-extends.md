# Pug extends
Продвинутая структура папок и файлов.

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
