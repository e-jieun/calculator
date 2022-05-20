// 목요일 = [찬합, 다이소];
let thursdayCost = {
  dosirak: 4000,
  peelingpad: 500
};
// 금요일 = [책꽂이, 물컵];
let fridayCost = {
  bookshelf: 5000,
  cup: 2000
};
// 토요일 = [코코넛커피쉐이크, ];
let saturdayCost = {
  coconutshake: 6700,
  hamcheesesando: 3800 
};

const another = {
  monster: 2000,
  tteokbokki: 3500,
  cancoffee: 800,
  bibimbob: 6000,
  friends: 2500
}

function thursdayAll(a, b){
  return a*3+b*5;
}
// b에 미리 값을 정해주면 호출할 떄 만약에 인수를 지정하지 않더라고 선언시 지정한 인자의 값이 들어간다
function sum(a,b=0,c=0){
  return a+b+c;
}
// 함수로 객체 접근방식 객체[속성]
console.log(thursdayAll(thursdayCost['dosirak'],thursdayCost['peelingpad'])); //14500
console.log(sum(fridayCost['bookshelf'],fridayCost['cup']));
console.log(sum(saturdayCost['coconutshake'],saturdayCost['hamcheesesando']));

const all = `${sum(sum(thursdayAll(thursdayCost['dosirak'],thursdayCost['peelingpad']),sum(fridayCost['bookshelf'],fridayCost['cup']),sum(saturdayCost['coconutshake'],saturdayCost['hamcheesesando'])))}`; //32000

console.log(all);