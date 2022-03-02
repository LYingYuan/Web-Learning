const btn = {
    login: document.querySelector(".login"),
    sign: document.querySelector(".sign"),
};
const text = {
    user: document.querySelector(".user"),
    password: document.querySelector(".psw"),
};

btn.sign.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1/sign";
});

btn.login.addEventListener("click", () => {
    // POST
    const data = {
        user: text.user.value,
        password: text.password.value,
    };
    const post = new AjaxLoginPOST(data.user, data.password);
    // console.log(data);
    post.request("post", "login");
});
