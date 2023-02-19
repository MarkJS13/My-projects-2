const limit = document.querySelector('.form');
const changedLimit = document.querySelector('#drink-target > div > h3 > span.limit');
const change = document.querySelector('#drink-target .target h3 span.typed');
const add = document.querySelector('#drink-target .add')
const reset = document.querySelector('.reset');
const displayTime = document.querySelector('body > div > div.display')

limit.addEventListener('submit', e => {
    e.preventDefault();
    let value = limit.limit.value.trim();
    if(value.length) {
        changedLimit.innerText = value;
    }
    limit.reset();  
})

let val = 0;
add.addEventListener('click', e => {
    val+=175;
    change.innerText = val;
    
    if(parseInt(changedLimit.innerText) != 0 && val >= parseInt(changedLimit.innerText)) {
        alert("you've reached your limit!")
    }

    let date = new Date();

    let minuteFunc = () => {
        if(date.getMinutes() < 10) {
            return `0${date.getMinutes()}`;
        } else {
            return date.getMinutes();
        }
    }

    //let display = `<p> ${date.getHours()}:${minuteFunc()}</p>`;
    let currentTime = `<p>${date.toLocaleTimeString()}`
    displayTime.innerHTML += currentTime;

    

});

reset.addEventListener('click', () => {
    val = 0;
    changedLimit.innerText = 0;
    change.innerText = 0;
    displayTime.innerHTML = `<p> here </p>`;
    
})


