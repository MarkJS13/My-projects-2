// const taskList = document.querySelector('.task-list');
// const submit = document.querySelector('submit');
// const show = document.querySelector('#list-task');
// const form = document.querySelector('.task-add');
// const arrow = document.querySelector('.arrow')


// form.addEventListener('submit', e => {
//    e.preventDefault();
//    let newli = document.createElement('li');
//    let add = form.add.value;
//    newli.textContent = add;
//    show.style.display = 'block';
//    taskList.append(newli);
//    form.add.value = '';
   
   
//     arrow.style.display = 'block';
    
   
// });



// taskList.addEventListener('click', e => {
//     if(e.target.tagName === 'LI') {
//         e.target.remove();
//     }
    
// })


// arrow.addEventListener('click', () => {
//     scrollTo(0,0);

    
// })

/* <----- filter method ------>

const scores = [10, 30, 15, 25, 50, 40, 5];

 let scored = [];
scores.forEach(e => {
      if(e > 20) {
          scored.push(e);
     }
  })
  console.log(scored)

 let filter = scores.filter((score) => {
     return score > 20;
 })

 console.log(filter)


const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(u => u.premium);

console.log(premiumUsers)
*/


/* <-------- map method ----------->
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => price / 2);
// console.log(salePrices)

const product = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skins', price: 10},
    {name: 'banana skins', price: 50}
];


const mapUsers = product.map(product => {
    if(product.price > 30) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
})

console.log(mapUsers);

*/


// <---- reduce method ----> 
/*
 const scores = [10, 20, 60, 40, 70, 90, 30];

 const result = scores.reduce((acc, curr) => {
     if(curr > 50) {
        acc++
     }
     return acc;
 }, 0)

 console.log(result)


const scores = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 715},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 510},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 50},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 30},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 100},
    {player: 'crystal', score: 60}
];

let scoreMap = scores.reduce((acc, curr) => {
    if(curr.player === 'mario') {
        acc += curr.score;
    }
    return acc;
}, 0)

console.log(scoreMap);
*/

/* <------ find method ------>

const scores = [10, 5, 0, 40, 60, 10, 20, 70];

let findScore = scores.find((score) => {
    return score > 50;
})

console.log(findScore)
*/

/* // <---- sort method -----> 
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.

const scores = [10, 50, 5, 20, 35, 70, 45];

scores.sort((a,b) =>{
    if(a > b) {
        return -1
    } else if(b < a) {  
        return 1;
    } else {
        return 0;
    }
})

// scores.sort();
 console.log(scores);


//example 3 = sorting objects

const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];



players.sort((a,b) => {
    if(b.score > a.score) {
        return -1;
    } else if(a.score > b.score) {
        return 1;
    } else {
        return 0;
    }
})

players.sort((a,b) => b.score - a.score)

console.log(players)



const digits = [2, 2000, 10, 15, 35, 70, 54];

digits.sort((a,b) => b - a)

console.log(digits); */

// <--- array method chaining --->
/*
const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];

const promos = products
.filter(product => product.price > 20)
.map((product) =>  `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos)
*/