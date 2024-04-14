const counters = document.querySelectorAll('.counter');
counters.forEach((element) =>{
    element.innerHTML = 0;
    
    const updateCounter  = ()=>{
        const targetCount = +element.getAttribute('data-target');
        
        const startCount = Number(element.innerHTML);

        const incre = targetCount/100;
        if(startCount < targetCount){
            element.innerHTML = `${Math.round(startCount + incre)}`;
            setTimeout(updateCounter,10);
        }
        else{
            element.innerHTML = targetCount;
        }
    }
    updateCounter();
})