const menu = document.querySelector('.menu');
const links = document.querySelector('.linksm');
const cta = document.querySelector('.cta-links')
const sub = document.querySelector('.sub a');
const subm = document.querySelector('.subm');
const subMenu = document.querySelectorAll('.sub-linkm')
const subMenud = document.querySelector('.sub-linksd');

menu.addEventListener('click', ()=>{
    links.classList.toggle('toggle')
})

subm.addEventListener('click', ()=>{
    subMenu.forEach((menu)=>{
        menu.classList.toggle('togglev')
    })
})

sub.addEventListener('click', ()=>{
    console.log('clicked')
    subMenud.classList.toggle('togglev')
})
console.log(sub);
console.log(subMenud)