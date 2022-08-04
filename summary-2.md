# Summary 2
Избавляемся от статичности, делаем так чтобы данные и разметка были разделены.

- открываем папку в терминале
- создаём в папке стартовый файл `example/main.js`, внутри него напишем `console.log('Hello World!')`
- вводим в терминале `node main`
- устанавливаем pug `npm install pug`
    - папка `node_modules` и файлы `package.json` и `package-lock.json` создадутся автоматически
- в файл `main.js` запишем `const pug = require('pug');`

Выведем в консоли HTML-код, в файл `main.js` запишем:

    const pug = require('pug');
    let pugCode = 'p Абзац на pug';
    let html = pug.render(pugCode);
    console.log(html);

Пишем в консоли `node main` должен появиться `<p>Абзац на pug</p>`.  
`render()` переводит pug-разметку в html, принимает переменную.

- создадим файл с раширением `.pug`, например `example/layout.pug`
- внутри него поместим код `<p>Абзац на pug</p>`

В файл `main.js` запишем:

    const pug = require('pug');
    let html = pug.renderFile('layout.pug');
    console.log(html);

Консоль выведет код pug из файла `layout.pug`, переведённый в HTML.  
`renderFile()` переводит pug-разметку в html, принимает файл.

С помощью модуля node.js `fs`, создадим HTML-файл на основе `layout.pug`.

    const fs = require('fs');
    const pug = require('pug');

    let html = pug.renderFile('layout.pug');
    fs.writeFileSync('index.html', html);

fs.writeFileSync() - записывает данные в файл, создаёт файл если его нет.

## Разделяем разметку и данные

### Передаём переменную, объект, массив
Создадим данные вне разметки например в файле `main.js` в виде объекта или массива (эти данные мы также можем получить из БД и поместить в переменную).

    const fs = require('fs');
    const pug = require('pug');

    let data = {
        pContent: 'Hello World!',
    }

    let html = pug.renderFile('layout.pug', data); // передаём данные data
    fs.writeFileSync('index.html', html);

    console.log(html);

Файл `layout.pug`:

    p Абзац на pug
    p= 'Абзац из data ' + pContent

    ul
        li первый
        li второй

### Передаём функцию
Файл `main.js`:

    let data = {
        pContent: 'Hello World!',
        sum(a, b) {
            return a + b;
        }
    }

Файл `layout.js`:

    ul
        li= sum(2, 3)
        li второй

Если переменная/свойство отсутствет то она будет замененая пустотой, если отсутствует функция/метод то консоль выведет ошибку.

### Используем цикл
Файл `main.js`:

    const fs = require('fs');
    const pug = require('pug');

    for (let i = 0; i < 3; i++) {
        let data = {
            i: i
        }

        let html = pug.renderFile('layout.pug', data); // передаём данные data
        // fs.writeFileSync('index.html', html);
        console.log(html);
    }

Файл `layout.pug`:

    p= i

    ul
        li первый
        li второй

Консоль выведет `node main`:

    <p>0</p><ul><li>первый</li><li>второй</li></ul>
    <p>1</p><ul><li>первый</li><li>второй</li></ul>
    <p>2</p><ul><li>первый</li><li>второй</li></ul>

Вместо цикла `for` для оптимизации производительности, можно использовать функции `compile()` и `compileFile()`.

## Функции compile() и compileFile()
render используем когда нужно сделать операцию один раз.  
compileFile() - заранее открывает файл и считывает разметку.  
pug.compile('p Абзац') - работает со строками, как render()

    let compileFunc = pug.compileFile('layout.pug');

    for (let i = 0; i < 3; i++) {
        let data = {
            i: i
        }

        let html = compileFunc(data)
        // fs.writeFileSync('index.html', html);
        console.log(html);
    }
