let MyForm = document.getElementById("MyForm");

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