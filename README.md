# Pug
Pug в себя включает:

- шаблоны (layouts, templates)
- include (включения)
- block (блоки)
- переменные
- циклы и мн.др.

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
