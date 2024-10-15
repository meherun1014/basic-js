const college = {
    name:'CGC',
    class:['12','11'],
    event:['science fair','bijoy dibos'],
    unique:{
        color:'blue',
        result:{
            Gpa:5,
            merit:'top'

        }
    }
}
college.class='hons'
college.unique.result.Gpa='top top to'
console.log(college.unique.result.Gpa)
console.log(college.class)




let computer ={
    brand:'apple',
    price: 35000000,
    hdd:'512Gb',
    monitor:'hp',
    processor:'Intel'
}

const values = Object.values(computer)
console.log(values)


const keys = Object.keys(computer);
// console.log(Object.keys(computer))
console.log(keys)
console.log(computer.brand)




const person = {
    name: 'jimi',
    age: '24',
    address: 'coxs bazar'
}