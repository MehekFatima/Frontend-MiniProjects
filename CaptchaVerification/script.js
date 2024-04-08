var icon = document.getElementById('reficon');
var captcha = document.getElementById('cap');
icon.addEventListener('click', handleClick);

var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
var numChars = '0123456789';
var captchaLength = 5;

function handleClick() {
    let captchaText = '';
    for (let i = 0; i < captchaLength; i++) {
        let randomChar;
        if (i % 3 === 0) {
            randomChar = upperChars[Math.floor(Math.random() * upperChars.length)];
        } else if (i % 3 === 1) {
            randomChar = lowerChars[Math.floor(Math.random() * lowerChars.length)];
        } else {
            randomChar = numChars[Math.floor(Math.random() * numChars.length)];
        }
        captchaText += randomChar;
    }

    captcha.value = captchaText;
    captcha.style.textDecoration = 'line-through';
    captcha.style.letterSpacing = '1.5rem';
    // captcha.style.backgroundColor = 'grey';
}


var btn = document.getElementById('btn');
var inp = document.getElementById('inp');
btn.addEventListener('click', handleSubmit);

function handleSubmit(){
    if(captcha.value == inp.value){
        alert('Captcha Matched');
    }
    else{
        alert('Re-Enter the captcha');
    }
}