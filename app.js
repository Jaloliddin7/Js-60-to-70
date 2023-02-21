/*
const movies = [
    { name: 'Titanik 4D', year: 1997, rating: 7 },
    { name: 'Avatar 3D', year: 2008, rating: 9 },
    { name: 'Forsaj 9 3D', year: 2020, rating: 4 },
    { name: 'Avengers', year: 2012, rating: 6 },
  ]

movies.forEach(element => {
   if (element.year > 2010) {
    console.log(element);

   }
})

let q = [1,8,6,4,7,2,6 , 11 ,48]
let h = ['salom', 'faqat' , 'bio' , "aloqa" , 'divaiec']

let a =  q.sort(( a , b)=>{
    return b - a
})
let k =  h.sort().reverse()
a.reverse()

console.log(a.reverse());

*/

let ism = ['Jaloliddin', 'Salom' , 20 , 'Andijon' ]


localStorage.setItem('name', JSON.stringify(ism))
// localStorage.setItem('age', yosh)

// console.log();

let l = JSON.parse(localStorage.getItem('name'))

console.log( l[0]);


// localStorage.clear(l)
