import {
    arr,
    my_type,
    fibo,
    LCM,
    GCD,
}from './problem'

// 1번 문항
const com = (a:number, b:number) : boolean =>{
    return a<b;
}

for(var i=0; i<3; i++){
    arr[i] *= arr[i];
}

arr.sort( function(a:number, b:number) : number {
    return b-a;
});

console.log(arr);

// 3번 문항
console.log("No.3 : idk");
// 4번 문항
console.log("No.4 : idk");
// 5번 문항
console.log("No.5 : idk");
// 6번 문항
console.log(fibo(35));
// 7번 문항
console.log(`${LCM(15, 21)} \n${LCM(33, 22)} \n${LCM(9, 10)}`);
/**
 * [결과가 아래와 같아야합니다.]
 * ==========================
 * [ 9, 4, 1 ]
 * (문제에 Output 양식이 적혀있습니다.)
 * 9227465
 * 105
 * 66
 * 90
 * [ '혼합잡곡밥(12곡잡곡)', '얼큰우동국☆', '감자조림☆(간장)', '돈가스☆', '깍두기', '과일샐러드☆' ]
 * 🐓
 * 🥚
 */