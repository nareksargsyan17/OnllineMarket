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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Home */ \"./src/js/modules/Home.js\");\n/* harmony import */ var _modules_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Menu */ \"./src/js/modules/Menu.js\");\n\r\n\r\nconst logo = document.querySelector(\"#logo\");\r\nconst bascet = document.querySelector(\"#bascet\");\r\nconst fullDiv = document.querySelector(\"#fullDiv\");\r\nwindow.addEventListener(\"load\",()=>{\r\n    (0,_modules_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})\r\n;(0,_modules_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nlogo.addEventListener(\"click\", function () {\r\n    history.go(-1)\r\n})\r\nwindow.addEventListener(\"popstate\", function () {\r\n    history.go(0)\r\n})\r\nbascet.addEventListener(\"click\", () => {\r\n    fullDiv.style.height = `${document.body.clientHeight}px`;\r\n    fullDiv.style.display = \"block\";\r\n\r\n    console.log(document.body.clientHeight);\r\n})\r\nconsole.log(window.history);\n\n//# sourceURL=webpack://online-market/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/Bascet.js":
/*!**********************************!*\
  !*** ./src/js/modules/Bascet.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bascet)\n/* harmony export */ });\nfunction Bascet(){\r\n    const toBascetArr = document.querySelectorAll(\".toBascet\");\r\n    const box = document.querySelector(\"#boxDiv\");\r\n    const total = document.querySelector(\"#total\");\r\n    const count = document.querySelector(\"#count\");\r\n    console.log(toBascetArr);\r\n    fetch(\"http://localhost:7000/bascet/\")\r\n    .then(data => data.json())\r\n    .then(async data => {\r\n        data.forEach((item, index)=>{\r\n            box.insertAdjacentHTML(\"afterbegin\", `\r\n            <div class=\"box\">\r\n            <div class=\"perfumeDiv\">\r\n            <img src=\"./src/img/${item.img}\" alt=\"\">\r\n            <div>\r\n            <h5>${item.brend}</h5>\r\n            <h4>${item.name}</h4>\r\n            <p>${item.price} Դ</p>\r\n            </div>\r\n            </div>\r\n            <div class=\"countDiv\">\r\n            <button>-</button>\r\n            <p class=\"thisCount\">${item.count}</p>\r\n            <button>+</button>\r\n            </div>\r\n            <div class=\"priceDiv\">\r\n            <p>${item.price*item.count} Դ</p>\r\n            </div>\r\n            <img src=\"./src/img/delete.png\" alt=\"\" class=\"delete\">\r\n            </div>`)\r\n            const countDiv  = document.querySelector(\".countDiv\");\r\n            const thisCount = document.querySelector(\".thisCount\");\r\n            const priceDiv = document.querySelector(\".priceDiv\");\r\n            const del = document.querySelector(\".delete\");\r\n            total.textContent = (parseInt(total.textContent)+(parseInt(priceDiv.firstElementChild.textContent))) +\" Դ\";\r\n            count.textContent = parseInt(thisCount.textContent)+parseInt(count.textContent);\r\n            countDiv.firstElementChild.addEventListener(\"click\", ()=>{\r\n                if(thisCount.textContent>1){\r\n                    thisCount.textContent = parseInt(thisCount.textContent)-1;\r\n                    priceDiv.firstElementChild.textContent = (parseInt(priceDiv.firstElementChild.textContent) - item.price) +\"Դ\"\r\n                    total.textContent = (parseInt(total.textContent)-item.price) +\" Դ\";\r\n                    count.textContent = parseInt(count.textContent)-1;\r\n                }\r\n            })\r\n            countDiv.lastElementChild.addEventListener(\"click\", ()=>{\r\n                if(thisCount.textContent<20){\r\n                    thisCount.textContent = parseInt(thisCount.textContent)+1;\r\n                    priceDiv.firstElementChild.textContent = (parseInt(priceDiv.firstElementChild.textContent) + item.price) +\"Դ\"\r\n                    total.textContent = (parseInt(total.textContent)+item.price)+\" Դ\";\r\n                    count.textContent = parseInt(count.textContent)+1;\r\n                }\r\n            })\r\n            del.addEventListener(\"click\",()=>{\r\n                del.parentElement.remove();\r\n                fetch(\"http://localhost:7000/bascet/\"+`${item.id}`,{\r\n                        method: \"DELETE\",\r\n                        headers:{\r\n                            \"content-type\": \"application/json\"\r\n                        }\r\n                    })\r\n                })\r\n                    fullDiv.addEventListener(\"click\", (e) => {\r\n                        if (e.target == fullDiv) {\r\n                    fullDiv.style.display = \"none\";\r\n                    const allCount = document.querySelectorAll(\".thisCount\");\r\n                    allCount.forEach((elem, index)=>{\r\n                        fetch(\"http://localhost:7000/bascet/\"+`${item.id}`,{\r\n                            method: \"PATCH\",\r\n                            headers:{\r\n                                \"content-type\": \"application/json\"\r\n                            },\r\n                            body: JSON.stringify({\r\n                                count : parseInt(elem.textContent)\r\n                            })\r\n                        })\r\n                    })\r\n                }\r\n        })\r\n    })\r\n        console.log(toBascetArr);\r\n        toBascetArr.forEach((item) => {\r\n            item.addEventListener(\"click\", () => {\r\n            if(data.filter(el => el.name == item.parentElement.children[2].textContent).length == 0){\r\n                fetch(\"http://localhost:7000/bascet/\", {\r\n                    method: \"POST\",\r\n                    headers: {\r\n                        \"content-type\": \"application/json\"\r\n                    },\r\n                    body: JSON.stringify({\r\n                        brend: item.parentElement.children[1].textContent,\r\n                        name: item.parentElement.children[2].textContent,\r\n                        price: parseInt(item.parentElement.children[3].textContent),\r\n                        img: item.parentElement.children[2].textContent + \".jpg\",\r\n                        count:1\r\n                    })\r\n                })     \r\n                }\r\n                })\r\n            })\r\n        })\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Bascet.js?");

/***/ }),

/***/ "./src/js/modules/Brends.js":
/*!**********************************!*\
  !*** ./src/js/modules/Brends.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Brends)\n/* harmony export */ });\n/* harmony import */ var _Bascet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bascet */ \"./src/js/modules/Bascet.js\");\n\r\nfunction Brends(item){\r\n    console.log(item);\r\n        const content = document.querySelector(\"#content\");\r\n        const brend = document.createElement(\"div\");\r\n        const h4 = document.querySelector(\"#h4\");\r\n        h4.textContent = item.brend\r\n        content.innerHTML = \"\"\r\n        brend.className = \"item\";\r\n        console.log(item);\r\n        content.innerHTML +=` \r\n        <div class=\"menuDiv\"><img class=\"menuImg\" src=\"./src/img/${item.img}\" alt=${item.brend}></div>\r\n        <p id=\"description\">${item.description}</p>\r\n        `\r\n        item.products.forEach(elem => {\r\n            brend.innerHTML += `\r\n            <div>\r\n            <a href=\"\">\r\n            <img src=\"./src/img/${elem.img}\" alt=\"\">\r\n            </a>\r\n            <h3>${item.brend}</h3>\r\n            <h5>${elem.name}</h5>\r\n            <p>${elem.price} Դ</p>\r\n            <div id=\"heart\">\r\n            <div class=\"heart\"></div>\r\n            </div>\r\n            <img src=\"./src/img/sale.png\" class=\"toBascet\">\r\n            </div>\r\n            `;})\r\n            history.pushState(null, \"\" , ``)\r\n        content.append(brend);\r\n        (0,_Bascet__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    }\n\n//# sourceURL=webpack://online-market/./src/js/modules/Brends.js?");

/***/ }),

/***/ "./src/js/modules/Home.js":
/*!********************************!*\
  !*** ./src/js/modules/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _Bascet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bascet */ \"./src/js/modules/Bascet.js\");\n\r\nasync function Home(){\r\n    const perfumes = document.createElement(\"div\");\r\n    const content = document.querySelector(\"#content\");\r\n    perfumes.id = \"perfumes\";\r\n    perfumes.className = \"item\";\r\n    content.append(perfumes);\r\n    history.pushState(null, \"\" , \"\");\r\n    await fetch(\"http://localhost:7000/perfumes/\")  \r\n.then(data => data.json())\r\n.then(data => {\r\n    let perfumesArr = [];\r\n    for(let i = 0; i < 5; i++){\r\n        for(let j = 0; j < 3; j++){\r\n            perfumesArr.push(data[i].products[j].name)\r\n            perfumes.innerHTML += `\r\n            <div>\r\n            <a href=\"\">\r\n                <img src=\"./src/img/${data[i].products[j].img}\" alt=\"\">\r\n            </a>\r\n            <h3>${data[i].brend}</h3>\r\n            <h5>${data[i].products[j].name}</h5>\r\n            <p>${data[i].products[j].price} Դ</p>\r\n            <div id=\"heart\">\r\n                <div class=\"heart\"></div>\r\n            </div>\r\n            <img src=\"./src/img/sale.png\" class=\"toBascet\">\r\n        </div>\r\n        `;\r\n    }\r\n    }\r\n})\r\n    ;(0,_Bascet__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Home.js?");

/***/ }),

/***/ "./src/js/modules/Menu.js":
/*!********************************!*\
  !*** ./src/js/modules/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _Brends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brends */ \"./src/js/modules/Brends.js\");\n\r\n\r\nasync function Menu(){\r\n    const brends = document.querySelector(\"#brends\");\r\n    await fetch(\"http://localhost:7000/perfumes/\")  \r\n    .then(data => data.json())\r\n    .then(data => {\r\n        data.forEach((brend) => {\r\n            brends.innerHTML += `\r\n            <div class=\"menuDiv\"><img class=\"menuImg\" src=\"./src/img/${brend.img}\" alt=${brend.brend}></div>`\r\n        });\r\n        return data\r\n    }).then(data => {\r\n        const brendsArr = [...document.querySelectorAll(\"#brends > div\")]\r\n        brendsArr.forEach((item,index)=>{\r\n            item.firstElementChild.addEventListener(\"click\", async ()=>{\r\n                console.log(data[index]);\r\n                (0,_Brends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data[index]);\r\n            })\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://online-market/./src/js/modules/Menu.js?");

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