if (localStorage.getItem("ID") != null)
{
    int ID = localStorage.getItem("ID");
    ID++;
    localStorage.setItem("ID", ID);
}
else
{
    int ID = "1";
    localStorage.setItem("ID", ID);
}

document.getElementById("id").value = localStorage.getItem("ID");