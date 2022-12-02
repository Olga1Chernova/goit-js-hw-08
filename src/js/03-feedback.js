import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
}

const onFormInput = (event) => {
    const message = refs.message.value;
    const email = refs.email.value;
    localStorage.setItem('feedback-form-state',
        JSON.stringify({message, email}));
}

refs.form.addEventListener('input', throttle(onFormInput, 500));

window.addEventListener('load', onFormLoad);

function onFormLoad(e) {
    e.preventDefault();
    const formContent = JSON.parse(localStorage.getItem('feedback-form-state')) || 
        {email: '', message: ''}
    refs.email.value = email;
    refs.message.value = message;
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
    localStorage.clear();
    console.log(refs.email.value = email,
    refs.message.value = message);
}
 