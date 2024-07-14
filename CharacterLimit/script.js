const input = document.getElementById('inputArea');
let charCount = document.getElementById('charCount');
let remCount = document.getElementById('remCount');
let maxLen = 50;
input.addEventListener("input",handleChange);

function handleChange(e){
    charLength = e.target.value.length;
   
    if(charLength>maxLen){
            input.setAttribute('readonly', 'true');
            input.style.background = 'rgba(241, 209, 220, 0.222)';
            input.addEventListener('keydown',function(e){
                if(e.key === 'Backspace'){
                    input.removeAttribute('readonly');
                    input.style.background = '#ffff';
                }
            })
        
    }
    else{
        charCount.textContent = charLength;
        remCount.textContent = maxLen - charLength; 
    }
}