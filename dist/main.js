/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form.js */ \"./src/modules/form.js\");\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"2026-09-19T00:00:00\");\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_form_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://3d-moroz/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/form.js"
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = () => {\n  const textInputs = document.querySelectorAll('form input[type=\"text\"], form input:not([type])');\n  const emailInputs = document.querySelectorAll('form input[type=\"email\"]');\n  const telInputs = document.querySelectorAll('form input[type=\"tel\"]');\n  const squareInput = document.querySelectorAll(\"#calc .calc-square\");\n  const countInput = document.querySelectorAll(\"#calc .calc-count\");\n  const dayInput = document.querySelectorAll(\"#calc .calc-day\");\n  textInputs.forEach(input => {\n    input.addEventListener(\"input\", () => {\n      input.value = input.value.replace(/[^А-Яа-яЁё -]/g, \"\");\n    });\n  });\n  emailInputs.forEach(input => {\n    input.addEventListener(\"input\", () => {\n      input.value = input.value.replace(/[^A-Za-z0-9@\\-._!~*']/g, \"\");\n    });\n  });\n  telInputs.forEach(input => {\n    input.addEventListener(\"input\", () => {\n      input.value = input.value.replace(/[^0-9()-]/g, \"\");\n    });\n  });\n  [squareInput, countInput, dayInput].forEach(inputs => {\n    inputs.forEach(input => {\n      input.addEventListener(\"input\", () => {\n        input.value = input.value.replace(/[^0-9]/g, \"\");\n      });\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/form.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBts = document.querySelector(\".menu\");\n  const menu = document.querySelector(\"menu\");\n  const closeBts = menu.querySelector(\".close-btn\");\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\n  const handleMenu = () => {\n    // if (!menu.style.transform) {\n    //   menu.style.transform = \"translateX(0)\";\n    // } else {\n    //   menu.style.transform = \"\";\n    // }\n    menu.classList.toggle(\"active-menu\");\n  };\n  menuBts.addEventListener(\"click\", handleMenu);\n  closeBts.addEventListener(\"click\", handleMenu);\n\n  // for (let i = 0; i < menuItems.length; i++) {\n  //   menuItems[i].addEventListener(\"click\", handleMenu);\n  // }\n\n  menuItems.forEach(item => item.addEventListener(\"click\", handleMenu));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modalWindow = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  if (!modalWindow) {\n    return;\n  }\n  const closeBts = modalWindow.querySelector(\".popup-close\");\n  const isMobile = window.matchMedia(\"(max-width: 767px)\").matches;\n  const animateModal = (targetOpacity, targetTranslateY, onComplete) => {\n    if (isMobile) {\n      modalWindow.style.opacity = String(targetOpacity);\n      modalWindow.style.transform = `translateY(${targetTranslateY}px)`;\n      if (onComplete) {\n        onComplete();\n      }\n      return;\n    }\n    const start = performance.now();\n    const startOpacity = Number(modalWindow.style.opacity) || 0;\n    const startTranslateY = Number(modalWindow.style.transform.replace(\"translateY(\", \"\").replace(\"px)\", \"\")) || 0;\n    const tick = now => {\n      const progress = Math.min((now - start) / 300, 1);\n      const eased = 1 - (1 - progress) ** 3;\n      modalWindow.style.opacity = (startOpacity + (targetOpacity - startOpacity) * eased).toFixed(3);\n      modalWindow.style.transform = `translateY(${(startTranslateY + (targetTranslateY - startTranslateY) * eased).toFixed(2)}px)`;\n      if (progress < 1) {\n        requestAnimationFrame(tick);\n      } else if (onComplete) {\n        onComplete();\n      }\n    };\n    requestAnimationFrame(tick);\n  };\n  const openModal = () => {\n    modalWindow.style.display = \"block\";\n    modalWindow.style.opacity = \"0\";\n    modalWindow.style.transform = \"translateY(20px)\";\n    animateModal(1, 0);\n  };\n  const closeModal = () => {\n    animateModal(0, 20, () => {\n      modalWindow.style.display = \"none\";\n    });\n  };\n  buttons.forEach(bts => {\n    bts.addEventListener(\"click\", openModal);\n  });\n  if (closeBts) {\n    closeBts.addEventListener(\"click\", closeModal);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/timer.js"
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = deadline => {\n  const timeHours = document.getElementById(\"timer-hours\");\n  const timeMinutes = document.getElementById(\"timer-minutes\");\n  const timeSeconds = document.getElementById(\"timer-seconds\");\n  const getTimeRemaining = () => {\n    const dateNow = new Date().getTime();\n    const dateStop = new Date(deadline).getTime();\n    const timeRemaining = Math.max(0, (dateStop - dateNow) / 1000);\n    const seconds = Math.floor(timeRemaining % 60);\n    const minutes = Math.floor(timeRemaining / 60 % 60);\n    const hours = Math.floor(timeRemaining / 3600);\n    return {\n      timeRemaining,\n      hours,\n      minutes,\n      seconds\n    };\n  };\n  const updateClock = () => {\n    const {\n      timeRemaining,\n      hours,\n      minutes,\n      seconds\n    } = getTimeRemaining();\n    console.log(\"updateClock tick\");\n    if (timeRemaining <= 0) {\n      timeHours.textContent = \"00\";\n      timeMinutes.textContent = \"00\";\n      timeSeconds.textContent = \"00\";\n      clearInterval(timerId);\n      return;\n    }\n    timeHours.textContent = String(hours).padStart(2, \"0\");\n    timeMinutes.textContent = String(minutes).padStart(2, \"0\");\n    timeSeconds.textContent = String(seconds).padStart(2, \"0\");\n  };\n  let timerId;\n  updateClock();\n  timerId = setInterval(updateClock, 1000);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/timer.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;