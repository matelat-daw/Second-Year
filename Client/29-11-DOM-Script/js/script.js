const DOM = {
    username: document.getElementById("username"),
    form: document.getElementById("form")
}

DOM.form.addEventListener("submit", (e) => {
    if (!DOM.username.validationMessage == "")
    {
        e.preventDefault();
        alert(DOM.username.validationMessage);
    }
});