const path = require('path')
const fs = require('fs')
const performance = require('perf_hooks').performance;
const sortBy = require('lodash.sortby');
const arrays = require(path.join('../', 'data', 'array.json'))
const resultJSON = require(path.join('../', 'data', 'result.json'))
let results = []
resultJSON['lodash-v8-' + process.versions.v8] = results
for (let countArrays = 0; countArrays < arrays.length; countArrays++) {
    let t1 = performance.now()
    arrays[countArrays] = sortBy(arrays[countArrays], (a) => a.value)
    let t2 = performance.now()
    results.push(t2 - t1)

    for (let i = 1; i < arrays[countArrays].length; i++) {
        if (arrays[countArrays][i - 1].value > arrays[countArrays][i].value) {
            throw new Error('Error Sorting')
        }
    }
}

fs.writeFileSync(path.join('data', 'result.json'), JSON.stringify(resultJSON))
