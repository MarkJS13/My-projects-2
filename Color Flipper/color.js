const container = document.querySelector('.container');
const color = document.querySelector('.color'); 

let arrColor = ['cyan', 'crimson', 'blue', 'yellow', 'green', 'black', 'pink'];




color.addEventListener('click', e => {
    e.preventDefault();
    let math = Math.round(Math.random() * (arrColor.length - 1))
    container.style.backgroundColor = arrColor[math];
})


// const colorArray = () => {
//     let math = Math.round(Math.random() * 7);
//     if(math === 6) {
//         container.style.backgroundColor = 'black';
//     } else if(math === 5) {
//         container.style.backgroundColor = 'green';
//     } else if(math === 4) {
//         container.style.backgroundColor = 'yellow';
//     }
//     else if(math === 3) {
//         container.style.backgroundColor = 'blue';
//     }
//     else if(math === 2) {
//         container.style.backgroundColor = 'crimson';
//     }
//     else if(math === 1) {
//         container.style.backgroundColor = 'cyan';
//     }
    
// };



