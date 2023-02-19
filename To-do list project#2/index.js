const addNewTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos');


let htmlTemplate = (todos) => {
    let html = `<li class="list-group-item d-flex justify-content-between align-items-center ">
    <span>${todos}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

    todoList.innerHTML += html;
}


addNewTodo.addEventListener('submit', e => {
    e.preventDefault();
    let todos = addNewTodo.add.value.trim();
    
    if(todos.length) {
        htmlTemplate(todos);
    }
     addNewTodo.reset();  
});


todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } 
})


const search = document.querySelector('.search input');


const filter = (todo) => {
    Array.from(todoList.children)
        .filter(todos => !todos.textContent.toLowerCase().includes(todo))
        .forEach(todoss => todoss.classList.add('remove'))

    Array.from(todoList.children)
        .filter(todos => todos.textContent.toLowerCase().includes(todo))
        .forEach(todoss => todoss.classList.remove('remove'))
}

search.addEventListener('keyup', e => {
    let todo = search.value.trim().toLowerCase();
    console.log(todo)
    filter(todo);
})


