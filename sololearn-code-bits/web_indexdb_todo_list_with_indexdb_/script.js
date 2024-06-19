// Created by Marco Maida

//Me aseguro de que la función indexDB funcione en todos los navegadores
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//Cuando el body se termna de cargar, se carga la BD
function startBD(){
    //Abro (o creo) la BD
    database = indexedDB.open("ToDoList", 1);
    database.onupgradeneeded = function(e){
        active = database.result;
        //Creo una tabla
        object = active.createObjectStore("Lista", {keyPath: 'id', autoIncrement: true});
        //Creo un indice
        object.createIndex('texto', 'text', {unique: true});
        //creo otro indice
        object.createIndex('fecha', 'date', {unique: false});
        //creo otro otro indice
        object.createIndex('completado', 'complete', {unique: false});
    };

    //Si todo fue bien, que cargue la lista
    database.onsuccess = function(e){
        eliminarCompletados();
        cargarLista();

    };

    //Sino, F
    database.onerror = function(e){
        alert("Algo salio terriblemente terrible");
    };
}

//Funcion para agregar nota
function add(){
    var active = database.result;
    //Creo una transaccion para lectura y escritura de Lista
    var data = active.transaction(["Lista"], "readwrite");
    //Especifico el objeto
    var object = data.objectStore("Lista");
    //Almaceno la nota
    var nota = document.querySelector('#texto').value;
    //Si la nota está vacía, informar de ello.    
    if(nota == ""){
        alert("Perdón, pero la nota está vacía");
        return;
    }
    //Sino
    //Almaceno la fecha y hora
    var fecha = new Date();
    //Guardo los datos
    var request = object.put({
        text: nota,
        date: fecha,
        complete: false
    });

    //Si algo sale mal, informarlo
    request.onerror = function(e){
        alert(request.error.name + '\n\n' + request.error.message);
    };

    //Si todo sale bien, cargar la lista devuelta
    data.oncomplete = function(e){
        document.querySelector('#texto').value = '';
        cargarLista();
    };
}

//Funcion para cargar la lista
function cargarLista(){
    var active = database.result;
    //Inicializo la transaccion como "solo leer"
    var data = active.transaction(["Lista"], "readonly");
    var object = data.objectStore("Lista");

    //Variable para almacenar los elementos de la lista
    var elements = [];

    //Por cada elemento del objeto
    object.openCursor().onsuccess = function (e){
        var result = e.target.result;
        if(result === null){
            return;
        }
        //Lo almaceno en elements
        elements.push(result.value);
        result.continue();
    };

    data.oncomplete = function(){
        var outerHTML = '';
        var hoy = new Date();
        var horaHoy = obtenerHora(hoy);
        var fechaHoy = obtenerFecha(hoy);
        for(var key in elements){
            horaNota = obtenerHora(elements[key].date);
            fechaNota = obtenerFecha(elements[key].date);
            fecha = '';
            if(fechaNota == fechaHoy){
                fecha = horaNota;
            }else{
                fecha = fechaNota;
            }
            if(elements[key].complete){
                outerHTML += '\n\
                    <div class="nota completada">\n\
                        <h4>' + elements[key].text + '</h4>\n\
                        <p>' + fecha + '</p>\n\
                        <button type="button" onclick="tildar(' + elements[key].id + ');">Tildar</button>\n\
                        <button type="button" onclick="destildar(' + elements[key].id + ');">Destildar</button>\n\
                    </div>';
            }else{
                outerHTML += '\n\
                    <div class="nota no-completada">\n\
                        <h4>' + elements[key].text + '</h4>\n\
                        <p>' + fecha + '</p>\n\
                        <button type="button" onclick="tildar(' + elements[key].id + ');">Tildar</button>\n\
                        <button type="button" onclick="destildar(' + elements[key].id + ');">Destildar</button>\n\
                    </div>';
            }
            
        }
        if(outerHTML != ''){
            document.querySelector('.lista').innerHTML = outerHTML;
        }else{
            document.querySelector('.lista').innerHTML = '<h3>Actualmente no tienes cosas por hacer</h3>';
        }
    };
}

function tildar(id){
    var active = database.result;
    var data = active.transaction(["Lista"], "readwrite");
    var object = data.objectStore("Lista");

    object.openCursor().onsuccess = function(e){
        var result = e.target.result;
        if(result === null){
            return;
        }
        if (result.value.id == parseInt(id)){
            var updateData = result.value;
            updateData.complete = true;
            var request = result.update(updateData);
            request.onerror = function(e){
                alert("Algo salio terriblemente terrible");
            }
            console.log(result);
        }
        result.continue();
    }

    cargarLista();
}

function destildar(id){
    var active = database.result;
    var data = active.transaction(["Lista"], "readwrite");
    var object = data.objectStore("Lista");

    object.openCursor().onsuccess = function(e){
        var result = e.target.result;
        if(result === null){
            return;
        }
        if (result.value.id == parseInt(id)){
            var updateData = result.value;
            updateData.complete = false;
            var request = result.update(updateData);
            request.onerror = function(e){
                alert("Algo salio terriblemente terrible");
            }
            console.log(result);
        }
        result.continue();
    }

    cargarLista();
}

function eliminarCompletados(){
    var active = database.result;
    var data = active.transaction(["Lista"], "readwrite");
    var object = data.objectStore("Lista");
    object.openCursor().onsuccess = function(e){
        var result = e.target.result;
        if(result === null){
            return;
        }
        if (result.value.complete){
            var request = object.delete(result.value.id);
        }
        result.continue();
    }
}

function borrarTodo(){
    var active = database.result;
    var data = active.transaction(["Lista"], "readwrite");
    var object = data.objectStore("Lista");
    object.clear();
    cargarLista();
}

function obtenerHora(date){
    var hora = [];
    hora.push(date.getHours());
    hora.push(date.getMinutes());

    var resultado = "";

    for(var time in hora){
        if(hora[time] <= 9){
            resultado += "0" + hora[time].toString();
        }else{
            resultado += hora[time].toString();
        }

        resultado += ":";
    }
    resultado = resultado.substring(0, resultado.length - 1);
    return resultado;
}

function obtenerFecha(date){
    var fecha = [];
    fecha.push(date.getDate());
    fecha.push(date.getMonth()+1);
    fecha.push(date.getFullYear());

    var resultado = "";

    for(var time in fecha){
        if(time <= 9){
            resultado += "0" + fecha[time].toString();
        }else{
            resultado += fecha[time].toString();
        }

        resultado += "/";
    }
    resultado = resultado.substring(0, resultado.length - 1);
    return resultado;
}