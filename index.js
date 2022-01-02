const toggleBtn = document.getElementById('burger-menu-button');
const nav = document.getElementById('navigation');
const navItems = document.querySelectorAll('#navigation a');
const toggleButtonIcon = document.querySelector('#burger-menu-button .fas');


function switchMenu() {
    nav.classList.toggle('collapsed');
    toggleButtonIcon.classList.toggle('fa-bars');
    toggleButtonIcon.classList.toggle('fa-times');
}

toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
    setTimeout(() => {
        nav.classList.remove('collapsed');
        toggleButtonIcon.classList.remove('fa-times');
        toggleButtonIcon.classList.add('fa-bars');
    }, 1000);
}
navItems.forEach(el => el.addEventListener('click', closeMenu));