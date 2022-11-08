const API_URL='https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const INVALID_INPUT='invalid-input';
const EDIT_BTN = 'edit-btn';
const DELETE_BTN='delete-btn';
const CONTACT_ITEM_SELECTOR='.contact-item'

const contactTemplate=document.querySelector('#contactTemplate').innerHTML;
const contactListEl=document.querySelector('#contactList');
const idInput = document.querySelector('#id');
const nameInput=document.querySelector('#name');
const surnameInput=document.querySelector('#surname');
const emailInput=document.querySelector('#email');
const addContactBtn=document.querySelector('#addContactBtn');
const contactForm=document.querySelector('#contactForm');

let contactsList = [];

contactForm.addEventListener('submit',  onContactFormSubmit);
contactListEl.addEventListener('click', onListClick);
nameInput.addEventListener('input', onFormInput);
surnameInput.addEventListener('input',onFormInput);
emailInput.addEventListener('input', onFormInput);

init ();
function init(){
    fetchContactsList(contactsList); 
    renderList(contactsList);
}

function fetchContactsList() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            contactsList = data;
            renderList(contactsList);
        });
}

function onContactFormSubmit(event){
    event.preventDefault();
    const contactData= getFormData();
    saveContact(contactData);
    resetFormData();
}

function onListClick(event){
    if (event.target.classList.contains(DELETE_BTN)) {
        const contactId = getContactId(event.target);
        removeContact(contactId);
    }
    if (event.target.classList.contains(EDIT_BTN)) {
        const contactId = getContactId(event.target);
        editContact(contactId);
    }
}

function onFormInput(event) {
   validateInput(event.target)
}

function renderList(list){
    const htmls=list.map(generateContactHTML);
    contactListEl.innerHTML=htmls.join('');
}

function generateContactHTML({id,name,surname,email}){
    return contactTemplate
   .replaceAll('{{id}}', id)
   .replaceAll('{{name}}', name)
   .replaceAll('{{surname}}', surname)
   .replaceAll('{{email}}', email);
}


function getFormData(){
    return {
        id: idInput.value,
        name: nameInput.value,
        surname:surnameInput.value,
        email:emailInput.value,
    };
}

function fillFormData({ id, name, surname, email }) {
    idInput.value = id;
    nameInput.value = name;
    surnameInput.value = surname;
    emailInput.value = email;
}

function resetFormData(){
    idInput.value='';
    nameInput.value='';
    surnameInput.value='';
    emailInput.value='';
}

function getContactId(el){
    return el.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
}

function saveContact(contact){
    if (contact.id === '') {
        addContact(contact);
    } else {
        updateContact(contact);
    }
}

function addContact(contact){
    fetch(API_URL, {
        method: 'POST',
        body:JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json())
        .then((data) => {
           contactsList = [...contactsList, data];
            renderList(contactsList);
        });
}


function updateContact(contact){
    fetch(API_URL+id, {
        method: 'PUT',
        body:JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(() => {
         contactsList = contactsList.map((item) =>
    item.id === contact.id ? contact : item);
    renderList(contactsList);
});
}

function removeContact(id) {
    fetch(API_URL + id, {
        method: 'DELETE',
    }).then(() => {
        contactsList = contactsList.filter((item) => item.id !== id);
       renderList(contactsList);
    });
}

function editContact(id) {
    const contact = contactsList.find((item) => item.id === id);
    fillFormData(contact);
}

function validateInput(input) {
    resetValidation(input);
    if (input.value === '') {
        input.classList.add(INVALID_INPUT);
    }
}

function resetValidation(input) {
    input.classList.remove(INVALID_INPUT);
}
