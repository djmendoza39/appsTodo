/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nlet aTareas = [];\nlet pTareas;\nconst btnGuardar = document.querySelector('#btnGuardar');\nconst actualizar = document.createElement('button');\nconst inputTexto = document.querySelector('#inputTarea');\nconst ul = document.querySelector('ul');\nconst form = document.querySelector('form');\n\n\nbtnGuardar.addEventListener('click', (e)=>{\n    e.preventDefault();\n\n    if(inputTexto.value === ''){\n        alert('campo vacio....');\n    }else{\n        \n        aTareas.push({tarea: inputTexto.value});\n        window.localStorage.setItem('tarea', JSON.stringify(aTareas));\n        alert('dato ingresado');\n        const li = document.createElement('li');\n        const btnEditar = document.createElement('button');\n        const eliminar = document.createElement('button')\n        const contenedorBtn = document.createElement('div');\n        contenedorBtn.setAttribute('class', 'containerBtn')\n        eliminar.setAttribute('id', 'eliminar');\n        eliminar.innerHTML=`<i class=\"bi bi-x\"></i>`;\n        eliminar.style.marginLeft='1rem'\n        btnEditar.textContent='editar'\n        btnEditar.setAttribute('id', 'btnActualizar', 'class', 'estilosBtn')\n        li.textContent = inputTexto.value;\n        ul.append(li);\n        li.appendChild(contenedorBtn) \n        contenedorBtn.append(btnEditar, eliminar); \n        inputTexto.value='';\n        location.reload();\n\n    }\n});\n\nfunction deleteItem(array ,posicion, tarea){\n    array.splice(posicion, 1, tarea);\n    console.log('elemento modificado');\n}\n\nif(localStorage.getItem('tarea')){\n    pTareas = JSON.parse(window.localStorage.getItem('tarea'));\n    //console.log(pFrutas);\n    pTareas.forEach((elemento, posicion) => {\n        const li = document.createElement('li');\n        const btnEditar = document.createElement('button');\n        const eliminar = document.createElement('button');\n        const contenedorBtn = document.createElement('div');\n        contenedorBtn.setAttribute('class', 'containerBtn')\n        btnEditar.innerHTML=`<i class=\"bi bi-pencil\"></i>`;\n        btnEditar.setAttribute('class', 'btn-estilos')\n        eliminar.setAttribute('id', 'eliminar');\n        eliminar.setAttribute('class', 'btn-estilos')\n        eliminar.style.marginLeft='1rem'\n        eliminar.innerHTML=`<i class=\"bi bi-trash\"></i>`;\n        li.textContent = elemento.tarea;\n        ul.append(li); \n        li.appendChild(contenedorBtn)\n        contenedorBtn.append(btnEditar,eliminar);\n        aTareas.push(elemento);\n\n        btnEditar.addEventListener('click', ()=>{\n            actualizar.setAttribute('id', 'btnActualizar');\n            actualizar.textContent='actualizar'\n            form.appendChild(actualizar);\n            console.log(elemento.tarea + ' posicion ' + posicion)\n            inputTexto.value = elemento.tarea;\n            \n            actualizar.addEventListener('click', (e)=>{\n                e.preventDefault()\n                pTareas.splice(posicion, 1, {aTareas: inputTexto.value});\n                //JSON.parse(window.localStorage.getItem('fruta'));\n                window.localStorage.setItem('tarea', JSON.stringify(pTareas));\n                const btnEditar = document.createElement('button');\n       \n                li.append(btnEditar);\n                li.textContent= elemento.tarea;\n                console.log(pTareas);\n                actualizar.remove();\n                location.reload();\n            });\n\n            \n            \n        });\n\n        eliminar.addEventListener('click', ()=>{\n            let confirmar = window.confirm('estas seguro de eliminar esta tarea?');\n            if(confirmar === true){\n                pTareas.splice(posicion, 1);\n                window.localStorage.setItem('fruta', JSON.stringify(pTareas));\n                location.reload();\n            }else{\n                return;\n            }\n            \n            \n        });\n        \n    });\n    \n\n    \n    \n}\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://persistencia/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;