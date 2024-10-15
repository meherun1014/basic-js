let addres = `CoxsBazarEidgah`

// console.log(addres.toLocaleLowerCase())
// console.log(addres.toLocaleUpperCase())

console.log(addres.length)
console.log(addres.slice(0,9))
console.log(addres.split(''))
console.log(addres.split(' '))


let mybestfriendlist = ['Mukta','Afra','Taslima',]
 console.log(mybestfriendlist.join('-'))
 console.log(mybestfriendlist.join('|'))

 let Fname = 'Meherunnesa'
 let Lname = 'Jimi'
 let FullName = Fname +" "+ Lname;
 console.log(Fname.concat(Lname))       //concat diye o jug kora jai
 console.log(FullName)




let book = 'English'
let books = 'english'

console.log(book)
console.log(books)

if(book===books){
    console.log('pora lekha korbu')

}
else{
    console.log('pora lekha korbu na')
}
if(book.toLowerCase()===books.toLowerCase()){
    console.log('pora lekha korbu')

}
else{
    console.log('pora lekha korbu na')
}



let flower = 'Rose'                //rose er modde jotota alpabet ache totota output asve string e
 
for(let ful of flower){
    console.log('Rose')
}

