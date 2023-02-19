const app = document.querySelector('.app');
const ul = document.createElement('ul');
app.append(ul);

class Clear {
    clear() {
        const btn = document.querySelector('.btn button');
        btn.addEventListener('click', () => {
            ul.innerHTML = '';
        })
    }
}

class Input {
    render() {
        const form = document.querySelector('.form');
        form.addEventListener('submit', e => {
            e.preventDefault();
            let typed = form.name.value;

            let callDisplay = new Display(typed);

            if(typed) {
                callDisplay.render()
            }
            form.reset();

        })
    }
}



class Display {
    constructor(item) {
        this.item = item;
    }

    render() {
        const li = document.createElement('li');

        li.className = 'list';
        li.innerHTML = `${this.item} <span> &times; </span>`;

        const span = li.querySelector('span');
        span.addEventListener('click', e => {
            e.target.parentElement.remove()
        })

        ul.append(li);


    }
}



const input = new Input();
input.render()
const clear = new Clear();
clear.clear();