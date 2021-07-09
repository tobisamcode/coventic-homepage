var menu = document.querySelector('.menu');

var NavMenu = document.querySelector('.nav');
const body = document.querySelector('.body');


menu.addEventListener('click', toggleMenu);



function toggleMenu() {
    if (NavMenu.classList.contains('showMenu')) {
        NavMenu.classList.remove('showMenu');
    } else {
        NavMenu.classList.add('showMenu');

    }
}

const links = document.querySelectorAll('.link');

links.forEach(function(menuLink) {
    menuLink.addEventListener('click', toggleMenu)

})