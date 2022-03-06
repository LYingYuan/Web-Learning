function double(value) {
    setTimeout(setTimeout(console.log, 0, value * 2), 1000);
}
console.log(double(3));
