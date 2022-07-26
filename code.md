# Code
Pug позволяет писать JavaScript код в шаблоны. Существует три типа кода: небуферизованный, буферизованный и неэкранированный буферизованный.

## Небуферизованный код
Небуферизованный код начинается с `-`. Он ничего не добавляет напрямую к выводу.

    - for (var x = 0; x < 5; x++)
        li item

Еще пример:

    - var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]

    each item in list
        li= item

## Буферизованный

    p= 'This code is <escaped>!' // экранирует скобки

Можно использовать с атрибутами:

    p= 'This code is' + ' <escaped>!'
    p(style="background: blue")= 'A message with a ' + 'blue' + ' background'

## Неэкранированный буферизованный

    p!= 'This code is <strong>not</strong> escaped!'
    p!= 'This code is' + ' <strong>not</strong> escaped!'