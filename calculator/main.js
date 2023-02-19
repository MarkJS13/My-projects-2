const awayScore = document.querySelector('#away > div.score-dets > div.score-display p');
const homeScore = document.querySelector('#home > div.score-dets > div.score-display p')
const awayBtn = document.querySelector('#away > div.score-dets > div.scoring')
const homeBtn = document.querySelector('#home > div.score-dets > div.scoring')

let scoreA = 0;
awayBtn.addEventListener('click', e => {
    if(e.target.classList.contains('increment')) {
        scoreA++;
        awayScore.innerText = scoreA;
    }
     else if(e.target.classList.contains('decrement')) {
        scoreA--;
        awayScore.innerText = scoreA;
        if(scoreA <= 0) {
            let scoreA = 0;
            awayScore.innerText = `0${scoreA}`;
        }   
    } 
    
})



let scoreB = 0;
homeBtn.addEventListener('click', e => {
    if(e.target.classList.contains('increment')) {
        scoreB++;
        homeScore.innerText = scoreB;
    }

    else if(e.target.classList.contains('decrement')) {
        scoreB--;
        homeScore.innerText = scoreB;
        if(scoreB <= 0) {
            let scoreB = 0;
            homeScore.innerText = `0${scoreB}`;
        }
    }
})

const reset = document.querySelector('body > div > div.score-board-container > div.res');

reset.addEventListener('click', () => {
    scoreA = 0;
    scoreB = 0;
    awayScore.innerText = `0${scoreA}`;
    homeScore.innerText = `0${scoreB}`;
})





const nbaAPi = async() => {
    const base = 'https://www.balldontlie.io/api/v1/teams/'

    const response = await fetch(base);
    const data = await response.json();


    return {
        gsw: data.data[9],
        lal: data.data[13]
    }
    
    
}


const display = document.querySelector('.footer p')
console.log(display)
const objReturn = async (data) => {
    const gsw = await data.gsw;
    const lakers = await data.lal;
console.log(data)
    

    display.innerHTML = `<p> Home team ${gsw.full_name} from ${gsw.division} division is taking on the ${lakers.conference} divison represents ${lakers.full_name}</p>`
}

 nbaAPi().then(data => {
     return objReturn(data)
 }).then(data => {
     console.log(data)
 }).catch(error => {
     console.log('error:', error)
 })


 const string = "zyxwvutsrqponmlkjihgfedcba";
 const substring = "qrstu";
 
 console.log(string.includes(substring)); // true