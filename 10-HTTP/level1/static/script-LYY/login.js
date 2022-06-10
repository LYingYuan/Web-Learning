const btn = {
    sign: document.querySelector(".sign"),
    login: document.querySelector(".login"),
};
const text = {
    user: document.querySelector(".user").value,
    password:document.querySelector(".psw").value,
}

const get = new AjaxGET();
const post = new AjaxPOST();

btn.sign.addEventListener("click", () => {
    // GET 注册界面
    get.request("GET", "/sign");
});
btn.login.addEventListener("click", () => {
    // POST
});
