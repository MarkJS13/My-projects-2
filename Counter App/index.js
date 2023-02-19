const display = document.querySelector('.number-display');
const operators = document.querySelector('.operator-container');

let number = 0;
operators.addEventListener('click', e => {
    
     if(e.target.classList.contains('increase')) {
        display.textContent = ++number;
     } if (e.target.classList.contains('decrease')) {
        display.textContent = --number;
     } else if(e.target.classList.contains('reset')) {
      number = 0;
      display.textContent = number;
     }
})

