const messageInput = document.querySelector('#msg');
const listEl=document.querySelector('#list');
const btn = document.querySelector('#myButton');

btn.addEventListener('click', onBtnClick,);

function onBtnClick() {
    if (!validateForm()){
        return;
    }
    generateMessage()
    resetForm()
};

function validateForm(){
    resetValidation();

    if( messageInput.value ==='') {
        messageInput.classList.add('invalid-input');
        return false
    }
    return true
}

function resetValidation(){
    messageInput.classList.remove('invalid-input')
 }


function generateMessage(){
const liEl=document.createElement('li');
const message=messageInput.value;
liEl.textContent= message;
listEl.append(liEl);
liEl.addEventListener('click', () => {
      liEl.classList.toggle('hover');
})
return liEl
};

function resetForm(){
    messageInput.value='' 
}


