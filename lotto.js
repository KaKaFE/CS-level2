// 월요일 2시까지 완성

class Lotto {
    constructor() {
        this.money = 0;
        this.list = [];
        this.당첨테이블 = {
            3: {
                당첨개수: 0,
                당첨금액: 5000
            }, 4: {}, 5: {}, 6: {}
        }
    } 

function buyLotto(money) {
    this.money = money;
    반복문 횟수 money / 1000
    this.list.push(createLotto())

    print();
}
function createLotto() {
    1~45배열
    return 임의의 6개번호가 담긴 배열;
}

function setLuckyNumber(array) {
    matchNumber(this.list, array);
    let 수익률 = profitsRate();
    print(수익률)
}
function matchNumber(array(this.list), luckyarray) {
    변수 count(맞은 번호 개수);
    for (this.list.length 만큼) {
        //this.list[i].filter(num => arr2.some(luckyNum => luckyNum === num))
        this.list[i].forEach(num => luckyarray.some(luckyNum => luckyNum === num) ? count++ : count)
        if(count >2) this.당첨테이블[count].당첨개수++
    }
}

function profitsRate() {
    this.당첨테이블, money,
    let 당첨금액합 = 당첨금액합함수(this.당첨테이블);
    return ((당첨금액 - money) / money) * 100
}
function print(수익률%) {
    if(!arguments) {
        발행프린트;
    } else {
        당첨프린트;
        init();
    }
}
function init() {

}
}