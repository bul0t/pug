# Interpolation
https://pugjs.org/language/interpolation.html

## Локальные переменные
Переменные создаются через `- var`, выводятся двумя способами:

    - var title = "Название страницы";
    - var author = "Иван";
    - var theGreat = "<span>Экранирование</span>";

    h1= title
    p Автор #{author}
    p #{theGreat}

Между `#{ }` можно помещать JavaScript `#{ author.toUpperCase() }`

## Теги внутри текста

    p Используем теги внутри текста  #[strong жирный] или #[em наклонный].

    p.
        Также добавляем атрибут в тег #[em(class="h") Привет]
        и пишем в несколько строк благодаря точке
