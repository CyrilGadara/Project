//ToggleSubMenu
let menu = document.querySelectorAll('.icon-link')
for(var i =0; i<menu.length; i++){
    menu[i].addEventListener('click',(e)=>{
        subMenu = e.target.parentElement
        subMenu.classList.toggle('showMenu');
    })
}

//ToggleSidebar
let sidebar = document.querySelector('.sidebar')
let menuicon = document.querySelector('.menu-icon')
menuicon.addEventListener('click',()=>{
    sidebar.classList.toggle('close')
})
console.log(sidebar)

//Expand When Click on Links
const navlinks = document.querySelector('.nav-links')
navlinks.addEventListener('click', ()=>{
    sidebar.classList.remove('close')
})

//HideSubMenu When Sidebar is Small
let links = document.querySelectorAll('.link')
console.log(links)
let resizer = new ResizeObserver(handleResize);
resizer.observe(sidebar);
function handleResize(entries){
    console.log(sidebar.clientWidth)
    if(sidebar.clientWidth <= 78){
        console.log("smaller")
        links.forEach(L => L.classList.remove('showMenu'))
    }else{
        console.log('big')
    }
}