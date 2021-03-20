const burger = document.querySelector('.hamburger')
const nav = document.querySelector('.mobileNav')


burger.addEventListener('click', ()=> {
    nav.classList.toggle('toggle')
})