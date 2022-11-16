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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Home */ \"./src/js/modules/Home.js\");\n\r\nconst logo = document.querySelector(\"#logo\");\r\nhistory.pushState(\"\", \"\", \"\");\r\nlogo.addEventListener(\"click\", function () {\r\n    history.go(-1)\r\n})\r\n;(0,_modules_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nwindow.addEventListener(\"popstate\", function () {\r\n    history.go(0)\r\n})\n\n//# sourceURL=webpack://online-market/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/Bascet.js":
/*!**********************************!*\
  !*** ./src/js/modules/Bascet.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bascet)\n/* harmony export */ });\nfunction Bascet() {\r\n    const box = document.querySelector(\"#boxDiv\");\r\n    const total = document.querySelector(\"#total\");\r\n    const count = document.querySelector(\"#count\");\r\n    const fullDiv = document.querySelector(\"#fullDiv\");\r\n    fetch(\"http://localhost:7000/bascet/\")\r\n        .then(data => data.json())\r\n        .then(data => {\r\n            data.forEach((item) => {\r\n                if(box.children.length <= data.length){\r\n            box.insertAdjacentHTML(\"beforeend\", `\r\n            <div class=\"box\">\r\n            <div class=\"perfumeDiv\">\r\n            <img src=\"./src/img/${item.img}\" alt=\"\">\r\n            <div>\r\n            <h5>${item.brend}</h5>\r\n            <h4>${item.name}</h4>\r\n            <p>${item.price} Դ</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"countDiv\">\r\n            <button>-</button>\r\n            <p class=\"thisCount\">${item.count}</p>\r\n            <button>+</button>\r\n            </div>\r\n            <div class=\"priceDiv\">\r\n            <p>${item.price * item.count} Դ</p>\r\n            </div>\r\n            <img src=\"./src/img/delete.png\" alt=\"\" class=\"delete\">\r\n            </div>`)\r\n        }\r\n            })\r\n            return data\r\n        })\r\n        .then(data => {\r\n            const countDiv = document.querySelectorAll(\".countDiv\");\r\n            const thisCount = document.querySelectorAll(\".thisCount\");\r\n            const priceDiv = document.querySelectorAll(\".priceDiv\");\r\n            const del = document.querySelectorAll(\".delete\");\r\n            data.forEach((item, index) => {\r\n                total.textContent = (parseInt(total.textContent) + (item.price*item.count)) + \" Դ\";\r\n                count.textContent = parseInt(count.textContent) + parseInt(item.count)\r\n                del[index].addEventListener(\"click\", () => {\r\n                    total.textContent = (parseInt(total.textContent) - parseInt(priceDiv[index].textContent)) + \" Դ\";\r\n                    count.textContent = parseInt(count.textContent) - parseInt(thisCount[index].textContent);\r\n                    fetch(\"http://localhost:7000/bascet/\" + `${item.id}`, {\r\n                        method: \"DELETE\",\r\n                        headers: {\r\n                            \"content-type\": \"application/json\"\r\n                        }\r\n                    })\r\n                    del[index].parentElement.remove();\r\n                })\r\n                countDiv[index].firstElementChild.addEventListener(\"click\", () => {\r\n                    if (thisCount[index].textContent > 1) {\r\n                        thisCount[index].textContent = parseInt(thisCount[index].textContent) - 1;\r\n                        priceDiv[index].firstElementChild.textContent = (parseInt(priceDiv[index].firstElementChild.textContent) - item.price) + \"Դ\"\r\n                        total.textContent = (parseInt(total.textContent) - item.price) + \" Դ\";\r\n                        count.textContent = parseInt(count.textContent) - 1;\r\n                        fetch(\"http://localhost:7000/bascet/\" + `${item.id}`, {\r\n                            method: \"PATCH\",\r\n                            headers: {\r\n                                \"content-type\": \"application/json\"\r\n                            },\r\n                            body: JSON.stringify({\r\n                                count: parseInt(item.count)-1\r\n                            })\r\n                        })\r\n                    }\r\n                })\r\n                countDiv[index].lastElementChild.addEventListener(\"click\", () => {\r\n                    if (thisCount[index].textContent < 20) {\r\n                        thisCount[index].textContent = parseInt(thisCount[index].textContent) + 1;\r\n                        priceDiv[index].firstElementChild.textContent = (parseInt(priceDiv[index].firstElementChild.textContent) + item.price) + \"Դ\"\r\n                        total.textContent = (parseInt(total.textContent) + item.price) + \" Դ\";\r\n                        count.textContent = parseInt(count.textContent) + 1;\r\n                        fetch(\"http://localhost:7000/bascet/\" + `${item.id}`, {\r\n                            method: \"PATCH\",\r\n                            headers: {\r\n                                \"content-type\": \"application/json\"\r\n                            },\r\n                            body: JSON.stringify({\r\n                                count: parseInt(item.count)+1\r\n                            })\r\n                        })\r\n                    }\r\n                })\r\n            })\r\n\r\n            return data\r\n        })\r\n        .then(data => {\r\n            fullDiv.addEventListener(\"click\",(e) => {\r\n                if (e.target == fullDiv) {\r\n                    fullDiv.style.display = \"none\";\r\n                    total.textContent = 0;\r\n                    count.textContent = 0;\r\n                }\r\n            })\r\n        })\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Bascet.js?");

/***/ }),

/***/ "./src/js/modules/Brends.js":
/*!**********************************!*\
  !*** ./src/js/modules/Brends.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Brends)\n/* harmony export */ });\n/* harmony import */ var _ToBascet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToBascet */ \"./src/js/modules/ToBascet.js\");\n/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Favorite */ \"./src/js/modules/Favorite.js\");\n/* harmony import */ var _Perfume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Perfume */ \"./src/js/modules/Perfume.js\");\n\r\n\r\n\r\nfunction Brends(item, data = \"\") {\r\n    const content = document.querySelector(\"#content\");\r\n    const brend = document.createElement(\"div\");\r\n    const h4 = document.querySelector(\"#h4\");\r\n    h4.textContent = item.brend\r\n    content.innerHTML = \"\"\r\n    brend.className = \"item\";\r\n    content.innerHTML += ` \r\n        <div class=\"menuDiv\"><img class=\"menuImg\" src=\"./src/img/${item.img}\" alt=${item.brend}></div>\r\n        <p id=\"description\">${item.description}</p>\r\n        `\r\n    item.products.forEach(elem => {\r\n        brend.innerHTML += `\r\n            <div>\r\n            <a>\r\n            <img src=\"./src/img/${elem.img}\" alt=\"\">\r\n            </a>\r\n            <h3>${item.brend}</h3>\r\n            <h5>${elem.name}</h5>\r\n            <p>${elem.price} Դ</p>\r\n            <div id=\"heart\">\r\n            <div class=\"heart\"></div>\r\n            </div>\r\n            <img src=\"./src/img/sale.png\" class=\"toBascet\">\r\n            </div>\r\n            `;\r\n    })\r\n    history.pushState(null, \"\", ``)\r\n    content.append(brend);\r\n    (0,_Favorite__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    (0,_ToBascet__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const items = document.querySelectorAll(\".item > div\");\r\n    items.forEach((item) => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            if (e.target == item.children[0].firstElementChild) {\r\n                data.forEach((elem) => {\r\n                    if (elem.brend == item.children[1].textContent) {\r\n                        elem.products.forEach(parfume => {\r\n                            if (parfume.name == item.children[2].textContent) {\r\n                                (0,_Perfume__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(parfume, elem.brend);\r\n                            }\r\n                        });\r\n                    }\r\n                })\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Brends.js?");

/***/ }),

/***/ "./src/js/modules/Favorite.js":
/*!************************************!*\
  !*** ./src/js/modules/Favorite.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Favorite)\n/* harmony export */ });\nfunction Favorite(data) {\r\n    const heartDiv = document.querySelectorAll(\"#heart\");\r\n    const heart = document.querySelectorAll(\".heart\");\r\n    const favorite = document.querySelector(\"#favElem\");\r\n    const favDiv = document.querySelector(\"#favDiv\");\r\n    heartDiv.forEach((item, index) => {\r\n        data.forEach((elem) => {\r\n            if (elem.brend == item.parentElement.children[1].textContent) {\r\n                elem.products.forEach(parfume => {\r\n                    let copy = \"\"\r\n                    if (parfume.name == item.parentElement.children[2].textContent) {\r\n                        if (localStorage.getItem(parfume.name) == parfume.name) {\r\n                            localStorage.setItem(parfume.name, parfume.name);\r\n                            heart[index].style.setProperty('--boxAfterBackColor', '#d89728');\r\n                            if (localStorage.length > favorite.children.length) {\r\n                                copy = item.parentElement;\r\n                                favorite.append(copy.cloneNode(true));\r\n                            }\r\n                        }\r\n                        item.addEventListener(\"click\", () => {\r\n                            if (localStorage.getItem(parfume.name) != parfume.name) {\r\n                                heart[index].style.setProperty('--boxAfterBackColor', '#d89728');\r\n                                localStorage.setItem(parfume.name, parfume.name);\r\n                            } else {\r\n                                heart[index].style.setProperty('--boxAfterBackColor', 'rgb(169, 169, 169)');\r\n                                localStorage.removeItem(parfume.name);\r\n                                if (favDiv.style.display == \"block\") {\r\n                                    item.parentElement.remove();\r\n                                }\r\n                            }\r\n                            copy = item.parentElement;\r\n                            favorite.append(copy.cloneNode(true));\r\n                        })\r\n                    }\r\n                });\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Favorite.js?");

/***/ }),

/***/ "./src/js/modules/Home.js":
/*!********************************!*\
  !*** ./src/js/modules/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _Bascet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bascet */ \"./src/js/modules/Bascet.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/js/modules/Menu.js\");\n/* harmony import */ var _ToBascet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToBascet */ \"./src/js/modules/ToBascet.js\");\n/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Favorite */ \"./src/js/modules/Favorite.js\");\n/* harmony import */ var _Perfume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Perfume */ \"./src/js/modules/Perfume.js\");\n\r\n\r\n\r\n\r\n\r\nfunction Home() {\r\n    const total = document.querySelector(\"#total\");\r\n    const count = document.querySelector(\"#count\");\r\n    const perfumes = document.querySelector(\"#perfumes\");\r\n    const fullDiv = document.querySelector(\"#fullDiv\");\r\n    const favDiv = document.querySelector(\"#favDiv\");\r\n    console.log(perfumes.childElementCount);\r\n    fetch(\"http://localhost:7000/perfumes/\")\r\n        .then(data => data.json())\r\n        .then(data => {\r\n            for (let i = 0; i < 5; i++) {\r\n                for (let j = 0; j < 3; j++) {\r\n                    perfumes.innerHTML += `\r\n            <div>\r\n            <a>\r\n                <img src=\"./src/img/${data[i].products[j].img}\" alt=\"\">\r\n            </a>\r\n            <h3>${data[i].brend}</h3>\r\n            <h5>${data[i].products[j].name}</h5>\r\n            <p>${data[i].products[j].price} Դ</p>\r\n            <div id=\"heart\">\r\n                <div class=\"heart\"></div>\r\n            </div>\r\n            <img src=\"./src/img/sale.png\" class=\"toBascet\">\r\n        </div>\r\n        `;\r\n                }\r\n            }\r\n            return data;\r\n        })\r\n        .then(data => {\r\n            (0,_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n            return data;\r\n        })\r\n        .then(data => {\r\n            const fav = document.querySelector(\"#fav\");\r\n            fav.addEventListener(\"click\", async () => {\r\n                favDiv.style.height = `${document.body.clientHeight}px`;\r\n                if (favDiv.style.display != \"block\") {\r\n                    favDiv.style.display = \"block\";\r\n                    fullDiv.style.display = \"none\";\r\n                    count.textContent = 0;\r\n                    total.textContent = 0;\r\n                } else {\r\n                    favDiv.style.display = \"none\"\r\n                }\r\n            })\r\n            return data;\r\n        })\r\n        .then(data => {\r\n            const bascet = document.querySelector(\"#bascet\");\r\n            bascet.addEventListener(\"click\", async () => {\r\n                fullDiv.style.height = `${document.body.clientHeight}px`;\r\n                if (fullDiv.style.display != \"block\") {\r\n                    (0,_Bascet__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n                    fullDiv.style.display = \"block\";\r\n                    favDiv.style.display = \"none\";\r\n                    count.textContent = 0;\r\n                    total.textContent = 0;\r\n                } else {\r\n                    fullDiv.style.display = \"none\"\r\n                }\r\n            })\r\n            ;(0,_ToBascet__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n            return data;\r\n        })\r\n        .then(data => {\r\n            const items = document.querySelectorAll(\".item > div\");\r\n            items.forEach((item, index) => {\r\n                item.addEventListener(\"click\", (e) => {\r\n                    if (e.target == item.children[0].firstElementChild) {\r\n                        data.forEach((elem) => {\r\n                            if (elem.brend == item.children[1].textContent) {\r\n                                elem.products.forEach(parfume => {\r\n                                    if (parfume.name == item.children[2].textContent) {\r\n                                        (0,_Perfume__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(parfume, elem.brend);\r\n                                        (0,_ToBascet__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(parfume, elem.brend);\r\n                                    }\r\n                                });\r\n                            }\r\n                        })\r\n                    }\r\n                })\r\n            })\r\n            return data\r\n        })\r\n        .then(data => {\r\n            (0,_Favorite__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\r\n        })\r\n\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Home.js?");

/***/ }),

/***/ "./src/js/modules/Menu.js":
/*!********************************!*\
  !*** ./src/js/modules/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _Brends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brends */ \"./src/js/modules/Brends.js\");\n\r\nasync function Menu(){\r\n    const brends = document.querySelector(\"#brends\");\r\n    await fetch(\"http://localhost:7000/perfumes/\")  \r\n    .then(data => data.json())\r\n    .then(data => {\r\n        data.forEach((brend) => {\r\n            brends.innerHTML += `\r\n            <div class=\"menuDiv\"><img class=\"menuImg\" src=\"./src/img/${brend.img}\" alt=${brend.brend}></div>`\r\n        });\r\n        return data\r\n    })\r\n    .then(data => {\r\n        const brendsArr = [...document.querySelectorAll(\"#brends > div\")]\r\n        brendsArr.forEach((item,index)=>{\r\n            item.firstElementChild.addEventListener(\"click\", ()=>{\r\n                ;(0,_Brends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data[index], data);\r\n            })\r\n        })\r\n        return data;\r\n    }) \r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Menu.js?");

/***/ }),

/***/ "./src/js/modules/Perfume.js":
/*!***********************************!*\
  !*** ./src/js/modules/Perfume.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Perfume)\n/* harmony export */ });\nfunction Perfume(item, brend) {\r\n    const content = document.querySelector(\"#content\");\r\n    const perfumeDiv = document.createElement(\"div\");\r\n    const h4 = document.querySelector(\"#h4\");\r\n    h4.textContent = item.name\r\n    content.innerHTML = \"\"\r\n    perfumeDiv.id = \"perfumeDiv\";\r\n    perfumeDiv.style.display = \"flex\";\r\n    perfumeDiv.innerHTML += `\r\n            <div id = \"perfume1\">\r\n            <div id=\"heart\">\r\n                <div class=\"heart\"></div>\r\n            </div>\r\n                <img src=\"./src/img/${item.img}\" alt=\"\">\r\n            </div>\r\n            <div id = \"perfume2\">\r\n                <h5>${brend}</h5>\r\n                <h3>${item.name}</h3>\r\n                <div id=\"perfumeMenu\">\r\n                <span>100ml.</span>\r\n                <p>${item.price} Դ</p>\r\n                <img src=\"./src/img/sale.png\" class=\"toBascet\">\r\n                </div>\r\n                <h6>Description</h6>\r\n                <p>${item.info}</p>\r\n            </div>\r\n            `;\r\n    history.pushState(null, \"\", ``)\r\n    content.append(perfumeDiv);\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Perfume.js?");

/***/ }),

/***/ "./src/js/modules/ToBascet.js":
/*!************************************!*\
  !*** ./src/js/modules/ToBascet.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToBascet)\n/* harmony export */ });\nfunction ToBascet(parfume = \"\", brend = \"\") {\r\n    const toBascetArr = document.querySelectorAll(\".toBascet\");\r\n    toBascetArr.forEach((item) => {\r\n        item.addEventListener(\"click\", async () => {\r\n            await fetch(\"http://localhost:7000/bascet/\")\r\n                .then(data => data.json())\r\n                .then(data => {\r\n                    if (parfume == \"\" && brend == \"\") {\r\n                        if (data.filter(el => el.name == item.parentElement.children[2].textContent).length == 0) {\r\n                            fetch(\"http://localhost:7000/bascet/\", {\r\n                                method: \"POST\",\r\n                                headers: {\r\n                                    \"content-type\": \"application/json\"\r\n                                },\r\n                                body: JSON.stringify({\r\n                                    brend: item.parentElement.children[1].textContent,\r\n                                    name: item.parentElement.children[2].textContent,\r\n                                    price: parseInt(item.parentElement.children[3].textContent),\r\n                                    img: item.parentElement.children[2].textContent + \".jpg\",\r\n                                    count: 1\r\n                                })\r\n                            })\r\n                        }\r\n                    } else {\r\n                        if (data.filter(el => el.name == parfume.name).length == 0) {\r\n                            fetch(\"http://localhost:7000/bascet/\", {\r\n                                method: \"POST\",\r\n                                headers: {\r\n                                    \"content-type\": \"application/json\"\r\n                                },\r\n                                body: JSON.stringify({\r\n                                    brend: brend,\r\n                                    name: parfume.name,\r\n                                    price: parfume.price,\r\n                                    img: parfume.img,\r\n                                    count: 1\r\n                                })\r\n                            })\r\n                        }\r\n                    }\r\n                })\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/ToBascet.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;