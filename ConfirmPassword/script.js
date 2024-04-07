var pass = document.getElementById('pass');
var eyes = document.getElementById('eye-open');
var con = document.getElementById('confirm');
var eye2 = document.getElementById('eye-open2');
var msg = document.getElementById('message');
var btn = document.querySelector('.button-56');

eyes.addEventListener('click', handleClick);

function handleClick() {
    if (pass.type === 'password') {
        pass.type = 'text';
        eyes.setAttribute('name', 'eye-outline');
    } else {
        pass.type = 'password';
        eyes.setAttribute('name', 'eye-off-outline');
    }
}

eye2.addEventListener('click', handleConfirm);

function handleConfirm() {
    if (con.type === 'password') {
        con.type = 'text';
        eye2.setAttribute('name', 'eye');
    } else {
        con.type = 'password';
        eye2.setAttribute('name', 'eye-off');
    }
}

btn.addEventListener('click', handleSubmit);

function handleSubmit() {
    if (pass.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = 'Please enter a password.';
        msg.style.color = '#D80032';
    } else if (pass.value === con.value) {
        msg.style.display = 'block';
        msg.innerHTML = 'Password Matched!';
        msg.style.color = '#416D19';
    } else if (pass.value !== con.value) {
        msg.style.display = 'block';
        msg.innerHTML = 'Password Did Not Matched!';
        msg.style.color = '#D80032';
    } else {
        msg.style.display = 'none';
    }
}



