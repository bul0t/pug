const fs = require('fs');
const pug = require('pug');

let compileFunc = pug.compileFile('layout.pug');

for (let i = 0; i < 3; i++) {
    let data = {
        i: i
    }

    let html = compileFunc(data)
    // fs.writeFileSync('index.html', html);
    console.log(html);
}
