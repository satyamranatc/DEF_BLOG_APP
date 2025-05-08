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
    }
    catch(err)
    {
        console.log(err);
    }
}

getBlogs()



function Display(data)
{
   tBody.innerHTML = "";


   for(let i of data)
   {
    let Tr = document.createElement("tr");
    Tr.innerHTML = `
    <td>${i.id}</td>
    <td><img src = "${i.poster}" ></td>
    <td>${i.title}</td>
    <td>${i.content}</td>
    <td>${i.author}</td>
    `


    let UpTd = document.createElement("td");


    let updtBtn = document.createElement("button");
    updtBtn.innerHTML = "Update";
    UpTd.append(updtBtn);

    Tr.append(UpTd);


    let DlTd = document.createElement("td")

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.onclick = async function()
    {
        try{
            let Res = await axios.delete(`http://127.0.0.1:8000/api/blog/delete/${i.id}`);
            alert("Deleted Successfully!");
            getBlogs();
        }
        catch(err)
        {
            console.log(err);
        }
    }


    DlTd.append(delBtn);

    Tr.append(DlTd);
    tBody.append(Tr)
   }
}
