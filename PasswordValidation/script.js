var pass = document.getElementById('pass');
var eye = document.getElementById('eye-open');
// var msg = document.getElementById('message');
// var str = document.getElementById('str');
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var list_items = document.querySelector('.list-group-item');
//add event

eye.addEventListener('click',handleClick);

function handleClick(){
    if(pass.type =='password'){
        pass.type = 'text';
        eye.setAttribute('name', 'eye-outline');
    }
    else{
        pass.type = 'password';
        eye.setAttribute('name', 'eye-off-outline');
    }
}

pass.addEventListener('input',handleInput);

function handleInput() {
    var specialCharRegex = /[~`!@#$%^&*()_+={[}\]|;:',.<>?/-]/;
    let uppercaseRegex = /[A-Z]/;
    let numbersRegex = /[0-9]/; 

    console.log("Password Length:", pass.value.length);
    console.log("Contains Digit:", numbersRegex.test(pass.value));
    console.log("Contains Special Char:", specialCharRegex.test(pass.value));
    console.log("Contains Uppercase:", uppercaseRegex.test(pass.value));

    if (pass.value.length >= 8 && pass.value.length != 0) {
        item1.style.color = '#7AA874';
    } else {
        item1.style.color = '#111'; // Reset color to black if condition not satisfied
    }

    if (pass.value.length != 0 && numbersRegex.test(pass.value)) {
        item2.style.color = '#7AA874';
    } else {
        item2.style.color = '#111'; // Reset color to black if condition not satisfied
    }

    if (pass.value.length != 0 && specialCharRegex.test(pass.value)) {
        item3.style.color = '#7AA874';
    } else {
        item3.style.color = '#111'; // Reset color to black if condition not satisfied
    }

    if (pass.value.length != 0 && uppercaseRegex.test(pass.value)) {
        item4.style.color = '#7AA874';
    } else {
        item4.style.color = '#111'; // Reset color to black if condition not satisfied
    }
}
