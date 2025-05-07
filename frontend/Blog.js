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


   for(let i of data)
   {
       BlogContainer.innerHTML += `
       <div class="Card">
           <img src="${i.poster}" alt="">
           <h2>${i.title}</h2>
           <h4>${i.content}</h4>
           <p>${i.author}</p>
           <button>Read More</button>
       </div>
       `
   }
}
