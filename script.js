const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
name.addEventListener("input", validate);
password.addEventListener("input", validate);
form.addEventListener('submit', e => {
    e.preventDefault()
    if(validate()) {
        console.log("Hello, " + name.value);
        name.value = "";
        password.value = "";
    }
});

function validate() {
    let isValid = true;
    const nameValue = name.value;
    const passwordValue = password.value;

    if (!nameValue) {
        setInvalid(name);
        isValid = false;
    } else if (!isName(nameValue)) {
        setInvalid(name);
        isValid = false;
    } else {
        setValid(name);
    }

    if (!passwordValue) {
        setInvalid(password);
        isValid = false;
    } else if (!isPassword(passwordValue)) {
        setInvalid(password)
        isValid = false;
    } else {
        setValid(password)
    }
    return isValid;
}

function setInvalid(input) {
    input.className = 'invalid'
}

function setValid(input) {
    input.className = 'valid'
}

function isName(name) {
    let regExp = /^[a-zA-Z0-9]{2,15}$/
    return regExp.test(name);
}

function isPassword(password) {
    let regExp = /^(?=.*)(?=.*[a-z0-9])(?=.*[#])(?=.*[$]).{6,15}$/
    return regExp.test(password)
}
