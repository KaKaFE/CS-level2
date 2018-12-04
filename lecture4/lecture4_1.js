function tokenize(str) {
    let result = [];
    let number = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ']' && str[i - 1] !== ']') result.push(number);
        if (str[i].match(/\[|\]/)) result.push(`${str[i]}`);
        if (str[i].match(/[^\[\],]/)) number += str[i];
        if (str[i] === ',') {
            if (str[i - 1] === ']') {
                number = '';
            } else {
                result.push(number);
                number = '';
            }
        };
    };
    return result;
};
var a = tokenize('[1,[1,[1,[1,[1],1],1],1],1]');
console.log(a);
// const type = {
//     '[': { type: 'array', value: 'ArrayObject', child: [] },
//     'number': { type: 'number', value: '', child: [] }
// };
let result = {
    type: 'array',
    child: []
};
function lexer(arr) {
    var lexerResult;
    lexerResult = arr.map(v => {
        if (v === '[') return { type: 'array', value: 'ArrayObject', child: [] };
        if (Number(v)) return { type: 'number', value: `${v}`, child: [] };
        return v;
    });
    console.log(lexerResult);
    return lexerResult;
};
function parser(arr) {
    let parserResult = [];
    arr.reduce(function (acc, cur, index) {
        console.log(index)
        if (acc.type === 'array' && cur.type === 'number') {
            acc.child.push(cur);
            parserResult.push(acc);
            
            return parserResult;
        }
        return acc;
    }, arr[0]);
}
console.log(parser(lexer(a)));

// function arrayParser(str) {
//   let lexerResult = lexer(str);
//   console.log(lexerResult)
//   let parserResult = {};
//   if (lexerResult[0] + lexerResult[lexerResult.length - 1] === '[]') parserResult.type = 'array';
//   parserResult.child = [];
//   for (let i = 1, j = 1; i < lexerResult.length - 1; i++ , j++) {
//     if (Number(lexerResult[i])) {
//       parserResult.child[j - 1] = { type: 'number', value: `${lexerResult[i]}`, child: [] };
//     }
//     if (lexerResult[i] !== '[') continue;
//     parserResult.child[j - 1] = { type: 'array', value: 'ArrayObject', child: [] };
//     for (let k = i + 1; k < lexerResult.length; k++) {
//       if (lexerResult[k] === ']') {
//         i = k;
//         break;
//       };
//       parserResult.child[j - 1].child.push({ type: 'number', value: lexerResult[k], child: [] });
//     };
//   };
//   return parserResult;
// };
// let result = arrayParser("[1,2,3]");

// console.log(JSON.stringify(result, null, 2));



function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val, key) {
      new_list.push(mapper(val, key));
    });
    return new_list;
  }
  
  function _is_object(obj) {
    return typeof obj == 'object' && !!obj;
  }
  
  function _keys(obj) {
    return _is_object(obj) ? Object.keys(obj) : [];
  }
  
  var _length = _get('length');
  
  function _each(list, iter) {
    var keys = _keys(list);
    for (var i = 0, len = keys.length; i < len; i++) {
      iter(list[keys[i]], keys[i]);
    }
}