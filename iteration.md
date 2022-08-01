# Iteration
Циклы Pug: each, while, for.

## for

    - for (var x = 0; x < 5; x++)
        +yogaStudioCard

## each
Итерация по массивам и объектам.

    ul
        each val in [1, 2, 3, 4, 5]
            li= val

Получаем также и индекс:

    ul
        each val, index in ['zero', 'one', 'two']
            li= index + ': ' + val

Перебор ключей в объекте:

    ul
        each val, key in {1: 'one', 2: 'two', 3: 'three'}
            li= key + ': ' + val

## while
Может тоже что и each, пример:

    - var n = 0;
    ul
        while n < 4
            li= n++
