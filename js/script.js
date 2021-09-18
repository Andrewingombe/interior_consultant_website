const mobileMenu = document.querySelector('.mobile_menu');
const close = document.querySelector('.mobile_close');
const open = document.querySelector('.mobile_open');

open.addEventListener('click', (e) => {
    mobileMenu.classList.add('is_active');
});

close.addEventListener('click', (e) => {
    mobileMenu.classList.remove('is_active');
});