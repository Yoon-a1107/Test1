//* 정보 : 변수는 데이터를 담는 상자입니다.
const name = "Yoona" ; //
let age = 29; //
const myFavoritecolor = "#3498db" //
// ! 경고 : const는 한 번 정하면 바꿀 수 없어요

// ? 질문: 오늘 잔디를 심었나요?
let didPushToday = true;

if (didPushToday) { //
    console.log("오늘도 잔디 심기 성공!🌿");
    if (age >= 20) { //
        console. log("멋진 20대 개발자의 길을 가고 계시군요!");
    }//
    }// 

    // TODO: 이번 주 공부 계획 리스트 만들기
const weeklyPlan = ["Git 공부", "PowerShell 연습", "잔디 심기", "운동하기"];

// 반복문으로 하나씩 출력해보기
weeklyPlan.forEach((plan, index) => {
    // Tab을 눌러 들여쓰기를 하면 무지개 색이 나타납니다.
    console.log(`${index + 1}순위 목표: ${plan}`);
});