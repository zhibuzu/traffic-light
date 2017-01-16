module.exports = function promise() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000, 'promise');
    });
}