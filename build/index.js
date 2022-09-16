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

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\nclass App{\n    todo;\n    events;\n\n    constructor(db, ev){\n        this.todo = db;\n    }\n}\n\n//# sourceURL=webpack://persistencia/./src/app/App.js?");

/***/ }),

/***/ "./src/core/Events.js":
/*!****************************!*\
  !*** ./src/core/Events.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Events\": () => (/* binding */ Events)\n/* harmony export */ });\nclass Events{\n    click(selector, action){\n        document.querySelector(selector).addEventListener('click', action);\n\n    }\n\n}\n\n//# sourceURL=webpack://persistencia/./src/core/Events.js?");

/***/ }),

/***/ "./src/core/Persistencia.js":
/*!**********************************!*\
  !*** ./src/core/Persistencia.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Persistencia\": () => (/* binding */ Persistencia)\n/* harmony export */ });\n\n\nclass Persistencia{\n\n    setItem(key, value){\n        window.localStorage.setItem(key, JSON.stringify(value));\n        return true;\n\n    }\n    getItem(key){\n        return JSON.parse(window.localStorage.getItem(key));\n    }\n\n}\n\n//# sourceURL=webpack://persistencia/./src/core/Persistencia.js?");

/***/ }),

/***/ "./src/core/Todo.js":
/*!**************************!*\
  !*** ./src/core/Todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n\nclass Todo{\n    \n    db;\n    \n    constructor(persistencia){\n        this.db = persistencia;\n    }\n\n    create(key, value){\n        return this.db.setItem(key, value);\n    }\n\n    read(key){\n        return this.db.getItem(key);\n    }\n\n    update(){\n\n    }\n\n    delete(){\n\n    }\n}\n\n//# sourceURL=webpack://persistencia/./src/core/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Todo */ \"./src/core/Todo.js\");\n/* harmony import */ var _core_Persistencia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Persistencia */ \"./src/core/Persistencia.js\");\n/* harmony import */ var _core_Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Events */ \"./src/core/Events.js\");\n/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/App */ \"./src/app/App.js\");\n\n\n\n\n\n((app, events) => {\n  function deleteItem(array, posicion, tarea) {\n    array.splice(posicion, 1, tarea);\n    console.log(\"elemento modificado\");\n  }\n\n  let aTareas = [];\n  let pTareas;\n  const btnGuardar = document.querySelector(\"#btnGuardar\");\n  const actualizar = document.createElement(\"button\");\n  const inputTexto = document.querySelector(\"#inputTarea\");\n  const ul = document.querySelector(\"ul\");\n  const form = document.querySelector(\"form\");\n\n  events.click(\"#btnGuardar\", (e) => {\n    e.preventDefault();\n\n    if (inputTexto.value === \"\") {\n      alert(\"campo vacio....\");\n    } else {\n      aTareas.push({ tarea: inputTexto.value });\n      if (app.todo.create(\"tarea\", aTareas)) {\n        alert(\"dato ingresado\");\n        const li = document.createElement(\"li\");\n        const btnEditar = document.createElement(\"button\");\n        const eliminar = document.createElement(\"button\");\n        const contenedorBtn = document.createElement(\"div\");\n        contenedorBtn.setAttribute(\"class\", \"containerBtn\");\n        eliminar.setAttribute(\"id\", \"eliminar\");\n        eliminar.innerHTML = `<i class=\"bi bi-x\"></i>`;\n        eliminar.style.marginLeft = \"1rem\";\n        btnEditar.textContent = \"editar\";\n        btnEditar.setAttribute(\"id\", \"btnActualizar\");\n        li.textContent = inputTexto.value;\n        ul.append(li);\n        li.appendChild(contenedorBtn);\n        contenedorBtn.append(btnEditar, eliminar);\n        inputTexto.value = \"\";\n        location.reload();\n      }\n      // window.localStorage.setItem('tarea', JSON.stringify(aTareas));\n    }\n  });\n\n  if (app.todo.read(\"tarea\")) {\n    let elementos = app.todo.read('tarea');\n    elementos.forEach((elemento, posicion) => {\n      const li = document.createElement(\"li\");\n      const btnEditar = document.createElement(\"button\");\n      const eliminar = document.createElement(\"button\");\n      const contenedorBtn = document.createElement(\"div\");\n      contenedorBtn.setAttribute(\"class\", \"containerBtn\");\n      btnEditar.innerHTML = `<i class=\"bi bi-pencil\"></i>`;\n      btnEditar.setAttribute(\"class\", \"btn-estilos\");\n      btnEditar.setAttribute(\"id\", \"btnActualizar\");\n      eliminar.setAttribute(\"id\", \"btnEliminar\");\n      eliminar.setAttribute(\"class\", \"btn-estilos\");\n      eliminar.style.marginLeft = \"1rem\";\n      eliminar.innerHTML = `<i class=\"bi bi-trash\"></i>`;\n      li.textContent = elemento.tarea;\n      ul.append(li);\n      li.appendChild(contenedorBtn);\n      contenedorBtn.append(btnEditar, eliminar);\n      aTareas.push(elemento);\n\n      events.click('#btnEliminar', ()=>{\n        let confirmar = window.confirm('Si desea eliminar la tarea de en aceptar');\n        if(confirmar === true){\n            aTareas.splice(posicion, 1);\n            //app.todo.create('tarea', aTareas);\n            console.log(aTareas)\n            location.reload();\n            return;\n        }\n      });\n    });\n\n    \n  }\n\n  \n  // if(app.todo.create('tarea')){\n  //     pTareas = app.todo.read('tarea');\n  //     // pTareas = JSON.parse(window.localStorage.getItem('tarea'));\n  //     //console.log(pFrutas);\n  //     pTareas.forEach((elemento, posicion) => {\n  //         const li = document.createElement('li');\n  //         const btnEditar = document.createElement('button');\n  //         const eliminar = document.createElement('button');\n  //         const contenedorBtn = document.createElement('div');\n  //         contenedorBtn.setAttribute('class', 'containerBtn')\n  //         btnEditar.innerHTML=`<i class=\"bi bi-pencil\"></i>`;\n  //         btnEditar.setAttribute('class', 'btn-estilos')\n  //         btnEditar.setAttribute('id', 'btnActualizar')\n  //         eliminar.setAttribute('id', 'btnEliminar');\n  //         eliminar.setAttribute('class', 'btn-estilos')\n  //         eliminar.style.marginLeft='1rem'\n  //         eliminar.innerHTML=`<i class=\"bi bi-trash\"></i>`;\n  //         li.textContent = elemento.tarea;\n  //         ul.append(li);\n  //         li.appendChild(contenedorBtn)\n  //         contenedorBtn.append(btnEditar,eliminar);\n  //         aTareas.push(elemento);\n\n  //         events.click('#btnActualizar', ()=>{\n  //             actualizar.setAttribute('id', 'btnActualizar');\n  //             actualizar.textContent='actualizar'\n  //             form.appendChild(actualizar);\n  //             console.log(elemento.tarea + ' posicion ' + posicion)\n  //             inputTexto.value = elemento.tarea;\n\n  //             events.click('#btnActualizar', (e)=>{\n  //                 e.preventDefault()\n  //                 pTareas.splice(posicion, 1, {aTareas: inputTexto.value});\n  //                 //JSON.parse(window.localStorage.getItem('fruta'));\n  //                 window.localStorage.setItem('tarea', JSON.stringify(pTareas));\n  //                 const btnEditar = document.createElement('button');\n\n  //                 li.append(btnEditar);\n  //                 li.textContent= elemento.tarea;\n  //                 console.log(pTareas);\n  //                 actualizar.remove();\n  //                 location.reload();\n  //             });\n  //         });\n\n  //         events.click('#btnEliminar', ()=>{\n  //             let confirmar = window.confirm('estas seguro de eliminar esta tarea?');\n  //             if(confirmar === true){\n  //                 pTareas.splice(posicion, 1);\n  //                 window.localStorage.setItem('tarea', JSON.stringify(pTareas));\n  //                 location.reload();\n  //             }else{\n  //                 return;\n  //             }\n  //         });\n\n  //     });\n  // }\n})(new _app_App__WEBPACK_IMPORTED_MODULE_3__.App(new _core_Todo__WEBPACK_IMPORTED_MODULE_0__.Todo(new _core_Persistencia__WEBPACK_IMPORTED_MODULE_1__.Persistencia())), new _core_Events__WEBPACK_IMPORTED_MODULE_2__.Events());\n\n\n//# sourceURL=webpack://persistencia/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;