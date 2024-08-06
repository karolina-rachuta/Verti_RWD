const hamburgerRef = document.querySelector('.hamburger');
const listMenuRef = document.querySelector('.nav-menu ul')

hamburgerRef.addEventListener('click', () => {
    listMenuRef.classList.toggle('open')
})