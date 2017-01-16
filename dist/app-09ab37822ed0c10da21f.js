/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// var promise = require('./src/index.js');

	// promise().then(function (name) {
	//     console.log("hello, " + name);
	// });

	var trafficControll = __webpack_require__(1);

	var traffic = document.getElementById('traffic');

	// 调用version1
	// const states = ['wait', 'stop', 'pass'];
	// trafficControll.version1(states, traffic);

	// 调用version2
	var trafficStatePoll = trafficControll.version2(function () {
	    traffic.className = 'stop';
	}, function () {
	    tranffic.className = 'pass';
	}, function () {
	    traffic.className = 'wait';
	});

		setInterval(trafficStatePoll, 2000);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	// 实现红绿灯
	// 版本1:
	var trafficControll = function trafficControll(states, traffic) {
	    var currentStateIndex = 0;

	    setInterval(function () {
	        traffic.className = states[currentStateIndex++ % states.length];
	    }, 2000);
	};

	//版本2:
	function poll() {
	    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
	        fns[_key] = arguments[_key];
	    }

	    var currentIndex = 0;

	    return function () {
	        var fn = fns[currentIndex++ % fns.length];

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        return fn.apply(this, args);
	    };
	}

	module.exports = {
	    version1: trafficControll,
	    version2: poll
		};

/***/ }
/******/ ]);
//# sourceMappingURL=app-09ab37822ed0c10da21f.js.map