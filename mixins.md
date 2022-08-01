# Mixins
https://pugjs.org/language/mixins.html

Миксины позволяют создавать повторяющиеся блоки, схожи с функциями в языках програмирования. Миксины можно использовать в разных частях разметки, например создать верхнее и нижнее меню, используя один миксин и разные данные.

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

    mixin accentBlock(title)
        .accent-block
            if(title)
                .head= title

            .content
                block

    +accentBlock
        p Текст

    +accentBlock("Заголовок")
        a(href="#") Ссылка

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

## Пример, создаём меню

    // создание миксина
    mixin menu
        ul.menu
            li.menu__item
                a.menu__link(href="#") Главная
            li.menu__item
                a.menu__link(href="#") О компании
            li.menu__item
                a.menu__link(href="#") Контакты

    // вызов миксина
    +menu
    hr
    +menu

### Миксин с параметрами

    // создание миксина
    mixin menu(main, company, contact)
        ul.menu
            li.menu__item
                a.menu__link(href="#")= main
            li.menu__item
                a.menu__link(href="#")= company
            li.menu__item
                a.menu__link(href="#")= contact

    // вызов миксина
    +menu("Главная", "О компании", "Контакты")
    hr
    +menu("Главная", "О нас", "Контакты")

### Миксин с ...rest параметром

    // создание миксина
    mixin menu(...arrLi)
        ul.menu
            each li in arrLi
                li.menu__item
                a.menu__link(href="#")= li

    // вызов миксина
    +menu("Главная", "О компании", "Контакты")
    hr
    +menu("Главная", "О нас", "Контакты")

### Абрибуты миксина `&attributes`

    ul.menu(class=attributes.class)

    +menu("Главная", "О компании", "Контакты")(class="hello")
