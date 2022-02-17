function Student(name) {
    function People(name) {}

    People.prototype.sleep = function (time) {};

    People.prototype.sleepFirst = function (time) {};
    People.prototype.study = function (course) {};

    return new People(name);
}

// Student('fxy');
// Student('fxy').sleep(3).study('javascript');
// Student('fxy').study('javascript').study('Vue');
// Student('fxy').sleepFirst(5).study('Ajax');
