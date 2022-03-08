const MyPromise = require("./mypromise");
const promise = new MyPromise((resolve, reject) => {
    resolve("success");
    reject("error");
});

promise.then(
    (value) => {
        console.log("resolve", value);
    },
    (reason) => {
        console.log("reject", reason);
    }
);
