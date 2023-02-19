const display__result = document.querySelector('.result');


class Answers {
    answers = ['B', 'B', 'B', 'B'];

    render() {
        const form = document.querySelector('form');
        form.addEventListener('submit', e => {
            e.preventDefault();
            let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
            this.compareAnswers(this.answers, userAnswers)
        })
    }

    compareAnswers(answers, userAnswers) {
        let score = 0;
        userAnswers.forEach((user, index) => {
            if(answers[index] === user) {
                score+=25;
            }
            
            scrollTo(0,0);
            display__result.classList.remove('d-none');
            this.animate(score)
        });
    }


    animate(score) {
        let output = 0;
        
        let time = setInterval(() => {
            display__result.querySelector('span').textContent = `${output}%`;
            if(score === output) {
                clearInterval(time)
            } else {
                output++;
            }

        }, 20);

        
    }
}


const answer = new Answers();
answer.render();

