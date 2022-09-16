import { Todo } from "./core/Todo";
import { Persistencia } from "./core/Persistencia";
import { Events } from "./core/Events";
import { App } from "./app/App";

((app, events) => {
  function deleteItem(array, posicion, tarea) {
    array.splice(posicion, 1, tarea);
    console.log("elemento modificado");
  }

  let aTareas = [];
  let pTareas;
  const btnGuardar = document.querySelector("#btnGuardar");
  const actualizar = document.createElement("button");
  const inputTexto = document.querySelector("#inputTarea");
  const ul = document.querySelector("ul");
  const form = document.querySelector("form");

  events.click("#btnGuardar", (e) => {
    e.preventDefault();

    if (inputTexto.value === "") {
      alert("campo vacio....");
    } else {
      aTareas.push({ tarea: inputTexto.value });
      if (app.todo.create("tarea", aTareas)) {
        alert("dato ingresado");
        const li = document.createElement("li");
        const btnEditar = document.createElement("button");
        const eliminar = document.createElement("button");
        const contenedorBtn = document.createElement("div");
        contenedorBtn.setAttribute("class", "containerBtn");
        eliminar.setAttribute("id", "eliminar");
        eliminar.innerHTML = `<i class="bi bi-x"></i>`;
        eliminar.style.marginLeft = "1rem";
        btnEditar.textContent = "editar";
        btnEditar.setAttribute("id", "btnActualizar");
        li.textContent = inputTexto.value;
        ul.append(li);
        li.appendChild(contenedorBtn);
        contenedorBtn.append(btnEditar, eliminar);
        inputTexto.value = "";
        location.reload();
      }
      // window.localStorage.setItem('tarea', JSON.stringify(aTareas));
    }
  });

  if (app.todo.read("tarea")) {
    let elementos = app.todo.read('tarea');
    elementos.forEach((elemento, posicion) => {
      const li = document.createElement("li");
      const btnEditar = document.createElement("button");
      const eliminar = document.createElement("button");
      const contenedorBtn = document.createElement("div");
      contenedorBtn.setAttribute("class", "containerBtn");
      btnEditar.innerHTML = `<i class="bi bi-pencil"></i>`;
      btnEditar.setAttribute("class", "btn-estilos");
      btnEditar.setAttribute("id", "btnActualizar");
      eliminar.setAttribute("id", "btnEliminar");
      eliminar.setAttribute("class", "btn-estilos");
      eliminar.style.marginLeft = "1rem";
      eliminar.innerHTML = `<i class="bi bi-trash"></i>`;
      li.textContent = elemento.tarea;
      ul.append(li);
      li.appendChild(contenedorBtn);
      contenedorBtn.append(btnEditar, eliminar);
      aTareas.push(elemento);

      events.click('#btnEliminar', ()=>{
        let confirmar = window.confirm('Si desea eliminar la tarea de en aceptar');
        if(confirmar === true){
            aTareas.splice(posicion, 1);
            //app.todo.create('tarea', aTareas);
            console.log(aTareas)
            location.reload();
            return;
        }
      });
    });

    
  }

  
  // if(app.todo.create('tarea')){
  //     pTareas = app.todo.read('tarea');
  //     // pTareas = JSON.parse(window.localStorage.getItem('tarea'));
  //     //console.log(pFrutas);
  //     pTareas.forEach((elemento, posicion) => {
  //         const li = document.createElement('li');
  //         const btnEditar = document.createElement('button');
  //         const eliminar = document.createElement('button');
  //         const contenedorBtn = document.createElement('div');
  //         contenedorBtn.setAttribute('class', 'containerBtn')
  //         btnEditar.innerHTML=`<i class="bi bi-pencil"></i>`;
  //         btnEditar.setAttribute('class', 'btn-estilos')
  //         btnEditar.setAttribute('id', 'btnActualizar')
  //         eliminar.setAttribute('id', 'btnEliminar');
  //         eliminar.setAttribute('class', 'btn-estilos')
  //         eliminar.style.marginLeft='1rem'
  //         eliminar.innerHTML=`<i class="bi bi-trash"></i>`;
  //         li.textContent = elemento.tarea;
  //         ul.append(li);
  //         li.appendChild(contenedorBtn)
  //         contenedorBtn.append(btnEditar,eliminar);
  //         aTareas.push(elemento);

  //         events.click('#btnActualizar', ()=>{
  //             actualizar.setAttribute('id', 'btnActualizar');
  //             actualizar.textContent='actualizar'
  //             form.appendChild(actualizar);
  //             console.log(elemento.tarea + ' posicion ' + posicion)
  //             inputTexto.value = elemento.tarea;

  //             events.click('#btnActualizar', (e)=>{
  //                 e.preventDefault()
  //                 pTareas.splice(posicion, 1, {aTareas: inputTexto.value});
  //                 //JSON.parse(window.localStorage.getItem('fruta'));
  //                 window.localStorage.setItem('tarea', JSON.stringify(pTareas));
  //                 const btnEditar = document.createElement('button');

  //                 li.append(btnEditar);
  //                 li.textContent= elemento.tarea;
  //                 console.log(pTareas);
  //                 actualizar.remove();
  //                 location.reload();
  //             });
  //         });

  //         events.click('#btnEliminar', ()=>{
  //             let confirmar = window.confirm('estas seguro de eliminar esta tarea?');
  //             if(confirmar === true){
  //                 pTareas.splice(posicion, 1);
  //                 window.localStorage.setItem('tarea', JSON.stringify(pTareas));
  //                 location.reload();
  //             }else{
  //                 return;
  //             }
  //         });

  //     });
  // }
})(new App(new Todo(new Persistencia())), new Events());
