const myfirend = {
    key: 'value',
    name: 'kaka',
    age: '20'
};

console.log(myfirend['key']);
console.log(myfirend.key);

myfirend.age = 34;

console.log(myfirend.age);
console.log('-----------------')

for (var property in myfirend) {
    console.log(myfirend[property])
}

var key = Object.keys(myfirend)
console.log(key)
for (var value of key) {
    console.log(value)
}
console.log('-----------------')

var values = Object.values(myfirend)
console.log(values)
for (var value of values) {
    console.log(value)
}
console.log('-----------------')
const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}
var result = [];
for (v in widget) {
    if (typeof widget[v] === 'object')
        for (x in widget[v]) {
            if (typeof widget[v][x] === 'number') {
                result.push(widget[v][x])
            }
        }
}
console.log(result);

