var news = [
	{
		"title" : "sbs",
		"imgurl" : "http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/001.jpg",
		"newslist" : [
				"[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
				"리캡차'가 사라진다",
				"갤럭시S8' 출시? '갤노트7' 처리 계획부터 밝혀야",
				"블로코-삼성SDS, 블록체인 사업 '맞손",
				"[블록체인 톺아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인" 
		]
	},
	{
		"title" : "mbc",
		"imgurl" : "http://static.naver.net/newsstand/2017/0313/article_img/9033/220451/001.jpg",
		"newslist" : [
				"Lorem ipsum dolor sit amet, consectetur adipisicin",
				"ipsum dolor sit amet, consectetur adipisicin",
				"dolor sit amet, consectetur adipisicin",
				"amet, consectetur adipisicin"
		]
	},
		{
		"title" : "매일경제",
		"imgurl" : "http://static.naver.net/newsstand/2017/0314/article_img/9054/134051/001.jpg",
		"newslist" : [
				"페이스북, '감시 목적으로 데이터 사용 금지'",
				"구글, ‘저널리즘 360° 챌린지’ 프로젝트 공모전 실시",
				"효과적인 이메일 마케팅을 위한 6가지 방법",
				"amet, consectetur adipisicin"
		]
	}
];
//make title and imgurl array of mbc
// let [, {title}, {imgurl}] = news;
// console.log([title, imgurl]);


// //destructuring in function parameters
// let {newslist} = mbc;
// function getNewslist({newslist}) {
//     console.log(newslist);
//   }
//   getNewslist(mbc);
  
  //make imgurl array.
//   var urls = news.map(({imgurl}) => imgurl);
//   console.log(urls);
console.log(Array.from({length: 5}, (v, k) => k))
    
