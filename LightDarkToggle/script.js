var sun = document.getElementById('sun');
var content = document.querySelector('.content');

sun.addEventListener('click', eventHandler);

function eventHandler() {
    if (document.body.classList.contains('dark-mode')) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        sun.setAttribute('name', 'sunny-outline');
        sun.style.color = '#111';
        content.style.color = '#111';
    } else {
        // Switch to dark mode
        document.body.classList.add('dark-mode');
        sun.setAttribute('name', 'moon-outline');
        sun.style.color = '#fff';
        content.style.color = '#fff';
    }
}
