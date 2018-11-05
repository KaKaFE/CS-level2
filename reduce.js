var a = ["a", "b", "c", "d", "e", "a", "b", "a", "c", "c", "c"];
var b = a.reduce(function (x, y) {
    console.log("x:", x);
    console.log("y:", y);
    x[y] = ++x[y] || 1;
    return x;
}, {});
console.log(b);