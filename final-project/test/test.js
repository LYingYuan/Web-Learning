const time1 = new Date(new Date().toLocaleDateString()).getTime();
console.log(`time1:${time1}`);
// 08:00
const time2 = new Date(time1).getTime() + 8 * 60 * 60 * 1000;
console.log(`time2:${time2}`);
// 12:00
const time3 = new Date(time1).getTime() + 12 * 60 * 60 * 1000;
console.log(`time3:${time3}`);
// 16:00
const time4 = new Date(time1).getTime() + 16 * 60 * 60 * 1000;
console.log(`time4:${time4}`);
// 20:00
const time5 = new Date(time1).getTime() + 20 * 60 * 60 * 1000;
console.log(`time5:${time5}`);
// 获得当前的时间戳
const now_time = new Date().getTime();
console.log(`now_time:${now_time}`);

const time6 = new Date(time1).getTime() + 21 * 60 * 60 * 1000;
console.log(`time6:${time6}`);
