# Includes
Includes (включения) позволяют вставлять содержимое одного файла Pug в другой.

Включениями могут быть части страницы, которые одинаковы на всех страницах:

## index.pug

    //- index.pug
    include pug/includes/header.pug
    body
        h1 My Site
        p Welcome to my super lame site.
        include pug/includes/footer.pug
        script(src=require('js/scripts.js'))

## header.pug

    // includes/header.pug
    doctype html
    html
        head
            title Главная страница

## footer.pug

    // includes/footer.pug
    footer#footer
        p Copyright (c) foobar