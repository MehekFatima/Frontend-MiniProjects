var pass = document.getElementById('pass');
var copy = document.getElementById('iconc');

const length = 16;
const upperReg = /[A-Z]/;
const lowerReg = /[a-z]/;
const num = /[0-9]/;
const specialChar = /[~`!@#$%^&*()_\-+=/\\|;:'"<>,.{}?]/;


var btnSubmit = document.querySelector('.Btn');

btnSubmit.addEventListener('click',handleClick);

function handleClick(){
    const allChars = upperReg.source + lowerReg.source + num.source + specialChar.source;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    pass.value = password;

}


copy.addEventListener('click',handleCopy);

function handleCopy(){
    pass.select();
    document.execCommand('copy');
}






