// https://blog.csdn.net/s_y_w123/article/details/82861438
// todo per.sayHi.call(null);为什么是undefined
function f2(a, b) {
    console.log(a);
    console.log(b);
    console.log(a + b + " : " + this);
    console.log("==============");
}
f2(1, 2);
f2.call(1, 2);
f2.call(null, 1, 2);
f2.apply(null, [1, 2]);
f2.apply(obj, [1, 2]);
