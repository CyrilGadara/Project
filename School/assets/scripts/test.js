const body = document.querySelector('#body')
window.addEventListener('resize',()=>{
    if(window.innerWidth > 1440){
        console.log('big')
        body.style.background = "blue"
    }else if(window.innerWidth <= 1440 && window.innerWidth >= 1024){
        console.log('medium')
        body.style.background = "green"
    }else if(window.innerWidth < 1024 && window.innerWidth >= 768){
        body.style.background = "red"
    }else if(window.innerWidth < 768 && window.innerWidth >= 425){
        console.log('mobile')
        body.style.background = "yellow"
    }else if(window.innerWidth < 425){
        console.log('sMobile')
        body.style.background = "pink"
    }
})
