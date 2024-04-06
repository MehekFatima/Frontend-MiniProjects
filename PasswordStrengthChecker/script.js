var pass = document.getElementById('pass');
var eye = document.getElementById('eye-open');
var msg = document.getElementById('message');
var str = document.getElementById('strength');

eye.addEventListener('click', handleEvent)
function handleEvent(){
    if(pass.type =='password'){
        pass.type = 'text';
        eye.setAttribute('name','eye-outline');
    }
    else{
        pass.type = 'password';
        eye.setAttribute('name', 'eye-off-outline');
    }
}

pass.addEventListener('input',handleLength);

function handleLength(){
    if(pass.value.length!=0 && pass.value.length < 4){
        msg.style.display ='block';
        str.innerHTML = 'Weak';
        str.style.color ='#f45858';
        str.style.fontSize = "15px";
        pass.style.border = "5px solid #f45858";
    }
    else if(pass.value.length!=0 && pass.value.length >= 4 && pass.value.length < 8){
        msg.style.display ='block';
        str.innerHTML = 'Medium';
        str.style.color ='#ffff00';
        str.style.fontSize = "15px";
        pass.style.border = "5px solid #ffff00";
    }
    else if(pass.value.length!=0 && pass.value.length >= 8){
        msg.style.display ='block';
        str.innerHTML = 'Good';
        str.style.color ='#18d918';
        str.style.fontSize = "15px";
        pass.style.border = "5px solid #18d918";
    }
    else{
        msg.style.display = 'none';
        pass.style.border = "none";
    }
}