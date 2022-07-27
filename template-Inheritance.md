# Template inheritance
https://pugjs.org/language/inheritance.html

Наследование шаблонов.
- есть шаблон `layout.pug` или `template.pug`
- внутри шаблона можно расположить блоки `block` с названиями, с контентом или без
- от шаблона наследуются страницы `page.pug`, через `extends layout.pug`
- внутри страниц можно расположить блоки шаблона и переопределить их контент или нет
    - также внутри страниц можно размещать `include`

Блоки можно добавлять, заменять и добавлять к уже имеющемуся содержимому.


    //- layout.pug
    html
        head
            title My Site - #{title}
            block scripts
            script(src='/jquery.js')
        body
            block content
            block foot
            #footer
                p some footer content

    //- page-a.pug
    extends layout.pug

    block scripts
        script(src='/jquery.js')
        script(src='/pets.js')

    block content
        h1= title
        - var pets = ['cat', 'dog']
        each petName in pets
            include pet.pug

    //- pet.pug
    p= petName
