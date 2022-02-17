function Student(name) {
    function People(name) {
        // 任务队列
        this.task = [];
        this.task.push(() => {
            console.log(`Hi! This is ${name}!`);
            this.next();
        });
        setTimeout(() => {
            this.next();
        }, 0);
        return this;
    }

    People.prototype.next = function () {
        const cb = this.task.shift();
        // 先检查cb存不存在，如果不存在就不必执行cb()了，如果存在会执行该方法
        cb && cb();
    };

    People.prototype.sleep = function (time) {
        this.task.push(() => {
            setTimeout(() => {
                console.log(`Wake up after ${time}`);
                this.next();
            }, time * 1000);
        });
        return this;
    };

    People.prototype.sleepFirst = function (time) {
        // unshift()添加到数组首位
        this.task.unshift(() => {
            setTimeout(() => {
                console.log(`Wake up after ${time}`);
                this.next();
            }, time * 1000);
        });

        return this;
    };

    People.prototype.study = function (course) {
        this.task.push(() => {
            setTimeout(() => {
                console.log(`Study ${course}~`);
                this.next();
            }, 0);
        });
        return this;
    };

    return new People(name);
}

// Student("fxy");
// Student("fxy").sleep(3).study("javascript");
// Student("fxy").study("javascript").study("Vue");
Student("fxy").sleepFirst(5).study("Ajax");
