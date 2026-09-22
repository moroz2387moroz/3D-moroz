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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form.js */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n\n\n\n\n\n\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"2026-09-19T00:00:00\");\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_form_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack://3d-moroz/./src/index.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuButton = document.querySelector(\".menu\");\n  const menuElement = document.querySelector(\"menu\");\n  if (!menuButton || !menuElement) {\n    return;\n  }\n  document.addEventListener(\"click\", event => {\n    if (event.target.closest(\".menu\") === menuButton) {\n      menuElement.classList.toggle(\"active-menu\");\n    }\n  });\n  menuElement.addEventListener(\"click\", event => {\n    const target = event.target.closest(\".close-btn, ul li a\");\n    if (target) {\n      if (target.classList.contains(\"close-btn\")) {\n        event.preventDefault();\n      }\n      menuElement.classList.remove(\"active-menu\");\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modalWindow = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  if (!modalWindow) {\n    return;\n  }\n  const isMobile = window.matchMedia(\"(max-width: 767px)\").matches;\n  const animateModal = (targetOpacity, targetTranslateY, onComplete) => {\n    if (isMobile) {\n      modalWindow.style.opacity = String(targetOpacity);\n      modalWindow.style.transform = `translateY(${targetTranslateY}px)`;\n      if (onComplete) {\n        onComplete();\n      }\n      return;\n    }\n    const start = performance.now();\n    const startOpacity = Number(modalWindow.style.opacity) || 0;\n    const startTranslateY = Number(modalWindow.style.transform.replace(\"translateY(\", \"\").replace(\"px)\", \"\")) || 0;\n    const tick = now => {\n      const progress = Math.min((now - start) / 300, 1);\n      const eased = 1 - (1 - progress) ** 3;\n      modalWindow.style.opacity = (startOpacity + (targetOpacity - startOpacity) * eased).toFixed(3);\n      modalWindow.style.transform = `translateY(${(startTranslateY + (targetTranslateY - startTranslateY) * eased).toFixed(2)}px)`;\n      if (progress < 1) {\n        requestAnimationFrame(tick);\n      } else if (onComplete) {\n        onComplete();\n      }\n    };\n    requestAnimationFrame(tick);\n  };\n  const openModal = () => {\n    modalWindow.style.display = \"block\";\n    modalWindow.style.opacity = \"0\";\n    modalWindow.style.transform = \"translateY(20px)\";\n    animateModal(1, 0);\n  };\n  const closeModal = () => {\n    animateModal(0, 20, () => {\n      modalWindow.style.display = \"none\";\n    });\n  };\n  buttons.forEach(bts => {\n    bts.addEventListener(\"click\", openModal);\n  });\n\n  // if (closeBts) {\n  //   closeBts.addEventListener(\"click\", closeModal);\n  // }\n\n  modalWindow.addEventListener(\"click\", e => {\n    if (!e.target.closest(\".popup-content\") || e.target.classList.contains(\"popup-close\")) {\n      closeModal();\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/slider.js"
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n  const sliderBlock = document.querySelector(\".portfolio-content\");\n  const slides = document.querySelectorAll(\".portfolio-item\");\n  const dotsBlock = document.querySelector(\".portfolio-dots\");\n  dotsBlock.innerHTML = \"\";\n  slides.forEach((slide, index) => {\n    const dot = document.createElement(\"li\");\n    dot.classList.add(\"dot\");\n    if (index === 0) {\n      dot.classList.add(\"dot-active\");\n    }\n    dotsBlock.append(dot);\n  });\n  const dots = dotsBlock.querySelectorAll(\".dot\");\n  const timerInterval = 2000;\n  let currentSlide = 0;\n  let interval;\n  const prevSlide = (els, idx, str) => {\n    els[idx].classList.remove(str);\n  };\n  const nextSlide = (els, idx, str) => {\n    els[idx].classList.add(str);\n  };\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    currentSlide++;\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  };\n  const startSlide = (timer = 1500) => {\n    interval = setInterval(autoSlide, timer);\n  };\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n  sliderBlock.addEventListener(\"click\", e => {\n    e.preventDefault();\n    if (!e.target.matches(\".portfolio-btn, .dot\")) {\n      return;\n    }\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    if (e.target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (e.target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (e.target.classList.contains(\"dot\")) {\n      //   currentSlide = Array.from(dots).indexOf(e.target);\n      dots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index;\n        }\n      });\n    }\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  });\n  sliderBlock.addEventListener(\"mouseenter\", e => {\n    if (e.target.matches(\".portfolio-btn, .dot\")) {\n      stopSlide();\n    }\n  }, true);\n  sliderBlock.addEventListener(\"mouseleave\", e => {\n    if (e.target.matches(\".portfolio-btn, .dot\")) {\n      startSlide(timerInterval);\n    }\n  }, true);\n  startSlide(timerInterval);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/slider.js?\n}");

/***/ },

/***/ "./src/modules/tabs.js"
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n  const tabpanel = document.querySelector(\".service-header\");\n  const tabs = document.querySelectorAll(\".service-header-tab\");\n  const tabContent = document.querySelectorAll(\".service-tab\");\n  tabpanel.addEventListener(\"click\", e => {\n    if (e.target.closest(\".service-header-tab\")) {\n      const tabBts = e.target.closest(\".service-header-tab\");\n      tabs.forEach((tab, i) => {\n        if (tab === tabBts) {\n          tab.classList.add(\"active\");\n          tabContent[i].classList.remove(\"d-none\");\n        } else {\n          tab.classList.remove(\"active\");\n          tabContent[i].classList.add(\"d-none\");\n        }\n      });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3d-moroz/./src/modules/tabs.js?\n}");

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