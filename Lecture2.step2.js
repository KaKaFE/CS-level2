// 김아무개의 학점데이터
const gradesData = [
    {
        name: '데이터베이스',
        grade: 'A',
        credit: 3,
        major: false
    },
    {
        name: '교양영어',
        grade: 'B',
        credit: 2,
        major: true
    },
    {
        name: '철학',
        grade: 'B+',
        credit: 1,
        major: false
    },
    {
        name: '알고리즘',
        grade: 'A',
        credit: 1,
        major: true
    },
    {
        name: '이산수학',
        grade: 'A+',
        credit: 2,
        major: true
    },
    {
        name: '영어회화',
        grade: 'A+',
        credit: 4,
        major: true
    },
    {
        name: '건축학개론',
        grade: 'B+',
        credit: 2,
        major: true
    }
];
// 4.5기준 학점등급 객체
const gradeMap = {
    'A+': 4.5,
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
    'D+': 1.5,
    'D': 1.0,
    'F': 0
};
// 새로운 과목 추가 함수
let addLecture = function (newname, newgrade, newcredit, newmajor) {
    gradesData.push({
        name: newname,
        grade: newgrade,
        credit: newcredit,
        major: newmajor
    });
    showGrade(gradesData, gradeMap);
};
//  기존과목을 삭제하는 함수 ,입력 시간만큼 지연후, showGrade함수실행
let removeLecture = function (gradesData, gradeName, time) {
    gradesData.filter(v => {
        if (v.name === gradeName) {
            gradesData.splice(gradesData.indexOf(v), 1);
        }
    });
    setTimeout(() => { showGrade(gradesData, gradeMap) }, time)
};

// 학점데이터의 총 이수학점을 구하는 함수
let getTotalOfCredits = function (gradesData) {
    let totalOfCredits = 0;
    totalOfCredits = gradesData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.credit;
    }, totalOfCredits);
    return totalOfCredits.toFixed(2);
};
getTotalOfCredits(gradesData);
// 성적을 계산하는 함수 (성적 * 이수학점)을 모두더한다
let getTotlalOfGrades = function (gradesData, rating) {
    let totlalOfGrades = 0;
    gradesData.forEach(v => {
        totlalOfGrades += (rating[v.grade] * v.credit);
    });
    return totlalOfGrades.toFixed(2);
};
// 원하는 만점기준 학점 계산함수 ( 계산 = (총학점 * 원하는 값) / 4.5 )
let calculateCreditUserwant = function (gradesData, rating, credit) {
    const userWantValue = credit;
    const Grades = calculateFourPointFiveCredit(gradesData, rating);
    let ConversionGrades = (Grades * userWantValue) / rating['A+'];
    return ConversionGrades.toFixed(2);
};
// 4.5기준 학점계산함수
let calculateFourPointFiveCredit = function (gradesData, rating) {
    let fourPointFiveGrades = getTotlalOfGrades(gradesData, rating) / getTotalOfCredits(gradesData);
    return fourPointFiveGrades.toFixed(2);
};
// 전공과목 gradesData배열 생성함수
let filterlingMajorGradeObj = function (gradesData) {
    let majorGradesData = gradesData.filter(v => v.major === true);
    return majorGradesData;
};
// 전공과목 이수학점 계산 함수
let getTotalofMajorCredit = function (gradesData) {
    let TotalofMajorCredit = 0;
    gradesData.forEach(v => {
        if (v.major) {
            TotalofMajorCredit += v.credit;
        }
    });
    return TotalofMajorCredit;
};
// 출력함수
let showGrade = function (gradesData, rating) {
    console.log('(4.0)기준 총 평점 : ' + calculateCreditUserwant(gradesData, rating, 4.0));
    console.log('(4.5)기준 총 평점 : ' + calculateFourPointFiveCredit(gradesData, rating));
    console.log('(4.0)기준 전공 학점 : ' + calculateCreditUserwant(filterlingMajorGradeObj(gradesData), rating, 4.0));
    console.log('(4.5)기준 전공 학점 : ' + calculateFourPointFiveCredit(filterlingMajorGradeObj(gradesData), rating));
    console.log('총 이수학점 : ' + getTotalOfCredits(gradesData));
    console.log('총 전공이수학점 : ' + getTotalofMajorCredit(gradesData));
};
// 정렬된 학점 출력 함수
let showSortGrade = function (gradesData, gradeMap) {
    let sortedGrades = sortCredit(sortGrade(gradesData, gradeMap));
    console.log('------------------정렬된 학점------------------');
    sortedGrades.forEach((v, i) => {
        if (i === sortedGrades.length - 1) {
            console.log('과목명 : %s  ||  점수 : %s  ||  %d학점 ', v.name, v.grade, v.credit);
            return;
        }
        console.log('과목명 : %s  ||  점수 : %s  ||  %d학점 ', v.name, v.grade, v.credit);
        if (sortedGrades[i].grade !== sortedGrades[i + 1].grade) {
            console.log(' ');
        }
    });
    console.log('----------------------------------------------');
};
// 학점 정렬함수
let sortGrade = function (gradesData, gradeMap) {
    let sortedGrade = gradesData.sort((a, b) => {
        let nameA = gradeMap[a.grade];
        let nameB = gradeMap[b.grade];
        if (nameA < nameB) return 1;
        if (nameA > nameB) return -1;
        return 0;
    });
    return sortedGrade;
};

let sortCredit = function (sortedGrade) {
    sortedGrade.sort(function (a, b) {
        if (a.grade.toUpperCase() === b.grade.toUpperCase()) {
            let x = a.credit;
            let y = b.credit;
            if (x < y) return 1;
            if (x > y) return -1;
            return 0;
        }
    });
    return sortedGrade;
};
// showGrade(gradesData, gradeMap);
// addLecture('알고리즘', 'A', 3, true);
// removeLecture(gradesData, '알고리즘', 2000);
// sortGrade(gradesData, gradeMap);
showSortGrade(gradesData, gradeMap);
