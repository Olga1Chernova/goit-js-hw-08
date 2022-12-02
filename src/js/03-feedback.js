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
        { email: '', message: '' };
    const localStorageItem = localStorage.getItem('feedback-form-state');
    localStorageItem[e.target.name] = e.target.value;
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
    const key = 'feedback-form-state';
    e.preventDefault();
    e.currentTarget.reset();
    console.log(localStorage.getItem(key));
    localStorage.removeItem(key);
}
 