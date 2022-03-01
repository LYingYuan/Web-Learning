const btn = {
    login: document.querySelector(".login"),
};
const text = {
    user: document.querySelector(".user"),
    password: document.querySelector(".psw"),
};

const get = new AjaxGET();

btn.login.addEventListener("click", () => {
    // POST
    const data = {
        user: text.user.value,
        password: text.password.value,
    };
    const post = new AjaxPOST(data.user,data.password);
    // console.log(data);
    post.request("post");
});
