// var promise = require('./src/index.js');

// promise().then(function (name) {
//     console.log("hello, " + name);
// });

var trafficControll = require('./src/traffic');

const traffic = document.getElementById('traffic');

// 调用version1
// const states = ['wait', 'stop', 'pass'];
// trafficControll.version1(states, traffic);

// 调用version2
// var trafficStatePoll = trafficControll.version2(
//     function () {
//         traffic.className = 'stop';
//     },
//     function () {
//         traffic.className = 'pass';
//     },
//     function () {
//         traffic.className = 'wait';
//     }
// );
// setInterval(trafficStatePoll, 1000);

// version3
// trafficControll.version3(traffic);

// 终极版
var trafficObject = new trafficControll.version4(true);
trafficObject.pushState(function (next) {
    traffic.className = 'wait';
    setTimeout(next, 1000);
});

trafficObject.pushState(function (next) {
    traffic.className = 'stop';
    setTimeout(next, 1000);
});


trafficObject.pushState(function (next) {
    traffic.className = 'pass';
    setTimeout(next, 1000);
});

trafficObject.start();