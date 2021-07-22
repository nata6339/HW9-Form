const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
form.addEventListener('submit', e => {
    e.preventDefault();

    validate()
});
function validate() {
    const nameValue = name.value;
    const passwordValue = password.value;

    if (nameValue === ""){
        setInvalid(name)
    } else {
        setValid(name)
    }
    if (passwordValue === ""){
        setInvalid(password)
    } else {
        setValid(password)
    }
}

function setInvalid(input) {
    const formControl = input.parentElement;
    formControl.className = 'invalid'
}

function setValid(input) {
    const formControl = input.parentElement;
    formControl.className = 'valid'
}