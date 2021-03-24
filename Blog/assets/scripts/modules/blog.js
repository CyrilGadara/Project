function eDate(e){

    let m = moment(e);
    m = m.format("MMMM D, YYYY");
    return `${m}`
    
    
}
function blogImages(event){
    let bimage = event;
    bimage = bimage.slice(3);
    return bimage;
}
function truncate(e){
    let desc = e;
    desc = desc.substring(0,150);
    return desc;
}
function blogTemplate(blog){
    
    return `
            <div class="blogCard">
                <div class="image">
                    
                    <img src="${blogImages(blog.mainImage)}" alt="myImage">
                </div>
                <div class="content">
                    <h1 class="blogTitle">${blog.blogTitle}</h1>
                    <p class="blogMeta">${eDate(blog.blogDate)} by <a href="#">${blog.author}</a></p>
                    <p class="blogDescription">${truncate(blog.paragraphOne)}...</p>
                    <a class="viewPost" href="#">Read More...</a>
                </div>
            </div>
        `
}


export { blogTemplate }