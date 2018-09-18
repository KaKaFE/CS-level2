// ex1
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

const result = [];
for(key in widget){
    for(inkey in widget[key]){
        if(typeof widget[key][inkey] === 'number'){
            result.push(inkey)
        }
    }
}
// console.log(result);

// console.log(widget.debug); // . 을붙여 값에 접근 가능
// console.log(widget.window['name']); // [] 로 접근가능 '' 을 붙여줘야한다
// // 객체 안을 탐색하는 반복문
// for(key in widget.window){
//     console.log(widget.window[key])
// }

// ex2
const tree = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "kt",
        "childnode": [{
            "id": 115,
            "name": "hary",
            "phone": "211-1111-0000",
            "type": "sk",
            "childnode": [{
                "id": 1159,
                "name": "pobi",
                "phone": "010-444-000",
                "type": "kt",
                "childnode": [{
                    "id": 11592,
                    "name": "cherry",
                    "phone": "111-222-0000",
                    "type": "lg",
                    "childnode": []
                },
                {
                    "id": 11595,
                    "name": "solvin",
                    "phone": "010-000-3333",
                    "type": "sk",
                    "childnode": []
                }
                ]
            }]
        },
        {
            "id": 116,
            "name": "kim",
            "phone": "444-111-0200",
            "type": "kt",
            "childnode": [{
                "id": 1168,
                "name": "hani",
                "phone": "010-222-0000",
                "type": "sk",
                "childnode": [{
                    "id": 11689,
                    "name": "ho",
                    "phone": "010-000-0000",
                    "type": "kt",
                    "childnode": [{
                        "id": 116890,
                        "name": "wonsuk",
                        "phone": "010-000-0000",
                        "type": "kt",
                        "childnode": []
                    },
                    {
                        "id": 1168901,
                        "name": "chulsu",
                        "phone": "010-0000-0000",
                        "type": "sk",
                        "childnode": []
                    }
                    ]
                }]
            }]
        },
        {
            "id": 117,
            "name": "hong",
            "phone": "010-0000-0000",
            "type": "lg",
            "childnode": []
        }
        ]
    }]
}]

const resultArray = [];

const testRecursionDataExplore = function (childNode) {
    childNode.forEach(function (v) {
        if (v.type === "sk") {
            var obj = { type: v.type, name: v.name };
            resultArray.push(obj);
        }
        if (v.childnode.length > 0) {
            testRecursionDataExplore(v.childnode);
        }
    });
};

testRecursionDataExplore(tree);
console.log(resultArray);
