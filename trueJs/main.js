/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snakeGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snakeGame.js */ \"./js/snakeGame.js\");\n;\r\n\r\nlet game = new _snakeGame_js__WEBPACK_IMPORTED_MODULE_0__.default(40, 20);\n\n//# sourceURL=webpack://3/./js/index.js?");

/***/ }),

/***/ "./js/pole.js":
/*!********************!*\
  !*** ./js/pole.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ pole\n/* harmony export */ });\nfunction pole(x, y) {\r\n    let mainDiv = document.querySelector(\".mainDiv\")\r\n    mainDiv.style.cssText = `\r\n    height: ${32*y}px;\r\n    width: ${32*x}px;\r\n    `\r\n    console.log(mainDiv);\r\n    for (let i = 0; i < y; i++) {\r\n        for (let some of rad(x, i)) {\r\n            mainDiv.appendChild(some)\r\n        }\r\n    }\r\n\r\n}\r\n\r\nfunction* rad(x, idY) {\r\n    let i = 0\r\n    while (i < x) {\r\n        let id = String(idY)\r\n        id += i\r\n        let block = document.createElement(\"span\")\r\n        block.setAttribute(\"id\", id);\r\n        block.style.cssText = `\r\n        height: 30px;\r\n        width: 30px;\r\n        display: inline-block;\r\n        border: 1px solid black;\r\n        margin: 0;\r\n        padding: 0;\r\n        `\r\n        yield block\r\n        i++\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://3/./js/pole.js?");

/***/ }),

/***/ "./js/pulse.js":
/*!*********************!*\
  !*** ./js/pulse.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ pulse\n/* harmony export */ });\nfunction pulse(x, y) {\r\n    let X = Math.floor(Math.random() * (x));\r\n    let Y = Math.floor(Math.random() * (y));\r\n    console.log(Y, X);\r\n    let pulseBlock = document.getElementById(String(Y) + X)\r\n    pulseBlock.classList.add('red')\r\n}\n\n//# sourceURL=webpack://3/./js/pulse.js?");

/***/ }),

/***/ "./js/snake.js":
/*!*********************!*\
  !*** ./js/snake.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ snake\n/* harmony export */ });\n/* harmony import */ var _pulse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pulse.js */ \"./js/pulse.js\");\n;\r\nvar timer, snakeX, snakeY\r\nvar delay = 50\r\nlet snakeArray = []\r\nfunction snake(snakX, snakY, x, y) {\r\n    snakeX = snakX\r\n    snakeY = snakY\r\n    snakeArray[0] = String(snakeY) + snakeX\r\n    let snake = document.getElementById(snakeArray[0])\r\n    snake.classList.add('green')\r\n    document.onkeydown = function(e) {\r\n        switch (e.key) {\r\n            case \"ArrowDown\":\r\n                clearTimeout(timer)\r\n                snakeY = snakeY == y - 1 ? 0 : snakeY + 1\r\n                move(x, y)\r\n                timerF(\"down\", x, y)\r\n                break;\r\n            case \"ArrowUp\":\r\n                clearTimeout(timer)\r\n                snakeY = snakeY == 0 ? y - 1 : snakeY - 1\r\n                move(x, y)\r\n                timerF(\"up\", x, y)\r\n                break;\r\n            case \"ArrowRight\":\r\n                clearTimeout(timer)\r\n                snakeX = snakeX == x - 1 ? 0 : snakeX + 1\r\n                move(x, y)\r\n                timerF(\"right\", x, y)\r\n                break;\r\n            case \"ArrowLeft\":\r\n                clearTimeout(timer)\r\n                snakeX = snakeX == 0 ? x - 1 : snakeX - 1\r\n                move(x, y)\r\n                timerF(\"left\", x, y)\r\n                break;\r\n            case \" \":\r\n                clearTimeout(timer)\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    }\r\n}\r\n\r\nfunction check(x, y) {\r\n    let ch = document.getElementById(String(snakeY) + snakeX)\r\n    if (ch.classList.contains(\"red\")) {\r\n        ch.classList.remove(\"red\")\r\n        delay--\r\n        ;(0,_pulse_js__WEBPACK_IMPORTED_MODULE_0__.default)(x, y);\r\n        return false\r\n    } else {\r\n        return true\r\n    }\r\n\r\n}\r\n\r\nfunction timerF(func, x, y) {\r\n    timer = setTimeout(function tick() {\r\n        switch (func) {\r\n            case \"left\":\r\n                snakeX = snakeX == 0 ? x - 1 : snakeX - 1\r\n                move(x, y)\r\n                break;\r\n            case \"right\":\r\n                snakeX = snakeX == x - 1 ? 0 : snakeX + 1\r\n                move(x, y)\r\n                break;\r\n            case \"up\":\r\n                snakeY = snakeY == 0 ? y - 1 : snakeY - 1\r\n                move(x, y)\r\n                break;\r\n            case \"down\":\r\n                snakeY = snakeY == y - 1 ? 0 : snakeY + 1\r\n                move(x, y)\r\n                break;\r\n        };\r\n        timer = setTimeout(tick, delay * 20)\r\n    }, delay * 20);\r\n}\r\n\r\n\r\n\r\n\r\nfunction move(x, y) {\r\n    let s\r\n    if (check(x, y)) {\r\n        s = document.getElementById(snakeArray[0])\r\n        s.classList.remove(\"green\")\r\n        snakeArray.shift()\r\n    }\r\n    snakeArray.push(String(snakeY) + snakeX)\r\n    console.log();\r\n    s = document.getElementById(snakeArray[snakeArray.length - 1])\r\n    s.classList.add(\"green\")\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// function left(x, y) {\r\n//     let s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.remove('green')\r\n//     snakeX = snakeX == 0 ? x - 1 : snakeX - 1\r\n//     console.log(snakeY, snakeX);\r\n//     s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.add('green')\r\n//     check(s, \"left\", x, y)\r\n// }\r\n// function right(x, y) {\r\n//     let s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.remove('green')\r\n//     snakeX = snakeX == x - 1 ? 0 : snakeX + 1\r\n//     console.log(snakeY, snakeX);\r\n//     s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.add('green')\r\n//     check(s, \"right\", x, y)\r\n// }\r\n\r\n// function down(x, y) {\r\n//     let s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.remove('green')\r\n//     snakeY = snakeY == y - 1 ? 0 : snakeY + 1\r\n//     console.log(snakeY, snakeX);\r\n//     s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.add('green')\r\n//     check(s, \"down\", x, y)\r\n// }\r\n\r\n// function up(x, y) {\r\n//     let s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.remove('green')\r\n//     snakeY = snakeY == 0 ? y - 1 : snakeY - 1\r\n//     console.log(snakeY, snakeX);\r\n//     s = document.getElementById(String(snakeY) + snakeX)\r\n//     s.classList.add('green')\r\n//     check(s, \"right\", x, y)\r\n// }\n\n//# sourceURL=webpack://3/./js/snake.js?");

/***/ }),

/***/ "./js/snakeGame.js":
/*!*************************!*\
  !*** ./js/snakeGame.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ snakeGame\n/* harmony export */ });\n/* harmony import */ var _pole_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pole.js */ \"./js/pole.js\");\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake.js */ \"./js/snake.js\");\n/* harmony import */ var _pulse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pulse.js */ \"./js/pulse.js\");\n;\r\n\r\n\r\nclass snakeGame {\r\n    constructor(x, y) {\r\n        let snakeX = Math.floor(Math.random() * (x));\r\n        let snakeY = Math.floor(Math.random() * (y));\r\n        (0,_pole_js__WEBPACK_IMPORTED_MODULE_0__.default)(x, y)\r\n        ;(0,_snake_js__WEBPACK_IMPORTED_MODULE_1__.default)(snakeX, snakeY, x, y)\r\n        ;(0,_pulse_js__WEBPACK_IMPORTED_MODULE_2__.default)(x, y)\r\n    };\r\n}\n\n//# sourceURL=webpack://3/./js/snakeGame.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;