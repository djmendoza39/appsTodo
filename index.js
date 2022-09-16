

let aFrutas = [];
let pFrutas;
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
        
        aFrutas.push({fruta: inputTexto.value});
        window.localStorage.setItem('fruta', JSON.stringify(aFrutas));
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

if(localStorage.getItem('fruta')){
    pFrutas = JSON.parse(window.localStorage.getItem('fruta'));
    //console.log(pFrutas);
    pFrutas.forEach((elemento, posicion) => {
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
        li.textContent = elemento.fruta;
        ul.append(li); 
        li.appendChild(contenedorBtn)
        contenedorBtn.append(btnEditar,eliminar);
        aFrutas.push(elemento);

        btnEditar.addEventListener('click', ()=>{
            actualizar.setAttribute('id', 'btnActualizar');
            actualizar.textContent='actualizar'
            form.appendChild(actualizar);
            console.log(elemento.fruta + ' posicion ' + posicion)
            inputTexto.value = elemento.fruta;
            
            actualizar.addEventListener('click', (e)=>{
                e.preventDefault()
                pFrutas.splice(posicion, 1, {tarea: inputTexto.value});
                //JSON.parse(window.localStorage.getItem('fruta'));
                window.localStorage.setItem('fruta', JSON.stringify(pFrutas));
                const btnEditar = document.createElement('button');
       
                li.append(btnEditar);
                li.textContent= elemento.tarea;
                console.log(pFrutas);
                actualizar.remove();
                location.reload();
            })
        });

        eliminar.addEventListener('click', ()=>{
            let confirmar = window.confirm('estas seguro de eliminar esta tarea?');
            if(confirmar === true){
                pFrutas.splice(posicion, 1);
                window.localStorage.setItem('fruta', JSON.stringify(pFrutas));
                location.reload();
            }else{
                return;
            }
            
            
        });
        
    });
    

    
    
}










