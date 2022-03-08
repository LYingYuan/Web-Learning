// 学习参照：https://juejin.cn/post/6945319439772434469
class MyPromise {
    constructor(executor) {
        // executor 是一个执行器，进入会立即执行
        // 并传入resolve和reject方法
        executor(this.resolve, this.resolve);
    }
    status = "pending";
    value = null;
    reason = null;
    onFulfilledCallback = [];
    onRejectedCallback = [];

    resolve = (value) => {
        if (this.status === "pending") {
            this.status = "fulfilled";
            this.value = value;
            while (this.onFulfilledCallback.length) {
                this.onFulfilledCallback.shift()(value);
            }
        }
    };

    reject = (reason) => {
        if (this.status === "pending") {
            this.status = "rejected";
            this.reason = reason;
            while (this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(reason);
            }
        }
    };
    then(onFulfilled, onRejected) {
        if (this.status === "fulfilled") {
            onFulfilled(this.value);
        } else if (this.status === "rejected") {
            onRejected(this.reason);
        } else if (this.status === "pending") {
            this.onFulfilledCallback.push(onFulfilled);
            this.onRejectedCallback.push(onRejected);
        }
    }
}

module.exports = MyPromise;
