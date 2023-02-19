const button = document.querySelector('.container button');



const rgb = (color) => {
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);

    color(color1, color2, color3);
}

const callbackColor = (color1, color2, color3) => {
    let template = `rgb(${color1}, ${color2}, ${color3})`;
    document.body.style.background = template;
}

button.addEventListener('click', () => rgb(callbackColor));

  