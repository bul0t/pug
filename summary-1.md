# Summary 1
Работаем в сервисе: https://codepen.io/pen/

## Теги

    ul
        li hello

## Атрибуты

    .class
    ul.list
    ul(class="list")

## Многострочный текст

    p.
        Многострочный текст
        тег ентер и таб

## JavaScript
Чтобы написать JavaScript код, нужно в начале строки поставить знак `-`.  
Чтобы написать JavaScript-выражение, нужно поставить знак равно `=` после тега (или даже без тега).

### Переменные
JavaScript в содержимом, тегов:

    - let a = 5;
    - let b = "<b>жирный</b>";

    -
        Многострочный
        код JavaScript

    p= a
    p= "Число: " + a
    p= "Текст: " + b
    p!= "Текст: " + b
    p hello #{a}
    p hello #{a + 1}
    p hello !{a} // не экранировать

JavaScript в атрибутах, тегов:

    - let c = "hello"

    p(class=c) Привет
    p(class!=c) Привет // не экранировать (не рекомендуется)
    p(title!=c)= title
    p(title!=c)!= c

## Условия

if:

    - let a = 3

    if (a == 5)
        p равно 5
    else if (a > 5)
        p больше 5
    else
        p меньше 5

case:

    - let a = 3

    case a
        when 1
            p число 1
        when 2
            p число 2
        default
            p совпадений нет

## Циклы

while:

    - let n = 0

    while n < 5
        p= n
        - n++

    ul
        while n < 5
            li число #{n++}

each (работа с массивами):

    - const arr = ['moscow', 'pekin', 'london']

    each item in arr
        p= item
    
    each item, i in arr
        p Элемент #{i+1}: #{item}
    
    each item, i in arr
        p Элемент #{i+1}: #{item}
    
    - const arr = []

    each item, i in arr
        p Элемент #{i+1}: #{item}
    else
        p Нет элементов

each (работа с объектами):

    - const obj = { key1: "val 1", key2: "val 2", key3: "val 3" }

    each value, key in obj
        p Ключ (#{key}): значение (#{value})
    else
        p Нет элементов

## Checked
Задаём checked через переменную (ctrl + f5 для проверки):

    - let isChecked = false
    input(type="checkbox", checked=isChecked)

## `&attributes` - aтрибуты в виде объекта

    - let attrs = { title: 'Контент', class: 'content' }
    p&attributes(attrs) Контент

## Массив классов

    - let classes = ['content', 'element', 'btn']
    p(class=classes) Массив классов

## Объект классов

    - let classes = { content: true, element: false, btn: true }
    p(class=classes) Объект классов

## Миксины

    //- Declaration
    mixin list
        ul
            li foo
            li bar
            li baz

    //- Use
    +list
    +list
