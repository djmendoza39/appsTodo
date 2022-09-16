

let aTareas = [];
let pTareas;
const btnGuardar = document.querySelector('#btnGuardar');
const actualizar = document.createElement('button');
const inputTexto = document.querySelector('#inputTarea');
const ul = document.querySelector('ul');
const form = document.querySelector('form');


btnGuardar.addEventListener('click', (e)=>{
    e.preventDefault();

    if(inputTexto.value === ''){
        alert('campo vacio....');
    }else{
        
        aTareas.push({tarea: inputTexto.value});
        window.localStorage.setItem('tarea', JSON.stringify(aTareas));
        alert('dato ingresado');
        const li = document.createElement('li');
        const btnEditar = document.createElement('button');
        const eliminar = document.createElement('button')
        const contenedorBtn = document.createElement('div');
        contenedorBtn.setAttribute('class', 'containerBtn')
        eliminar.setAttribute('id', 'eliminar');
        eliminar.innerHTML=`<i class="bi bi-x"></i>`;
        eliminar.style.marginLeft='1rem'
        btnEditar.textContent='editar'
        btnEditar.setAttribute('id', 'btnActualizar', 'class', 'estilosBtn')
        li.textContent = inputTexto.value;
        ul.append(li);
        li.appendChild(contenedorBtn) 
        contenedorBtn.append(btnEditar, eliminar); 
        inputTexto.value='';
        location.reload();

    }
});

function deleteItem(array ,posicion, tarea){
    array.splice(posicion, 1, tarea);
    console.log('elemento modificado');
}

if(localStorage.getItem('tarea')){
    pTareas = JSON.parse(window.localStorage.getItem('tarea'));
    //console.log(pFrutas);
    pTareas.forEach((elemento, posicion) => {
        const li = document.createElement('li');
        const btnEditar = document.createElement('button');
        const eliminar = document.createElement('button');
        const contenedorBtn = document.createElement('div');
        contenedorBtn.setAttribute('class', 'containerBtn')
        btnEditar.innerHTML=`<i class="bi bi-pencil"></i>`;
        btnEditar.setAttribute('class', 'btn-estilos')
        eliminar.setAttribute('id', 'eliminar');
        eliminar.setAttribute('class', 'btn-estilos')
        eliminar.style.marginLeft='1rem'
        eliminar.innerHTML=`<i class="bi bi-trash"></i>`;
        li.textContent = elemento.tarea;
        ul.append(li); 
        li.appendChild(contenedorBtn)
        contenedorBtn.append(btnEditar,eliminar);
        aTareas.push(elemento);

        btnEditar.addEventListener('click', ()=>{
            actualizar.setAttribute('id', 'btnActualizar');
            actualizar.textContent='actualizar'
            form.appendChild(actualizar);
            console.log(elemento.tarea + ' posicion ' + posicion)
            inputTexto.value = elemento.tarea;
            
            actualizar.addEventListener('click', (e)=>{
                e.preventDefault()
                pTareas.splice(posicion, 1, {aTareas: inputTexto.value});
                //JSON.parse(window.localStorage.getItem('fruta'));
                window.localStorage.setItem('tarea', JSON.stringify(pTareas));
                const btnEditar = document.createElement('button');
       
                li.append(btnEditar);
                li.textContent= elemento.tarea;
                console.log(pTareas);
                actualizar.remove();
                location.reload();
            });

            
            
        });

        eliminar.addEventListener('click', ()=>{
            let confirmar = window.confirm('estas seguro de eliminar esta tarea?');
            if(confirmar === true){
                pTareas.splice(posicion, 1);
                window.localStorage.setItem('fruta', JSON.stringify(pTareas));
                location.reload();
            }else{
                return;
            }
            
            
        });
        
    });
    

    
    
}










