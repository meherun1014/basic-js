function tentimes(number){
    const result = number*10;
    return result
}
const poket = tentimes(5);
console.log('return value', poket)


function cuthalf(num){
    const half = num /2;
    return half;
}

const returnValue = cuthalf(10);
const returnValuetwo = cuthalf(20)
console.log(returnValue)
console.log(returnValuetwo)



function bankB(previousB,withdraw){
    const currentB = previousB - withdraw;
    return currentB;

}
const CurrentB= bankB(5000,500);
console.log(CurrentB)


function add(price1=0,price2=0,price3=0){
    const item = price1+price2+price3;
    return item;
}
const arjina = add(12,10,10)
console.log(arjina)

const taslime = add(10,10);
console.log(taslime)

const jimi = add();
console.log('output',jimi)