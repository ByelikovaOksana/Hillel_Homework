const TODO_CLASS = 'todo-item';
const TODO_SELECTOR = '.' + TODO_CLASS;
const DONE_CLASS = 'done';
const DELETE_BTN = 'delete-btn';
const INVALID_CLASS = 'invalid-input';

const listEl = document.querySelector('#list');
const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const saveBtn = document.querySelector('#saveBtn');
const titleInput = document.querySelector('#newTodoTitle');
const formToDo = document.querySelector('#formToDo');


let listTodo=[
    {id:1, title: 'ToDo 1', isDone: true },
    {id:2, title: 'ToDo 2', isDone: true },
    {id:3, title: 'ToDo 3', isDone: false},
]

formToDo.addEventListener('submit', onFormToDoSubmit)
listEl.addEventListener('click', onlistElClick)

init()
function init(){
    renderTodoList(listTodo);
}

function onFormToDoSubmit(event){
    event.preventDefault();
    if (!validateForm()){
        return
         }
    const newTodo=getFormValues();
    addToDo(newTodo);
    resetFormData();
  }

function validateForm(){
    resetValidation();
    if(titleInput.value===''){
        titleInput.classList.add(INVALID_CLASS);
        return false
    }
return true
}

function resetValidation(){
    titleInput.classList.remove(INVALID_CLASS);
}

function onlistElClick(event){
    if (event.target.classList.contains (DELETE_BTN)){
        const todoId = getId(event.target);
        deleteToDoId(todoId);
    }

    if (event.target.classList.contains(TODO_CLASS)) {
        const todoId = getId(event.target);
        toggleToDo(todoId);
    }
}

function renderTodoList(list){
    const HtmlList=list.map((item)=> generateToDoHtml(item));
    listEl.innerHTML=HtmlList.join('');
 }

function generateToDoHtml({id, title, isDone}){
    return todoTemplate
    .replaceAll('{{id}}', id)
    .replaceAll('{{title}}', title)
    .replaceAll('{{doneClass}}', isDone ? DONE_CLASS:'')
  }
 
function getFormValues(){
    return{
         title: titleInput.value,
    }
}
function addToDo(todo){
    todo.id=Date.now();
    todo.isDone=false;
    listTodo.push(todo);
    renderTodoList(listTodo);
 }

function deleteToDoId(id){
    listTodo=listTodo.filter((item)=>item.id!== id);
    renderTodoList(listTodo);
 }

 function toggleToDo(id){
    const todo=listTodo.find((item)=>item.id === id);
    todo.isDone=!todo.isDone;
    renderTodoList(listTodo);
 }

 function getId(el){
    return +el.closest(TODO_SELECTOR).dataset.todoId;
}

 function resetFormData(){
    titleInput.value='';
 }
