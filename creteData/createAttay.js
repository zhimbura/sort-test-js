const fs = require('fs')
const path = require('path')
if (!fs.existsSync(path.join('../', 'data', 'array.json'))) {
    let multipleArray = []
    for (let countArrays = 0; countArrays < 10; countArrays++) {
        let array = []
        for (let i = 0; i < 100000; i++) {
            let random = Math.floor(Math.random() * (9999))
            array.push({name: `item ${i}`, value: random})
        }
        multipleArray.push(array)
    }
    fs.writeFileSync(path.join('data', 'array.json'), JSON.stringify(multipleArray))
}

