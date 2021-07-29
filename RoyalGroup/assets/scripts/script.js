const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const logo = document.querySelector('.logo h1')
console.log(navLinks)
window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 100){
        header.classList.add('scrolled')
        navLinks.forEach((link) =>{
            link.classList.add('navScrolled')
        })
        logo.classList.add('navScrolled')
    }else{
        header.classList.remove('scrolled')
        navLinks.forEach((link) =>{
            link.classList.remove('navScrolled')
        })
        logo.classList.remove('navScrolled')
    }
}


