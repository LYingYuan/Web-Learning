const e = require("express");

function request(url, method, body) {
    method = method.toUpperCase();
    if (method === "GET") {
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }
    return fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token") || "", // 从localStorageStorage中获取access token
        },
    });
}
