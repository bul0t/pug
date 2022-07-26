# case
https://pugjs.org/language/case.html

Оператор case - это сокращение от оператора switch в JavaScript.

    - var friends = 10
    case friends
        when 0
            p you have no friends
        when 1
            p you have a friend
        default
            p you have #{friends} friends

Компактный вариант записи:

    - var friends = 1
    case friends
        when 0: p you have no friends
        when 1: p you have a friend
        default: p you have #{friends} friends
