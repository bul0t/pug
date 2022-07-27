# Attributes
https://pugjs.org/language/attributes.html

Создаём атрибуты тегов в Pug.

    a(href='https://ya.ru') Яндекс
    |
    |
    a(href='https://ya.ru' target='_blank') Яндекс
    |
    |
    a(href='https://ya.ru', target='_blank') Яндекс

Между атрибутами можно ставить запятые.  
Двойная вертикальная черта `|` позволяет в исходном коде, переносить инлайновые элементы на следующую строку.

Если у вас много атрибутов, то их можно записать в стобец:

    input(
        type='checkbox'
        name='agreement'
        checked
    )

## Интерполяция в атрибутах

    - var url = 'page.html';
    a(href='/' + url) Ссылка 1
    |
    |
    - url = 'https://example.com'
    a(href=url) Ссылка 2

Интерполяция в атрибутах ES6:

    - var btnType = 'info'
    - var btnSize = 'lg'
    button(type='button' class='btn btn-' + btnType + ' btn-' + btnSize)
    |
    |
    button(type='button' class=`btn btn-${btnType} btn-${btnSize}`)

## Атрибут стиля

    a(style='color: red')
    a(style={color: 'red', background: 'green'})

## Атрибуты класса
Можно добавлять как обычные атрибуты или ввиде массива:

    - var classes = ['foo', 'bar', 'baz']
    a(class=classes)
