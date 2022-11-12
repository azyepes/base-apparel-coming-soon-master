let $ = (id) => document.querySelector(id)

let submit = $('#submit')
let errorBox = $('#error-box')
let error = $('#error')
let iconError = $('#icon-error')
let iconValid = $('#icon-valid')

submit.addEventListener('click', ()=> {
    let email = $('#email').value
    console.log(email);
    validateEmail(email)
    
})

function validateEmail(value) {
    let regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regExp.test(value)) {
        console.log('VALID');
        iconValid.classList.remove('hiden')
        error.textContent = `This email is valid.`
        iconError.classList.add('hiden')
        email.classList.remove('invalid')
        submit.classList.remove('invalid-button')

    } else if (value === '') {

        iconError.classList.remove('hiden')
        error.textContent = `Email is required.`
        iconValid.classList.add('hiden')
        email.classList.add('invalid')
        submit.classList.add('invalid-button')

    }
    else {
        console.log('INVALID');
        iconError.classList.remove('hiden')
        error.textContent = `Please provide a valid email.`
        iconValid.classList.add('hiden')
        email.classList.add('invalid')
        submit.classList.add('invalid-button')
    }
}