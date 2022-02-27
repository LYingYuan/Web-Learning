console.log("start");
setTimeout(() => {
    console.log("timer1");
    new Promise(function (resolve) {
        console.log("promise start ");
        resolve();
    }).then(function () {
        console.log("promise1");
    });
}, 0);

setTimeout(() => {
    console.log("timer2");
    Promise.resolve().then(function () {
        console.log("promise2");
    });
}, 0);

console.log("end");
