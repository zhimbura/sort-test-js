(async () => {
    let response = await fetch('data/result.json')
    let result = await response.json()
    let datasets = []
    let sortTitles = []
    let keys = Object.keys(result)
    let colorsMap = new Map()
    keys.forEach(key => {
        colorsMap.set(key, `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
    })
    keys.sort()
    keys.forEach(key => {
        datasets.push({
            label: key,
            backgroundColor: colorsMap.get(key),
            borderColor: colorsMap.get(key),
            data: result[key]
        })
    })
    let minCount = Math.min(...Object.values(result).map(arr => arr.length))

    for (let i = 0; i < minCount; i++) {
        sortTitles.push(`Array Test ${i+1}`)
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortTitles,
            datasets: datasets
        },
        options: {}
    });
})()
