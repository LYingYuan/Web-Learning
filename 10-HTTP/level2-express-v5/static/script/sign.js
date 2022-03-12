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
    let headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });
    const payload = JSON.stringify({
        user: text.user.value,
        password: text.password.value,
    });
    fetch("/sign", {
        method: "POST",
        body: payload,
        headers: headers,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("注册POST返回出错");
            }
        })
        .then((data) => {
            if (data.OK) {
                alert(data.message);
            } else {
                alert(data.message);
            }
        });
});
