class Lotto {
    constructor() {
        this.money = 0;
        this.list = [];
        this.winTable = {
            3: {
                winTimes: 0,
                prize: 5000
            },
            4: {
                winTimes: 0,
                prize: 50000
            },
            5: {
                winTimes: 0,
                prize: 1500000
            },
            6: {
                winTimes: 0,
                prize: 2000000000
            }
        }
    }

    buyLotto(money) {
        const lottoAmount = money / 1000;
        for (let i = 0; i < lottoAmount; i++) {
            this.list.push(this.createLotto())
        }

        this.money = money;
        this.print();
    }

    createLotto() {
        const numList = new Array(45).fill(0).map((num, i) => i + 1);
        const lottoNumberList = [];

        for (let i = 0; i < 6; i++) {
            const randNum = Math.floor(Math.random() * numList.length)
            const lottoNumber = numList.splice(randNum, 1)[0];

            lottoNumberList.push(lottoNumber);
        }

        return lottoNumberList.sort((a, b) => a - b);
    }

    setLuckyNumber(array) {
        let profitRate;

        this.matchNumber(this.list, array);
        profitRate = this.profitsRate();

        this.print(profitRate);
    }

    matchNumber(lottoList, luckyarray) {
        for (let lottoNum of lottoList) {
            let count = 0;

            lottoNum.forEach(num => luckyarray.some(luckyNum => luckyNum === num) ? count++ : count);
            if (3 <= count) this.winTable[count].winTimes++;
        }
    }
    profitsRate() {
        const totalPrize = this.sumPrize();
        const profitRate = ((totalPrize - this.money) / this.money) * 100;
        return profitRate.toFixed(2);
    }

    sumPrize() {
        const winTable = this.winTable;
        const totalPrize = Object.keys(this.winTable).reduce((total, count) => total += winTable[count].winTimes * winTable[count].prize, 0);
        return totalPrize;
    }

    print(profitRate) {
        if (!profitRate) {
            const headMsg = `로또 ${this.list.length}개를 발행했습니다.`;
            const msg = this.list.reduce((accMsg, lotto) => accMsg + `\n[${lotto}]`, headMsg);

            console.log(msg);
        } else {
            const headMsg = `당첨 통계\n---------`;
            const profitRateMsg = `\n나의 수익률은 ${profitRate}%입니다.`;
            const msg = Object.keys(this.winTable).reduce((accMsg, matchCount) => {
                const winTable = this.winTable;
                return accMsg + `\n${matchCount}개 일치 (${winTable[matchCount].prize}원) - ${winTable[matchCount].winTimes}개`
            }, headMsg);

            console.log(msg + profitRateMsg);
            this.init();
        }
    }

    init() {
        this.list = [];
        this.winTable = {
            3: {
                winTimes: 0,
                prize: 5000
            },
            4: {
                winTimes: 0,
                prize: 50000
            },
            5: {
                winTimes: 0,
                prize: 1500000
            },
            6: {
                winTimes: 0,
                prize: 2000000000
            }
        };
    }
}

const lotto = new Lotto;
console.log(lotto.buyLotto(3000));
console.log(lotto.setLuckyNumber([2, 15, 21, 24, 43, 45]));