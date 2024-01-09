// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// 이 아래 코드를 작성하세요.

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];
const delItem = (event) => {
    const target = event.target.parentElement;

    todos = todos.filter((todo) => todo.id != target.id);
    save();
    target.remove();
}

const save = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const addItem = (todo) => {
  if (todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText= todo.text;
    button.innerText= '삭제';

    button.addEventListener('click', delItem);

    li.appendChild(span);
    li.appendChild(button);
    li.id = todo.id;
    ul.appendChild(li);
  }
};
const handler = (event) => {
    event.preventDefault();
    const todo = {
        id: Date.now(),
        text: input.value,
    }

    todos.push(todo);
    addItem(todo);
    save();
    input.value = '';
};

const init = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    savedTodos.forEach((todo) => addItem(todo));

    todos = savedTodos;
}
form.addEventListener('submit', handler);
init();
