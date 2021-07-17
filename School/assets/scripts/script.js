//sidebarHamburger
const menuIcon = document.querySelector('.menu-icon');
//sidebar
const sidebar = document.querySelector('.sidebar')
//sidebarSubMenu
const subMenuLink = document.querySelectorAll('.icon-link')
//linkItems
const links = document.querySelectorAll('.link')
//navLinks
const navLinks = document.querySelector('.nav-links')
//headerAndmainSection
const main = document.querySelector('.main')
const header = document.querySelector('.header')
//activityContainer
const activity = document.querySelector('.feedContainer')
//feedIcon
const feedIcon = document.querySelector('.feedopen')
//feedCloseBtn
const feedClose = document.querySelector('.feedCloseBtn')
//hamburgerIcon
const hamIcon = document.querySelector('.hamIcon')


//activity open and close when width is less than 1440px
//close and open sidebar when width is less than 1440px
if(window.innerWidth <= 1440 && window.innerWidth > 1024){
    //removing activity open and adding activity close when widht is less than 1440
    activity.classList.remove('ao')
    activity.classList.add('ac')

    //removing sidebar open and activity open class from main and adding sidebaropen and activity close
    main.classList.remove('soao')
    main.classList.add('soac')
    header.classList.remove('soao')
    header.classList.add('soac')
    
    feedIcon.addEventListener('click',()=>{
        if(sidebar.classList.contains('so')){
            //remove sidebar open class and add sidebar close class
            sidebar.classList.remove('so')
            sidebar.classList.add('sc')
            activity.classList.remove('ac')
            activity.classList.add('ao')
            //removing sidebar and activity open and adding sidebar close and activity open class
            main.classList.remove('soac')
            main.classList.add('scao')
            header.classList.remove('soac')
            header.classList.add('scao')
        }else{
            //remove sidebar close class and add sidebar open class
            sidebar.classList.add('so')
            sidebar.classList.remove('sc')
            activity.classList.add('ac')
            activity.classList.remove('ao')
            //adding sidebar and activity open class and removing sidebar close and activity open
            main.classList.add('soac')
            main.classList.remove('scao')
            header.classList.add('soac')
            header.classList.remove('scao')
        }
    })
    menuIcon.addEventListener('click',()=>{
        if(sidebar.classList.contains('so')){
            //remove sidebar open class and add sidebar close class
            sidebar.classList.remove('so')
            sidebar.classList.add('sc')
            activity.classList.remove('ac')
            activity.classList.add('ao')
            //removing sidebar and activity open and adding sidebar close and activity open class
            main.classList.remove('soac')
            main.classList.add('scao')
            header.classList.remove('soac')
            header.classList.add('scao')
        }else{
            //remove sidebar close class and add sidebar open class
            sidebar.classList.add('so')
            sidebar.classList.remove('sc')
            activity.classList.add('ac')
            activity.classList.remove('ao')
            //adding sidebar and activity open class and removing sidebar close and activity open
            main.classList.add('soac')
            main.classList.remove('scao')
            header.classList.add('soac')
            header.classList.remove('scao')
        }
    })
    
    //openSidebarWhenClickonLinks
    navLinks.addEventListener('click',()=>{
        if(sidebar.classList.contains('sc')){
            sidebar.classList.add('so')
            sidebar.classList.remove('sc')
            activity.classList.add('ac')
            activity.classList.remove('ao')
            //adding sidebar and activity open class and removing sidebar close and activity open
            main.classList.add('soac')
            main.classList.remove('scao')
            header.classList.add('soac')
            header.classList.remove('scao')
        }
    })
}else if(window.innerWidth <= 1024 && window.innerWidth > 768){
    //removing activity open and adding activity close when widht is less than 1024
    activity.classList.remove('ao')
    activity.classList.add('ac')
    sidebar.classList.remove('so')
    sidebar.classList.add('sc')
    main.classList.remove('soao')
    main.classList.add('scac')
    header.classList.remove('soao')
    header.classList.add('scac')

    menuIcon.addEventListener('click',()=>{
        console.log('clicked')
        if(activity.classList.contains('ao')){
            activity.classList.remove('ao')
            activity.classList.add('ac')
            sidebar.classList.remove('sc')
            sidebar.classList.add('so')
        }else{
            if(sidebar.classList.contains('so')){
                sidebar.classList.add('sc')    
                sidebar.classList.remove('so')
            }else{
                sidebar.classList.remove('sc')
                sidebar.classList.add('so')
            }
            
        }
    })

    feedIcon.addEventListener('click',()=>{
        if(sidebar.classList.contains('so')){
            //remove sidebar open class and add sidebar close class
            sidebar.classList.remove('so')
            sidebar.classList.add('sc')
            activity.classList.remove('ac')
            activity.classList.add('ao')
        }else{
            //remove sidebar close class and add sidebar open class
            activity.classList.add('ao')
            activity.classList.remove('ac')
        }
    })

    navLinks.addEventListener('click',()=>{
        if(sidebar.classList.contains('sc')){
            sidebar.classList.add('so')
            sidebar.classList.remove('sc')
        }
    })
}else if(window.innerWidth <= 768){
    activity.classList.remove('ao')
    activity.classList.add('ac')
    sidebar.classList.remove('so')
    sidebar.classList.add('shide')
    main.classList.remove('soao')
    main.classList.add('shmain')
    header.classList.remove('soao')
    header.classList.add('shheader')
    //hamburgerIcon Click
    hamIcon.addEventListener('click',()=>{
        if(activity.classList.contains('ao')){
            activity.classList.remove('ao')
            activity.classList.add('ac')
            sidebar.classList.remove('shide')
            sidebar.classList.add('so')
        }else{
            if(sidebar.classList.contains('so')){
                sidebar.classList.add('shide')    
                sidebar.classList.remove('so')
            }else{
                sidebar.classList.remove('shide')
                sidebar.classList.add('so')
            }
            
        }
    })

    menuIcon.addEventListener('click',()=>{
        sidebar.classList.remove('so')
        sidebar.classList.add('shide')
    })


    feedIcon.addEventListener('click',()=>{
        if(sidebar.classList.contains('so')){
            //remove sidebar open class and add sidebar close class
            sidebar.classList.remove('so')
            sidebar.classList.add('shide')
            activity.classList.remove('ac')
            activity.classList.add('ao')
        }else{
            //remove sidebar close class and add sidebar open class
            activity.classList.add('ao')
            activity.classList.remove('ac')
        }
    })
}
//close activity
feedClose.addEventListener('click',()=>{
    activity.classList.remove('ao')
    activity.classList.add('ac')
})

//close and Open submenu
for(var i = 0; i < subMenuLink.length; i++){
    subMenuLink[i].addEventListener('click',(e)=>{
        subMenu = e.target.parentElement;
        subMenu.classList.toggle('showMenu')
    })
}

//watch For Sidebar Close And Close SubMenu
let resizer = new ResizeObserver(handleResize);
resizer.observe(sidebar);
function handleResize(entries){
    if(sidebar.clientWidth <= 78){
        links.forEach(L=> L.classList.remove('showMenu'))
    }
}
