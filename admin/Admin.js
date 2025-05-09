let MyForm = document.getElementById("MyForm");
let tBody = document.getElementById("tBody");


MyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let Blog = {
        id: e.target[0].value,
        poster: e.target[1].value,
        title: e.target[2].value,
        content: e.target[3].value,
        author: e.target[4].value,
    }
   
    try
    {
        let Res = await axios.post("http://127.0.0.1:8000/api/blog/create",Blog);
        console.log(Res.data);
        alert("Send Successfully!")
    }
    catch(err)
    {
        console.log(err);
        alert("Error!")
    }
})



async function getBlogs()
{
    try{
        let Res = await axios.get("http://127.0.0.1:8000/api/blog/list");
        Display(Res.data.blogs);
        console.log(Res.data.blogs);
    }
    catch(err)
    {
        console.log(err);
    }
}

getBlogs()


function updateBlog(id)
{
    try{
        let newData = {
            id:id,
            poster:prompt("Enter New Poster"),
            title:prompt("Enter New Title"),
            content:prompt("Enter New Content"),
            author:prompt("Enter New Author"),
        }
        let Res = axios.put(`http://127.0.0.1:8000/api/blog/update/${id}`,newData);
        alert("Updates Successfully!");
        getBlogs();
    }
    catch(err)
    {
        console.log(err);
        alert("Error!")
    }
}

function deleteBlog(id)
{
    try{
        let Res = axios.delete(`http://127.0.0.1:8000/api/blog/delete/${id}`);
        alert("Deleted Successfully!");
        getBlogs();
    }
    catch(err)
    {
        console.log(err);
        alert("Error!")
    }
}



function Display(data)
{
   tBody.innerHTML = "";

    console.log(data);
   for(let i of data)
   {
        let Tr = document.createElement("tr");
        Tr.innerHTML = `
        <td>${i.id}</td>
        <td><img src = "${i.poster}" ></td>
        <td>${i.title}</td>
        <td>${i.content}</td>
        <td>${i.author}</td>
        <td><button onclick = "updateBlog(${i.id})" >Update</button></td>
        <td><button onclick = "deleteBlog(${i.id})" >Delete</button></td>
    `
        tBody.append(Tr);
   }
}
