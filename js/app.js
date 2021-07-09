var menu = document.querySelector('.menu');

var NavMenu = document.querySelector('.nav');

menu.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (NavMenu.classList.contains('showMenu')) {
        NavMenu.classList.remove('showMenu');
    } else {
        NavMenu.classList.add('showMenu');
    }
}