let toastBox = document.getElementById('toastBox');
let sMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submited!';
let iMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Details!';
let EMsg = '<i class="fa-solid fa-circle-xmark"></i> Error!!';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },5000);
}