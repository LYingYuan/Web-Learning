const btn = {
    sign: document.querySelector(".sign"),
};
const text = {
    user: document.querySelector(".user"),
    password: document.querySelector(".psw"),
};

const post = new AjaxPOST();

btn.sign.addEventListener("click", () => {
    // POST
    const data = {
        user: text.user.value,
        password: text.password.value,
    };
    console.log(data);
});
