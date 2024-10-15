// function sumOffunction(numbers){
//     let sum = 0;
//     for (const number of numbers){
//         console.log(number)
//         sum = sum+number;
//     }
//     return sum
// }

// const nums = [54,56,58]

// console.log|(sumOffunction(nums))
// console.log(sumOffunction([10,10,10]))





function evenNumver(numbers){
    // console.log(numbers)
    const even = []
    for(const number of numbers){
        console.log(number)
        if(number%2===0){
            even.push(number)
        }
    }
    return even;
}

const nums = [13,12,14,12];
// evenNumber(nums)
console.log(evenNumver(nums))