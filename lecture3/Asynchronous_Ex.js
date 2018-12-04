const baseData = [1, 2, 3, 4, 5, 6, 100];

const asyncRun = (arr, fn) => {
  arr.forEach((v, i) => {
    setTimeout(() => {
      setTimeout(() => {
        console.log("cb 2");
        fn(i)
      }, 1000);
      console.log("cb 1");
    }, 1000);
  });
}

asyncRun(baseData, idx => console.log(idx))

// 실행결과는
// cb1 * 7번
// cb2
// 0
// cb2
// 1
// ....