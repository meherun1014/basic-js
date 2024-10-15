// //ternary operator.

// const age = 20
// if(age>18){
//     console.log('you are youngster');
// }
// else{
//     console.log('you are kid');
// }

// //condition ? do something when true : do something when fale;

// age>18?console.log('you can vot'):console.log('you dont need vot')

let price = 500;
const isNeta = false;

if(isNeta ===true){
    price=0;
}
else{
    price= price + 100;
}
console.log(price)

price = isNeta ===true?0:price+100;