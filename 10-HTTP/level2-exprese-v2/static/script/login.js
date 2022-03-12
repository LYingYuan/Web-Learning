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
    const post = new AjaxLoginPOST(text.user.value, text.password.value);
    post.request("post", "login");

    // const post_ajax = {
    //     url: "/login",
    //     method: "post",
    //     data: {
    //         user: data.user,
    //         password: data.password,
    //     },
    //     success:loginSuccess(),
    //     error:()=>{
    //         console.log("login default");
    //     }
    // };
    // Ajax(post_ajax);
});

// function loginSuccess(data) {
//     console.log("POST success");
//     if (data.ok) {
//         console.log("login success");
//     } else {
//         console.log(data.msg);
//     }
// }
