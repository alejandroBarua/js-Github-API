import  Component from "./component.js";
/* Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica.
    Las respuestas se agrupan en cinco clases:
    
    Respuestas informativas (100–199),
    Respuestas satisfactorias (200–299),
    Redirecciones (300–399),
    Errores de los clientes (400–499),
    y errores de los servidores (500–599). */


// XMLHttpRequest

/* (() => {

    const xhr = new XMLHttpRequest(),
        $xhr = document.querySelector(".xhr");

    xhr.addEventListener("readystatechange", e => {

        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){

            //console.log(xhr.responseText); // este es lo que recibe que esta en formato json

            let json = JSON.parse(xhr.responseText);

            Component($xhr, json);
        }
        else{
            
            let message = xhr.statusText || "ocurrio un error"; // porque puede venir vacio

            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        //aqui pueden ir instrucciones que deben ocurrir independiente del estado de la respuesta recibida
    });

    xhr.open("GET", "https://api.github.com/users/alejandroBarua");
    //xhr.open("GET", "assets/users.json"); // con archivo local
    xhr.send();

})();
 */

// si debemos crear muchos elementos del DOM es mas eficiente ir agregando todo en un fragmento y luego hacer solo una insercion al DOM




// Fetch
/* 
(() => {

    const $fetch = document.querySelector(".fetch");

    fetch("https://api.github.com/users/alejandroBarua")
        .then(res => res.ok? res.json() : Promise.reject(res)) // si quiero recibir un archivo html debo usar el metodo .text() en ves del .json()
        .then(json => { // este then recibe la respuesta del json

            Component($fetch, json);
        })
        .catch(err => {
            let message = err.statusText || "ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            //console.log("esto se ejecutara independientemente del resultado de la promesa fetch");
            // se suele usar para poner un louder de carga
        });
})();


 */

// fetch-async

(() => {

    const $fetchAsync = document.querySelector(".fetch-async");

    async function getData() {
        
        try{
            
            let res = await fetch("https://api.github.com/users/alejandroBarua"),
                json = await res.json();

            if(!res.ok) throw { status:res.status, statusText:res.statusText }

            Component($fetchAsync, json)

        }catch(err){

            let message = err.statusText || "ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;

        }finally{

        }
        
    }

    getData();
        
})();