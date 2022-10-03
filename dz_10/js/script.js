const INVALID_CLASS='invalid-input';
const DELETE_BTN='delete-btn';
const CELL_CREATE='td'
const contactTemplate=document.querySelector('#contactTemplate').innerHTML;
const contactListEl=document.querySelector('#contactList');
const nameInput=document.querySelector('#name');
const surnameInput=document.querySelector('#surname');
const phoneInput=document.querySelector('#phone');
const addContactBtn=document.querySelector('#addContactBtn');
const contactForm=document.querySelector('#contactForm');
const deleteBtn=document.createElement('span');

contactForm.addEventListener('submit',  onContactFormSubmit);
contactListEl.addEventListener('click', onListClick);

function onListClick(event){
    console.log(event.target);
    if (event.target.classList.contains(DELETE_BTN)){
        removeContact(event.target.parentElement.parentElement)
    }
}

function onContactFormSubmit(event){
    event.preventDefault();
    if (!validateForm()){
    return
     }
    const NewContact= getFormData();
    addContact(NewContact);
    resetFormData();
}

function validateForm(){
    resetValidation();
    if(nameInput.value===''){
        nameInput.classList.add(INVALID_CLASS);
        return false
    }
    if(surnameInput.value===''){
        surnameInput.classList.add(INVALID_CLASS);
        return false
    }
    if(phoneInput.value===''){
        phoneInput.classList.add(INVALID_CLASS);
        return false
    }
        return true;
}

function resetValidation(){
    nameInput.classList.remove(INVALID_CLASS);
    surnameInput.classList.remove(INVALID_CLASS);
    phoneInput.classList.remove(INVALID_CLASS);
}

function getFormData(){
    return{
        name:nameInput.value,
        surname:surnameInput.value,
        phone:phoneInput.value,
        action: deleteBtn,
    }
}


function addContact(contact){
     const contactHTML=generateContactHTML(contact);
    contactListEl.insertAdjacentHTML('beforeend', contactHTML);
}


function generateContactHTML({name,surname,phone}){
    return contactTemplate
   .replaceAll('{{name}}', name)
   .replaceAll('{{surname}}', surname)
   .replaceAll('{{phone}}', phone);
}

function generateCell(value){
    const tdEl=document.createElement(CELL_CREATE);
    tdEl.textContent=value;
    return tdEl
}

function resetFormData(){
    nameInput.value='';
    surnameInput.value='';
    phoneInput.value='';
}

function removeContact(contactListEl) {
    contactListEl.remove();
}