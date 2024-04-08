var indicator = document.getElementById('scroll');
var documentHeight = document.documentElement.scrollHeight;
var viewPHeight = document.documentElement.clientHeight;

window.onscroll = function(){

    let percenScrolled = (scrollY/(documentHeight - viewPHeight))*100;

    indicator.style.width = percenScrolled + '%' ;

}