# Mixins
https://pugjs.org/language/mixins.html

Миксины позволяют создавать повторяющиеся блоки, схожи с функциями в языках програмирования.

Создаём миксин списка, вызываем его два раза:

    //- Declaration
    mixin list
        ul
            li foo
            li bar
            li baz

    //- Use
    +list
    +list

Миксин с параметром:

    mixin pet(name)
        li.pet= name
        // li #{name} или так
    
    ul
        +pet('cat')
        +pet('dog')
        +pet('pig')

В миксинах можно использовать блоки.

В миксинах можно использовать атрибуты:

    mixin link(href, name)
        //- attributes == {class: "btn"}
        a(class!=attributes.class href=href)= name

    +link('/foo', 'foo')(class="btn")

Миксины могут иметь, параметры по умолчанию `ES6`:

    //- Declaration
    mixin article(title='Default Title')
        .article
            .article-wrapper
                h1= title

    //- Use
    +article()

    +article('Hello world')

Миксины могут принимать неизвестное количество аргументов `rest`:

    mixin list(id, ...items)
        ul(id=id)
            each item in items
                li= item

    +list('my-list', 1, 2, 3, 4)
