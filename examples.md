# Примеры

## Отзыв с изображением

    .message
        .message__wrap
            .message__img
                img(src="https://picsum.photos/128")
            .message__content
                .message__head
                    .message__name
                        a(href="#") Иван Иванов
                        |  (5)
                    .message__date 01.01.2001
                .message__text Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident reprehenderit doloribus sunt consequuntur necessitatibus non pariatur dignissimos mollitia nisi, animi iste harum iusto?

## Цикл и объект
Создаём список из цветов радуги с поомощью объекта и цикла:

    -
        let colors = { 
            red: "Красный",
            orange: "Оранжевый",
            yellow: "Желтый",
            green: "Зелёный",
            lightblue: "Голубой",
            blue: "Синий",
            violet: "Фиолетовый"
        }

    .colors
        each cValue, cKey in colors
            .color-box(style={ "background-color": cKey })= cValue.toUpperCase()

Добавляем счетчик который при наведении будет указываеть числовой номер элемента:

    .colors
        - let i = 1
        each cValue, cKey in colors
            .color-box(style={ "background-color": cKey }, title="Цвет " + i++)= cValue.toUpperCase()

## Данные для отзыва берутся из JavaScript объекта (JSON)

    -
        let data = [
            {
                name: "Иван Иванов",
                date: "1 января 2001",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eius tempore, neque, autem voluptatem atque id voluptatibus repellendus cumque corporis quo, tempora vero obcaecati.",
                banned: false
            },
            {
                name: "Петр Петров",
                date: "2 февраля 2002",
                message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cum expedita minima optio! Architecto minima a praesentium ea modi aperiam voluptas deserunt, beatae dolorem?",
                banned: false
            },
            {
                name: "Сидор Сидоров",
                date: "3 марта 2003",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque amet omnis nam sunt? Reprehenderit rem eos illo saepe blanditiis delectus earum veniam accusantium molestiae.",
                banned: true
            },
        ]

    each dataItem in data
        .message
            .message__wrap(class={ banned: dataItem.banned })
                .message__img
                    img(src="https://picsum.photos/seed/" + dataItem.name + "/128")
                .message__content
                    .message__head
                        .message__name
                            a(href="#")= dataItem.name
                            |  (5)
                        .message__date= dataItem.date
                    .message__text= dataItem.message
