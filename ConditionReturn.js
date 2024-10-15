// conditionalReturn


function isEven(number){
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }
}

const myEven = isEven(5);
console.log(myEven)
console.log(isEven(10));
console.log(isEven(15));


function isOdd(number){
    if(number%2===1)
        return true;
    else{
        return false;
    }
}
const myOdd = isOdd(6);
console.log(myOdd)
console.log(isOdd(10))
console.log(isOdd(15));



function address(home){
    const size = home.length;
    return size;
}

const myhome = address('coxsbazar')
console.log(myhome)


function thikana(bari){
    const gor = bari.length;
    if(bari%2===0){
        return true
    }
    else{
        return false
    }
}

const mybari = thikana('ramu');
console.log(mybari)