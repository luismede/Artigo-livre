const blogSection = document.querySelector('.artigo-area');

// CONSULTANDO OS ARTIGOS NO DB

db.collection("artigos").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

// CREATE ARTICLE CARDS

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="artigo-image" alt="">
        <h1 class="artigo-title">${data.title.substring(0, 65) + '...'}</h1>
        <p class="artigo-overview">${data.article.substring(0, 110) + '... '}</p>
        <a href="/${blog.id}" class="btn-read-card">Ler</a>
    </div>
    `;
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById("userStateInfo").innerHTML = "Sair";
        document.getElementById("imageUserStateChange").innerHTML = "Logout";
    }
})