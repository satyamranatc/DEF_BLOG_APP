let BlogContainer = document.getElementById("Main");


async function getBlogs()
{
    try{
        let Res = await axios.get("http://127.0.0.1:8000/api/blog/list");
        Display(Res.data.blogs);
    }
    catch(err)
    {
        console.log(err);
    }
}

getBlogs()


function Display(data)
{
   BlogContainer.innerHTML = "";

   for(let i of data) {
    BlogContainer.innerHTML += `
    <div class="Card">
        <img src="${i.poster || 'https://via.placeholder.com/300x200'}" alt="${i.title}">
        <div class="card-content">
            <h2>${i.title}</h2>
            <h4>${i.content}</h4>
            <p><i class="fas fa-user"></i> ${i.author}</p>
            <button><i class="fas fa-book-open"></i> Read More</button>
        </div>
    </div>
    `;
}
}
