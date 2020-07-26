let heightWindow,
    menuIcon;
heightWindow = document.documentElement.clientHeight;
menuIcon = document.getElementById('menu-icon');

document.addEventListener('scroll', function() {
    let scroll;
    scroll = window.pageYOffset;

    if (scroll < heightWindow) {
        menuIcon.style.opacity = '0';
        menuIcon.style.left = '-3em';
        if (nav.classList.contains('menu-open')) {
            nav.classList.remove('menu-open');
        }
    } else {
        menuIcon.style.opacity = '1';
        menuIcon.style.left = '2em';
    }
}, false);


let nav;
nav = document.getElementsByClassName('navigation')[0];

menuIcon.addEventListener('click', function() {
    if (nav.classList.contains('menu-open')) {
        nav.classList.remove('menu-open');
    } else {
        nav.classList.add('menu-open');
        closemenu();
    }
}, false);

function closemenu() {
    if (nav.classList.contains('menu-open')) {
        document.querySelectorAll('.button').forEach(function(e) {
            e.addEventListener('click', function() {
                nav.classList.remove('menu-open');
            }, false);
        })
    }
}

