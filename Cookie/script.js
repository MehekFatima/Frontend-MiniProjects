const cookieBox = document.querySelector('.wrapper');
const buttons = document.querySelectorAll('.button');



window.addEventListener('load',executeCodes);
function executeCodes(){
    cookieBox.classList.add('show');

    buttons.forEach(button =>{
        button.addEventListener('click',()=>{
            cookieBox.classList.remove('show');
            if (button.id == "acceptBtn") {
                //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy= mehek; max-age=" + 60 * 60 * 24 * 30;
              }

        });
    });
}


