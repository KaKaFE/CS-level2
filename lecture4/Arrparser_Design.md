# ArrayParser 디자인

1. 전체적인 작동 구조
   1. Str이 주어진다.	 **ex)** '[123,[2,[3],4],5]'
   2. 주어진 값을 의미 있는 token 단위로 분리 배열로 반환. 
   3. 분리한 토큰을 type에 맞게 구분.   **ex)** '[' => 'array' 임을 인식 하여 분석 객체를 반환
   4. arrayParser 가 분석 객체 를통해 최종 array 분석 객체를 리턴.

# 필요한 것들

- 2번 동작에서  1번째 값인 '123' 을 하나의값으로 인식하게 반환해야함



  - number라는 빈값을 두어,  ',' 나 ']' 을많나기전까지 토큰하나를 넘버에 더해 그값이 누적되게 해서 구현

  - tokenize함수를 구현, str을 인자로 받는다, each함수를 구현 str과 함수를 인자로 받고 each 함수 내부에 결과값 배열과, number 변수를 두고 each함수의 인자로 받은 함수를 str의 길이만큼 실행하는 방식 이때 each함수에는 checkToken 함수를 인자로준다. 

  - checktoken 은 i값을 each에서 참조, str, 결과배열 , number변수를 인자로받아 str[i] 번째 글자를 check 하여 token 단위로 구분, 

- 3번 동작에서 



  - lexer 함수를 통해 구현 , tokenize된 결과값을 map을 통해 

    '[' 일경우 { type: 'array', value: 'ArrayObject', child: [] }; 값을 리턴

    'number' 일 경우 { type: 'number', value: `${넘버값}`, child: [] }; 값을 리턴

    기대하는형태의 예

    ```css
    lexerResult = [
    { type: 'array', value: 'ArrayObject', child: [] },
    { type: 'number', value: `${넘버값}`, child: [] },
    ...,
    ']',
    ']'
    ]
    ```

    이값을 잘 이용하면 parser를 구현가능 할것같다.

- 4번 Parser 는 lexerResult 의 값을 축약해야한다 reduce를 이용하면될듯?



  기대하는 동작형태는 초기값 type이 array고 현재값 type이 number면 초기값.child에 현재값을 push

  그후, 초기값을그대로 가지고있고, 다음값 으로 넘어가 typecheck 를하여 상황별 행동을 다르게 하고,

  2번째 현재값이 'array'일때 초기값을 현재값으로 교체 다시루프를돌아 위와같은 방식으로 실행

  이때 초기값은 맨 첫번째의 초기값의 child에 push가 되야하는데,  

  step3의 stack을 이용하라는 힌트를 보고 stack class를 두어, 빈배열과, 중첩카운트를 이용하기로.

  array타입을 가지고 루프를돌다 array타입을 만나면 가지고있던 초기값을 stack 배열에 push

  중첩카운트를 1증가하고, reduce의 현재값을 가지고있던 누적값과 교체, 이때 ']'값을 만났을때 동작은

  스택배열[중첩카운트] 의 값에 child 에 현재값을 psuh 하고, 현재 값을 스택배열[중첩카운트]로 교체

  중첩카운트를 감소시킨다. 이러한방식으로 동작하게된다면 무한중첩배열도 parser가 가능할거 같다.



  ![동작방식](/pr.png)

  -  동작방식을 그림으로 표현을...하고 싶었는데 잘 안됬습니다...