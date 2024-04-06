var password = document.getElementById("pass");
var eye = document.getElementById("eye-open");

eye.addEventListener('click',handler)


function handler(){
    if(password.type == 'password'){
        password.type = 'text';
        eye.setAttribute('name', 'eye-outline');
    }
    else{
        password.type = 'password';
        eye.setAttribute('name', 'eye-off-outline');
    }

    

}