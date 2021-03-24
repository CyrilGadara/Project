console.log('working');
import { blogTemplate } from './blog.js';

function startLiveUpdate(){
    var blogData;
        fetch('/blog.json')
        .then(function(response){
            return response.json();
        }).then(function(data){
            blogData = data;
            console.log(blogData)
            document.querySelector('.blogCards').innerHTML = `
                ${blogData.map(blogTemplate).join('')}
            `
        }).catch(function(error){
            console.log(error)
        })
}

document.addEventListener('DOMContentLoaded', function(){
    startLiveUpdate();
    setInterval(startLiveUpdate, 2000);
})


export {startLiveUpdate}