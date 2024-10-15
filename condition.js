console.log(10>5)
console.log(10>20)
console.log(20==20)
console.log(20=="20")
console.log(20>=19)


if(10>5) {
    console.log("Done")
}

var applePrice = 300;
var orangePrice = 200;
var money = 200;
if(applePrice<money){
    console.log('i will buy it')
}

// if(applePrice>money){
//     console.log('i will not buy it')
// }

else if(money>=orangePrice){
    console.log('orange')
}
else{
    console.log('ami misty khavo')
}

const salary = 25000
const height = 61;
const isBCS = false

if(salary>20000 || height>66 || isBCS<true)  {
    console.log('my man salary')
}

else{
    console.log('i don"t need other person')
}


if(salary==25000 && height>=60){
    console.log('ami raji tumi jodi bolo')
}
else{ 
    console.log('i am not raji')
}


    /*condition 3ta hole o 2ta dhora hobe but dhora hobe 2ta. ekta na mille o condition milbe na.jemon bcs false dewa ache but condition true dewa ache tai next ta condition nibe.ache*/


if((salary>19990 && height==60) || isBCS==true){
    console.log('i am ready')                                      
}

else{
    console.log('but his not ready')
}

const price = 3000;

 if(price>=10000){
    const discount = price*10/100;
    const payAmount = price-discount;
     console.log(payAmount);
 }

 else if(price>=5000){
    const dicuont = price*5/100;
    const payAmount = price-discount;
     console.log(payAmount);
 }

 else if(price>=3000){
    const discount = price*3/100;
    const payAmount = price-discount;
    console.log(payAmount);
 }

 else{
    console.log(price)
 }