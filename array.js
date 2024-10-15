const number =[12,12,24,33]

number.pop()
    //  [pop er maddhome last array kete jai]
number.push(50)
    //   [push er maddome digit add kora hoi]
number.shift()
    //   [shift er maddome array ager digit ta cut kora hoi]
number.unshift('jimi')
    //  [unshift er maddhome array first digit e number/string add kora hoi]
number[2]=60
    //   [ei formet onujai hocce array digit er 2/3 eirkm man change kora hoi]
console.log(number)
console.log(number.length)
console.log(number.indexOf(24))



let ArrayFruits = ['banana', 'apple', 'mango', 'orange']

let num5 = 'jimi'

console.log(Array.isArray(ArrayFruits))
console.log(Array.isArray(num5))
console.log(ArrayFruits.indexOf('banana'))
ArrayFruits[1]=20;
ArrayFruits.push('lichi')
console.log(ArrayFruits)


if(ArrayFruits.includes('grapes')){
    console.log('done')
}
                                //    [include mane hocce array modde jegula ache ota dekhanur.garpes array er modde chilo na bole "not done"]

else{
    console.log('not done')
}
