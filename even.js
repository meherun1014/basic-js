let price = 0;
let sum = 0;

while(price<=10){
    price++
    if(price%2===0){
        console.log('even number', price)
    }
    sum = sum + price
    console.log('Total',sum)
}


for (let i=1; i<=6; i++){
    
    if(i===5) {break;}
    console.log('Number', i)
}

let n = 50;
while(n<=60){
    console.log(n)
    n++
    if(n>55){
        break
    }
}
console.log('after break up i will strong')

for(let i=1; i<10; i++){
            if(i%2===1){
                continue
            }
            console.log(i)
}

let num = 0;
while(num<=10){
    
    num++
    if(num%2===1){
        continue
    }
    console.log(num)
}
    
    