const btn = {
    sign: document.querySelector(".submit"),
    login: document.querySelector(".login"),
};
const text = {
    user: document.querySelector(".user"),
    password: document.querySelector(".psw"),
};

btn.login.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1/login";
});

btn.sign.addEventListener("click", () => {
    // POST
    const data = {
        user: text.user.value,
        password: text.password.value,
    };
    console.log(data);
    const post = new AjaxSignPOST(data.user, data.password);
    post.request("post", "sign");
});
