# Summary 5 (SVG)
Проект система Patriot:

    layout.pug
    logo.svg
    main.js
    style.css

Файл `layout.pug`:

    doctype html
    html
        head
            meta(charset="UTF-8")
            title Patriot
            link(href="style.css", rel="stylesheet")
        body
            p Информационная система Patriot
            p Loading data

Файл `logo.svg`:

    <svg id="logotype" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135 135">
        <defs>
            <linearGradient id="circle-gradient" x1="19.77" y1="19.77" x2="115.23" y2="115.23" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="0.5" stop-color="#0037a1"/>
                <stop offset="1" stop-color="#ce2a1d"/>
            </linearGradient>
        </defs>
        <g class="circle">
            <circle cx="67.5" cy="67.5" r="67.5" style="fill: url(#circle-gradient)"/>
            <g style="opacity: 0.25">
                <path d="M67.5,3A64.5,64.5,0,1,1,3,67.5,64.57,64.57,0,0,1,67.5,3m0-3A67.5,67.5,0,1,0,135,67.5,67.5,67.5,0,0,0,67.5,0Z" style="fill: #151100"/>
            </g>
        </g>
        <circle class="dot dot--bottom"  cx="37.5" cy="97.5" r="13" style="fill: #fff" />
        <circle class="dot dot--center"  cx="67.5" cy="67.5" r="13" style="fill: #fff" />
        <circle class="dot dot--top"     cx="97.5" cy="37.5" r="13" style="fill: #fff" />
    </svg>

Файл `main.js`:

    const fs = require('fs')
    const pug = require('pug')

    fs.writeFileSync('index.html', pug.renderFile('layout.pug'))

Файл `style.css`:

    body {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        /* justify-content: center; */
        font-family: 'Courier New', Courier, monospace;
        font-size: 120%;
    }

## SVG
Выводим SVG-файл между двумя параграфами, есть два варианта:
- через тег `img src="logo.svg"`, в этом случае анимировать детали svg не получится
- включаем напрямую через `include logo.svg`

Изменяем SVG через CSS:

    /* Анимация логотипа */
    #logotype {
        max-width: 800px;
    }
    #logotype .dot
    { 
        transform-origin: 50% 50%;
        animation-delay: 0s;
    }
    #logotype .dot--bottom,
    #logotype .dot--top
    {
        animation: dotAnim 2s infinite;
    }
    #logotype .dot--center
    {
        animation: dotCenterAnim 1s infinite alternate;
    }
    @keyframes dotCenterAnim
    {
        from    { opacity: 1; }
        to      { opacity: 0; }
    }
    @keyframes dotAnim
    {
        from    { transform: rotate(0); }
        to      { transform: rotate(360deg); }
    }
