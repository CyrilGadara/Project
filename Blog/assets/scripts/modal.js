const images = document.querySelectorAll('.popUp');
const modal = document.querySelector('.modal');
const original = document.querySelector('.full-img');


images.forEach(preview => {
    preview.addEventListener('click', ()=>{
        modal.classList.add('open')
        original.classList.add('open')
        const imageSrc = preview.getAttribute('src')
        original.src = `${imageSrc}`
        console.log(imageSrc)
    })
})

modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        original.classList.remove('open')
    }
})