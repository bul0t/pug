# Summary 7 (JSON-2)
Расширяем проект `Summary 3`. Объединяем все знания include, extends, block и т.д.

Берем все файлы из `Summary 3`. Создаём дополнительно папки и файлы:

    layout/
        includes/
            footer.pug
            header.pug
        base.pug // основной шаблон от которого будут наследоваться другие страницы

Файл `footer.pug`:

    footer
        div #{(new Date()).getFullYear()} Подвал сайта

Файл `header.pug`:

    header
        h1 Шапка сайта

Файл `base.pug`:

    doctype html
    html
        head
            meta(charset="UTF-8")
            title= base.title
            link(href="../style.css", rel="stylesheet")

        body(class=base.pageClass)
            include ../includes/header

            .content-wrapper
                block content

            include ../includes/footer

## main.js
В конце файла `main.js` добавим.

    // Создаём страницу test.html на основе шаблона base.pug и передаём него данные, например объект { }
    fs.writeFileSync('out/test.html', pug.renderFile('layout/base.pug', { base: { title: 'Тестовая станица', pageClass: 'test' } })))

Напишем скрипт, который будет выводить всех пользователей в консоли ввиде массива из списка объектов, каждому пользователю добавим `id`:

    const fs = require('fs')
    const pug = require('pug')

    // Импортируем модуль age.js который преобразует дату в JSON-файле в возраст
    const age = require('./age')

    // Данные о пользователях
    let users = []

    // Получаем все файлы из папки users, в виде массива и проходим по нему циклом
    fs.readdirSync('users').forEach((filename) => {

        // Получаем название файла без расширения, идентификатор пользователя
        let id = filename.replace('.json', '')
        // Получаем данные пользователя из JSON-файла
        let userData = JSON.parse(fs.readFileSync('users/' + filename, 'utf-8'))

        // id и данные пользователя упаковываем в массив users
        users.push({
            ...{ id: id },
            ...userData
        })

    })

    // Проверяем что хранит в себе массив users
    console.log(users)

    // Создаём страницу test.html на основе шаблона base.pug и передаём него данные, например объект { }
    fs.writeFileSync('out/test.html', pug.renderFile('layout/base.pug', { base: { title: 'Тестовая станица', pageClass: 'test' } }))

## buildUserList()
Создаём страницу HTML со всеми пользователями которые у нас есть. Для этого нужно создать функцию и файл `layout/index.pug`:

    function buildUserList() {
        // Объект хранящий объект base и массив users - данные
        let data = {
            base: {
                title: 'Моя Соцсеть',
                pageClass: 'list'
            },
            users: users
        }

        // Создаём HTML-страницу, на основе pug и передаем в него объект (data) - данные
        let html = pug.renderFile('layout/index.pug', data)
        fs.writeFileSync('out/index.html', html)
    }

    buildUserList()

## buildUsers()
Создадим функцию которая будет создавать страницы с пользователями, их шаблоном будет `layout/user.pug`:

    function buildUsers() {
        let compileFunc = pug.compileFile('layout/user.pug');

        // Берем элементы из массива users и на основе их данных создаём объект дял передачи в pug для формирования html-страницы
        users.forEach((userData) => {
            let data = {
                base: {
                    title: userData.name,
                    pageClass: 'user'
                },
                calcAge: age,
                user: userData
            }

            let html = compileFunc(data);
            fs.writeFileSync('out/' + userData.id + '.html', html);
        });
    }
