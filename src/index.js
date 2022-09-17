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
  const btnGuardar = document.querySelector("#btnGuardar");
  const actualizar = document.createElement("button");
  const inputTexto = document.querySelector("#inputTarea");
  const ul = document.querySelector("ul");
  const form = document.querySelector('form');

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
    let cont = -1;
    app.todo.read('tarea').forEach((elemento, posicion) => {
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
      cont++;
      btnEditar.addEventListener('click', ()=>{
        console.log(`elemento a modificar ${elemento.tarea} en la pos: ${posicion}`);
        inputTexto.value = elemento.tarea;
        const btnModificar = document.createElement('button');
        btnModificar.setAttribute('class', 'btn-estilos-actualizar');
        btnModificar.setAttribute('id', 'btnModificar');
        btnModificar.innerHTML = `<i class="bi bi-arrow-repeat"></i>`;
        form.appendChild(btnModificar);

        btnModificar.addEventListener('click', (e)=>{
          e.preventDefault();
          let confirmar = window.confirm('si deseas modificar el contenido presiona aceptar');
          if(confirmar == true){
            console.log('modificando el contenido');
            window.localStorage.setItem('tarea', JSON.stringify({tarea: inputTexto.value}));
          }
        })
      })
    }); 
    
  }
})(new App(new Todo(new Persistencia())), new Events());