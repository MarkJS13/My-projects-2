const game = document.querySelector('.gameplay');
const result = document.querySelector('.result');
const placeholder = document.querySelector('.place-holder');

let answers = ['rock', 'paper', 'scissors']


let computerAnswer = (random) => {
   let computer = '';
   if(random == 0) {
      result.textContent = 'Computer selects rock';
      computer += 'rock';
    } else if(random == 1) {
      result.textContent = 'Computer selects paper';
      computer += 'paper';
    } else if(random == 2) {
      result.textContent = 'Computer selects scissor';
      computer += 'scissors';
    }
    return computer;
}



 game.addEventListener('click', e => {
    let randomPick = Math.round(Math.random() * (answers.length - 1))
    let input1 = '';
   if(e.target.classList.contains('rock')) {
      input1 += answers[0];
   } else if(e.target.classList.contains('paper')) {
      input1 += answers[1];
   } else if(e.target.classList.contains('scissors')) {
      input1 += answers[2];
   }

   
   //  console.log(input1);

   //  console.log(computerAnswer(randomPick));
    console.log(compareAnswers(input1, computerAnswer(randomPick)));
    
  })

const user = document.querySelector('.score .you');
const computer = document.querySelector('.score .computer');

let userScore = 0;
let computerScore = 0;
const compareAnswers = (ans1, ans2) => {
   if(ans1 === ans2) {   
      placeholder.textContent = 'Tie game!';
   };

   if(ans1 === 'rock' && ans2 === 'paper') {
      placeholder.textContent = 'Computer wins!';
      computerScore++;
      
   } else if(ans1 === 'paper' && ans2 === 'rock') {
      placeholder.textContent = 'You win!';
      userScore++;
   }

   if(ans1 === 'paper' && ans2 === 'scissors') {
      placeholder.textContent = 'Computer wins!';
      computerScore++;
   } else if(ans1 === 'scissors' && ans2 === 'paper') {
      placeholder.textContent = 'You win!';
      userScore++;
   }

   if(ans1 === 'rock' && ans2 === 'scissors') {
      placeholder.textContent = 'You win';
      userScore++;
   } else if(ans1 === 'scissors' && ans2 === 'rock') {
      placeholder.textContent = 'Computer wins';
      computerScore++;
   }

   user.textContent = `You: ${userScore}`;
   computer.textContent = `Computer: ${computerScore}`;
   
}

const reset = document.querySelector('.reset');

reset.addEventListener('click', e => {
   userScore = 0;
   computerScore = 0;
   user.textContent = `You: ${userScore}`;
   computer.textContent = `Computer: ${computerScore}`;
   result.textContent = '';
   placeholder.textContent = '';
})




