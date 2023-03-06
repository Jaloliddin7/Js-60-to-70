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

/*
let ism = ['Jaloliddin', 'Salom' , 20 , 'Andijon' ]


localStorage.setItem('name', JSON.stringify(ism))
// localStorage.setItem('age', yosh)

// console.log();

let l = JSON.parse(localStorage.getItem('name'))

console.log( l[0]);


localStorage.clear(l)
*/
/*
const request = new XMLHttpRequest()


request.addEventListener('readystatechange', () => {
 // console.log(request, request.readyState);

 if (request.readyState === 4) {
   console.log(request.responseText);
 }
 console.log();
})


// OPEN 

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')

request.send()

*/

// for (let i = 5; i < 8; i++) {

//   for (let j = i; j < 15; j++) {
//       console.log(i , 'a \n' + j);    
//   }
// }


// let a = Number(prompt("Son kiriting:"));
// let b = Number(prompt("Son kiriting:"));

// function sum(s) {
//   let x = s * 2
//   return x;
// }
// function sum2(v) {
//   return (v * 2) + sum(a);
// }

// console.log(sum2(b));
let a = Number(prompt("Son kiriting:"));
// let b = Number(prompt("Son kiriting:"));

function sum(s) {
 
  return s % 2 == 0 ? "Juft" : "Toq" ;
}
function sum2(v) {
  console.log(sum(v));
}

sum2(a)

// console.log(sum2(b));

