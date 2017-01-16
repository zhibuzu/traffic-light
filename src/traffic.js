// 实现红绿灯
// 版本1:
var trafficControll = function(states, traffic) {
    let currentStateIndex = 0;

    setInterval(function () {
        traffic.className = states[(currentStateIndex++)%(states.length)];
    }, 2000);
};

//版本2:
function poll(...fns) {
    let currentIndex = 0;

    return function(...args) {
        let fn = fns[currentIndex++ % fns.length];
        return fn.apply(this, args);
    }
}

// version3:
function setState(state) {
    traffic.className = state;
}

function wait(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}

function trafficPoll(traffic) {
    Promise.resolve()
    .then(setState.bind(null, 'wait'))
    .then(wait.bind(null, 2000))
    .then(setState.bind(null, 'stop'))
    .then(wait.bind(null, 1000))
    .then(setState.bind(null, 'pass'))
    .then(wait.bind(null, 3000))
    .then(trafficPoll);
};

// 终极版
var TrafficProtocol = function (reset) {
    this.autoreset = reset;
    this.fnStates = [];
};

TrafficProtocol.prototype.pushState = function (fnState) {
    this.fnStates.push(fnState);
};

TrafficProtocol.prototype.reset = function () {
    this.promise = Promise.resolve();

    // console.log(this.fnStates);

    this.fnStates.forEach((fnState) => {
        this.promise = this.promise.then(() => {
            return new Promise(resolve => {
                fnState(resolve);
            });
        });
    });

    if (this.autoreset) {
        this.promise.then(this.reset.bind(this));
    }
};

TrafficProtocol.prototype.start = function () {
    this.reset();
};
 
module.exports = {
    version1: trafficControll,
    version2: poll,
    version3: trafficPoll,
    version4: TrafficProtocol
};