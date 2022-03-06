var name = 222;
var a = {
    name: 11,
    say: function (x) {
        console.log(x);
        console.log("a");
        console.log(this.name);
    },
};
var fun = a.say;
fun();
a.say();
var b = {
    name: 333,
    say: function () {
        console.log("b");
        console.log(this.name);
    },
};
b.say(a.say);
b.say = a.say;
b.say();
